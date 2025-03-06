import { api } from '@/lib/axios';
import { Task } from '@/types/task';

export class TasksService {
  static async getUserTasks(userId: string) {
    const { data } = await api.get<Task[]>(`/users/${userId}/tasks`);
    return data;
  }

  static async getTaskById(userId: string, taskId: string) {
    const { data } = await api.get<Task>(`/users/${userId}/tasks/${taskId}`);
    return data;
  }

  static async createTask(userId: string, taskData: Omit<Task, 'id' | 'userId'>) {
    const { data } = await api.post<Task>(`/users/${userId}/tasks`, {
      ...taskData,
      userId,
    });
    return data;
  }

  static async updateTask(userId: string, taskId: string, taskData: Partial<Task>) {
    const { data } = await api.put<Task>(
      `/users/${userId}/tasks/${taskId}`,
      taskData
    );
    return data;
  }

  static async deleteTask(userId: string, taskId: string) {
    const { data } = await api.delete<Task>(`/users/${userId}/tasks/${taskId}`);
    return data;
  }
} 