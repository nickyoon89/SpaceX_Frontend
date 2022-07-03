import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SpacexInputSelect from './spacex-input-select.component';
import { unmountComponentAtNode } from 'react-dom';
let container:any = null;
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
describe('Select', () => {
  it('Screen Check', async () => {          
    const value="id";
    render( <SpacexInputSelect value={value} title="test" data={[{value:'id', label:'ID'},{value:'name', label:'Name'}]} changeHandler={(e:any)=>{console.log(e.target.value)}}></SpacexInputSelect>);
    //Title
    const titleElement = await screen.findAllByText(/test/i);
    expect(titleElement[0]).toBeInTheDocument();
    const currentElement = screen.getByText(/ID/i);
    expect(currentElement).toBeInTheDocument();
  });
  it('Value Change Check', async () => {          
    let value = "name";
    const mockChangeHandler = jest.fn((e:any) => {value = e.target.value});
    render( <SpacexInputSelect value={value} title="test" data={[{value:'id', label:'ID'},{value:'name', label:'Name'}]} changeHandler={mockChangeHandler}></SpacexInputSelect>);
    const currentElement = screen.getByText(/Name/i);
    expect(currentElement).toBeInTheDocument();
    mockChangeHandler({target:{value:"id"}});
    expect(mockChangeHandler).toHaveBeenCalled();
    expect(value).toBe("id");
    render( <SpacexInputSelect value={value} title="test" data={[{value:'id', label:'ID'},{value:'name', label:'Name'}]} changeHandler={mockChangeHandler}></SpacexInputSelect>);
    const idElement =screen.getByText(/ID/i);
    expect(idElement).toBeInTheDocument();
  });
});

