import React, { useState } from 'react'
import './Order.css'

const Order = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [department, setDepartment] = useState("");
  const [date, setDate] = useState("");
  const [workToBePerformed, setWorkToBePerformed] = useState("");
  const [description, setDescription] = useState("");
  const [priorityOfWork, setProprityOfWork] = useState("");

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log({
      firstName,
      lastName,
      department,
      date,
      workToBePerformed,
      description,
      priorityOfWork
    });
    setFirstName("");
    setLastName("");
    setDepartment("");
    setDate("");
    setWorkToBePerformed("");
    setDescription("");
    setProprityOfWork("")
  };

  return (
    <div className='order-container'>
      <div className=''>
        <h1>Request a Service</h1>
      </div>
      <div className='form-container'>
        <h2>Gravure Link Work Order</h2>
        <form onSubmit={handleSubmit} >
          <div>
            <label htmlFor='firstname'>Name of Company*</label><br />
            <input type="text" name='first' placeholder='First' required className='input' 
              value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            
            <input type="text" placeholder='Last' className='input company-name-last'
              value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </div>

          <div>
            <label htmlFor='department'>Department*</label> <br />
            <input type="text" name='deparment' placeholder='department' className='input'
              value={department} onChange={(e) => setDepartment(e.target.value)} /><br />

            <label htmlFor='date'>Date of request</label> <br />
            <input type="date" name='date' className='input' 
              value={date} onChange={(e) => setDate(e.target.value)} />
          </div>

          <div>
            <label >Types of work to be Performed*</label> <br />
            <select className='input'
            name='workToBePerformed'
              value={workToBePerformed}
              onChange={(e) => setWorkToBePerformed(e.target.value)}
            >
              <option value="">Select</option>
              <option value="IT-Support">IT Support</option>
              <option value="building-maintenance">Building Maintenance</option>
            </select>
          </div>

          <div>
            <label htmlFor='priorityofWork'>Priority of work*</label><br />
            <select className='input' 
              value={priorityOfWork}
              name='priorityofWork' 
              onChange={(e) => setProprityOfWork(e.target.value)}
            >
              <option value="">Select</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div><br />

          <div>
            <label htmlFor='description'>Description of work to be completed*</label> <br />
            <input type="text" name='description' placeholder='description' className='input'
              value={description} onChange={(e) => setDescription(e.target.value)} />
          </div>

          {/* <button type='submit'>Submit</button> */}
        </form>
      </div>
    </div>
  )
}

export default Order
