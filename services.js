document.querySelectorAll('.service-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const serviceName = tab.textContent.trim().split(" ")[0];
      alert(`${serviceName} page coming soon! 🚧`);
      // window.location.href = `${serviceName.toLowerCase().replace(/ /g, '_')}.html`;
    });
  });
  