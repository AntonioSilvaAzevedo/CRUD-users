"use client";

import { User } from "@/types/user";
import { useRouter } from "next/navigation";
import { TableContent } from "./tables/TableContent";
import { TablePagination } from "./tables/TablePagination";

interface UserTableProps {
  users: User[];
  currentPage: number;
  totalPages: number;
}

export function UserTable({ users, currentPage, totalPages }: UserTableProps) {
  const router = useRouter();

  const handleUserUpdated = () => {
    router.refresh();
  };

  return (
    <div className="overflow-hidden shadow-bk-md">
      <TableContent users={users} onUserDeleted={handleUserUpdated} />
      <div className="bg-secondary-dark rounded-lg mt-2">
        <TablePagination currentPage={currentPage} totalPages={totalPages} />
      </div>
    </div>
  );
}
