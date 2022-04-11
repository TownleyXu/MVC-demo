import $ from "jquery";
import "./app2.css";


const $tabBar = $('#app2 .tab-bar')
const $tabContent = $('#app2 .tab-content')

$tabBar.on('click', 'li', (e) => {
    const $li = $(e.currentTarget);
    $li.addClass('selected')
        .siblings().removeClass('selected')
    const index = $li.index();
    //操作DOM元素不要用show、hide、css
    //样式和功能分离
    $tabContent.children()
        .eq(index).addClass('active')
        .siblings().removeClass('active')
})

//自动触发click事件
$tabBar.children().eq(0).trigger('click')