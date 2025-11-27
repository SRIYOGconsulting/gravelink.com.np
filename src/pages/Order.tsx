import React, { useState } from 'react'
import './Order.css'

const Order = () => {
  const [firstname, setFirstName] = useState("")
  const [lastName, setLastName] = useState("");
  const [department, setDepartment] = useState("");
  const [date, setDate] = useState(Date);
  const [workToBePerformed, setWorkToBePerformed] = useState("");
  const [description, setDescription] = useState("");


  const handleSubmit=()=>{

  }

  return (
    <div className='order-container'>
      <div className=''>
        <h1>Request a Service</h1>
      </div>
      <div>
        <h2>Gravure Link Work Order</h2>
        <form onSubmit={handleSubmit} >
          <div>
            <span >Name of Company</span><br />
            <input type="text" placeholder='First' required name="name" id="" className='input' value={firstname} onChange={(e) => setFirstName(e.target.value)} />
            <input type="text" placeholder='last' required name="" id="" className='input conpany-name-last' value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </div>
          <div>
            <span>Department</span> <br />
            <input type="text" placeholder='department' name="" id="" className='input' value={department} onChange={(e) => setDepartment(e.target.value)} /><br />
            <span>Date of request</span> <br />
            <input type="date" placeholder='last' name="" id="" className='input' />
          </div>
          <div>
            <span>Types of work to be Performed</span> <br />
            <select name="work-to-be-performed" id="" className='input'  >
              <option value="IT-Support">
                IT Support
              </option>
              <option value="building-maintenance">Building Maintenance</option>
            </select> <br />
          </div>
          <div>
            <span>Priority of work</span><br />
            <select name="" id="" className='input'>
              <option value="low">Low</option>
              <option value="Medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div><br />
          <div>
            <span>Description of work to be completed</span> <br />
            <input type="text" placeholder='description' name="" id="" className='input' value={description} onChange={(e) => setDescription(e.target.value)} />
          </div>

          <button type='submit'>Submit</button>
        </form>
      </div>

    </div>
  )
}

export default Order
