import React from 'react';
import { useState } from 'react';
import { useAppContext } from '../context/app-context';
import { calculateStageId } from '../utils/helpers';

function CreateStage() {
  const { stages, createStage } = useAppContext();
  const [stageName, setStageName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    createStage(stageName, calculateStageId(stages));
  };

  return (
    <section className='create-stage'>
      <form onSubmit={handleSubmit}>
        <input
          value={stageName}
          type='text'
          onChange={(e) => {
            setStageName(e.target.value);
          }}
        />
        <button className='btn btn--primary u-margin-top-small' type='submit'>
          Add Stage
        </button>
      </form>
    </section>
  );
}

export default CreateStage;
