import React from 'react'
import Input from '../../components/Input'
import './Category.css'

const Category = ({handleChange}) => {
  return (
    <>
      <h2 className="sidebar-title">Category</h2>
      <div>
        <label className="sidebar-label-container">
        {/* value="" because we are going to be selecting everything */}
        <input onChange={handleChange} type="radio" value="" name="test"/>
        <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="sneakers"
          title="Sneakers"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="flats"
          title="Flats"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="sandals"
          title="Sandals"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="heels"
          title="Heels"
          name="test"
        />
      </div>
    </>
  )
}

export default Category