function showNovelInfo() {
    const info = document.getElementById('novelInfo');
    info.style.display = info.style.display === 'none' ? 'block' : 'none';
  }
  
  // Toggle dark mode di pojok kanan atas
  document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.createElement('button');
    toggle.textContent = '🌙';
    toggle.title = 'Toggle Dark Mode';
    toggle.style.position = 'fixed';
    toggle.style.top = '20px';
    toggle.style.right = '20px';
    toggle.style.zIndex = '1000';
    toggle.style.padding = '10px';
    toggle.style.borderRadius = '50%';
    toggle.style.border = 'none';
    toggle.style.backgroundColor = '#ffffffcc';
    toggle.style.color = '#1e3c72';
    toggle.style.cursor = 'pointer';
    toggle.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
    toggle.style.transition = 'background-color 0.3s';
  
    toggle.addEventListener('mouseenter', () => {
      toggle.style.backgroundColor = '#d1e8ff';
    });
  
    toggle.addEventListener('mouseleave', () => {
      toggle.style.backgroundColor = '#ffffffcc';
    });
  
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
    });
  
    document.body.appendChild(toggle);
  });
  