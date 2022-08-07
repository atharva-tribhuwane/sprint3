import React from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";
const Products = () => {
  const { token } = React.useContext(AuthContext);
  const { cart } = React.useContext(CartContext);
  console.log("Token is:", cart)
  const [data, setData] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const { handlle } = React.useContext(CartContext);
  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );


  const handleaddtocart = (el) => {
    console.log("invoking");
    cart.forEach(function (ele) {
      if (el.id === ele.id) {
        alert("Already in cart");
      }
      else {
        cart.push({
          "productId": 1,
          "count": 3,
          "id": 1
        })
        handlle(cart);
        alert("added to cart");
        const { cart } = React.useContext(CartContext);
        console.log("Cart:",cart)
      }
    })

  }
  React.useEffect(() => {

    fetch("http://localhost:8080/products")
      .then(res => res.json())
      .then(data1 => { setData(data1); setLoading(false) });
  }, [])

  return (
    <>
      {
        loading ? <div>Loading....</div> : data.map((el) => {
          return (
            <div style={{ width: "50%", margin: "auto" }} key={el.id}>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>

                  <Typography variant="h5" component="div">
                    {el.name}
                  </Typography>
                  <Typography variant="body2">
                    {el.description}
                    <br />
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={() => handleaddtocart(el)}>Add to cart</Button>
                </CardActions>
              </Card>
            </div>
          )
        })
      }
    </>

  );
};

export default Products;
