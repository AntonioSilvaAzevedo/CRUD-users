import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useRouter, useSearchParams } from "next/navigation";

interface TablePaginationProps {
  currentPage: number;
  totalPages: number;
}

export function TablePagination({
  currentPage,
  totalPages,
}: TablePaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    router.push(`/?${params.toString()}`);
  };

  return (
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

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <PaginationItem key={page}>
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
  );
}
