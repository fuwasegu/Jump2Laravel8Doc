//最新のバージョン
const latestVersion = '8.x';
//バージョン部分を表すRegExp
const versionRegex = /[0-9]\.([0-9]|x|dev)/
//現在のURLを配列として取得
const currentPageUrl = location.href;
const currentPageUrlArray = currentPageUrl.split('/');
const replacedUrl = currentPageUrlArray.map(part => part.match(versionRegex) ? latestVersion : part).join('/');
if (replacedUrl !== currentPageUrl) {
  //遷移先にページがあるかどうかをHEADリクエストで確認
  fetch(replacedUrl, { method: "HEAD" })
    .then(response => {
      if (!response.ok) throw Error("先読みエラー")
      //遷移前の履歴を残さずに遷移
      location.replace(replacedUrl);
    }).catch(() => {
      alert(`バージョン${latestVersion}のドキュメントページは存在しないようです.このページにとどまります．`);
    });
}
