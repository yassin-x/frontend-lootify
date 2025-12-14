import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { IFormField } from "@/types/app";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Controller, type Control, type FieldErrors } from "react-hook-form";

interface Props extends IFormField {
  errors: FieldErrors;
  control: Control<Record<string, unknown>>;
}

export default function PasswordField({
  label,
  name,
  placeholder,
  disabled,
  autoFocus,
  control,
  errors,
}: Props) {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <Label
          htmlFor={name}
          className="text-sm font-medium text-card-foreground"
        >
          {label}
        </Label>
      )}
      <div className="relative">
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <Input
              type={showPassword ? "text" : "password"}
              onChange={onChange}
              onBlur={onBlur}
              value={String(value || "")}
              ref={ref}
              placeholder={placeholder || ""}
              disabled={disabled || false}
              autoFocus={autoFocus || false}
              autoComplete="current-password"
              id={name}
              className=""
              aria-invalid={errors[name] ? "true" : "false"}
            />
          )}
        />
        <button
          type="button"
          onClick={handleClickShowPassword}
          onMouseDown={handleMouseDownPassword}
          className="absolute end-3 top-1/2 -translate-y-1/2 flex items-center justify-center h-4 w-4 text-muted-foreground hover:text-foreground transition-colors"
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? (
            <EyeOff className="h-4 w-4" />
          ) : (
            <Eye className="h-4 w-4" />
          )}
        </button>
      </div>
      {errors[name] && (
        <p className="text-sm text-destructive">
          {errors[name]?.message as string}
        </p>
      )}
    </div>
  );
}
