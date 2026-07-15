// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-side-projects",
          title: "side projects",
          description: "Some of the weekend projects and side work.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Here are some of the fun projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-resume",
          title: "resume",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/resume/";
          },
        },{id: "projects-flappy-byrd",
          title: 'Flappy Byrd',
          description: "flappy bird clone made by me in Java using OpenGL",
          section: "Projects",handler: () => {
              window.location.href = "/projects/flappy/";
            },},{id: "projects-mara",
          title: 'Mara',
          description: "Wiki and review site for strains.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mara/";
            },},{id: "projects-pollster",
          title: 'Pollster',
          description: "Polling site intergrated with snapchat.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/pollster/";
            },},{id: "projects-improve-qemu-live-migration",
          title: 'Improve QEMU Live Migration',
          description: "Modification that can improve the live migration time of QEMU systems.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/qemuimp/";
            },},{id: "projects-recumbent-bike",
          title: 'Recumbent Bike',
          description: "Enabling Engineering project building hand and leg powered bike for boy with disability.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/recbike/";
            },},{id: "projects-boston-traffic-visualization",
          title: 'Boston Traffic Visualization',
          description: "Collaborative project for a class to show the factors contributing to Boston congestion.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/trafficvisual/";
            },},{id: "projects-uh-huh",
          title: 'Uh huh',
          description: "A chat client over UDP focused on security and decentralized communication.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/uhhuh/";
            },},{id: "projects-wgpa-calculator",
          title: 'WGPA Calculator',
          description: "Calculates Weighted Grade Point Averages from classes using grades and credit hours.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/wgpacalc/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/Resume.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%69%77%65%6E (%64%6F%74) %64%6F%6E%67 (%61%74) %75%77%61%74%65%72%6C%6F%6F.%63%61", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/YiwenDong98", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/yiwen-dong", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-3205-9010", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=Yw3TVykAAAAJ", "_blank");
        },
      },{
        id: 'social-semanticscholar',
        title: 'Semantic Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://www.semanticscholar.org/author/Yiwen-Dong/2163378746", "_blank");
        },
      },];
