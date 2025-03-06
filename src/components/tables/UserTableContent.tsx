"use client";

import { UserTable } from "@/components/UserTable";
import { useUsers } from "@/hooks/useUsers";

interface UserTableContentProps {
  currentPage: number;
  limit: number;
}

export function UserTableContent({
  currentPage,
  limit,
}: UserTableContentProps) {
  const { data, isLoading, isError } = useUsers(currentPage, limit);

  if (isLoading || !data) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <p>Carregando...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <p className="text-red-500">Erro ao carregar usuários.</p>
      </div>
    );
  }

  return (
    <UserTable
      users={data.users}
      currentPage={currentPage}
      totalPages={Math.ceil(data.total / limit)}
    />
  );
}
