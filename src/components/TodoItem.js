// import React from 'react';
// import styles from '../TodoItem.module.css';

// class TodoItem extends React.Component {
//   state = {
//     editing: false,
//   };
//   handleEditing = () => {
//     if (!this.props.stavka1.completed) {
//       this.setState({
//         editing: true,
//       });
//     } else {
//       return alert('Ne možete mijenjati završene zadatke');
//     }
//   };
//   handleUpdatedDone = (event) => {
//     if (event.key === 'Enter') {
//       this.setState({ editing: false });
//     }
//   };
//   // componentWillUnmount(){
//   //   console.log('Cleaning up...')
//   // }
//   render() {
//     const completedStyle = {
//       fontStyle: 'italic',
//       color: '#595959',
//       opacity: 0.4,
//       textDecoration: 'line-through',
//     };

//     let viewMode = {};
//     let editMode = {};
//     if (this.state.editing) {
//       viewMode.display = 'none';
//     } else {
//       editMode.display = 'none';
//     }
//     return (
//       <li className={styles.item}>
//         <div onDoubleClick={this.handleEditing} style={viewMode}>
//           <input
//             className={styles.checkbox}
//             type="checkbox"
//             checked={this.props.stavka1.completed}
//             onChange={() =>
//               this.props.handleChangePropsList(this.props.stavka1.id)
//             }
//           />
//           <button
//             onClick={() => this.props.delTodoPropsList(this.props.stavka1.id)}
//           >
//             Delete
//           </button>
//           <span style={this.props.stavka1.completed ? completedStyle : null}>
//             {this.props.stavka1.title}
//           </span>
//         </div>
//         <input
//           type="text"
//           style={editMode}
//           value={this.props.stavka1.title}
//           className={styles.textInput}
//           onChange={(e) => {
//             this.props.setUpdateList(e.target.value, this.props.stavka1.id);
//           }}
//           onKeyDown={this.handleUpdatedDone}
//         />
//       </li>
//     );
//   }
// }
// export default TodoItem;

import React, { useState,useEffect } from 'react';
import styles from '../TodoItem.module.css';

const TodoItem = (props) => {
  const [editing, setEditing] = useState(false);

  const handleEditing = () => {
    if (!props.stavka1.completed) {
      setEditing({
        editing: true,
      });
    } else {
      return alert('Ne možete mijenjati završene zadatke');
    }
  };
  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing({ editing: false });
    }
  };
   useEffect(()=>{
    console.log('Cleaning up...')
  })
  
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  let viewMode = {};
  let editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={props.stavka1.completed}
          onChange={() => props.handleChangePropsList(props.stavka1.id)}
        />
        <button onClick={() => props.delTodoPropsList(props.stavka1.id)}>
          Delete
        </button>
        <span style={props.stavka1.completed ? completedStyle : null}>
          {props.stavka1.title}
        </span>
      </div>
      <input
        type="text"
        style={editMode}
        value={props.stavka1.title}
        className={styles.textInput}
        onChange={(e) => {
          props.setUpdateList(e.target.value, props.stavka1.id);
        }}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};

export default TodoItem;
