import React, { useState } from 'react';
import './App.css';
import AddTodo from './component/AddTodo';
import Header from './component/Header';
import TodoList from './component/TodoList';

export interface IState {
  todos : {
      id?: string,
      title: string,
      activeState: string,
      endDate: string
  }[]
}

function App() {

  const [todos, setTodo] = useState<IState["todos"]>([
    {
      id: "1",
      title: "Wake up ",
      activeState: "New",
      endDate: "07/07/2017"
    }
  ])

  return (
    <div>
      <Header />
      <div className="container">
        <AddTodo todos={todos} setTodo={setTodo}/>
        <TodoList todos={todos}/>
      </div>
    </div>
  );
}

export default App;
