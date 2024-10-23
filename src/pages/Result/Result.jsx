import Button from '@UI/Button/Button';
import Card from '@UI/Card/Card';

import imageResult from '@assets/images/image__result.svg';

/**
 *
 * @param {() => void} handleSwitchPage void function
 * @returns {JSX.Element} JSX.Element
 */

const Result = ({ handleSwitchPage }) => {
  return (
    <>
      <Card
        image={{
          src: imageResult,
          width: 196,
          height: 196,
          placement: 'center',
        }}
        title="Результат"
      />
      <Button
        title="Попробовать еще"
        htmlType="button"
        handleButton={handleSwitchPage}
      />
    </>
  );
};

export default Result;
