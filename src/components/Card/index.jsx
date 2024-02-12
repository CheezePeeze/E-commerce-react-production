import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const CardItem = ({ item }) => {

  const lastPrice = () => {
    return (item.price + item.price * 0.1).toFixed(2)
  }

  return (
    <div className="p-10">
      {item && (
        <Card sx={{ maxWidth: 305 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              image={item.img}
              alt={item.title}
            />
            <CardContent>
              <Typography variant="h6" >
                Just <span className='primary-color font-bold'>{item.price}€</span>
              </Typography>
              <Typography >
                Last price <span className='line-through'>{lastPrice()}€</span>
              </Typography>
              <Typography gutterBottom >
                <span className='font-bold'>{item.title}</span>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      )}

    </div>
  )
}

export default CardItem