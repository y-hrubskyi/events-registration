import * as SC from './ParticipantItem.styled';

export const ParticipantItem = ({ participant }) => {
  return (
    <SC.ParticipantCard>
      <h3>{participant.fullname}</h3>
      <p>{participant.email}</p>
    </SC.ParticipantCard>
  );
};
