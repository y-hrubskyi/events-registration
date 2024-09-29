import styled from 'styled-components';

export const BaseValidationMessage = styled.p`
  font-weight: 500;
  font-size: 10px;
  line-height: 1.2;
  letter-spacing: -0.02em;

  @media screen and (min-width: 768px) {
    font-size: 12px;
    line-height: 1.16667;
  }
`;

export const CorrectMessage = styled(BaseValidationMessage)`
  color: green;
`;

export const ErrorMessage = styled(BaseValidationMessage)`
  color: red;
`;
