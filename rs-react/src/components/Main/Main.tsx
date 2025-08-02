import './Main.css';
import { Children, useEffect, useState } from 'react';
import { Button } from '../Button/Button';

type Props = {
  children: React.ReactNode;
  onErrorButtonClick: () => void;
};

export function Main({ children, onErrorButtonClick }: Props) {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    setShowButton(true);
  }, []);

  const childrenCount = Children.count(children);

  return (
    <main className='main'>
      {childrenCount === 0 ? (
        <p className='main__nothing-found'>
          We searched the multiverse... and found nothing
        </p>
      ) : (
        children
      )}

      {showButton && (
        <Button
          className={'button main__button-error'}
          onClick={onErrorButtonClick}
        >
          Invoke Error
        </Button>
      )}
    </main>
  );
}
