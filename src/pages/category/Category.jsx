import React, { useEffect, useState } from 'react'
// import { Visibility } from '@mui/icons-material'
import Topbar from '../../layout/topbar/Topbar'
import Sidebar from '../../layout/sidebar/Sidebar'
// import { portfolio } from '../../DummyData'
import { collection, addDoc, onSnapshot, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../Firebase';
import { BsFillTrashFill } from 'react-icons/bs';
import { ToastContainer, toast } from 'react-toastify';
import "./payment.scss"

// const allCategory = ["all", ...new Set(portfolio.map((item)=> item.category))]

const Category = () => {

    const [myCategory, setMyCategory] = useState()
    const [open, setOpen] = useState(false)

    const handle = () => {
        setOpen(!open)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (myCategory === '') {
            return
        }
        const categoryCollRef = collection(db, 'Category')
        addDoc(categoryCollRef, { myCategory })
            .then((response) => {
                console.log(response)
                toast.success(`Your category is ${myCategory}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                setMyCategory('')
            }).catch((error) => {
                console.log(error.message)
            })
    }


    const [posts, setPosts] = useState([]);

    useEffect(() => {
      console.log(posts)
    }, [])
  
    const getCollectionRef = collection(db, "Category");
    useEffect(() => {
      const unsubscribe = onSnapshot(getCollectionRef, snapshot => (
        setPosts(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
      ))
      return () => {
        unsubscribe();
        // console.log(unsubscribe());
      }
    });

    function deletePost(id) {
        const docRef = doc(db, 'Category', id)
        deleteDoc(docRef)
          .then(() => {
            console.log('Document Deleated')
          }).catch((error) => {
            console.log(error.message)
          })
      }

    return (
        <>
            <Sidebar open={open} setOpen={setOpen} handle={handle} />
            <div className="layout-2">
                <Topbar open={open} setOpen={setOpen} handle={handle} />
                <div className='category' style={{ color: "#fff", padding: "40px" }}>
                    <h2> Category </h2>
                    <div className='input__field'>
                        {/* <select name="category" id="category">
                            <option value="Select Category">Select Category</option>
                            <option value="Baby Care">Baby Care</option>
                            <option value="Shoes">Shoes</option>
                            <option value="Electronic">Electronic</option>
                            <option value="Computers">Computers</option>
                        </select> */}
                        <input type="text" placeholder='Enter Your Category...' name='myCategory' value={myCategory} onChange={(e) => setMyCategory(e.target.value)} />
                        <button onClick={handleSubmit} className="sub__btn"> Create </button>
                    </div>

                    <div className='box'>
                        {
                            posts.map((item) => (
                                <>
                                    <div className='one__box'>
                                        <h2> {item.myCategory} </h2>
                                        <button onClick={() => deletePost(item.id)}> <BsFillTrashFill /> Delete </button>
                                    </div>
                                </>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Category








                                       {/* <h3 style={{ fontWeight: "bold", paddingBottom: "10px" }}> Television </h3>
                            <h4> Television (TV), the electronic delivery of moving images and sound from a source to a receiver.</h4>
                            <h4 style={{ paddingBottom: "10px" }}>  $100.00  </h4> */}








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