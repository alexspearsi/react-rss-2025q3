import './Card.css';
import { Component } from 'react';

type Props = {
  image: string;
  name: string;
};

export class CardImage extends Component<Props> {
  render() {
    const { image, name } = this.props;

    return (
      <div className="card__image">
        <img
          className="card__image-avatar"
          src={image}
          alt={`Picture of ${name}`}
        />
      </div>
    );
  }
}
