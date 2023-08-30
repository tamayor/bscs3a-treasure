import React from "react";
import './Form.css'

export default function TshirtSizeForm({showTshirtSizeForm, onShowTshirtSizeForm}){
    const [formInput, setFormInput] = React.useState(
        {firstName:"", lastName:"", CAS:false, COMSOC:false, sizes:""}
    )
    function handleFormInput(event){
        const {name, type, checked , value} = event.target
        setFormInput(prevValue =>{
            return{
                ...prevValue,
                [name] : type === "checkbox" ? checked : value
            }
        })
    }
    function sendInfo(event){
        event.preventDefault();
        console.log(formInput)
    }
    return(
       <section>
        {showTshirtSizeForm && (
        <div className="form-container">
            <button className="button bg" onClick={()=>onShowTshirtSizeForm(false)}>Close</button>
            <p className="label">
                &lt; {formInput.firstName.length === 0  && formInput.lastName.length === 0  && formInput.sizes.length === 0 && !formInput.CAS && !formInput.COMSOC  ? "Answer correctly" : formInput.firstName.toUpperCase()}
                    {" " + formInput.lastName.toUpperCase() + " "}
                    {(formInput.firstName.length > 0 || formInput.lastName.length > 0) && " will buy "} 
                    {formInput.CAS && "CAS"} 
                    {(formInput.CAS && formInput.COMSOC) ? " and " : ""} 
                    {formInput.COMSOC && "COMSOC"} 
                    {formInput.sizes.length > 0 ? " t shirt size " + formInput.sizes : ""} &gt;
            </p>
            <form onSubmit={sendInfo}>
                <input
                    required
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={formInput.firstName}
                    onChange = {handleFormInput}
                />
                <input
                    required
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={formInput.lastName}
                    onChange = {handleFormInput}
                />
                <div className="form-options">
                    <div>
                        <input
                            type="checkbox"
                            id="CAS"
                            name="CAS"
                            onChange = {handleFormInput}
                        /><label htmlFor="CAS">CAS</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="COMSOC"
                            name="COMSOC"
                            onChange = {handleFormInput}
                        /><label htmlFor="COMSOC">COMSOC</label>
                    </div>
                    <select 
                        required
                        name="sizes" 
                        value={formInput.sizes} 
                        onChange={handleFormInput}>
                        <option value="">--sizes--</option>
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                    </select>
                </div>
                <button>Submit</button>
            </form>
        </div>
        )}
       </section>
    )
}