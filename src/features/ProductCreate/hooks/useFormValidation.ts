import type { IFormFieldsVariables } from "@/types/app";
// import {
//   signinSchema,
//   signupSchema,
//   verifyCodeSchema,
// } from "@/validations/auth";
import z from "zod";

const useFormValidations = (props: IFormFieldsVariables) => {
  const { slug } = props;

  const getValidationsSchema = () => {
    switch (slug) {
      // case Pages.SIGNIN:
      //   return signinSchema;
      // case Pages.SIGNUP:
      //   return signupSchema;
      // case Pages.VERIFY_ACCOUNT:
      //   return verifyCodeSchema;
      default:
        return z.object({});
    }
  };

  return { getValidationsSchema };
};

export default useFormValidations;
