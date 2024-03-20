import { useContext } from "react";
import { AppContext } from "../context/Context";
import { Slider } from "antd";

function Search() {
	const { data } = useContext(AppContext);

	const onChange = (value) => {
		console.log("onChange: ", value);
	};
	const onChangeComplete = (value) => {
		console.log("onChangeComplete: ", value);
	};

	console.log(data);
	return (
		<div className="row">
			<input placeholder="Search for a dinosuar..." type="text"></input>
			<div className="col-md-4 sliderBox">
				<h5>Weight</h5>
				<Slider
					className="weightSlider"
					range
					step={10}
					defaultValue={[0, 100]}
					onChange={onChange}
					onChangeComplete={onChangeComplete}
				/>
			</div>
			<div className="col-md-4 sliderBox">
				<h5>Length</h5>
				<Slider
					className="lengthSlider"
					range
					step={10}
					defaultValue={[0, 100]}
					onChange={onChange}
					onChangeComplete={onChangeComplete}
				/>
			</div>
			<button>Search</button>
		</div>
	);
}
export default Search;
