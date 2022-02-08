import images from './images';

const wines = [
  {
    title: 'Cosecha Tardia',
    tags: 'Bottle',
  },
  {
    title: 'Frizze',
    tags: 'Bottle',
  },
  {
    title: 'Toro',
    tags: '750 ml',
  },
  {
    title: 'Uvita',
    tags: '750 ml',
  },
  {
    title: 'Termidor',
    tags: '750 ml',
  },
];

const cocktails = [
  {
    title: 'Daikiri',
    tags: 'Ingrediente1 | Ingrediente2 | Ingrediente3 | 250 ml',
  },
  {
    title: 'Jaggerinha',
    tags: 'Ingrediente1 | Ingrediente2 | Ingrediente3 | Jarra',
  },
  {
    title: 'Semen de pitufo',
    tags: 'Ingrediente1 | Ingrediente2 | Ingrediente3 | 250 ml',
  },
  {
    title: 'Destornillador',
    tags: 'Ingrediente1 | Ingrediente2 | Ingrediente3 | vaso/copa/nose',
  },
  {
    title: 'Negroni',
    tags: 'Ingrediente1 | Ingrediente2 | Ingrediente3 | 250 ml',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Vocacion de Servicio',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rapidez y prolijidad',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'Hospitalidad',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Cocina Gourmet',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };
