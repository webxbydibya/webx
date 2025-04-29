import { Container, Typography, Paper } from '@mui/material';

const AboutPage = () => {
  return (
    <Container maxWidth="md" sx={{ paddingY: 4 }}>
      <Paper elevation={3} sx={{ padding: 3, backgroundColor: '#f9f9f9' }}>
        <Typography variant="h4" component="h1" gutterBottom color="primary">
          About WebX
        </Typography>

        <Typography variant="body1" paragraph>
          Welcome to <strong>WebX</strong> – a digital platform built with the vision of redefining the web as we know it. At WebX, we explore the crossroads of web development, artificial intelligence (AI), machine learning (ML), and cutting-edge machine technologies. Our goal is to build a future where digital experiences are intelligent, accessible, and scalable for everyone, regardless of their technical background.
        </Typography>

        <Typography variant="h5" gutterBottom>
          🌟 Our Vision
        </Typography>
        <Typography variant="body1" paragraph>
          The web is evolving. From static pages to dynamic applications, and now intelligent, responsive ecosystems — WebX aims to be at the forefront of this revolution. Our vision is to bridge the gap between traditional web technologies and the next generation of digital innovation, where automation, intelligence, and seamless user interaction come together in harmony.
        </Typography>

        <Typography variant="h5" gutterBottom>
          💡 Our Mission
        </Typography>
        <Typography variant="body1" paragraph>
          Our mission is simple: to empower developers, creators, and businesses by providing tools, insights, and resources that simplify complex technologies. We believe that anyone should be able to build smart web applications without needing a Ph.D. in machine learning. By blending user-centric design with AI and ML, we aim to democratize access to advanced technologies.
        </Typography>

        <Typography variant="h5" gutterBottom>
          🛠️ How We Started
        </Typography>
        <Typography variant="body1" paragraph>
          WebX began as a small project with a big idea: "What if websites could think?" What started with simple experiments in natural language processing and recommendation engines quickly evolved into a full-fledged platform that now hosts content, tools, and insights into modern web development. Our founders, a group of passionate developers and tech enthusiasts, believed that the web could be more than just a static display of content — it could be intelligent, responsive, and deeply human-centric.
        </Typography>

        <Typography variant="h5" gutterBottom>
          🔍 What Makes WebX Unique?
        </Typography>
        <Typography variant="body1" paragraph>
          While many websites cover web development or artificial intelligence individually, WebX combines the best of both worlds. Whether you're looking for tutorials on React, comparisons of cloud deployment platforms, insights into ML libraries like TensorFlow.js, or discussions on ethical AI — we’ve got you covered. Our community-driven approach ensures that the content evolves alongside the needs of our users.
        </Typography>

        <Typography variant="h5" gutterBottom>
          🌐 Topics We Cover
        </Typography>
        <Typography variant="body1" paragraph>
          At WebX, we dive deep into topics like:
          <ul>
            <li>Front-end frameworks like React, Vue, and Angular</li>
            <li>Back-end platforms such as Node.js, Django, and Spring Boot</li>
            <li>Deployment services like Vercel, Netlify, AWS, and Heroku</li>
            <li>Machine Learning tools including TensorFlow.js and ML5.js</li>
            <li>Natural Language Processing and AI-powered chatbots</li>
            <li>Privacy, ethics, and best practices in modern web applications</li>
          </ul>
        </Typography>

        <Typography variant="h5" gutterBottom>
          🌍 A Global Community
        </Typography>
        <Typography variant="body1" paragraph>
          WebX is proud to host a growing global community of developers, learners, and innovators. From students and educators to professionals and tech startups, our platform welcomes everyone. We are building not just a website, but a hub of continuous learning and collaboration.
        </Typography>

        <Typography variant="h5" gutterBottom>
          🔮 The Future of WebX
        </Typography>
        <Typography variant="body1" paragraph>
          Looking ahead, we plan to integrate more community features such as forums, live sessions, and project showcases. We’re working on AI-based content recommendations, smart coding assistants, and real-time collaboration tools. Our roadmap includes expanding into educational partnerships and offering certifications that are recognized across the tech industry.
        </Typography>

        <Typography variant="h5" gutterBottom>
          📣 Get Involved
        </Typography>
        <Typography variant="body1" paragraph>
          If you're passionate about technology, eager to learn, or simply curious, WebX is your place to grow. Follow us, contribute articles, ask questions, and build with us. Your voice matters, and your ideas could be the next big thing the web needs.
        </Typography>

        <Typography variant="h5" gutterBottom>
          ✉️ Contact Us
        </Typography>
        <Typography variant="body1" paragraph>
          Have a question or want to collaborate? Reach out to us at <strong>webxbydibya@gmail.com</strong>. We’re always happy to connect with like-minded people.
        </Typography>

        <Typography variant="body2" align="center" sx={{ marginTop: 4, fontStyle: 'italic' }}>
          WebX — Bridging Code and Intelligence.
        </Typography>
      </Paper>
    </Container>
  );
};

export default AboutPage;
