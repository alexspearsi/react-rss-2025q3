import './Main.css';
import { Component } from 'react';

type WithClassName = {







  
  children: React.ReactNode;
};

class Main extends Component<WithClassName> {
  render() {
    const { children } = this.props;

    return <main className="main">{children}</main>;
  }
}

export default Main;
