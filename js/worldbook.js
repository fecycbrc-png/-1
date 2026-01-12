document.getElementById('worldbook').innerHTML = `
<h3>世界书</h3>
<button onclick="createWorld()">❤️ 创建</button>
<ul id="worldList"></ul>
<button onclick="backHome()">返回</button>
`;

function createWorld() {
  const title = prompt("世界书标题");
  const content = prompt("内容");
  const worlds = JSON.parse(localStorage.getItem('worlds')||'[]');
  worlds.push({title, content});
  localStorage.setItem('worlds', JSON.stringify(worlds));
  renderWorlds();
}

function renderWorlds() {
  const list = document.getElementById('worldList');
  list.innerHTML = '';
  const worlds = JSON.parse(localStorage.getItem('worlds')||'[]');
  worlds.forEach(w=>{
    const li = document.createElement('li');
    li.innerText = w.title;
    li.onclick = ()=>alert(w.content);
    list.appendChild(li);
  });
}

renderWorlds();
