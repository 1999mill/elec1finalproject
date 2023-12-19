import './Social.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
export default function Login(){
    return(
<Box sx={{marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',}}>
                <img src='soc.png' alt='walay pic'></img>
<h1>Select Social Media Platform</h1>
                <div className="select">
   <select name="format" id="format">
      <option value="pdf">Facebook</option>
      <option value="txt">Twitter</option>
      <option value="epub">Instagram</option>
      <option value="fb2">TikTok</option>
      <option value="mobi">Youtube</option>
   </select>
   
</div>
<Button size='medium' variant='contained' style={{backgroundColor:"#101820", borderStyle:'none'}}
                sx={{marginTop:"1rem", marginBottom:"1rem"}}>Add</Button>
</Box>
    )


}

