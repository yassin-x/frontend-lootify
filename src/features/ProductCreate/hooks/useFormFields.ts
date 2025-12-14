import type { IFormField, IFormFieldsVariables } from "@/types/app";

const useFormFields = ({ slug }: IFormFieldsVariables) => {

  const getFormFields = (): IFormField[] => {
    switch (slug) {
      // case Pages.SIGNIN:
      //   return signinFields();
      // case Pages.SIGNUP:
      //   return signupFields();
      // case Pages.VERIFY_ACCOUNT:
      //   return verifyCode();
      default:
        return [];
    }
  };

  return {
    getFormFields,
  };
};

export default useFormFields;
