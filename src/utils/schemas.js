import * as yup from "yup";

export const contactSchema = yup.object().shape({
  string: yup.string().required("Vennligst skriv en ID"),
  number: yup.number().required("Vennligst skriv et tall"),
});
