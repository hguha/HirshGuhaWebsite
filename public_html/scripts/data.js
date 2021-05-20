let menu = ["Home", "Projects", "About", "Research", "Blog", "Contact"];
let animations = {
    "stats": false,
    "skillbars": false,
    "contact": false,
    "projects": false,
    "aboutcards": false
};

let highlights = [
    { type: "academic", name: "FAS Scholarship" },
    { type: "theater", name: "Aladdin in Aladdin" },
    { type: "bridge", name: "Council Bluffs Regional Gold Rush 1st Place" },
    { type: "academic", name: "KU Honors Ambassador" },
    { type: "academic", name: "SELF Fellowship" },
    { type: "academic", name: "Princeton First Fellowship" },
    { type: "academic", name: "CITP Graduate Fellow" },
    { type: "speech", name: "KSHAA State Champion in Poetry" },
    { type: "academic", name: "HYK Achievement Award" },
    { type: "bridge", name: "Tulsa Regional Tournament 3rd Place" },
    { type: "theater", name: "Prince Charming in Cinderella" },
    { type: "academic", name: "JL Constant Scholarship" },
    { type: "speech", name: "NSDA National Semifinalist" },
    { type: "theater", name: "Sebastian in Twelvth Night" },
    { type: "speech", name: "KSHAA State Champion in Informative" },
    { type: "bridge", name: "Blue Springs Tournament 1st Place" },
    { type: "academic", name: "Allen Engineering Scholarship" },
    { type: "bridge", name: "President of the KU Bridge Club" },
    { type: "academic", name: "Chancellors Top Scholar" },
    { type: "academic", name: "McClendon Scholarship" }
];

let skills = [
    { name: "PHP", value: 80 },
    { name: "Javascript", value: 95 },
    { name: "C/C++", value: 70 },
    { name: "Python", value: 90 },
    { name: "SQL", value: 80 },
    { name: "Haskell", value: 75 },
    { name: "Web Design", value: 80 },
    { name: "App Design", value: 60 },
    { name: "Content Writing", value: 75 },
    { name: "Data Analytics", value: 75 },
    { name: "Graphics/Logos", value: 65 },
    { name: "Web Development", value: 80 }
];

let interests = [ //Engineer, Researcher, Orator, Actor, Athlete, Cook
    { title: "Engineer", icon: "table-tennis", content: "Growing up and playing table tennis with my dad after work was one of my favorite pastimes, and remains so to this day, with the only real difference between the power, spin, and control at which we play. In fact, the same is true of many of the racquet sports I play, including racquetball, badminton, and tennis. However, table tennis was the game that I had the most passion for and grew the best at." },
    { title: "Researcher", icon: "hands-helping", content: "As a member of my Indian community, I set up pujas, organize festivals, serve food at picnics and clean up. This is something I’ve done for as long as I can remember, and gives me an incredible sense of family. As a tutor; since high school, I’ve tutored students in English, Physics, Calculus, Pre-Calculus, Linear Algebra, and Computer Science. As a college student, I give tours to prospective students for the Honors Program as an Ambassador and organize various outreach programs on behalf of my school." },
    { title: "Orator", icon: "heart", content: "I’m a firm believer that contract bridge is not a game of luck. As far as card games go, it’s one where only skill can win tournaments. Whether you get the worst cards or the best, it’s only how you do relative to every other team that determines you’re rank - and it is that concept that makes bridge wonderful. The math, technique, bidding sequences, and people are what led me to found and preside the Bridge Club at my school." },
    { title: "Actor", icon: "utensils", content: "I started cooking when I was 18 years old and fell in love with the creativity and freedom it brought me. Before then, making anything beyond a pancake from the store-bought mix truly was beyond a daunting task, so learning to master cuisines from every part of the world is truly liberating. In fact, it was the start of a Sunday tradition in my household, where every Sunday, myself, my father, and my girlfriend spend the evening cooking and refining our skills." },
    { title: "Athlete", icon: "theater-masks", content: "Nine years of public theater has honed my communication, leadership, and teamwork in ways that very few other activities have. Every role I’ve gotten is an oppurtunity to express myself in a new and creative way, while also crafting a comfortability with public speaking, and leading. I met some of my best friends through this activity, and have recently gotten into the directing and stage managing side of things." },
    { title: "Cook", icon: "comments", content: "Had I known that Speech and Debate would involve waking up at 5:00 AM to attend tournaments before I started, would I have gone on to qualify for state 31 times, qualify for nationals twice, win the state championship twice, and end as a national semifinalist in Informative Speech? Probably not. In that sense, I suppose it’s a good thing nobody told me. " }
];

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
        title: "Puzzles.js",
        languages: ["javascript", "flask", "python", "css"],
        description: "A series of puzzle games featuring A.I. opponents and two player support easy to embed in a website.",
        image: "rubikscube.png",
        features: [
            { icon: "user-cog", caption: "Uses mini-max algorithms with basic alpha-beta pruning to implement a working engine opponent" },
            { icon: "puzzle-piece", caption: "Play fun games with your friends or against a machine at any time" },
            { icon: "globe", caption: "Written as importable classes that can be declared in one line on any webpage" },
        ],
        buttons: [
            { icon: "fab fa-github", tooltip: "View Code", link: "https://github.com/hguha/Puzzles.JS" },
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
]

