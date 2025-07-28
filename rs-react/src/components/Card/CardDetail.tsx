import './Card.css';

type Props = {
  icon: 'status' | 'location' | 'creation';
  text: string;
};

export function CardDetail({ icon, text }: Props) {
    return (
    <div className="card__row">
      <img src={`/icons/${icon}.svg`} alt={`${icon} icon`} />
      <p>{text}</p>
    </div>
  );
}