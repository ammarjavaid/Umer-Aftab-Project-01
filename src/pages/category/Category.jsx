import React, { useEffect, useState } from 'react'
import Topbar from '../../layout/topbar/Topbar'
import Sidebar from '../../layout/sidebar/Sidebar'
import { collection, addDoc, onSnapshot, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../Firebase';
import { BsFillTrashFill } from 'react-icons/bs';
import { toast } from 'react-toastify';
import "./category.scss"
import { IoMdAdd } from "react-icons/io";

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
                        <input type="text" placeholder='Enter Your Category...' name='myCategory' value={myCategory} onChange={(e) => setMyCategory(e.target.value)} />
                        <button onClick={handleSubmit} className="sub__btn"> Create </button>
                    </div>

                    <div className='box'>
                        {
                            posts.map((item) => (
                                <>
                                    <div className='one__box'>
                                        <IoMdAdd className='plus' type='button' data-toggle="modal" data-target="#myModal"/>
                                        <h2> {item.myCategory} </h2>
                                        <button onClick={() => deletePost(item.id)}> <BsFillTrashFill /> Delete </button>
                                    </div>





                        <div className="modal fade" id="myModal" role="dialog">
                            <div className="modal-dialog">


                                <div className="modal-content">
                                    <div className="modal-header">
                                        
                                    
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                        <h4 className="modal-title"> Sub-Category </h4>
                                    </div>
                                    <div className="modal-body">
                                    <div className='input__field__sub'>
                                        <select name="category" id="category">
                                        <option value="Select Category">Select Sub-Category</option>
                                        <option value={item.myCategory}>{item.myCategory}</option>
                                        <option value={item.myCategory}>{item.myCategory}</option>
                                        <option value={item.myCategory}>{item.myCategory}</option>
                                        <option value={item.myCategory}>{item.myCategory}</option>
                                        </select>
                                        <input type="text" placeholder='Enter here...' name='subCategory'/>
                                        <button className="sub__btn"> Create </button>
                                    </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                    </div>
                                </div>

                            </div>
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