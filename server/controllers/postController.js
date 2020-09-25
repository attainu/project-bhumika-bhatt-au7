import { Post } from "../models";

const postController = {
  posts: async (req, res) => {
    try {
      const posts = await Post.allPost();
      res.status(200).json(posts);
    } catch (error) {
      res.status(400).send(error._message);
    }
  },
  createPost: async (req, res) => {
    try {
      console.log(req.body);
      console.log(req.user);
      const post = await Post.createPost(req.user, req.body);
      res.status(200).json({ post });
    } catch (error) {
      console.log(error);
      res.status(400).send(error._message);
    }
  },
  myPosts: async (req, res) => {
    try {
      const posts = await Post.myPost(req.user._id);
      res.status(200).json(posts);
    } catch (error) {
      res.status(400).send(error._message);
    }
  },
  onePost: async (req, res) => {
    try {
      const post = await Post.onePost(req.params.postId);
      res.status(200).json({ post });
    } catch (error) {
      res.status(400).send(error._message);
    }
  },
  likePost: async (req, res) => {
    try {
      const likes = await Post.likedPost(req.user._id, req.body);
      res.status(200).json({ likes });
    } catch (error) {
      res.status(400).send(error._message);
    }
  },
  unlikePost: async (req, res) => {
    try {
      const likes = await Post.unlikedPost(req.user._id, req.body);
      res.status(200).json({ likes });
    } catch (error) {
      res.status(400).send(error._message);
    }
  },
  commentPost: async (req, res) => {
    try {
      const comments = await Post.commentedPost(req.user, req.body);
      await comments.populate("comments.postedBy", "_id firstName");
      res.status(200).json({ comments });
    } catch (error) {
      res.status(400).send(error._message);
    }
  },
  deletePost: async (req, res) => {
    try {
      const post = await Post.deletedPost(req.params.postId);
      if (!post) {
        return res.status(404).json({ message: "post not found" });
      }
      if (post.postedBy.toString() === req.user._id.toString()) {
        await post.remove();
        return res.json({ message: "successfully deleted" });
      } else {
        console.log("not deleted");
      }
    } catch (error) {
      res.status(400).send(error._message);
    }
  },
};

export default postController;
