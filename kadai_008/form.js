$(function(){
    $(`.btn`).on(`click`,function(){
        // テキストボックス内に『クリックしました！』と表示させる(HTML要素のvalue属性の値を変更する)
        $(`.text-box`).val(`クリックしました！`);
    });
});