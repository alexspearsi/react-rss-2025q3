'use client';

import styles from './Spinner.module.css';
import { Component } from 'react';

export class Spinner extends Component {
  render() {
    return <div data-testid='spinner' className={styles.spinner} />;
  }
}
