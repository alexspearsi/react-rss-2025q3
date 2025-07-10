import './Card.css';
import { Component } from 'react';

type Props = {
  children: React.ReactNode;
};

export class CardDescription extends Component<Props> {
  render() {
    return <div className="card__description">{this.props.children}</div>;
  }
}
