const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			// demo: [
			// 	{
			// 		title: "FIRST",
			// 		background: "white",
			// 		initial: "white"
			// 	},
			// 	{
			// 		title: "SECOND",
			// 		background: "white",
			// 		initial: "white"
			// 	}
			// ]

			urlBase: "https://playground.4geeks.com/apis/fake/contact/",
			userName: "myAgenda",
			contacts: [],
			id: "",
		},
		actions: {

			createContact: async (contact) => {
				try {
					let response = await fetch(getStore().urlBase, {
						method: "POST",
						headers: {
							"Content-type": "application/json"
						},
						body: JSON.stringify(contact),
					})
					console.log(response)
					if (response.ok) {
						getActions().getAllContact()

					} else {
						console.log("some error creating on flux")
					}
				} catch (error) {
					console.log(error)
				}
			},


			getAllContact: async () => {
				try {
					let response = await fetch(getStore().urlBase + "agenda/" + getStore().userName)
					let data = await response.json()

					if (response.ok) {
						setStore({
							contacts: data
						})
					} else {
						console.log("some error on flux function")
					}
				} catch (error) {
					console.log(error)
				}
			},


			deleteContact: async (id) => {
				try {
					let response = await fetch(getStore().urlBase + `${id}`, {
						method: "DELETE"
					})

					if (response.ok) {
						getActions().getAllContact()
					} else {
						console.log("some error on flux delete function")
					}

				} catch {
					console.log(error)
				}
			},

			updateContact: async (id, contact) => {
				try {
					let response = await fetch(getStore().urlBase + `${id}`, {
						method: "PUT",
						headers: {
							"Content-type": "application/json"
						},
						body: JSON.stringify(contact)
					})

					if (response.ok) {
						getActions().getAllContact()
					} else {
						console.log("some error creating contact")
					}
				} catch (error) {
					console.log(error)

				}
			}



		}
	};
};

export default getState;
