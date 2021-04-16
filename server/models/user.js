import mongoose from "mongoose";

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

export default mongoose.model("User", userSchema);
