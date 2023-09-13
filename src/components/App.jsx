import { Component } from 'react';
import Header from './Header/Header';
import Modal from './Modal/Modal';
import ToDoListV1 from './ToDoListV1/ToDoList';
import FormLogin from './FormLogin/FormLogin';
import { nanoid } from 'nanoid';


class App extends Component {
  state = { isShowModal: false };

  // toggleModal = () => {
  //   this.setState(prev => ({ isShowModal: !prev.isShowModal }));
  // };

  showModal = () => {
		this.setState({ isShowModal: true })
	}

	closeModal = () => {
		this.setState({ isShowModal: false })
	}

	createUser = (data) => {
		const newUser = {
			...data,
			id: nanoid(),
      //id: useId(), // через Rewact нужно так
		}
		console.log('newUser :>> ', newUser)
	}

  render() {
    return (
      <div className='container'>
        {/* <Header toggleModal={this.toggleModal} />
        {this.state.isShowModal && (
          <Modal toggleModal={this.toggleModal}>Text for Modal</Modal>
        )} */}
        <Header showModal={this.showModal} />
        <ToDoListV1 />
        {this.state.isShowModal && (
					<Modal closeModal={this.closeModal}>
						<FormLogin
							closeModal={this.closeModal}
							createUser={this.createUser}
						/>
					</Modal>
				)}

      </div>
    );
  }
}

export default App;


// npm i nanoid