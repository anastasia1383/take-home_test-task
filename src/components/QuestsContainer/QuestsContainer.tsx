import React, { useEffect, useState } from 'react';

import { fetchData } from '../../helpers/fetchData';
import { QuestsList } from '../QuestsList/QuestsList';
import { QuestsListTooltip } from '../QuestsListTooltip/QuestsListTooltip';
import { Quest } from '../../types/types';

import './QuestsContainer.scss';

export const QuestsContainer: React.FC = () => {
  const [quests, setQuests] = useState<Quest[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchData();
        setQuests(data);
      } catch (error: unknown) {
        const e = error as Error;
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading) {
    return <p>Loading quests...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const tooltip = 'This is a quest list. This is a quest list. This is a quest list.';

  return (
    <div className="quests-container">
      <div className="quests-container__header">
        <h1 className="quests-container__title">Quest List</h1>
        <QuestsListTooltip text={tooltip}/>
      </div>

      <QuestsList quests={quests}/>
    </div>
  );
};
