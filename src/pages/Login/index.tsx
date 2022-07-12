import { useState } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import styles from './styles.module.scss';
import { Request } from '../../utils/axios.utils';
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";

interface IFormLogin {
	email: string;
	password: string;
}

export function Login() {
	const [ form, setForm ] = useState<IFormLogin>({
		email: '',
		password: ''
	});
	const navigate = useNavigate();
	const alert = useAlert();

	function auth() {
		
		Request({url: `/auth`, method: 'post', data: form})
			.then(response => {
					const token = response.data.token ? response.data.token : '';
					localStorage.setItem('user_token', token);
					navigate(`/home`)
			})
			.catch(exception => {
				console.error(exception);
				alert.error('Erro ao efetuar login')
			}) 
	}

	return (
		<div className={styles.login}>
				<div className={styles.title}>Login</div>
				<Input 
					type="email"
					name="email"
					id="email"
					label="Digite seu email"
					onChange={(event) => {setForm({email: event.target.value, password: form.password})}}
					value={form.email}
				/>
				<Input 
					type="password"
					name="password"
					id="password"
					label="Digite sua senha"
					onChange={(event) => {setForm({email: form.email, password: event.target.value})}}
					value={form.password}
				/>

				<Button 
					text="Login"
					onClick={() => auth()}
				/>
			</div>
		
	
	)
}