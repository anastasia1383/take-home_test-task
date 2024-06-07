import installButton from '../../icons/install-button.svg';

import './InstallButton.scss';

export const InstallButton = () => {
  return (
    <button className="install-button">
      <span className="install-button__text">Install</span>
      <img src={installButton} alt="install button image" />
    </button>
  );
};
