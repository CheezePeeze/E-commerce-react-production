import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const CardItem = ({ item = {} }) => {
  console.log('CardItem', item);

  const lastPrice = () => {
    return (item.price + item.price * 0.1).toFixed(2)
  }

  return (
    <div>
      <Card sx={{ maxWidth: 305 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="50"
            image="https://source.unsplash.com/random/150x150?sig=1"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              Just <b>{item.price}€</b>
            </Typography>
            <Typography gutterBottom component="div">
              Last price <span className='line-through'>{lastPrice()}€</span>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  )
}

export default CardItem