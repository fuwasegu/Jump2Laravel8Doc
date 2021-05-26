//現在のURLを取得
let currentPageUrl = location.href;
//正規表現でドキュメントのバージョンを取得
let versionStr = currentPageUrl.match(/\/[0-9]\.([0-9]|x)\//);
//遷移先URLの初期化
let newUrl = '';
if (versionStr !== null && versionStr[0] !== '/8.x/') {
    //8.xのURLに書き換え
    newUrl = currentPageUrl.replace(versionStr[0], '/8.x/');

    //遷移先にページがあるかどうか
    fetch(newUrl)
    .then(response => {
        if (response.status === 200) {
            //遷移前の履歴を残さずに遷移
            location.replace(newUrl);
        }else{
            alert('8.x系のドキュメントページは存在しないようです.このページに止まります．')
        }
    });
}
