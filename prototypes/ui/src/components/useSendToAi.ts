import React from "react";
import { LoadState } from "./loadState";

const bakendURL = 'http://localhost:3000/aiwizards';

export function useSendToAI(): [LoadState | undefined, string | undefined, (userPrompt: string) => Promise<any>] {
    const [loadState, setLoadState] = React.useState<LoadState>();
    const [result, setResult] = React.useState<string>();

    function sendRequest(userPrompt: string) {
        setLoadState('pending');
        return fetch(`${bakendURL}/convertPipeline`, {
            mode: "no-cors",
            method: 'post',
            body: userPrompt,
        }).then(result => console.log(result));
    }

    return [loadState, result, sendRequest];
}