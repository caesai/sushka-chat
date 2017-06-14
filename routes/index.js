import React from 'react';
import {Route, IndexRoute} from 'react-router';

import {App} from '../containers/App';
import {Login} from '../containers/Login';
import {Chat} from '../containers/Chat';
import {Register} from '../containers/Register';

export default (
   <Route path='/' component={App}>
      <IndexRoute component={Chat} />
      <Route path='/register' component={Register} />
      <Route path='/login' component={Login} />
   </Route>
)
