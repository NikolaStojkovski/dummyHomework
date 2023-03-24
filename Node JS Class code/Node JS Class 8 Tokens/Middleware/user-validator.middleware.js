import joi from "joi";

const userSchema = joi.object({
  username: joi.string().required().email(),
  password: joi.string().required().min(8),
  firstName: joi.string().required().min(2),
  lastName: joi.string().required().min(2),
  age: joi.number().required().min(13).max(100),
});

const userValidator = (req, res, next) => {
  const userData = req.body;
  const validate = userSchema.validate(userData);

  console.log(validate);
  if (validate?.error) {
    res.status(400).send(`User data is invalid`);
  } else {
    next();
  }
};

export default userValidator;
