import { CreateStage } from './components/CreateStage'
import { StagesContainer } from './components/StagesContainer'

export const App = () => {
  return (
    <main className='app'>
      <CreateStage />
      <StagesContainer />
    </main>
  )
}
