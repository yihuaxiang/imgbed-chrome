// 在新标签页打开
document.getElementById('openTabBtn').addEventListener('click', () => {
  chrome.tabs.create({ url: 'https://imgbed.cn/' });
  window.close(); // 关闭 popup
});

// 在弹窗中打开（iframe 方式）
document.getElementById('openPopupBtn').addEventListener('click', () => {
  // 创建一个新窗口
  chrome.windows.create({
    url: 'https://imgbed.cn/',
    type: 'popup',
    width: 1000,
    height: 700
  });
  window.close(); // 关闭 popup
});
