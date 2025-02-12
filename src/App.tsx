import { useReducer } from 'react';
import './App.css';
import TaskList from './state-management/TaskList';
import tasksReducer from './state-management/reducers/tasksReducer';
import NavBar from './routing/NavBar';
import HomePage from './routing/HomePage';
import TasksContext from './state-management/context/tasksContext';

function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, []);

  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      <NavBar />
      <HomePage />
    </TasksContext.Provider>
  );
}

export default App;
