import React, { Component } from 'react';
import CodeSlide from 'spectacle-code-slide';
import {
  Spectacle,
  Deck,
  Slide,
  Layout,
  Fill,
  Appear,
  Heading,
  List,
  ListItem,
  Text,
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
  reactLogo: require('../public/images/react-logo.svg'),
  reasonLogo: require('../public/images/reason-logo.png'),
  toddler: require('../public/images/toddler.jpg')
};

preloader(images);

const title = 'Be <Declarative />';
const subtitle = 'A Natural Progression Towards Declarative Programming';

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
  },
  questions: {
    id: 'questions',
    title: 'Questions?'
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
              size={1}
              fit>
              {title}
            </Heading>
            <Heading
              size={2}
              fit
              margin='1em 0'>
              {subtitle}
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
                      Prolog
                    </ListItem>
                  </Appear>
                  <Appear>
                    <ListItem>
                      SQL
                    </ListItem>
                  </Appear>
                  <Appear>
                    <ListItem>
                      HTML
                    </ListItem>
                  </Appear>
                </List>
              </Fill>
            </Layout>
          </Slide>
          <Slide>
            <Heading
              size={6}>
              Functional
            </Heading>
            <Layout>
              <Fill>
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
                </List>
              </Fill>
              <Fill>
                <List>
                  <Appear>
                    <ListItem>
                      OCaml
                    </ListItem>
                  </Appear>
                  <Appear>
                    <ListItem>
                      F#
                    </ListItem>
                  </Appear>
                </List>
              </Fill>
            </Layout>
          </Slide>
          <Slide>
            <Image
              src={images.toddler.replace('/', '')}
              width={500} />
            <Text>
              Your imperative language is a toddler
            </Text>
          </Slide>
          <Slide>
            <Text>
              Imperative = <S type='italic'>HOW</S>
            </Text>
            <br />
            <Text>
              Declarative = <S type='italic'>WHAT</S>
            </Text>
          </Slide>
          <CodeSlide
            lang='csharp'
            code={require('raw!./examples/csharp/sum.cs')}
            ranges={[
              {
                loc: [0, 7]
              },
              {
                loc: [1, 2]
              },
              {
                loc: [3, 4]
              },
              {
                loc: [8, 9]
              }
            ]}
            bgColor='inherit'
            transition={[]} />
          <CodeSlide
            lang='typescript'
            code={require('raw!./examples/typescript/sum.ts')}
            ranges={[
              {
                loc: [0, 2]
              },
              {
                loc: [1, 2]
              },
              {
                loc: [3, 4]
              }
            ]}
            bgColor='inherit'
            transition={[]} />
          <CodeSlide
            lang='ocaml'
            code={require('raw!./examples/ocaml/sum.ml')}
            ranges={[
              {
                loc: [0, 2]
              },
              {
                loc: [1, 2]
              },
              {
                loc: [3, 4]
              },
              {
                loc: [0, 2],
                note: 'val sum : int list -> int = <fun>'
              }
            ]}
            bgColor='inherit'
            transition={[]} />
          <CodeSlide
            lang='csharp'
            code={require('raw!./examples/csharp/sum-even.cs')}
            ranges={[
              {
                loc: [0, 9]
              },
              {
                loc: [3, 6]
              },
              {
                loc: [10, 11]
              }
            ]}
            bgColor='inherit'
            transition={[]} />
          <CodeSlide
            lang='typescript'
            code={require('raw!./examples/typescript/sum-even.ts')}
            ranges={[
              {
                loc: [0, 4]
              },
              {
                loc: [2, 3]
              },
              {
                loc: [3, 4]
              },
              {
                loc: [5, 6]
              }
            ]}
            bgColor='inherit'
            transition={[]} />
          <CodeSlide
            lang='ocaml'
            code={require('raw!./examples/ocaml/sum-even.ml')}
            ranges={[
              {
                loc: [0, 4]
              },
              {
                loc: [2, 3]
              },
              {
                loc: [5, 6]
              },
              {
                loc: [0, 4],
                note: 'val sum_even : int list -> int = <fun>'
              }
            ]}
            bgColor='inherit'
            transition={[]} />
          <CodeSlide
            lang='ocaml'
            code={require('raw!./examples/ocaml/sum-even-pipe.ml')}
            ranges={[
              {
                loc: [0, 4]
              },
              {
                loc: [2, 3]
              },
              {
                loc: [3, 4]
              },
              {
                loc: [5, 6]
              },
              {
                loc: [0, 4],
                note: 'val sum_even : int list -> int = <fun>'
              }
            ]}
            bgColor='inherit'
            transition={[]} />
          <Slide>
            <Text>
              Functional programming is a step towards declarative programming
            </Text>
          </Slide>
          <Slide>
            <Heading
              fit
              size={6}>
              Benefits of Functional / Declarative Programming
            </Heading>
            <List>
              <Appear>
                <ListItem>
                  Less program state
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Fewer side effects
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Easier to reason about
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Faster to iterate
                </ListItem>
              </Appear>
            </List>
          </Slide>
          {createSectionTitleSlide(sections.priorArt)}
          <Slide>
            <Image
              src={images.reactLogo.replace('/', '')} />
          </Slide>
          <Slide>
            <Heading
              size={6}>
              React
            </Heading>
            <List>
              <Appear>
                <ListItem>
                  Declarative UI
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Components!
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Emphasis on composition
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Created by Facebook
                </ListItem>
              </Appear>
            </List>
          </Slide>
          <CodeSlide
            lang='jsx'
            code={require('raw!./examples/js/react.js.example')}
            ranges={[
              {
                loc: [0, 5]
              },
              {
                loc: [6, 9]
              }
            ]}
            bgColor='inherit'
            transition={[]} />
          <Slide>
            <Image
              src={images.reasonLogo.replace('/', '')}
              width={500} />
          </Slide>
          <Slide>
            <Heading
              size={6}>
              Reason
            </Heading>
            <List>
              <Appear>
                <ListItem>
                  Interface to OCaml
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Similar style to JavaScript
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Integrates seamlessly with OCaml
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Created by Facebook
                </ListItem>
              </Appear>
            </List>
          </Slide>
          <Slide>
            <Heading
              size={6}>
              BuckleScript
            </Heading>
            <List>
              <Appear>
                <ListItem>
                  OCaml backend that emits JavaScript
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Integrates with OCaml & JavaScript code
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Created by Bloomberg
                </ListItem>
              </Appear>
            </List>
          </Slide>
          {createSectionTitleSlide(sections.applicationsAtGravic)}
          <Slide>
            <Heading
              size={6}>
              React
            </Heading>
            <br />
            <Text
              style={{
                lineHeight: '1.5em'
              }}>
              Already in use by RPG for Remark Test Grading Cloud Edition 2.0
            </Text>
          </Slide>
          <Slide>
            <Heading
              size={6}>
              LINQ
            </Heading>
            <List>
              <Appear>
                <ListItem>
                  .NET Language-Integrated Query
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Declarative Syntax
                </ListItem>
              </Appear>
            </List>
          </Slide>
          <CodeSlide
            lang='csharp'
            code={require('raw!./examples/csharp/linq.cs')}
            ranges={[
              {
                loc: [0, 4]
              }
            ]}
            bgColor='inherit'
            transition={[]} />
          <Slide>
            <Heading
              size={6}>
              F#
            </Heading>
            <List>
              <Appear>
                <ListItem>
                  General purpose programming language
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Strong, static typing
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Similar to OCaml
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Runs on the .NET platform
                </ListItem>
              </Appear>
            </List>
          </Slide>
          <Slide>
            <Heading
              size={6}>
              OCaml / Reason
            </Heading>
            <List>
              <Appear>
                <ListItem>
                  Powerful type system (strong, static)
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Emits performant native code
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Compiles to JavaScript
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Used heavily by companies like Jane Street
                </ListItem>
              </Appear>
            </List>
          </Slide>
          {createSectionTitleSlide(sections.questions)}
          <Slide>
            <Heading
              size={2}>
              Thank You!
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}

export default Presentation;
