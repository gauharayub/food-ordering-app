import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import './Checkout.css'

function Checkout(props){
    let totalprice =0
    props.itemlist.forEach((item)=>{
            totalprice+=(item.price*item.quantity)
    })
    const [lgshow, setLgShow] = useState(false);
    const handleShow = () => setLgShow(true);
    const handleClose = () => setLgShow(false);
return (
    <>
    <Button variant="success" onClick={()=>{
                handleShow()
        }}>
        <i className="fa fa-shopping-cart fa-2x" aria-hidden="true"></i>
    </Button>

    {/* Modal for checkout screen...*/ }

    <Modal show={lgshow} 
        onHide={handleClose}
        aria-labelledby="example-modal-sizes-title-lg" 
        size="lg">
        <Modal.Header closeButton>
        <Modal.Title>
            <h2>Food Cart</h2>
        </Modal.Title>
        </Modal.Header>
        <Modal.Body className="payment" id="cart">
            {   props.itemlist.length===0?<div>Shopping Cart is Empty</div> :
                    <div>
                        <table>
                            <tr>
                            <th>Item</th>
                            <th>Size</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Total Price</th>
                            </tr>
                            {props.itemlist.map((item)=>
                                <tr>
                                    <td>{item.name}</td>
                                    <td>{item.checked===1 && 'small'}
                                         {item.checked===2 && 'medium'}
                                         {item.checked===3 && 'large'}
                                        </td>
                                    <td>{item.quantity}</td>
                                    <td>&#8377; {item.price}</td>
                                    <td>&#8377; {item.price*item.quantity}</td>   
                                </tr>
                        
                            )}

                        </table>
                            <div className="totalprice">Net Price = &#8377; {totalprice}</div>
                    </div>
                     
            }
        </Modal.Body>
        <Modal.Footer className="payment">
        <Button variant="success" onClick={handleClose}>
            Proceed to Payment
        </Button>
        </Modal.Footer>
    </Modal>
</>
)
}


export default Checkout