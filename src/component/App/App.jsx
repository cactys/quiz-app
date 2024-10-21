import { useState } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import { CurrentPageContext } from '@/contexts/CurrentPageContext';

import styles from './App.module.css';

/**
 *
 * @returns JSX.Element
 */

const App = () => {
  const [currentPage, setCurrentPage] = useState('start');

  const handleSwitchPage = () => {
    setCurrentPage(
      currentPage === 'start'
        ? 'question'
        : currentPage === 'question'
        ? 'result'
        : 'start'
    );
  };

  console.log(currentPage);

  return (
    <div className={styles.page}>
      <Header />
      <CurrentPageContext.Provider value={currentPage}>
        <Main handleSwitchPage={handleSwitchPage} />
      </CurrentPageContext.Provider>
      <Footer />
    </div>
  );
};

export default App;
