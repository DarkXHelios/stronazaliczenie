import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import './RecipeList.css';

const recipes = [
  // Przykładowe dane przepisów
  { id: 1, title: 'Przepis 1', description: 'Opis przepisu 1' },
  { id: 2, title: 'Przepis 2', description: 'Opis przepisu 2' },
  { id: 3, title: 'Przepis 3', description: 'Opis przepisu 3' },
  { id: 4, title: 'Przepis 4', description: 'Opis przepisu 4' },
  // Dodaj więcej przepisów
];

export default function RecipeList() {
  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={2}>
        {recipes.map((recipe) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={recipe.id}>
            <Paper sx={{ padding: 2 }}>
              <Typography variant="h6">{recipe.title}</Typography>
              <Typography>{recipe.description}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
