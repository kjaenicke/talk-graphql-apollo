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
        <Slide bgColor="primary" bgColor="secondary">
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
                <ListItem>What is it?</ListItem>
                <ListItem>History</ListItem>
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
                <ListItem>Demo</ListItem>
              </List>
            </div>
          </div>
        </Slide>


        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Typography
          </Heading>
          <Heading size={1} textColor="secondary">
            Heading 1
          </Heading>
          <Heading size={2} textColor="secondary">
            Heading 2
          </Heading>
          <Heading size={3} textColor="secondary">
            Heading 3
          </Heading>
          <Heading size={4} textColor="secondary">
            Heading 4
          </Heading>
          <Heading size={5} textColor="secondary">
            Heading 5
          </Heading>
          <Text size={6} textColor="secondary">
            Standard text
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Standard List
          </Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
