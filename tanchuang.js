////////////////////////////////////以下是弹窗
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
////////////////////////////////////
