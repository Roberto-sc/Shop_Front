import {Card,CardHeader,CardBody,CardFooter,Typography,Button,} from "@material-tailwind/react";

  import React from 'react';

  interface Props {
    image: string;
    title: string;
    description: string;
    price: number;

  }
  
  

const CardDefault: React.FC<Props> = ({ image,title, description,price }) => {
  return (
  <Card className="mt-6 w-96" placeholder=''>
        <CardHeader color="blue-gray" className="relative h-56" placeholder=''>
          <img
            src={image}
            alt="card-image"
          />
        </CardHeader>
        <CardBody placeholder=''>
          <Typography variant="h5" color="blue-gray" className="mb-2" placeholder=''>
            {title}
          </Typography>
          <Typography placeholder=''>
            {description}
          </Typography>
          <Typography variant="h5" color="blue-gray" className="mb-2" placeholder=''>
            {price}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0 flex justify-center" placeholder=''>
          <Button placeholder=''>Comprar</Button>
        </CardFooter>
      </Card>);
};

export default CardDefault;

   
 