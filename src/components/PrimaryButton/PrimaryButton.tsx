import img from '../../icons/primary-button.svg';

import './PrimaryButton.scss';

export const PrimaryButton = () => {
  return (
    <button className="primary-button">
      <img src={img} alt="primary button icon" />
    </button>
  );
};
