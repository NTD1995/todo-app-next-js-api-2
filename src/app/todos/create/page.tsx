// todoの作成画面
"use client";

import React, { useState } from 'react';

export default function Create() {
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');
  const [status, setStatus] = useState('未着手');
  const [todos, setTodos] = useState([]);

  const handleCreateTodo = () => {
    const newTodo = {
      title,
      detail,
      status,
    };
    setTodos([...todos, newTodo]);
    setTitle('');
    setDetail('');
    setStatus('未着手');
  };

  return (
    <>
      <h1>NEW TODO</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
        <button style={{ marginLeft: 'auto' }}>戻る</button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '20px', padding: '20px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%' }}>
          <p>Title</p>
          <input
            style={{ width: '100%' }}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%' }}>
          <p>Detail</p>
          <textarea
            style={{ width: '100%', height: '100px' }}
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
          ></textarea>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%' }}>
          <p>Status</p>
          <div style={{ display: 'flex', gap: '10px' }}>
            <label>
              <input
                type="radio"
                name="status"
                value="未着手"
                checked={status === '未着手'}
                onChange={(e) => setStatus(e.target.value)}
              />
              未着手
            </label>
            <label>
              <input
                type="radio"
                name="status"
                value="作業中"
                checked={status === '作業中'}
                onChange={(e) => setStatus(e.target.value)}
              />
              作業中
            </label>
            <label>
              <input
                type="radio"
                name="status"
                value="完了"
                checked={status === '完了'}
                onChange={(e) => setStatus(e.target.value)}
              />
              完了
            </label>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
        <button style={{ marginLeft: 'auto' }} onClick={handleCreateTodo}>作成</button>
      </div>

      <div style={{ padding: '20px' }}>
        <h2>TODO List</h2>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              <h3>{todo.title}</h3>
              <p>{todo.detail}</p>
              <p>Status: {todo.status}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
