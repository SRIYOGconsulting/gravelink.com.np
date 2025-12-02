import React, { useState } from 'react'
import './Order.css'

const Order = () => {
  const [firstname, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [department, setDepartment] = useState("");
  const [date, setDate] = useState("");
  const [workToBePerformed, setWorkToBePerformed] = useState("");
  const [description, setDescription] = useState("");
  const [priorityofWorrk, setProprityofWork] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      firstname,
      lastName,
      department,
      date,
      workToBePerformed,
      description,
      priorityofWorrk
    });
  };

  return (
    <div className='order-container'>
      <div className=''>
        <h1>Request a Service</h1>
      </div>
      <div>
        <h2>Gravure Link Work Order</h2>
        <form onSubmit={handleSubmit} >
          <div>
            <span>Name of Company</span><br />
            <input type="text" placeholder='First' required className='input' 
              value={firstname} onChange={(e) => setFirstName(e.target.value)} />
            
            <input type="text" placeholder='Last' required className='input conpany-name-last'
              value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </div>

          <div>
            <span>Department</span> <br />
            <input type="text" placeholder='department' className='input'
              value={department} onChange={(e) => setDepartment(e.target.value)} /><br />

            <span>Date of request</span> <br />
            <input type="date" className='input' 
              value={date} onChange={(e) => setDate(e.target.value)} />
          </div>

          <div>
            <span>Types of work to be Performed</span> <br />
            <select className='input'
              value={workToBePerformed}
              onChange={(e) => setWorkToBePerformed(e.target.value)}
            >
              <option value="">Select</option>
              <option value="IT-Support">IT Support</option>
              <option value="building-maintenance">Building Maintenance</option>
            </select>
          </div>

          <div>
            <span>Priority of work</span><br />
            <select className='input' 
              value={priorityofWorrk} 
              onChange={(e) => setProprityofWork(e.target.value)}
            >
              <option value="">Select</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div><br />

          <div>
            <span>Description of work to be completed</span> <br />
            <input type="text" placeholder='description' className='input'
              value={description} onChange={(e) => setDescription(e.target.value)} />
          </div>

          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Order
