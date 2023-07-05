import React from "react";
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"


export interface CSelectorProps {
    name: string;
    label: string;
    values: [string, string][];   // 0 - value, 1 - label
}

export const CSelector: React.FC<CSelectorProps> = ({name, label, values}) => {
    return <FormControl fullWidth margin="normal">
            <InputLabel id={`id-${name}`}>{label}</InputLabel>
            <Select
                labelId={`id-${name}`}
                id={name}
                label={label}
            >
                {values.map(item => (<MenuItem key={`key-${item[0]}`} value={item[0]}>{item[1]}</MenuItem>))}
            </Select>
        </FormControl>
}