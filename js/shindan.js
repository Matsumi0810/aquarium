// 診断のjs
const resultData = {
  1111: {
    title: "あなたは規律を守る頼れるリーダー''マグロ''タイプ",
    description:
      "強い責任感で群れを統率し、ルールに基づいた的確な判断で目的地へと導きます。\n止まることなく突き進む圧倒的な行動力は、周囲に安心感を与えるリーダーの証です。",
    image: "images/shindan/maguro.png",
  },
  1112: {
    title: "あなたは職人気質で几帳面なカニ''カニ''タイプ",
    description:
      "細部まで決して妥協せず、地道な努力を積み重ねて完璧な成果を導き出します。\n自らの役割を忠実に遂行する誠実さと、硬い甲羅のような堅実な仕事ぶりが魅力です。",
    image: "images/shindan/kani.png",
  },
  1121: {
    title: "あなたは社交的で助け合いが得意な''ペンギン''タイプ",
    description:
      "周囲への細やかな配慮を欠かさず、仲間同士の絆を何よりも大切にするムードメーカーです。\n困っている存在を放っておけない献身的な姿勢で、温かいコミュニティを築き上げます。",
    image: "images/shindan/pengin.png",
  },
  1122: {
    title: "あなたは好奇心旺盛で戦略的な''タコ''タイプ",
    description:
      "高い知能と冷静な分析力を持ち、複雑な問題に対しても独自の解を導き出します。\n柔軟な思考で幾多の戦略を練り上げ、静かに、しかし確実に目標を達成へと導きます。",
    image: "images/shindan/tako.png",
  },
  1211: {
    title: "あなたは海域を支配する知略家''サメ''タイプ",
    description:
      "鋭い洞察力で海の全貌を把握し、目的達成のために最も効率的なルートを導き出します。\n強靭な意志と圧倒的なカリスマ性で、困難な状況下でも大胆に道を切り拓きます。",
    image: "images/shindan/shark.png",
  },
  1212: {
    title: "あなたは静かに支える気配り職人''カメ''タイプ",
    description:
      "目立たぬ場所でも誰かのために尽くし、穏やかな慈愛で周囲を包み込む守護者です。\n一度決めた約束は必ず守る誠実さを持ち、長い時間をかけて揺るぎない信頼を築きます。",
    image: "images/shindan/kame.png",
  },
  1221: {
    title: "あなたは海のギャング、カリスマ的な魅力あふれる''シャチ''タイプ",
    description:
      "高い共感力で仲間の心をつかみ、理想的な未来に向かって集団を鼓舞する情熱家です。\n恐れ知らずの勇気と他者への深い愛情を併せ持ち、誰もがついていきたくなる輝きを放ちます。",
    image: "images/shindan/orca.png",
  },
  1222: {
    title: "あなたは未来を予知する予言者クジラ''クジラ''タイプ",
    description:
      "深い思慮と鋭い直感によって、目に見えない本質や世界の行く末を見通します。\n静かな海のような包容力を持ち、自らの信念に基づいて理想の世界を追い求めます。",
    image: "images/shindan/kujira.png",
  },
  2111: {
    title: "あなたは荒波を乗りこなす冒険家''カジキ''タイプ",
    description:
      "スリルを恐れず今この瞬間に全てをかけ、驚異的な瞬発力で獲物を仕留めます。\n持ち前のバイタリティと適応力で、どんな荒波もアトラクションのように楽しみます。",
    image: "images/shindan/kajiki.png",
  },
  2112: {
    title: "あなたは一匹狼の凄腕ハンター''ウツボ''タイプ",
    description:
      "言葉よりも行動で語り、独自の技術を駆使して獲物を確実に捉える孤高の実力者です。\n危機的な状況でも冷静沈着さを失わず、最小限の動きで最大の結果を出します。",
    image: "images/res_2112.jpg",
  },
  2121: {
    title: "あなたは好奇心旺盛なトリックスター''イカ''タイプ",
    description:
      "既成概念にとらわれない斬新なアイデアを次々と生み出し、周囲を驚かせることが得意です。\n知的な刺激を求めて変幻自在に姿を変え、議論や変化を心から楽しむ探求者です。",
    image: "images/shindan/ika.png",
  },
  2122: {
    title: "あなたは独自の理論を持つ深海のナイスガイ''オウムガイ''タイプ",
    description:
      "独自の論理体系を構築し、深海のように底知れない知識欲で世界の仕組みを解明します。\n周囲に流されず、常に客観的で冷静な視点から物事の本質を追求し続けます。",
    image: "images/shindan/oumugai.png",
  },
  2211: {
    title: "あなたは楽しいこと大好き盛り上げ役''イルカ''タイプ",
    description:
      "天性の明るさとサービス精神で、どこにいても一瞬でそこをステージに変えてしまいます。\n五感をフルに使って人生を全力で楽しみ、周囲に笑顔とエネルギーを振りまきます。",
    image: "images/shindan/dollp.png",
  },
  2212: {
    title: "あなたは芸術的な色彩を持つ''チンアナゴ''タイプ",
    description:
      "繊細な感性で世界を彩り、独自の美学を持って静かに自己を表現するアーティストです。\n控えめながらも揺るぎない感性を持ち、日々の生活の中に美しさを見出します。",
    image: "images/shindan/tinA.png",
  },
  2221: {
    title: "あなたは自由奔放な海の旅人''ラッコ''タイプ",
    description:
      "無限の可能性を信じて海を漂い、キラキラとした瞳で新しい発見を楽しみ続けます。\n豊かな想像力と人懐っこさで、出会う人々に夢と希望を与えるハッピーな旅人です。",
    image: "images/shindan/rakko.png",
  },
  2222: {
    title: "あなたは夢見心地な空想家''クラゲ''タイプ",
    description:
      "深い感受性と豊かな想像力に身を任せ、理想とする美しい世界を心の中で描きます。\n自分自身の価値観を大切にしながら、優しく穏やかなリズムで人生を自由に泳ぎます。",
    image: "images/shindan/kurage.png",
  },
};

/**
 * 診断ボタンが押された時の処理
 */
function checkResult() {
  const form = document.getElementById("shindan-form");
  const formData = new FormData(form);

  // 全て回答されているかチェック
  const answeredCount = [...formData.values()].length;
  if (answeredCount < 4) {
    alert("まだ答えていない質問があります！");
    return;
  }

  // スコアを合計する
  let totalScore = 0;
  for (let value of formData.values()) {
    totalScore += parseInt(value);
  }

  // 対応する診断データを取得
  const result = resultData[totalScore];

  // 表示エリアを取得
  const resultArea = document.getElementById("result-area");

  // ★中身を書き換える（画像＋タイトル＋解説）
  // innerHTMLを使うことでHTMLタグを動的に作成します
  resultArea.innerHTML = `
    <h3 id="result-title" style="color:#007bff; font-size:1.5rem; margin-bottom:15px; text-align: center;"> 
        ${result.title}
    </h3>
    <div style="margin-bottom:20px; text-align: center;"> <img src="${result.image}" alt="${result.title}" style="width:100%; max-width:300px;">
    </div>
    <p id="result-text" style="white-space: pre-wrap; line-height:1.6; text-align:left; background:#f9f9f9; padding:15px; border-radius:8px;">${result.description}</p>
`;

  // エリアを表示する
  resultArea.style.display = "block";

  // 結果の位置までスムーズにスクロール
  resultArea.scrollIntoView({ behavior: "smooth" });
}
