import React, { useState } from 'react';

function AddProduct(props) {
    const [data, selectData] = useState ([])
  const handleSubmit = event => {
    let ProductId = 0
    let productName = event.target.pname.value;
    let productDescription = event.target.pdes.value;
    if(!productName > 0 || !productDescription > 0){
      alert("Please Enter Product Name and Product Description")
   }
    // 👇️ prevent page refresh
   

    selectData(prev => [{Productid : ProductId + 1 ,productname: event.target.pname.value, productdescription: event.target.pdes.value}, ...prev])


    event.preventDefault(); 
  };
  const handleEdit = (id) => {
    console.log(id);
  }

  console.log("arr",data);

    return (
        <div>
             <form className='form' onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter Product Name' className='pname' name='pname'/>
            <textarea className='pdes' name='pdes' placeholder='Enter Description'></textarea>
                <button type='submit' className="pbtn">Submit</button>
            </form>
        </div>
    );
}

export default AddProduct;