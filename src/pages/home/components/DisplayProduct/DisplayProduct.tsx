import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import {Typography } from '@mui/material';
import productData from '../../constants/productData';
import editDeleteIcons from '../../helper/editDeleteIcons';
import "./DisplayProduct.scss";
import { displayProductProps } from '../../helper/displayProductProps';
export default function DisplayProduct(props:displayProductProps) {
    // const filteredData=productData.filter((product)=>{
    //     if(props.queryWord){
    //     return product.name.toLowerCase().includes(props.queryWord.toLowerCase());
    //     }
        
    // })
    const filteredData = productData
    .filter((product) => {
        return !props.queryWord || product.name.toLowerCase().includes(props.queryWord.toLowerCase());
    })
    .filter((product) => {
        return !props.queryCategory || product.category.toLowerCase() === props.queryCategory.toLowerCase();
    });


  return (
    
    <Box className="flex justify-center">
        <Box className=" w-10/12 p-10 mt-10 mb-10">
            <Box
                sx={{
                    '& > :not(style)': {
                    m: 1,
                    borderRadius:3,
                    height: 300,
                    },
                }}
                className="product-paper"
            >
                
                    {
                        filteredData.map((item)=>(
                            <Paper className="paper" elevation={3}>
                               <Typography style={{"marginBottom":"20px"}} variant="h4" fontWeight={'600'}>{item.name}</Typography>
                                <Typography style={{"marginBottom":"10px"}} variant="h6" className="italic" fontWeight={'400'}>{item.price} $</Typography>
                               <Typography  style={{"marginBottom":"10px"}} variant='h5' className="italic">{item.category}</Typography>
                               <Typography style={{"marginBottom":"20px"}}  variant='h6'>{`Quantity: ${item.quantity}`}</Typography>
                               
                                <div className='flex justify-center'>
                                    {
                                        editDeleteIcons.map((icon,index)=>(
                                            <div key={index}>
                                                {icon}
                                            </div>
                                        ))
                                    }
                                </div>
                               
                            </Paper>

                        ))
                    }
                
            </Box>
        </Box>
    </Box>
  );
}
