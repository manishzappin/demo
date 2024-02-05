import React from 'react';
import { Provider } from 'react-redux';
import store from './component/Store/Store';
// import Counter from './component/Counter';
import ReactHookFormMini from './component/Demoform';
import UserList from './component/UserList';

import Counter from './component/Counter';





function App() {
  return (
    <Provider store={store}>
      
      <UserList/>

      <Counter />
      <ReactHookFormMini/>


    </Provider>
  );
}

export default App;
