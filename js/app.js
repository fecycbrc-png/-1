function openApp(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function backHome() {
  openApp('home');
}

// 时间更新
setInterval(() => {
  const now = new Date();
  date.innerText = now.toLocaleDateString();
  time.innerText = now.toLocaleTimeString();
}, 1000);
