import React, { Component } from 'react';
import { Spectacle, Deck, Slide } from 'spectacle';
import createHistory from 'history/createBrowserHistory'
import CodeSlide from 'spectacle-code-slide';
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
          <Slide>
            <h1>Ho</h1>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}

export default Presentation;
