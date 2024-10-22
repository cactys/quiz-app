import styles from './Logo.module.css';

import logoImage from '@assets/logo__desktop.svg';

/**
 *
 * @param {string} title альтернативное название логотипа, аттрибут alt=?
 * @returns {JSX.Element} JSX.Element
 */

const Logo = ({ title }) => {
  return (
    <a href="#" className={styles.logo}>
      <img
        className={styles.logo__img}
        src={logoImage}
        alt={title}
        width={178}
        height={48}
      />
    </a>
  );
};

export default Logo;
