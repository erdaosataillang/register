function doPost(e) {
// スプレッドシートのIDとシート名を指定
var ss = SpreadsheetApp.openById('スプレッドシートID');
var sheet = ss.getSheetByName('シート名');

// フォームから送信されたデータを取得
var user = e.parameter.username;
var pass = e.parameter.password;

// ユーザーネームがすでに存在するか確認
var usernames = sheet.getRange(2, 1, sheet.getLastRow()-1, 1).getValues().flat(); // 2行目から最終行までのユーザーネームを取得
if (usernames.indexOf(user) !== -1) { // ユーザーネームが存在する場合
return ContentService.createTextOutput('Error: username already exists');
}

// 新しい行をスプレッドシートに追加
sheet.appendRow([user, pass]);

// レスポンスを返す
return ContentService.createTextOutput('OK');
}
