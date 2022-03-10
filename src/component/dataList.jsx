import React, { Fragment, useEffect, useState } from "react";
import { initialData, removeTask } from "./taskHandler";
import './taskData.css'

function DataList() {
	const [data, setData] = useState([]);

	useEffect(() => {
    initialData(setData);
  }, []);

  const handleDelete = (id) => {
    removeTask({id,setData})
  }
    
    
  
  const priority  = ['none',"Normal","Medium","High"]

	return (
		<Fragment>
      <div className="taskContainer">
        <div className="taskList">
          <div>ID</div>
          <div>Task</div>
          <div>Assigned to</div>
          <div>Due Date</div>
          <div>Priority</div>
        </div>
          <hr />
				{data &&
					data?.map(task => {
					return	<div key={task.id} className='taskList'>
							<div>{task.id}</div>
							<div>{task.message}</div>
							<div>{task.assigned_name?task.assigned_name:"None"}</div>
							<div>{task.due_date?task.due_date:"N/A"}</div>
            <div>{priority[task.priority]}</div>
            <div><button onClick={()=>handleDelete(task.id)} className='deleteBtn'>DELETE</button></div>
						</div>;
					})}
			</div>
		</Fragment>
	);
}

export { DataList };
