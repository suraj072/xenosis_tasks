// src/components/TodoItem.js
import React, { useState } from "react";
import "./TodoItem.css";

const TodoItem = ({ todo, index, deleteTodo, editTodo, toggleComplete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(todo.task);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTodo(index, newTask);
    setIsEditing(false);
  };

  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      {isEditing ? (
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
      ) : (
        <span onClick={() => toggleComplete(index)}>{todo.task}</span>
      )}
      <div className="buttons">
        {isEditing ? (
          <button onClick={handleSave}>Save</button>
        ) : (
          <button onClick={handleEdit}>Edit</button>
        )}
        <button onClick={() => deleteTodo(index)}>Delete</button>
      </div>
    </li>
  );
};

export default TodoItem;
