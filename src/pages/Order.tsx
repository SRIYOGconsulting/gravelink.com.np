import React from 'react'

const Order = () => {
  return (
    <div>
    <div>
      <h1>Request a Service</h1>
    </div>
    <div>
        <h2>Gravure Link Work Order</h2>
        <form >
            <div>
                <span >Name of Company</span>
                <input type="text" placeholder='First' required name="" id="" />
                <input type="text" placeholder='last' required name="" id="" />
            </div>
            <div>
                <span>Department</span>
                <input type="text" placeholder='First' name="" id="" />
                <span>Date of request</span>
                <input type="date" placeholder='last' name="" id="" />
            </div>
            <div>
                <span>Types of work to be Performed</span>
                <option value="">
    

                </option>
                <span>Description of work to be completed</span>
                <input type="date" placeholder='last' name="" id="" />
            </div>

        </form>
    </div>

    </div>
  )
}

export default Order
