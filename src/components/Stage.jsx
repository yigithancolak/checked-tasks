import React, { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineEdit } from 'react-icons/ai';
import { GiConfirmed } from 'react-icons/gi';
import Task from './Task';
import CreateTask from './CreateTask';
import { useAppContext } from '../context/app-context';
import {
  areAllTasksCheckedInStage,
  arePreviousStagesCompleted,
} from '../utils/helpers';

function Stage({ stage }) {
  const { stageId, stageName, tasks, completed } = stage;
  const [editMode, setEditMode] = useState(false);
  const [editedName, setEditedName] = useState(stageName);

  const { editStage, removeStage, stages, completeStage } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    editStage(editedName, stageId);
    setEditMode(false);
  };
  const isAllChecked = areAllTasksCheckedInStage(stageId, stages);

  useEffect(() => {
    completeStage(stageId, isAllChecked);
  }, [isAllChecked]);

  return (
    <div className='stage'>
      <div className={completed ? 'stage__header completed' : 'stage__header'}>
        {editMode ? (
          <form onSubmit={handleSubmit}>
            <input
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
              type='text'
              className='stage__header__edit'
            />
          </form>
        ) : (
          <h3>{stageName}</h3>
        )}
        <div className='stage__header--buttons'>
          {editMode ? (
            <GiConfirmed className='stage-edit-btn' onClick={handleSubmit} />
          ) : (
            <AiOutlineEdit
              onClick={() => {
                setEditMode(true);
              }}
              className='stage-edit-btn'
            />
          )}
          <AiOutlineClose
            className='stage-remove-btn'
            onClick={() => removeStage(stageId)}
          />
        </div>
      </div>
      <CreateTask stageId={stageId} />
      <div className='stage__tasks'>
        {tasks.map((task, index) => {
          return <Task key={index} task={task} stageId={stageId} />;
        })}
      </div>
    </div>
  );
}

export default Stage;
