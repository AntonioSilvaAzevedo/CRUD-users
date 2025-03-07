"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useCreateUser, useUpdateUser } from "@/hooks/useUsers";
import { userFormSchema } from "@/schemas/userFormSchema";
import { User } from "@/types/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

interface CreateUserFormProps {
  user?: User | null;
  onSuccess?: () => void;
  onClose?: () => void;
}

export function CreateUserForm({
  user,
  onSuccess,
  onClose,
}: CreateUserFormProps) {
  const { mutate: createUser } = useCreateUser();
  const { mutate: updateUser } = useUpdateUser();

  const form = useForm<z.infer<typeof userFormSchema>>({
    resolver: zodResolver(userFormSchema),
    defaultValues: user
      ? {
          name: user.name,
          email: user.email,
          job: user.job,
          company: user.company,
          city: user.city,
          country: user.country,
        }
      : undefined,
  });

  const onSubmit = (values: z.infer<typeof userFormSchema>) => {
    if (user?.id) {
      updateUser(
        { userId: user.id, userData: values },
        {
          onSuccess: () => {
            toast.success("Usuário atualizado com sucesso!");
            form.reset();
            onClose?.();
            onSuccess?.();
          },
        }
      );
    } else {
      createUser(
        {
          ...values,
        },
        {
          onSuccess: () => {
            toast.success("Usuário criado com sucesso!");
            form.reset();
            onClose?.();
            onSuccess?.();
          },
        }
      );
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input {...field} label="Nome" placeholder="Digite o nome" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  label="Email"
                  type="email"
                  placeholder="Digite o email"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="job"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input {...field} label="Cargo" placeholder="Digite o cargo" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  label="Empresa"
                  placeholder="Digite a empresa"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  label="Cidade"
                  placeholder="Digite a cidade"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input {...field} label="País" placeholder="Digite o país" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end gap-2">
          <Button type="button" variant="secondary" onClick={onClose}>
            Cancelar
          </Button>
          <Button type="submit">{user ? "Salvar" : "Criar"}</Button>
        </div>
      </form>
    </Form>
  );
}
