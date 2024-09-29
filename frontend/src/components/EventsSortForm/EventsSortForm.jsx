import { useState } from 'react';
import { useForm } from 'react-hook-form';

import * as SC from './EventsSortForm.styled';

const SortTypes = {
  ASC: 'asc',
  DESC: 'desc'
};

export const EventsSortForm = () => {
  const [sortType, setSortType] = useState(SortTypes.ASC);
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    console.log(data);

    setSortType(prevState =>
      prevState === SortTypes.ASC ? SortTypes.DESC : SortTypes.ASC
    );
  };

  return (
    <SC.SortBarForm onSubmit={handleSubmit(onSubmit)}>
      <select {...register('sortField')}>
        <option value="title">title</option>
        <option value="date">date</option>
        <option value="organizer">organizer</option>
      </select>

      <button type="submit">Sort by {sortType.toUpperCase()}</button>
    </SC.SortBarForm>
  );
};
