export const authentication = (username, password) => {
	return new Promise((resolve, reject) => {
		username === 'admin' && password === 'a' ? resolve({ username: 'admin', displayName: 'Administrador' }) : reject(false)
	})
}
