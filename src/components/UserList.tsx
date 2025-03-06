"use client";

import Link from "next/link";
import { User } from "../types/user";
import { Card } from "./ui/Card";

interface UserListProps {
  users: User[];
}

export function UserList({ users }: UserListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {users.map((user) => (
        <Link href={`/users/${user.id}`} key={user.id}>
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center space-x-4">
              <div className="relative w-16 h-16">
                {/* <Image
                  src={user.avatar}
                  alt={user.name}
                  fill
                  className="rounded-full object-cover"
                /> */}
              </div>
              <div>
                <h3 className="text-lg font-semibold">{user.name}</h3>
                <p className="text-gray-600">{user.email}</p>
              </div>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
}
