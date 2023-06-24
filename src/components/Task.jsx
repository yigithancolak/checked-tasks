import { AiOutlineCheck } from 'react-icons/ai'
import { BsFillTrashFill } from 'react-icons/bs'
import { useAppContext } from '../context/AppContext'
import { CHECK_TASK, REMOVE_TASK } from '../reducer/actions'
import { arePreviousStagesCompleted } from '../utils/helpers'

export const Task = ({ task, stageId }) => {
  const { taskId, taskName, checked } = task
  const { stages, dispatch } = useAppContext()

  const handleTaskChecking = () => {
    dispatch({ type: CHECK_TASK, payload: { stageId, taskId } })
  }

  const handleRemoveTask = () => {
    dispatch({ type: REMOVE_TASK, payload: { stageId, taskId } })
  }

  return (
    <div className='task'>
      <div className='task__header'>
        <span>{taskName}</span>
      </div>
      <div className='task__buttons'>
        {arePreviousStagesCompleted(stageId, stages) && (
          <AiOutlineCheck
            className={checked ? 'task-edit-btn checked' : 'task-edit-btn'}
            onClick={handleTaskChecking}
          />
        )}
        <BsFillTrashFill
          className='task-remove-btn'
          onClick={handleRemoveTask}
        />
      </div>
    </div>
  )
}
