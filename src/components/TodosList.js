// import React from 'react';
// import '../App.css';
// import TodoItem from './TodoItem';

// class TodosList extends React.Component {
//   render() {
//     return (
//       <div className="todoList">
//         <ul>
//           {this.props.stavkeIzNiza.map((stavka) => (
//             <TodoItem
//               key={stavka.id}
//               stavka1={stavka}
//               handleChangePropsList={this.props.handleChangePropsContainer}
//               delTodoPropsList={this.props.delTodoPropsContainer}
//               setUpdateList={this.props.setUpdateContainer}
//             />
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }
// export default TodosList;
import React from 'react';
import TodoItem from './TodoItem';
import '../App.css';

const TodosList = (props) => {
  return (
    <div className="todoList">
      <ul>
        {props.stavkeIzNiza.map((stavka) => (
          <TodoItem
            key={stavka.id}
            stavka1={stavka}
            handleChangePropsList={props.handleChangePropsContainer}
            delTodoPropsList={props.delTodoPropsContainer}
            setUpdateList={props.setUpdateContainer}
          />
        ))}
      </ul>
    </div>
  );
};
export default TodosList