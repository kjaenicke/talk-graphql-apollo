// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  CodePane,
  Code,
  Table,
  TableHeaderItem,
  TableItem,
  TableRow
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quartenary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        {/* Landing */}
        <Slide bgColor="primary">
          <Image src="/graphql_logo.png" height={300} display="flex" />
          <Image src="/apollo-logo.png" height={300} />
        </Slide>

        {/* Intro */}
        <Slide bgColor="secondary">
          <Heading size={1}>
            Introduction
          </Heading>
        </Slide>

        {/* Summary */}
        <Slide transition={['zoom']} bgColor="tertiary">
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ marginRight: '20px' }}>
              <Heading style={{ textAlign: 'left' }} size={4} textColor="primary">
                GraphQL
              </Heading>
              <List textColor="secondary">
                <ListItem>History</ListItem>
                <ListItem>What is it?</ListItem>
                <ListItem>REST v. GraphQL</ListItem>
                <ListItem>Implementations</ListItem>
              </List>
            </div>
            <div>
              <Heading style={{ textAlign: 'left' }} size={4} textColor="primary">
                Apollo
              </Heading>
              <List textColor="secondary">
                <ListItem>Overview</ListItem>
                <ListItem>Let's see the code!</ListItem>
              </List>
            </div>
          </div>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" notes="Originally created to help with mobile app performance -- Lee Byron blog">
          <Heading size={4} textColor="secondary" caps>
            History
          </Heading>
          <List>
            <ListItem>Created by Facebook in 2012</ListItem>
            <ListItem>Open sourced in 2015</ListItem>
          </List>
        </Slide>

        {/* What is it? */}
        <Slide transition={['fade']} bgColor="secondary" notes="GraphQL isn't tied to any specific database or storage engine and is instead backed by your existing code and data">
          <BlockQuote textColor="primary">
            <Quote>
              GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data.
            </Quote>
            <Cite>
              https://graphql.org
            </Cite>
          </BlockQuote>
        </Slide>

        {/* Describe */}
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={4} textColor="primary" caps>
            Describe your data
          </Heading>
          <CodePane style={{ fontSize: '2rem' }} lang="graphql"
            source={`
            type Project {
              name: String
              tagline: String
              contributors: [User]
            }`}
          />
        </Slide>

        {/* Ask */}
        <Slide transition={['zoom']} bgColor="tertiary">
          <Heading size={4} textColor="primary" caps>
            Ask for what you want
          </Heading>
          <CodePane style={{ fontSize: '2rem' }} lang="graphql"
            source={`
            {
              project(name: "GraphQL") {
                tagline
              }
            }`}
          />
        </Slide>

        {/* Get results */}
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={4} textColor="primary" caps>
            Get predictable results
          </Heading>
          <CodePane style={{ fontSize: '1.5rem' }} lang="graphql"
            source={`
            {
              "project": {
                "tagline": "A query language for APIs"
              }
            }`}
          />
        </Slide>

        {/* Star Wars API Demo */}
        <Slide transition={['zoom']} bgColor="primary" notes="Persons => Homeworld">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://graphql.org/swapi-graphql/">See it in action!
          </a>
        </Slide>

        {/* REST v. GraphQL */}
        <Slide transition={['fade']} bgColor="tertiary" notes="HTTP methods vs query and mutation">
          <Heading size={3} textColor="primary">
            REST vs. GRAPHQL
          </Heading>
          <Table fontSize=".5rem" textColor="secondary">
            <TableRow>
              <TableHeaderItem></TableHeaderItem>
              <TableHeaderItem>
                <Text textColor="primary" style={{ textDecoration: 'underline' }} bold>REST</Text>
              </TableHeaderItem>
              <TableHeaderItem>
                <Text textColor="primary" style={{ textDecoration: 'underline' }} bold>GraphQL</Text>
              </TableHeaderItem>
            </TableRow>
            <TableRow>
              <TableItem>
                <Text fontSize={6} textColor="primary" bold>Resource Based</Text>
              </TableItem>
              <TableItem>Yes</TableItem>
              <TableItem>Yes</TableItem>
            </TableRow>
            <TableRow>
              <TableItem>
                <Text fontSize={6} textColor="primary" bold>Works via HTTP</Text>
              </TableItem>
              <TableItem>Yes</TableItem>
              <TableItem>Yes</TableItem>
            </TableRow>
            <TableRow>
              <TableItem>
                <Text fontSize={6} textColor="primary" bold>JSON</Text>
              </TableItem>
              <TableItem>Yes</TableItem>
              <TableItem>Yes</TableItem>
            </TableRow>
            <TableRow>
              <TableItem>
                <Text fontSize={6} textColor="primary" bold>Response Shape</Text>
              </TableItem>
              <TableItem>Server</TableItem>
              <TableItem>Client</TableItem>
            </TableRow>
            <TableRow>
              <Text fontSize={6} textColor="primary" bold># of Endpoints</Text>
              <TableItem>?</TableItem>
              <TableItem>1</TableItem>
            </TableRow>
          </Table>
        </Slide>

        {/* Implementations */}
        <Slide transition={['fade']} bgColor="tertiary" notes="">
          <Heading size={3} textColor="primary">
            Implementations
          </Heading>
          <List>
            <ListItem>
              <a rel="noopener noreferrer" target="_blank" href="https://facebook.github.io/relay/">
                Relay
              </a> - Facebook
            </ListItem>
            <ListItem>
              <a rel="noopener noreferrer" target="_blank" href="https://www.apollographql.com/">
                Apollo
              </a> - Meteor Team
            </ListItem>
            <ListItem>
              <a rel="noopener noreferrer" target="_blank" href="http://netflix.github.io/falcor/">
                Falcor
              </a> - Netflix (not GraphQL but attempts to solve similar problems)
            </ListItem>
          </List>
        </Slide>


        {/*
          END PART 1
        */}

        {/* Apollo Intro */}
        <Slide transition={['fade']} bgColor="primary" notes="">
          <Heading size={2} textColor="secondary">
            Apollo
          </Heading>
          <Text textColor="tertiary">Write queries, not code</Text>
        </Slide>

        {/* Core Parts */}
        <Slide transition={['fade']} bgColor="tertiary" notes="Client allows graphql queries, engine does caching logging, server is your api">
          <Heading size={2} textColor="primary">
            Core Parts of Apollo
          </Heading>
          <List textColor="primary">
            <ListItem>
              Client
            </ListItem>
            <ListItem>
              Engine
            </ListItem>
            <ListItem>
              Server
            </ListItem>
          </List>
        </Slide>

        {/* Let's see the code! */}
        <Slide transition={['fade']} bgColor="primary" notes="">
          <Heading size={2} textColor="secondary">
            Let's see the code!
          </Heading>
        </Slide>

        {/* create-react-app */}
        <Slide transition={['fade']} bgColor="primary" notes="">
          <Heading size={4} textColor="secondary">
            App Setup
          </Heading>
          <Code>create-react-app sw-apollo-demo</Code>
          <Code>cd sw-apollo-demo</Code>
          <Code>yarn start</Code>
        </Slide>

        {/* install apollo client */}
        <Slide transition={['fade']} bgColor="primary" notes="">
          <Heading size={4} textColor="secondary">
            Apollo Client
          </Heading>
          <Code>yarn add apollo-boost react-apollo graphql --save</Code>
        </Slide>

        {/* create instance of apollo client */}
        <Slide transition={['fade']} bgColor="primary" notes="">
          <Heading size={4} textColor="secondary">
            Create Client
          </Heading>
          <CodePane lang="js" source={
            `
            import { ApolloClient } from 'apollo-client';
            import { HttpLink } from 'apollo-link-http';
            import { InMemoryCache } from 'apollo-cache-inmemory';
    
            export const client = new ApolloClient({
              link: new HttpLink({
                  uri: '<GRAPHQL_ENDPOINT>'
              }),
              cache: new InMemoryCache()
          });
            `
          } />
        </Slide>

        {/* create instance of apollo client */}
        <Slide transition={['fade']} bgColor="primary" notes="">
          <Heading size={4} textColor="secondary">
            Create Provider
          </Heading>
          <CodePane lang="js" source={
            `
            import { ApolloProvider } from 'react-apollo';
            import App from './App';
            import { client } from './Client';

            ReactDOM.render(
                <ApolloProvider client={client}>
                    <App />
                </ApolloProvider>,
                document.getElementById('root')
            )
            `
          } />
        </Slide>

        {/* query our api */}
        <Slide transition={['fade']} bgColor="primary" notes="">
          <Heading size={4} textColor="secondary">
            Query our API
          </Heading>
          <CodePane lang="js" source={
            `
            import React from 'react';
            import { graphql } from 'react-apollo';
            import gql from 'graphql-tag';

            // here we create a query opearation
            const MY_QUERY = gql\`query {
              allPeople(first: 15){
                people {
                  id
                  name
                  homeworld {
                    name
                  }
                }
              }
            }\`;
            `
          } />
        </Slide>


        {/* display our results */}
        <Slide transition={['fade']} bgColor="primary" notes="">
          <Heading size={4} textColor="secondary">
            Render our Results
          </Heading>
          <CodePane lang="jsx" source={
            `
            const App = graphql(MY_QUERY)(props =>
              props.data.loading ? (
                'Loading'
              ) : (
                  <div>
                    <ul>{
                      props.data.allPeople.people.map(person => (
                        <li key={person.id}>
                          {person.name} from {person.homeworld.name}
                        </li>
                      ))
                    }
                    </ul>
                  </div>
                )
            )
            `
          } />
        </Slide>

        {/* display our results */}
        <Slide transition={['fade']} bgColor="secondary" notes="">
          <Heading size={1} textColor="primary">
            About this demo...
          </Heading>
        </Slide>

        <Slide bgColor="tertiary" transition={['none']}>
          <img src="https://media.giphy.com/media/uPnKU86sFa2fm/giphy.gif" alt="keanu reeves whoa" />
          <Heading textColor="primary" size={5}>
            React on React using Spectacle
          </Heading>
        </Slide>

        {/* Resources */}
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Resources
          </Heading>
          <List>
            <ListItem>
              <a rel="noopener noreferrer" href="https://graphql.org/" target="_blank">
                Offical GraphQL Site
              </a>
            </ListItem>
            <ListItem>
              <a rel="noopener noreferrer" href="https://dev-blog.apollodata.com/graphql-vs-rest-5d425123e34b" target="_blank">
                Rest v GraphQL
              </a>
            </ListItem>
            <ListItem>
              <a rel="noopener noreferrer" href="https://code.facebook.com/posts/1691455094417024/graphql-a-data-query-language/" target="_blank">
                Lee Byron on GraphQL
              </a>
            </ListItem>
            <ListItem>
              <a rel="noopener noreferrer" href="http://facebook.github.io/graphql/October2016/" target="_blank">
                Spec
              </a>
            </ListItem>
            {/* https://github.com/graphql/swapi-graphql */}
            <ListItem>
              <a rel="noopener noreferrer" href="https://github.com/graphql/swapi-graphql" target="_blank">
                Star Wars GraphQL API (Github)
              </a>
            </ListItem>
            <ListItem>
              <a rel="noopener noreferrer" href="https://github.com/FormidableLabs/spectacle" target="_blank">
                Spectacle
              </a>
            </ListItem>
            <ListItem>
              <a rel="noopener noreferrer" href="https://github.com/kjaenicke/talk-graphql-apollo" target="_blank">
                The slides
              </a>
            </ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
