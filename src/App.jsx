import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FounderImages } from './components/FounderImages'
import { Card } from './components/Card'
import { CardWithText } from './components/CardWithText'
import { Nav } from './components/Nav'
import { TrafficChart } from './components/Graphs/TrafficChart'
import { SalesChart } from './components/Graphs/SalesChart'
import { RevenueChart } from './components/Graphs/RevenueChart'
import { AllCharts } from './components/Graphs/AllCharts'
import { Footer } from './components/Footer'

function App() {

  return (
    <div className='app__container w-5/6 m-auto'>
    <Nav/>
 

<CardWithText/>


<AllCharts/>

<Footer/>
    </div>
  )
}

export default App
