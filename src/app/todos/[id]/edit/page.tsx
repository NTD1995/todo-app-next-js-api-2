// todoの編集画面
export default function Edit() {
  return (
    <>
      <h1>EDIT TODO</h1>
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
        <button style={{ marginLeft: 'auto' }}>更新 </button>
      </div>
    </>
  );
}
