//resource (resourceID INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, userID INT, topicID INT, tags TEXT [], link TEXT, rating INT)

export const resource = [
  {
    userID: 1,
    topicID: 1,
    tags: ['html', 'video'],
    link: 'https://www.youtube.com/watch?v=G1IbRujko-A',
    rating: 5,
  },
  {
    userID: 3,
    topicID: 1,
    tags: ['html', 'image'],
    link: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.emagidla.com%2Fwp-content%2Fuploads%2F2013%2F10%2Fhtml5.png&f=1&nofb=1',
    rating: 3,
  },
  {
    userID: 4,
    topicID: 2,
    tags: ['javascript', 'video'],
    link: 'https://www.youtube.com/watch?v=BggrpKfqh1c',
    rating: 1,
  },
  {
    userID: 2,
    topicID: 2,
    tags: ['css', 'article'],
    link: 'https://www.w3schools.com/quiztest/quiztest.asp?qtest=CSS',
    rating: 4,
  },
];
