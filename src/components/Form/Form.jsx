import styles from "./Form.module.css";

import { useState } from "react";

const Form = () => {
    const [email, setEmail] = useState('');
    
    const submitEmail = (e) => {
        e.preventDefault();
        if (email === '') {
            console.error('input is empty')
        } else {
            console.log(email);
        };
    };

    return (
        <form className={styles.form} onSubmit={(e) => submitEmail(e)}>
            <label htmlFor="email">Email address</label>
            <input 
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@company.com" 
            />
            <button type="submit">Subscribe to monthly newsletter</button>
        </form>
    );
};

export default Form;
