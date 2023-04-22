const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Artwork {
    painting_title: String
    year_made: String
    photo_url: String
  }

  type Query {
    allArtwork: [Artwork]
  }
`;

const artworkData = [
  {
    painting_title: 'Untitled Skull',
    year_made: '1981',
    photo_url:
      'https://cdn.shopify.com/s/files/1/0054/2887/1268/files/4ytbpO_1024x1024.png?v=1670511207',
  },
  {
    painting_title: 'In Italian',
    year_made: '1988',
    photo_url:
      'https://cdn.shopify.com/s/files/1/0054/2887/1268/files/in-italian.jpg_Large_2fb5fa9b-1b09-4a5f-807e-d33a252780ae_1024x1024.jpg?v=1670511986',
  },
  {
    painting_title: 'Riding with Death',
    year_made: '1988',
    photo_url:
      'https://cdn.shopify.com/s/files/1/0054/2887/1268/files/lvmh-jm-basquiat-2018_12_28-21_34_09-img_0132_1_1024x1024.jpg?v=1670512191',
  },
  {
    painting_title: 'Dustheads',
    year_made: '1982',
    photo_url:
      'https://cdn.shopify.com/s/files/1/0054/2887/1268/files/1771726_1024x1024.jpg?v=1670511752',
  },
  // more artwork objects here
];

const resolvers = {
  Query: {
    allArtwork: () => {
      return artworkData.map(({ painting_title, year_made, photo_url }) => ({
        painting_title,
        year_made,
        photo_url,
      }));
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
});

server.listen().then(({ url }) => {
  console.log(`Server running at ${url}`);
});
