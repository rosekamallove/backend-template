import { object, string, TypeOf } from "zod";

export const createUserSchema = object({
  body: object({
    firstName: string().min(1, "First Name is required"),

    lastName: string().min(1, "Last Name is required"),

    password: string({
      required_error: "Name is required",
    }).regex(
      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
      "Enter an 8 letter password, with at least a symbol, upper and lower case letters and a number"
    ),

    passwordConfirmation: string().min(1, "Please confirm passwords"),

    email: string({
      required_error: "Email is required",
    }).email("Not a valid email"),
  }).refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords do not match",
    path: ["passwordConfirmation"],
  }),
});

export type CreateUserInput = Omit<
  TypeOf<typeof createUserSchema>,
  "body.passwordConfirmation"
>;
