import { fromState } from 'fp-ts/lib/StateT'
import React, { ChangeEvent, useState } from 'react'

function Form() {
    const [formState, setFormState] = useState({name: '', email: ''});

    function handleInputChange(event: ChangeEvent<HTMLInputElement>): void {
        setFormState({...formState, [event.target.name]: event.target.value,})
        //throw new Error('Function not implemented.')
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formState);
        
    }

    return (
        <>
            <div>Form</div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                    type='text'
                    name='name'
                    value={formState.name}
                    onChange={handleInputChange}
                    />
                </label>
                <label>
                    Email:
                    <input
                    type='email'
                    name='email'
                    value={formState.email}
                    onChange={handleInputChange}
                    />
                </label>
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default Form