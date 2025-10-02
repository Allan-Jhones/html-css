
/*Menu*/
openMenu.addEventListener('click', () => {
    menu.style.display = 'flex';
    menu.style.right = (menu.offsetWidth * -1) + 'px';
    openMenu.style.display = 'none';
    setTimeout(() => {
        menu.style.opacity = '1';
        menu.style.right = '0';
    }, 10);
   
});
closeMenu.addEventListener('click', () => {
    menu.style.opacity = '0';
    menu.style.right = (menu.offsetWidth * -1) + 'px';
    setTimeout(() => {
        menu.removeAttribute('style');
        openMenu.removeAttribute('style');
    }, 200);
    
});
/*Galeria */
  // Dados dos imóveis com fotos simuladas usando gradientes
  const imoveis = {
    apartamento: {
        titulo: 'Apartamento Moderno',
        localizacao: 'Vila Madalena, São Paulo',
        preco: 'R$ 650.000',
        detalhes: [
            { icone: '🛏️', texto: '3 quartos' },
            { icone: '🚿', texto: '2 banheiros' },
            { icone: '📐', texto: '85m²' },
            { icone: '🚗', texto: '1 vaga' },
            { icone: '🏢', texto: '8º andar' },
            { icone: '📅', texto: 'Pronto para morar' }
        ],
        descricao: 'Apartamento moderno e bem localizado na Vila Madalena. Possui acabamentos de primeira qualidade, cozinha planejada, varanda gourmet e uma vista incrível da cidade. Condomínio com área de lazer completa incluindo piscina, academia e salão de festas.',
        fotos: [
            { gradient: 'linear-gradient(45deg, #667eea, #764ba2)', alt: 'Sala de estar moderna' },
            { gradient: 'linear-gradient(45deg, #f093fb, #f5576c)', alt: 'Cozinha planejada' },
            { gradient: 'linear-gradient(45deg, #4facfe, #00f2fe)', alt: 'Quarto principal' },
            { gradient: 'linear-gradient(45deg, #43e97b, #38f9d7)', alt: 'Banheiro suite' },
            { gradient: 'linear-gradient(45deg, #fa709a, #fee140)', alt: 'Varanda gourmet' }
        ]
    },
    casa: {
        titulo: 'Casa com Jardim',
        localizacao: 'Morumbi, São Paulo',
        preco: 'R$ 1.200.000',
        detalhes: [
            { icone: '🛏️', texto: '4 quartos' },
            { icone: '🚿', texto: '3 banheiros' },
            { icone: '📐', texto: '180m²' },
            { icone: '🚗', texto: '2 vagas' },
            { icone: '🌳', texto: 'Jardim 200m²' },
            { icone: '🏠', texto: 'Casa térrea' }
        ],
        descricao: 'Linda casa no Morumbi com amplo jardim e área gourmet. Perfeita para famílias que buscam tranquilidade e contato com a natureza. Possui churrasqueira, piscina, e um belo jardim com árvores frutíferas. Localizada em rua sem saída, muito segura.',
        fotos: [
            { gradient: 'linear-gradient(45deg, #a8edea, #fed6e3)', alt: 'Fachada da casa' },
            { gradient: 'linear-gradient(45deg, #ffecd2, #fcb69f)', alt: 'Sala ampla' },
            { gradient: 'linear-gradient(45deg, #ff9a9e, #fecfef)', alt: 'Cozinha integrada' },
            { gradient: 'linear-gradient(45deg, #a18cd1, #fbc2eb)', alt: 'Jardim com piscina' },
            { gradient: 'linear-gradient(45deg, #fad0c4, #ffd1ff)', alt: 'Área gourmet' }
        ]
    },
    cobertura: {
        titulo: 'Cobertura Luxo',
        localizacao: 'Itaim Bibi, São Paulo',
        preco: 'R$ 2.500.000',
        detalhes: [
            { icone: '🛏️', texto: '5 quartos' },
            { icone: '🚿', texto: '4 banheiros' },
            { icone: '📐', texto: '250m²' },
            { icone: '🚗', texto: '3 vagas' },
            { icone: '🏊', texto: 'Piscina privativa' },
            { icone: '🌆', texto: 'Vista panorâmica' }
        ],
        descricao: 'Cobertura de luxo no coração do Itaim Bibi. Vista panorâmica de 360° da cidade, piscina privativa, terraço gourmet e acabamentos importados. Localizada em um dos endereços mais nobres de São Paulo, próxima a restaurantes, shopping e centros empresariais.',
        fotos: [
            { gradient: 'linear-gradient(45deg, #667eea, #764ba2)', alt: 'Vista panorâmica' },
            { gradient: 'linear-gradient(45deg, #f093fb, #f5576c)', alt: 'Sala de estar luxuosa' },
            { gradient: 'linear-gradient(45deg, #4facfe, #00f2fe)', alt: 'Piscina privativa' },
            { gradient: 'linear-gradient(45deg, #43e97b, #38f9d7)', alt: 'Terraço gourmet' },
            { gradient: 'linear-gradient(45deg, #fa709a, #fee140)', alt: 'Suite master' },
            { gradient: 'linear-gradient(45deg, #ff9a9e, #fad0c4)', alt: 'Cozinha gourmet' }
        ]
    }
};

