import * as React from 'react';
import { useEffect,useState } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./card.css";
import { useNavigate } from 'react-router-dom'

export default function DataCard() {
const cardPerRow = 9;
const [data,setData] = useState([])
let history = useNavigate()
const [next, setNext] = useState(cardPerRow);
useEffect(()=>{
    getPostsData();
},[])
const getPostsData = () => {
    console.log("test")
    axios.get("http://localhost:3000/test")
    .then(data => setData(data.data))
    .catch(error => console.log(error));
    };  
    const handleMoreCard = () => {
        setNext(next + cardPerRow);
      };
      const navigateToNextPage = (e) =>{
        console.log(e)
        history('/totalprediction',{state:e})
      }
  return (
    <>
    <div className='container'>
    <div className='test'>
    { data !== undefined && data?.slice(0, next)?.map((dataa)=>(
    <Card sx ={{ margin: "20px","@media screen and (min-width: 768px)": {
        width:"450px",
        height:"350px",
    },
    '@media screen and (min-width: 768px)':{    
        width:"360px",
        height:"350px"
    }}} >
    <>
      <CardMedia
       sx = {{'@media screen and (min-width: 700px)':{    
        height:"200px",
        borderRadius: "17px 17px 17px 17px",
        objectFit: "cover"  
    },
    '@media screen and (max-width: 760px)':{    
        height:"200px",
        borderRadius: "17px 17px 17px 17px",
        objectFit: "cover"
}}}
        image= {dataa.prediction_image_link}
        onClick={(data)=>navigateToNextPage(dataa)}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" sx={{color: '#303133'}}>
        {dataa.prediction_description}   
        </Typography>
        <Button size="small" onClick={(data)=>navigateToNextPage(dataa)}>Read More</Button>
      </CardContent>
      {/* <CardActions>
        
      </CardActions> */}
      </>
    </Card>
     ))}
    </div>
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

    {next < data?.length && (
        <div className='button'>
          <Button
            variant="contained"
            onClick={handleMoreCard}
          >
            Load more
          </Button>
          </div>
        )}
    </div>
    <div>
	<footer aria-label="Site" itemtype="https://schema.org/WPFooter" itemscope="">
	<div class="site">
		<div class="copyrightitems">
					<b>© 2023 Humsafar</b>
        </div>
			</div>
		</footer>
		</div>
    </>
  );
}
