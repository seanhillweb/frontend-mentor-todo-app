export const ACTIONS = {
  ADD_TODO: "ADD_TODO",
  DELETE_TODO: "DELETE_TODO",
  TOGGLE_TODO: "TOGGLE_TODO",
  CLEAR_COMPLETE: "CLEAR_COMPLETE",
  COUNT: "COUNT",
};

export function AppReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...state, addTodoShape(action.payload)];
    case ACTIONS.DELETE_TODO:
      return state.filter((item) => item.id !== action.payload);
    case ACTIONS.TOGGLE_TODO:
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, completed: !item.completed };
        }
        return item;
      });
    case ACTIONS.CLEAR_COMPLETE:
      return state.filter((item) => item.completed === false);
    default:
      return state;
  }
}

function addTodoShape(content) {
  return { id: Date.now(), content: content, completed: false };
}
