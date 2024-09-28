import { ParticipantItem } from '~/components/ParticipantItem/ParticipantItem';

import * as SC from './ParticipantList.styled';

export const ParticipantList = ({ participants }) => {
  return (
    <SC.ParticipantList>
      {participants.map(participant => (
        <ParticipantItem key={participant._id} participant={participant} />
      ))}
    </SC.ParticipantList>
  );
};
