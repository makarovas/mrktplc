import axios from "axios";
import { toast } from "react-toastify";

export const call = async ({
  firstName,
  lastName,
  email,
  password,
  callback,
}) => {
  try {
    const response = await axios.post(`http://localhost:8000/api/register`, {
      firstName,
      lastName,
      email,
      password,
    });
    console.log(response);
    toast.success("Register success. Please login.");
  } catch (err) {
    console.log(err);
    if (err.response.status === 400) {
      toast.error(`${err.response.data}`);
    }
  }
};
