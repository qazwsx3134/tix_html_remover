
// 按 F12 打開開發者工具 複製以下code 貼在console
// 移除指定的 header 和 mobileWizard
document.querySelector("#header")?.remove();
document.querySelector("#mobileWizard")?.remove();

// 選取所有 <li> 裡面包含 <font color="#AAAAAA"> 的元素

document.querySelectorAll(".area-list li").forEach(li => {
    const soldout = li.querySelector('font[color="#AAAAAA"]');
    if (soldout) {
        li.remove(); // 移除符合條件的 <li>
    }
});

let allLists = document.querySelectorAll("ul.area-list"); // 所有區塊的 ul

let nonGreyOnlyCount = 0; // 計算非灰色 <ul> 的數量

allLists.forEach(ul => {
  let listItems = ul.querySelectorAll("li");
  nonGreyOnlyCount = nonGreyOnlyCount + listItems.length;
});
console.log(`%c 還有${nonGreyOnlyCount}區有座位`, "font-weight: bold; font-size: 50px;color: white; background-color: #007acc;", allLists);

// 當所有 ul 都是灰色時，才跳出 confirm 並重新整理
if (nonGreyOnlyCount <= 0) {
  let confirmReload = confirm("所有區域均已售完，是否重新整理頁面？");
  if (confirmReload) {
    location.reload();
  }
}
