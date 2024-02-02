import React from 'react';

import { Provider } from 'react-redux';
import store from './component/Store/Store';


import Counter from './component/Counter';





function App() {
  return (
    <Provider store={store}>
      <Counter />

    </Provider>
  );
}

export default App;
