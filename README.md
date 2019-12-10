# React Interact

React Interact is a tutorial website to ease the burdon of learning React and other web technologies.

## Using the site

The site is broken down into categories such as React, HTML, CSS, JS, and these categories are broken in modules. The user is free to follow the modules at their own will or follow the topics in the order presented.

## Contributing

### Steps:
#### Download the repo: 

`git clone https://github.com/CSC-464-Regular-Devs/React-Interact.git`

`cd React-Interact`

#### install dependencies

`npm install`

`npm install -g gatsby-cli`

#### start development server

`gatsby develop`

Gatsby both builds the site and starts the development server. If you do not have gatsby-cli installed, you can acheive the same by running `npm run-script develop`

After running, the site should be displayed at http://localhost:8000/.

### Contributing Content

Content can be contributed in the form of [MDX](https://www.gatsbyjs.org/docs/mdx/)

All MDX content is consolidated in React-Interact/src/MDX

Any files with the extension .mdx in this folder will be interpreted as a page on the site.

An example page would be: React-Interact/src/MDX/tutorials/helloworld.mdx

```markdown
---
title: Hello World
date: 2019-12-06
theme: react
---

## I have a lot of great content to give

Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.


In the MDX folder, mdx files page locations on the site are directly tied to their path in the folder. 
So this example would be located at `http://localhost:8000/tutorials/helloworld`

At the very top of this example there is:
---
title: Hello World
date: 2019-12-06
theme: react
---

This is called frontmatter for the mdx file. 
The title will be the page title.
The date will be placed right below the title and the
theme is used to determine the color scheme for the page. 
*There should only be one definition for the frontmatter.*
```

