import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { Card, CardContent } from '@mui/material';
import "./total-prediction.css";
import telegram  from '../assets/TELEGRAM1.png'
import instagram  from '../assets/instagram png (1).png'
import facebook  from '../assets/facebook.png'
export default function TotalPrediction() {
    const location = useLocation();
console.log("",location.state.Batsman1.split(','))
let allData = location.state.Batsman1.split(',')
let League = location.state.prediction_description
let allData1 = location.state.Batsman2.split(',')


  return (
<Card>
  <CardContent>
    <div><h2 style={{display: "flex",justifyContent: "center"}}>{League.split(',')[0]}</h2></div>
    <div class="entry-content" itemprop="text">	
{/* <!-- WP QUADS Content Ad Plugin v. 2.0.73 --> */}
<div class="quads-location quads-ad13268 quads-mobile" id="quads-ad13268" style={{float: "none", textAlign: "center", padding: "10px" ,visibility: "visible"}}>
<div class="quads-ad-label quads-ad-label-new">Advertisements</div>
 {/* <!-- WP QUADS - Quick AdSense Reloaded v.2.0.73 Content ImageBanner AD -->  */}

            <a imagebanner="" target="_blank" href="https://vision11.in/download/SF100/" rel="nofollow">
              <img style = {{width:"800",height:"230"}} src="https://sports-fantasy.in/wp-content/uploads/2023/06/vision11-ads.jpg" alt="Ad 1"/>
            </a>
 {/* <!-- end WP QUADS -->  */}

</div>
</div>  
    <div className='predictiontable'> 
    <table id="table2">
  <tr>
    <td><strong>Match</strong></td>
    <td><strong>{location.state.match_name}</strong></td>
  </tr>
  <tr>
    <td><strong>League</strong></td>
    <td><strong>{location.state.league}</strong></td>
  </tr>
  <tr>
    <td><strong>Date</strong></td>
    <td><strong>{location.state.date}</strong></td>
  </tr>
  <tr>
    <td><strong>Time</strong></td>
    <td><strong>{location.state.date}</strong></td>
  </tr>
  <tr>
    <td><strong>Stadim</strong></td>
    <td><strong>{location.state.Stadium}</strong></td>
  </tr>
</table>
</div>
<div className='para'>
    <p>
        {location.state.match_report}
    </p>
</div>
<div className='telegramlink'>
    <figure>
        <a rel="noopener"  target = "_blank" className ="telegram_hyperlink" href={location.state.telegram_link}>
        <img src = {telegram} className='image'/></a>
        {/* <figcaption>
            <strong>
            <a rel="noopener"  target = "_blank" className ="telegram_hyperlink" href={location.state.telegram_link}>JOIN TELEGRAM LINK</a>
            </strong>
        </figcaption> */}
    </figure>
</div>
<hr/>
<h2 className='heading_playerstats'><strong>{League.split(/(Dream11 Prediction)/)[0]}Player Stats</strong></h2>


<div className='wicket_keeper_2'>
{/* {allData.map((e,i)=>(
    <div className='test1'>
    <p className='test'>{e}</p>
 </div>
))} */}
<div className='instagramlink'>
    <figure>
        <a rel="noopener"  target = "_blank" className ="instagram_hyperlink" href={location.state.Instagram_link}>
        <img src = {instagram} className='image'/></a>
        {/* <figcaption>
            <strong>
            <a rel="noopener"  target = "_blank" className ="instagram_hyperlink" href={location.state.Instagram_link}>JOIN INSTAGRAM LINK</a>
            </strong>
        </figcaption> */}
    </figure>
</div>
<hr/>
</div>
 <div className='wicket_keeper_1'>
  <h1>Team 1( {League.split("vs")[0]})</h1>
  {allData.map((e,i)=>(
    <div className='test1'>
    <p className='test'>{e}</p>
 </div>
))}
</div>
<div className='telegramlink'>
    <figure>
        <a rel="noopener"  target = "_blank" className ="facebook_link" href={location.state.facebook_link}>
        <img src = {facebook} className='image'/></a>
        {/* <figcaption>
            <strong>
            <a rel="noopener"  target = "_blank" className ="facebook_link" href={location.state.facebook_link}>JOIN FACEBOOK LINK</a>
            </strong>
        </figcaption> */}
    </figure>
</div>
<hr/>
<div className='wicket_keeper_1'>
  <h1>Team 2( {League.split("vs")[1].split(/(Dream11 Prediction)/)[0]})</h1>
  {allData1.map((e,i)=>(
    <div className='test1'>
    <p className='test'>{e}</p>
 </div>
))}
</div>
{/* <div>
<figure style={{display: "table"}}>
        <img className ='wicketkeeperimage' src='https://sports-fantasy.in/wp-content/uploads/2023/03/Batsman-300x43.png'/>
</figure>
</div> */}
{/* <div className='wicket_keeper_2'>
{allData1.map((e,i)=>(
    <div className='test1'>
    <p className='test'>{e}</p>
 </div>
))}
</div>
<figure style={{display: "table"}}>
        <img className ='wicketkeeperimage' src='https://sports-fantasy.in/wp-content/uploads/2023/03/All-Rounder-2-300x43.png'/>
  </figure>
  <div className='wicket_keeper_2'>
{allRounder2.map((e,i)=>(
    <div className='test1'>
    <p className='test'>{e}</p>
 </div>
))}
</div> */}
{/* <figure style={{display: "table"}}>
        <img className ='wicketkeeperimage' src='https://sports-fantasy.in/wp-content/uploads/2023/03/Bowler-300x43.png'/>
  </figure>
  <div className='wicket_keeper_2'>
{bowler1.map((e,i)=>(
    <div className='test1'>
    <p className='test'>{e}</p>
   
 </div>
))} */}
{/* </div> */}

<p style= {{textAlign:"center"}}>
    <strong>NOTE</strong>: Join Our Telegram Channel For Daily Free Fantasy Teams 
    <a href="https://Humsafar.in/" target="_blank" rel="noreferrer noopener">
     <strong>-Humsafar.in</strong>
    </a></p>
    <div className='telegramlink'>
    <figure>
        <a rel="noopener"  target = "_blank" className ="telegram_hyperlink" href={location.state.telegram_link}>
        <img src ={telegram} className='image'/></a>
        {/* <figcaption>
            <strong>
            <a rel="noopener"  target = "_blank" className ="telegram_hyperlink" href={location.state.telegram_link}>JOIN TELEGRAM LINK</a>
            </strong>
        </figcaption> */}
    </figure>
</div>
  </CardContent>
    </Card>
    
  );
}