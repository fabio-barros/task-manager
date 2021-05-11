import "../styles/css/AddTask.css";
import { useState } from "react";
const AddTask = ({ onAdd }) => {
    const [text, setText] = useState("");
    const [date, setDate] = useState("");
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        
        e.preventDefault();
        if (!text) {
            alert("Campo Obrigatório");
            return;
        }

        onAdd({ text, date, reminder });

        setText("");
        setDate("");
        setReminder(false);
    };

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Tarefa</label>
                <input
                    type="text"
                    placeholder="Tarefa"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label> Data e Hora</label>
                <input
                    type="text"
                    placeholder="Data e Hora"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
            </div>
            <div className="form-control form-control-check">
                <label> Lembrete</label>
                <input
                    type="checkbox"
                    checked={reminder}
                    value={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)}
                />
            </div>

            <input type="submit" value="Salvar" className="btn btn-block" />
        </form>
    );
};

export default AddTask;
