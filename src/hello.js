export const hello = (req, res) => {
  res.send("Hello, How can i Help you?");
};

export const stranger = (req, res) => {
  res.send("Hello stranger! What are you doing here? ");
};

export const name = (req, res) => {
  const { name } = req.params;
  res.send(`Hello ${name}`);
};

export const newPerson = (req, res) => {
  const { firstName, lastName, age, race } = req.body;
  res.send(`Hello , Welcome ${firstName} ${lastName} ${age} ${race}`);
};
