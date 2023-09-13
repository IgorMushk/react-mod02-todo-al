const Header = ({toggleModal}) => {
	//const Header = ({ showModal }) => {
	return (
		<nav className='navbar bg-dark mb-3'>
			<div className='container-fluid'>
				<span className='navbar-brand mb-0 h1 text-success'>
					Navbar
				</span>
				<button 
					onClick ={toggleModal}
					//onClick={showModal}
					className='btn btn-outline-success'
				>
					Open Modal
				</button>
			</div>
		</nav>
	)
}

export default Header
