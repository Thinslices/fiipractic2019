// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Notes,
  Quote,
  Slide,
  Text
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

const images = {
  formidagon: require('../assets/formidable-logo.svg'),
  goodWork: require('../assets/good-work.gif')
};

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    quaternary: '#03A9FC',
    tertiary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

class RevealingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0
    };
    this._nextStep = this._nextStep.bind(this);
  }
  componentDidMount() {
    window.addEventListener('keydown', this._nextStep);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this._nextStep);
  }
  _nextStep(e) {
    if (e.which === 40) {
      // arrowDown
      this.setState((p) => ({
        step: p.step + 1
      }));
    }
  }
  render() {
    const { step } = this.state;
    const { caps, items, title } = this.props // eslint-disable-line
    return (
      <Slide bgColor="quaternary" textColor="primary">
        <Heading size={4} textColor="primary" caps={caps}>
          {title}
        </Heading>
        <List textAlign="center">
          {items.slice(0, step).map((item, index) => (
            <ListItem style={{ listStyle: 'none' }} key={index}>
              {item.title}
            </ListItem>
          ))}
        </List>
      </Slide>
    );
  }
}

const protocols = [
  { title: 'Internet Protocol (IP)' },
  { title: 'Transmission Control Protocol (TCP)' }
];

const www = [
  { title: 'Web Resource' },
  { title: 'Web Browsers' },
  { title: 'Uniform Resource Locators (URL)' }
];

const basics = [{ title: 'HTML' }, { title: 'CSS' }, { title: 'Javascript' }];

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="quaternary">
          <Heading size={3} caps lineHeight={1} textColor="primary">
            the basics of web development
          </Heading>
        </Slide>

        <Slide
          bgColor="quaternary"
          bgImage="https://cdn-images-1.medium.com/max/2000/1*oohdOCH3vjWP914Cc_1VJw.jpeg"
        />

        <Slide
          bgColor="quaternary"
          bgImage="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fsearchengineland.com%2Ffigz%2Fwp-content%2Fseloads%2F2015%2F12%2Fcomputer-network-laptops2-ss-1920.jpg"
        />

        <RevealingList title="Protocols of the internet" items={protocols} />

        <RevealingList title="World Wide Web" items={www} />

        <RevealingList title="The web page" items={basics} />

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Typography
          </Heading>
          <Text size={6} textColor="secondary">
            Standard text
          </Text>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite margin="10px 0 0 30px">Author</Cite>
          </BlockQuote>
        </Slide>
        <Slide>
          <Image src={images.goodWork} width={500} />
          <Notes>gifs work too</Notes>
        </Slide>
      </Deck>
    );
  }
}
