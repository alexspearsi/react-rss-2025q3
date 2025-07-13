import './Button.css';
import { Component, type ReactNode, type MouseEvent } from 'react';

type Props = {
  className: string;
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

export class Button extends Component<Props> {
  render() {
    const { className, children, onClick } = this.props;

    return (
      <button className={`button ${className}`} onClick={onClick}>
        {children}
      </button>
    );
  }
}
