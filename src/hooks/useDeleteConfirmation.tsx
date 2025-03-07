import toast from "react-hot-toast";
import { DeleteConfirmationToast } from "@/components/ui/delete-confirmation-toast";

interface DeleteConfirmationOptions {
  onConfirm: () => void;
  onSuccess?: () => void;
  onError?: () => void;
}

interface UseDeleteConfirmationReturn {
  showDeleteConfirmation: (itemName: string, options: DeleteConfirmationOptions) => void;
}

export function useDeleteConfirmation(): UseDeleteConfirmationReturn {
  const showDeleteConfirmation = (
    itemName: string,
    { onConfirm }: DeleteConfirmationOptions
  ) => {
    toast(
      (t) => (
        <DeleteConfirmationToast
          itemName={itemName}
          onConfirm={onConfirm}
          onDismiss={() => toast.dismiss(t.id)}
        />
      ),
      {
        duration: 5000,
        position: "top-center",
      }
    );
  };

  return { showDeleteConfirmation };
} 