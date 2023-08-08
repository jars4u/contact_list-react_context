import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext.js";
import { ContactCard } from "../component/contactCard.js";
import { Link, useParams } from "react-router-dom";
import "../../styles/home.css";


const initialState = {
	full_name: "",
	email: "",
	address: "",
	phone: ""
}


export const AddContact = ({ update }) => {

	const { actions, store } = useContext(Context)
	const { contacts } = store

	const [contact, setContact] = useState(initialState)

	const params = useParams()


	// function findContact() {
	// 	let exists = store.allContacts.find((item) => item.id == params.contactId)
	// 	if (exists) {
	// 		setContact(
	// 			exists
	// 		)
	// 	}
	// }

	function handleChange({ target }) {
		setContact({
			...contact,
			[target.name]: target.value,
			agenda_slug: "myAgenda"
		})
	}

	function handleSubmit(event) {
		event.preventDefault()
		actions.createContact(contact);
		// console.log(update)

		// if (contact) {

		// 	if (update) { //verifica que se va a hacer un update
		// 		allContacts.map((item, index) => {
		// 			//console.log(item.id)
		// 			if (update) {
		// 				actions.updateContact(contact, item.id)
		// 			}
		// 		})
		// 	} else {
		// 		actions.createContact(contact);
		// 	}
		// 	setContact(
		// 		{
		// 			full_name: "",
		// 			email: "",
		// 			address: "",
		// 			phone: ""
		// 		}
		// 	)
		// }
	}

	useEffect(() => {
		if (params.contactId) {
			findContact()
		}
	}, [])

	return (
		<div className="container p-5">

			{
				update ?
					<h1 className="text-center">Actualizar contacto</h1>
					:
					<h1 className="text-center">Agregar un nuevo contacto</h1>
			}


			<form onSubmit={handleSubmit}>

				<div className="pb-2">
					<label htmlFor="full_name" className="form-label">Nombre Completo</label>
					<input
						type="text"
						className="form-control"
						placeholder="Nombre y Apellido"
						name="full_name"
						onChange={handleChange}
						value={contact.full_name}
					/>
				</div>
				<div className="pb-2">
					<label htmlFor="email" className="form-label">Email</label>
					<input
						type="email"
						className="form-control"
						placeholder="Coloca un Email valido"
						name="email"
						onChange={handleChange}
						value={contact.email}
					/>
				</div>
				<div className="pb-2">
					<label htmlFor="phone" className="form-label">Telefono</label>
					<input
						type="tel"
						className="form-control"
						placeholder="Tu numero de telefono"
						name="phone"
						onChange={handleChange}
						value={contact.phone}
					/>
				</div>
				<div className="pb-2">
					<label htmlFor="address" className="form-label">Direccion</label>
					<input
						type="text"
						className="form-control"
						placeholder="Coloca tu direccion"
						name="address"
						onChange={handleChange}
						value={contact.address}
					/>
				</div>

				<div className="d-flex justify-content-end pt-3">
					<div className="pe-3">
						<Link to={"/"}>
							<button type="button" className="btn btn-danger">Cancelar</button>
						</Link>
					</div>
					<div>
						<Link to={"/"}>
							<button type="submit" className="btn btn-primary">Guardar</button>
						</Link>
					</div>
				</div>


			</form>

		</div>
	)
}
