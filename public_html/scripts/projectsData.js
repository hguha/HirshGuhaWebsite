var projects = [{
    title: "Online Debiaser",
    languages: ["python", "pytorch", "tensorboard"],
    description: "A classifier for removing bias from trained machine learning in Fairness, Accountability and Transparency(FAT*) models in the online setting",
    image: "debiaser.png",
    features: [
        { icon: "icicles", caption: "Provides the necessary liveness guarentees to prevent freezing of the production model" },
        { icon: "shield-alt", caption: "Provides the safety guarentees to ensure that we are never more epsilon-biased than our threshhold" },
        { icon: "chart-line", caption: "Visualizes the difference in class-wise accuracy via tensorboard charts" },
    ],
    buttons: [
        { icon: "fab fa-github", tooltip: "View Code", link: "https://github.com/hguha/SudokuSolver" },
        { icon: "fas fa-book", tooltip: "Read Paper", link: "/papers/bias_paper.pdf" },
    ],
},
{
    title: "Blog.JS",
    languages: ["html", "javascript", "jquery"],
    description: "The lightest-weight, easiest, most customizable blogging platform you'll ever see.",
    image: "blog.png",
    features: [
        { icon: "file-code", caption: "Add posts with raw HTML for maximum customizability" },
        { icon: "hashtag", caption: "Automatically adds urls slugs, allowing for direct navigation to a post" },
        { icon: "fast-forward", caption: "no reloads mean that going from post to post to listing is insanely fast" },
    ],
    buttons: [
        { icon: "fab fa-github", tooltip: "View Code", link: "https://github.com/hguha/blog.js" },
        { icon: "fas fa-binoculars", tooltip: "View Blog", link: "/blog" }
    ],
},
{
    title: "ElectWise",
    languages: ["react.js", "node.js", "python", "apache", "aws"],
    description: "HDFS secured online voting system for large scale elections that allows voting from a computer, tablet, or phone",
    image: "electwise.png",
    features: [
        { icon: "cogs", caption: "Administrator interfaces allow for creation and editing of election criterion" },
        { icon: "hourglass", caption: "Voting results in bucketed real-time results, and can be completed in under 5 minutes" },
        { icon: "tasks", caption: "Candidate portal ensures every voter has accurate, representative information about each choice" },
    ],
    buttons: [
        { icon: "fab fa-github", tooltip: "View Code", link: "https://github.com/hguha/ElectWise" },
        { icon: "fas fa-video", tooltip: "Watch Video", link: "https://drive.google.com/file/d/1WXP0GW0XqjLnMVXq24OGaUmHD7rSwkMQ/view?usp=sharing" }
    ],
},
{
    title: "LibMe",
    languages: ["php", "javascript", "SQL"],
    description: "An entirely online library system for handling books",
    image: "libme.png",
    features: [
        { icon: "book", caption: "Hold system ensures that books are held books are immediately checked out upon return" },
        { icon: "users-cog", caption: "Admin and User interfaces ensure a 360° experience for a library" },
        { icon: "search", caption: "Keyword searching by partial name, author, or ISBN makes it a breeze to find a book" },
    ],
    buttons: [
        { icon: "fab fa-github", tooltip: "View Code", link: "https://github.com/hguha/LibMe" },
        { icon: "fas fa-video", tooltip: "Watch Video", link: "https://drive.google.com/file/d/1NqXyEsPVaR5II4Z4Y8OG0xAQt8xvY7JV/view?usp=sharing" }
    ],
},
{
    title: "Expenser",
    languages: ["javascript", "firebase", "firestore", "chart.js"],
    description: "A progressive web app for tracking month-to-month expenses and monitoring spending habits",
    image: "expenser.png",
    features: [
        { icon: "edit", caption: "Easy interface to edit/add expenses with a name, price, and date and have it update in real time" },
        { icon: "download", caption: "manifest.json ensures the app is a PWA, and can be downloaded on a phone, tablet, or computer." },
        { icon: "chart-pie", caption: "Series of useful graphs allow intuitive understanding of spending habits." },
    ],
    buttons: [
        { icon: "fab fa-github", tooltip: "View Code", link: "https://github.com/hguha/Expenser" }
    ],
},
{
    title: "Puzzles.JS",
    languages: ["javascript", "flask", "python", "css"],
    description: "A series of puzzle games featuring A.I. opponents and two player support easy to embed in a website.",
    image: "rubikscube.png",
    features: [
        { icon: "user-cog", caption: "Uses mini-max algorithms with basic alpha-beta pruning to implement a working engine opponent" },
        { icon: "puzzle-piece", caption: "Play fun games with your friends or against a machine at any time" },
        { icon: "globe", caption: "Written as importable classes that can be declared in one line on any webpage" },
    ],
    buttons: [
        { icon: "fab fa-github", tooltip: "View Code", link: "https://github.com/hguha/puzzles.js"},
        { icon: "fas fa-arrow-right", tooltip: "Use It", link: "games/index.html" },
    ],
},
{
    title: "Skynet Security",
    languages: ["python", "raspberry-pi", "lidar"],
    description: "A light/sound based security system using object detection, image classification, and proximity detection on a raspberry pi",
    image: "skynet.jpg",
    features: [
        { icon: "walking", caption: "Tensor Flow image classification and object detection" },
        { icon: "ruler", caption: "TFMini - Micro LiDAR Module achieves real-time and contactless distance measurement" },
        { icon: "adjust", caption: "Threshold Frame created from the high contrast and difference frames" },
    ],
    buttons: [
        { icon: "fab fa-github", tooltip: "View Code", link: "https://github.com/hguha/Skynet" },
        { icon: "fas fa-video", tooltip: "Watch Video", link: "https://www.youtube.com/watch?v=aIcJxIsbZ6k" }
    ],
},
{
  title: "Face-To-Face Object Detection Benchmarking",
  languages: ["python", "scikit", "opencv"],
  description: "An implementation of Convolutional Neural Networks, Histogram Oriented Gradients, and Haar Cascading Classifiers, as well as a benchmark method for them",
  image: "object-detection.png ",
  features: [
    {
      icon: "smile",
      caption: "Implements real-time facial detection(as well as mouth and eyes) through Haar Cascading Classifiers and your webcam"
    },
    {
      icon: "hourglass",
      caption: "Measures the accuracy, precision, and recall and time differences between Haar, CNN, and HoG"
    },
    {
      icon: "list-ol",
      caption: "Implemented Prinicipal Component Analysis(PCA) and Support Vector Machines(SVM) to break recongized faces into eigenvectors"
    },
  ],
  buttons: [
    { icon: "fab fa-github", tooltip: "View Code", link: "https://github.com/hguha/facial-recognition-analysis" },
    { icon: "fas fa-book", tooltip: "Read Paper", link: "/papers/facial_recognition_paper.pdf" },

  ],
},
{
  title: "Website",
  languages: ["html", "javascript", "jquery", "css", "fullpage.js"],
  description: "A website entirely coded towards me in order to demonstrate my abilities in web design and dynamic websites; the website you are on right now!",
  image: "website.png ",
  features: [
    {
      icon: "code-branch",
      caption: "Multiple versions of the website have allowed me to mess with various technologies and frameworks such as FullPage.JS, Slick.JS, etc."
    },
    {
      icon: "mobile",
      caption: "Bootstrap framework and use of keyframes creates a perfectly responsive site, viewable at any viewport"
    },
    {
      icon: "expand-arrows-alt",
      caption: "Full-Page layout with horizontal and vertical scrolling controlable via the keyboard, scroll wheel, and ondrag events."
    },
  ],
  buttons: [
    { icon: "fab fa-github", tooltip: "View Code", link: "https://github.com/hguha/puzzles.js/tree/master/tictactoe" },
    { icon: "fas fa-binoculars", tooltip: "Play", link: "games/tictactoe/index.html" },
  ],
},
{
    title: "Dogstagram",
    languages: ["python", "flask", "jquery", "firebase", "javascript", "tensorflow"],
    description: "A social media/image sharing platform with a twist: image classification prevents upload of any image other than dogs",
    image: "dogstagram.png",
    features: [
        { icon: "paw", caption: "Tensor Flow Image Classification assures \"dog\" tag is set before uploading the image" },
        { icon: "tachometer-alt", caption: "Dashboard and friend system allows users to see what other users they follow are posting" },
        { icon: "image", caption: "All the usual options are there: Add, Delete, Modify, and caption photos" },
    ],
    buttons: [
        { icon: "fab fa-github", tooltip: "View Code", link: "https://github.com/hguha/Dogstagram" },
    ],
},
{
    title: "Sudoku Solver",
    languages: ["haskell"],
    description: "Deterministic non-polynomial time sudoku solver written in haskell",
    image: "solver.png",
    features: [
      {
        icon: "eye-slash",
        caption: "unsolved puzzle can be pipelined in via a seperate text file, or inputted directly into the program"
      },
      {
        icon: "list-ol",
        caption: "Handles non-unique cases by returning the first of many possibilities"
      },
      {
        icon: "fast-forward",
        caption: "Though the algorithm efficiency is non-polynomial, efficiencies mean it solves in under a second"
      },
    ],
    buttons: [
      { icon: "fab fa-github", tooltip: "View Code", link: "https://github.com/hguha/SudokuSolver" },
    ],
  },
  {
    title: "Checkers",
    languages: ["puzzles.js", "javascript"],
    description: "The classic game of checkers with a special algorithm to calculate all possible jumps for a given piece",
    image: "checkers.png",
    features: [
      {
        icon: "chess-king",
        caption: "Handles the functionality for 'kinging' once a piece reaches the opposite side"
      },
      {
        icon: "dice-two",
        caption: "Implements a two-player turn-based version of the game, for quick and easy play with a friend or against yourself"
      },
      {
        icon: "link",
        caption: "Calculates all possible available moves for a given piece, including chained-jumps"
      },
    ],
    buttons: [
      { icon: "fab fa-github", tooltip: "View Code", link: "https://github.com/hguha/puzzles.js/tree/master/checkers" },
      { icon: "fas fa-binoculars", tooltip: "Play", link: "games/checkers/index.html" },
    ],
  },
  {
    title: "Chess",
    languages: ["puzzles.js", "javascript"],
    description: "The classic game of chess with a special algorithm to calculate all possible moves for a given piece and the beginnings of an AI",
    image: "chess.png",
    features: [
      {
        icon: "calculator",
        caption: "Calculates all possible moves for a Pawns, Rooks, Queens, Bishops, Knights, and Kings, including special considerations for en passant, and potential checks"
      },
      {
        icon: "lightbulb",
        caption: "Working on a basic implementation of the mini-max algorithm for an AI opponent, with a depth up to 10."
      },
    ],
    buttons: [
      { icon: "fab fa-github", tooltip: "View Code", link: "https://github.com/hguha/puzzles.js/tree/master/chess" },
      { icon: "fas fa-binoculars", tooltip: "Play", link: "games/chess/index.html" },
    ],
  },
  {
    title: "Connect-N",
    languages: ["puzzles.js", "javascript"],
    description: "Why play connect-4 with an 8x7 board when you could play connect-10 with any sized board?",
    image: "connect-N.png",
    features: [
      {
        icon: "th",
        caption: "The playing board can be any size, allowing for unique strategies beyond the traditional connect4 strategies"
      },
      {
        icon: "braille",
        caption: "Change the number of connections necessary to win(defauls to 4, but can be as large as the min of the number of columns and number of rows)."
      },
      {
        icon: "trophy",
        caption: "Handles the win-conditions for rows, columns, and diagonals automatically for the specified number of connections."
      },
    ],
    buttons: [
      { icon: "fab fa-github", tooltip: "View Code", link: "https://github.com/hguha/puzzles.js/tree/master/connect4" },
      { icon: "fas fa-binoculars", tooltip: "Play", link: "games/connect4/index.html" },
    ],
  },
  {
    title: "Dots and Boxes",
    languages: ["puzzles.js", "javascript"],
    description: "Using a node and graph data structure instead of a grid, try to create more boxes than your friend!",
    image: "dotsandboxes.png",
    features: [
      {
        icon: "border-none",
        caption: "Clicking between any two nodes creates an edge that is 1/4 of a box"
      },
      {
        icon: "tint",
        caption: "Colors any square completed by a player, and gives that player another turn"
      },
      {
        icon: "check-circle",
        caption: "Calculates in real-time the score of each player"
      },
    ],
    buttons: [
      { icon: "fab fa-github", tooltip: "View Code", link: "https://github.com/hguha/puzzles.js/tree/master/dotsandboxes" },
      { icon: "fas fa-binoculars", tooltip: "Play", link: "games/dotsandboxes/index.html" },
    ],
  },
  {
    title: "Minesweeper",
    languages: ["puzzles.js", "javascript", "javascript"],
    description: "The classic game of minesweeper with many additional features - my take on a recursive revealing algorithm",
    image: "minesweeper.png",
    features: [
      {
        icon: "bomb",
        caption: "Recursive algorithm first randomly places the specified number of bombs, and then generates the values of each square from that"
      },
      {
        icon: "cogs",
        caption: "Settings allow maniputation of the number of rows, columns, and the number of bombs"
      },
      {
        icon: "flag",
        caption: "Right clicking on a square marks it with a flag, preventing it from exploding"
      },
    ],
    buttons: [
      { icon: "fab fa-github", tooltip: "View Code", link: "https://github.com/hguha/puzzles.js/tree/master/minesweeper" },
      { icon: "fas fa-binoculars", tooltip: "Play", link: "games/minesweeper/index.html" },
    ],
  },
  {
    title: "Rubiks Cube",
    languages: ["puzzles.js", "javascript", "javascript", "css"],
    description: "my take on a functioning Rubiks Cube model, using CSS shaders controlled with a mouse",
    image: "rubikscube.png",
    features: [
      {
        icon: "random",
        caption: "Shuffle functionality allows a user to quickly simulate any number of turns in order to try and solve it"
      },
      {
        icon: "thumbs-up",
        caption: "Solve button immediately resets the cube back to its solved state"
      },
      {
        icon: "mouse",
        caption: "A series of anchors allow for a mouse click and drag to either rotate the whole cube, or make a turn"
      },
    ],
    buttons: [
      { icon: "fab fa-github", tooltip: "View Code", link: "https://github.com/hguha/puzzles.js/tree/master/rubikscube" },
      { icon: "fas fa-binoculars", tooltip: "Play", link: "games/rubikscube/index.html" },
    ],
  },
  {
    title: "Sudoku",
    languages: ["puzzles.js", "javascript"],
    description: "play randomly generated sudoku, create your own, or use the built in backtracking algorithm to have a board solved for you",
    image: "sudoku.png",
    features: [
      {
        icon: "backward",
        caption: "Backtracking algorithm brute force solves an inputted puzzle"
      },
      {
        icon: "border-none",
        caption: "User friendly board allows keyboard controls and mouse controls to select and change the value of any square"
      },
    ],
    buttons: [
      { icon: "fab fa-github", tooltip: "View Code", link: "https://github.com/hguha/puzzles.js/tree/master/sudoku" },
      { icon: "fas fa-binoculars", tooltip: "Play", link: "games/sudoku/index.html" },
    ],
  },
  {
    title: "Tetris",
    languages: ["puzzles.js", "javascript"],
    description: "As a former compeitive tetris player(7th in the world!), I thought it fitting to recreate my favorite game and learn it's matrix arithmetic",
    image: "tetris.png",
    features: [
      {
        icon: "superscript",
        caption: "Uses linear algebra to calcluate how pieces should rotate as the fall, and how they 'fit' once they reach the bottom"
      },
      {
        icon: "keyboard",
        caption: "keyboard controls allow for easy rotation, hard drops, soft drops, and panning."
      },
    ],
    buttons: [
      { icon: "fab fa-github", tooltip: "View Code", link: "https://github.com/hguha/puzzles.js/tree/master/tetris" },
      { icon: "fas fa-binoculars", tooltip: "Play", link: "games/tetris/index.html" },
    ],
  },
  {
    title: "Unbeatable Tic-Tac-Toe AI",
    languages: ["puzzles.js", "javascript"],
    description: "The classic game of tic-tic-toe for one or two players, featuring an unbeatable AI",
    image: "tictactoe.png",
    features: [
      {
        icon: "brain",
        caption: "The mini-max algorithm with alpha beta pruning on a solved game means you cannot beat the AI"
      },
      {
        icon: "user-friends",
        caption: "Support for one player vs AI, or playing against a friend"
      },
      {
        icon: "trophy",
        caption: "Automtically calculates wins, and tallys the wins, losses, and draws for each player."
      },
    ],
    buttons: [
      { icon: "fab fa-github", tooltip: "View Code", link: "https://github.com/hguha/puzzles.js/tree/master/tictactoe" },
    ],
  },
  {
    title: "FitNoter",
    languages: ["javascript", "firebase", "firestore", "chart.js"],
    description: "A progressive web app for tracking workouts through sets, reps, and various exercises, as well as analyzing progress over time and personal records",
    image: "fitnoter.png",
    features: [
      {
        icon: "chart-pie",
        caption: "Intuitive graph page shows volume over time, exercise weight over time, and amount of volume dedicated to each bodypart in a week, month, or year"
      },
      { 
        icon: "list-ol",
        caption: "Listing tab allows a user to easily enter in a new exrecise, assign it to a bodypart, and view PRs for each exercise."
      },
      { 
        icon: "dumbbell",
        caption: "Enter in the sets and reps for each exercise done in a day(with date switcher), and see the total volume, sets, and reps."
      },
    ],
    buttons: [
      { icon: "fab fa-github", tooltip: "View Code", link: "https://github.com/hguha/FitNoter" },
    ],
  },
  {
    title: "Langton's Ant",
    languages: ["javascript"],
    description: "A simulation of a two-dimensional universal turing machine with resultant complex behavior",
    image: "langtons-ant.png",
    features: [
      {
        icon: "cogs",
        caption: "Simple settings allow for the adjustment of the number of ants, as well as the grid size, and number of steps"
      },
      {
        icon: "random",
        caption: "The locations of the ants are randomized, and the shown behaviour demonstrates how rules build patterns"
      },
    ],
    buttons: [
      { icon: "fab fa-github", tooltip: "View Code", link: "https://github.com/hguha/puzzles.js/tree/master/tictactoe" },
      { icon: "fas fa-binoculars", tooltip: "Play", link: "games/tictactoe/index.html" },
    ],
  },
  {
    title: "TimeIt",
    languages: ["javascript", "html"],
    description: "A simple timer with millisecond precision that calculates average times, originally made for speed-cubing. ",
    image: "timer.png",
    features: [
      {
        icon: "running",
        caption: "Calculates a running average, and an average of the last 5 and 10 trials for more data."
      },
      {
        icon: "keyboard",
        caption: "Can be started and stopped by pressing any key, avoiding accidental misclicks that don't start or stop the timer."
      },
    ],
    buttons: [
      { icon: "fab fa-github", tooltip: "View Code", link: "https://github.com/hguha/TimeIt" },
    ],
  },
  
]