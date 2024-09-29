import * as SC from './ValidationMessage.styled';

export const ValidationMessage = ({
  isCorrect,
  correctMessage,
  hasError,
  errorMessage
}) => {
  return (
    <>
      {isCorrect && <SC.CorrectMessage>{correctMessage}</SC.CorrectMessage>}
      {hasError && <SC.ErrorMessage>{errorMessage}</SC.ErrorMessage>}
    </>
  );
};
