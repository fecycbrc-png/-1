document.getElementById('beauty').innerHTML = `
<h3>美化</h3>
<input type="range" min="0" max="1" step="0.1" onchange="setOpacity(this.value)">
<button onclick="backHome()">返回</button>
`;

function setOpacity(v){
  document.getElementById('time-widget').style.background =
    `rgba(255,255,255,${v})`;
}
