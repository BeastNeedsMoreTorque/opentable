import { fromState } from 'fp-ts/lib/StateT'
import React, { ChangeEvent, useState } from 'react'

function Form() {
    const [formState, setFormState] = useState({ name: '', email: '' });

    function handleInputChange(event: ChangeEvent<HTMLInputElement>): void {
        setFormState({ ...formState, [event.target.name]: event.target.value, })
        //throw new Error('Function not implemented.')
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formState);

    }

    return (
        <>
            <div className='w-full max-w-xs'>
                <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4' onSubmit={handleSubmit}>
                    <div className='mb-6'>
                        <label className='block text-grey-700 text-sm font-bold mb-2' htmlFor='name'>
                            Name:
                            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-grey-700 leading-tight focus:outline-none'
                                type='text'
                                name='name'
                                value={formState.name}
                                onChange={handleInputChange}
                            />
                        </label>
                    </div>
                    <div className='mb-6'>
                        <label className='block text-grey-700 text-sm font-bold mb-2' htmlFor='email'>
                            Email:
                            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-grey-700 leading-tight focus:outline-none'
                                type='email'
                                name='email'
                                value={formState.email}
                                onChange={handleInputChange}
                            />
                        </label>
                    </div>
                    <div>
                        <button className='bg-blue-500 p-2 px-4 text-white font-bold rounded-full' type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Form