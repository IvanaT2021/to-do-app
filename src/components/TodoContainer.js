// import React from 'react';
// import '../App.css';
// import Header from './Header';
// import InputTodo from './InputTodo';
// import TodosList from './TodosList';
// import Navbar from './Navbar';
// import { v4 as uuidv4 } from 'uuid';

// class TodoContainer extends React.Component {
//   state = {
//     todos: [],
//   };
//   handleChange = (id) => {
//     this.setState({
//       todos: this.state.todos.map((stavka) => {
//         if (stavka.id === id) {
//           stavka.completed = !stavka.completed;
//         }
//         return stavka;
//       }),
//     });
//   };
//   delTodo = (id) => {
//     this.setState({
//       todos: [
//         ...this.state.todos.filter((stavka) => {
//           // obrisi od ranije props
//           return stavka.id !== id;
//         }),
//       ],
//     });
//   };

//   addTodoItem = (title) => {
//     const newTodo = {
//       id: uuidv4(),
//       title: title,
//       completed: false,
//     };
//     this.setState({
//       todos: [...this.state.todos, newTodo],
//     });
//   };

//   setUpdate = (updatedTitle, id) => {
//     this.setState({
//       todos: this.state.todos.map((todo) => {
//         if (todo.id === id) {
//           todo.title = updatedTitle;
//         }
//         return todo;
//       }),
//     });
//   };
//   /*
//   dobijanje podataka iz bekenda
//   */
//   componentDidMount() {
//     const temp = localStorage.getItem('todos');
//     const loadedTodos = JSON.parse(temp);
//     if (loadedTodos) {
//       this.setState({
//         todos: loadedTodos,
//       });
//     }
//   }
//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.todos !== this.state.todos) {
//       const temp = JSON.stringify(this.state.todos);
//       localStorage.setItem('todos', temp);
//     }
//   }
//   render() {
//     return (
//       <div className="container">
//         <div className="inner">
//           <Header />
//           <InputTodo addTodoProps={this.addTodoItem} />
//           <TodosList
//             stavkeIzNiza={this.state.todos}
//             handleChangePropsContainer={this.handleChange}
//             delTodoPropsContainer={this.delTodo}
//             setUpdateContainer={this.setUpdate}
//           />
//         </div>
//       </div>
//     );
//   }
// }

// export default TodoContainer;

import React, { useState, useEffect } from 'react';
import '../App.css';
import Header from './Header';
import InputTodo from './InputTodo';
import TodosList from './TodosList';
import Navbar from './Navbar';
import { v4 as uuidv4 } from 'uuid';
import { Route, Switch } from 'react-router-dom';
import About from '../pages/About';
import NotMatch from '../pages/NotMatch';

const TodoContainer = () => {
  // const [todos, setTodos] = useState([]);
  const [todos, setTodos] = useState(getInitialTodos());
  const handleChange = (id) => {
    setTodos(
      todos.map((stavka) => {
        if (stavka.id === id) {
          stavka.completed = !stavka.completed;
        }
        return stavka;
      })
    );
  };
  const delTodo = (id) => {
    setTodos([
      ...todos.filter((stavka) => {
        return stavka.id !== id;
      }),
    ]);
  };

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      })
    );
  };

  // useEffect(() => {
  //   console.log('test run');
  //   // getting stored items
  //   // code componentDidMount
  //   const temp = localStorage.getItem('todos');
  //   const loadedTodos = JSON.parse(temp);
  //   if (loadedTodos) {
  //     setTodos(loadedTodos);
  //   }
  // }, []);

  function getInitialTodos() {
    //getting stored items
    const temp = localStorage.getItem('todos');
    const savedTodos = JSON.parse(temp);
    return savedTodos || [];
    // na pocetku funkcije kod definisanja state-a dodamo onu fuknciju
  }
  useEffect(() => {
    // storing todos item
    // code componentDidUpdate
    const temp = JSON.stringify(todos);
    localStorage.setItem('todos', temp);
  }, [todos]);
  return (
    <>
    <Navbar/>
      <Switch>
        <Route exact path="/">
          <div className="container">
            <div className="inner">
              <Header />
              <InputTodo addTodoProps={addTodoItem} />
              <TodosList
                stavkeIzNiza={todos}
                handleChangePropsContainer={handleChange}
                delTodoPropsContainer={delTodo}
                setUpdateContainer={setUpdate}
              />
            </div>
          </div>
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="*">
          <NotMatch />
        </Route>
      </Switch>
    </>
  );
};
export default TodoContainer;
