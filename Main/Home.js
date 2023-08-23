document.getElementById('menuIcon').addEventListener('click', function() {
  const sidebar = document.getElementById('sidebar');
  const ulBefore = sidebar.querySelector('ul::before');

  sidebar.classList.toggle('collapsed');
  ulBefore.style.display = sidebar.classList.contains('collapsed') ? 'block' : 'none';
});

function random_number(msg1, msg2) {
  const div = document.getElementById('result');
  div.innerText = msg1 + ((Math.random() * 200 - 0.01) - 0.01).toFixed(2) + msg2;
}

document.write("총 용량 200GB / " + ((Math.random() * 200 - 0.01) - 0.01).toFixed(2) + "GB 사용 중");
setInterval(random_number, 5000, '총 용량 200GB / ', 'GB 사용 중');