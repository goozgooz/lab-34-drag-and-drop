import React from 'react';
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import combinedReducers from './reducers/combineReducers';


let store = createStore(combinedReducers);
// css
import './style/main.scss';

// app component
import App from './components/app.js'

class Main extends React.Component {
    
    constructor(props) { 
        super(props);
    }
    
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider>
        )
    }
    
}

ReactDom.render(<Main/>, document.getElementById('root'));