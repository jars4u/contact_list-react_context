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

			URLBASE: "https://playground.4geeks.com/apis/fake/contact/",
			USERBASE: "myAgenda",
			contacts: [],
			id: "",
		},
		actions: {

			getAllContact: async () => {
				try {
					let response = await fetch(`${URLBASE}/agenda/${USERBASE}`)
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
			}

		}
	};
};

export default getState;
