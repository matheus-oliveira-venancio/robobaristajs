const catalogo = [
  {
    codigo: "00001",
    categoria: "Bebida",
    valor: 0,
    descricao: "Café com Grilo",
  },
  { codigo: "00002", categoria: "Bebida", valor: 0, descricao: "Café Gourmet" },
  {
    codigo: "00003",
    categoria: "Bebida",
    valor: 0,
    descricao: "Café Gelado (para v34ad0s)",
  },
  {
    codigo: "00004",
    categoria: "Bebida",
    valor: 0,
    descricao: "Café de burro",
  },
  {
    codigo: "00005",
    categoria: "Bebida",
    valor: 0,
    descricao: "Pepsi com rato",
  },
  { codigo: "00006", categoria: "Bebida", valor: 0, descricao: "Café racista" },
  {
    codigo: "00007",
    categoria: "Bebida",
    valor: 0,
    descricao: "Doce de Leite Latte",
  },
  {
    codigo: "00008",
    categoria: "Bebida",
    valor: 0,
    descricao: "Baunilha Latte",
  },
  {
    codigo: "00009",
    categoria: "Bebida",
    valor: 0,
    descricao: "Caramelo Macchiato",
  },
  {
    codigo: "00010",
    categoria: "Bebida",
    valor: 0,
    descricao: "Brigadeiro Latte mesmo sabor que brigadeiro normal porem caro",
  },
  {
    codigo: "00011",
    categoria: "Bebida",
    valor: 0,
    descricao: "suco de pessego (suco tangue)",
  },
  {
    codigo: "00012",
    categoria: "Bebida",
    valor: 0,
    descricao: "Leite c/achocolatado pqp que bglho ruim ",
  },
  {
    codigo: "00013",
    categoria: "Bebida",
    valor: 0,
    descricao: "Chocolate quente esquentado no micro ondas",
  },
  {
    codigo: "00014",
    categoria: "Comida",
    valor: 0,
    descricao: "Fatia de bolo de chocolate",
  },
  {
    codigo: "00015",
    categoria: "Comida",
    valor: 0,
    descricao: "Fatia de bolo mulango",
  },
  {
    codigo: "00016",
    categoria: "Comida",
    valor: 0,
    descricao: "Sopa de macaco",
  },
  {
    codigo: "00017",
    categoria: "Comida",
    valor: 0,
    descricao: "Rosca não queimada",
  },
  {
    codigo: "00018",
    categoria: "Comida",
    valor: 0,
    descricao: "Filé de fimose",
  },
  {
    codigo: "00019",
    categoria: "Comida",
    valor: 0,
    descricao: "Bisteca de cabaço",
  },
];

const listarCatalogo = () => {
  const modoCatra = (text) => {
    const td = document.createElement("td");

    td.innerText = text;

    return td;
  };

  catalogo.map((item) => {
    const tr = document.createElement("tr");

    tr.appendChild(modoCatra(item.codigo));
    tr.appendChild(modoCatra(item.categoria));
    tr.appendChild(modoCatra(item.descricao));
    tr.appendChild(modoCatra(item.valor));

    document.querySelector("#tbody_catalogo").appendChild(tr);
  });
};

listarCatalogo();

const abrirModalDeInclusao = () => {
  Modal.open("#modal-inclusao-de-item");
};

const fecharModal = () => {
  Modal.close("#modal-inclusao-de-item");
};
