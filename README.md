# Jump2Laravel8Doc
Laravelのドキュメントって，バージョン4.2から8.xまで，色々ありますよね．
最新のドキュメントが読みたいのに，ググると最初に6.xのドキュメントが出てくることは，あるあるだと思います．

本chrome extentionは，8.x以外のLaravelのドキュメントにアクセスした瞬間に，8.x版のページでジャンプさせてくれます．
もちろん，そのバージョンでしか存在しないページの場合は，飛びません．
あらかじめgetリクエストを投げて，ステータスコード200が返ってくることを確かめています．

また，ジャンプ前の履歴を残さずページ遷移するので，ブラウザバックするとgoogleの検索結果ページなり，あなたが踏んだURLが載っていたブログにスムーズに戻ります．

There are various Laravel documents from version 4.2 to 8.x, aren't there?
If you want to read the latest document, you may find the 6.x document first.

This chrome extension will jump to the 8.x version of the Laravel documentation the moment you access a non-8.x version.
Of course, if the page exists only in that version, it will not jump.
I've thrown a get request beforehand to make sure the status code 200 is returned.

Also, the page transitions without leaving any history before the jump, so when you browser back, you will be smoothly returned to the google search result page or the blog where the URL you stepped on was posted.