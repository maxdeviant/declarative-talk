import React, { Component } from 'react';
import createHistory from 'history/createBrowserHistory'
import CodeSlide from 'spectacle-code-slide';
import {
  Spectacle,
  Deck,
  Slide
} from 'spectacle';

import theme from './theme';
import './Presentation.css';

const history = createHistory();

class Presentation extends Component {
  render() {
    return (
      <Spectacle
        theme={theme}
        history={history}>
        <Deck
          progress='bar'>
          <Slide
            id='intro'>
            <h1>
              Declaratively Composable
            </h1>
            <h2>
              A Natural Progression Towards Declarative Programming
            </h2>
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
