import styles from './Modal.module.css';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  children: React.ReactNode;
  onClose: () => void;
};

export default function Modal({ children, onClose }: Props) {
  useEffect(() => {
    function closeOnEsc(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        onClose();
      }
    }

    document.body.addEventListener('keydown', closeOnEsc);

    return () => {
      document.body.removeEventListener('keydown', closeOnEsc);
    };
  }, [onClose]);

  return createPortal(
    <div className={styles.modal} onClick={() => onClose()}>
      <div className={styles.container} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={() => onClose()}>
          X
        </button>
        {children}
      </div>
    </div>,
    document.body,
  );
}
