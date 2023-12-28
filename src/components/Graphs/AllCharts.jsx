import React from 'react'
import { RevenueChart } from './RevenueChart'
import { SalesChart } from './SalesChart'
import { TrafficChart } from './TrafficChart'

export const AllCharts = () => {
  return (
 

<div class="grid md:grid-cols-3">
  <div class="max-w-96 m-auto m-2 mt-8 rounded-md "><RevenueChart/></div>
  <div class="max-w-96 m-auto m-2 mt-8"><SalesChart/></div>
  <div class="max-w-96 m-auto m-2 mt-8"><TrafficChart/></div>

</div>

  )
}
