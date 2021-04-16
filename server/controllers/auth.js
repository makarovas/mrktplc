import User from "../models/user";

export const register = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  //validation
  if (!firstName) return res.status(400).send("First Name is required");
  if (!lastName) return res.status(400).send("Last Name is required");
  if (!password || password.length < 6)
    return res
      .status(400)
      .send("Password less should be more than 6 characters");
  // if (!password) return res.status(400).send("Password is required");
  // if (!email) return res.status(400).send("Email Name is required");

  let userExist = await User.findOne({ email }).exec();
  if (userExist) return res.status(200).send("Email is already taken");
  // register
  const user = new User(req.body);
  console.log(user);

  try {
    await user.save();
    console.log(`USER CREATED ${user}`);

    return res.json({ ok: true });
  } catch (e) {
    console.log(`CREATE USER FAILED ${e}`);
    return res.status(400).send("Error. Try again");
  }
};
