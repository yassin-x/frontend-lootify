import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { IFormField } from "@/types/app";
import { Controller, type Control, type FieldErrors } from "react-hook-form";

interface Props extends IFormField {
  errors: FieldErrors;
  control: Control<Record<string, unknown>>;
}

export default function TextField({
  label,
  name,
  type,
  placeholder,
  disabled,
  autoFocus,
  control,
  errors,
}: Props) {
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
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <Input
            className=""
            type={type}
            onChange={(e) => {
              const val = e.target.value;
              if (type === "number") {
                onChange(val === "" ? 0 : Number(val));
              } else {
                onChange(val);
              }
            }}
            onBlur={onBlur}
            value={
              type === "number" ? (value || 0).toString() : String(value || "")
            }
            placeholder={placeholder || ""}
            disabled={disabled || false}
            autoFocus={autoFocus || false}
            ref={ref}
            id={name}
            aria-invalid={errors[name] ? "true" : "false"}
          />
        )}
      />
      {errors[name] && (
        <p className="text-sm text-destructive">
          {errors[name]?.message as string}
        </p>
      )}
    </div>
  );
}
