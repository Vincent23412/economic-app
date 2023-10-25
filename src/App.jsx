import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import OfficeInformation from './components/OfficeInformation'
import FoodPanda_Shop from './components/foodpanda'
import Ubereats_Store from './components/ubereat'
import OfficeInformationSticker from './components/OfficeSticker'
import  { OutOfOffice }  from './components/OfficeSticker'


function App() {
  return (
    <>
      <OfficeInformationSticker
            imgLink="https://econ.ntpu.edu.tw/storage/images/ZlP7DHjLRh8IeahmFoT1EMxkmCgaxYtguN76FqiW.jpg"
            name = "郭文宗"
            title = "教授"
            officeHour="Thu. 12:00 - 14:00"
            email="guowc@gm.ntpu.edu.tw"
            phone="886-2-86741111 ext. 67156"
            office="社3F16"          
      />
      <OutOfOffice/>
    </>
  )
}

export default App
