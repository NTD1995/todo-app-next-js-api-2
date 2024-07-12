"use client";

import styles from './page.module.css';
import { useState } from 'react';

type Todo = {
  id: number;
  title: string;
  status: string;
  detail: string;
};

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, title: 'テスト1', status: '未着手', detail: '詳細1' },
    { id: 2, title: 'テスト2', status: '作業中', detail: '詳細2' },
    { id: 3, title: 'テスト3', status: '完了', detail: '詳細3' },
  ]);

  const [todoTitle, setTodoTitle] = useState('');
  const [todoId, setTodoId] = useState(todos.length + 1);
  const [todoDetail, setTodoDetail] = useState('');
  const [todoStatus, setTodoStatus] = useState('未着手');
  const [isEditable, setIsEditable] = useState(false);
  const [editId, setEditId] = useState<number | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
   const [newDetail, setNewDetail] = useState('');
   const [newStatus, setNewStatus] = useState('');

  const handleAddTodo = () => {
    if (todoTitle === '') return;

    setTodos([...todos, { id: todos.length + 1, title: todoTitle, status: todoStatus, detail: todoDetail }]);
    setTodoTitle('');
    setTodoDetail('');
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEditTodo = () => {
    if (editId !== null) {
      setTodos(todos.map((todo) => todo.id === editId ? { ...todo, title: todoTitle, detail: todoDetail, status: todoStatus } : todo));
      setIsEditable(false);
      setEditId(null);
      setTodoTitle('');
      setTodoDetail('');
    }
  };

  const handleEditFormOpen = (todo: Todo) => {
    setIsEditable(true);
    setEditId(todo.id);
    setTodoTitle(todo.title);
    setTodoDetail(todo.detail);
    setTodoStatus(todo.status);
  };

   const handleEditStatusChange = (e: any) => {
    setNewStatus(e.target.value);
  };

   const handleEditDetailChange = (e: any) => {
    setNewDetail(e.target.value);
  };

  const handleSort = (key: keyof Todo) => {
    const newOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newOrder);
    const sortedTodos = [...todos].sort((a, b) => {
      if (a[key] < b[key]) return newOrder === 'asc' ? -1 : 1;
      if (a[key] > b[key]) return newOrder === 'asc' ? 1 : -1;
      return 0;
    });
    setTodos(sortedTodos);
  };

  return (
    <div>
      <h1>TODOリスト</h1>
      
      <div>
        <label>
          タイトル:
          <input value={todoTitle} onChange={(e) => setTodoTitle(e.target.value)} style={{ width: '20em', border: '1px solid #333' }} />
        </label>
        <label>
          詳細:
          <input value={todoDetail} onChange={(e) => setTodoDetail(e.target.value)}   style={{ width: '20em', border: '1px solid #333' }} />
        </label>
        <div>
        <button onClick={() => handleSort('status')}>状況を並び替える</button>
      </div>
        <label>
          状況:
          <select value={todoStatus} onChange={(e) => setTodoStatus(e.target.value)}>
            <option value="未着手">未着手</option>
            <option value="作業中">作業中</option>
            <option value="完了">完了</option>
          </select>
        </label>
        <button onClick={isEditable ? handleEditTodo : handleAddTodo}>{isEditable ? '編集を保存' : '作成'}</button>
      </div>
      
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input value={todo.title} onChange={handleEditDetailChange} />
            <select value={todo.status} onChange={handleEditStatusChange}>
              <option value="未着手">未着手</option>
              <option value="作業中">作業中</option>
              <option value="完了">完了</option>
            </select>
            <button onClick={() => handleEditFormOpen(todo)}>編集</button>
            <button onClick={() => handleDeleteTodo(todo.id)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
