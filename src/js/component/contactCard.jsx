import React, { useContext, useEffect, useState } from 'react';
import { Context } from "../store/appContext.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Link } from "react-router-dom";



export const ContactCard = ({ key, contact }) => {
    const { store, actions } = useContext(Context);

    return (
        <>
            <div className='container col-6 col-lg-4'>
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="https://img.freepik.com/iconos-gratis/usuario_318-928479.jpg" className="img-fluid rounded-1 p-2" alt="contact-image" />
                        </div>
                        <div className="col-md-8">
                            <span>
                                <i className="fa-solid fa-pencil"></i>
                                <i className="fa-solid fa-trash-can"></i>
                            </span>
                            <div className="card-body m-2">
                                <h5 className="card-title fs-3 p-0 m-0">Juan A. Ramos S.</h5>
                                <p className="card-text p-0 m-0">Urb. La Alhambra, calle 11A #8-36.</p>
                                <p className="card-text p-0 m-0">0414-9630979</p>
                                <p className="card-text p-0 m-0">jars4u2@gmail.com</p>
                            </div>
                            {/* <div className="card-body m-2">
                                <h5 className="card-title fs-3 p-0 m-0">{contact.full_name}</h5>
                                <p className="card-text p-0 m-0">{contact.address}</p>
                                <p className="card-text p-0 m-0">{contact.phone}</p>
                                <p className="card-text p-0 m-0">{contact.email}</p>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
};

