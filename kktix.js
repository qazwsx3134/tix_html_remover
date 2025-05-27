// 移除廣告區塊
const includeToRemove = document.querySelector('[ng-include="\'registrations/event_info.html\'"]');
if (includeToRemove) {
  includeToRemove.remove();
}

setTimeout(() => {
  const ticketUnits = document.querySelectorAll('[ng-controller="TicketCtrl"]');
  console.log('找到的區塊數：', ticketUnits.length);

  let soldOutCount = 0;

  ticketUnits.forEach(el => {
    const quantityEl = el.querySelector('.ticket-quantity');
    if (quantityEl) {
      const text = quantityEl.textContent.trim();
      if (text.includes('已售完') || text.includes('暫無票券')) {
        soldOutCount++;
        el.remove(); // 清除已售完區塊
      }
    }
  });

  // 如果所有票券都已售完或暫無票券，就跳出 confirm
  if (soldOutCount === ticketUnits.length && ticketUnits.length > 0) {
    const confirmReload = confirm('⚠️ 所有票券已售完，是否重新整理頁面？');
    if (confirmReload) {
      location.reload();
    }
  }
}, 500);
 
