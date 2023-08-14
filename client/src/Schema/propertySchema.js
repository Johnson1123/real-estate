import * as yup from "yup";

const propertySchema = yup.object().shape({
  title: yup.string().required("title required"),
  note: yup.string().required("note required"),
  address: yup.string().required("address required"),
  location: yup.string().required("location required"),
  type: yup.string().required("type required"),
  image: yup.string().required("Image required"),
  price: yup.number().required("Price required"),
  discount: yup.number().required("discounted price required"),
});

export default propertySchema;
