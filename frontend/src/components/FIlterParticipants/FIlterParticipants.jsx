import * as SC from './FIlterParticipants.styled';

export const FIlterParticipants = () => {
  const handleChange = e => {
    const { name, value } = e.target;
    console.log(name);
    console.log(value);
  };

  return (
    <SC.FilterWrapper>
      <SC.Label>
        Find by fullname
        <input type="text" name="fullname" onChange={handleChange} />
      </SC.Label>
      <SC.Label>
        Find by email
        <input type="email" name="email" onChange={handleChange} />
      </SC.Label>
    </SC.FilterWrapper>
  );
};
