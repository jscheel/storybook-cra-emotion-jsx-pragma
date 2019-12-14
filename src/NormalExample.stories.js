import React from 'react';
import NormalExample from './NormalExample'


export default {
  title: 'Normal Example',
  component: NormalExample,
};

export const Example = () => {
  return (
    <React.Fragment>
      <NormalExample color="green" />
      <NormalExample color="red" />
      <p>Notice that the descriptions are rendered properly in the props table.</p>
    </React.Fragment>
  )
}

Example.story = {
  name: 'Example',
};
