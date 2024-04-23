// 這裡是 JavaScript，用於處理使用者輸入和顯示項目列表

document.getElementById("addItemButton").addEventListener("click", function() {
    addItem();
});

function addItem() {
    // 獲取使用者輸入的值
    var newItem = document.getElementById("inputBox").value;

    if (newItem !== "") {
        // 創建新的列表項
        var li = document.createElement("li");
        li.textContent = newItem;

        // 將新的列表項添加到列表中
        document.getElementById("itemList").appendChild(li);

        // 清空輸入框
        document.getElementById("inputBox").value = "";
    } else {
        alert("請輸入項目名稱");
    }
}
