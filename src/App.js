import React from 'react';
import { Paper, Typography, IconButton, Grid, Button } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const CardComponent = ({ title, code, labeler, status }) => {
  return (
    <Paper style={{ padding: '20px', margin: '20px', borderRadius: '15px', boxShadow: '0 6px 8px rgba(123, 123, 123, 0.25)' }} elevation={3}>
      <Grid container alignItems="center">
        <Grid item xs={12} style={{display: 'flex',alignItems:'center',justifyContent:'space-between'}}>
          <IconButton edge="start">
            <FilterListIcon />
          </IconButton>
          <div>
          <IconButton>
            <ExpandMoreIcon />
          </IconButton>
          <IconButton>
            <ExpandLessIcon />
          </IconButton>
          <IconButton edge="end">
            <CloseIcon />
          </IconButton>
          </div>
         
        
        </Grid>
        <Grid item xs={12} container alignItems="center" spacing={2}>
          <Grid item>
            <Typography variant="h6" style={{ color: '#00254D', fontWeight: 'bold' }}>{title}</Typography>
          </Grid>
          <Grid item style={{ flexGrow: 1 }}>
            <div style={{ height: '36px', background: 'blue', borderRadius: '25px' }} />
          </Grid>
        </Grid>
        <Grid item xs={12} container direction="column" spacing={1}>
          <Typography variant="subtitle1" style={{ color: '#222529' }}>National Product Code: {code}</Typography>
          <Typography variant="subtitle1" style={{ color: '#222529' }}>Labeler: {labeler}</Typography>
        </Grid>
        <Grid item xs={12} container justifyContent="flex-end" spacing={2}>
          <Button variant="contained" style={{ background: '#0043D0', color: 'white' }}>
            Confirm
          </Button>
          
        </Grid>
      </Grid>
    </Paper>
  );
}

const App = () => {
  const cardData = {
    title: 'Warning Procedure',
    code: '647328',
    labeler: 'Glue',
    status: 'Active'
  };

  return (
    <div>
      <CardComponent {...cardData} />
    </div>
  );
};

export default App;