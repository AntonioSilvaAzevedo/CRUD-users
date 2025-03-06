"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { User } from "@/types/user";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

interface UserTableProps {
  users: User[];
  currentPage: number;
  totalPages: number;
}

export function UserTable({ users, currentPage, totalPages }: UserTableProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    router.push(`/?${params.toString()}`);
  };

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    pages.push(1);
    let start = Math.max(currentPage - 1, 2);
    let end = Math.min(currentPage + 1, totalPages - 1);

    if (currentPage <= 3) {
      end = Math.min(maxVisiblePages - 1, totalPages - 1);
    } else if (currentPage >= totalPages - 2) {
      start = Math.max(totalPages - maxVisiblePages + 2, 2);
    }

    if (start > 2) pages.push("...");
    for (let i = start; i <= end; i++) pages.push(i);
    if (end < totalPages - 1) pages.push("...");
    if (totalPages > 1) pages.push(totalPages);

    return pages;
  };

  return (
    <div className="overflow-hidden shadow-bk-md">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nome</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Empresa</TableHead>
            <TableHead>Cargo</TableHead>
            <TableHead>Localização</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>
                <Link
                  href={`/users/${user.id}`}
                  className="font-medium hover:text-[var(--color-primary-dark)] hover:underline"
                >
                  {user.name}
                </Link>
              </TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.company}</TableCell>
              <TableCell>{user.job}</TableCell>
              <TableCell>{`${user.city}, ${user.country}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className=" bg-secondary-dark rounded-lg mt-2">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => handlePageChange(currentPage - 1)}
                className={`
                  rounded-bk
                  ${
                    currentPage === 1
                      ? "opacity-50 cursor-not-allowed"
                      : "cursor-pointer"
                  }
                  hover:bg-[var(--color-secondary)] transition-colors
                `}
              />
            </PaginationItem>

            {getPageNumbers().map((page, index) => (
              <PaginationItem key={index}>
                {typeof page === "number" ? (
                  <PaginationLink
                    onClick={() => handlePageChange(page)}
                    isActive={currentPage === page}
                    className={`
                      cursor-pointer rounded-bk
                      ${
                        currentPage === page
                          ? "bg-[var(--color-primary)] text-white"
                          : "hover:bg-[var(--color-secondary)] transition-colors"
                      }
                    `}
                  >
                    {page}
                  </PaginationLink>
                ) : (
                  <span className="px-4 py-2 text-[var(--color-neutral-60)]">
                    {page}
                  </span>
                )}
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationNext
                onClick={() => handlePageChange(currentPage + 1)}
                className={`
                  rounded-bk
                  ${
                    currentPage === totalPages
                      ? "opacity-50 cursor-not-allowed"
                      : "cursor-pointer"
                  }
                  hover:bg-[var(--color-secondary)] transition-colors
                `}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
