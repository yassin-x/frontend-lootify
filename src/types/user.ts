import type { Role } from "@/constants/enums";

export type User = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  phone_number?: string;
  role: Role;
  verifiedCode: string;
  verifiedCodeExpires: Date;
  verifiedEmail: boolean;
  Order: unknown;
};

export type AuthResponse = {
  success: boolean;
  status: string;
  message: string;
  data?: {
    user?: User;
    tokens?: {
      access_token: string;
    };
  };
};

export type LoginRequest = {
  email: string;
  password: string;
};
export type RegisterRequest = {
  email: string;
  password: string;
  fname: string;
  lname: string;
  confirmPassword: string;
  phoneNumber: string;
};
