import { render, screen, fireEvent } from '@testing-library/react';
import SpacexDispCard from './spacex-disp-card.component';
import { unmountComponentAtNode } from 'react-dom';

let container:any = null;
let _cardData = { 
    "description": "Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.",
    "id": "9D1B7E0",
    "manufacturers": [
      "Orbital ATK"
    ],
    "name": "Thaicom",
    "twitter": "https://twitter.com/thaicomplc",
    "website": "http://www.thaicom.net/en/satellites/overview",
    "wikipedia": "https://en.wikipedia.org/wiki/Thaicom"
};
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('Card', () => {
  it('Screen Check', () => {          
    render( <SpacexDispCard cardData={_cardData}></SpacexDispCard>);
    let checkingElement = screen.getByText(/9D1B7E0/i);
    expect(checkingElement).toBeInTheDocument();
    checkingElement = screen.getByText(/Orbital ATK/i);
    expect(checkingElement).toBeInTheDocument();
    checkingElement = screen.getByText(/Thaicom/i);
    expect(checkingElement).toBeInTheDocument();
    checkingElement = screen.getByAltText(/wiki-icon/i);
    expect(checkingElement).toBeInTheDocument();
    checkingElement = screen.getByLabelText(/website/i);
    expect(checkingElement).toBeInTheDocument();
    checkingElement = screen.getByLabelText(/twitter/i);
    expect(checkingElement).toBeInTheDocument();
  });
  it('Expand Check', () => {
    render( <SpacexDispCard cardData={_cardData}></SpacexDispCard>);
    let buttonElement = screen.getByTestId(/ExpandMoreIcon/i);
    fireEvent.click(buttonElement);
    let checkingElement = screen.getByText(/Thaicom is the name of a series of communications/i);
    expect(checkingElement).toBeInTheDocument();
  })
});

