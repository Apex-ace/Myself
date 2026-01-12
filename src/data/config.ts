export const config = {
  title: "Ayush Mishra | Developer / Data Scientist / ML Engineer ",
  description: {
    long: "Explore the portfolio of Ayush Mishra, a developer and creative technologist specializing in interactive web, Data Scientist / ML Engineer. Discover the portfolio of Ayush, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Ayush",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "ML Engineer",
    "Data Scientist",
  ],
  author: "Ayush Mishra",
  email: "ayushmishra.pi@gmail.com",
  site: "", // ⚠️ TODO: Add your deployed Vercel URL here (e.g. https://ayushmishra.vercel.app)

  // for github stars button
  githubUsername: "Apex-ace",
  githubRepo: "Portfolio", // I updated this to "Portfolio" assuming that's your repo name based on previous messages

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/ayush_mishra_13",
    linkedin:
      "https://www.linkedin.com/in/ayush-mishra-0976b0202?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instagram: "https://www.instagram.com/_ayush__mishra_11?igsh=ajN5ang1N2hra3Fi",
    github: "https://github.com/Apex-ace",
  },
};