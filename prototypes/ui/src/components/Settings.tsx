import React from 'react';
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import Typography from '@mui/material/Typography';

export const Settings: React.FC = () => {
    return <form>
        <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1, marginBottom: 2 }}
            >
              <div>Select your main settings</div>
        </Typography>
        <FormControl fullWidth>
            <InputLabel id="deployment-target">Deployment target</InputLabel>
            <Select
                labelId="deployment-target"
                id="deployment-target-select"
                label="Deployment Target"
            >
                <MenuItem value={"Fabric on premises"}>Fabric on premises</MenuItem>
                <MenuItem value={"Fabric GCP"}>Fabric GCP</MenuItem>
                <MenuItem value={"VHS Podman"}>VHS Podman</MenuItem>
            </Select>
        </FormControl>
    </form>
}