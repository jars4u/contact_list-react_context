import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js"
import { ContactCard } from "../component/contactCard.jsx";
import "../../styles/home.css";

export const Home = () => {
	const { actions, store } = useContext(Context)
	const { contacts } = store

	return (
		<>
			< div className="container" >
				<Link to="/addContact">
					<button className="btn btn-primary m-3">Agrega un nuevo contacto</button>
				</Link>
			</div >

			<ContactCard />

			{/* {contacts.map((item, index) => {

				return (
					<>
						<ContactCard key={index} contact={item} />
					</>
				)
			})} */}

		</>
	)
}
