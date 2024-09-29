import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${p => p.theme.spacing(8)};
  margin: 0 auto;
  padding: ${p => p.theme.spacing(4)};
  width: 320px;

  border: 1px solid ${p => p.theme.colors.black};
`;

export const FormFieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(5)};
  width: 280px;
`;

export const FormFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(1)};
`;

export const FormRadioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(1)};
`;

export const FormRadioLabel = styled.label`
  display: flex;
  gap: ${p => p.theme.spacing(2)};
`;
