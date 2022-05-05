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
        title: action.title,
        desc: action.desc,
        author: action.author,
	dateCreated: action.dateCreated
      };
      return [newTodo, ...state];
    case 'TOGGLE_TODO':
      if (action.completed)
        return (state.filter(todo => todo.key === action.dateCreated)).map(todo => todo.completed = action.completed);
    case 'DELETE_TODO':
      state = state.filter(todo => action.completed === true);
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
