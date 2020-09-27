import { connect } from "mongoose";

connect(process.env.ATLAS, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
})
  .then(() => console.log("database connected"))
  .catch((error) => console.log(error));
