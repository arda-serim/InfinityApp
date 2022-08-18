import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { applyMiddleware} from 'redux';
import { legacy_createStore as createStore} from 'redux'
import thunk from "redux-thunk"; 
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import rootReducer from './store';



const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store = {store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);