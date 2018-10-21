import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

/* REDUCERS */

// Main character reducer
import reactor from 'src/store/reducers/reactor';

// Boss reducer
import boss from 'src/store/reducers/boss';

// Ball reducer
import ball from 'src/store/reducers/ball';

// Map & Rooms reducer
import mapRooms from 'src/store/reducers/mapRooms';

// Login & Signup reducer
import authReducer from 'src/store/reducers/authReducer';

// Questions and Quizzs Level
import level1 from 'src/store/reducers/level1';
import level2 from 'src/store/reducers/level2';
import level3 from 'src/store/reducers/level3';

/* MIDDLEWARES */
import generateMap from './middlewares/generateMap';
import generateRoom from './middlewares/generateRoom';
import reactorM from './middlewares/reactorM';
import bossM from './middlewares/bossM';
import logger from './middlewares/logger';

const generateMapMW = applyMiddleware(generateMap);
const generateRoomMW = applyMiddleware(generateRoom);
const reactorMW = applyMiddleware(reactorM);
const bossMW = applyMiddleware(bossM);
const loggerMW = applyMiddleware(logger);

const devTools = [
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
];

const enhancers = compose(generateMapMW, generateRoomMW, reactorMW, bossMW, loggerMW, ...devTools); // add middleware before ...devtools

const rootReducer = combineReducers({
  // Reducer for main character
  reactor: reactor,
  // Reducer for quizz level1
  level1: level1,
  // Reducer for quizz level2
  level2: level2,
  // Reducer for quizz level3
  level3: level3,
  // Reducer for boss
  boss: boss,
  // Reducer for ball
  ball: ball,
  // Reducer for map & rooms
  mapRooms: mapRooms,
  // Reducer for Sign up
  form: formReducer,
  // Reducer for Sign in
  auth: authReducer
});

const store = createStore(
  rootReducer,
  enhancers // mix of middlewares and extensions
);

export default store;
