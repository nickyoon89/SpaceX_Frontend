import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

export default function SpacexDispGrid(props:any) {
    return (
      <Box sx={{width: '100%'}}>
        <DataGrid
            autoHeight
            rows={props.rows}
            columns={props.columns}
            pageSize={props.pageSize}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
        />
      </Box>
    );
  }