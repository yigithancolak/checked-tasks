import { useEffect, useState } from 'react'
import { AiOutlineClose, AiOutlineEdit } from 'react-icons/ai'
import { GiConfirmed } from 'react-icons/gi'
import { useAppContext } from '../context/AppContext'
import { COMPLETE_STAGE, EDIT_STAGE, REMOVE_STAGE } from '../reducer/actions'
import { areAllTasksCheckedInStage } from '../utils/helpers'
import { CreateTask } from './CreateTask'
import { Task } from './Task'

export const Stage = ({ stage }) => {
  const { stageId, stageName, tasks, completed } = stage
  const [editMode, setEditMode] = useState(false)
  const [editedName, setEditedName] = useState(stageName)

  const { stages, dispatch } = useAppContext()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (editedName !== '') {
      dispatch({ type: EDIT_STAGE, payload: { name: editedName, stageId } })

      setEditMode(false)
    }
  }
  const isAllChecked = areAllTasksCheckedInStage(stageId, stages)

  useEffect(() => {
    dispatch({
      type: COMPLETE_STAGE,
      payload: { stageId, isComplete: isAllChecked }
    })
  }, [isAllChecked])

  const removeStage = () => {
    dispatch({ type: REMOVE_STAGE, payload: stageId })
  }

  return (
    <div className='stage'>
      <div className={completed ? 'stage__header completed' : 'stage__header'}>
        {editMode ? (
          <form className='stage__header__edit' onSubmit={handleSubmit}>
            <input
              autoFocus
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
                setEditMode(true)
              }}
              className='stage-edit-btn'
            />
          )}
          <AiOutlineClose
            className='stage-remove-btn'
            onClick={() => removeStage()}
          />
        </div>
      </div>
      <CreateTask stageId={stageId} />
      <div className='stage__tasks'>
        {tasks.map((task, index) => {
          return <Task key={task.taskId} task={task} stageId={stageId} />
        })}
      </div>
    </div>
  )
}
