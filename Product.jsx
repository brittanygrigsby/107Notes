import QuantityPicker from "./QuantityPicker";

function Product({parent}){

       return (
        <div className="col-md-4 mb-4">
            <div className="card h-100">
                <img src={parent.image}
                />
                <div>{parent.title}</div>
            </div>
            <QuantityPicker/>
        </div>
       ) 

} 


// change the variable name that you are using to pass the data, update the titles in to the DataService 
// and show the price of each product but this time with the new variable name.
export default Product