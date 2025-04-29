import { Container, Typography, Paper } from '@mui/material';
export default function Error(){
    return(
        <>
        <Container maxWidth="md" sx={{ marginTop: 4 }}>
            <Paper elevation={3} sx={{ padding: 3 }} >
                <Typography variant="h4" component="h1" sx={{textAlign:'center'}} gutterBottom>
                    404 Error
                </Typography>
            </Paper>
        </Container>
        </>
    )
}

