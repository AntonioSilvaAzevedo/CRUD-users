import * as z from "zod";

export const userFormSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  job: z.string().min(2, "Cargo deve ter pelo menos 2 caracteres"),
  company: z.string().min(2, "Empresa deve ter pelo menos 2 caracteres"),
  city: z.string().min(2, "Cidade deve ter pelo menos 2 caracteres"),
  country: z.string().min(2, "País deve ter pelo menos 2 caracteres"),
});

export type UserFormValues = z.infer<typeof userFormSchema>; 