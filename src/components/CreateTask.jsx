import { useState } from 'react'
import { useAppContext } from '../context/AppContext'
import { CREATE_TASK } from '../reducer/actions'

export const CreateTask = ({ stageId }) => {
  const [taskName, setTaskName] = useState('')
  const { createTask, dispatch } = useAppContext()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (taskName !== '') {
      dispatch({ type: CREATE_TASK, payload: { taskName, stageId } })
    }
    setTaskName('')
  }

  return (
    <form className='create-task' onSubmit={handleSubmit}>
      <input
        value={taskName}
        type='text'
        placeholder='Task name'
        onChange={(e) => {
          setTaskName(e.target.value)
        }}
      />
      <button type='submit' className='btn btn--secondary'>
        Add
      </button>
    </form>
  )
}
