//动态标题
var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
  if (document.hidden) {
    //离开当前页面时标签显示内容
    document.title = '🥹你跑哪里去了~';
    clearTimeout(titleTime);
  } else {
    //返回当前页面时标签显示内容
    document.title = '😄欢迎回来～';
    //两秒后变回正常标题
    titleTime = setTimeout(function () {
      document.title = OriginTitile;
    }, 2000);
  }
});

document.addEventListener("copy", function () {
    new Vue({
        data: function () {
            this.$notify({
                title: "哎嘿！复制成功🍬",
                message: "扒源记住要遵循GPL协议！",
                position: 'top-left',
                offset: 50,
                showClose: true,
                type: "warning",
                duration: 5000
            });
        }
    })
    // 弹窗语句
    })

