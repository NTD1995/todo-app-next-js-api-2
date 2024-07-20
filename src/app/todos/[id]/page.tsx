// todoの詳細画面

export default function Detail() {
  return (
    <>
      <h1>SHOW TODO</h1>
       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
      <button style={{ marginLeft: 'auto' }}>戻る</button>
    </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '20px', padding: '20px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%' }}>
        <p>Title</p>
        <input style={{ width: '100%' }} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%' }}>
        <p>Detail</p>
        <textarea style={{ width: '100%', height: '100px' }}></textarea>
      </div>
    </div>
         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <button>削除</button>
        <button>編集</button>
      </div>
      </div>
    </>
  );
}
