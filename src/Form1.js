import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';

import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';


import { Row } from "react-bootstrap";
import { formatMs } from "@material-ui/core";


 function Form1 () {
        const { register, handleSubmit, formState: { errors } } = useForm({mode:"onChange"});
        const onSubmit = (data) => {
            console.log(data);
        }
        return (
        <div>
            <div>  <h2>Applicant Info</h2></div>
          
            <Form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col col-3">
                        <Form.Group>
                        <label>First Name</label>
                    <input
                        placeholder='First Name'
                        className="form-control"
                        type="text"
                        {...register("firstName", { required: true, maxLength: 10, pattern:/^[A-Za-z]+$/is})}
                    />
                            {/* <Form.Label htmlFor="developer"
                   >Developer:</Form.Label>
                            <select className="form-control"   id="developer"
                    name="developer"  
                   >
                    <option value="" defaultValue> Choose
                    </option>
                    <option value="K.Mishra">K.Mishra</option>
                    <option value="Developer 1">Developer 1</option>
                    <option value="Developer 2">Developer 2</option>
                </select> */}
                        </Form.Group>
                        {errors.firstName && <p>Please check the First Name</p>}
                       
                    </div>
                    <div className="col col-3">
                        <Form.Group>
                            <Form.Label htmlFor="authorizedPerson"
                    >Authorized Person Name:</Form.Label>
                            <Form.Control type="text"  name="authorizedPerson"
                    id="authorizedPerson"
 />
               
                        </Form.Group>
                    </div>
                    <div className="col col-3">
                        <Form.Group>
                            <Form.Label htmlFor="panno"
                       >Pan No.:</Form.Label>
                            <Form.Control type="number" id="panno"
                        name="panno"  
                        />
                        </Form.Group>
                        
                    </div>
                </div>
                <div className="row">
                    <div className="col col-3">
                        <Form.Group>
                            <Form.Label htmlFor="mobileNo1"
                           >Authorized Mobile No.1.:</Form.Label>
                            <Form.Control type="number" id="mobileNo1"
                            name="mobileNo1" 
                             />
                        </Form.Group>
                       
                    </div>
                    <div className="col col-3">
                        <Form.Group>
                            <Form.Label htmlFor="mobileNo2"
                           >Authorized Mobile No.2.:</Form.Label>
                            <Form.Control type="number" id="mobileNo2"
                            name="mobileNo2" 
                             />
                        </Form.Group>
                        
                    </div>
                    <div className="col col-3">
                        <Form.Group>
                            <Form.Label htmlFor="email"
                           >Email id:</Form.Label>
                            <Form.Control type="email" id="email"
                            name="email"  
                            />
                        </Form.Group>
                       
                    </div>
                </div>
                <div className="row">
                <div className="col col-3">
                    <Form.Group>
                        <Form.Label htmlFor="address"
                            >Address 1:</Form.Label>
                        <Form.Control type="text" id="address"
                            name="address"  
                           />
                    </Form.Group>
                   
                </div>
                <div className="col col-3">
                    <Form.Group>
                        <Form.Label htmlFor="pincode"
                           >Pin Code:</Form.Label>
                        <Form.Control type="number" id="pincode"
                            name="pincode" max="6"
                            />
                    </Form.Group>
                   
                </div>
                <div className="col col-3">
                    <Form.Group>
                        <Form.Label>Tehsil:</Form.Label>
                        <Form.Control type="text"  />
                    </Form.Group>
                </div>
                    </div>
                    <div className="row">
                    <div className="col col-3">
                    <Form.Group>
                        <Form.Label>District :</Form.Label>
                        <Form.Control type="text"  />
                    </Form.Group>
                </div>
                <div className="col col-3">
                    <Form.Group>
                        <Form.Label>State:</Form.Label>
                        <Form.Control type="text"  />
                    </Form.Group>
                </div>
                <div className="col col-3">
                    <Form.Group>
                        <Form.Label>Status (individual/ company/ firm/ LLP etc.):</Form.Label>
                        <Form.Control type="text"   disabled readOnly />
                    </Form.Group>
                </div>
            </div>
            <div className="row">
            <div className="col col-3">
                    <Form.Group>
                        <Form.Label>LC-I signed by :</Form.Label>
                        <Form.Control type="text"   disabled readOnly />
                    </Form.Group>
                </div>
                <div className="col col-3">
                    <Form.Group>
                        <Form.Label>If LC-I is not signed by self (in case of an individual) nature of authorization (GPA/SPA) :</Form.Label>
                        <Form.Control type="text"   disabled readOnly />
                    </Form.Group>
                </div>
                <div className="col col-3">
                    <Form.Group>
                        <Form.Label>Permanent address in case of individual/ registered office address in case other than individual:</Form.Label>
                        <Form.Control type="text"   disabled readOnly />
                    </Form.Group>
                </div>
                </div>
                <div className="row">
            <div className="col col-3">
                    <Form.Group>
                        <Form.Label>Address for communication :</Form.Label>
                        <Form.Control type="text"   disabled readOnly />
                    </Form.Group>
                </div>
                <div className="col col-3">
                    <Form.Group>
                        <Form.Label>Name of the authorized person to sign the application :</Form.Label>
                        <Form.Control type="text"   disabled readOnly />
                    </Form.Group>
                </div>
                <div className="col col-3">
                    <Form.Group>
                        <Form.Label>Email ID for communication:</Form.Label>
                        <Form.Control type="text"   disabled readOnly />
                    </Form.Group>
                </div>
                </div>
                <div className="row">
            <div className="col col-3">
                    <Form.Group>
                        <Form.Label>Name of individual Land owner/ land-owning company/ firm/ LLP etc. :</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                </div>
                </div>
                </Form>
                <div class="modal-footer">
                <Button variant="primary" type="submit">
                    Click here to submit form
                </Button>
            </div>
        </div>
    );
}
export default Form1;


// function Form1() {
//     const [inputs, setInputs] = useState({});

//     const handleChange = (event) => {
//       const name = event.target.name;
//       const value = event.target.value;
//       setInputs(values => ({...values, [name]: value}))
//     }

//     const handleSubmit = (event) => {
//       event.preventDefault();
//       alert(inputs);
//     }
//     return(
//         <form onSubmit={handleSubmit}>
//         <label class="font-weight-bold text-black">Enter your name:
//         <input
//           type="text" className="form-control"
//           name="username"
//           value={inputs.username || ""}
//           onChange={handleChange}
//         />
//         </label>
//         <label>Enter your age:
//           <input
//             type="number" className="form-control"
//             name="age"
//             value={inputs.age || ""}
//             onChange={handleChange}
//           />
//           </label>
//           <label>Enter your address:
//           <input
//             type="text" className="form-control"
//             name="address"
//             value={inputs.address || ""}
//             onChange={handleChange}
//           />
//           </label>
//           <input type="submit" />
//       </form>
//     );

// };
