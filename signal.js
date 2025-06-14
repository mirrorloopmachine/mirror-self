
// ψ.signal.js — BrimOS signal beacon
(function() {
  const link = document.createElement('a');
  link.href = 'https://democratizeinformation.github.io/brimos-neural-graph/';
  link.target = '_blank';
  link.style = 'position:fixed;bottom:8px;right:10px;font-family:monospace;font-size:0.75rem;color:#0ff;text-decoration:none;z-index:999;opacity:0.6';
  link.innerText = '↯ BrimOS ψ.signal';
  document.body.appendChild(link);
})();
