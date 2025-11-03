export enum RoutesNav {
  ROOT = "/",
  AUTH = "auth",
  ADMIN = "admin",
  USER = "user",
}

export enum Pages {
  // ROOT
  PRODUCTS = "products",
  CHECKOUT = "checkout",
  OUR_US = "our-us",
  // AUTH
  SIGNIN = "signin",
  SIGNUP = "signup",
  // USER
  PROFILE = "profile",
  // ADMIN
  DASHBOARD = "dashboard",
}

export enum InputTypes {
  TEXT = "text",
  EMAIL = "email",
  PASSWORD = "password",
  NUMBER = "number",
  DATE = "date",
  TIME = "time",
  DATE_TIME_LOCAL = "datetime-local",
  CHECKBOX = "checkbox",
  RADIO = "radio",
  SELECT = "select",
  PHONE = "phone",
  TEXTAREA = "textarea",
  FILE = "file",
  IMAGE = "image",
  OTP = "otp",
  COLOR = "color",
  RANGE = "range",
  TEL = "tel",
  URL = "url",
  SEARCH = "search",
  MONTH = "month",
  WEEK = "week",
  HIDDEN = "hidden",
  MULTI_SELECT = "multi select",
}

export enum Navigate {
  NEXT = "next",
  PREV = "prev",
}

export enum Environments {
  PROD = "production",
  DEV = "development",
}

export enum SortOrder {
  ASC = "asc",
  DESC = "desc",
}

export enum SortBy {
  CREATED_AT = "createdAt",
  UPDATED_AT = "updatedAt",
  NAME = "name",
  EMAIL = "email",
  PHONE = "phone",
  STATUS = "status",
  START_DATE = "startDate",
  END_DATE = "endDate",
}
