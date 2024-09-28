import * as SC from './ParticipantItem.styled';

export const ParticipantItem = ({ participant }) => {
  return (
    <SC.ParticipantCard>
      <SC.ParticipantFullName>{participant.fullname}</SC.ParticipantFullName>
      <SC.ParticipantEmail>{participant.email}</SC.ParticipantEmail>
    </SC.ParticipantCard>
  );
};
