import { chatSchema } from "../schemas";

class Chat {
  delete = (data) => {
    return new Promise((res, rej) => {
      chatSchema.deleteOne({ room: data.room }, (err, info) => {
        if (err) {
          rej(err);
        } else {
          res(info);
        }
      });
    });
  };

  get = (data) => {
    return new Promise((res, rej) => {
      chatSchema.find({ room: data.room }, (err, info) => {
        if (err) {
          rej(err);
        } else {
          res(info);
        }
      });
    });
  };

  create = (data) => {
    return new Promise(async (res, rej) => {
      const chat = {
        room: data.room,
        user: data.user,
        message: data.message,
      };

      chatSchema.create(chat, (err, info) => {
        if (err) {
          rej(err);
        } else {
          res(info);
        }
      });
    });
  };
}

export default new Chat();
