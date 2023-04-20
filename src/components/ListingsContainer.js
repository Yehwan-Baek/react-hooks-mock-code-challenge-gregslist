import React, {useState, useEffect} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({searchInput}) {
  const [gregs, setGregs] = useState([])  

  useEffect(()=>{
    fetch("http://localhost:6001/listings")
    .then((res)=>res.json())
    .then((data)=>{
      setGregs(data);
    });
  },[]);

  function handleDelete(id) {
    const filteredGregs = gregs.filter((greg) => {
      return greg.id !== id;
    });
    setGregs(filteredGregs)
  }

  const filteredSearchGregs = gregs.filter((greg) => {
    return greg.description.toLowerCase().includes(searchInput.toLowerCase());
  })

  const displayGregs = filteredSearchGregs.map((greg) => {
    return (
      <ListingCard
        key={greg.description}
        greg={greg}
        handleDelete={handleDelete}
      />
    )
  })

  return (
    <main>
      <ul className="cards">
        {displayGregs}
      </ul>
    </main>
  );
}

export default ListingsContainer;