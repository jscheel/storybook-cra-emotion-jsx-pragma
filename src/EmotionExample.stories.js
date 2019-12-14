import React from 'react';
import EmotionExample from './EmotionExample'


export default {
  title: 'Emotion Example',
  component: EmotionExample,
};

export const Example = () => {
  return (
    <React.Fragment>
      <EmotionExample color="green" />
      <EmotionExample color="red" />
      <p>Notice that the descriptions are NOT rendered properly in the props table.</p>
    </React.Fragment>
  )
}

Example.story = {
  name: 'Example',
};
