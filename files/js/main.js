function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
  
      var x = document.getElementById("dropdown");
    if (x.style.maxHeight){
      x.style.maxHeight = null;
      x.style.marginTop = "0";
    } else {
      x.style.display = "flex";
      x.style.marginTop = "10px";
      x.style.maxHeight = x.scrollHeight + "px";
    }
  
}

window.onresize = function() {
	if (window.innerWidth > 768) {
    var x = document.getElementById("dropdown");
    x.style.maxHeight = null;
    x.style.marginTop = "0";
		document.getElementById("hamburger-icon").classList.remove("open");
	}
}

document.getElementById('load-more-videos').addEventListener('click', function() {
  var container = document.getElementById('video-modules');
  var button = document.getElementById('load-more-videos');
  if (container.style.maxHeight) {
    container.style.maxHeight = null;
    button.innerHTML = "Load More...";
  } else {
    container.style.maxHeight = container.scrollHeight + "px";
    button.innerHTML = "Load Less...";
  }
});

(function() {
  var d = document, s = d.createElement('script');
  s.src = 'https://ketsumodules.disqus.com/embed.js';
  s.setAttribute('data-timestamp', +new Date());
  (d.head || d.body).appendChild(s);
})();