import React, { useState } from "react";
function Form() {
  const [products, setProducts] = useState({
    name: "",
    image: "",
    price: "",
    description: "",
  });
  const[Search,setSearch]=useState("")
  const [formEntries, setFormEntries] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducts({ ...products, [name]: value });
    console.log(products);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormEntries([...formEntries, products]);

    setProducts({ name: "", image: "", price: "", description: "" });

    console.log(formEntries);
  };
  const search_params=
  Object.keys(Object.assign({},...formEntries));
  function search(formEntries){
return formEntries.filter((data)=>
search_params.some((parm)=>
data[parm].toString().toLowerCase().includes(Search)
))
  }
  console.log(search);

  return (
    <div className="row">
      <div class="col-6 mb-3">
        <form onSubmit={handleSubmit}>
          <label class="form-label">Name</label>
          <input
            type="text"
            name="name"
            class="form-control"
            value={products.name}
            onChange={handleChange}
            required 
          />
          <label class="form-label">Image</label>
          <input
            type="file"
            name="image"
            class="form-control"
            value={products.image}
            onChange={handleChange}
            required
          />
          <label class="form-label">Price</label>
          <input
            type="text"
            name="price"
            class="form-control"
            value={products.price}
            onChange={handleChange}
          />
          <label class="form-label">description</label>
          <input
            type="text"
            name="description"
            class="form-control"
            value={products.description}
            onChange={handleChange}
            required
          />
          <button type="button" class="btn btn-primary" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
      <div className="col-6">
      <label class="form-label">Search</label>
          <input id="serch" type="text" onChange={(e)=>setSearch(e.target.value)} placeholder="search
          "></input>
        <table class="table">
         
          <thead>
            <th scope="col">Name</th>
            <th scope="col">Image</th>
            <th scope="col">price</th>
            <th scope="col">description</th>
          </thead>
          {formEntries.map((e, i) => {
            return (
              <tr >
                <td scope="col">{e.name}</td>
                <td >
                  <img
                    src={e.image}
                    alt="productsimage"
                    style={{ height: "20px", width: "20px" }}
                  ></img>
                </td>
                <td scope="col">{e.price}</td>
                <td scope="col">{e.description}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}
export default Form;

// Add 5 static products with image, name, price and description.
