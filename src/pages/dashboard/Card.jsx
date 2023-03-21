import React from 'react'
import { useState } from 'react'
// import { doc, updateDoc } from 'firebase/firestore';
// import { db } from '../../Firebase';

const Card = ({ image, location, name }) => {

    const [ban, setBan] = useState(true);
    // const [banUser, setBanUser] = useState('');
    // const [id, setId] = useState('');

    const check = () => {
        setBan(false)
        // const docRef = doc(db, 'Users', ban)
        // updateDoc(docRef, { ban })
        //     .then(() => {
        //         console.log("yes!!")
        //         setBan(false)
        //     }).catch(error => {
        //         console.log(error.message)
        //     })
    }

    const checkOne = () => {
        setBan(true)
    }

    // const handleSubmit = (e)=>{
    //    const docRef = doc(db, 'Buttons' )
    //     updateDoc(docRef, {ban})
    //     .then((response)=>{
    //         console.log(response)
    //         alert("success")
    //     }).catch(error =>{
    //         console.log(error.message)
    //         alert("error!")
    //     })
    // }

    // const docRef = doc(db, 'Users', banUser)
    // updateDoc(docRef, {banUser})
    // .then((response)=>{
    //     console.log(response)
    // }).catch(error =>{
    //     console.log(error.message)
    // })

    return (
        <>
            <div className='one'>
                <div className='left'>
                    <div className='pic'>
                        <img src={image} alt='' />
                    </div>
                    <div>
                        <h3> {name} </h3>
                        <h6> {location} </h6>
                    </div>
                </div>
                <div className='right'>
                    {ban ? <div className='ban' onClick={check}><button> Ban </button></div>
                        :
                        <div className='unban' onClick={checkOne}><button> Unban </button></div>
                    }


                </div>
            </div>
        </>
    )
}

export default Card