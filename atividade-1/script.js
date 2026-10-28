
const usuarios = [
    {
        id: 1,
        nome: "Leanne Grahann",
        email: "Sincere@april.biz",
        address: { city: "Gwenbosddsfrough" },
        company: { name: "Romaguera-Crona" }
    },
    {
        id: 2,
        nome: "Ervin Howell",
        email: "Shanna@melissa.tv",
        address: { city: "Wisoky" },
        company: { name: "Deck" }
    },
    {
        id: 3,
        nome: "teste2",
        email: "leanne.gsddfsfdsrahann@gmail.com",
        address: { city: "Gwensdffdborough" },
        company: { name: "asdasfdsfsf-Crona" }
    },
    {
        id: 4,
        nome: "teste3",
        email: "leanne.grsdasdahann@gmail.com",
        address: { city: "aaaaaaaaaaaaaaaa" },
        company: { name: "Romaguera-Crona" }
    }
];

function exibirUsuarios() {

    const container = document.getElementById("cards");

    usuarios.forEach(usuario => {

        const card = document.createElement("div");

        card.classList.add("card");

        card.innerHTML = `
            <h3>${usuario.nome}</h3>
            <p>Email: ${usuario.email}</p>
            <p>Cidade: ${usuario.address.city}</p>
            <p>Empresa: ${usuario.company.name}</p>
        `;

        container.appendChild(card);
    }                                                                                                                                                                                                );

    // Exibir total de usuários
    const total = usuarios.length;

    document.getElementById("total").textContent =
        `Total de usuários: ${total}`;
}

// Executar a função
exibirUsuarios();
