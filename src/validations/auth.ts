import z from "zod";
import { isValidPhoneNumber } from "libphonenumber-js";

export const signinSchema = z.object({
  email: z
    .email({ message: "البريد الالكتروني غير صحيح" })
    .min(1, "البريد الالكتروني مطلوب")
    .trim(),
  password: z.string().min(6, "كلمة المرور يجب ان تكون على الاقل 6 حروف"),
});

export const signupSchema = z
  .object({
    email: z
      .email({ message: "البريد الالكتروني غير صحيح" })
      .min(1, "البريد الالكتروني مطلوب")
      .trim(),
    phoneNumber: z
      .string()
      .min(1, { message: "رقم الجوال مطلوب" })
      .refine((phone) => isValidPhoneNumber(phone), {
        message: "رقم الجوال غير صحيح",
      }),
    fname: z
      .string()
      .min(1, "الاسم الاول مطلوب")
      .regex(/^[\u0600-\u06FF\s]+$/, "يجب أن يكون الاسم باللغة العربية فقط"),
    lname: z
      .string()
      .min(1, "الاسم الاخير مطلوب")
      .regex(/^[\u0600-\u06FF\s]+$/, "يجب أن يكون الاسم باللغة العربية فقط"),
    password: z
      .string()
      .min(6, "كلمة المرور يجب ان تكون على الاقل 6 حروف")
      .regex(/(?=.*[0-9])/, "يجب ان تحتوي كلمة المرور على رقم")
      .regex(/(?=.*[a-z])/, "يجب ان تحتوي كلمة المرور على حرف صغير")
      .regex(/(?=.*[A-Z])/, "يجب ان تحتوي كلمة المرور على حرف كبير")
      .regex(/(?=.*[!@#$%^&*])/, "يجب ان تحتوي كلمة المرور على رمز")
      .regex(
        /(?=.*[a-zA-Z0-9!@#$%^&*])/,
        "يجب ان تحتوي كلمة المرور على حرف ورقم"
      ),
    confirmPassword: z
      .string()
      .min(6, "كلمة المرور يجب ان تكون على الاقل 6 حروف")
      .regex(/(?=.*[0-9])/, "يجب ان تحتوي كلمة المرور على رقم")
      .regex(/(?=.*[a-z])/, "يجب ان تحتوي كلمة المرور على حرف صغير")
      .regex(/(?=.*[A-Z])/, "يجب ان تحتوي كلمة المرور على حرف كبير")
      .regex(/(?=.*[!@#$%^&*])/, "يجب ان تحتوي كلمة المرور على رمز")
      .regex(
        /(?=.*[a-zA-Z0-9!@#$%^&*])/,
        "يجب ان تحتوي كلمة المرور على حرف ورقم"
      ),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "كلمة المرور غير متطابقة",
    path: ["confirmPassword"],
  });

export const verifyCodeSchema = z.object({
  otp: z
    .string()
    .min(6, "كود التحقق غير صحيح")
    .max(6, "كود التحقق غير صحيح")
    .regex(/^\d{6}$/, "رمز التحقق يجب ان يحتوي علي ارقام فقط"),
});

export type ISignin = z.infer<typeof signinSchema>;
export type ISignup = z.infer<typeof signupSchema>;
export type IVerifyCode = z.infer<typeof verifyCodeSchema>;
