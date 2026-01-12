document.getElementById('settings').innerHTML = `
<h3>设置</h3>
<button onclick="setAPI()">API 设置</button>
<button onclick="setWidgetBg()">组件背景</button>
<button onclick="setWallpaper()">壁纸</button>
<button onclick="exportData()">导出数据</button>
<button onclick="clearAll()">清空数据</button>
<button onclick="backHome()">返回</button>
`;

function setAPI() {
  const api = prompt("输入 API Key / 反代地址");
  localStorage.setItem('api', api);
}

function setWidgetBg() {
  const url = prompt("输入背景图片 URL");
  document.getElementById('time-widget').style.backgroundImage = `url(${url})`;
}

function setWallpaper() {
  const url = prompt("输入壁纸 URL");
  document.querySelectorAll('.screen').forEach(s => {
    s.style.backgroundImage = `url(${url})`;
  });
}

function exportData() {
  const data = JSON.stringify(localStorage);
  alert(data);
}

function clearAll() {
  if(confirm("确定清除所有数据？")){
    localStorage.clear();
    location.reload();
  }
}
