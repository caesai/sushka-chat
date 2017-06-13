import React from 'react';
import {Route, IndexRoute} from 'react-router';

import Login from '../Login';
import Chat from '../Chat';
import Register from '../Register';

export default (
   <Route path='/' component={Login}>
      <IndexRoute component={Chat} />
      <Route path='/register' component={Register} />
      // <Route path='/register' component={Register} />
   </Route>
)
