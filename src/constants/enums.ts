export enum RoutesNav {
  ROOT = "/",
  AUTH = "auth",
  ADMIN = "admin",
  USER = "user",
}

export enum Pages {
  PRODUCTS = "products",
  OUR_US = "our-us",
  CONTACT = "contact",
  PRIVACY = "privacy",
  TERMS = "terms",
  SIGNIN = "signin",
  SIGNUP = "signup",
  VERIFY_ACCOUNT = "verify-account",
  // User routes
  PROFILE = "profile",
  CHECKOUT = "checkout",
  ORDERS = "orders",
  // Admin routes
  PRODUCT_UPDATE = "product-update",
  PRODUCT_CREATE = "product-create",
  PRODUCT_DELETE = "product-delete",
  ORDER_CREATE = "order-create",
  ORDER_UPDATE = "order-update",
  ORDER_DELETE = "order-delete",
  DISCOUNTS = "discounts",
  DISCOUNT_CREATE = "discount-create",
  DISCOUNT_UPDATE = "discount-update",
  DISCOUNT_DELETE = "discount-delete",
}

export enum Role {
  USER = "USER",
  PREMIUM = "PREMIUM",
  ADMIN = "ADMIN",
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
