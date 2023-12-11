import './AboutUs.scss'
import config from '../config.json'
import { FaPlus } from 'react-icons/fa';

const Content = () => {
  const clickHandler = () => {
    if (config.form_url) {
      window.location.href = config.form_url
    }
  }


  return (
    <div className="about-us">
      <div className="container">
        <div className="branding">
          <div className="image"><img src={`${process.env.PUBLIC_URL}/icon-pwamap.svg`} alt=""/></div>
          <div className="logo">佐和田料飲店組合MAP2024</div>
        </div>

   <div className="map2024">佐和田料飲店組合MAP2024</div>
      <div className="map-container">
        <p className="map">
          <b>おでわんMAPとは</b>
        </p>
        <p className="blank-line">
          <b>&nbsp;</b>
        </p>
        <p className="blank-line">🐾 愛犬と一緒に入れる飲食店</p>
        <p className="blank-line">🐾 愛犬と泊まれるホテル・宿</p>
        <p className="blank-line">🐾 ドッグラン</p>
        <p className="blank-line">
          カテゴリの施設情報を地図上に表示しています（全国版）
        </p>
        <p className="blank-line">&nbsp;</p>
        <p className="blank-line">
          最大の特徴は実際におでかけしてきた飼い主様からの感想や写真で構成しているところ！
        </p>
        <p className="blank-line">&nbsp;</p>
        <p className="blank-line">掲載している施設数は1400件超！</p>
        <p className="blank-line">（2023年1月現在）</p>
        <p className="blank-line">
          2019年のおでかけわんこ部運営開始から毎日たくさんのおでかけ情報や写真を提供頂いております。
        </p>
        <p className="blank-line">&nbsp;</p>
        <p className="blank-line">
          おでわんMAPは全国のわんちゃんのおでかけの思い出がたっぷり詰まった愛情たっぷりのMAPです。
        </p>
        <p className="blank-line">&nbsp;</p>
        <p className="map">
          <b>おでわんMAPでできること</b>
        </p>
      </div>
      <div className="div">
        <p className="blank-line">
          01. 全国の愛犬と一緒に行けるスポットを地図で探せる
        </p>
        <p className="blank-line">02. アイコンをタップするとさらに詳細ページへ</p>
        <p className="blank-line">
          03. 探し方色々！カテゴリで絞り込み検索や現在位置から近い順で探せる
        </p>
      </div>
      <div className="map-map">
        <p className="blank-line">
          <b className="map4">おでわんMAPを使う方法は？</b>
        </p>
        <p className="blank-line">
          <b className="map4">&nbsp;</b>
        </p>
        <p className="blank-line">
          <span
            >「おでわんMAP」はおでかけわんこ部メールマガジン（無料部員）への登録で無料で利用可能です。
          </span>
        </p>
        <p className="blank-line">
          <span>メールマガジン登録フォームは </span>
          <a className="a" href="https://form.run/@odewan-member" target="_blank" rel="noopener noreferrer">
            <span>
              <span className="span">こちら</span>
            </span>
          </a>
          <span>&nbsp; </span>
        </p>
        <p className="blank-line">
          <span>おでかけわんこ部とは </span>
        </p>
        <p className="blank-line">
          <span>愛犬とのおでかけ情報を発信しているメディアです。 </span>
        </p>
        <p className="blank-line">
          <span>&nbsp; </span>
        </p>
        <p className="blank-line">
          <span>「週末このカフェに行ってみようか?」 </span>
        </p>
        <p className="blank-line">
          <span>「この景色を一緒に見にいこう!!」 </span>
        </p>
        <p className="blank-line">
          <span>&nbsp; </span>
        </p>
        <p className="blank-line">
          <span
            >愛犬との楽しいおでかけのきっかけ作りサポートし「飼い主さんとわんこをHAPPYにする」ことが目的です。
          </span>
        </p>
        <p className="blank-line">
          <span>&nbsp; </span>
        </p>
        <p className="blank-line">
          <span>webサイト: </span>
          <a className="a" href="https://odekake-wanko-bu.com/" target="_blank" rel="noopener noreferrer">
            <span>
              <span className="span">https://odekake-wanko-bu.com</span>
            </span>
          </a>
        </p>
        <p className="blank-line">
          <a className="a" href="https://odekake-wanko-bu.com/" target="_blank" rel="noopener noreferrer">
            <span>
              <span className="span">&nbsp;</span>
            </span>
          </a>
        </p>
        <p className="blank-line">
          <span>Instagram: </span>
          <a
            className="a"
            href="https://www.instagram.com/odewanbu/"
            target="_blank" rel="noopener noreferrer"
          >
            <span>
              <span className="span">@odewanbu</span>
            </span>
          </a>
        </p>
        <p className="blank-line">
          <span>&nbsp; </span>
        </p>
        <p className="blank-line">
          <span>おでかけレポート募集中 </span>
        </p>
        <p className="blank-line">
          <span>&nbsp; </span>
        </p>
        <p className="blank-line">
          <span
            >あなたの大切な愛犬とのおでかけの思い出を全国の飼い主さまにもシェアしませんか？
          </span>
        </p>
        <p className="blank-line">
          <span>&nbsp; </span>
        </p>
        <p className="blank-line">
          <span
            >＼こんな情報を募集しております／「愛犬と入れるカフェ」「愛犬と泊まれる宿」「ドッグラン」
          </span>
        </p>
      </div>
      <div className="parent">
        <img className="icon" alt="" src="./public/@2x.png" />

        <img className="icon1" alt="" src="./public/1@2x.png" />

        <img className="icon2" alt="" src="./public/2@2x.png" />

        <img className="icon3" alt="" src="./public/3@2x.png" />

        <img className="icon4" alt="" src="./public/4@2x.png" />

        <img className="icon5" alt="" src="./public/5@2x.png" />

      </div> 
        
        <p>これは佐和田飲食店マップです。ただいま開発中です。予めご了承下さい。</p>
        <p>プログラムはオープンソースで公開しているため、自由にカスタマイズしてご利用いただけます。</p>

        <h2> Geolonia PWAマップについて</h2>
        <p><a href="https://blog.geolonia.com/2022/05/17/pwamap-beta.html" target='_blank' rel="noreferrer">https://blog.geolonia.com/2022/05/17/pwamap-beta.html</a></p>

        <p>また、独自ドメインでの利用やデザインのカスタマイズや利用に必要な緯度・経度情報の提供も有償で別途承ります。ご希望の方は下記までお問い合わせください。</p>

        <h2>お問い合わせフォーム</h2>
        <p><a href="https://geolonia.com/contact/" target='_blank' rel="noreferrer">https://geolonia.com/contact/</a></p>
        <p>※カスタマイズおよびアプリの作成・利用についてはサポート対象外となります。あらかじめご了承ください。</p>

        {config.form_url?
          <>
            <h2>データの更新について</h2>
            <p>このアプリのデータを更新するには下の「 + 」ボタンを押してフォームに必要な情報を入力してください。</p>
            <div className="goto-form"><button><FaPlus color="#FFFFFF" onClick={clickHandler} /></button></div>
          </>
          :
          <></>
        }
      </div>
    </div>
  );
};

export default Content;
