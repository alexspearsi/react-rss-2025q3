import './Card.css';
import { Component } from 'react';

type Props = {
  icon: 'status' | 'location' | 'creation';
  text: string;
};

export class CardDetail extends Component<Props> {
  render() {
    const { icon, text } = this.props;

    return (
      <div className="card__row">
        <img src={`/icons/${icon}.svg`} alt={`${icon} icon`} />
        <p>{text}</p>
      </div>
    );
  }
}
