import React, { Fragment, useState } from "react";
import { assignee, priority as priorities } from "./data";
import "./taskCreator.css";
import { createTask } from "./taskHandler";

function Task() {
	const [task, setTask] = useState("");
	const [assigned, setAssigned] = useState(false);
	let today = new Date();
	let actualDate = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;
	const [date, setDate] = useState(actualDate);
	const [priority, setPriority] = useState(1);

	// function to handle task creation
	const handleSubmit = (e) => {
		e.preventDefault();
		let props = { task, assigned, date, priority };
		if (task !== "") {
			createTask(props);
		} else {
			alert("Please input task");
		}
	};

	return (
		<Fragment>
			<form onSubmit={handleSubmit}>
				<div className="formContainer">
					<div className="inputContainer">
						<label htmlFor="taskName">Task:</label>
						<input
							type="text"
							placeholder="Create a task"
							value={task}
							onChange={(e) => setTask(e.target.value)}
						/>
					</div>
					<div className="inputContainer">
						<label htmlFor="assignee">Assign To:</label>
						<select
							value={assigned}
							onChange={(e) => setAssigned(e.target.value)}
						>
							{assignee.map((person, i) => (
								<option key={i} value={person.value}>
									{person.label}
								</option>
							))}
						</select>
					</div>
					<div className="inputContainer">
						<label htmlFor="date"> Due Date :</label>
						<input
							type="date"
							value={date}
							onChange={(e) => setDate(e.target.value)}
						/>
					</div>
					<div className="inputContainer">
						<label htmlFor="priorities">Priority:</label>
						<select
							value={priority}
							onChange={(e) => setPriority(e.target.value)}
						>
							{priorities.map((level, i) => (
								<option key={i} value={level.value}>
									{level.type}
								</option>
							))}
						</select>
					</div>
					<div
						className="btnContainer"
					>
						<button type="submit" className="submitBtn">SUBMIT</button>
					</div>
				</div>
			</form>
		</Fragment>
	);
}
export default Task;
