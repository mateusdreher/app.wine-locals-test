import axios from 'axios';

const client = axios.create({baseURL: 'http://localhost:3000/'})

export function Request({...options}) {
	const token = localStorage.getItem('user_token');
	client.defaults.headers.common.Authorization = `Bearer ${token}`;
	client.defaults.headers.post['Content-Type'] = 'application/json';
	client.defaults.headers.post['Accept'] = 'application/json';

	const onSuccess = (response) => response;
	const onError = (error) => {
		if(error.response.status === 401) {
			localStorage.clear();
			window.location.href = `${window.location.protocol}//${window.location.host}/login`
		}
		return error;
	}

	return client(options).then(onSuccess).catch(onError);
}