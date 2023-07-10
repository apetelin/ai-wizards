import React from 'react';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import {CSelector} from './widgets/CSelector';

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
        <FormGroup>
            <CSelector name="build-tool" label='Build tool' values={[['mvn', 'Maven'], ['gradle', 'Gradle'], ['npm','npm script']]}/>
            <CSelector name="deployment-target" label='Deployment Target' values={[['openshift', 'Openshift'], ['gcp', 'GCP'], ['aws','AWS']]}/>
            <CSelector name="integration-platform" label='CI/CD platform' values={[['jenkins', 'Jenkins'], ['teamcity', 'Teamcity']]}/>
        </FormGroup>
    </form>
}