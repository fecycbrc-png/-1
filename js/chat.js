document.getElementById('chat').innerHTML = `
<div class="top">
  <button onclick="backHome()">←</button>
  <button onclick="addRole()">❤️</button>
</div>

<div class="tabs">
  <button>聊天</button>
  <button>朋友圈</button>
  <button onclick="openMe()">我</button>
</div>

<div id="chatArea"></div>
`;

function addRole() {
  const name = prompt("角色人设");
  alert("可导入世界书（后续扩展）");
}

function openMe() {
  alert("我的头像 / 钱包");
}
