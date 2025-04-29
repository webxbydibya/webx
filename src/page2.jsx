import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

function Page2() {
  return (
    <Container maxWidth="lg" sx={{ padding: 2, backgroundColor: '#f4f4f4' }}>
      <Typography variant="h3" component="h1" align="center" gutterBottom sx={{ color: '#1e88e5' }}>
        WebX: Revolutionizing the Digital World 🚀
      </Typography>
      <Typography variant="h6" align="center" paragraph sx={{ color: '#757575' }}>
        Welcome to WebX, where we explore the future of web technologies and their intersections with AI, machine learning, and machine technologies 🌐.
      </Typography>

      {/* Blockchain Technology Section */}
      <Section title="Blockchain Technology" emoji="🔗">
        <Typography paragraph sx={{ color: '#424242' }}>
          Blockchain technology has evolved beyond its initial use in cryptocurrency, establishing itself as one of the most innovative technologies in the digital age. The fundamental concept of blockchain lies in its ability to provide decentralized, secure, and transparent solutions for managing data across distributed networks. While cryptocurrencies like Bitcoin and Ethereum were the pioneers of blockchain applications, its potential is much broader, spanning across industries like finance, healthcare, supply chain, and even government.
        </Typography>
        
        {/* Basics of Blockchain */}
        <Typography variant="h5" sx={{ color: '#1e88e5', marginTop: 2 }}>Basics of Blockchain 🛠️</Typography>
        <Typography paragraph sx={{ color: '#424242' }}>
          Blockchain is a type of distributed ledger technology (DLT) that maintains a decentralized record of transactions across a peer-to-peer network. Each record is stored in a "block" and linked to the previous block in a chain, forming the blockchain. Unlike traditional centralized systems where a single entity controls data, blockchain operates on a decentralized network where every participant can access the entire history of transactions.
        </Typography>
        <Typography paragraph sx={{ color: '#424242' }}>
          One of the key features of blockchain technology is its immutability. Once data is recorded on the blockchain, it cannot be altered, which ensures the integrity and security of the information. This makes blockchain highly suitable for applications that require tamper-proof data, such as financial transactions and supply chain management.
        </Typography>

        {/* Blockchain in Cryptocurrency */}
        <Typography variant="h5" sx={{ color: '#1e88e5', marginTop: 2 }}>Blockchain in Cryptocurrency 💰</Typography>
        <Typography paragraph sx={{ color: '#424242' }}>
          The most well-known application of blockchain is in the creation of cryptocurrencies. Bitcoin, the first decentralized cryptocurrency, uses blockchain technology to enable peer-to-peer transactions without the need for a central authority or intermediary like a bank. Blockchain ensures that transactions are transparent, secure, and immutable, making Bitcoin and other cryptocurrencies highly attractive to those seeking an alternative to traditional banking systems.
        </Typography>
        <Typography paragraph sx={{ color: '#424242' }}>
          Ethereum, another popular cryptocurrency, extends the functionality of blockchain by enabling the creation of "smart contracts." These self-executing contracts automatically execute predefined actions once certain conditions are met. This opens up a whole new world of possibilities for decentralized applications (DApps) and decentralized finance (DeFi).
        </Typography>

        {/* Blockchain in Finance */}
        <Typography variant="h5" sx={{ color: '#1e88e5', marginTop: 2 }}>Blockchain in Finance 💳</Typography>
        <Typography paragraph sx={{ color: '#424242' }}>
          Beyond cryptocurrency, blockchain has significant potential in the traditional finance sector. Traditional banking systems rely on intermediaries like banks, which can slow down transaction processes and incur high fees. Blockchain removes the need for these intermediaries, allowing for faster, more cost-effective, and secure transactions.
        </Typography>
        <Typography paragraph sx={{ color: '#424242' }}>
          Many financial institutions are exploring blockchain for cross-border payments, where international transactions typically take several days to complete due to regulatory checks and multiple intermediaries. With blockchain, transactions can be completed in a matter of minutes, reducing costs and increasing the speed of global payments.
        </Typography>

        {/* Blockchain in Supply Chain Management */}
        <Typography variant="h5" sx={{ color: '#1e88e5', marginTop: 2 }}>Blockchain in Supply Chain 🛒</Typography>
        <Typography paragraph sx={{ color: '#424242' }}>
          Blockchain technology is also making waves in supply chain management. By using blockchain to track goods as they move from manufacturer to distributor to retailer, companies can ensure transparency, traceability, and authenticity at every stage of the supply chain. Each transaction is recorded on the blockchain, providing a tamper-proof history of where goods have been and who has handled them.
        </Typography>
        <Typography paragraph sx={{ color: '#424242' }}>
          For instance, in the food industry, blockchain can be used to track the journey of produce from farm to table. This ensures that consumers can verify the origin of the food they are purchasing, reducing the risks of contamination and fraud.
        </Typography>

        {/* Blockchain in Healthcare */}
        <Typography variant="h5" sx={{ color: '#1e88e5', marginTop: 2 }}>Blockchain in Healthcare 🏥</Typography>
        <Typography paragraph sx={{ color: '#424242' }}>
          Blockchain holds significant potential in the healthcare sector. One of the biggest challenges in healthcare is the secure and efficient management of patient data. Blockchain can provide a decentralized, tamper-proof record of patient information, which patients can control. This gives patients the ability to share their medical data with healthcare providers while ensuring that their data is not altered without their consent.
        </Typography>
        <Typography paragraph sx={{ color: '#424242' }}>
          Additionally, blockchain can streamline healthcare operations by reducing administrative overhead, ensuring that records are consistently updated, and providing more accurate billing and payment systems.
        </Typography>

        {/* Challenges and Future of Blockchain */}
        <Typography variant="h5" sx={{ color: '#1e88e5', marginTop: 2 }}>Challenges and Future of Blockchain 🔮</Typography>
        <Typography paragraph sx={{ color: '#424242' }}>
          While blockchain technology has immense potential, it also faces several challenges. One of the primary concerns is scalability. Current blockchain networks like Bitcoin and Ethereum have limitations in terms of the number of transactions they can process per second, which can result in slow processing times during periods of high demand.
        </Typography>
        <Typography paragraph sx={{ color: '#424242' }}>
          Another challenge is the environmental impact of blockchain networks, particularly proof-of-work (PoW) systems like Bitcoin. PoW requires significant computational power, which leads to high energy consumption. However, newer consensus mechanisms like proof-of-stake (PoS) are being explored as more energy-efficient alternatives.
        </Typography>
        <Typography paragraph sx={{ color: '#424242' }}>
          The future of blockchain looks promising, with ongoing advancements in scalability, energy efficiency, and security. As blockchain becomes more mainstream, it is likely to play an integral role in industries like finance, healthcare, supply chain management, and government.
        </Typography>
      </Section>

    </Container>
  );
}

const Section = ({ title, children, emoji }) => (
  <Box sx={{ marginBottom: 4 }}>
    <Typography variant="h5" gutterBottom sx={{ color: '#1e88e5' }}>
      {emoji} {title}
    </Typography>
    <Paper sx={{ padding: 2, backgroundColor: '#f7f7f7' }}>
      {children}
    </Paper>
  </Box>
);

export default Page2;
