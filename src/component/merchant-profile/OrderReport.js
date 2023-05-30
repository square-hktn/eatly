import React from "react";
import MealCard from "./MostOrderedMealCard";
import OrderReportMealCard from "./OrderReportMealCard";

function OrderReport() {
  return (
    <div class='merchant-profile-most-ordered mr-3'>
      <div class=' mt-5 flex w-full p-4 '>
        <div class='flex w-1/2'>
          <p class='text-xl font-bold'>Order Report</p>
        </div>
        <div class='flex w-1/2 justify-end'>
          <select class='merchant-profile-card-select' >
            <option vlaue="Filter Order"><p class="font-semibold">Filter orders</p></option>
            <option value='Pending'>Pending</option>
            <option value='Completed'>Completed</option>
            <option value='Cancelled'>Cancelled</option>
          </select>
        </div>
      </div>
      <tr class='flex w-full border-b-2 border-black p-5'>
        <th class='flex w-1/4 '>
          <p>Order ID</p>
        </th>
        <th class='flex w-1/4 '>
          <p> Menu</p>
        </th>
        <th class='flex w-1/4 justify-center'>
          <p>Total Payment</p>
        </th>
        <th class='flex w-1/4 justify-center'>
          <p>status</p>
        </th>
      </tr>
      <div class='h-[40vh] overflow-y-scroll overflow-hidden'>
        <OrderReportMealCard/>
        <OrderReportMealCard/>
        <OrderReportMealCard/>
        <OrderReportMealCard/>


      </div>
    </div>
  );
}

export default OrderReport;
