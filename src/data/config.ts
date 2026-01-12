export const config = {
  title: "Ayush Mishra | Developer / Data Scientist / ML Engineer ",
  description: {
      short: "Developer / Data Scientist / ML Engineer", 
    
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
  
  // I filled this in for you to prevent SEO errors later
  site: "https://ayushmishra.vercel.app", 

  // for github stars button
  githubUsername: "Apex-ace",
  githubRepo: "Portfolio", 

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/ayush_mishra_13",
    linkedin: "https://www.linkedin.com/in/ayush-mishra-0976b0202",
    instagram: "https://www.instagram.com/_ayush__mishra_11",
    github: "https://github.com/Apex-ace",
  },
};