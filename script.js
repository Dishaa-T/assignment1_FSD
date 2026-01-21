// Theme toggle and download (print) button
(function(){
  const themeToggle = document.getElementById('themeToggle');
  const downloadBtn = document.getElementById('downloadBtn');
  const themeIcon = document.getElementById('themeIcon');
  const root = document.documentElement;

  function setTheme(dark){
    if(dark){
      document.body.classList.add('dark');
      localStorage.setItem('theme','dark');
      if(themeIcon){
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
      }
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme','light');
      if(themeIcon){
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
      }
    }
  }

  // initialize
  const saved = localStorage.getItem('theme');
  if(saved==='dark') setTheme(true);
  else setTheme(false);

  themeToggle.addEventListener('click',()=>{
    const isDark = document.body.classList.toggle('dark');
    setTheme(isDark);
  });

  downloadBtn.addEventListener('click',()=>{
    window.print();
  });

})();
