const iframe = document.getElementById('iframe');
const loading = document.getElementById('loading');
let loaded = false;

// 方法1: iframe load 事件
iframe.addEventListener('load', function() {
  if (!loaded) {
    loaded = true;
    setTimeout(() => {
      loading.classList.add('hidden');
    }, 500); // 延迟 0.5 秒以确保内容渲染
  }
});

// 方法2: 超时保护 - 如果 5 秒后还没加载完，也隐藏 loading
setTimeout(function() {
  if (!loaded) {
    loaded = true;
    loading.classList.add('hidden');
  }
}, 5000);

// 方法3: 用户点击任意位置也可以手动关闭 loading
loading.addEventListener('click', function() {
  if (!loaded) {
    loaded = true;
    loading.classList.add('hidden');
  }
});
