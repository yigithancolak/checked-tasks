import {
  CHECK_TASK,
  COMPLETE_STAGE,
  CREATE_STAGE,
  CREATE_TASK,
  EDIT_STAGE,
  REMOVE_STAGE,
  REMOVE_TASK
} from './actions'

import { v4 as uuidv4 } from 'uuid'

const appReducer = (state, action) => {
  if (action.type === CREATE_STAGE) {
    const { stageName } = action.payload
    const newStage = {
      stageId: state.stages.length + 1,
      stageName,
      tasks: [],
      completed: false
    }
    return {
      ...state,
      stages: [...state.stages, newStage]
    }
  }

  if (action.type === EDIT_STAGE) {
    const { stageId, name } = action.payload

    const newStages = [...state.stages].map((stage) => {
      if (stage.stageId === stageId) {
        return { ...stage, stageName: name }
      }
      return stage
    })

    return { ...state, stages: newStages }
  }

  if (action.type === REMOVE_STAGE) {
    const newStages = [...state.stages].filter(
      (stage) => stage.stageId !== action.payload
    )
    return { ...state, stages: newStages }
  }

  if (action.type === CREATE_TASK) {
    const { stageId, taskName } = action.payload
    const newTask = { taskId: uuidv4(), taskName, checked: false }
    const newStages = [...state.stages].map((stage) => {
      if (stage.stageId === stageId) {
        return { ...stage, tasks: [...stage.tasks, newTask] }
      }

      return stage
    })

    return { ...state, stages: newStages }
  }

  if (action.type === CHECK_TASK) {
    const { stageId, taskId } = action.payload

    const newStages = [...state.stages].map((stage) => {
      if (stage.stageId === stageId) {
        const newTasks = stage.tasks.map((task) => {
          if (task.taskId === taskId) {
            return { ...task, checked: !task.checked }
          }

          return task
        })

        return { ...stage, tasks: newTasks }
      }
      return stage
    })

    return { ...state, stages: newStages }
  }

  if (action.type === REMOVE_TASK) {
    const { stageId, taskId } = action.payload
    const newStages = [...state.stages].map((stage) => {
      if (stage.stageId === stageId) {
        const newTasks = [...stage.tasks].filter(
          (task) => task.taskId !== taskId
        )

        return { ...stage, tasks: newTasks }
      }

      return stage
    })

    return { ...state, stages: newStages }
  }

  if (action.type === COMPLETE_STAGE) {
    const { stageId, isComplete } = action.payload

    const newStages = [...state.stages].map((stage) => {
      if (stage.stageId === stageId) {
        return { ...stage, completed: isComplete }
      }

      return stage
    })

    return { ...state, stages: newStages }
  }

  throw new Error(`No Matching "${action.type}" - action type`)
}

export default appReducer
