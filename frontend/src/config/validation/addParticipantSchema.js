import * as Yup from 'yup';

export const addParticipantSchema = Yup.object().shape({
  fullname: Yup.string()
    .required('Full name is required')
    .min(2, 'Too Short')
    .trim(),
  email: Yup.string()
    .required('Email is required')
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Enter a valid Email*'),
  dateOfBirth: Yup.date()
    .required('Date of birth is required')
    .max(new Date(), 'Not from future'),
  referralSource: Yup.string()
    .required('Referral Source is required')
    .oneOf(['socials', 'friends', 'myself'])
});
