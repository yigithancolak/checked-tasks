import { useState } from 'react'
import { useAppContext } from '../context/AppContext'
import { CREATE_STAGE } from '../reducer/actions'

export const CreateStage = () => {
  const { dispatch } = useAppContext()
  const [stageName, setStageName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (stageName !== '') {
      dispatch({
        type: CREATE_STAGE,
        payload: { stageName }
      })
      setStageName('')
    }
  }

  return (
    <section className='create-stage'>
      <form onSubmit={handleSubmit}>
        <input
          value={stageName}
          type='text'
          onChange={(e) => {
            setStageName(e.target.value)
          }}
        />
        <button className='btn btn--primary u-margin-top-small' type='submit'>
          Add Stage
        </button>
      </form>
    </section>
  )
}
