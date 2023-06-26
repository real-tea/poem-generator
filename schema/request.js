import * as yup from "yup";

export const requestValidationSchema = yup.object().shape({
    name : yup.string().required("Please enter your name"),
    toName : yup().string().required("Please enter the name of special someone"),
    feelings : yup().
    string()
    .min(10 , "Please enter feelings in a descriptive manner")
    .required("Feelings cant be void 😔"),
});