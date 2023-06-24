import { useAppContext } from '../context/AppContext'
import { Stage } from './Stage'

export const StagesContainer = () => {
  const { stages } = useAppContext()

  return (
    <section className='stages-container u-margin-top-big'>
      {stages.map((stage, index) => {
        return <Stage key={index} stage={stage} />
      })}
    </section>
  )
}
