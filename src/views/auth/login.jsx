import { connect } from 'react-redux';


function login(props) {
	return <div>
		login
	</div>
}

const mapStateToProps = (response) => ({response});

export default connect(mapStateToProps)(login);
