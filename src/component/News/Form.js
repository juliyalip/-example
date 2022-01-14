import { useState } from 'react';


export default function Form ({onSubmitSearch}) {
    const [textForm, setTextForm] = useState('');

 const handleSubmit = e => {
        e.preventDefault();
     onSubmitSearch(textForm);
     setTextForm('')
}

    return (
        <form onSubmit={handleSubmit}>
            <label>What do you search? 
                <input type="text" placeholder='story' value={textForm} onChange={e=> setTextForm(e.target.value)} />
            </label>
            <button type="submit" onClick={handleSubmit}>search</button>
        </form>
    )
}