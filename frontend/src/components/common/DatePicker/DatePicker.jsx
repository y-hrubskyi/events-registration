import ReactDatePicker from 'react-datepicker';

import * as SC from './DatePicker.styled';

export const DatePicker = ({ onChange, selected, id }) => {
  return (
    <SC.StyledDatePickerContainer>
      <ReactDatePicker
        id={id}
        dateFormat="dd.MM.yyyy"
        onChange={onChange}
        selected={selected}
        maxDate={new Date()}
        showIcon
        toggleCalendarOnIconClick
      />
    </SC.StyledDatePickerContainer>
  );
};
