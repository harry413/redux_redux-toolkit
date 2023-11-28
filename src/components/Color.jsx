import React, {useState} from 'react'
import {useDispatch} from "react-redux";
import { changeColor } from '../features/theme';

const Color = () => {
    const [color, setColor] = useState("");
    const dispatch = useDispatch();

  return (
    <div>
       <input 
            type='text'
            onChange={(event) => {
                setColor(event.target.value)
            }}
            style={{ color:"#6D6875" }}
       />
        <button 
          onClick={() => {dispatch(changeColor(color));}}
          style={{margin:20, background:"#E5989B", border:"none", padding:8, borderRadius:5}}
        >
          change color
        </button>
    </div>
  )
}

export default Color