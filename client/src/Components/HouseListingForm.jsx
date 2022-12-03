import React,{useState} from 'react'
import "../StyleSheet/HouseListingForm.css"
import axios from 'axios';

const HouseListingForm = () => {

    const [price,setPrice] = useState(0);
    const [city,setCity] = useState("");
    const [province,setProvince] = useState("");
    const [numOfBedrooms,setNumOfBedrooms] = useState(1);
    const [numOfBathrooms,setNumOfBathrooms] = useState(1);

    const [numOfGarages,setNumOfGarages] = useState(1);
    const [isSaleOrRent,setIsSaleOrRent] =useState("");
    const [houseImage,setHouseImage] = useState(null);

    const listProperty = () =>{

        const url='/api/house-listing'
       
        const data=new FormData();

        data.append("price",price)
        data.append("city",city);
        data.append("province",province);

        data.append("numOfBedrooms",numOfBedrooms);
        data.append("numOfBathrooms",numOfBathrooms);

        data.append("numOfGarages",numOfGarages);
        data.append("isSaleOrRent",isSaleOrRent);
        data.append("houseImage",houseImage);

        axios.post(url,data).then(response => {
            console.log(response.data);
        }).catch(error=>console.log(error))

        alert("Successfully Listed Your Property");
    };


    return (
        <div className="HouseListing__container">
              <div className="form">
              <h1 style={{paddingBottom:"16px"}}>LIST YOUR PROPERTY</h1>
                  <label>House Price</label>
                  <input type="number" placehoslder="House Price" onChange={(e) => setPrice(e.target.value)} value={price} />

                  <label>House Location(Province)</label>
                  <input type="text" placeholder="House Location Province" onChange={(e) => setProvince(e.target.value)} value={province} />

                  <label>House Location(city)</label>

                  <select onChange={(e) => setCity(e.target.value)} value={city}>
          <option>...</option>
          <option>Hyderabad</option>
          <option>Ahmedabad</option>
          <option>Mumbai</option>
          <option>Pune</option>
          <option>Chennai</option>
          <option>Delhi</option>
          <option>Banaras</option>
          <option>Jaipur</option>
        </select>


                  <label>Sale Or Rent</label>
                  <select onChange={(e) => setIsSaleOrRent(e.target.value)} value={isSaleOrRent}>
                      <option>...</option>
                      <option>SALE</option>
                      <option>RENT</option>
                  </select>

                  <label>Number of bedrooms</label>
                  <input type="number" placeholder="Number of bedrooms" onChange={(e) => setNumOfBedrooms(e.target.value)} value={numOfBedrooms}/>
                 
                  <label>Number of bathrooms</label>
                  <input type="number" placeholder="Number of bathrooms" onChange={(e) => setNumOfBathrooms(e.target.value)} value={numOfBathrooms}/>

                  <label>Number of garages</label>
                  <input type="number" placeholder="Number of garages" onChange={(e) => setNumOfGarages(e.target.value)} value={numOfGarages}/>

                  <label>House Image</label>
                  <input type="file"  onChange={(e) => setHouseImage(e.target.files[0])} />

<button  onClick={listProperty}>List Your Property</button>

              </div>
            
        </div>
    )
}

export default HouseListingForm