let currentImageIndex = 0;
let currentProperty = null;

// Função para abrir a galeria
function abrirGaleria(tipoImovel) {
    currentProperty = imoveis[tipoImovel];
    currentImageIndex = 0;
    
    // Atualizar título
    document.getElementById('modalTitle').textContent = currentProperty.titulo;
    
    // Atualizar preço
    document.getElementById('galleryPrice').textContent = currentProperty.preco;
    
    // Atualizar detalhes
    const detailsContainer = document.getElementById('galleryDetails');
    detailsContainer.innerHTML = '';
    currentProperty.detalhes.forEach(detalhe => {
        const detailDiv = document.createElement('div');
        detailDiv.className = 'detail-item';
        detailDiv.innerHTML = `<span>${detalhe.icone}</span><span>${detalhe.texto}</span>`;
        detailsContainer.appendChild(detailDiv);
    });
    
    // Atualizar descrição
    document.getElementById('galleryDescription').textContent = currentProperty.descricao;
    
    // Criar imagens da galeria
    const imagesContainer = document.getElementById('galleryImages');
    imagesContainer.innerHTML = '';
    currentProperty.fotos.forEach((foto, index) => {
        const imgDiv = document.createElement('div');
        imgDiv.className = `gallery-image ${index === 0 ? 'active' : ''}`;
        imgDiv.style.background = foto.gradient;
        imgDiv.style.display = 'flex';
        imgDiv.style.alignItems = 'center';
        imgDiv.style.justifyContent = 'center';
        imgDiv.style.color = 'white';
        imgDiv.style.fontSize = '1.5rem';
        imgDiv.style.fontWeight = 'bold';
        imgDiv.style.textAlign = 'center';
        imgDiv.style.textShadow = '2px 2px 4px rgba(0,0,0,0.5)';
        imgDiv.textContent = foto.alt;
        imagesContainer.appendChild(imgDiv);
    });
    
    // Criar thumbnails
    const thumbnailsContainer = document.getElementById('thumbnails');
    thumbnailsContainer.innerHTML = '';
    currentProperty.fotos.forEach((foto, index) => {
        const thumbDiv = document.createElement('div');
        thumbDiv.className = `thumbnail ${index === 0 ? 'active' : ''}`;
        thumbDiv.style.background = foto.gradient;
        thumbDiv.style.display = 'flex';
        thumbDiv.style.alignItems = 'center';
        thumbDiv.style.justifyContent = 'center';
        thumbDiv.style.color = 'white';
        thumbDiv.style.fontSize = '0.8rem';
        thumbDiv.style.fontWeight = 'bold';
        thumbDiv.style.textAlign = 'center';
        thumbDiv.onclick = () => mostrarImagem(index);
        thumbnailsContainer.appendChild(thumbDiv);
    });
    
    // Configurar botões de ação
    document.getElementById('whatsappBtn').onclick = () => {
        const mensagem = `Olá! Tenho interesse no imóvel: ${currentProperty.titulo} - ${currentProperty.localizacao}. Gostaria de mais informações.`;
        const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(mensagem)}`;
        window.open(whatsappUrl, '_blank');
    };
    
    document.getElementById('interesseBtn').onclick = () => {
        const nome = prompt('Digite seu nome:');
        const telefone = prompt('Digite seu telefone:');
        if (nome && telefone) {
            const mensagem = `🏠 INTERESSE EM IMÓVEL\n\n👤 Nome: ${nome}\n📱 Telefone: ${telefone}\n🏡 Imóvel: ${currentProperty.titulo} - ${currentProperty.localizacao}\n💰 Preço: ${currentProperty.preco}`;
            const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(mensagem)}`;
            window.open(whatsappUrl, '_blank');
        }
    };
    
    // Mostrar modal
    document.getElementById('galleryModal').classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Função para fechar a galeria
