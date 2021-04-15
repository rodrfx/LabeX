import React from 'react';
import { ItemContent, DisplayContent, Button, NameDisplay } from './styles';

function CandidateItem(props) {

    const approveCandidate = () => {
        props.decideCandidate(true, props.candidates.id)
    }

    const rejectCandidate = () => {
        props.decideCandidate(false, props.candidates.id)
    }

    return (
        <ItemContent>
            <DisplayContent>
                <NameDisplay>
                    <p>{props.candidates.name}</p>
                </NameDisplay>
                <Button onClick={approveCandidate} primary>ACEITAR</Button>
                <Button onClick={rejectCandidate}>REJEITAR</Button>
            </DisplayContent>
        </ItemContent>
    )
}

export default CandidateItem;