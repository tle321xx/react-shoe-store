import Category from './Category/Category'
import Price from './Price/Price'
import Colors from './Colors/Colors'
import './Sidebar.css'
import {AiOutlineShoppingCart} from 'react-icons/ai'

const Sidebar = ({handleChange}) => {
    // console.log(handleChange)

  return (
    <>
        <section className="sidebar">
            <div className="logo-container">
                <h1><AiOutlineShoppingCart/></h1>
            </div>
            {/* send handlechange แบบต่อเนื่อง */}
            <Category handleChange={handleChange}/>
            <Price handleChange={handleChange}/>
            <Colors handleChange={handleChange}/>
        </section>
    </>
  )
}

export default Sidebar