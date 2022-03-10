import { Fragment } from "react";
import "./App.css";
import { DataList } from "./component/dataList";
import Task from "./component/taskCreater";

function App() {
	return (
		<Fragment>
			<Task />
			<DataList />
		</Fragment>
	);
}

export default App;
