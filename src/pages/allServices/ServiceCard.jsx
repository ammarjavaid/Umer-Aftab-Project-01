import React, { useState } from "react"
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../Firebase';

const ServiceCard = ({ img, title, desc, price, id }) => {

    const [modalData, setModalData] = useState({ title, desc, price, id })
    // const [model, setModel] = useState(false);
    // const [temdata, setTemdata] = useState([]);

    // const getData = (img, title, desc) => {
    //     let temdata = [img, title, desc];
    //     setTemdata(item => [1, ...temdata]);
    //     return setModel(true)
    // }
    const showDetails = (id) =>{
        setModalData({title, desc, id, price})
        console.log(modalData)
    }

    function deletePost(id) {
        const docRef = doc(db, 'Post', id)
        deleteDoc(docRef)
          .then(() => {
            console.log('Document Deleated')
          }).catch((error) => {
            console.log(error.message)
          })
      }

    return (
        <>
            <div className="card" style={{ width: "18rem" }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className="card-text">{desc}</p>
                    <div className='butns'>
                        <div className='de'> <button type="button" data-toggle="modal" data-target="#myModal" onClick={()=> showDetails(id)}> Details </button> </div>
                        <div className='re'> <button onClick={() => deletePost(id)}> Remove </button> </div>
                    </div>
                </div>
            </div>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="myModal" role="dialog">
                <div className="modal-dialog">

                    {/* <!-- Modal content--> */}
                    <div className="modal-content">
                        <div className="modal-header">
                            {/* <p> {modalData.id} </p> */}
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title"> {modalData.title} </h4>
                        </div>
                        <div className="modal-body">
                            <img src={img} alt="" />
                            <p>{ modalData.desc }</p>
                            <p> ${modalData.price} </p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>

                </div>
            </div>


            {/* {
                model === true ? (
                    <>
                        <div className="modal show fade" style={{ display: "block", backgroundColor: "rgba(0,0,0,0.8)" }}>
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title">{temdata[2]}</h5>
                                        <button type="button" className="btn-close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <img src={temdata[1]} alt='' />
                                        <p>{temdata[3]}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ) : ''
            } */}
        </>
    )
}

export default ServiceCard