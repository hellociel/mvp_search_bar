import React, { Component } from "react";

function Row(props) {
  return (
    <>
      <tr>
        <td>{props.data.region}</td>
        <td>{props.data.country}</td>
        <td>{props.data.item_type}</td>
        <td>{props.data.sales_channel}</td>
        <td>{props.data.order_priority}</td>
        <td>{props.data.order_date.split("T")[0]}</td>
        <td>{props.data.order_id}</td>
        <td>{props.data.ship_date.split("T")[0]}</td>
        <td>{props.data.units_sold}</td>
        <td>{props.data.unit_price}</td>
        <td>{props.data.unit_cost}</td>
        <td>{props.data.total_revenue}</td>
        <td>{props.data.total_cost}</td>
        <td>{props.data.total_profit}</td>
      </tr>
    </>
  );
}

export default Row;

{
  /* {props.orders.map((order)=>(<th>))} */
}
