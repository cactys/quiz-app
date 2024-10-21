import { useState } from 'react';
import Header from '../Header/Header';
import Card from '../UI/Card/Card';
import { CurrentPageContext } from '@/contexts/CurrentPageContext';

import styles from './App.module.css';

/**
 *
 * @returns JSX.Element
 */

const App = () => {
  const [currentPage] = useState('question');

  return (
    <div className={styles.page}>
      <Header />
      <CurrentPageContext.Provider value={currentPage}>
        <Card />
      </CurrentPageContext.Provider>
      <Footer />
    </div>
  );
};

export default App;
