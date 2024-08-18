// todo一覧画面
import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

export default function Todos() {
  const { todos } = useContext(TodoContext);
  
  return (
    <>
      <h1>TODOリスト</h1>
      <div>
        <label>
          状況:
          <select>
            <option value="未着手">未着手</option>
            <option value="作業中">作業中</option>
            <option value="完了">完了</option>
          </select>
        </label>
        <button>状況を並び替える</button>
        <button>作成</button>
      </div>

      <div style={{ padding: '16px', textAlign: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ width: '50%', textAlign: 'start' }}>
            <p>Title</p>
          </div>
          <div style={{ width: '25%' }}>
            <p>Status</p>
          </div>
          <div style={{ width: '25%' }}>
            <p>Action</p>
          </div>
        </div>
        <ul>
          <li style={{ listStyle: 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <p style={{ width: '50%', textAlign: 'start' }}>タイトル1</p>
              <select style={{ width: '25%' }}>
                <option value="未着手">未着手</option>
                <option value="作業中">作業中</option>
                <option value="完了">完了</option>
              </select>
              <div style={{ width: '25%' }}>
                <button>編集</button>
                <button>削除</button>
              </div>
            </div>
          </li>
          <li style={{ listStyle: 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <p style={{ width: '50%', textAlign: 'start' }}>タイトル2</p>
              <select style={{ width: '25%' }}>
                <option value="未着手">未着手</option>
                <option value="作業中">作業中</option>
                <option value="完了">完了</option>
              </select>
              <div style={{ width: '25%' }}>
                <button>編集</button>
                <button>削除</button>
              </div>
            </div>
          </li>
          <li style={{ listStyle: 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <p style={{ width: '50%', textAlign: 'start' }}>タイトル3</p>
              <select style={{ width: '25%' }}>
                <option value="未着手">未着手</option>
                <option value="作業中">作業中</option>
                <option value="完了">完了</option>
              </select>
              <div style={{ width: '25%' }}>
                <button>編集</button>
                <button>削除</button>
              </div>
            </div>
          </li>
          <li style={{ listStyle: 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <p style={{ width: '50%', textAlign: 'start' }}>タイトル4</p>
              <select style={{ width: '25%' }}>
                <option value="未着手">未着手</option>
                <option value="作業中">作業中</option>
                <option value="完了">完了</option>
              </select>
              <div style={{ width: '25%' }}>
                <button>編集</button>
                <button>削除</button>
              </div>
            </div>
          </li>
          <li style={{ listStyle: 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <p style={{ width: '50%', textAlign: 'start' }}>タイトル5</p>
              <select style={{ width: '25%' }}>
                <option value="未着手">未着手</option>
                <option value="作業中">作業中</option>
                <option value="完了">完了</option>
              </select>
              <div style={{ width: '25%' }}>
                <button>編集</button>
                <button>削除</button>
              </div>
            </div>
          </li>
          <li style={{ listStyle: 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <p style={{ width: '50%', textAlign: 'start' }}>タイトル6</p>
              <select style={{ width: '25%' }}>
                <option value="未着手">未着手</option>
                <option value="作業中">作業中</option>
                <option value="完了">完了</option>
              </select>
              <div style={{ width: '25%' }}>
                <button>編集</button>
                <button>削除</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
