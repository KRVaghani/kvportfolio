/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";
require('dotenv').config();


const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Kaushik Vaghani",
  title: "Hi all, I'm Kaushik",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of designing and building WEB applications and other cool libraries and frameworks."
    // "A passionate Full Stack Software Developer 🚀 having an experience of designing and building WEB applications with JavaScript / Reactjs / Nodejs / Expressjs / MongoDb and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1uNA8_X5j87QZMXP5dOzNP6VChANtAxjP/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/KRVaghani",
  // linkedin: "https://www.linkedin.com/in/",
  gmail: "kaushik.vaghani111@gmail.com",
  // gitlab: "https://gitlab.com/",
  // facebook: "https://www.facebook.com/",
  medium: "https://medium.com/@kaushik.vaghani111",
  stackoverflow: "https://stackoverflow.com/users/11415125/kaushik-vaghani",
  instagram: 'https://www.instagram.com/kaushik.vaghani/?hl=en',
  twitter: 'https://twitter.com/KRVaghani',
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your React Web Applications"
    ),
    emoji("⚡ Full Stack Developer | MERN Stack | Javascript | ReactJS | Web & Graphics Designer"),
    emoji(
      "⚡ Integration of third party services such as Firebase"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set true to show this section, defaults to false
  schools: [
    {
      schoolName: "National Institute of Information Technology",
      logo: require("./assets/images/niitLogo.png"),
      subHeader: "Advanced Fullstack Software Engineering",
      duration: "October 2018 - December 2019",
      desc: "I was Completed 2 Live project in this course and lot's of learn here.",
      descBullets: [
        "Surat, India"
      ]
    },
    {
      schoolName: "Shree Swaminarayan College of Computer Science",
      logo: require("./assets/images/swamiLogo.png"),
      subHeader: "BCA - Bachelor of Computer Application",
      duration: "July 2014 - April 2017",
      desc:
        "Ranked first with 60% in the program. Took courses about Application development, Web Tech., Operating Systems, ...",
      descBullets: ["Bhavnagar, India"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend / Design", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "55%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Junior Fullstack ReactJS Developer",
      company: "Melzo",
      companylogo: require("./assets/images/melzoLogo.png"),
      date: "January 2020 – Present",
      desc:
        "Working with New Technology and Learning New Thing.",
      descBullets: [
        "First, 4 months trainee advanced logic build in javascript, HTML5, CSS3, ReactJS, A-Frame, and basic VR/AR, etc. ",
        "some third-party API integration completed and advanced researching about new tools and new tech implementation in company products.",
        "working in Frontend website and Automation Tools Creating Tasks etc."
      ]
    },
    {
      role: "Junior front & back-end web developer",
      company: "Trueline Solution",
      companylogo: require("./assets/images/tlsLogo.png"),
      date: "July 2017 – September 2018",
      desc:
        "Working with New Technology and Lerninng New Thing - HTML, CSS, JavaScript, Bootstrap Studio, GitHub, etc. - Wordpress Framework - Lead and manage team - Guide & train team members for enhancing their skills and supervise their work - Video Creating [2D Animation, WhiteBoard, Slides] - Social Media Handle & Paid Promotion [ Google Ads / Facebook / Instagram / Twitter ] - Graphics & Design ( Useing software like : Adobe XD, Corel Draw, Adobe Photoshop, Adobe illustrator, etc.. ) - Search Engine Optimization [SEO] - Business Branding"
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "KRVaghani", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "fa"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: ""
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url:
            ""
        },
        {
          name: "Award Letter",
          url:
            ""
        },
        {
          name: "Google Code-in Blog",
          url:
            ""
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url:
            ""
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: ""
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    ""
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "(+91) 8469307921",
  email_address: "kaushik.vaghani111@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "KRVaghani", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
