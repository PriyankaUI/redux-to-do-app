import React,{useState} from 'react'
import {  FaPlus,FaRegTrashAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { addtodo, deltodo, remove } from '../actions';

function ToDo() {
const [inputdata, setinputdata] = useState('')
const list=useSelector((state)=>state.todoReducer.list);
const dispatch=useDispatch();
    return (
        <>
           <div className="main-div">
      <div className="child-div">
        <figure>
          <figcaption>Add your list here ✋</figcaption>
        </figure>
        <div className="addItems">
          <input type="text" placeholder="✍️  Add items " value={inputdata} onChange={(event)=>setinputdata(event.target.value)} />
          <FaPlus onClick={()=> dispatch(addtodo(inputdata),setinputdata(''))} />
        </div>
        <div className="showitems">
        {
            list.map((ele)=>{
                return <div className="each-item" key={ele.id}>
                <h3>{ele.data}</h3>
            <FaRegTrashAlt  title="delete" onClick={()=> dispatch(deltodo(ele.id))} />
            </div>
            })
        }
            

        </div>
        <div className="showitems">
            <button className='btn effect'onClick={()=> dispatch(remove(inputdata))} >remove all <span>Checklist</span></button>
        </div>
      </div>
       
      </div> 

        </>
    )
}

export default ToDo
