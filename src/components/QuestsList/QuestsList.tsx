import React from 'react';

import { QuestItem } from '../QuestItem/QuestItem';
import { Quest } from '../../types/types';

import './QuestsList.scss';

interface QuestsListProps {
  quests: Quest[];
}

export const QuestsList: React.FC<QuestsListProps> = ({ quests }) => {
  return (
    <div className='quests-list'>
      {quests.length > 0 ? (
        <ul className='quests-list__container'>
          {quests.map((quest) => (
            <QuestItem key={quest.id} quest={quest} />
          ))}
        </ul>
      ) : (
        <p>No quests available</p>
      )}
    </div>
  );
};
