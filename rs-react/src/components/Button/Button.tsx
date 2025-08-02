import './Button.css';
import { type ReactNode, type MouseEvent } from 'react';

type Props = {
  className: string;
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

export function Button({ className, children, onClick }: Props) {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}
