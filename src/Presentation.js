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
  Cite,
  Link,
  Image,
  S
} from 'spectacle';
import preloader from 'spectacle/lib/utils/preloader';

import theme from './theme';
import './Presentation.css';

const images = {
  reasonLogo: require('../public/images/reason-logo.png')
};

preloader(images);

const sections = {
  declarativeProgramming101: {
    id: 'declarative-programming-101',
    title: 'Declarative Programming 101'
  },
  priorArt: {
    id: 'prior-art',
    title: 'Prior Art'
  },
  applicationsAtGravic: {
    id: 'applications-at-gravic',
    title: 'Applications at Gravic'
  }
}

const createSectionTitleSlide = ({ id, title }) => (
  <Slide
    id={id}>
    <Heading
      size={2}>
      {title}
    </Heading>
  </Slide>
);

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
              margin='1em 0'>
              A Logical Progression Towards Declarative Programming
            </Heading>
            <Heading
              size={6}
              margin='2em 0'
              textSize='.75em'
              bold={false}>
              Marshall Bowers
            </Heading>
          </Slide>
          <Slide>
            <Heading
              size={2}>
              Overview
            </Heading>
            <List>
              {Object.keys(sections)
                .map(key => sections[key])
                .map(section => (
                  <Appear key={section.id}>
                    <ListItem>
                      <Link href={`#/${section.id}`}>
                        {section.title}
                      </Link>
                    </ListItem>
                  </Appear>
                ))}
            </List>
          </Slide>
          {createSectionTitleSlide(sections.declarativeProgramming101)}
          <Slide>
            <BlockQuote>
              <Quote>
                A programming paradigm that expresses the logic of a computation without describing its control flow.
              </Quote>
              <Cite>
                J.W. Lloyd, "Practical Advantages of Declarative Programming"
              </Cite>
            </BlockQuote>
          </Slide>
          <Slide>
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
          <Slide>
            <Heading
              size={6}>
              {`Let's Talk JavaScript`}
            </Heading>
            <List>

            </List>
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
          {createSectionTitleSlide(sections.priorArt)}
          <Slide>
            <Image
              src={images.reasonLogo.replace('/', '')}
              width={500} />
          </Slide>
          {createSectionTitleSlide(sections.applicationsAtGravic)}
        </Deck>
      </Spectacle>
    );
  }
}

export default Presentation;
