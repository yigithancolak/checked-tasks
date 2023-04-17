import React from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';
import { useAppContext } from '../context/app-context';
import { arePreviousStagesCompleted } from '../utils/helpers';

function Task({ task, stageId }) {
  const { taskId, taskName, checked } = task;
  const { checkTask, removeTask, stages } = useAppContext();
  return (
    <div className='task'>
      <div className='task__header'>
        <span>{taskName}</span>
      </div>
      <div className='task__buttons'>
        {arePreviousStagesCompleted(stageId, stages) && (
          <AiOutlineCheck
            className={checked ? 'task-edit-btn checked' : 'task-edit-btn'}
            onClick={() => {
              checkTask(stageId, taskId);
            }}
          />
        )}
        <BsFillTrashFill
          className='task-remove-btn'
          onClick={() => {
            removeTask(stageId, taskId);
          }}
        />
      </div>
    </div>
  );
}

export default Task;
