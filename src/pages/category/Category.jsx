import React, { useState } from 'react'
// import { Visibility } from '@mui/icons-material'
import Topbar from '../../layout/topbar/Topbar'
import Sidebar from '../../layout/sidebar/Sidebar'
// import { portfolio } from '../../DummyData'
import { BsFillTrashFill } from 'react-icons/bs';
import "./payment.scss"

// const allCategory = ["all", ...new Set(portfolio.map((item)=> item.category))]

const Category = () => {

    const [open, setOpen] = useState(false)
    const handle = () => {
        setOpen(!open)
    }

    //   const [list, setList] = useState(portfolio)
    //   const [category, setCategory] = useState(allCategory)

    //   const filterItems = (category) =>{
    //       const newItems = portfolio.filter((item)=> item.category === category)
    //       setList(newItems)

    //       if(category === "all"){
    //           setList(portfolio)
    //       }
    //   }

    return (
        <>
            <Sidebar open={open} setOpen={setOpen} handle={handle} />
            <div className="layout-2">
                <Topbar open={open} setOpen={setOpen} handle={handle} />
                <div className='category' style={{ color: "#fff", padding: "40px" }}>
                    <h2> Category </h2>
                    <div className='input__field'>
                        <select name="category" id="category">
                            <option value="Select Category">Select Category</option>
                            <option value="Baby Care">Baby Care</option>
                            <option value="Shoes">Shoes</option>
                            <option value="Electronic">Electronic</option>
                            <option value="Computers">Computers</option>
                        </select>
                        <button className="sub__btn"> Create </button>
                    </div>

                    <div className='box'>
                        <div className='one__box'>
                            <h3 style={{ fontWeight: "bold", paddingBottom: "10px" }}> Television </h3>
                            <h4> Television (TV), the electronic delivery of moving images and sound from a source to a receiver.</h4>
                            <h4 style={{ paddingBottom: "10px" }}>  $100.00  </h4>
                            <button> <BsFillTrashFill /> Delete </button>
                        </div>
                        <div className='one__box'>
                            <h3 style={{ fontWeight: "bold", paddingBottom: "10px" }}> Television </h3>
                            <h4> Television (TV), the electronic delivery of moving images and sound from a source to a receiver.</h4>
                            <h4 style={{ paddingBottom: "10px" }}>  $100.00  </h4>
                            <button> <BsFillTrashFill /> Delete </button>
                        </div>
                        <div className='one__box'>
                            <h3 style={{ fontWeight: "bold", paddingBottom: "10px" }}> Television </h3>
                            <h4> Television (TV), the electronic delivery of moving images and sound from a source to a receiver.</h4>
                            <h4 style={{ paddingBottom: "10px" }}>  $100.00  </h4>
                            <button> <BsFillTrashFill /> Delete </button>
                        </div>
                        <div className='one__box'>
                            <h3 style={{ fontWeight: "bold", paddingBottom: "10px" }}> Television </h3>
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

export default Category

















{/* <article>
<div className='container'>

    <div className='catButton'>
        {
            category.map((category) => (
                <button className='primaryBtn' onClick={()=> filterItems(category)}>
                    {category}
                </button>
            ))
        }
    </div>
    

    <div className='content grid3'>
        {
            list.map((item, i) => (
                <div className='box'>
                    <div className='img'>
                        <img src={item.cover} alt="img" />
                    </div>
                    <div className='overlay'>
                        <h3> {item.title} </h3>
                        <span> {item.name} </span>
                        <Visibility />
                    </div>
                </div>
            ))
        }
    </div>
</div>
</article> */}