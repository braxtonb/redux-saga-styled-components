import { Quote } from './types';

export const DEFAULT_IMAGE_URL =
  'https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1700&q=80';

export const QUOTE_LIST: Quote[] = [
  {
    id: 1,
    message:
      'When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.',
    person: {
      name: 'Helen Keller',
      occupation: 'Author',
      imageURL:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Helen_Keller_circa_1920_-_restored.jpg/936px-Helen_Keller_circa_1920_-_restored.jpg',
    },
  },
  {
    id: 2,
    message:
      'Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.',
    person: {
      name: 'Mark Twain',
      occupation: 'Author',
      imageURL:
        'https://upload.wikimedia.org/wikipedia/commons/0/0c/Mark_Twain_by_AF_Bradley.jpg',
    },
  },
  {
    id: 3,
    message:
      'When I dare to be powerful – to use my strength in the service of my vision, then it becomes less and less important whether I am afraid.',
    person: {
      name: 'Audre Lorde',
      occupation: 'Poet',
      imageURL:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Audre_Lorde.jpg/800px-Audre_Lorde.jpg',
    },
  },
  {
    id: 4,
    message:
      'Great minds discuss ideas; average minds discuss events; small minds discuss people.',
    person: {
      name: 'Eleanor Roosevelt',
      occupation: 'First Lady of the United States',
      imageURL:
        'https://upload.wikimedia.org/wikipedia/commons/2/22/Eleanor_Roosevelt_portrait_1933.jpg',
    },
  },
  {
    id: 5,
    message:
      'It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happened to things.',
    person: {
      name: 'Leonardo Da Vinci',
      occupation: 'Polymath (and Ninja Turtle)',
      imageURL:
        'https://upload.wikimedia.org/wikipedia/commons/0/0c/Leonardo-da-vinci-posible-autorretrato-del-artista-galeria-de-los-uffizi-florencia_1c92d9d7_2.png',
    },
  },
  {
    id: 6,
    message:
      'The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.',
    person: {
      name: 'Mark Caine',
      occupation: 'Author',
    },
  },
];
