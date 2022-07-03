import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

export default function SpacexDispGrid(props:any) {
    return (
      <Box sx={{width: '100%', background: 'white', borderRadius: '15px'}}>
        <DataGrid
            autoHeight
            rows={props.rows}
            columns={props.columns}
            pageSize={parseInt(props.pageSize)}
            rowsPerPageOptions={[10]}
            checkboxSelection
            disableSelectionOnClick
        />
      </Box>
    );
  }