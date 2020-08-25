import React from 'react'
export const Tasks = props => {
    return (
        <>
            {props.tasks.length ?
                props.tasks.map((task, index) =>
                    <div key={Math.random()}>
                        <div style={{ display: "flex", margin: "10px 0", borderBottom: "2px solid", padding: "0 0 5px 0" }}>
                            <div style={{ alignSelf: "center", fontWeight: "bold", maxWidth: "100px", overflow: "hidden", textOverflow: "ellipsis" }}>
                                {task.name}
                            </div>
                            <div style={{ margin: "0 10px" }} onClick={() => props.onActiveTask(index)}>{props.activeTask === index ? <button style={{ background: "orange", padding: "0.5rem 2rem", fontWeight: "bold" }} >pause</button> : <button style={{ background: "green", fontWeight: "bold", padding: "0.5rem 2rem" }} >play</button>}</div>
                            <div style={{ alignSelf: "center", }}>
                                {task.duration}
                            </div>
                        </div>
                    </div>) : null
            }
        </>
    )
}