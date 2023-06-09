async function executePriorityActions() {
  // 禁止 Ctrl+U 和 Ctrl+S
  disableCtrlUS();

  // 继续执行其他操作
  continueExecution();
}

function disableCtrlUS() {
  // 捕捉键盘按下事件
  document.addEventListener("keydown", function(event) {
      // 按下 Ctrl+U 或 Ctrl+S
      if ((event.ctrlKey && event.key === "u") || (event.ctrlKey && event.key === "s")) {
          // 阻止默认行为
          event.preventDefault();
      }
      if (event.ctrlKey && event.key === "s") {
        // 阻止默认行为
        event.preventDefault();
        // 阻止事件冒泡和捕获
        event.stopPropagation();
        return false;
    }
  });

  window.addEventListener("beforeunload", function(event) {
    // 显示提示框，阻止用户保存页面
    event.returnValue = "离开页面将丢失未保存的数据";
});
}

function continueExecution() {
  function disableCtrlUS() {
    // 捕捉键盘按下事件
    document.addEventListener("keydown", function(event) {
        // 按下 Ctrl+U 或 Ctrl+S
        if ((event.ctrlKey && event.key === "u") || (event.ctrlKey && event.key === "s")) {
            // 阻止默认行为
            event.preventDefault();
        }

        if (event.ctrlKey && event.key === "s") {
          // 阻止默认行为
          event.preventDefault();
          // 阻止事件冒泡和捕获
          event.stopPropagation();
          return false;
      }
    });
    window.addEventListener("beforeunload", function(event) {
      // 显示提示框，阻止用户保存页面
      event.returnValue = "离开页面将丢失未保存的数据";
  });
  }
  // 这是你希望在优先操作完成后继续执行的代码
  console.log("继续执行其他操作");
}

// 调用异步函数来开始执行优先操作
executePriorityActions();





/* document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.key === 'u') {
    event.preventDefault(); // 阻止默认行为
    alert("禁止查看页面源代码");
  }
}); */