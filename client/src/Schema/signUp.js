import * as yup from "yup";

const signUp = yup.object().shape({
  userName: yup.string().required("provide userName"),
  password: yup.string().required("provide password"),
  country: yup.string().oneOf(["canada", "united state", "united kingdom"]),
});

export default signUp;
