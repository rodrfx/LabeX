import React from 'react';
import { ItemContent, DisplayContent, Button, NameDisplay } from './styles';


function CandidatesItem(props) {
    return (
        <ItemContent>
            <DisplayContent>
            <NameDisplay>
            <p>{props.candidates}</p>
            </NameDisplay>
            <Button primary>ACEITAR</Button>
            <Button>REJEITAR</Button>
            </DisplayContent>
        </ItemContent>
    )
}

export default CandidatesItem;