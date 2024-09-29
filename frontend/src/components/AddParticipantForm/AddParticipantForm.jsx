import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { addParticipantSchema } from '~/config/validation/addParticipantSchema';

import { DatePicker } from '~/components/common/DatePicker/DatePicker';
import { ValidationMessage } from '~/components/common/ValidationMessage/ValidationMessage';

import * as SC from './AddParticipantForm.styled';

export const AddParticipantForm = ({ registerParticipant }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, dirtyFields }
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(addParticipantSchema)
  });

  const isCorrectFullname = dirtyFields.fullname && !errors.fullname;
  const hasErrorFullname = errors.fullname;
  const isCorrectEmail = dirtyFields.email && !errors.email;
  const hasErrorEmail = errors.email;
  const isCorrectDateOfBirth = dirtyFields.dateOfBirth && !errors.dateOfBirth;
  const hasErrorDateOfBirth = errors.dateOfBirth;
  const isCorrectReferralSource =
    dirtyFields.referralSource && !errors.referralSource;
  const hasErrorReferralSource = errors.referralSource;

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
          <ValidationMessage
            isCorrect={isCorrectFullname}
            correctMessage="Full name is correct"
            hasError={hasErrorFullname}
            errorMessage={errors.fullname?.message}
          />
        </SC.FormFieldWrapper>
        <SC.FormFieldWrapper>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            {...register('email', { required: true })}
          />
          <ValidationMessage
            isCorrect={isCorrectEmail}
            correctMessage="Email is correct"
            hasError={hasErrorEmail}
            errorMessage={errors.email?.message}
          />
        </SC.FormFieldWrapper>
        <SC.FormFieldWrapper>
          <label htmlFor="dateOfBirth">Date of birth</label>
          <Controller
            name="dateOfBirth"
            control={control}
            render={({ field }) => (
              <DatePicker
                onChange={field.onChange}
                selected={field.value}
                id="dateOfBirth"
              />
            )}
          />
          <ValidationMessage
            isCorrect={isCorrectDateOfBirth}
            correctMessage="Date of birth is correct"
            hasError={hasErrorDateOfBirth}
            errorMessage={errors.dateOfBirth?.message}
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
          <ValidationMessage
            isCorrect={isCorrectReferralSource}
            correctMessage="Referral source is chosen"
            hasError={hasErrorReferralSource}
            errorMessage={errors.referralSource?.message}
          />
        </SC.FormRadioWrapper>
      </SC.FormFieldsWrapper>
      <button type="submit">Registration</button>
    </SC.Form>
  );
};
