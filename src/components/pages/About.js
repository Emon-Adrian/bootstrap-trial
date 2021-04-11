import React from 'react'
import Vmc from './inc/Vmc'

const About = () => {
    return (
        <div>
        <section className="py-4 bg-info">
            <div className="container">
               <div className="row">
                 <div className="col-md-4 my-auto">
                     <h4>About Us</h4>
                 </div>
                 <div className="col-md-8 my-auto">
                  <h6 className="float-end">
                    Home / About Us
                  </h6>
                  </div>
               </div>
            </div>
        </section>
        <section className="section border-bottom">
            <div className="container">
               <h5 className="main-heading">Our Company</h5>
               <div className="underline"></div>
                 <p>
                 using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                 </p>
            </div>
        </section>
        {/* our vision, mission and values*/}
        <Vmc/>
        </div>
    )
}

export default About
