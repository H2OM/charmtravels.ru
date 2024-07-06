'use client';

export default function SubsForm({children}) {

    const submitHandler = (e)=> {
        e.preventDefault();
    }

    return (
        <form className={"footer__fly__form"} onSubmit={submitHandler}>
            {children}
        </form>
    );
}