import './Card.css';

type Props = {
  children: React.ReactNode;
};

export function CardDescription({ children }: Props) {
  return <div className="card__description">{children}</div>;
}
