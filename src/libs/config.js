/* eslint-disable import/prefer-default-export */
import { FaGithub, FaLinkedin, FaChevronDown } from 'react-icons/fa';

import { GITHUB_HREF, LINKEDIN_HREF, SKILL_TYPES, SKILLS } from './constants';

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
    REDUX,
    STYLELINT,
    WEBPACK,
} = SKILLS;

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
        skillsOrder: [HTML5, CSS3, POSTCSS, JS, REACT, REDUX, BABEL, WEBPACK],
    },
    {
        id: BACKEND,
        skillsOrder: [NODE, EXPRESS, METEOR, JAVA],
    },
    {
        id: LINTING_FORMATTING,
        skillsOrder: [ESLINT, STYLELINT, PRETTIER],
    },
    {
        id: VERSION_CONTROL,
        skillsOrder: [GIT, GITHUB, GITLAB],
    },
    {
        id: TESTING,
        skillsOrder: [JEST, ENZYME],
    },
    {
        id: DATABASES,
        skillsOrder: [MSSQL, MONGODB],
    },
    {
        id: SDLC,
        skillsOrder: [JIRA, CONFLUENCE],
    },
];
