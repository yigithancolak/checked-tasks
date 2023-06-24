import { createContext, useContext, useReducer } from 'react'
import appReducer from '../reducer/reducer'

const AppContext = createContext()

const initialState = {
  stages: []
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState)

  return (
    <AppContext.Provider
      value={{
        ...state,
        dispatch
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext)
}
