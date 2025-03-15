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

let shouldReload = false;

let allLists = document.querySelectorAll("ul.area-list"); // 所有區塊的 ul
let totalLists = allLists.length;
let greyOnlyCount = 0; // 計算全灰色 <ul> 的數量

allLists.forEach(ul => {
  let listItems = ul.querySelectorAll("li");
  let isAllGrey = true; // 假設這個 <ul> 內的 <li> 都是灰色的

  listItems.forEach(li => {
    let fonts = li.querySelectorAll('font[color="#AAAAAA"]');
    let hasOtherContent = li.childNodes.length > fonts.length; // 是否有非 <font color="#AAAAAA"> 的元素

    

    if (hasOtherContent) {
      isAllGrey = false; // 這個 <ul> 內部有非灰色內容
    } else {
    	li.remove(); // 刪除純灰色的 <li>
    }

  });

  if (isAllGrey) {
    greyOnlyCount++; // 這個 <ul> 內部全部是灰色，計數 +1
  }
});

// 當所有 ul 都是灰色時，才跳出 confirm 並重新整理
if (greyOnlyCount === totalLists) {
  let confirmReload = confirm("所有區域均已售完，是否重新整理頁面？");
  if (confirmReload) {
    location.reload();
  }
}
