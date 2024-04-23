
    document.getElementById("taskForm").addEventListener("submit", function(event) {
    event.preventDefault(); // 防止表單提交時重新載入頁面

    var taskInput = document.getElementById("taskInput");
    var taskDisplay = document.getElementById("taskDisplay");

    // 獲取輸入框中的值
    var newItem = taskInput.value.trim();

    // 如果輸入框中有值
    if (newItem !== "") {
    // 檢查是否已有編輯中的項目
    var editingItem = document.querySelector(".task-item.editing");

    if (editingItem) {
    // 更新編輯中的項目資料
    editingItem.firstChild.textContent = newItem;
    editingItem.classList.remove("editing");
    // 恢復送出按鈕的文字為 "送出"
    document.getElementById("taskForm").getElementsByTagName("button")[0].textContent = "送出";
} else {
    // 創建新的元素用來顯示輸入的資料
    var div = document.createElement("div");
    div.textContent = newItem;
    div.classList.add("task-item"); // 添加自定義的 CSS class

    // 創建編輯按鈕
    var editButton = document.createElement("button");
    editButton.innerHTML = '<img src="/img/edit.png">';
    editButton.addEventListener("click", function() {
    // 將該項目的資料填充到輸入框中
    taskInput.value = newItem;
    // 將送出按鈕的文字改為 "編輯"
    document.getElementById("taskForm").getElementsByTagName("button")[0].textContent = "編輯";
    // 標記此項目為編輯中
    div.classList.add("editing");
});
    div.appendChild(editButton);

    // 創建刪除按鈕
    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<img src="/img/delete.png">';
    deleteButton.addEventListener("click", function() {
    // 移除該項目
    taskDisplay.removeChild(div);
});
    div.appendChild(deleteButton);

    // 將新的元素添加到 taskDisplay 區域中
    taskDisplay.appendChild(div);
}

    // 清空輸入框
    taskInput.value = "";
}
});

    // 清除所有項目的按鈕點擊事件處理程序
    document.getElementById("clearButton").addEventListener("click", function() {
    var taskDisplay = document.getElementById("taskDisplay");
    // 將 taskDisplay 區域的所有子節點刪除
    while (taskDisplay.firstChild) {
    taskDisplay.removeChild(taskDisplay.firstChild);
}
});