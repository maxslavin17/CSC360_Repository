var UUID = require('uuid-js');

function userReducer (state, action) {
  switch (action.type) {
    case 'LOGIN':
    case 'REGISTER':
      return action.username;
    case 'LOGOUT':
      return '';
    default:
      return state;
  }
}

function todoReducer (state, action) {
  switch (action.type) {
    case 'CREATE_TODO':
      const newTodo = {
	id: UUID.create(),
        title: action.title,
        desc: action.desc,
        author: action.author,
	dateCreated: action.dateCreated,
	dateCompleted: action.dateCompleted,
	complete: false
      };
      return [newTodo, ...state];
    case 'TOGGLE_TODO':
      const updatedTodos = action.todos.map(	
            (todo) => todo.id === action.id ? action.updatedTodo : todo
      );
      return updatedTodos;
    case 'DELETE_TODO':
      const oneLessTodo = action.todos.filter((todo) => todo.id !== action.id);
      return oneLessTodo;
    case 'FETCH_TODOS':
      return action.todos;
    default:
      return state;
  }
}

export default function appReducer (state, action) {
  return {
    user: userReducer(state.user, action),
    todos: todoReducer(state.todos, action)
  }
}
