import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import {Provider} from "react-redux";
import App from "./containers/App";
import topicsReducer from 'pages/Products/reducers';

const rootReducer = combineReducers({
    topics: topicsReducer,
});

const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware),
);

const Application = () => (
    <Provider store={store} >
        <App />
    </Provider>
)

export default Application;