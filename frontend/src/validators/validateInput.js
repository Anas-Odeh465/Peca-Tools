import { z } from "zod";

export const loginSchema = z.object({
  username: z.string().trim().min(1, "usernameRequired").min(3, "usernameMin").max(32, "usernameMax"),
  password: z.string().min(1, "passwordRequired").max(128, "passwordMax"),
});

export const forgotPasswordSchema = z.object({
  username: z.string().trim().min(1, "usernameRequired").min(3, "usernameMin").max(32, "usernameMax"),
});