import { cn } from "@/lib/utils";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from "lucide-react";
import * as React from "react";

function Pagination({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props}
    />
  );
}

function PaginationContent({
  className,
  ...props
}: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn("flex flex-row items-center gap-0.5", className)}
      {...props}
    />
  );
}

function PaginationItem({ ...props }: React.ComponentProps<"li">) {
  return <li data-slot="pagination-item" {...props} />;
}

interface PaginationLinkProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
}

function PaginationLink({
  className,
  isActive,
  ...props
}: PaginationLinkProps) {
  return (
    <button
      className={cn(
        "min-w-[2rem] h-8 px-1.5 rounded-md text-sm font-medium transition-colors duration-200",
        isActive
          ? "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)]"
          : "bg-[var(--color-secondary)] text-[var(--color-foreground)] hover:bg-[var(--color-secondary-dark)]",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
      {...props}
    />
  );
}

function PaginationPrevious({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "h-6 px-2 rounded-md text-sm font-medium transition-colors duration-200",
        " text-[var(--color-foreground)] hover:bg-[var(--color-secondary-dark)]",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        "flex items-center gap-1",
        className
      )}
      aria-label="Ir para página anterior"
      {...props}
    >
      <ChevronLeftIcon className="h-3.5 w-3.5" />
      <span className="hidden sm:block text-sm">Anterior</span>
    </button>
  );
}

function PaginationNext({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "h-6 px-2 rounded-md text-sm font-medium transition-colors duration-200",
        " text-[var(--color-foreground)] hover:bg-[var(--color-secondary-dark)]",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        "flex items-center gap-1",
        className
      )}
      aria-label="Ir para próxima página"
      {...props}
    >
      <span className="hidden sm:block text-sm">Próxima</span>
      <ChevronRightIcon className="h-3.5 w-3.5" />
    </button>
  );
}

function PaginationEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn(
        "flex h-8 w-8 items-center justify-center text-sm",
        className
      )}
      {...props}
    >
      <MoreHorizontalIcon className="h-3.5 w-3.5" />
      <span className="sr-only">Mais páginas</span>
    </span>
  );
}

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};
