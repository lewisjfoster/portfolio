import { SKILL_TYPES, SKILLS, PROJECTS } from './constants';

const { FRONTEND, BACKEND, LINTING_FORMATTING, VERSION_CONTROL, TESTING, DATABASES, SDLC } = SKILL_TYPES;

const {
    BABEL,
    CONFLUENCE,
    CSS3,
    ESLINT,
    ENZYME,
    EXPRESS,
    GIT,
    GITHUB,
    GITLAB,
    HTML5,
    JAVA,
    JEST,
    JIRA,
    JS,
    METEOR,
    MONGODB,
    MSSQL,
    NODE,
    POSTCSS,
    PRETTIER,
    REACT,
    REACT_TESTING_LIBRARY,
    REDUX,
    STYLELINT,
    WEBPACK,
} = SKILLS;

const { BOUNCING_BALLS, CARD_FLIP_FORM, TWITTER_HEART } = PROJECTS;

export const home = {
    name: 'Lewis Foster',
    jobRole: 'Full-stack Developer',
};

export const aboutMe = {
    title: 'About Me',
    description: [
        { text: 'Hi, my name is Lewis Foster.' },
        { text: 'I am a full-stack developer currently working on great projects @ ', cta: 'ClearScore' },
        { text: 'For more information, or to request a CV, please reach out to me via LinkedIn.' },
    ],
};

export const skills = {
    title: 'Skills',
    [FRONTEND]: 'Front-end',
    [BACKEND]: 'Back-end',
    [LINTING_FORMATTING]: 'Linting & formatting',
    [VERSION_CONTROL]: 'Version control',
    [TESTING]: 'Testing',
    [DATABASES]: 'Databases',
    [SDLC]: 'SDLC',
    [HTML5]: 'HTML5',
    [CSS3]: 'CSS3',
    [POSTCSS]: 'PostCSS w/CSSNext',
    [JS]: 'JavaScript w/ES6 & ESNext',
    [REACT]: 'React',
    [REDUX]: 'Redux',
    [BABEL]: 'Babel',
    [WEBPACK]: 'webpack',
    [ESLINT]: 'ESLint',
    [STYLELINT]: 'stylelint',
    [PRETTIER]: 'Prettier',
    [GIT]: 'Git w/Hooks',
    [GITHUB]: 'GitHub w/Actions & Pages',
    [GITLAB]: 'GitLab',
    [NODE]: 'Node.js',
    [EXPRESS]: 'Express.js',
    [METEOR]: 'Meteor.js',
    [JAVA]: 'Java',
    [JEST]: 'Jest',
    [ENZYME]: 'Enzyme',
    [REACT_TESTING_LIBRARY]: 'React Testing Library',
    [MSSQL]: 'Microsoft SQL Server',
    [MONGODB]: 'mongoDB',
    [JIRA]: 'JIRA',
    [CONFLUENCE]: 'Confluence',
};

export const projects = {
    title: 'Projects',
    [BOUNCING_BALLS]: {
        projectTitle: 'Bouncing Balls',
        cta: 'Live Demo',
    },
    [CARD_FLIP_FORM]: {
        projectTitle: 'Credit Card Flip Form',
        cta: 'Live Demo',
    },
    [TWITTER_HEART]: {
        projectTitle: 'Twitter Heart',
        cta: 'Live Demo',
    },
};
