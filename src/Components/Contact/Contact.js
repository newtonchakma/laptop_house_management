import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt, faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
    return (
        <div id='contact' className="container mb-5 pb-5 mt-5">
           <div className="card">
           <div className="card-body">
                    <h1 className="text-center text-primary mb-4 mt-2 text-uppercase">Contact us</h1>
                   
                    <div className="contact"></div>
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="row pt-3">
                                <div className="col-lg-1 col-md-2 col-sm-2 col-2 offset-1">
                                        <span className="text-warning">
                                        <FontAwesomeIcon icon={faMapMarkedAlt} ></FontAwesomeIcon>
                                        </span>
                                </div>
                                  
                          
                            <div className="col-lg-10 col-md-9 col-sm-9 col-12">
                                <h3 className='font-weight-light'>Find us at office</h3>
                                <p>BLD Kogalnicenu, nr. 8,<br/>
                                 7354 Bucharest,<br/>Romania
                                </p>
                            </div>

                            <div className="row pt-3">
                                <div className="col-lg-1 col-md-2 col-sm-2 col-2 offset-1">

                                <span className="text-success">
                                        <FontAwesomeIcon icon={faPhoneSquareAlt} ></FontAwesomeIcon>
                                        </span>
                                </div>


                          
                            <div className="col-lg-10 col-md-9 col-sm-9 col-12">
                                <h3>Give us a ring</h3>
                                <p>Micheal Jordan,<br/>
                                 +40 784 324 820<br/>Mon - Fir,8:00-22:00
                                </p>
                            </div>
                            </div>
                        </div>
                        </div>

                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <form className=''>
                                <div className="form-group row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <label>First Name</label>
                                        <input type="text" className='form-control' name="" id="" placeholder="First Name"/>
                                    </div>
                                    <div className=" col-lg-6 col-md-6 col-sm-12 col-12">
                                        <label>First Name</label>
                                        <input type="text" className='form-control' name="" id="" placeholder="First Name"/>
                                    </div>
                                    </div>
                          
                                  <label>Email</label>
                                <input type="email" className='form-control' name="" id="" placeholder="Email"/>
                                  
                               <label>Your Massage</label>
                               <textarea placeholder='Massage' className='form-control' cols='10' rows='5'></textarea>
                               <button className='btn btn-primary me-auto float-end mt-2'>Send Message</button>
                            </form>
                        </div>
                    
                </div>
            </div>  
            </div>
            </div>  
        
    );
};

export default Contact;