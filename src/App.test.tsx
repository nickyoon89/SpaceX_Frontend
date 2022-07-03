import React from 'react';
import { render, screen } from '@testing-library/react';
import './index.css';
import App from './App';

//apollo client
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { act } from 'react-dom/test-utils';
import { unmountComponentAtNode } from 'react-dom';
let client:any = null;
let container:any = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
    client = new ApolloClient({
      uri: 'https://api.spacex.land/graphql/',
      cache: new InMemoryCache(),
    });
  });
  
  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

describe('App', () => {
  it('Screen Check', async () => {      
      render(<ApolloProvider client={client}>
      <div style={{display:"flex", justifyContent:"center"}}><p className='title'>Nick Yoon</p></div>
      <App/>
    </ApolloProvider>);
    //Title
    const titleElement = screen.getByText(/Nick Yoon/i);
    //Menus
    const loadingElement = screen.getByText(/LOADING.../i);
    expect(titleElement).toBeInTheDocument();
    expect(loadingElement).toBeInTheDocument();
    const displayElement = await screen.findByText(/Display Type/i);
    expect(displayElement).toBeInTheDocument();
    const refreshElement = await screen.findByText(/Refresh/i);
    expect(refreshElement).toBeInTheDocument();
  });
  it('Data Loading Check', async () => {      
    render(<ApolloProvider client={client}>
    <div style={{display:"flex", justifyContent:"center"}}><p className='title'>Nick Yoon</p></div>
    <App/>
  </ApolloProvider>);
});
});

