import React, { useState, useEffect } from 'react';
import './App.css';
import AddTodo from './component/AddTodo';
import Header from './component/Header';
import TodoList from './component/TodoList';
import axios from "axios";

export interface IState {
  todos: {
    _id?: string,
    title: string,
    activeState: string,
    endDate: string
  }[]
}

function App() {

  const [todos, setTodo] = useState<IState["todos"]>([
    {
      _id: "1",
      title: "Wake up ",
      activeState: "New",
      endDate: "07/07/2017"
    }
  ])

  const getTodo = () => {
    axios.get<IState["todos"]>("http://localhost:5000/todo/")
      .then((response) => {
        console.log(response.data)
        setTodo(response.data)
      })
  }

  const postTodo = (newTodo: IState["todos"]) => {
    axios.post<any>("http://localhost:5000/todo/", newTodo[0])
      .then((response) => {
        console.log(response.data);
        getTodo();
      })
  }

  const updateTodo = (id: string) => {
    axios.put<any>("http://localhost:5000/todo/"+id)
      .then((response) => {
        console.log(response.data)
        getTodo();
      })
  }

  const deleteTodo = (id: string) => {
    axios.delete<any>("http://localhost:5000/todo/"+id)
      .then((response) => {
        console.log(response.data)
        getTodo();
      })
  }

  useEffect(() => {
    getTodo();
  }, []);

  return (
    <div>
      <Header />
      <div className="container">
        <AddTodo todos={todos} setTodo={setTodo} postTodo={postTodo}/>
        <TodoList todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
      </div>
    </div>
  );
}

export default App;
