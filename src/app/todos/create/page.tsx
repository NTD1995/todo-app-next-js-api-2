// todoの作成画面

export default function Create() {
  return (
    <>
      <h1>NEW TODO</h1>
      <li style={{ listStyle: 'none' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <p style={{ width: '50%', textAlign: 'start' }}></p>
          <div style={{ width: '25%' }}>
            <button>戻る</button>
          </div>
        </div>
      </li>
      <div style={{ padding: '16px', textAlign: 'center' }}>
<<<<<<< HEAD
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
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <p style={{ width: '50%', textAlign: 'start' }}></p>
              <div style={{ width: '25%'}}>
                <button>作成</button>
              </div>
            </div>
        </div>
       </div>   
=======
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
          <div style={{ width: '100%' }}>
            <p>Title</p>
            <textarea style={{ width: '40em', border: '1px solid #333' }} />
          </div>
          <div style={{ width: '100%' }}>
            <p>Detail</p>
            <textarea style={{ width: '40em', border: '1px solid #333' }} />
          </div>
          <div style={{ width: '100%' }}>
            <p>Status</p>
            {/* TODO: ここはbuttonではなく、inputを使ってラジオボタンで実装しましょう！ */}
            {/* 参考：https://zero-plus.io/media/how-to-implement-a-radio-button/ */}
            <button>未着手</button>
            <button>作業中</button>
            <button>完了</button>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <p style={{ width: '50%', textAlign: 'start' }}></p>
        <div style={{ width: '25%' }}>
          <button>作成</button>
        </div>
      </div>
>>>>>>> 61c95733a1e65c20486a058cb7ff7ec6ddca2e3c
    </>
  );
}
