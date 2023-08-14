import * as yup from "yup";
const passwordRxg =
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$";

const agentSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string(),
  password: yup.string(),
  // .matches(passwordRxg, {
  //   message:
  //     "Please, enter aleast one upperCase, lowerCase, charaater and number",
  // }
  // )
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password"), null], "password"),
  // phone: yup.number().required("number is required"),
  // image: yup.string().required("image  is required"),
  level: yup.string().required("Level is required"),
  linkedin: yup.string(),
  facebook: yup.string(),
  instagram: yup.string(),
  twitter: yup.string(),
});

export default agentSchema;
