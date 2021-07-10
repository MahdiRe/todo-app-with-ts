import React, { useState } from "react";
import { TextField, Button } from '@material-ui/core';
import { IState as Props } from '../App'

interface IProps {
    todos: Props["todos"]
    setTodo: React.Dispatch<React.SetStateAction<IProps["todos"]>>
}

const AddTodo: React.FC<IProps> = ({ todos, setTodo }) => {

    const [input, setInput] = useState({
        title: "",
        activeState: "New",
        endDate: "2021-07-10",
    })
        
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setInput({
            ...input,
            [e.target.id]: e.target.value
        })
    }

    const handleClick = (): void => {
        if (!input.title) {
            return
        }

        setTodo([
            ...todos,
            {
                title: input.title,
                activeState: input.activeState,
                endDate: input.endDate
            }
        ])

        setInput({
            title: "",
            activeState: "",
            endDate: "2021-07-10"
        })
    }

    return (
        <div className="addTodo">
            <h2>Add a new Todo</h2>
            <TextField
                id="title"
                label="Title"
                placeholder="Enter the title here"
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
                value={input.title}
                onChange={handleChange}
            />
            <TextField
                disabled
                id="activeState"
                label="Active State"
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
                value={input.activeState}
                onChange={handleChange}
            />
            <TextField
                id="endDate"
                label="Birthday"
                type="date"
                defaultValue="2021-07-10"
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
                value={input.endDate}
                onChange={handleChange}
            />
            <Button variant="contained" color="secondary" onClick={handleClick} fullWidth>
                Add Todo
            </Button>
        </div>
    )
};

export default AddTodo;