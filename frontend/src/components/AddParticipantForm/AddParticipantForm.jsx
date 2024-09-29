import { useForm } from 'react-hook-form';

import * as SC from './AddParticipantForm.styled';

export const AddParticipantForm = ({ registerParticipant }) => {
  const { register, handleSubmit } = useForm();

  return (
    <SC.Form onSubmit={handleSubmit(registerParticipant)}>
      <SC.FormFieldsWrapper>
        <SC.FormFieldWrapper>
          <label htmlFor="fullname">Full name</label>
          <input
            id="fullname"
            type="text"
            {...register('fullname', { required: true })}
          />
        </SC.FormFieldWrapper>
        <SC.FormFieldWrapper>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            {...register('email', { required: true })}
          />
        </SC.FormFieldWrapper>
        <SC.FormFieldWrapper>
          <label htmlFor="dateOfBirth">Date of birth</label>
          <input
            id="dateOfBirth"
            type="date"
            {...register('dateOfBirth', { required: true })}
          />
        </SC.FormFieldWrapper>
        <SC.FormRadioWrapper>
          <p>Where did you hear about this event?</p>
          <SC.FormRadioLabel htmlFor="socials">
            <input
              id="socials"
              {...register('referralSource', { required: true })}
              type="radio"
              value="socials"
            />
            Social media
          </SC.FormRadioLabel>
          <SC.FormRadioLabel htmlFor="friends">
            <input
              id="friends"
              {...register('referralSource', { required: true })}
              type="radio"
              value="friends"
            />
            Friends
          </SC.FormRadioLabel>
          <SC.FormRadioLabel htmlFor="myself">
            <input
              id="myself"
              {...register('referralSource', { required: true })}
              type="radio"
              value="myself"
            />
            Found myself
          </SC.FormRadioLabel>
        </SC.FormRadioWrapper>
      </SC.FormFieldsWrapper>
      <button type="submit">Registration</button>
    </SC.Form>
  );
};
