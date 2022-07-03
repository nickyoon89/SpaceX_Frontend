import { render, screen, fireEvent } from '@testing-library/react';
import SpacexDispGrid from './spacex-disp-grid.component';
import { unmountComponentAtNode } from 'react-dom';
import { GridColDef } from '@mui/x-data-grid';

let container:any = null;
const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "name",
    headerName: "Name",
    width: 150,
  },
];
const rows = [
  {
    "id": "test-id2",
    "name": "test-name2",
  },
  {
    "id": "test-id1",
    "name": "test-name1",
  },
  {
    "id": "test-id3",
    "name": "test-name3",
  },
];
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

describe('Grid', () => {
  it('Screen Check', async () => {          
    render( <SpacexDispGrid columns={columns} rows={rows} pageSize={10}></SpacexDispGrid>);
    const test1Element = await screen.findByText(/test-id1/i);
    expect(test1Element).toBeInTheDocument();
    const test2Element = await screen.findByText(/test-name2/i);
    expect(test2Element).toBeInTheDocument();
    const test3Element = await screen.findByText(/test-name3/i);
    expect(test3Element).toBeInTheDocument();
    const sortButtons = screen.getAllByLabelText(/sort/i);
    expect(sortButtons.length).toBe(2);
  });
  it('Sorting Check', async () => {
    render( <SpacexDispGrid columns={columns} rows={rows} pageSize={10}></SpacexDispGrid>);
    const sortButtons = screen.getAllByLabelText(/sort/i);
    expect(sortButtons.length).toBe(2);
    const testElements = await screen.findAllByText(/test-name/i);
    expect(testElements[0].innerHTML).toBe("test-name2");
    fireEvent.click(sortButtons[0]);
    const testElements2 = await screen.findAllByText(/test-name/i);
    expect(testElements2[0].innerHTML).toBe("test-name1");
  })
});

