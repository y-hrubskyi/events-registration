import { useForm } from 'react-hook-form';

export const AddParticipantForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div>
          <label htmlFor="fullname">Full name</label>
          <input
            id="fullname"
            type="text"
            {...register('fullname', { required: true })}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            {...register('email', { required: true })}
          />
        </div>
        <div>
          <label htmlFor="dateOfBirth">Date of birth</label>
          <input
            id="dateOfBirth"
            type="date"
            {...register('dateOfBirth', { required: true })}
          />
        </div>
        <div>
          <p>Where did you hear about this event?</p>
          <label htmlFor="socials">Social media</label>
          <input
            id="socials"
            {...register('referralSource', { required: true })}
            type="radio"
            value="socials"
          />
          <label htmlFor="friends">Friends</label>
          <input
            id="friends"
            {...register('referralSource', { required: true })}
            type="radio"
            value="friends"
          />
          <label htmlFor="myself">Found myself</label>
          <input
            id="myself"
            {...register('referralSource', { required: true })}
            type="radio"
            value="myself"
          />
        </div>
      </div>
      <button type="submit">Registration</button>
    </form>
  );
};
