// Função para carregar as vagas a partir do arquivo JSON
function carregarVagas() {
    fetch('vagas.json')
        .then(response => response.json())
        .then(vagas => {
            renderizarVagas(vagas);
        })
        .catch(error => {
            console.error('Erro ao carregar vagas:', error);
        });
}

// Função para renderizar as vagas na página
function renderizarVagas(vagas) {
    const jobListings = document.getElementById('job-listings');
    jobListings.innerHTML = ''; // Limpar o conteúdo da seção

    vagas.forEach(vaga => {
        const jobCard = document.createElement('div');
        jobCard.classList.add('job-card', vaga.tipo);

        jobCard.innerHTML = `
            <h3>${vaga.titulo}</h3>
            <p>Empresa: ${vaga.empresa}</p>
            <p>Experiência: ${vaga.experiencia}</p>
            <button>Aplicar</button>
        `;

        jobListings.appendChild(jobCard);
    });
}

// Função para filtrar as vagas com base no tipo selecionado
document.getElementById('job-type').addEventListener('change', function() {
    const jobType = this.value;
    const jobCards = document.querySelectorAll('.job-card');
    
    jobCards.forEach(card => {
        card.style.display = 'block'; // Resetando a exibição
        if (jobType && !card.classList.contains(jobType)) {
            card.style.display = 'none'; // Ocultando vagas que não correspondem ao filtro
        }
    });
});

// Carregar as vagas ao carregar a página
window.onload = carregarVagas;
