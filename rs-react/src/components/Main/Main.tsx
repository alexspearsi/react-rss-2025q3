import './Main.css';
import { Component, Children } from 'react';
import { Button } from '../Button/Button';

type Props = {
  children: React.ReactNode;
  onErrorButtonClick: () => void;
};

export class Main extends Component<Props> {
  state = {
    showButton: false,
  };

  componentDidMount() {
    this.setState({ showButton: true });
  }

  render() {
    const { children, onErrorButtonClick } = this.props;
    const { showButton } = this.state;
    const childrenCount = Children.count(children);

    return (
      <main className="main">
        {childrenCount === 0 ? (
          <p className="main__nothing-found">
            We searched the multiverse... and found nothing
          </p>
        ) : (
          children
        )}

        {showButton && (
          <Button
            className={`button main__button-error`}
            onClick={onErrorButtonClick}
          >
            Invoke Error
          </Button>
        )}
      </main>
    );
  }
}
