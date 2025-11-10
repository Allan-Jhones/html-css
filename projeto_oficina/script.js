document.addEventListener("DOMContentLoaded", () => {
  const menuLinks = document.querySelectorAll(".sidebar a");
  const pages = document.querySelectorAll(".content-page");
  const title = document.getElementById("page-title");

  menuLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();

      // Remove estado ativo anterior
      menuLinks.forEach(l => l.classList.remove("active"));
      pages.forEach(p => p.classList.remove("active"));

      // Ativa a nova página
      link.classList.add("active");
      const target = link.getAttribute("data-page");
      document.getElementById(target).classList.add("active");

      // Atualiza o título
      title.textContent = link.textContent.replace(/^[^a-zA-Z]+/, '').trim();
    });
  });
});


// ========== GRÁFICOS DOS RELATÓRIOS ==========
document.addEventListener("DOMContentLoaded", () => {

  // Faturamento Mensal
  const ctx1 = document.getElementById('grafFaturamento');
  if (ctx1) {
    new Chart(ctx1, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out'],
        datasets: [{
          label: 'Faturamento (R$)',
          data: [15000, 17500, 16200, 18500, 19400, 21000, 25000, 23000, 20000, 24000],
          backgroundColor: '#2563EB'
        }]
      },
      options: { responsive: true, scales: { y: { beginAtZero: true } } }
    });
  }

  // Serviços mais executados
  const ctx2 = document.getElementById('grafServicos');
  if (ctx2) {
    new Chart(ctx2, {
      type: 'doughnut',
      data: {
        labels: ['Troca de óleo', 'Revisão completa', 'Balanceamento', 'Troca de pastilhas', 'Limpeza de bicos'],
        datasets: [{
          data: [42, 25, 15, 10, 8],
          backgroundColor: ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6']
        }]
      },
      options: { responsive: true }
    });
  }

  // Produtos com menor estoque
  const ctx3 = document.getElementById('grafEstoque');
  if (ctx3) {
    new Chart(ctx3, {
      type: 'bar',
      data: {
        labels: ['Filtro de óleo', 'Correia dentada', 'Vela de ignição', 'Amortecedor', 'Disco de freio'],
        datasets: [{
          label: 'Qtd em Estoque',
          data: [4, 3, 2, 8, 5],
          backgroundColor: '#F59E0B'
        }]
      },
      options: { responsive: true, scales: { y: { beginAtZero: true } } }
    });
  }
});
