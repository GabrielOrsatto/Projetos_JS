const botaoAdicionar = document.getElementById("add");

const notas = JSON.parse(localStorage.getItem("notas"));

if (notas) {
    notas.forEach((nota) => {
        adicionarNovaNota(nota);
    });
}

botaoAdicionar.addEventListener("click", () => {
    adicionarNovaNota();
});

function adicionarNovaNota(text = "") {
    const nota = document.createElement("div");
    nota.classList.add("nota");

    nota.innerHTML = `
        <div class="notas">
            <div class="icones">
                <button class="editar"><i class="bi bi-pencil-square"></i></button>
                <button class="deletar"><i class="bi bi-trash"></i></button>
            </div>
            <div class="main ${text ? "" : "hidden"}"></div>
            <textarea class="${text ? "hidden" : ""}"></textarea>
        </div>
    `;

    const editarBtn = nota.querySelector(".editar");
    const deletarBtn = nota.querySelector(".deletar");

    const main = nota.querySelector(".main");
    const blocoTexto = nota.querySelector("textarea");

    blocoTexto.value = text;
    main.innerHTML = marked(text);

    editarBtn.addEventListener("click", () => {
        main.classList.toggle("hidden");
        blocoTexto.classList.toggle("hidden");
    });

    deletarBtn.addEventListener("click", () => {
        nota.remove();

        atualizarNotas();
    });

    blocoTexto.addEventListener("input", (e) => {
        const { value } = e.target;

        main.innerHTML = marked(value);

        atualizarNotas();
    });

    document.body.appendChild(nota);
}

function atualizarNotas() {
    const textoNotas = document.querySelectorAll("textarea");

    const notas = [];

    textoNotas.forEach((nota) => {
        notas.push(nota.value);
    });

    localStorage.setItem("notas", JSON.stringify(notas));
}