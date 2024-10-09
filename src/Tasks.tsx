import DataType from "./App"

type TasksPpopsType = {
    data: DataType
}

type DataType = {
    title: string,
    tasks: Array<TasksType>,
    students: Array<string>
}


type TasksType = {
    taskId: number,
    title: string,
    isDone: boolean
}


export const Tasks = (props: TasksPpopsType) => {
    return (
        <>
            <h1>{props.data.title}</h1>
            <ul>
                {props.data.tasks.map(el => {
                    return (
                        <li>
                            <span>{el.taskId}</span>
                            <span>{el.isDone}</span>
                            <span>{el.title}</span>
                        </li>
                    )
                })}
            </ul>

            <ul>
                {props.data.students.map(el => {
                    return (
                        <li>{el}</li>
                    )
                })}
            </ul>
        </>
    )
}