import { Component } from 'react';
import Header from './Header/Header';
import Modal from './Modal/Modal';
import ToDoListV1 from './ToDoListV1/ToDoList';


class App extends Component {
  state = { isShowModal: false };
  toggleModal = () => {
    this.setState(prev => ({ isShowModal: !prev.isShowModal }));
  };

  render() {
    return (
      <>
        <Header toggleModal={this.toggleModal} />
        {this.state.isShowModal && (
          <Modal toggleModal={this.toggleModal}>Text for Modal</Modal>
        )}
        <ToDoListV1 />
      </>
    );
  }
}

export default App;
