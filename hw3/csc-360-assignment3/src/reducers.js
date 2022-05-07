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
	dateCreated: Date.now(),
	complete: false
      };
      return [newTodo, ...state];
    case 'TOGGLE_TODO':
      return state.map(todo => {
        if (todo.dateCreated === action.dateCreated)
          return {
	    ...todo,
            complete: !todo.complete
          };
	return todo;
      })
    case 'DELETE_TODO':
      return state.filter(todo => todo.dateCreated !== action.dateCreated);
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
