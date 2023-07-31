import React, { useState } from "react";
import "./formforinsertion.css";
import { Card, CardContent, TextField } from "@mui/material";
import axios from "axios";
import uuid from 'react-uuid'

export default function FormForInsertion() {

  const handleSubmit = (event) => {
    const prediction_id = uuid()
console.log("13",prediction_id)
    event.preventDefault();
    const prediction_description = document.getElementById("PredictionDescription").value
    const prediction_image_link = document.getElementById("PredictionImageLink").value
    const match_name = document.getElementById("MatchName").value
    const league = document.getElementById("League").value
    const date  = document.getElementById("Date").value
    const time = document.getElementById("Time").value
    const Stadium = document.getElementById("StadiumName").value
    const match_report = document.getElementById("MatchReport").value
    const telegram_link = "https://t.me/+m0i4xltrEzQzZWI9"
    const Instagram_link = "https://instagram.com/humsafarbhai_since2014?igshid=MzNlNGNkZWQ4Mg=="
    const facebook_link = "https://www.facebook.com/HUMSAFARBHAII?mibextid=ZbWKwL"
    const Batsman1 = document.getElementById("BatsMan1").value
    const Batsman2 = document.getElementById("BatsMan2").value
  const allData = {prediction_description,prediction_image_link,
    match_name,league,date,time,Stadium,match_report,telegram_link,
    Instagram_link,facebook_link,Batsman1,Batsman2,prediction_id}
if(prediction_description!==''&& prediction_image_link!== '' && match_name!==''&& league !=='',date!==''&&time!==''&&Stadium!==''
 && match_report!==''&& telegram_link!==''&&Instagram_link!=='' && facebook_link!=='' && Batsman1!=''&& Batsman2!=='')
        {
         axios.post("http://localhost:3000/test1",{allData})
        .then(data => data.respponse)
        .catch(error => console.log(error)) 
        document.getElementById("PredictionDescription").value = ''
        document.getElementById("PredictionImageLink").value = ''
        document.getElementById("MatchName").value = ''
        document.getElementById("League").value = ''
        document.getElementById("Date").value = ''
        document.getElementById("Time").value = ''
        document.getElementById("StadiumName").value = ''
        document.getElementById("MatchReport").value = ''
        document.getElementById("BatsMan1").value = ''
        document.getElementById("BatsMan2").value = ''
        }
  };

  return (
    <Card style={{display: "flex",justifyContent: "center"}}>
    <div className="card">
    <div className="card-header">
      <h1>Prediction Details</h1>
    </div>
  <div className="card-body">
<form onSubmit={handleSubmit} >
  <div className="form-group">
    <label>Prediction Description</label>
    <input type="text" className="form-control" id="PredictionDescription"  placeholder="PRT vs UCC Dream11 Prediction, Player Stats, Pitch Report & Team | ECS Czechia, 2023"/>
  </div>
  <div className="form-group">
    <label >Prediction Image Link</label>
    <input type="text" className="form-control" id="PredictionImageLink"  placeholder="Prediction Image Link"/>
  </div>
   <div className="form-group">
    <label >Match Name</label>
    <input type="text" className="form-control" id="MatchName"  placeholder="Match Name"/>
  </div>
    <div className="form-group">
    <label >League</label>
    <input type="text" className="form-control" id="League"  placeholder="League"/>
  </div>
    <div className="form-group">
    <label>Match Date</label>
    <input type="text" className="form-control" id="Date"  placeholder="Match Date"/>
  </div>
  <div className="form-group">
    <label >Time</label>
    <input type="text" className="form-control" id='Time'  placeholder="Match Time"/>
  </div>
  <div className="form-group">
    <label >Stadium Name</label>
    <input type="text" className="form-control" id='StadiumName'  placeholder="StadiumName"/>
  </div>

  <div className="form-group">
    <label >Match Report</label>
    <textarea  className="form-control" id='MatchReport'  placeholder="Match Report"/>
  </div>
  <div className="form-group">
    <label >Team1</label>
    <input type="text" className="form-control" id='BatsMan1'  placeholder="Robin Uthappa,Regis Chakabva"/>
  </div>
  <div className="form-group">
    <label>Team2</label>
    <input type="text" className="form-control" id='BatsMan2'  placeholder="Robin Uthappa,Regis Chakabva"/>
  </div>
  <div className="form-group" >
    <button type="submit" className="btn btn-primary">Submit</button>
  </div>
  </form>
  </div>
  </div>
  </Card>
  );
}
