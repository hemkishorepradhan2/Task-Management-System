import { updateTask, deleteTask } from "../api/taskApi";

const TaskList = ({ tasks, refreshTasks }) => {

  const handleStatusChange = async (task, status) => {
    await updateTask(task.id, {
      title: task.title,
      description: task.description,
      due_date: task.due_date,
      status: status,
    });

    refreshTasks();
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    refreshTasks();
  };

  return (
    <table border="1" width="100%">
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Due Date</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {tasks.map((task) => (
          <tr key={task.id}>
            <td>{task.title}</td>
            <td>{task.description}</td>
            <td>{task.due_date}</td>

            <td>
              <select
                value={task.status}
                onChange={(e) =>
                  handleStatusChange(task, e.target.value)
                }
              >
                <option>PENDING</option>
                <option>INPROGRESS</option>
                <option>Done</option>
              </select>
            </td>

            <td>
              <button onClick={() => handleDelete(task.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TaskList;
