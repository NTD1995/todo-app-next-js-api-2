// todoの作成画面


export default function Create() {
  
  return (
    <>
      <h1>NEW TODO</h1>
      <li style={{ listStyle: 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <p style={{ width: '50%', textAlign: 'start' }}></p>
              <div style={{ width: '25%'}}>
                <button>戻る</button>
              </div>
            </div>
        </li>
      <div style={{ padding: '16px', textAlign: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column',alignItems: 'center', gap: '16px' }}>
          <div style={{ width: '100%',  }}>
            <p>Title</p>
             <textarea
          style={{ width: '40em', border: '1px solid #333' }}
        />
          </div>
         <div style={{ width: '100%' }}>
            <p>Detail</p>
            <textarea
          style={{ width: '40em', border: '1px solid #333' }}
        />
          </div>
          <div style={{ width: '100%' }}>
            <p>Status</p>
              <button>未着手</button>
               <button>作業中</button>
                <button>完了</button>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <p style={{ width: '50%', textAlign: 'start' }}></p>
              <div style={{ width: '25%'}}>
                <button>作成</button>
              </div>
            </div>
    </>
  );
}
