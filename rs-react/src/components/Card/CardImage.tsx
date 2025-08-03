import styles from './Card.module.css';

type Props = {
  image: string;
  name: string;
};

export function CardImage({ image, name }: Props) {
  return (
    <div className={styles.image}>
      <img
        className={styles.image_avatar}
        src={image}
        alt={`Picture of ${name}`}
      />
    </div>
  );
}
