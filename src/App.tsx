import { useReducer } from 'react';
import './App.css';
import TasksContext from './state-management/context/tasksContext';
import HomePage from './state-management/HomePage';
import NavBar from './state-management/NavBar';
import tasksReducer from './state-management/reducers/tasksReducer';
import LoginStatus from './state-management/LoginStatus';
import authReducer from './state-management/reducers/authReducer';
import AuthContext from './state-management/context/authContext';

function App() {
  const [tasks, tasksDispatch] = useReducer(tasksReducer, []);
  const [user, authDispatch] = useReducer(authReducer, '');

  return (
    <AuthContext.Provider value={{ user, dispatch: authDispatch }}>
      <TasksContext.Provider value={{ tasks, dispatch: tasksDispatch }}>
        <LoginStatus />
        <NavBar />
        <HomePage />
      </TasksContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
