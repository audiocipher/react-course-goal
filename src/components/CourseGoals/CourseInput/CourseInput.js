import React, { useState } from 'react';
// import styled from 'styled-components';

import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';

// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${(props) => (props.invalid ? 'red' : 'black')}
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${(props) => (props.invalid ? 'red' : '#ccc')};
//     background: ${(props) => (props.invalid ? '#ffd7d7' : 'transparent')}
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }
// `;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleGoalInputChange = (event) => {
    const value = event.target.value;
    if (!isEmptyValue(value)) {
      setIsValid(true);
    }
    setEnteredValue(value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (isEmptyValue(enteredValue)) {
      setIsValid(false);
      return;
    }

    props.onAddGoal(enteredValue);

    setEnteredValue('');
  };

  const isEmptyValue = (value) => {
    return value.trim().length === 0;
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div
        className={`${styles['form-control']} ${!isValid && styles.invalid}`}
      >
        <label>Course Goal</label>
        <input
          type="text"
          value={enteredValue}
          onChange={handleGoalInputChange}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
