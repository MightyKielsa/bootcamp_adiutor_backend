//notes (notesID INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, userID INT, week INT, day INT, tags TEXT [], note TEXT)

//DUMMY DATA ONLY FOR DEMONSTRATION AND TESTING PURPOSES

export const notes = [
  {
    userID: 1,
    week: 1,
    day: 1,
    tags: ['example', 'video', 'html'],
    note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    userID: 3,
    week: 1,
    day: 2,
    tags: ['example', 'css', 'html'],
    note: 'Viverra orci sagittis eu volutpat. Amet consectetur adipiscing elit ut aliquam purus. Euismod in pellentesque massa placerat duis ultricies lacus sed turpis. Vitae congue mauris rhoncus aenean vel. Urna cursus eget nunc scelerisque.',
  },
  {
    userID: 2,
    week: 3,
    day: 5,
    tags: ['example', 'video', 'html'],
    note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    userID: 4,
    week: 2,
    day: 5,
    tags: ['javascript', 'debugging', 'frontend'],
    note: 'Tellus mauris a diam maecenas sed enim ut sem viverra. Id diam vel quam elementum.',
  },
  {
    userID: 5,
    week: 4,
    day: 1,
    tags: ['frontend', 'video'],
    note: 'Fringilla phasellus faucibus scelerisque eleifend donec pretium. Eu lobortis elementum nibh tellus molestie nunc non.',
  },
  {
    userID: 6,
    week: 4,
    day: 1,
    tags: ['backend', 'video', 'example'],
    note: 'Consequat semper viverra nam libero justo laoreet.',
  },
  {
    userID: 2,
    week: 4,
    day: 4,
    tags: ['backend', 'debugging'],
    note: 'Urna neque viverra justo nec ultrices dui sapien. Venenatis urna cursus eget nunc scelerisque viverra mauris.',
  },
];
