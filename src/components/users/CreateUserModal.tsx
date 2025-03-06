"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { User } from "@/types/user";
import { useState } from "react";
import { CreateUserForm } from "./CreateUserForm";

interface CreateUserModalProps {
  user?: User | null;
  trigger?: React.ReactNode;
  onSuccess?: () => void;
}

export function CreateUserModal({
  user,
  trigger,
  onSuccess,
}: CreateUserModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {trigger ? (
        <DialogTrigger asChild>{trigger}</DialogTrigger>
      ) : (
        <DialogTrigger asChild>
          <Button>{user ? "Editar Usuário" : "Novo Usuário"}</Button>
        </DialogTrigger>
      )}
      <DialogContent className="sm:max-w-[600px] bg-secondary-dark">
        <DialogHeader>
          <DialogTitle className="text-center">
            {user ? "Editar Usuário" : "Novo Usuário"}
          </DialogTitle>
        </DialogHeader>
        <CreateUserForm
          user={user}
          onSuccess={() => {
            setOpen(false);
            onSuccess?.();
          }}
          onClose={() => setOpen(false)}
        />
      </DialogContent>
    </Dialog>
  );
}
