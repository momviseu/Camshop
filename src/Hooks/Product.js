import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";

const Product = () => {
  const [listStudent, setListStudent] = useState(null);
  
  // useEffect(() =>{
  //   fetch('http://localhost:1337/api/products')
  //   .then(res => {
  //     return res.json();
  //   })
  //   .then(data => {
  //     setListStudent(data);
  //     console.log(data);
  //   });
  // },[])

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios({
      url: "http://localhost:1337/api/products",
      method: "GET",
      data: {},
    }).then((response) => {
      console.log(response);
      // setListStudent(response.data);
    })
  }

  return (
    <div>
      {/* {
        listStudent.map((item) =>(
          <div key={item.id}>
            <h1>{item.title}</h1>
          </div>
        ))
      } */}
      {/* <h1>Product{listStudent.length}</h1>
      {listStudent.map((item,index) => (
        <div  key={index.id}>
            <h1>{item.price}</h1>
        </div>
      ))} */}
    </div>
  )

  
};
export default Product;