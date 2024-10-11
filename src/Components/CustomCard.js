import React from 'react';
import { Card, CardContent, Typography, IconButton, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FilterListIcon from '@mui/icons-material/FilterList';

const CustomCard = () => {
  return (
    <Card sx={{ width: 300, padding: 2, position: 'relative', borderRadius: '12px', boxShadow: 3 }}>
        <div style={{ display: 'flex', alignItems: 'center',justifyContent:'space-between' }}>
                {/* Filter Icon */}
                <IconButton >
                    <FilterListIcon />
                </IconButton>
                <div style={{ display: 'flex', alignItems: 'center',justifyContent:'center' }}>

                <IconButton >
                    <KeyboardArrowUpIcon />
                </IconButton>
                <IconButton>
                    <KeyboardArrowDownIcon />
                </IconButton>
                 {/* Close Icon */}
                
                 <IconButton >
                    <CloseIcon />
                </IconButton>
                {/* Up/Down Arrows */}
                </div>
                
               
           
      </div>
      <CardContent style={{ textAlign: 'start',}}>
        {/* Icon and Title */}
        <div style={{ display: 'flex', alignItems: 'start', marginBottom: 16 }}>
          <div style={{ width: 40, height: 40, backgroundColor: '#2E7DFF', borderRadius: '50%' }}></div>
          <Typography variant="h6" sx={{ marginLeft: 2 }}>
            Warning Procedure
          </Typography>
        </div>

        {/* Product Information */}
        <Typography variant="body1">   <b>SC8539–89</b> Glue</Typography>
        <Typography variant="body2" sx={{ marginTop: 2 }}>
         <b>National Product Code:</b>  647328
        </Typography>
        <Typography variant="body2" sx={{ marginTop: 1 }}>
         <b>Labeler:</b>  Glue
        </Typography>
      </CardContent>

      {/* Confirm Button */}
      <Button
        variant="outlined"
        sx={{ margin: '16px 0 16px auto;', display: 'block', borderColor: '#2E7DFF', color: '#2E7DFF' }}
      >
        Confirm
      </Button>
    </Card>
  );
};

export default CustomCard;
