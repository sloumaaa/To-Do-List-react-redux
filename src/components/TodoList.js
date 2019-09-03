import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodoAction, deleteTodoAction } from "../redux";

export default function TodoList() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  return (
    <div>
      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => dispatch(toggleTodoAction(todo.id))}
            />
            <span className={todo.complete ? "complete" : null}>
              {todo.name}
            </span>
            <span
              className="delete-button"
              onClick={() => dispatch(deleteTodoAction(todo.id))}
            >
              X
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
