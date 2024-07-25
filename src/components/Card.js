import React from 'react'
import card from '../data/card.avif'
const Card = ({item}) => {
    console.log(item)
  return (
    <>
    <div>
    <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={card}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.complaintName}
      <div className="badge badge-secondary"></div>
    </h2>
    <p>{item.complaintDescription}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Status: {item.status}</div>
      <div className="badge badge-outline">{item.department}</div>
    </div>
  </div>
</div>

<div className="flex w-52 flex-col gap-4 pt-5">
  <div className="skeleton h-32 w-full"></div>
  <div className="skeleton h-4 w-28"></div>
  <div className="skeleton h-4 w-full"></div>
  <div className="skeleton h-4 w-full"></div>
</div>
    </div>
    </>
  )
}

export default Card