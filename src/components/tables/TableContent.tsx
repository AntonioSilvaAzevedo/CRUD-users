import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useDeleteUser } from "@/hooks/useUsers";
import { User } from "@/types/user";
import { Trash2 } from "lucide-react";
import { CreateUserModal } from "../users/CreateUserModal";

interface TableContentProps {
  users: User[];
  onUserDeleted?: () => void;
}

export function TableContent({ users, onUserDeleted }: TableContentProps) {
  const { mutate: deleteUser } = useDeleteUser();

  const handleDeleteUser = (userId: string) => {
    if (window.confirm("Tem certeza que deseja excluir este usuário?")) {
      deleteUser(userId, {
        onSuccess: () => {
          onUserDeleted?.();
        },
      });
    }
  };

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nome</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Empresa</TableHead>
            <TableHead>Cargo</TableHead>
            <TableHead>Localização</TableHead>
            <TableHead className="w-[100px]">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>
                <CreateUserModal
                  user={user}
                  trigger={
                    <button className="font-medium hover:text-[var(--color-primary-dark)] hover:underline text-left">
                      {user.name}
                    </button>
                  }
                  onSuccess={onUserDeleted}
                />
              </TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.company}</TableCell>
              <TableCell>{user.job}</TableCell>
              <TableCell>{`${user.city}, ${user.country}`}</TableCell>
              <TableCell>
                <Button
                  variant="secondary"
                  onClick={() => handleDeleteUser(user.id)}
                  className="text-red-500 hover:text-red-700 hover:bg-red-50"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
