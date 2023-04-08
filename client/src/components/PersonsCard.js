import React, {useState} from 'react';

const PersonCard = (props) => {
    const[ stateAge, setStateAge]= useState(props.age);
    return (
        <div>
            <h1>{props.lastName}, {props.firstName}</h1>
            <p>Age: {stateAge}</p>
            <p>Hair Color: {props.hairColor}</p>
            <button onClick={() => setStateAge(stateAge+1)}>
                Birthday Button for {props.firstName} {props.lastName}
            </button>
        </div>
    )
}
export default PersonCard;