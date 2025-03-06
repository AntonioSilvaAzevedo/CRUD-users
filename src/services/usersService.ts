import { api } from '@/lib/axios';
import { User } from '@/types/user';

export class UsersService {
  static async getUsers(page = 1, limit = 10) {
    const totalResponse = await api.get<User[]>('/users');
    const total = totalResponse.data.length;


    const { data } = await api.get<User[]>('/users', {
      params: { 
        page, 
        limit,
        sortBy: 'createdAt',
        order: 'desc'
      },
    });
    
    
    return {
      users: data,
      total,
      page,
      limit
    };
  }

  static async getUserById(userId: string) {
    const { data } = await api.get<User>(`/users/${userId}`);
    return data;
  }

  static async createUser(userData: Omit<User, 'id'>) {
    const { data } = await api.post<User>('/users', userData);
    return data;
  }

  static async updateUser(userId: string, userData: Partial<User>) {
    const { data } = await api.put<User>(`/users/${userId}`, userData);
    return data;
  }

  static async deleteUser(userId: string) {
    const { data } = await api.delete<User>(`/users/${userId}`);
    return data;
  }
} 