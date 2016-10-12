import React, { Component } from 'react';
import CodeSlide from 'spectacle-code-slide';
import {
  Spectacle,
  Deck,
  Slide,
  Layout,
  Fit,
  Fill,
  Appear,
  Heading,
  List,
  ListItem,
  BlockQuote,
  Quote,
  Cite
} from 'spectacle';

import theme from './theme';
import './Presentation.css';

class Presentation extends Component {
  render() {
    return (
      <Spectacle
        theme={theme}>
        <Deck
          progress='bar'>
          <Slide
            id='intro'>
            <Heading
              size={1}>
              Declaratively Composable
            </Heading>
            <Heading
              size={2}
              fit
              margin='50px 0'>
              A Natural Progression Towards Declarative Programming
            </Heading>
          </Slide>
          <Slide
            id='what-is-declarative'>
            <Heading
              size={2}>
              What is Declarative Programming?
            </Heading>
          </Slide>
          <Slide>
            <BlockQuote>
              <Quote>
                A programming paradigm that expresses the logic of a computation without describing its control flow.
              </Quote>
              <Cite>
                Lloyd, J.W., Practical Advantages of Declarative Programming
              </Cite>
            </BlockQuote>
          </Slide>
          <Slide
            id='imperative-vs-declarative'>
            <Layout>
              <Fill>
                <Heading
                  size={6}>
                  Imperative
                </Heading>
                <List>
                  <Appear>
                    <ListItem>
                      C / C++
                    </ListItem>
                  </Appear>
                  <Appear>
                    <ListItem>
                      Java
                    </ListItem>
                  </Appear>
                  <Appear>
                    <ListItem>
                      C# / VB.NET
                    </ListItem>
                  </Appear>
                </List>
              </Fill>
              <Fill>
                <Heading
                  size={6}>
                  Declarative
                </Heading>
                <List>
                  <Appear>
                    <ListItem>
                      Lisp
                    </ListItem>
                  </Appear>
                  <Appear>
                    <ListItem>
                      Haskell
                    </ListItem>
                  </Appear>
                  <Appear>
                    <ListItem>
                      OCaml
                    </ListItem>
                  </Appear>
                </List>
              </Fill>
            </Layout>
          </Slide>
          <CodeSlide
            lang='ocaml'
            code={require('raw!./examples/ocaml/fibonacci.ml')}
            ranges={[
              {
                loc: [0, 3]
              },
              {
                loc: [3, 4]
              }
            ]}
            bgColor='inherit'
            transition={[]} />
        </Deck>
      </Spectacle>
    );
  }
}

export default Presentation;
