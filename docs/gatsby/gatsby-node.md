# Gatsby Node

The gatsby-node file allows us to call Gatsby's API to manipulate
site data and use that data to create pages programmatically.

### Currently In Use

##### onCreateNode

Gets called when a new node is created. We currently use it to create
a new node fields by calling [createNodeField](https://www.gatsbyjs.org/docs/actions/#createNodeField). Currently, we create a field called slug
which is essentially the file name. We have it for easy access to the 
file title so the file can be later referenced when used to create pages. <br>

[onCreateNode Docs](https://www.gatsbyjs.org/docs/node-apis/#onCreateNode)

##### createPages

Used to create pages so we don't have to manual create each page. Helps us
not duplicate code. Within the function, we query for the slug of **all** 
MDX files. Then for each node(MDX file) we call [createPage](https://www.gatsbyjs.org/docs/actions/#createPage). We give it a path(use the slug here), component(what to use to create the page), and context(props for the page component).
<br>

[createPages Docs](https://www.gatsbyjs.org/docs/node-apis/#createPages)

### Learn more about gatsby-node
 - [Official Gatsby Node Docs](https://www.gatsbyjs.org/docs/node-apis/)