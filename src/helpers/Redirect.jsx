import { useNavigate } from 'react-router-dom';

const Redirect = () => {
	const navigate = useNavigate();
	(() => navigate('/planets/earth/overview'))();
	return <h1>this should work</h1>;
};

export default Redirect;
