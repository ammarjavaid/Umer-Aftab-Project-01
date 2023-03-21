import React, { useState } from 'react'
import Topbar from '../../layout/topbar/Topbar'
import Sidebar from '../../layout/sidebar/Sidebar'
import { BsFillTrashFill } from 'react-icons/bs';
import "./services.scss"

const Services = () => {

  const [open, setOpen] = useState(false)

  const handle = () => {
    setOpen(!open)
  }

  return (
    <>
      <Sidebar open={open} setOpen={setOpen} handle={handle} />
      <div className="layout-2">
        <Topbar open={open} setOpen={setOpen} handle={handle} />
        <div className='category' style={{ color: "#fff", padding: "40px" }}>
                    <h2> Sub-Category </h2>
                    <div className='input__field'>
                        <select name="category" id="category">
                            <option value="Select Category">Select Sub-Category</option>
                            <option value="Baby Care">Baby Care</option>
                            <option value="Shoes">Shoes</option>
                            <option value="Electronic">Electronic</option>
                            <option value="Computers">Computers</option>
                        </select>
                        <input type="text" placeholder='Enter here...' />
                        <button className="sub__btn"> Create </button>
                    </div>

                    <div className='box'>
                        <div className='one__box'>
                            <h3 style={{ fontWeight: "bold", paddingBottom: "10px" }}> Dell </h3>
                            <h4> Television (TV), the electronic delivery of moving images and sound from a source to a receiver.</h4>
                            <h4 style={{ paddingBottom: "10px" }}>  $100.00  </h4>
                            <button> <BsFillTrashFill /> Delete </button>
                        </div>
                        <div className='one__box'>
                            <h3 style={{ fontWeight: "bold", paddingBottom: "10px" }}> Lenovo </h3>
                            <h4> Television (TV), the electronic delivery of moving images and sound from a source to a receiver.</h4>
                            <h4 style={{ paddingBottom: "10px" }}>  $100.00  </h4>
                            <button> <BsFillTrashFill /> Delete </button>
                        </div>
                        <div className='one__box'>
                            <h3 style={{ fontWeight: "bold", paddingBottom: "10px" }}> HP </h3>
                            <h4> Television (TV), the electronic delivery of moving images and sound from a source to a receiver.</h4>
                            <h4 style={{ paddingBottom: "10px" }}>  $100.00  </h4>
                            <button> <BsFillTrashFill /> Delete </button>
                        </div>
                        <div className='one__box'>
                            <h3 style={{ fontWeight: "bold", paddingBottom: "10px" }}> Apple </h3>
                            <h4> Television (TV), the electronic delivery of moving images and sound from a source to a receiver.</h4>
                            <h4 style={{ paddingBottom: "10px" }}>  $100.00  </h4>
                            <button> <BsFillTrashFill /> Delete </button>
                        </div>
                    </div>
                </div>
      </div>
    </>
  )
}

export default Services