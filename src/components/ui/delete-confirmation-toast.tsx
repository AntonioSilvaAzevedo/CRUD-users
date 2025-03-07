import { Button } from "@/components/ui/button";

interface DeleteConfirmationToastProps {
  itemName: string;
  onConfirm: () => void;
  onDismiss: () => void;
}

export function DeleteConfirmationToast({
  itemName,
  onConfirm,
  onDismiss,
}: DeleteConfirmationToastProps) {
  return (
    <div className="flex flex-col gap-2">
      <p>
        Tem certeza que deseja excluir <strong>{itemName}</strong>?
      </p>
      <div className="flex justify-end gap-2">
        <Button variant="secondary" onClick={onDismiss} className="h-8">
          Cancelar
        </Button>
        <Button
          variant="secondary"
          onClick={() => {
            onConfirm();
            onDismiss();
          }}
          className="h-8 bg-red-500 hover:bg-red-600 text-white"
        >
          Excluir
        </Button>
      </div>
    </div>
  );
}
