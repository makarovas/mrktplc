import axios from "axios";

export const call = async ({ firstName, lastName, email, password }) => {
  try {
    const response = await axios.post(`http://localhost:8000/api/register`, {
      firstName,
      lastName,
      email,
      password,
    });
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};
