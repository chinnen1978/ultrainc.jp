$(document).ready(function(){
   setTimeout(function(){
       // ウィンドウ幅767px以下のときになんかする
      if ($(window).width() < 767) {
            $('#iloveyou').lazylinepainter(
            {
               "svgData": pathObjMini,
               "strokeWidth": 2,
               "strokeColor": "#fff"
           }).lazylinepainter('paint');
           setTimeout(function() {
           }, 2000);

       } else {
           $('#iloveyou').lazylinepainter(
            {
               "svgData": pathObj,
               "strokeWidth": 3,
               "strokeColor": "#fff"
           }).lazylinepainter('paint');

           setTimeout(function() {
           }, 2000);
       }
   },700);
});
