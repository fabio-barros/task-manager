import { FaTimes } from "react-icons/fa";
import "../styles/css/Task.css";
const Task = ({ task, onDelete, onToggle }) => {
    const { id, text, date, reminder } = task;
    return (
        <div
            className={`task ${reminder ? "reminder" : ""}`}
            onDoubleClick={() => onToggle(id)}
        >
            <h3>
                {text}{" "}
                
                <FaTimes
                    style={{ color: "red", cursor: "pointer" }}
                    onClick={() => onDelete(task.id)}
                />
            </h3>

            <p>{date}</p>
        </div>
    );
};

export default Task;