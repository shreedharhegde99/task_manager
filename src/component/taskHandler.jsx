import React from "react";
import axios from "axios";

// function to create a new task
function createTask(props) {
	const { task, assigned, date, priority } = props;
	const formData = new FormData();
	formData.append("message", task);
	formData.append("assigned_to", assigned ? assigned : "None");
	formData.append("due_date", date);
	formData.append("priority", priority);

	axios
		.post("https://devza.com/tests/tasks/create", formData, {
			headers: {
				AuthToken: process.env.REACT_APP_NOT_SECRET_CODE,
			},
		})
		.then((res) => res.data)
		.then((res) => console.log(res))
		.catch((err) => console.log(err));
}

//function to get initial data from database
async function initialData(func) {
	await axios
		.get("https://devza.com/tests/tasks/list", {
			headers: { AuthToken: process.env.REACT_APP_NOT_SECRET_CODE },
		})
		.then((res) => res.data)
		.then((res) => func(res.tasks.slice(0, 11)))
		.catch((err) => console.log(err));
}

//  function to delete a task

function removeTask({ id, setData }) {
  const dataid = new FormData();
	dataid.append("taskid",id.toString());
  console.log(dataid.get('taskid'));
	axios
		.post(
			"https://devza.com/tests/tasks/delete",
			{ data: dataid },
			{
				headers: {
					AuthToken: process.env.REACT_APP_NOT_SECRET_CODE,
				},
			}
		)
		.then((res) => res.data)
		.then((res) => console.log(res))
		.catch((err) => console.log(err));
}

export { createTask, initialData, removeTask };
