import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import Card from '@ui/Card/Card';

import styles from './App.module.css';
import { useState } from 'react';
import { CurrentPageContext } from '@/contexts/CurrentPageContext';

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
