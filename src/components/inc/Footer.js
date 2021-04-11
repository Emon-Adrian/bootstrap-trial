import React from 'react'
import {Link} from 'react-router-dom'
const Footer = () => {
    return (
        <section className='section footer bg-dark text-white'>
            <div className="container">
                <div className="row">
                <div className="col-md-4">
                  <h6>Compny Information</h6>
                  <hr/>
                  <p className='text-white'>
                  content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                  </p>     
               </div>
               <div className="col-md-4">
                  <h6>Quick Links</h6>
                  <hr/>
                  <div><Link to='/'>Home</Link></div>    
                  <div><Link to='/about'>About</Link></div>    
                  <div><Link to='/contact'>Contact</Link></div>    
                  <div><Link to='/'>Blog</Link></div>    
               </div>
               <div className="col-md-4">
                  <h6>Compny Information</h6>
                  <hr/>
                  <div><p className="text-white mb-1">#64, Kampala</p></div>     
                  <div><p className="text-white mb-1">+91 000002948, Kampala</p></div>     
                  <div><p className="text-white mb-1">+64, 94723</p></div>     
                  <div><p className="text-white mb-1">email20:gmail.com</p></div>     
               </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
