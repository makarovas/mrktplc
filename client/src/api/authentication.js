import axios from "axios";
import { toast } from "react-toastify";

export const call = async ({
  values,
  history
}) => {
const {
  firstName,
  lastName,
  email,
  password} = values;
  
  try {
    const response = await axios.post(`${process.env.REACT_APP_API}/register`, {
      firstName,
      lastName,
      email,
      password,
    });
    
    toast.success("Register success. Please login.");
    history.push('/login');

  } catch (err) {
    if (err.response.status === 400) {
      toast.error(`${err.response.data}`);
    }
  }
};
