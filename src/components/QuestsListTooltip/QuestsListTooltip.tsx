import tooltip from '../../icons/tooltip.svg';

import './QuestsListTooltip.scss';

interface QuestsListTooltipProps {
  text: string;
}

export const QuestsListTooltip: React.FC<QuestsListTooltipProps> = ({
  text,
}) => {
  return (
    <div className='quests-list-tooltip'>
      <div className="quests-list-tooltip__icon">
        <img src={tooltip} alt="tooltip" />
      </div>
      <div className="quests-list-tooltip__text">{text}</div>
    </div>
  );
};
