import { Link, useNavigate } from "react-router-dom";
import useFormFields from "../hooks/useFormFields";
import useFormValidations from "../hooks/useFormValidations";
import { useAuth } from "../hooks/useAuthStore";
import { useForm, type Control, type FieldErrors } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { Pages, RoutesNav } from "@/constants/enums";
import type { IFormField } from "@/types/app";
import FormFields from "@/components/shared/FormFields";
import { Button } from "@/components/ui/button";
import { LoadingButton } from "@/components/shared/Loader";

const AuthForm: React.FC<{
  slug: string;
}> = ({ slug }) => {
  const navigate = useNavigate();
  const { getFormFields } = useFormFields({ slug });
  const { getValidationsSchema } = useFormValidations({ slug });

  const { login, register, loading, verifyEmail } = useAuth();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const DEFAULT_VALUES: any = {};
  for (const field of getFormFields()) {
    DEFAULT_VALUES[field.name] = "";
  }

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(getValidationsSchema()),
    mode: "onChange",
    defaultValues: DEFAULT_VALUES,
  });

  const onSubmit = useCallback(
    async (data: Record<string, unknown>) => {
      try {
        if (slug === Pages.SIGNIN) {
          const { message } = await login({
            email: data.email as string,
            password: data.password as string,
          });

          toast.success(message);
          navigate(`/${RoutesNav.USER}/${Pages.PROFILE}`, {
            replace: true,
          });
        } else if (slug === Pages.SIGNUP) {
          const { message, status } = await register({
            email: data.email as string,
            phoneNumber: data.phoneNumber as string,
            fname: data.fname as string,
            lname: data.lname as string,
            password: data.password as string,
            confirmPassword: data.confirmPassword as string,
          });

          if (status === "success") {
            toast.success(message);
            navigate(`/${RoutesNav.AUTH}/${Pages.VERIFY_ACCOUNT}`, {
              replace: true,
            });
          }
        } else if (slug === Pages.VERIFY_ACCOUNT) {
          const { message, status } = await verifyEmail({
            code: data.otp as string,
          });

          if (status === "success") {
            toast.success(message);
            navigate(`/${RoutesNav.USER}/${Pages.PROFILE}`, {
              replace: true,
            });
          }
        }
      } catch (error) {
        const errorMessage =
          (error as { response?: { data?: { message?: string } } })?.response
            ?.data?.message || "حدث خطأ ما";
        toast.error(errorMessage);
      }
    },
    [slug, login, navigate, register, verifyEmail]
  );

  const formLoading = isSubmitting || loading;

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {getFormFields().map((field: IFormField) => (
          <div className="mb-4" key={field.name}>
            <FormFields {...field} control={control} errors={errors} />
          </div>
        ))}

        {slug === Pages.SIGNIN && (
          <ForgotPassword control={control} errors={errors} />
        )}

        <SubmitButton
          slug={slug}
          disabled={formLoading}
          loading={formLoading}
        />

        <NavigationLink slug={slug} />
      </form>
    </>
  );
};

export default AuthForm;

function ForgotPassword({
  control,
  errors,
}: {
  errors: FieldErrors;
  control: Control<Record<string, unknown>>;
}) {
  return (
    <div className="flex items-center justify-between mb-6">
      <FormFields
        type="checkbox"
        name="remember"
        aria-describedby="remember"
        id="remember"
        label="تذكرني"
        control={control}
        errors={errors}
      />
      <Link
        to={`/${RoutesNav.AUTH}/${Pages.SIGNIN}`}
        className="text-sm font-medium text-primary hover:underline"
      >
        هل نسيت كلمة المرور؟
      </Link>
    </div>
  );
}

function SubmitButton({
  slug,
  loading,
  ...rest
}: {
  slug: string;
  loading?: boolean;
} & React.ComponentProps<typeof Button>) {
  const renderButtonText = () => {
    switch (slug) {
      case Pages.SIGNIN:
        return "تسجيل الدخول";
      case Pages.SIGNUP:
        return "إنشاء حساب";
      case Pages.VERIFY_ACCOUNT:
        return "تأكيد";

      default:
        return "تسجيل الدخول";
    }
  };

  return (
    <Button type="submit" className="w-full h-10" {...rest}>
      <LoadingButton
        loading={loading}
        loadingText="جار التحميل..."
        loaderSize="sm"
      >
        {renderButtonText()}
      </LoadingButton>
    </Button>
  );
}

function NavigationLink({ slug }: { slug: string }) {
  const { resendCode, loading } = useAuth();
  const [countdown, setCountdown] = useState(60); // Start with 60 seconds

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (countdown > 0 && slug === Pages.VERIFY_ACCOUNT) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [countdown, slug]);

  const handleResendOtp = async () => {
    try {
      // Using forgotPassword as a placeholder for resend OTP
      const { status, message } = await resendCode(); // This should be the user's email
      if (status === "success") {
        toast.success(message);
      }

      setCountdown(60); // Reset countdown after successful resend
    } catch (error) {
      console.error("Resend OTP failed:", error);
      toast.error(
        (error as { response?: { data?: { message?: string } } })?.response
          ?.data?.message || "فشل في إعادة إرسال رمز التحقق"
      );
      // toast.error("فشل في إرسال رمز التحقق");
    }
  };

  const getText = () => {
    switch (slug) {
      case Pages.SIGNIN:
        return {
          desc: "ليس لديك حساب؟",
          title: "سجل الآن",
          href: `/${RoutesNav.AUTH}/${Pages.SIGNUP}`,
          isButton: false,
        };
      case Pages.SIGNUP:
        return {
          desc: "لديك حساب بالفعل؟",
          title: "تسجيل الدخول",
          href: `/${RoutesNav.AUTH}/${Pages.SIGNIN}`,
          isButton: false,
        };
      case Pages.VERIFY_ACCOUNT:
        return {
          desc: "لم تستلم الرمز؟",
          title: countdown > 0 ? `إعادة إرسال (${countdown}s)` : "إعادة إرسال",
          href: "",
          isButton: true,
          disabled: countdown > 0 || loading,
          onClick: handleResendOtp,
        };
      default:
        return {
          desc: "هل تحتاج إلى مساعدة؟",
          title: "اتصل بنا",
          href: Pages.CONTACT,
          isButton: false,
        };
    }
  };

  const linkData = getText();

  return (
    <div className="mt-6 flex items-center gap-2">
      <p className="text-card-foreground text-sm">{linkData.desc}</p>
      {linkData.isButton ? (
        <Button
          type="button"
          onClick={linkData.onClick}
          disabled={linkData.disabled}
          className={`text-sm font-medium transition-colors duration-200 ${
            linkData.disabled
              ? " cursor-not-allowed"
              : "text-primary hover:underline"
          }`}
        >
          {linkData.title}
        </Button>
      ) : (
        <Link
          to={linkData.href}
          replace
          className="text-primary hover:underline text-sm font-medium transition-colors duration-200"
        >
          {linkData.title}
        </Link>
      )}
    </div>
  );
}
