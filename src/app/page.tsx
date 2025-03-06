import { UserTableContent } from "@/components/tables/UserTableContent";
import { CreateUserModal } from "@/components/users/CreateUserModal";
import { Suspense } from "react";

interface HomeProps {
  searchParams: {
    page?: string;
  };
}

export default function Home({ searchParams }: HomeProps) {
  const currentPage = Number(searchParams.page) || 1;
  const limit = 10;

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Lista de Usuários</h1>
        <CreateUserModal />
      </div>
      <Suspense fallback={<p>Carregando...</p>}>
        <UserTableContent currentPage={currentPage} limit={limit} />
      </Suspense>
    </main>
  );
}
