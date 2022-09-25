import bcrypt from "bcrypt";
import config from "config";
import mongoose from "mongoose";
import { EventDocument } from "./events.model";

export interface UserDocument extends mongoose.Document {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  isCreator: boolean;
  events: Array<EventDocument>;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const UserSchema = new mongoose.Schema<UserDocument>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    isCreator: {
      type: Boolean,
      default: true,
    },
    events: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event",
      },
    ],
  },
  { timestamps: true }
);

UserSchema.pre("save", async function (next) {
  let user = this;

  if (!user.isModified("password")) return next();

  const salt = await bcrypt.genSalt(config.get("saltWorkFactor"));
  const hash = await bcrypt.hash(user.password, salt);

  user.password = hash;

  return next();
});

UserSchema.methods.comparePassword = async function (
  candidatePassword: string
) {
  const user = this;
  return bcrypt.compare(candidatePassword, user.password).catch((_e) => false);
};

const User = mongoose.model<UserDocument>("User", UserSchema);
export default User;
