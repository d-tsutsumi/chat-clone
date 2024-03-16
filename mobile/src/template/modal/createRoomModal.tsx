import ModalLayout from '@/shared/ui/layout/modalLayout';
import { CreateRoomForm } from '@/use-case/create-room';

export default function CreateRoomModal() {
  return (
    <ModalLayout>
      <CreateRoomForm />
    </ModalLayout>
  );
}
