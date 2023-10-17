$(function(){
    //***********************************
    
    /* ▼ここから初期設定 */
    // 1. メニューを囲んでるdivのid
    var menuWrap = "#menu_wrap"
    
    // 2.ボタンクリック時に現れる領域のid
    var sideMenu = ‘#sidemenu‘
    
    // 3.ボタンのid
    var sidemenKey = ‘#sidemenu_key‘
    
    // 4.メニューの横幅（px）
    var menuWidth = ‘150‘
    
    // 5.メニューが閉じてる時のボタンの中身（textでも画像でも可）
    var closeHtml = ‘→‘
    
    // 6.メニューが開いてる時のボタンの中身（textでも画像でも可）
    var openHtml = ‘←‘
    
    // 7.開閉アニメーションの速さ（単位ミリ秒）
    var speed = 300
    
    //***********************************