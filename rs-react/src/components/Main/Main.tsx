import './Main.css';
import { Component, Children } from 'react';

type Props = {
  children: React.ReactNode;
};

export class Main extends Component<Props> {
  render() {
    const { children } = this.props;
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
      </main>
    );
  }
}
