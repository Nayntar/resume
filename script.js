document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById('skillsChart').getContext('2d');
  new Chart(ctx, {
    type: 'radar',
    data: {
      labels: [
        'HTML/CSS', 'C++', 'Бази даних', 'Arduino', 'Blender',
        'Відповідальність', 'Командна робота', 'Швидке навчання', 'Англійська (B2)'
      ],
      datasets: [{
        label: 'Рівень володіння',
        data: [75, 60, 70, 55, 35, 80, 90, 90, 78],
        backgroundColor: 'rgba(0, 122, 204, 0.2)',
        borderColor: '#007acc',
        pointBackgroundColor: '#007acc',
        borderWidth: 2
      }]
    },
    options: {
      responsive: false,
      scales: {
        r: {
          suggestedMin: 0,
          suggestedMax: 100
        }
      },
      plugins: {
        legend: {
          display: false
        }
      }
    }
  });
});


// AOS
AOS.init();

// Тема
document.getElementById("themeToggle").addEventListener("click", () => {
  const current = document.documentElement.className;
  const next = current === "light" ? "dark" : "light";
  document.documentElement.className = next;
  localStorage.setItem("theme", next);
});
