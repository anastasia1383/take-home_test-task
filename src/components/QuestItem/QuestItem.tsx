import { InstallButton } from '../InstallButton/InstallButton';
import { PrimaryButton } from '../PrimaryButton/PrimaryButton';
import { Quest } from '../../types/types';

import './QuestItem.scss';

interface QuestItemProps {
  quest: Quest;
}

export const QuestItem: React.FC<QuestItemProps> = ({ quest }) => {
  return (
    <li className="quest-item">
      <div className="quest-item__container">
        <img
          className="quest-item__image"
          src={quest.image}
          alt={`${quest.title} logo`}
        />
        <div className="quest-item__content">
          <p className="quest-item__title">{quest.title}</p>
          <p className="quest-item__description">{quest.description}</p>
        </div>

        {quest.button_type === 'primary' ? (
          <PrimaryButton />
        ) : (
          <InstallButton />
        )}
      </div>
    </li>
  );
};
