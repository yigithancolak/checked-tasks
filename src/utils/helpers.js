export const arePreviousStagesCompleted = (stageId, stages) => {
  if (stageId === 1) {
    return true
  }

  for (let i = 0; i < stages.length; i++) {
    const stage = stages[i]

    if (stage.stageId < stageId && !stage.completed) {
      return false
    }
  }

  return true
}

export const areAllTasksCheckedInStage = (stageId, stages) => {
  const stage = stages.find((stage) => stage.stageId === stageId)

  if (stage.tasks.length < 1) {
    return false
  }

  return stage.tasks.every((task) => task.checked)
}
