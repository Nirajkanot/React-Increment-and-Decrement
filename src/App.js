
import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import './index.css'
import Tooltip from '@material-ui/core/Tooltip'

const App = () => {
  const[num, setNum] = useState(0);

  const incr = () => {
    setNum(num + 1);
  };

  const decr = () => {
    if(num > 0){
    setNum(num - 1);
    }else {
      alert('Limit Reached to Zero');
      setNum(0);
    };
  };
  return(
    <>
    <div className="main_div">
      <div className="center_div">
        <h1> {num} </h1>
        <div calssName="btn_div">

        <Tooltip title="Add">
          <Button onClick = {incr} className="btn_green"><AddCircleIcon/></Button>
          </Tooltip>
          <Tooltip title="Delete">
          <Button onClick = {decr} className="btn_red"><DeleteIcon/></Button>
          </Tooltip>
        </div>
      </div>

    </div>
    </>

  )
}

export default App;