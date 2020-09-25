import { postSchema } from "../schemas";

class Post {
  allPost = () => {
    return new Promise(async (res, rej) => {
      postSchema.find({}, (err, info) => {
        if (err) {
          rej(err);
        } else {
          res(info);
        }
      });
    });
  };

  createPost = (Req, post) => {
    return new Promise(async (res, rej) => {
      const newPost = {
        title: post.title,
        description: post.description,
        photo: post.photo,
        postedBy: Req,
      };
      postSchema.create(newPost, (err, info) => {
        if (err) {
          rej(err);
        } else {
          console.log(info);
          res(info);
        }
      });
    });
  };

  myPost = (id) => {
    return new Promise(async (res, rej) => {
      postSchema.find({ postedBy: id }, (err, info) => {
        if (err) {
          rej(err);
        } else {
          res(info);
        }
      });
    });
  };

  onePost = (id) => {
    return new Promise(async (res, rej) => {
      postSchema.findOne({ _id: id }, (err, info) => {
        if (err) {
          rej(err);
        } else {
          res(info);
        }
      });
    });
  };

  likedPost = (userId, like) => {
    return new Promise(async (res, rej) => {
      postSchema.findByIdAndUpdate(
        like.postId,
        { $push: { likes: userId } },
        {
          new: true,
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

  unlikedPost = (userId, like) => {
    return new Promise(async (res, rej) => {
      postSchema.findByIdAndUpdate(
        like.postId,
        { $pull: { likes: userId } },
        {
          new: true,
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

  commentedPost = (userId, comment) => {
    return new Promise(async (res, rej) => {
      const newComment = {
        text: comment.text,
        postedBy: userId._id,
      };
      postSchema.findByIdAndUpdate(
        comment.postId,
        { $push: { comments: newComment } },
        {
          new: true,
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

  deletedPost = (id) => {
    return new Promise(async (res, rej) => {
      postSchema.findOne({ _id: id }, (err, info) => {
        if (err) {
          rej(err);
        } else {
          res(info);
        }
      });
    });
  };
}

export default new Post();
