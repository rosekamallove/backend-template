import { object, string, TypeOf } from "zod";

export const createUserSchema = object({
  body: object({
    firstName: string().min(1, "First Name is required"),

    lastName: string().min(1, "Last Name is required"),

    password: string({
      required_error: "Name is required",
    }).regex(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      "Password (> 8 chars): uppercase, lowercase and special characthers"
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
