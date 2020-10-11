import { userSchema } from "../schemas";
import { hashPassword } from "../utils";

class Profile {
  getUser = (userName) => {
    return new Promise((res, rej) => {
      userSchema.findOne({ userName: userName }, (err, info) => {
        if (err) {
          rej(err);
        } else {
          res(info);
        }
      });
    });
  };

  getUserProfile = (id) => {
    return new Promise((res, rej) => {
      userSchema.findOne({ _id: id }, (err, info) => {
        if (err) {
          rej(err);
        } else {
          res(info);
        }
      });
    });
  };

  updateUser = (user) => {
    return new Promise((res, rej) => {
      userSchema.updateOne(
        { _id: user._id },
        {
          firstName: user.firstName,
          lastName: user.lastName,
          userName: user.userName,
          country: user.country,
          mobile: user.mobile,
          gender: user.gender,
          image: user.image,
        },
        (err, info) => {
          if (err) {
            rej(err);
          } else {
            res(info);
          }
        }
      );
    });
  };

  updateUserPassword = (user) => {
    return new Promise(async (res, rej) => {
      userSchema.updateOne(
        { _id: user._id },
        {
          password: await hashPassword(user.password),
        },
        (err, info) => {
          if (err) {
            rej(err);
          } else {
            res(info);
          }
        }
      );
    });
  };

  updateUserFollowing = (followId, user) => {
    const roomId = () => {
      for (let elm of user.followers) {
        if (elm.user.toString() === followId.toString()) {
          return elm.roomId;
        }
      }
    };

    return new Promise(async (res, rej) => {
      const room = roomId() || Math.random(36).toString().slice(2);
      userSchema.updateOne(
        { _id: followId, "followers.user": { $ne: user._id } },
        {
          $push: {
            followers: {
              user: user._id,
              roomId: room,
            },
          },
        },
        { new: true },
        (err, info) => {
          if (err) {
            rej(err);
          }
          userSchema
            .updateOne(
              { _id: user._id, "following.user": { $ne: followId } },
              {
                $push: { following: followId },
              },
              { new: true }
            )
            .select("-password")
            .exec((err, info) => {
              if (err) {
                rej(err);
              } else {
                res(info);
              }
            });
        }
      );
    });
  };

  updateUserUnFollowing = (unfollowId, userId) => {
    return new Promise(async (res, rej) => {
      userSchema.findByIdAndUpdate(
        unfollowId,
        {
          $pull: { followers: { user: userId } },
        },
        { new: true },
        (err, info) => {
          if (err) {
            rej(err);
          }
          userSchema
            .findByIdAndUpdate(
              userId,
              {
                $pull: { following: unfollowId },
              },
              { new: true }
            )
            .select("-password")
            .exec((err, info) => {
              if (err) {
                rej(err);
              } else {
                res(info);
              }
            });
        }
      );
    });
  };
}

export default new Profile();
