// todoの詳細画面
export default function Detail() {
  return (
    <>
      <h1>SHOW TODO</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
        <button style={{ marginLeft: 'auto' }}>戻る</button>
      </div>
      <div style={{ width: '100%', padding: '30px', margin: '10px' }}>
        <div
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '20px', padding: '20px' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%' }}>
            <p style={{ width: '100%', border: '1px solid black' }}>Title</p>
            <p style={{ width: '100%' }}>GITHUB上に静的サイトをホスティングする</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%' }}>
            <p style={{ width: '100%', border: '1px solid black' }}>Detail</p>
            <p style={{ width: '100%' }}>
              AWSコンソールでAWS AMPLIFYを使って静的ウェブサイトをホスティングします。AWS
              AMPLIFYは、静的ウェブサイトおよびウェブアプリにフルマネージドのホスティングを提供します。AMPLIFYのホスティングソリューションは、AMAZON
              CLOUDFRONTとAMAZON S3を使って、AWSコンテンツ配信ネットワーク(CDN)を介してサイトアセットを提供します。
              <br />
              継続的デプロイをセットアップします。AMPLIFYは、継続的デプロイでGITベースのワークフローを提供します。それにより、コードコミットごとに、サイトに自動的に更新をデプロイすることができます。
            </p>
          </div>
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
