import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Modal from "../Components/Modal"
import { useState } from 'react'
import React from 'react'
import BasicButtons from '../Components/Button'
import { Button } from '@mui/material'
import Footer from '../Components/Footer'
import LoadingSpinner from '../Components/Loader'

const Home: NextPage = (Iprops) => {
     const [ButtonText, setButtonText] = useState("")
     const [headerText, setHeaderText] = useState("Heal")
     const [open, setOpen] = useState(false);
     const handleOpen = () => setOpen(true);
     const handleClose = () => setOpen(false);
     const [modalContent, setModalContent] = useState(
     <p>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
     </p>
     )
 
     const [users, setUsers] = useState([]);
     const [isLoading, setIsLoading] = useState(false);
     const [errorMessage, setErrorMessage] = useState("");
     // const handleFetch = () => {
     //   setIsLoading(true);
     
     // };
   
     

  return (
    <div className={styles.container}>
          <Head>
          <title>ASA-HEALER</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
          </Head  >
          <main className={styles.main}>
               <h1 className={styles.title}>
                    Welcome to <a href="https://nextjs.org">ASA-HEALER!</a> 
               </h1>
               
               <p className={styles.description}>
                    <BasicButtons ButtonText={'Check'} onClick={handleOpen} disabled={false}/>
               </p>
               
               <LoadingSpinner /> 
               {/* <BasicButtons ButtonText={'goat'} onClick={handleFetch} disabled={isLoading} /> */} 
          </main>
          <Footer />
          <Modal 
               modalContent={modalContent} 
               headerText={headerText} 
               open={open}  
               handleOpen={false} 
               setOpen={false} 
               handleClose={handleClose}       
          />
    </div>
  )
}

export default Home
