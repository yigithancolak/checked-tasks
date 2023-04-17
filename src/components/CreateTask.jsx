import React, { useState } from 'react';
import { useAppContext } from '../context/app-context';

function CreateTask({ stageId }) {
  const [taskName, setTaskName] = useState('');
  const { createTask } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(taskName, stageId);
    setTaskName('');
  };

  return (
    <form className='create-task' onSubmit={handleSubmit}>
      <input
        value={taskName}
        type='text'
        placeholder='Task name'
        onChange={(e) => {
          setTaskName(e.target.value);
        }}
      />
      <button type='submit' className='btn btn--secondary'>
        Add
      </button>
    </form>
  );
}

export default CreateTask;
