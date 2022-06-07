import { createContext } from "react";

interface IFormContext {
  form: any;
  setForm: any;
}

const FormContext = createContext({} as IFormContext);

export default FormContext;
