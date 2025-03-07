import { User } from '@/types/user';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { UsersService } from '../services/usersService';

interface UsersResponse {
  users: User[];
  total: number;
  totalPages: number;
}

export function useUsers(page = 1, limit = 10) {
  return useQuery<UsersResponse>({
    queryKey: ['users', page, limit],
    queryFn: async () => {
      const response = await UsersService.getUsers(page, limit);
      return {
        ...response,
        totalPages: Math.ceil(response.total / limit),
      };
    },
  });
}

export function useUser(userId: string) {
  return useQuery({
    queryKey: ['user', userId],
    queryFn: () => UsersService.getUserById(userId),
  });
}

export function useCreateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (userData: Omit<User, 'id'>) => UsersService.createUser(userData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });
}

export function useUpdateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ userId, userData }: { userId: string; userData: Partial<User> }) =>
      UsersService.updateUser(userId, userData),
    onSuccess: (_, { userId }) => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
      queryClient.invalidateQueries({ queryKey: ['user', userId] });
    },
  });
}

export function useDeleteUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (userId: string) => UsersService.deleteUser(userId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });
} 