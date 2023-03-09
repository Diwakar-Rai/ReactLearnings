import React, { useState } from "react";
import {faker} from '@faker-js/faker'
export default function Faker() {
  let [data, setData] = useState(faker.image.animals());
    let [value, setValue] = useState("");
    
    console.log(faker)
  let onChangeImage = () => {
    setData(faker.image.avatar());
    setValue(faker.name.fullName());
  };
  return (
    <div>
      <h1>My name is ...{value}</h1>
      <img src={data} alt={"hello"} />
      <button onClick={onChangeImage}>Change</button>
    </div>
  );
}
