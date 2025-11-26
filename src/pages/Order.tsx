import React from 'react'
import './order.css'

const Order = () => {
  return (
    <div className='order-container'>
    <div className=''>
      <h1>Request a Service</h1>
    </div>
    <div>
        <h2>Gravure Link Work Order</h2>
        <form >
            <div>
                <span  >Name of Company</span><br />
                <input type="text" placeholder='First' required name="" id="" className='input' />
                <input type="text" placeholder='last' required name="" id="" className='input' />
            </div>
            <div>
                <span>Department</span>
                <input type="text"  name="" id="" className='input' />
                <span>Date of request</span>
                <input type="date" placeholder='last' name="" id="" className='input' />
            </div>
            <div>
                <span>Types of work to be Performed</span>
                <select name="work-to-be-performed" id="" className='input'>
                  <option value="IT-Support">
                    IT Support
                  </option>
                  <option value="building-maintenance">Building Maintenance</option>
                </select>
                <span>Description of work to be completed</span>
                <input type="date" placeholder='last' name="" id="" className='input' />
            </div>

        </form>
    </div>

    </div>
  )
}

export default Order
