var $timerButton = (function(){
    var html = '<input type="button" value="同意(6s)" disabled>',
        num = 6,
        timer;
    
    function show(container){
        //1.DOM绘制
        $(container).html(html);
        
        //2.事件绑定
    }

    // timer = setInterval(function(){
    //     num--;
    //     if(num === 0){
    //         clearInterval(timer);
    //         $btn.val('同意');
    //         $btn.removeAttr('disabled');
    //     }else{
    //         $btn.val('同意('+num +'s)');
    //     }
    // },1000);

    // $btn.click(function(){
    //     alert('就知道你会同意的！');
    // });
    return{
        show:show
    };


}());





//不用page load event(不用页面加载的页面)
/*封装成对象，有几种方案
1.全局对象：弊端=>不完全是面向对象，即在花括号里面不能封装私有方法
var timerBtn={
    show:function()
}
2.工厂函数，一个函数返回值是一个简单对象
var timerBtn = (function(){
    return{
        show:function(){}
    }
}())匿名函数
3.构造函数
function TimerBtn(){
}
var tb=new TimerBtn()
*/