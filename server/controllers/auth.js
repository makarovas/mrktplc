export const showMessage = (req, res) => {
  res.status(200).send(req.params.message);
};

export const register = async (req, res) => {
  const request = await req.body;
  console.log(request);
  const result = await res.status(200).send(req.params.params);
};
