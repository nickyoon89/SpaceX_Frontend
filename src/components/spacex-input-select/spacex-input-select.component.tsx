import {
    FormControl,
    InputLabel,
    MenuItem,
    Select
  } from "@mui/material";

export default function SpacexInputSelect(_props:any) {
    return (
        <FormControl sx={{width:'100%'}}>
        <InputLabel sx={{background: 'white', paddingRight: "5px"}}>{_props.title}</InputLabel>
        <Select
          id="select"
          value={_props.value}
          label={_props.title}
          onChange={_props.changeHandler}
        >
           {_props.data.map((data: any, i:number) => (
                <MenuItem key={i} value={data.value}>{data.label}</MenuItem>
            ))}
        </Select>
      </FormControl>
    );
  }