---
title: Technical-Handoff
author: React-Interact  -- \emph{last updated on \today}
toc: true
geometry: margin=2cm
output: technical_handoff.pdf
colorlinks: mediumblue
linkcolor: mediumblue
---

## Project Overview

### Purpose of the site

The purpose of React Interact is to provide a hands on approach to learning React among other topics.

### Goals for the site

To make learning easy and fluid, and to provide a platform for the expression of ideas.

### Description of the site

We use Gatsby as our CMS - (Content Management System) which is available as a package for NodeJS. It is entierly written in JavaScript. How Gatsby benefits us is:

- The developer has complete control of the content management process

- It can be setup to be easy and none technical when contributing content.

## User's Perspective

### Site Structure

The user should be able to navigate to any part of the site starting from the Home Page. The site is heavily oriented for tutorials so there is a level of the site dedicated for the display of tutorials.

![Site Diagram](site_map.PNG)

### Content Description

### How to use

The user should be presented with the home page at first contact, this should bring them to the tutorials page. From the tutorials page they can find the topic of their interest, and that topic should be able to have its own sub topics that the user can explore.

## Developer's (Non-team related) Perspective

### Getting up and running:

If you are comfortable with docker, there is a Dockerfile supplied with instructions on how to build and run the image for the ideal work environment, otherwise, before you can begin, the following dependencies must be installed onto your machine:

