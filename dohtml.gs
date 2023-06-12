function doGet() {
 const htmlOutput = HtmlService.createTemplateFromFile("index");

 return htmlOutput
   .evaluate()
   .setTitle("会員登録画面")
   .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}
