

window.onload = function () {
    //屏蔽键盘事件
    document.onkeydown = function () {
      var e = window.event || arguments[0];
      //F12
      if (e.keyCode == 123) {
        return false;
      }
      //Ctrl+Shift+I
      else if ((e.ctrlKey) && (e.shiftKey) && (e.keyCode == 73)) {
        return false;
      }
      //Shift+F10
      else if ((e.shiftKey) && (e.keyCode == 121)) {
        return false;
      }
      //Ctrl+U
      else if ((e.ctrlKey) && (e.keyCode == 85)) {
        return false;
      }
    };

    //屏蔽鼠标右键
    document.oncontextmenu = function () {
      return false;
    }


    // 显示弹窗
    modal.style.display = "block";

}


document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.key === 'u') {
    event.preventDefault(); // 阻止默认行为
    alert("禁止查看页面源代码");
  }
});