function performSearch() {
    const keyword = document.getElementById('search').value.trim();
    if (keyword === '') {
        alert('徐家龙提示你：请输入内容后搜索！');
        return;
    }
    const encodedKeyword = encodeURIComponent(keyword);
    const url = `https://www.baidu.com/s?wd=${encodedKeyword}`;
    window.open(url, '_blank');
}

/* 以下要实现当鼠标点击搜索框时，搜索框中的提示文本消失 */
var searchInput = document.getElementById('search');

searchInput.onfocus = function () {
    this.placeholder = '';
};


searchInput.onblur = function () {
    this.placeholder = '真能搜索我不骗你！！！';
};
/* 以上要实现当鼠标点击搜索框时，搜索框中的提示文本消失 */






var toolList = document.querySelectorAll('#content .skill>div');
for (let i = 0; i < toolList.length; i++) {
    toolList[i].onmouseover = function () {
        this.setAttribute('title', '双击可以删除该项');
        this.style.background = '#53cac3';
        this.style.color = '#fff';
    }
    toolList[i].onmouseout = function () {
        this.setAttribute('title', '');
        this.style.background = '#fff';
        this.style.color = '#53cac3';
    }
    toolList[i].ondblclick = function () {
        this.remove();
    }
}

// 以下给页脚绑定事件顺序不能变！！！！！！1
var footer = document.querySelector('#footer');
footer.style.background = 'linear-gradient(300deg,#01524C,#000,#01524C)';// 设置默认背景样式
footer.onmouseout = function () {
    this.style.background = 'linear-gradient(300deg,#01524C,#000,#01524C)';
}
footer.onmouseover = function () {
    this.style.background = 'linear-gradient(150deg,#000,#094949,#000,#094949)';
}

//以下导航点击变色，其他人取消颜色
var navList = document.querySelectorAll('#BBB .a > a');
for (let i = 0; i < navList.length; i++) {
    navList[i].onclick = function () {
        for (let j = 0; j < navList.length; j++) {
            navList[j].classList.remove('active')
        }
        this.classList.add('active');
    }
}



let oClock = document.querySelector('#clock')
let addZero = (num) => {
    if (num >= 10) {
        return num;
    } else {
        return `0${num}`;
    }
}
let updateTime = () => {
    let now = new Date()
    let time = addZero(now.getHours()) + ":" +
        addZero(now.getMinutes()) + ":" + addZero(now.getSeconds());
    oClock.innerText = time;
}
updateTime();
setInterval(updateTime, 1000); 


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
  } 