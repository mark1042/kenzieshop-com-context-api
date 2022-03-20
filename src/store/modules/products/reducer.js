const initialState = [
  {
    name: "Echo Dot",
    price: 279.0,
    image:
      "https://images.kabum.com.br/produtos/fotos/108149/amazon-smart-home-echo-dot-alexa-3-geracao-preto_1586443805_gg.jpg",
  },
  {
    name: "Kindle Paperwhite",
    price: 499.0,
    image:
      "https://a-static.mlcdn.com.br/618x463/kindle-paperwhite-11a-geracao-8gb-wi-fi-com-tela-de-68-e-temperatura-de-luz-ajustavel-ao0833-amazon/mirandacomputacao/45151/0f2ce6e96f420fe1dc465a14d23a0750.jpg",
  },
  {
    name: "Xbox series X",
    price: 4340.0,
    image:
      "https://static.nagem.com.br/util/artefatos/produtos/n/n/812031600888847/525324.jpg",
  },
];

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productsReducer;
