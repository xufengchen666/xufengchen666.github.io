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


// 获取弹窗元素和关闭按钮元素
var modal = document.getElementById("myModal");
var closeBtn = document.getElementsByClassName("close")[0];

// 当页面加载完成时显示弹窗
window.onload = function () {
    modal.style.display = "block";
}

// 当用户点击关闭按钮时，隐藏弹窗
closeBtn.onclick = function () {
    modal.style.display = "none";
}

// 当用户点击弹窗之外的区域时，隐藏弹窗
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}






////////////////////////////////////以下是
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

////////////////////////////////////以下是



////////////////////////////////////以下是双击可以删除
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

////////////////////////////////////

////////////////////////////////////以下是页脚绑定事件

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
////////////////////////////////////




////////////////////////////////////以下是时间
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

////////////////////////////////////





////////////////////////////////////以下是随机移动
var z = document.querySelector('.z');
function randomPosition() {
    var top = Math.random() * window.innerHeight;
    var left = Math.random() * window.innerWidth;
    z.style.top = top + 'px';
    z.style.left = left + 'px';
}
setInterval(randomPosition, 1000);
////////////////////////////////////////



/////////////////////以下是改变tlitle

var pageTitle = document.getElementById("pageTitle");
var originalTitle = pageTitle.innerHTML;
var newTitle = "你给我回来！！！";

// 当用户离开页面时，修改标题为新标题
window.onblur = function () {
    pageTitle.innerHTML = newTitle;
}

// 当用户返回页面时，恢复原始标题
window.onfocus = function () {
    pageTitle.innerHTML = originalTitle;
}

////////////////////////////////////


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



