import axios from "axios";
import { toast } from "react-toastify";

export const call = async ({
  firstName,
  lastName,
  email,
  password,
}, ...rest) => {
  const {push} = rest[0];
  try {
    const response = await axios.post(`http://localhost:8000/api/register`, {
      firstName,
      lastName,
      email,
      password,
    });
    
    toast.success("Register success. Please login.");
    push('/login');
  } catch (err) {
    console.log(err);
    if (err.response.status === 400) {
      toast.error(`${err.response.data}`);
    }
  }
};
