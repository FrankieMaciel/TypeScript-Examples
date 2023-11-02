interface Filme {
  titulo: string;
}

const nomeDeFilmes: string[] = [
  "Matrix",
  "Scarface",
  "Gato de botas",
  "Transformers"
];


for (const filme of nomeDeFilmes) {
  console.log(filme);
}

const filme: Readonly<Filme> = {
  titulo: nomeDeFilmes[0],
};

// O erro acontece pois a propriedade "titulo" não pode ser redefinida.
// filme.titulo = nomeDeFilmes[3];
