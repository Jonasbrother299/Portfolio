import { proxy } from "valtio";

const state = proxy({
  clicked: null,

  imageDetails: {
    Photograf: {
      title: "Landing Page Photograf Simon Brachmann",
      description: "Welcome to the showcase of Simon Brachmann's landing page for his Photograf portfolio. This project is a testament to modern web design and development techniques, demonstrating a blend of powerful technologies to create an immersive and interactive experience.",
      projectOverview: "This landing page is designed to highlight Simon Brachmann's photography work with a visually engaging and user-friendly interface. The page features dynamic animations and smooth interactions, providing an optimal user experience.",
      technolagiesUsed: " ",
      featureAndHighliths: "Interactive 3D Elements: The landing page incorporates interactive 3D components, allowing users to engage with the content in a three-dimensional space. This feature not only showcases Simon Brachmann's work but also enhances the overall user experience with engaging visuals.Smooth Animations: Utilizing Framer Motion, the page features smooth and fluid animations that guide users through the content. These animations help to create a polished and professional feel, ensuring that the user's journey through the page is enjoyable and seamless. Dynamic State Management: With Valtio, the page manages state dynamically and efficiently. This allows for real-time updates and interactions, providing a responsive experience as users navigate through different sections of the page. User-Friendly Design: The design is focused on providing an intuitive and aesthetically pleasing interface. Key elements are highlighted through thoughtful design and interaction patterns, making it easy for users to explore Simon Brachmann's portfolio.",
      photos: ["/photo1.webp", "/photo2.webp", "/photo3.webp"],
      colorPalette: ["#4611113b","#553031","#ed975e", "#1c7e91", ],
      cards: [
        { title: "Card 1", content: "Description of card 1" },
        { title: "Card 2", content: "Description of card 2" },
      ],
    },
    PartyPilot: {
      title: "App for planing Parties",
      description: "This is the second project featuring modern architecture.",
      photos: ["/second1.webp", "/second2.webp", "/second3.webp"],
      colorPalette: ["#FFD700", "#DAA520", "#B8860B"],
      cards: [
        { title: "Card A", content: "Description of card A" },
        { title: "Card B", content: "Description of card B" },
      ],
    },
  },
});

export default state;