import styles from './Logo.module.css';

import logoImage from '@assets/logo__desktop.svg';

/**
 *
 * @param title альтернативное название логотипа, аттрибут alt=?
 * @returns JSX.Element
 */

const Logo = ({ title }) => {
  return (
    <a href="#" className={styles.link}>
      <img
        className={styles.logoImage}
        src={logoImage}
        alt={title}
        width={178}
        height={48}
      />
    </a>
  );
};

export default Logo;
