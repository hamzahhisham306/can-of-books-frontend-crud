import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
class Example extends React.Component {
    constructor(props){
        super(props);
        this.state={
            show:false,
        }
    }


   handleClose = () =>{
    this.setState({
        show:false,
    })
   };
   handleShow = () => {
        this.setState({
        show:true
        })
   };
render(){
  return (
    <div>

      <Button onClick={this.handleShow} className="buttonmodule">
        Click to add new book
      </Button>

      <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form onSubmit={this.props.createBook} className="formmodle">
        <br/>
        <label htmlFor=''>Book Name :  </label>
        <input type='test'id='bookName'/>
        <br/><br/>
        <label htmlFor=''>Book description:</label>
        <input type="text"  id="description"/>
        <br/><br/>
        <button type='submit'>Click to Save</button>
      </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={this.handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
}

export default Example;