"use client";

import { UserTable } from "@/components/UserTable";
import { CreateUserModal } from "@/components/users/CreateUserModal";
import { useUsers } from "@/hooks/useUsers";
import { Suspense } from "react";

interface HomeProps {
  searchParams: {
    page?: string;
  };
}

export default function Home({ searchParams }: HomeProps) {
  const currentPage = Number(searchParams.page) || 1;
  const limit = 10;

  const { data, isLoading, isError } = useUsers(currentPage, limit);

  if (isLoading || !data) {
    return (
      <main className="container mx-auto px-4 py-8 ">
        <h1 className="text-3xl font-bold mb-8">Lista de Usuários</h1>
        <div className="flex justify-center items-center min-h-[400px]">
          <p>Carregando...</p>
        </div>
      </main>
    );
  }

  if (isError) {
    return (
      <main className="container mx-auto px-4 py-8 ">
        <h1 className="text-3xl font-bold mb-8">Lista de Usuários</h1>
        <div className="flex justify-center items-center min-h-[400px]">
          <p className="text-red-500">Erro ao carregar usuários.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Lista de Usuários</h1>
        <CreateUserModal />
      </div>
      <Suspense fallback={<p>Carregando...</p>}>
        <UserTable
          users={data.users}
          currentPage={currentPage}
          totalPages={Math.ceil(data.total / limit)}
        />
      </Suspense>
    </main>
  );
}
