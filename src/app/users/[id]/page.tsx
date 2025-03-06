import { Card } from "@/components/ui/Card";
import { UsersService } from "@/services/usersService";
import Link from "next/link";

interface UserPageProps {
  params: {
    id: string;
  };
}

export default async function UserPage({ params }: UserPageProps) {
  const user = await UsersService.getUserById(params.id);

  return (
    <main className="container mx-auto px-4 py-8">
      <Link
        href="/"
        className="text-blue-600 hover:underline mb-8 inline-block"
      >
        ← Voltar para lista
      </Link>

      <Card className="max-w-2xl mx-auto">
        <div className="flex flex-col items-center space-y-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-2">{user.name}</h1>
            <p className="text-gray-600">{user.email}</p>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <div className="bg-gray-50 p-3 rounded">
                <p className="text-gray-600">Cargo</p>
                <p className="font-medium">{user.job}</p>
              </div>

              <div className="bg-gray-50 p-3 rounded">
                <p className="text-gray-600">Empresa</p>
                <p className="font-medium">{user.company}</p>
              </div>

              <div className="bg-gray-50 p-3 rounded">
                <p className="text-gray-600">Conta</p>
                <p className="font-medium">{user.account}</p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="bg-gray-50 p-3 rounded">
                <p className="text-gray-600">Localização</p>
                <p className="font-medium">
                  {user.city}, {user.country}
                </p>
              </div>

              <div className="bg-gray-50 p-3 rounded">
                <p className="text-gray-600">Nome da Mãe</p>
                <p className="font-medium">{user.mother}</p>
              </div>

              <div className="bg-gray-50 p-3 rounded">
                <p className="text-gray-600">Membro desde</p>
                <p className="font-medium">
                  {new Date(user.createdAt).toLocaleDateString("pt-BR")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </main>
  );
}