let papers = [{
        title: "DDoS Detective: A Collaborative Telemetry SystemFor DDoS Identification and Mitigation",
        abstract: "Distributed Denial-of-Service (DDoS) is a broad class of network attacks that overwhelm a server with a high volume of traffic. This paper presents a system called \"DDoS Detective\" for cooperation between telemetry systems across ASes to detect and mitigate amplification based DDoS attacks that use IP spoofing. Many recent systems have used techniques from statistics and machine learning to achieve successful attack detection. In contrast, DDoS Detective uses no statistical techniques. Low level operations in the system are formulated and tested using Sonata queries and can be combined across ASes to map an attack. In running these queries on Sonata, we unintentionally discover and present implementation issues with the underlying Sonata code base.",
        links: [{ type: "Proposal", href: "ddos_proposal.pdf" }, { type: "Paper", href: "ddos_paper.pdf" }]
    },
    {
        title: "Safety from Bigoted AI: A Framework for Online Debiasing",
        abstract: "Deployed models often stream high-impact outputs and actively train on newobserved data. Many fairness algorithms provide extremely strong guaranteesabout statistical parity on protected groups in the batchwise setting or in thelimit of training data. We are therefore motivated to extend these results to theonline setting where we can impose safety conditions on the model’s behaviorthroughout the trajectory of its deployment.  We propose thee-tolerant onlinedebiaser as a rejection-sampling framework with a strong theoretical guaranteeof statistical parity;  we conclude with a demonstration of its effectiveness onminimizing bias from recidivism predictions on the ProPublica dataset.",
        links: [{ type: "Proposal", href: "bias_proposal.pdf" }, { type: "Paper", href: "bias_paper.pdf" }]
    },
    {
        title: "Face To Face: An Accuracy-Time Weighted Comparison of Facial Recognition Methods",
        abstract: "Facial recognition has broad applicability in a variety of fields, including user authentication, person identification, video surveillance, criminal investigations, data privacy, gaming, and photography. In this paper, we study three different methods for categorizing faces from a variety of images: Haar Cascade Classifiers, Histogram Oriented Gradients, and Convolutional Neural Networks. Using the FDDB dataset, we will examine how each of these models performs on various image types by generating bounding boxes, time, and accuracy statistics. We then use this to analyze the situations that favor one model over another, and discuss the trade-offs present in various scenarios.",
        links: [{ type: "Paper", href: "facial_recognition_paper.pdf" }]
    },
    {
        title: "Classifying Twitter Sentiments from the Black Lives Matter Movement",
        abstract: "We classify tweets related to the Black Lives Matter movement as positive or negative in order to ascertain an understanding of various classifiers. After cleaning the data, we train 5 different classifiers, each using both a bag-of-words representation and a tf-idf score. We use a variety of metrics to evaluate the performance of the classifiers, including accuracy, precision, recall, ROC AUC scores, and cross-validation. We found that the classifiers generally had better performance with tf-idf scores, and that Support Vector Machines, Naive Bayes, and Logistic Regression tended to be the most accurate by a variety of metrics, while Random Forests and K-Nearest Neighbors performed poorly.",
        links: [{ type: "Paper", href: "twitter_paper.pdf" }]
    },
    {
        title: "Predictive Markers of Engineering Graduate Admissions Behaviour",
        abstract: "In the area of Engineering Schools, some would describe the admissions process of Masters and PhD programs as something that would require a crystal ball to get right. Well that most certainly might help, there is evidence that Engineering Departments follow changes that can be predicated, and improved in their admissions decision. Here, we will outline an approach to understanding and enhancing graduate admissions decisions based on predictive markers.",
        links: [{ type: "Proposal", href: "admissions_proposal.pdf" }]
    },
    {
        title: "Password Pattern Analysis and Policy-Based Mask Generation For Behavioral Trends",
        abstract: "Large scale corporate data-leaks happen almost weekly. Often, the most worrying leaked piece of information are passwords. Subsequently, penetration testing and security analysis companies make up a multi-million dollar industry, and the study of password security and password choosing behaviours continues to be an important topic for study from various and novel perspectives. Here, I will provide a methodology for analysis of these passwords gives us insight into the psychology of how humans choose passwords, as well as what password cracking techniques would be most effective as well as a methodology for policy-based mask generation for improving password cracking methods.",
        links: [{ type: "Paper", href: "passwords_paper.pdf" }]
    }
];

let smIcons = [
    { icon: "fab fa-twitter", href: "https://twitter.com/hirshguha" },
    { icon: "fab fa-instagram", href: "https://instagram.com/hirshguha" },
    { icon: "fab fa-facebook", href: "https://www.facebook.com/hirsh.guha/" },
    { icon: "fab fa-github", href: "https://github.com/hguha" },
    { icon: "fab fa-linkedin", href: "https://www.linkedin.com/in/hirsh-guha-40b247191" },
];

let stats = [
    { value: 100, name: "Months of Experience" },
    { value: 50000, name: "Lines of Code Written" },
    { value: 20000, name: "Views on my Pages" },
    { value: 3000, name: "Teas Consumed" }
]
let highlightFilters = ["theater", "bridge", "speech", "academic"];