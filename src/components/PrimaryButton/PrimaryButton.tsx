import './PrimaryButton.scss';
import img from '../../icons/primary-button.svg';

export const PrimaryButton = () => {
  return (
    <button className="primary-button">
      <img src={img} alt="primary button icon" />
    </button>
  );
};
