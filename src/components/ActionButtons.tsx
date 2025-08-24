import { useState } from 'react';
import Modal from './Modal/Modal';
import ControlledForm from './ControlledForm/ControlledForm';

export default function ActionButtons() {
  const [isFirstModalOpen, setIsFirstModalOpen] = useState<boolean>(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState<boolean>(false);

  return (
    <>
      <div>
        <button onClick={() => setIsFirstModalOpen(true)}>1st button</button>

        {isFirstModalOpen && (
          <Modal onClose={() => setIsFirstModalOpen(false)}>
            <ControlledForm />
          </Modal>
        )}
      </div>

      <div>
        <button onClick={() => setIsSecondModalOpen(true)}>2nd button</button>
        {isSecondModalOpen && (
          <Modal onClose={() => setIsSecondModalOpen(false)}>
            <ControlledForm />
          </Modal>
        )}
      </div>
    </>
  );
}
