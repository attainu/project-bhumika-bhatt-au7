import { userSchema } from "../schemas";
import { postSchema } from "../schemas";

class OtherUser {
  profile = (id) => {
    return new Promise((res, rej) => {
      userSchema
        .findOne({ _id: id })
        .select("-password")
        .exec((err, info1) => {
          if (err) {
            rej(err);
          } else {
            postSchema
              .find({ postedBy: id })
              .populate("postedBy", "_id userName")
              .exec((err, info2) => {
                if (err) {
                  rej(err);
                } else {
                  res(info1, info2);
                }
              });
          }
        });
    });
  };
}

export default new OtherUser();
