-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2.1
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Mar 02 Octobre 2018 à 22:10
-- Version du serveur :  5.7.23-0ubuntu0.16.04.1
-- Version de PHP :  7.0.32-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `reactor`
--

-- --------------------------------------------------------

--
-- Structure de la table `answers_level_1`
--

CREATE TABLE `answers_level_1` (
  `id` int(10) UNSIGNED NOT NULL,
  `answer` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `answers_level_1`
--

INSERT INTO `answers_level_1` (`id`, `answer`) VALUES
(1, 'Yes'),
(2, 'No');

-- --------------------------------------------------------

--
-- Structure de la table `answers_level_2`
--

CREATE TABLE `answers_level_2` (
  `id` int(10) UNSIGNED NOT NULL,
  `answer` int(10) NOT NULL,
  `questions_level_2_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `answers_level_2`
--

INSERT INTO `answers_level_2` (`id`, `answer`, `questions_level_2_id`) VALUES
(1, 2, 1),
(3, 1, 2),
(4, 1, 3),
(5, 2, 4),
(6, 3, 5),
(7, 4, 6),
(8, 3, 7),
(9, 3, 8),
(10, 1, 9);

-- --------------------------------------------------------

--
-- Structure de la table `answers_level_3`
--

CREATE TABLE `answers_level_3` (
  `id` int(10) UNSIGNED NOT NULL,
  `answer1` int(10) NOT NULL,
  `answer2` int(10) NOT NULL,
  `questions_level_3_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `answers_level_3`
--

INSERT INTO `answers_level_3` (`id`, `answer1`, `answer2`, `questions_level_3_id`) VALUES
(1, 1, 2, 1),
(3, 2, 4, 2),
(5, 1, 4, 3),
(6, 1, 3, 4),
(7, 1, 4, 5),
(8, 2, 3, 6);

-- --------------------------------------------------------

--
-- Structure de la table `assignment`
--

CREATE TABLE `assignment` (
  `id` int(10) UNSIGNED NOT NULL,
  `where` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `assignment`
--

INSERT INTO `assignment` (`id`, `where`) VALUES
(1, 'boss'),
(2, 'door'),
(3, 'chest');

-- --------------------------------------------------------

--
-- Structure de la table `game`
--

CREATE TABLE `game` (
  `id` int(10) UNSIGNED NOT NULL,
  `score` int(11) NOT NULL,
  `difficulty` int(11) NOT NULL,
  `bonus` varchar(255) NOT NULL COMMENT 'Bonus looted',
  `users_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `questions_level_1`
--

CREATE TABLE `questions_level_1` (
  `id` int(10) UNSIGNED NOT NULL,
  `question` tinytext NOT NULL,
  `answer1` varchar(255) NOT NULL,
  `answer2` varchar(255) NOT NULL,
  `answerquote` tinytext NOT NULL,
  `quizzes_id` int(10) UNSIGNED NOT NULL,
  `answers_level_1_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `questions_level_1`
--

INSERT INTO `questions_level_1` (`id`, `question`, `answer1`, `answer2`, `answerquote`, `quizzes_id`, `answers_level_1_id`) VALUES
(1, 'The first version of React was released in 2013.', 'Yes', 'No', 'React (also called React.js or ReactJS) is a free JavaScript library that Facebook has been developing since 2013.', 1, 1),
(2, 'Netflix uses React.', 'Yes', 'No', 'The library is used in particular by Netflix (server-side only) since October 25, 2017, in order to gain 50% performance.', 1, 1),
(3, 'React was bought by Google in 2018.', 'Yes', 'No', 'React (also called React.js or ReactJS) is a free JavaScript library developed by Facebook since 2013.', 1, 2),
(4, 'Redux is a predictable state container for JavaScript apps.', 'Yes', 'No', 'Redux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.', 4, 1),
(5, 'Can Redux only be used with React?', 'Yes', 'No', 'Redux can be used as a data store for any UI layer. The most common usage is with ReactJS and React Native, but there are bindings available for Angular, Angular 2, Vue, Mithril, and more.', 4, 2),
(6, 'Redux is originally written in ES5.', 'Yes', 'No', 'Redux is originally written in ES6 and transpiled for production into ES5 with Babel via Webpack.', 4, 2),
(7, 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine.', 'Yes', 'No', 'As an asynchronous event driven JavaScript runtime, Node is designed to build scalable network applications.', 7, 1),
(8, 'Node.js was originally written by Ryan Dahl in 1987.', 'Yes', 'No', 'Node.js was originally written by Ryan Dahl in 2009, about thirteen years after the introduction of the first server-side JavaScript environment, Netscape\'s LiveWire Pro Web.', 7, 2),
(9, 'Node.js operates on a multi-thread event loop.', 'Yes', 'No', 'Node.js operates on a single thread event loop, using non-blocking I/O calls, allowing it to support tens of thousands of concurrent connections without incurring the cost of thread context switching.', 7, 2);

-- --------------------------------------------------------

--
-- Structure de la table `questions_level_2`
--

CREATE TABLE `questions_level_2` (
  `id` int(10) UNSIGNED NOT NULL,
  `question` tinytext NOT NULL,
  `answer1` varchar(255) NOT NULL,
  `answer2` varchar(255) NOT NULL,
  `answer3` varchar(255) NOT NULL,
  `answer4` varchar(255) NOT NULL,
  `answerquote` tinytext NOT NULL,
  `quizzes_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `questions_level_2`
--

INSERT INTO `questions_level_2` (`id`, `question`, `answer1`, `answer2`, `answer3`, `answer4`, `answerquote`, `quizzes_id`) VALUES
(1, 'Who is the creator of React?', 'Google', 'Facebook', 'Microsoft', 'Obiwan Kenobi', 'React.js or ReactJS) is a free JavaScript library that Facebook has been developing since 2013', 2),
(2, 'What is the main purpose of the React library?', 'React makes it painless to create interactive UIs.', 'To make Facebook the master of the world.', 'To create a web application in 10 seconds.', 'To block the global warming.', 'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.', 2),
(3, 'What is the real name of Javascript?', 'TypeScript', 'ECMAscript', 'JScript', 'JavaTheHut', 'JavaScript was created in 1995 by Brendan Eich (and has nothing to do with the computer-programming language Java). It was standardized under the name ECMAScript in June 1997 by Ecma International.', 2),
(4, 'What are Node.js modules?', 'They are like the Force used by the Jedi', 'They are libraries and third-party pieces of code.', 'There are no Node.js modules.', 'They are methods from the Node core.', 'Node.js modules are just libraries and third-party pieces of code that developers can use to make their work much faster. If you’re familiar with Ruby, they are the equivalent of gems.', 8),
(5, 'What is the main benefit of Node.js?', 'It is suited for I/O stuff only.', 'Every time using a callback will end up with tons of nested callbacks.', 'Uses JavaScript, which is easy to learn (meh…).', 'Node.js doesn’t provide scalability.', 'It makes it possible to write both the front end and back end of an app, using one developing language: JavaScript, which is easy to approach. It improves the communication between teams and makes work more efficient.', 8),
(6, 'Where can Node.js be the best solution ?', 'Dealing with a relational database.', 'Making video encoding.', 'Making a better world.', 'For a Web Socket Server.', 'The non-blocking architecture of Node makes it the best suited solution for socket server applications or broadcasting-like applications. Chat servers can become more efficient and real time, using Node.js as their base.', 8),
(7, 'What is Redux ?', 'It is a JavaScript library only for React State.', 'It is a React framework for managing the application’s state with stores.', 'It is an open-source JavaScript library for managing the application\'s state.', 'It is Obiwan Kenobi !', 'Redux is an open-source JavaScript library for managing application state. It is most commonly used with libraries such as React or Angular.', 5),
(8, 'In which language Redux is written ?', 'In React.', 'In C++.', 'In ECMAscript.', 'In English.', 'Redux is an open-source JavaScript library for managing application state, written in JavaScript (aka ECMAscript 6 - ES6).', 5),
(9, 'What is the main strength of Redux ?', 'Predictability and simplicity.', 'Redux uses the Force.', 'Actions are disconnected from their effect (which is defined in the reducer).', 'No separation between data and presentation.', 'Redux simply provides a subscription mechanism which can be used by any other code.', 5);

-- --------------------------------------------------------

--
-- Structure de la table `questions_level_3`
--

CREATE TABLE `questions_level_3` (
  `id` int(10) UNSIGNED NOT NULL,
  `question` tinytext NOT NULL,
  `answer1` varchar(255) NOT NULL,
  `answer2` varchar(255) NOT NULL,
  `answer3` varchar(255) NOT NULL,
  `answer4` varchar(255) NOT NULL,
  `answerquote` tinytext NOT NULL,
  `quizzes_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `questions_level_3`
--

INSERT INTO `questions_level_3` (`id`, `question`, `answer1`, `answer2`, `answer3`, `answer4`, `answerquote`, `quizzes_id`) VALUES
(1, 'How do you indicate a comment in Javascript?', '/*\r\n*/', '//', '<--! -->', '#', 'Two types of comments: On a line with // On multiple lines with / * and * / (like in CSS!)', 3),
(2, 'A boolean variable can take 2 values: which ones?', '0', 'false', '1', 'true', 'A boolean variable can take only 2 values: true or false.', 3),
(3, 'How do you indicate a string of characters in JavaScript?', '\'\' (simple quotes)', '() (brackets)', '{} (braces)', '"" (double quotes)', '"" and \': double and single quotes allow you to indicate a string of characters.', 3),
(4, 'Which ones of these frameworks are designed for Node.js ?', 'Hapi', 'Bootstrap', 'Express', 'Symfony', 'Hapi and Express are popular frameworks used with Node.js.', 9),
(5, 'In this case, what is (are) the correct syntaxe(s) for the callback ?', 'http.createServer(function(req, res) {}).listen(666);', 'http.createServer(req, res => {}).listen(666);', 'http.createServer(function() => {}).listen(666);', 'http.createServer((req, res) => {}).listen(666);', 'In this case, the correct answers are: function() {} or () => {}.', 9),
(6, 'What can Node.js do?', 'Node.js can use composer.', 'Node.js can generate dynamic page content.', 'Node.js can add, delete, modify data in a database.', 'Node.js can use PHP language.', 'Node.js can generate dynamic page content, create, open, read, write, delete, and close files on the server. Node.js can also collect form data and add, delete, modify data in a database.\r\n', 9);

-- --------------------------------------------------------

--
-- Structure de la table `quizzes`
--

CREATE TABLE `quizzes` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `level` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `users_id` int(11) NOT NULL,
  `assignment_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `quizzes`
--

INSERT INTO `quizzes` (`id`, `title`, `level`, `description`, `users_id`, `assignment_id`) VALUES
(1, 'React/Js', 'Level 1', 'Quiz on the theme React and Javascript.', 1, 2),
(2, 'React/JS', 'Level 2', 'Quiz on the theme React and Javascript.', 1, 1),
(3, 'React/Js', 'Level 3', 'Quiz on the theme React and Javascript.', 1, 3),
(4, 'Redux', 'Level 1', 'Quiz on the theme React Redux.', 1, 1),
(5, 'Redux', 'Level 2', 'Quiz on the theme React Redux.', 1, 2),
(6, 'Redux', 'Level 3', 'Quiz on the theme React Redux.', 1, 3),
(7, 'Node Js', 'Level 1', 'Quizz one the theme Node.js', 1, 1),
(8, 'Node Js', 'Level 2', 'Quizz one the theme Node.js', 1, 2),
(9, 'Node Js', 'Level 3', 'Quizz one the theme Node.js', 1, 3);

-- --------------------------------------------------------

--
-- Structure de la table `sessions`
--

CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) UNSIGNED NOT NULL,
  `data` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `user` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(60) NOT NULL,
  `picture` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `users`
--

INSERT INTO `users` (`id`, `user`, `email`, `password`, `picture`) VALUES
(1, 'Fabien', 'fabien@test.fr', '$2b$10$gvYjkxBvym3mEv.pbGaXAuuRpvpl65y6IRFw/PzyN8lDnfh9z0a6C', NULL);

--
-- Index pour les tables exportées
--

--
-- Index pour la table `answers_level_1`
--
ALTER TABLE `answers_level_1`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `answers_level_2`
--
ALTER TABLE `answers_level_2`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_answers_level_2_questions_level_21_idx` (`questions_level_2_id`);

--
-- Index pour la table `answers_level_3`
--
ALTER TABLE `answers_level_3`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_answers_level_3_questions_level_31_idx` (`questions_level_3_id`);

--
-- Index pour la table `assignment`
--
ALTER TABLE `assignment`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `game`
--
ALTER TABLE `game`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_game_users1_idx` (`users_id`);

--
-- Index pour la table `questions_level_1`
--
ALTER TABLE `questions_level_1`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_questions_quizzes1_idx` (`quizzes_id`),
  ADD KEY `fk_questions_level_1_answers_level_11_idx` (`answers_level_1_id`);

--
-- Index pour la table `questions_level_2`
--
ALTER TABLE `questions_level_2`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_questions_quizzes1_idx` (`quizzes_id`);

--
-- Index pour la table `questions_level_3`
--
ALTER TABLE `questions_level_3`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_questions_quizzes1_idx` (`quizzes_id`);

--
-- Index pour la table `quizzes`
--
ALTER TABLE `quizzes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_quizzes_users1_idx` (`users_id`),
  ADD KEY `fk_quizzes_assignment1_idx` (`assignment_id`);

--
-- Index pour la table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`session_id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `answers_level_1`
--
ALTER TABLE `answers_level_1`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `answers_level_2`
--
ALTER TABLE `answers_level_2`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT pour la table `answers_level_3`
--
ALTER TABLE `answers_level_3`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT pour la table `assignment`
--
ALTER TABLE `assignment`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT pour la table `game`
--
ALTER TABLE `game`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `questions_level_1`
--
ALTER TABLE `questions_level_1`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT pour la table `questions_level_2`
--
ALTER TABLE `questions_level_2`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT pour la table `questions_level_3`
--
ALTER TABLE `questions_level_3`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT pour la table `quizzes`
--
ALTER TABLE `quizzes`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
