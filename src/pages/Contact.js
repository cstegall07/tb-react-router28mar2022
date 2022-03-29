import {useState} from 'react';

const Contact = () => {
    const[input, setInput] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInput(values => ({...values, [name]: value}))
    }


    return (
    <>
        <h1>Contact Me</h1>
        <form>
            <label>Name
            <input
                type="text"
                name="tbName"
                value={input.tbName || ""}
                onChange={handleChange}
            />
            </label> 
            <label>Email
            <input
                type="email"
                name="tbEmail"
                value={input.tbEmail || ""}
                onChange={handleChange}
            />
            </label> 
            <label>Phone Number
            <input
                type="number"
                name="tbPhone"
                value={input.tbPhone || ""}
                onChange={handleChange}
            />
            </label> 
            

        </form>
    </>
    );
};
  
  export default Contact;