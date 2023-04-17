import { useContext, createContext, useReducer, useEffect } from 'react';
import appReducer from '../reducers/app-reducer';
import {
  CHECK_TASK,
  COMPLETE_STAGE,
  CREATE_STAGE,
  CREATE_TASK,
  EDIT_STAGE,
  REMOVE_STAGE,
} from '../actions';
import { REMOVE_TASK } from '../actions';

const AppContext = createContext();

const initialState = {
  stages: [],
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const createStage = (stageName, stageId) => {
    dispatch({ type: CREATE_STAGE, payload: { stageName, stageId } });
  };

  const editStage = (name, stageId) => {
    dispatch({ type: EDIT_STAGE, payload: { name, stageId } });
  };

  const removeStage = (id) => {
    dispatch({ type: REMOVE_STAGE, payload: id });
  };

  const createTask = (taskName, stageId) => {
    dispatch({ type: CREATE_TASK, payload: { taskName, stageId } });
  };

  const checkTask = (stageId, taskId) => {
    dispatch({ type: CHECK_TASK, payload: { stageId, taskId } });
  };

  const removeTask = (stageId, taskId) => {
    dispatch({ type: REMOVE_TASK, payload: { stageId, taskId } });
  };

  const completeStage = (stageId, isComplete) => {
    dispatch({ type: COMPLETE_STAGE, payload: { stageId, isComplete } });
  };

  console.log(state);
  return (
    <AppContext.Provider
      value={{
        ...state,
        createStage,
        editStage,
        removeStage,
        createTask,
        checkTask,
        removeTask,
        completeStage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
