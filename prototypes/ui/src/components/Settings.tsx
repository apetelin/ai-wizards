import React from 'react';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import { CSelector } from './widgets/CSelector';
import { Button } from '@mui/material';

export interface SettingsProps {
}

export interface SettingForm {
    "build-tool": string;
    "deployment-target":  string;
    "integration-platform": string;
}

export const Settings: React.FC<SettingsProps> = () => {
    return <>
        <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1, marginBottom: 2 }}
            >
              <div>Select your main settings</div>
        </Typography>
        <FormGroup>
            <CSelector name="build-tool" label='Build tool' values={[['mvn', 'Maven'], ['gradle', 'Gradle'], ['npm','npm script']]}/>
            <CSelector name="deployment-target" label='Deployment Target' values={[['openshift', 'Openshift'], ['gcp', 'GCP'], ['aws','AWS']]}/>
            <CSelector name="integration-platform" label='CI/CD platform' values={[['jenkins', 'Jenkins'], ['teamcity', 'Teamcity']]}/>
            <Button variant='contained' type='submit'>Gimme some magic!</Button>
        </FormGroup>
    </>
}