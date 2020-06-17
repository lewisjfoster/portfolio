/* eslint-disable import/prefer-default-export */
import { FaGithub, FaLinkedin, FaChevronDown } from 'react-icons/fa';

import {
    GITHUB_HREF,
    LINKEDIN_HREF,
    BOUNCING_BALLS_HREF,
    CARD_FLIP_FORM_HREF,
    TWITTER_HEART_HREF,
    SKILL_TYPES,
    SKILLS,
    PROJECTS,
} from './constants';

import BabelIcon from './assets/babel.svg';
import ConfluenceIcon from './assets/confluence.svg';
import CSS3Icon from './assets/css3.svg';
import ESLintIcon from './assets/eslint.svg';
import EnzymeIcon from './assets/enzyme.svg';
import ExpressIcon from './assets/express.svg';
import GitIcon from './assets/git.svg';
import GitHubIcon from './assets/github.svg';
import GitLabIcon from './assets/gitlab.svg';
import HTML5Icon from './assets/html5.svg';
import JavaIcon from './assets/java.svg';
import JestIcon from './assets/jest.svg';
import JIRAIcon from './assets/jira.svg';
import JSIcon from './assets/js.svg';
import MeteorIcon from './assets/meteor.svg';
import MongoDBIcon from './assets/mongodb.svg';
import MSSQLIcon from './assets/mssql.svg';
import NodeIcon from './assets/node.svg';
import PostCSSIcon from './assets/postcss.svg';
import PrettierIcon from './assets/prettier.svg';
import ReactIcon from './assets/react.svg';
import RtlIcon from './assets/react-testing-library.svg';
import ReduxIcon from './assets/redux.svg';
import StylelintIcon from './assets/stylelint.svg';
import WebpackIcon from './assets/webpack.svg';

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
    links: [
        {
            Icon: FaGithub,
            href: GITHUB_HREF,
        },
        {
            Icon: FaLinkedin,
            href: LINKEDIN_HREF,
        },
    ],
    chevron: {
        Icon: FaChevronDown,
    },
};

export const skills = [
    {
        id: FRONTEND,
        skillsOrder: [
            { id: HTML5, Icon: HTML5Icon },
            { id: CSS3, Icon: CSS3Icon },
            { id: POSTCSS, Icon: PostCSSIcon },
            { id: JS, Icon: JSIcon },
            { id: REACT, Icon: ReactIcon },
            { id: REDUX, Icon: ReduxIcon },
            { id: BABEL, Icon: BabelIcon },
            { id: WEBPACK, Icon: WebpackIcon },
        ],
    },
    {
        id: BACKEND,
        skillsOrder: [
            { id: NODE, Icon: NodeIcon },
            { id: EXPRESS, Icon: ExpressIcon },
            { id: METEOR, Icon: MeteorIcon },
            { id: JAVA, Icon: JavaIcon },
        ],
    },
    {
        id: LINTING_FORMATTING,
        skillsOrder: [
            { id: ESLINT, Icon: ESLintIcon },
            { id: STYLELINT, Icon: StylelintIcon },
            { id: PRETTIER, Icon: PrettierIcon },
        ],
    },
    {
        id: VERSION_CONTROL,
        skillsOrder: [
            { id: GIT, Icon: GitIcon },
            { id: GITHUB, Icon: GitHubIcon },
            { id: GITLAB, Icon: GitLabIcon },
        ],
    },
    {
        id: TESTING,
        skillsOrder: [
            { id: JEST, Icon: JestIcon },
            { id: ENZYME, Icon: EnzymeIcon },
            { id: REACT_TESTING_LIBRARY, Icon: RtlIcon },
        ],
    },
    {
        id: DATABASES,
        skillsOrder: [
            { id: MSSQL, Icon: MSSQLIcon },
            { id: MONGODB, Icon: MongoDBIcon },
        ],
    },
    {
        id: SDLC,
        skillsOrder: [
            { id: JIRA, Icon: JIRAIcon },
            { id: CONFLUENCE, Icon: ConfluenceIcon },
        ],
    },
];

export const projects = [
    { id: BOUNCING_BALLS, ctaHref: BOUNCING_BALLS_HREF },
    { id: CARD_FLIP_FORM, ctaHref: CARD_FLIP_FORM_HREF },
    { id: TWITTER_HEART, ctaHref: TWITTER_HEART_HREF },
];
