
export default class BookstoreService {
  data = [
    {
      id: 1,
      title: 'Production-Ready Microservices',
      author: 'Susan J. Fowler',
      price: 32,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg',
    },
    {
      id: 2,
      title: 'Release It!',
      author: 'Michael T. Nygard',
      price: 45,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg',
    },
    {
      id: 3,
      title: 'JavaScript. The Definitive Guide: Activate Your Web Pages',
      author: 'David Flanagan',
      price: 35,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51lu4ArIFYL._SX379_BO1,204,203,200_.jpg',
    },
    {
      id: 4,
      title: 'Grokking Algorithms',
      author: 'Aditya Bhargava',
      price: 37,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51jrhDk-UiL._SX342_.jpg',
    },
    {
      id: 5,
      title: 'Code: The Hidden Language of Computer Hardware and Software',
      author: 'Charles Petzold',
      price: 76,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41L1w%2BgbsZL.jpg',
    },
    {
      id: 6,
      title: 'Clean Code',
      author: 'Robert C. Martin',
      price: 35,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51d1qVhmAmL._SX373_BO1,204,203,200_.jpg',
    },
  ];

  // eslint-disable-next-line no-unused-vars
  getBooks = () => new Promise((resolve, reject) => {
    // if (true) {
    //   reject(new Error('BOOM'));
    // }
    setTimeout(() => {
      resolve(this.data);
    }, 700);
  })
}
