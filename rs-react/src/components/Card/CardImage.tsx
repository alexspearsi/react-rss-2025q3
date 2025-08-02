import './Card.css';

type Props = {
  image: string;
  name: string;
};

export function CardImage({ image, name }: Props) {
  return (
    <div className='card__image'>
      <img
        className='card__image-avatar'
        src={image}
        alt={`Picture of ${name}`}
      />
    </div>
  );
}
