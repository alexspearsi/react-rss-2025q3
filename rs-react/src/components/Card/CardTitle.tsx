import './Card.css';
import { Component } from 'react';

type Props = {
  children: React.ReactNode;
};

export class CardTitle extends Component<Props> {
  render() {
    return <h2 className="card__title">{this.props.children}</h2>;
  }
}