- [NodeJS](https://nodejs.org/en/about/) Javascript interpreter.
- [NPM](https://www.npmjs.com/) Used to manage project dependencies.

#### Go through existing code

#### Get familiar with the technologies used.

First, you should be adept with HTML, CSS, and Javascript, and some modern web development at a minimum.

Here is a list of technologies used for the project as a whole:

\newpage

| Technology                                           | Description                                 |
| ---------------------------------------------------- | ------------------------------------------- |
| [ Gatsby ](https://www.gatsbyjs.org/)                | Content management system.                  |
| [ GraphQL ](https://graphql.org/)                    | How site data is queried.                   |
| [ GitHub Pages ](https://pages.github.com/)          | Hosts the site.                             |
| [ NodeJS ](https://nodejs.org/en/about/)             | Javascript interpreter.                     |
| [ NPM ](https://www.npmjs.com/)                      | Used to manage NodeJS dependencies.         |
| [ MDX ](https://mdxjs.com/)                          | Used to make content.                       |
| [ Travis CI ](https://travis-ci.org/getting_started) | Continuous Integration                      |
| [ ESLint ](https://eslint.org/)                      | Used to enforce good programming practices. |
| [ Prettier ](https://prettier.io/)                   | Used to enforce code formatting.            |

In order to contribute content only an understand of MDX and site structure would be required.

#### Understand the coding standards

Coding standards are defined in:

- `.eslintrc`

It is recommended to install [ESLint](https://eslint.org/) for your editor of choice, as well as prettier so that formatting happens automatically without you having to keep track of it.

Formatting is apart of our tests, so failing to conform to what is defined in `.eslintrc` will result in a failed CI check.

#### Clone Repository

- git clone https://github.com/CSC-464-Regular-Devs/React-Interact.git

- SSH if you have keys setup: git@github.com:CSC-464-Regular-Devs/React-Interact.git

#### Install dependencies

- Get NPM / NodeJS https://nodejs.org/en/download/

- run: npm i , in root of project directory

#### Start the site

From inside the project root folder run the following command:

- npm run-script develop

Now you can open a browser and navigate to: http://localhost:8000/

### Contribute to an existing topic

#### Understand the project/file structure

It's a typical node project structure.

At the root of the project some important files to list are:

| File                                                                                 | Description                                         |
| ------------------------------------------------------------------------------------ | --------------------------------------------------- |
| [ package.json ](https://docs.npmjs.com/files/package.json)                          | Defines the npm packages our project uses.          |
| [ package-lock.json ](https://docs.npmjs.com/configuring-npm/package-lock-json.html) | Locks the versions.                                 |
| [ gatsby-config.js ](https://www.gatsbyjs.org/docs/api-files-gatsby-config/)         | Primary configuration file used by Gatsby, our CMS. |
| [ gatsby-node.js ](https://www.gatsbyjs.org/docs/api-files-gatsby-node/)             | Where site pages are created.                       |

\newpage

Other important areas of the project:

- The majority of the code is located in `src`.
- Web components are located in `src/components`.
- The template for mdx associated pages is located at `src/templates/mdx_tempalte.js`. Every mdx page is wrapped with this component upon generation.
- [MDX](https://mdxjs.com/) pages are located at `src/MDX`
- Pages can be created in the form of a React component in `src/pages` and their location on the site is relative to their location in the pages folder, `pages/` itself reflecting the root of the site.

#### Navigate to the topic of interest

The user should use the page http://localhost:8000/tutorials as their starting point. This page should list all of the topics. From here the user should find the topic of their interest and then be able to delve deeper into that topic.

#### Create a new file or add to existing file

Content can be contributed in the form of [MDX](https://www.gatsbyjs.org/docs/mdx/).

All MDX content is consolidated in `src/MDX`.

Any files with the extension `.mdx` in this folder will be interpreted as a page on the site.

An example page would be: `src/MDX/tutorials/helloworld.mdx`.

```markdown
---
title: Hello World
date: 2019-12-06
theme: react
next: #
prev: #
---

## I have a lot of great content to give

Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

In the MDX folder, mdx files page locations on the site are directly tied to their
path in the folder.So this example would be located
at `http://localhost:8000/tutorials/helloworld`

At the very top of this example there is frontmatter for the mdx file.
Frontmatter is metadata you put in the file that is used in page generation.
The title will be the page title.
The date will be placed right below the title and the
theme is used to determine the color scheme for the page.
next and previous are used to generate navigation links automatically.
Giving them a hash means have no nav links generated.
_There should only be one definition for the frontmatter and all fields are unique_
```

Once our markdown example file is created, run "gatsby develop" or "npm run-script develop"
The page will now be located at [http://localhost:8000/tutorials/helloworld/](http://localhost:8000/tutorials/helloworld/)

Note: use of the `<a>` tag is not allowable. Since our project is on github pages a url prefix is required that is defined in gatsby-config. Either use a markdown link when writting for mdx, or use the gatsby `<Link>` tag for when writing content in React code.

When your content is ready a pull request can be made. Once reviewed and accepted it will go into develop to be merge in with changed made by additional users.

#### Update links

Currently, links are handled manually. If a page is moved on the site, all links pointing to that page must be updated.

## Add a new Topic

Currently the favored form of content is MDX, so to start your new topic, you would go to `src/MDX`. You'll notice that there is a `tutorials` and a `projects` sub directories, and its prefered to use these directories if you are making educational content, but the topic doesn't have to land inside the `tutorials` folder. You can create a new directory for your topic, say **Blog1** is your topic, you could create a folder at `src/MDX/Blog1`. From here you can can create a landing page for that topic,

`src/MDX/Blog1/index.mdx`

```markdown
---
title: Blog1
date: 2020-01-01
theme: default
next: #
prev: #
---

## Landing page for Blog1!

Here you can link to your sub topics.
```

Now, when you build and run the site, the page: http://localhost:8000/Blog1/ will show you what is located at `src/MDX/Blog1/index.mdx`

You would create a banner for it, and add its site reference to `src/pages/tutorials.js`

### Update list of topics

Large scale changes to the site can be done in:

- `src/templates/mdx_template.js` containing component for MDX files. Uses `Layout.js`
- `src/components/layout.js` component that every site page is wrapped in. Site-wide changes can be made here.
- `src/components/layout.css` used by `layout.js`, site-wide styles are defined here.

## Developers (Team-related) Perspective

#### Become familiar with Gatsby and GraphQL

[Gatsby](https://www.gatsbyjs.org/) is our content management system. Go through the documentation. Our site will reflect much of the documentation so it is worth your time.

We use [GraphQL](https://graphql.org/), but we don't need to implement a GraphQL server, we are just using the query style of GraphQL. The [Gatsby documentation](https://www.gatsbyjs.org/docs/glossary/graphql/) goes through it well.

#### Understand the content generation process

The data can have multiple forms, it starts as a plugin for Gatsby. Once the plugin has been registered in `gatsby-config.js`, along with registering the data locations as well, the Gatsby plugins parses the data into nodes. This process can be intercepted in `gatsby-node.js`. In `gatsby-node.js` several functions are exported such as:

- `createPages` Is what actually makes site pages.

- `onCreateNode` Is called per data node creation. (This gives us control over the data creation process).

### Perform Quality Assurance

We use Travis CI to build, run, and test our project upon push to any branch.

Travis CI requires a yml file for instructions on what to do when a project is pushed to a branch on GitHub.

React-Interact also has an account with Travis CI which is publicly viewable.

Things that Travis CI checks for:

- Building correctly

- Plagiarism

- Spelling

In order to test for these it runs our test scripts,

Additional things that Travis CI does:

Upon pushing from branch develop to branch master, Travis CI will perform its tests like usual, and then it will additionally deploy the project to our gh-pages branch, which is what is displayed on our GitHub Pages website.

#### Ensure spelling correctness

Currently it is up to the content provider and reviewer to ensure spelling correctness.

#### Ensure the quality of the content is: unique

We are using grammerly's free plagarism checker to scan changed files for plagarism per push to GitHub.

See: [stewartmcgown/grammarly-api](https://github.com/stewartmcgown/grammarly-api)

### Common Mistakes (FAQ)

- Use MD style links in mdx files instead of anchor tags “<a>”. [See](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#links).

- Keep mdx files mostly MD, using html elements in them should always be kept to a minimum. You can use react components in mdx (the point of mdx) but this isn't to be abused.

- Several of our Gatsby packages use the npm package sharp, and sometimes issues arise with it. When this occures it can sometimes be fixed by removing the sharp plugin from the node_modules folder and trying to install again. Ex: `rm -rf node_modules/sharp`.

### Future Expansions

- Improve site look and feel.

- Expand on range of topics discussed. This site can be a potential platform to discuss ideas.

- Add spell checker to CI.

- Create scheme to map pages to entities that can be moved without manually changes links.
