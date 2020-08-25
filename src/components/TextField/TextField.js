import React, { useState, useEffect } from 'react'
export const TextField = props => {
    useEffect(() => {
        props.inputRef.current.focus()
    }, [props.inputRef])
    const [value, setValue] = useState("");
    const handleChange = ({ target }) => setValue(target.value);
    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit(value);
        setValue("")
        props.inputRef.current.focus()
    }
    return <form onSubmit={handleSubmit}>
        <input placeholder="Task" ref={props.inputRef} style={{ padding: "0.5rem 2rem", borderRadius: "4px" }} onChange={handleChange} value={value} />
        <button type="submit" style={{ padding: "3px 10px", background: "blue", color: "white", fontSize: "20px" }}>+</button>
    </form>
}