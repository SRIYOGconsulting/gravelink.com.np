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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ firstName, lastName, department, date, workToBePerformed, description, priorityOfWork });
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
      
      <h1>Request a Service</h1>
      <div className='order-header-text'><h2>Gravure Link Work Order</h2></div>

      <div className='form-container'>
        

        <form onSubmit={handleSubmit}>

          <div className="row"> 
            <div className="col">
                <label>Name of Company <span className="required-star">*</span></label><br />
                <input
                  type="text"
                  placeholder="First"
                  required
                  className="input"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
            </div>
            <div className="col">
                <label></label><br /> 
                <input
                  type="text"
                  placeholder="Last"
                  className="input"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label>Department </label><br />
              <input
                type="text"
                className="input"
                placeholder="Department"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              />
            </div>

            <div className="col">
              <label>Date of request </label><br />
              <input
                type="date"
                className="input"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </div>

        
          <div className="row">
            <div className="col">
              <label>Types of work to be Performed</label><br />
              <select
                className="input"
                value={workToBePerformed}
                onChange={(e) => setWorkToBePerformed(e.target.value)}
              >
                <option value="">Select</option>
                <option value="IT-Support">IT Support</option>
                <option value="building-maintenance">Building Maintenance</option>
              </select>
            </div>

            <div className="col">
              <label>Priority of work <span className="required-star">*</span></label><br />
              <select
                className="input"
                value={priorityOfWork}
                onChange={(e) => setProprityOfWork(e.target.value)}
              >
                <option value="">Select</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>

          <div>
            <label>Description of work to be completed</label><br />
            <textarea
              className="input"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="btn">
          <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Order;