function fecharGaleria() {
    document.getElementById('galleryModal').classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Função para navegar na galeria
function navegarGaleria(direcao) {
    const totalImages = currentProperty.fotos.length;
    currentImageIndex = (currentImageIndex + direcao + totalImages) % totalImages;
    mostrarImagem(currentImageIndex);
}

// Função para mostrar imagem específica
function mostrarImagem(index) {
    currentImageIndex = index;
    
    // Atualizar imagem ativa
    const images = document.querySelectorAll('.gallery-image');
    images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });
    
    // Atualizar thumbnail ativo
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
}

// Fechar modal ao clicar fora
document.getElementById('galleryModal').addEventListener('click', function(e) {
    if (e.target === this) {
        fecharGaleria();
    }
});

// Navegação por teclado
document.addEventListener('keydown', function(e) {
    if (document.getElementById('galleryModal').classList.contains('show')) {
        if (e.key === 'Escape') {
            fecharGaleria();
        } else if (e.key === 'ArrowLeft') {
            navegarGaleria(-1);
        } else if (e.key === 'ArrowRight') {
            navegarGaleria(1);
        }
    }
});

// Função para interesse em imóvel específico (mantida para compatibilidade)
function interesseImovel(imovel) {
    const mensagem = `Olá! Tenho interesse no imóvel: ${imovel}. Gostaria de mais informações.`;
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(mensagem)}`;
    window.open(whatsappUrl, '_blank');
}

// Formatação do telefone
document.getElementById('telefone').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length >= 11) {
        value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else if (value.length >= 7) {
        value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
    } else if (value.length >= 3) {
        value = value.replace(/(\d{2})(\d{0,5})/, '($1) $2');
    }
    e.target.value = value;
});

// Envio do formulário
document.getElementById('leadForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const nascimento = document.getElementById('nascimento').value;
    const renda = document.getElementById('renda').value;
    const possuiImovel = document.getElementById('possuiImovel').value;
    const dependentes = document.getElementById('dependentes').value;
    const observacoes = document.getElementById('observacoes').value;

    if (!nome || !telefone) {
        alert('Por favor, preencha os campos obrigatórios (Nome e Telefone).');
        return;
    }

    // Mensagem para WhatsApp
    let mensagemWhatsApp = `🏠 *NOVO LEAD - CONSULTOR IMOBILIÁRIO*\n\n`;
    mensagemWhatsApp += `👤 *Nome:* ${nome}\n`;
    mensagemWhatsApp += `📱 *Telefone:* ${telefone}\n`;
    if (nascimento) mensagemWhatsApp += `🎂 *Data de Nascimento:* ${nascimento}\n`;
    if (renda) mensagemWhatsApp += `💰 *Faixa de Renda:* ${renda}\n`;
    if (possuiImovel) mensagemWhatsApp += `🏡 *Já possui imóvel:* ${possuiImovel}\n`;
    if (dependentes) mensagemWhatsApp += `👨‍👩‍👧‍👦 *Dependentes:* ${dependentes}\n`;
    if (observacoes) mensagemWhatsApp += `📝 *Observações:* ${observacoes}\n`;

    // Corpo do email
    let corpoEmail = `NOVO LEAD - CONSULTOR IMOBILIÁRIO\n\n`;
    corpoEmail += `Nome: ${nome}\n`;
    corpoEmail += `Telefone: ${telefone}\n`;
    if (nascimento) corpoEmail += `Data de Nascimento: ${nascimento}\n`;
    if (renda) corpoEmail += `Faixa de Renda: ${renda}\n`;
    if (possuiImovel) corpoEmail += `Já possui imóvel: ${possuiImovel}\n`;
    if (dependentes) corpoEmail += `Dependentes: ${dependentes}\n`;
    if (observacoes) corpoEmail += `Observações: ${observacoes}\n`;
    corpoEmail += `\n---\nEnviado através do site em ${new Date().toLocaleString('pt-BR')}`;

    // Enviar para WhatsApp
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(mensagemWhatsApp)}`;
    window.open(whatsappUrl, '_blank');

    // Enviar por Email
    const assuntoEmail = `Novo Lead - ${nome}`;
    const emailUrl = `mailto:joao.silva@email.com?subject=${encodeURIComponent(assuntoEmail)}&body=${encodeURIComponent(corpoEmail)}`;
    window.open(emailUrl, '_blank');

    alert('✅ Formulário enviado com sucesso!\n\nSeus dados foram enviados para o WhatsApp e Email. Em breve entraremos em contato!');
    
    // Limpar formulário
    document.getElementById('leadForm').reset();
});

(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'9835bc3536bf62a7',t:'MTc1ODU4NTM0Ny4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();