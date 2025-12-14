import type { Control, FieldErrors } from "react-hook-form";
import type { IFormField } from "@/types/app";
import React from "react";
import { InputTypes } from "@/constants/enums";
import TextField from "./TextField";
import PasswordField from "./PasswordField";
import Checkbox from "./Checkbox";

interface Props extends IFormField {
  errors: FieldErrors;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  fileType?: "image" | "video" | "any";
  accept?: string;
  maxSize?: number;
  allowedTypes?: string[];
}

export default function FormFields(props: Props) {
  const { type } = props;

  const renderField = (): React.ReactNode => {
    if (type === InputTypes.PASSWORD) {
      return <PasswordField {...props} />;
    }

    if (type === InputTypes.CHECKBOX) {
      return <Checkbox {...props} />;
    }

    return <TextField {...props} />;
  };

  return <>{renderField()}</>;
}
