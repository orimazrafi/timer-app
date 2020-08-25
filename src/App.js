import React, { useState, useMemo, useRef } from 'react';
import './App.css';
import { TextField } from './components/TextField/TextField';
import { Tasks } from './components/Tasks/Tasks';
import { useTimer } from './common.hooks';

function App() {
  const [tasks, setTasks] = useState([]);
  const inputRef = useRef(null)
  const [activeTask, setActiveTask] = useState(null)
  const handleSubmit = (value) => {
    setTasks(pre => [...pre, { name: value, duration: 0 }])
  }
  const handleActiveTask = index => {
    setActiveTask(activeTask === index ? null : index)
  }
  useTimer(
    () => {
      setTasks(pre => {
        pre[activeTask].duration = pre[activeTask].duration + 1;
        return [...pre]
      })
    },
    activeTask, 1000

  )
  const sum = useMemo(() => tasks.reduce((a, c) =>
    a + c.duration
    , 0), [tasks])

  return (
    <div style={{ background: "gray", height: "100vh", width: "100%" }}>

      <div style={{ display: "flex", padding: "4rem 0 0 0" }}>
        <div style={{ margin: "auto" }}>
          <h2 style={{ textAlign: "center" }}>Timer App</h2>
          <div style={{ padding: "20px 40px 100px 40px", border: "1px solid" }}>

            <TextField onSubmit={handleSubmit} inputRef={inputRef} />
            <Tasks
              tasks={tasks}
              activeTask={activeTask}
              onActiveTask={handleActiveTask}
            />
            {sum !== 0 &&

              <h1>
                Total :{sum}
              </h1>
            }
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
