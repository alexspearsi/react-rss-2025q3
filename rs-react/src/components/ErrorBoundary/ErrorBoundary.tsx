import './ErrorBoundary.css';
import { Component, type ErrorInfo } from 'react';

type Props = {
  children: React.ReactNode;
};

type State = {
  hasError: boolean;
};

export class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Ooopss.. error', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2 className={'error-message'}>
          In this reality something went wrong
        </h2>
      );
    }

    return this.props.children;
  }
}
