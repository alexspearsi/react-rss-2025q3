import './Card.css';

type Props = {
  children: React.ReactNode;
};

export function CardTitle({ children }: Props) {
  return <h2 className="card__title">{children}</h2>
}