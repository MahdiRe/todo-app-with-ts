import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, makeStyles, Button } from '@material-ui/core';
import { IState as IProps } from '../App';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const TodoList: React.FC<IProps> = ({ todos }) => {

    const classes = useStyles();

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
                        <TableBody>
                            {todos.map((todo) => (
                                <TableRow key={todo.id}>
                                    <TableCell component="th" scope="row">
                                        {todo.title}
                                    </TableCell>
                                    <TableCell align="right">{todo.activeState}</TableCell>
                                    <TableCell align="right">{todo.endDate}</TableCell>
                                    <TableCell align="right">
                                        <Button variant="contained" color="secondary">
                                            Mark Done
                                        </Button>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Button variant="contained" color="secondary" >
                                            Delete
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
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