import React from 'react';
import Person from './person';

function Listrender() {
    const persons = [
        {
            id: 1,
            name: 'Nguyễn Việt Anh',
            age: 23,
        },
        {
            id: 2,
            name: 'Nguyễn Tiến Đạt',
            age: 23,
        },
        {
            id: 1,
            name: 'Tạ Thành Đạt',
            age: 23,
        }
    ]
    const personList = persons.map(person => <Person key={person.name} person={person}/>
        // <h1>
        //     I am {person.name} . I am {person.age} year old
        // </h1>
    )
    return <div>{personList}</div>
}

export default Listrender;
