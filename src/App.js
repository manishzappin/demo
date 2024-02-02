import React from 'react';

import { Provider } from 'react-redux';
import store from './component/Store/Store';


import Counter from './component/Counter';

import ReactHookFormMini from './component/Demoform';





function App() {
  return (
    <Provider store={store}>
      <Counter />

      <ReactHookFormMini/>

    </Provider>
  );
}

export default App;
