// todoの作成画面

export default function Create() {
  return (
    <>
      <h1>NEW TODO</h1>
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
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%' }}></div>
           <p>Status</p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <label>
                <input type="radio" name="status" value="未着手" />
                未着手
              </label>
              <label>
                <input type="radio" name="status" value="作業中" />
                作業中
              </label>
              <label>
                <input type="radio" name="status" value="完了" />
                完了
              </label>
            </div>
      </div>

            
           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
      <button style={{ marginLeft: 'auto' }}>作成</button>
    </div>
        
         
    </>
  );
}
