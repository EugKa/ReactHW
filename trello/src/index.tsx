import * as React from 'react';
import * as ReactDOM from 'react-dom'
import {App} from './components/App/'
import { BrowserRouter } from 'react-router-dom'


import {Provider} from 'react-redux'
import configureStore from './store';
import { createBrowserHistory } from 'history';
import { init } from './store/initialization';
import { ConnectedRouter } from 'connected-react-router';




const history = createBrowserHistory()
const store = configureStore(history)
store.dispatch(init())

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>, document.querySelector('#root'))