import { Pages } from "@/constants/enums";
import type { IFormField, IFormFieldsVariables } from "@/types/app";

const useFormFields = ({ slug }: IFormFieldsVariables) => {
  const signinFields = (): IFormField[] => [
    {
      label: "البريد الالكتروني",
      name: "email",
      type: "email",
      placeholder: "ادخل البريد الالكتروني",
      autoFocus: true,
    },
    {
      label: "كلمة المرور",
      name: "password",
      type: "password",
      placeholder: "••••••••",
    },
  ];

  const signupFields = (): IFormField[] => [
    {
      label: "الاسم الاول",
      name: "fname",
      type: "text",
      placeholder: "ادخل الاسم الاول",
      autoFocus: true,
    },
    {
      label: "الاسم الاخير",
      name: "lname",
      type: "text",
      placeholder: "ادخل الاسم الاخير",
    },
    {
      label: "البريد الالكتروني",
      name: "email",
      type: "email",
      placeholder: "ادخل البريد الالكتروني",
    },
    {
      label: "رقم الجوال",
      name: "phoneNumber",
      type: "phone",
      placeholder: "ادخل رقم الجوال",
    },
    {
      label: "كلمة المرور",
      name: "password",
      type: "password",
      placeholder: "••••••••",
    },
    {
      label: "تأكيد كلمة المرور",
      name: "confirmPassword",
      type: "password",
      placeholder: "••••••••",
    },
  ];

  const verifyCode = (): IFormField[] => [
    {
      label: "كود التحقق",
      name: "otp",
      type: "otp",
      placeholder: "ادخل كود التحقق",
    },
  ];

  const getFormFields = (): IFormField[] => {
    switch (slug) {
      case Pages.SIGNIN:
        return signinFields();
      case Pages.SIGNUP:
        return signupFields();
      case Pages.VERIFY_ACCOUNT:
        return verifyCode();
      default:
        return [];
    }
  };

  return {
    getFormFields,
  };
};

export default useFormFields;
