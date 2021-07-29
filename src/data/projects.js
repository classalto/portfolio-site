/* eslint-disable max-len */
export const projects = [
  {
    name: 'Aspire.io',
    tech: [
      'React.js',
      'Node.js',
      'React Beautiful DnD',
      'PostgreSQL',
      'Javascript',
      'Material UI',
    ],
    description:
      'A job listing dashboard that allows you to see job listings at tech companies and track the job search process with an interactive user interface, all in one place! Application was created in a one week sprint remotely with a team of three software engineers. This frontend application was built using Vanilla Javascript utilizing the DOM to create lists of NBA players and allow the user to save selected players in localStorage and also add or remove players from their team. I implemented a results page that rendered DOM elements based on functionality that calculated a team score from a selected team in local storage.',
    url: '',
    repo: '',
    screenshot: '',
  },
  {
    name: 'Taurus Trading',
    tech: [
      'React.js',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'Chart.js',
      'Finnhub API',
      'Stocktwits API',
    ],
    description:
      "A full stack application that searches stocks and retrieves relevant price and social media sentiment which a user can track the performance of a mock portfolio over time. Application was created in a one week sprint, remotely with a team of software engineers. It's built with React.js and uses HTTP requests to query the Finnhub and Stocktwits API's for relevant stock information. My contributions include a login portal that utilizes user authentication and tokenization which allows users to create sessions and have access to their user-specific data, a notes component where users can create and delete notes that are stored in a SQL database which are accessed only by an authenticated user, implemented backend endpoints that act as middleware controllers for our database and frontend UI, and finally styling and structure of the about us page.Application was deployed with Netlify.",
    url: 'https://taurus-trading.netlify.app',
    repo: 'https://github.com/taurus-trading',
    screenshot: '',
  },
  {
    name: 'Ambience Bot',
    tech: ['Node.js', 'Discord.js', 'Javascript', 'Youtube API'],
    description:
      "A discord bot that live-streams ambient music from the Youtube API through the use of simple commands and search terms that give the user full control over an ambient stream. Application was created in a one week sprint, remotely with a team of software engineers. It's built with Node.js and interfaces with the Discord.js to give users full control of their bot. I contributed a reusable error handling function that validates if a user and bot are in the proper channel for an ambient stream. Implemented commands such as !loop and !replay command that allows the user to loop a stream playlist and favorites playlist and repeat a last played ambience. Application was deployed with Heroku.",
    url: 'http://ambience-bot.netlify.app',
    repo: 'https://github.com/ambience-bot',
    screenshot: '',
  },
];
