import './footer.css'
import { Box} from '@mui/material';

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-4 footer_setup">
            <Box className="container mx-auto text-center"
                sx={{ color: '#fff' }}>
                <p>&copy; 2025 webX. All rights reserved.</p>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: '20px', paddingTop: '5px' }}>
                    <a href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</a>
                    <a href="/terms" className="text-gray-400 hover:text-white">Terms of Service</a>
                    <a href="/contact" className="text-gray-400 hover:text-white">Contact Us</a>
                </Box>
            </Box>
        </footer>
    );
}