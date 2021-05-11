import Header from "../Header";
import Tasks from "../Tasks";
import AddTask from "../AddTask";
import { useState, useEffect } from "react";
import axios from "axios";
const Main = () => {
    const [showAddTask, setShowAddTask] = useState(false);
    const [tasks, setTasks] = useState([]);

    useEffect((params) => {
        const getData = async () => {
            const tasksFromServer = await getTasks();
            setTasks(tasksFromServer);
        };
        getData();
    }, []);

    const getTasks = async () => {
        const res = await axios.get("http://localhost:5000/tasks");
        return res.data;
    };

    const getTask = async (id) => {
        const res = await axios.get(`http://localhost:5000/tasks/${id}`);
        return res.data;
    };

    const addTask = async (task) => {
        const res = await axios.post("http://localhost:5000/tasks", task);

        setTasks([...tasks, res.data]);
        // const id = Math.floor(Math.random() * 10000) + 1;
        // const newTask = { id, ...task };
        // setTasks([...tasks, newTask]);
    };

    const deleteTask = async (id) => {
        await axios.delete(`http://localhost:5000/tasks/${id}`);
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const toggleReminder = async (id) => {
        const taskToToggle = await getTask(id);
        const updatedTask = {
            ...taskToToggle,
            reminder: !taskToToggle.reminder,
        };

        const res = await axios.put(
            `http://localhost:5000/tasks/${id}`,
            updatedTask
        );

        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, reminder: res.data.reminder } : task
            )
        );
    };

    return (
        <div className="main-container">
            <Header
                onAdd={() => setShowAddTask(!showAddTask)}
                showAdd={showAddTask}
                title="Agenda"
            />
            {showAddTask && <AddTask onAdd={addTask} />}
            {tasks.length > 0 ? (
                <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleReminder}
                />
            ) : (
                "Agenda vazia"
            )}
        </div>
    );
};

export default Main;
