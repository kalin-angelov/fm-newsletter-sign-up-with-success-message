import styles from "./Message.module.css";

import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import { Context } from "../../context/Context";
import IconSuccess from "../Icons/IconSuccess";

const Message = () => {
    const navigate = useNavigate();
    const { email, setEmail } = useContext(Context);

    const onClickBtn = () => {
        setEmail('');
        navigate('/');
    };

    return (
        <article className={styles.messageMainContainer}>
            <section className={styles.messageInfo}>
                <IconSuccess />
                <h1>Thanks for subscribing!</h1>
                <p>
                    A confirmation email has been sent to <span>{email}</span>. Please open it and click the button inside to confirm your subscription.
                </p>
            </section>
            <button onClick={onClickBtn}>Dismiss message</button>
        </article>
    );
};

export default Message;
