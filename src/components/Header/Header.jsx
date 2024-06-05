import "./Header.css";

export default function Header(props) {
  return (
    <div className='app-div_head'>
      <div className='row'>
        <div className='col'>
          <select className='form-select app-div_head-select' value={props.difficulty} onChange={props.handleDiff}>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>
        <div className='col'>

        </div>
      </div>
    </div>
  );
}