import mongoose from "mongoose";
import bcrypt from "bcrypt";

const { Schema } = mongoose;

export const userSchema = new Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: "First Name is required",
    },
    lastName: {
      type: String,
      trim: true,
      required: "Last Name is required",
    },
    email: {
      type: String,
      trim: true,
      required: "Email Name is required",
      unique: true,
    },
    password: {
      type: String,
      trim: true,
      required: "Password Name is required",
      min: 6,
      max: 64,
    },
    stripe_account_id: "",
    stripe_seller: {},
    stripeSession: {},
  },
  { timestamps: true }
);

userSchema.pre("save", function (next) {
  let user = this;
  // hash password
  if (user.isModified("password")) {
    return bcrypt.hash(user.password, 12, function (err, hash) {
      if (err) {
        console.log("BCRYPT HAS ERROR", err);
        return next(err);
      }
      user.password = hash;
      return next();
    });
  } else {
    return next();
  }
});

export default mongoose.model("User", userSchema);
