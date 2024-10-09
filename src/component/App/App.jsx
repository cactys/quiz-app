import Header from '../Header/Header';
import Card from '../UI/Card/Card';
import Footer from '../Footer/Footer';

import styles from './App.module.css';

/**
 *
 * @param children JSX.Element
 * @returns JSX.Element
 */

const App = ({ children }) => {
  return (
    <div className={styles.page}>
      <Header />
      <Card children={children} />
      <Footer />
    </div>
  );
};

export default App;
