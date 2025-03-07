import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { UserFormValues } from "../../schemas/userFormSchema";

interface UserFormFieldsProps {
  form: UseFormReturn<UserFormValues>;
}

export function UserFormFields({ form }: UserFormFieldsProps) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input {...field} label="Nome" placeholder="Digite o nome" />
              </FormControl>
              <FormMessage className="text-xs text-red-500 mt-1" />
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
              <FormMessage className="text-xs text-red-500 mt-1" />
            </FormItem>
          )}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="job"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input {...field} label="Cargo" placeholder="Digite o cargo" />
              </FormControl>
              <FormMessage className="text-xs text-red-500 mt-1" />
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
              <FormMessage className="text-xs text-red-500 mt-1" />
            </FormItem>
          )}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
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
              <FormMessage className="text-xs text-red-500 mt-1" />
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
              <FormMessage className="text-xs text-red-500 mt-1" />
            </FormItem>
          )}
        />
      </div>
    </>
  );
}
