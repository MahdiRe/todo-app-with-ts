import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, makeStyles, Button } from '@material-ui/core';
import { IState as Props } from '../App';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

interface IProps {
    todos: Props["todos"]
    deleteTodo: (id: string) => void
    updateTodo: (id: string) => void
}

// const useStyles = makeStyles({}
//     table: {
//         minWidth: 650,
//     },
// });

const TodoList: React.FC<IProps> = ({ todos, deleteTodo, updateTodo }) => {

    // const classes = useStyles();

    const deleteItem = (id: string | undefined) => {
        console.log(id)
        if (id === undefined) {
            return
        }
        deleteTodo(id);
    }

    const updateItem = (id: string | undefined) => {
        console.log(id)
        if (id === undefined) {
            return
        }
        updateTodo(id);
    }

    const tableBody = (): JSX.Element => {
        return (
            <TableBody>
                {todos.map((todo) => (
                    <TableRow key={todo._id}>
                        <TableCell component="th" scope="row">
                            {todo.title}
                        </TableCell>
                        <TableCell align="right">{todo.activeState}</TableCell>
                        <TableCell align="right">{todo.endDate}</TableCell>
                        <TableCell align="right">
                            {
                                todo.activeState === "Done"
                                    ?
                                    <Button variant="contained" disabled>
                                        <b>Marked</b>&nbsp; <CheckCircleIcon style={{ color: "green"}} />
                                    </Button>
                                    
                                    :
                                    <Button variant="contained" color="secondary" onClick={() => updateItem(todo._id)}>
                                        Mark Done
                                    </Button>
                            }
                        </TableCell>
                        <TableCell align="right">
                            <Button variant="contained" color="secondary" onClick={() => deleteItem(todo._id)}>
                                Delete
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        )
    }

    const displayList = (): JSX.Element => {
        return (
            <div className="todoList">
                <h2>List of my Todo's</h2>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell width="250"><b>Title</b></TableCell>
                                <TableCell align="right"><b>Active State</b></TableCell>
                                <TableCell align="right"><b>End Date</b></TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                            </TableRow>
                        </TableHead>
                        {(todos.length > 0) ?
                            tableBody()
                            :
                            <h2>Loading...</h2>
                        }
                    </Table>
                </TableContainer>
            </div>
        )
    }

    return (
        <div>{displayList()}</div>
    )
};

export default TodoList;