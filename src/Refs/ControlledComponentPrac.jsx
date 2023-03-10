import React, { useState } from "react";
import COUNTRY from "./countries.json";
const ControlledComponentPrac = () => {
  let [state, setState] = useState({
    firstName: "",
    gender: "",
    loading: false,
    lang: "",
    countries: "",
    priceRange: 100,
    comments: "",
  });
    let [photo, setPhoto] = useState();
    let [show, setShow] = useState(false)
  let [countryData, setCountryData] = useState(COUNTRY);
  let [languages, setLanguages] = useState([
    "html",
    "css",
    "javascript",
    "nodejs",
    "express",
    "angularjs",
    "mongodb",
  ]);

  let { firstName, loading, gender, lang, countries, priceRange, comments } =
    state;

  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let handleSubmit = e => {
    e.preventDefault();

    try {
      setState({ loading: true });
      console.log({ state, photo });
    } catch (error) {
      console.log(error);
    }

    setState({
      firstName: "",
      gender: "",
      loading: false,
      priceRange: 100,
      comments: "",
      lang: "",
      countries: "",
    });
      setShow(false)
  };

    let handleFileChange = e => {
        setShow(true);
        let files = e.target.files[0];
        //! check the mdn documentation for this file api
        const reader = new FileReader();
        reader.readAsDataURL(files)
        reader.onload = evt => {
            setPhoto(evt.target.result)
        }
    setPhoto(files);
  };

  return (
    <div>
      {/* {JSON.stringify(state)} */}
          <form action="" onSubmit={handleSubmit}>
              {show?<img src={photo} width="100%" />:""}
        <input
          type="text"
          value={firstName}
          name="firstName"
          onChange={handleChange}
        />
        <div name="gender" value={gender} onChange={handleChange}>
          <input type="radio" name="gender" value="male" />
          Male
          <input type="radio" name="gender" value="female" />
          Female
        </div>

        <div>
          <label>Language</label>
          <select name="lang" onChange={handleChange} value={lang}>
            {languages.map((lan, index) => {
              return (
                <React.Fragment key={index + 1}>
                  <option value={lan}>{lan}</option>
                </React.Fragment>
              );
            })}
          </select>
        </div>

        <div>
          <label>Country</label>
          <select name="countries" onChange={handleChange} value={countries}>
            {countryData.map((c, index) => {
              return (
                <React.Fragment key={index + 1}>
                  <option value={c.name}>{c.name}</option>
                </React.Fragment>
              );
            })}
          </select>
        </div>

        <div>
          {priceRange}
          <input
            type="range"
            name="priceRange"
            value={priceRange}
            min={100}
            max={10000}
            onChange={handleChange}
          />
        </div>

        <div>
          <textarea
            name="comments"
            value={comments}
            cols="30"
            rows="10"
            onChange={handleChange}
          ></textarea>
        </div>

        <div>
          <label htmlFor="file">Choose a File</label>
          <input
            type="file"
            name="photo"
            id="file"
            onChange={handleFileChange}
          />
        </div>

        <button>{loading ? "loading..." : "Login"}</button>
      </form>
    </div>
  );
};

export default ControlledComponentPrac;
