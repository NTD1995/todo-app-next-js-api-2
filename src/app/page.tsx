import styles from './page.module.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from 'src/app/layout.tsx';

ReactDOM.render(<App />, document.getElementById('root'));

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>HOME</div>
    </main>
  );
}