export const ACTIONS = {
  ADD_TODO: "ADD_TODO",
  DELETE_TODO: "DELETE_TODO",
  TOGGLE_TODO: "TOGGLE_TODO",
  CLEAR_COMPLETE: "CLEAR_COMPLETE",
  SHOW_ALL_TODOS: "SHOW_ALL_TODOS",
  SHOW_ACTIVE_TODOS: "SHOW_ACTIVE_TODOS",
  SHOW_COMPLETE_TODOS: "SHOW_COMPLETE_TODOS",
};

export function AppReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case ACTIONS.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(
          (item) => item.id !== action.payload
        ),
        activeTodos: state.activeTodos.filter(
          (item) => item.id !== action.payload
        ),
        completeTodos: state.completeTodos.filter(
          (item) => item.id !== action.payload
        ),
      };
    case ACTIONS.TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((item) => {
          if (item.id === action.payload) {
            return { ...item, completed: !item.completed };
          }
          return item;
        }),
      };
    case ACTIONS.CLEAR_COMPLETE:
      return {
        ...state,
        todos: state.todos.filter((item) => item.completed === false),
        completeTodos: []
      };
    case ACTIONS.SHOW_ALL_TODOS:
      return {
        ...state,
        showTodos: true,
        showActiveTodos: false,
        showCompleteTodos: false,
      };
    case ACTIONS.SHOW_ACTIVE_TODOS:
      return {
        ...state,
        activeTodos: [
          ...state.todos.filter((item) => item.completed === false),
        ],
        showTodos: false,
        showActiveTodos: true,
        showCompleteTodos: false,
      };
    case ACTIONS.SHOW_COMPLETE_TODOS:
      return {
        ...state,
        completeTodos: [
          ...state.todos.filter((item) => item.completed === true),
        ],
        showTodos: false,
        showActiveTodos: false,
        showCompleteTodos: true,
      };
    default:
      return state;
  }
}
