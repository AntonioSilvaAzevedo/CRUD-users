
import { Task } from '@/types/task';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { TasksService } from '../services/tasksService';

export function useUserTasks(userId: string) {
  return useQuery({
    queryKey: ['tasks', userId],
    queryFn: () => TasksService.getUserTasks(userId),
  });
}

export function useTask(userId: string, taskId: string) {
  return useQuery({
    queryKey: ['task', userId, taskId],
    queryFn: () => TasksService.getTaskById(userId, taskId),
  });
}

export function useCreateTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ userId, taskData }: { userId: string; taskData: Omit<Task, 'id' | 'userId'> }) =>
      TasksService.createTask(userId, taskData),
    onSuccess: (_, { userId }) => {
      queryClient.invalidateQueries({ queryKey: ['tasks', userId] });
    },
  });
}

export function useUpdateTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ userId, taskId, taskData }: { userId: string; taskId: string; taskData: Partial<Task> }) =>
      TasksService.updateTask(userId, taskId, taskData),
    onSuccess: (_, { userId, taskId }) => {
      queryClient.invalidateQueries({ queryKey: ['tasks', userId] });
      queryClient.invalidateQueries({ queryKey: ['task', userId, taskId] });
    },
  });
}

export function useDeleteTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ userId, taskId }: { userId: string; taskId: string }) =>
      TasksService.deleteTask(userId, taskId),
    onSuccess: (_, { userId }) => {
      queryClient.invalidateQueries({ queryKey: ['tasks', userId] });
    },
  });
} 