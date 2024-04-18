import styles from "./Form.module.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = ({ email, setEmail }) => {
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    
    const submitEmail = (e) => {
        e.preventDefault();
        if (email === '') {
            setError(true);
            return;
        };

        if (/[a-zA-Z0-9]+@[a-zA-z]+\.[a-zA-Z]+/.test(email)) {
            setError(null);
            navigate('/success');
        } else {
            setError(true);
        };
    };

    return (
        <form className={styles.form} onSubmit={(e) => submitEmail(e)}>
            <section className={styles.label}>
                <p>Email address</p>
                {error && <p className={styles.error}>Valid email required</p>}
            </section>
            <input 
                className={error ? styles.inputError : null}
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
