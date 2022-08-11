import React from 'react'
import Modal from './Modal'

const Project = ({ item }) => {
  const { id, image, category, name } = item;
  return (
    <>
      <div key={id} className="flex flex-col items-center text-center">
        <div className="mb-8">
          <img className="rounded-2xl" src={image} alt="" />
        </div>
        <p className="capitalize text-accent text-sm mb-3">{category}</p>
        <h3 className="text-2xl font-semibold capitalize mb-3">{name}</h3>
        <Modal item={item} />
      </div>

    </>
  )
}

export default Project
