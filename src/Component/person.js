import React from 'react';

function Person({person, key}) {
    return (
        <div>
            <h1>
                I am {person.name} . I am {person.age} year old
            </h1>
        </div>
    )
}

export default Person;
