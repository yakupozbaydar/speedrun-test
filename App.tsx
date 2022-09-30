import { NavigationContainer } from '@react-navigation/native';
import { applyMiddleware, configureStore, createStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './redux';
import AppNavigation from './src/navigation/AppNavigation';

const store = createStore(rootReducer, applyMiddleware(thunk))

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </Provider>
  );
}

