document.addEventListener("DOMContentLoaded", submitData);

function submitData(name = "Steve", email = "steve@steve.com") {
	const url = "http://localhost:3000/users";
	const userData = {
		name: name,
		email: email,
	};
	const configurationObject = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		body: JSON.stringify(userData),
	};
	return fetch(url, configurationObject)
		.then((res) => res.json())
		.then((resID) => {
			document.body.innerHTML = resID.id;
		})
		.catch((error) => {
			document.body.append(error.message);
		});
}
