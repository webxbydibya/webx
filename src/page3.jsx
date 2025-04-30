import { Container, Typography, Box, Paper, Button } from '@mui/material';
import AdBanner from './components/AddBanner.jsx';

import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Section = ({ title, children, emoji }) => (
  <Box sx={{ marginBottom: 4 }}>
    <Typography variant="h4" gutterBottom sx={{ color: '#1976d2' }}>
      {emoji} {title}
    </Typography>
    <Paper sx={{ padding: 2, backgroundColor: '#f9f9f9' }}>
      {children}
    </Paper>
  </Box>
);

export default function WebXTechMegaPage() {

  const VALID_SECRET = '1:Qwes33876'; 
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const [seconds, setSeconds] = useState(30); // Countdown duration
  const [showButton, setShowButton] = useState(false);

  const secret = location.state?.secretCode;

  
  useEffect(() => {
    if (!secret || secret !== VALID_SECRET) {
      navigate(`/${id}`);
    }
  }, [secret, navigate, id]);

  // ⏳ Countdown logic
  useEffect(() => {
    if (secret === VALID_SECRET && seconds > 0) {
      const timer = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (secret === VALID_SECRET && seconds <= 0) {
      setShowButton(true);
    }
  }, [seconds, secret]);

  
  if (!secret || secret !== VALID_SECRET) return null;

  const handleNavigate = () => {
    navigate(`/${id}/download`, { state: { secretCode: "1:Qwes33876" } });
  };

  
  return (
    <Container maxWidth="md" sx={{ padding: 2 }}>
      <Typography variant="h3" align="center" gutterBottom sx={{ color: '#0d47a1' }}>
        WebX: The Future of Technology 🚀
      </Typography>
      <br />
      <AdBanner />
      <br />
      <Box
        sx={{
          padding: "40px",
          backgroundColor: "#1e1e1e",
          borderRadius: "15px",
          boxShadow: 10,
          textAlign: "center",
        }}>
          <Typography
            variant="h5"
            sx={{
              color: "#fff",
              fontWeight: "bold",
              marginBottom: "20px",
            }}>
              {showButton ? "Scrool Down and Clicked the button" : `Wait for ${seconds} seconds to unlock the button...`}
          </Typography>
        </Box><br />
        <AdBanner /><br />
        <AdBanner /><br />

      <Typography variant="body1" paragraph align="center">
        Welcome to WebX, your ultimate destination for everything tech! Dive deep into the transformative world of web technologies, AI, blockchain, quantum computing, and beyond. This page explores modern tech trends in over 50,000 words, designed for mobile-first reading and ease of navigation. 🌐📱
      </Typography>
      <AdBanner />
   
      <Section title="1. Introduction to Technology" emoji="📜">
        <Typography paragraph>
          The story of technology begins with basic tools and evolves through industrial revolutions, computing, and modern digital systems... [More Content Here]
        </Typography>
      </Section>
      <AdBanner />

      <Section title="2. Web Development (Frontend, Backend, Frameworks)" emoji="🌍">
        <Typography paragraph>
          Web development has transformed from static HTML pages to dynamic, component-driven SPA architectures with React, Angular, and Vue... [More Content Here]
        </Typography>
      </Section>
      <AdBanner />

      <Section title="3. Artificial Intelligence & Machine Learning" emoji="🤖">
        <Typography paragraph>
          Artificial Intelligence is revolutionizing industries—from automating tasks to predicting outcomes and enabling intelligent web apps... [More Content Here]
        </Typography>
      </Section>
      <AdBanner />

      <Section title="4. Blockchain & Web3" emoji="🔗">
        <Typography paragraph>
          Blockchain enables decentralization, transparency, and security in digital transactions and systems. Web3 expands the internet into a trustless ecosystem... [More Content Here]
        </Typography>
      </Section>
      <AdBanner />

      <Section title="5. Cloud & Edge Computing" emoji="☁️">
        <Typography paragraph>
          Cloud computing has enabled scalable infrastructure for web and mobile applications. Edge computing brings data processing closer to the source... [More Content Here]
        </Typography>
      </Section>
      <AdBanner />

      <Section title="6. Cybersecurity" emoji="🛡️">
        <Typography paragraph>
          Cybersecurity ensures protection of sensitive data and critical systems. From firewalls to zero-trust models, security is a growing concern in the digital age... [More Content Here]
        </Typography>
      </Section>
      <AdBanner />

      <Section title="7. Internet of Things (IoT)" emoji="📡">
        <Typography paragraph>
          IoT connects everyday objects to the web, enabling smart environments in homes, cities, healthcare, and industry... [More Content Here]
        </Typography>
      </Section>
      <AdBanner />

      <Section title="8. Quantum Computing" emoji="⚛️">
        <Typography paragraph>
          Quantum computing leverages quantum mechanics to solve problems beyond the scope of classical computers. Its potential in cryptography and simulation is immense... [More Content Here]
        </Typography>
      </Section>
      <AdBanner />

      <Section title="9. 5G and Next-Gen Networks" emoji="📶">
        <Typography paragraph>
          5G technology is reshaping mobile experiences with faster speeds, lower latency, and enabling real-time communications for web-based services... [More Content Here]
        </Typography>
      </Section>
      <AdBanner />

      <Section title="10. Robotics & Automation" emoji="🤖">
        <Typography paragraph>
          Robotics integrated with AI is transforming manufacturing, healthcare, and customer service. Automation continues to enhance efficiency across sectors... [More Content Here]
        </Typography>
      </Section>
      <AdBanner />
      <br />
      <AdBanner />
      <br /><br />
      <Box
        sx={{
          padding: "40px",
          backgroundColor: "#1e1e1e",
          borderRadius: "15px",
          boxShadow: 10,
          textAlign: "center",
        }}>
          
        {showButton && (
          <Button
            variant="contained"
            onSubmit={handleNavigate}
            onClick={handleNavigate}
            sx={{
              padding: "20px 40px",
              fontSize: "16px",
              backgroundColor: "#ff5722",
              borderRadius: "50px",
              textTransform: "uppercase",
              fontWeight: "bold",
              '&:hover': {
                backgroundColor: '#ff4500',
                transform: 'scale(1.05)',
              },
            }}
          >
            Unlock Button
          </Button>
        )}
        </Box>
        <br /><br />
        <AdBanner />
        <br />

      <Section title="11. Future of Technology" emoji="🔮">
        <Typography paragraph>
          The future lies in convergence: AI-powered Web3 apps, quantum-safe cybersecurity, fully automated societies, and a sustainable tech-driven world... [More Content Here]
        </Typography>
      </Section>
      <AdBanner />
    </Container>
  );
}