/* eslint-disable quotes */
/* eslint-disable max-len */

import ambienceBot from '../assets/ambienceBot.png';
import aspirIO from '../assets/aspirIO.png';
import taurusTrading from '../assets/taurusTrading.png';

export const projects = [
  {
    name: 'Aspire.io',
    tech: ['React.js,   ', 'Node.js,    ', 'PostgreSQL   '],
    description:
      'A job listing dashboard that allows you to see job listings at tech companies and track the job search process with an interactive user interface, all in one place!',
    url: 'https://aspir-io.netlify.app/',
    repo: 'https://github.com/ACL-JobsTeam',
    screenshot: aspirIO,
  },
  {
    name: 'Taurus Trading',
    tech: ['React.js,   ', 'Node.js,    ', 'PostgreSQL    '],
    description:
      'A full stack application that searches stocks and retrieves relevant price and social media sentiment which a user can track the performance of a mock portfolio over time.',
    url: 'https://taurus-trading.netlify.app',
    repo: 'https://github.com/taurus-trading',
    screenshot: taurusTrading,
  },
  {
    name: 'Ambience Bot',
    tech: ['Node.js,    ', 'Discord.js,   '],
    description:
      'A discord bot that live-streams ambient music from the Youtube API through the use of simple commands and search terms that give the user full control over an ambient stream.',
    url: 'http://ambience-bot.netlify.app',
    repo: 'https://github.com/ambience-bot',
    screenshot: ambienceBot,
  },
];
