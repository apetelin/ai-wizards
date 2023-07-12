import React from 'react';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import { CSelector } from './widgets/CSelector';
import { Button } from '@mui/material';

export interface SettingsProps {
    pending: boolean;
}

export interface SettingForm {
    "build-tool": string;
    "deployment-target":  string;
    "integration-platform": string;
}

export const Settings: React.FC<SettingsProps> = ({pending}) => {
    return <>
        <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1, marginBottom: 2 }}
            >
              <div className='welcome'>Hark, fair adventurer of mystical lands! I beseech thee to unveil thy splendid selection of paramount settings, which shall guide and illuminate the path of thy noble pipeline.</div>
        </Typography>
        <FormGroup>
            <CSelector name="build-tool" label='Build tool' values={[['mvn', 'Maven'], ['gradle', 'Gradle'], ['npm','npm script']]}/>
            <CSelector name="deployment-target" label='Deployment Target' values={[['openshift', 'Openshift'], ['gcp', 'GCP'], ['aws','AWS']]}/>
            <CSelector name="integration-platform" label='CI/CD platform' values={[['jenkins', 'Jenkins'], ['teamcity', 'Teamcity']]}/>
            <Button disabled={pending} variant='contained' type='submit' className='submit'>{pending ? <><span>.</span><span className='runningUnicorn'>🦄</span></> : <span>Gimme some magic 🌈🦄<span className={'reverseUnicorn'}>🌈</span></span>}</Button>
        </FormGroup>
    </>
}