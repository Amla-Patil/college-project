const ctx = document.getElementById('ratioChart');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['2021','2022','2023','2024','2025'],
    datasets: [{
      label: 'Faculty Student Ratio',
      data: [40,60,80,70,90],
      borderWidth: 2
    }]
  }
});
