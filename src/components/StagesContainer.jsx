import React from 'react';
import { useAppContext } from '../context/app-context';
import Stage from './Stage';

function StagesContainer() {
  const { stages } = useAppContext();

  return (
    <section className='stages-container u-margin-top-big'>
      {stages.map((stage, index) => {
        return <Stage key={index} stage={stage} />;
      })}
    </section>
  );
}

export default StagesContainer;
