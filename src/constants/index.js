const navLinks = [
    {
      id: 1,
      name: "Projects",
      type: "finder",
    },
    {
      id: 3,
      name: "Contact",
      type: "contact",
    },
    {
      id: 4,
      name: "Resume",
      type: "resume",
    },
  ];
  
  const navIcons = [
    {
      id: 1,
      img: "/icons/wifi.svg",
    },
    {
      id: 2,
      img: "/icons/search.svg",
    },
    {
      id: 3,
      img: "/icons/user.svg",
    },
    {
      id: 4,
      img: "/icons/mode.svg",
    },
  ];
  
  const dockApps = [
    {
      id: "finder",
      name: "Portfolio", // was "Finder"
      icon: "finder.png",
      canOpen: true,
    },
    {
      id: "safari",
      name: "Articles", // was "Safari"
      icon: "safari.png",
      canOpen: true,
    },
    {
      id: "photos",
      name: "Gallery", // was "Photos"
      icon: "photos.png",
      canOpen: true,
    },
    {
      id: "contact",
      name: "Contact", // or "Get in touch"
      icon: "contact.png",
      canOpen: true,
    },
    {
      id: "terminal",
      name: "Skills", // was "Terminal"
      icon: "terminal.png",
      canOpen: true,
    },
    {
      id: "trash",
      name: "Archive", // was "Trash"
      icon: "trash.png",
      canOpen: false,
    },
  ];
  
  const blogPosts = [
    {
      id: 1,
      date: "Sep 2, 2025",
      title:
        "TypeScript Explained: What It Is, Why It Matters, and How to Master It",
      image: "/images/blog1.png",
      link: "",
    },
    {
      id: 2,
      date: "Aug 28, 2025",
      title: "The Ultimate Guide to Mastering Three.js for 3D Development",
      image: "/images/blog2.png",
      link: "",
    },
    {
      id: 3,
      date: "Aug 15, 2025",
      title: "The Ultimate Guide to Mastering GSAP Animations",
      image: "/images/blog3.png",
      link: "",
    },
  ];
  
  const techStack = [
    {
      category: "Frontend",
      items: ["React.js", "TypeScript", "GSAP" , "Next.js"],
    },
    {
      category: "Mobile",
      items: ["Java"],
    },
    {
      category: "Styling",
      items: ["Tailwind CSS", "CSS"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "Solidity"],
    },
    {
      category: "Database",
      items: ["MongoDB", "PostgreSQL"],
    },
    {
      category: "Dev Tools",
      items: ["Git", "GitHub", "Docker", "Remix"],
    },
  ];
  
  const socials = [
    {
      id: 1,
      text: "Github",
      icon: "/icons/github.svg",
      bg: "#f4656b",
      link: "https://github.com/Uday9316",
    },
    {
      id: 2,
      text: "Platform",
      icon: "/icons/atom.svg",
      bg: "#4bcb63",
      link: "https://calendly.com/udaydhorajiya5/30min",
    },
    {
      id: 3,
      text: "Twitter/X",
      icon: "/icons/twitter.svg",
      bg: "#ff866b",
      link: "https://x.com/uday_dhorajiya",
    },
    {
      id: 4,
      text: "LinkedIn",
      icon: "/icons/linkedin.svg",
      bg: "#05b6f6",
      link: "https://www.linkedin.com/in/uday-dhorajiya-a68273223/",
    },
  ];
  
  const photosLinks = [
    {
      id: 1,
      icon: "/icons/gicon1.svg",
      title: "Library",
    },
    {
      id: 2,
      icon: "/icons/gicon2.svg",
      title: "Memories",
    },
    {
      id: 3,
      icon: "/icons/file.svg",
      title: "Places",
    },
    {
      id: 4,
      icon: "/icons/gicon4.svg",
      title: "People",
    },
    {
      id: 5,
      icon: "/icons/gicon5.svg",
      title: "Favorites",
    },
  ];
  
  const gallery = [
    {
      id: 1,
      img: "/images/gal1.png",
    },
    {
      id: 2,
      img: "/images/gal2.png",
    },
    {
      id: 3,
      img: "/images/gal3.png",
    },
    {
      id: 4,
      img: "/images/gal4.png",
    },
  ];
  
  export {
    navLinks,
    navIcons,
    dockApps,
    blogPosts,
    techStack,
    socials,
    photosLinks,
    gallery,
  };
  
  const WORK_LOCATION = {
    id: 1,
    type: "work",
    name: "Work",
    icon: "/icons/work.svg",
    kind: "folder",
    children: [
      // ▶ Project 1
      {
        id: 5,
        name: "Lumi",
        icon: "/images/folder.png",
        kind: "folder",
        position: "top-10 left-5", // icon position inside Finder
        windowPosition: "top-[5vh] left-5", // optional: Finder window position
        children: [
          {
            id: 1,
            name: "Lumi.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-5 left-10",
            description: [
              "Lumi is a decentralized exchange that allows you to trade tokens with other users.",
              "It's built on EVM compatible chains like Ethereum, Polygon, Avalanche, etc.",
              "It's built with Js ensuring fast performance, responsive design, and a clean, premium look.",
              "It has built in faucet which let's user claim faucet every 24 hours with back-end authentication.",
              "It has discord bot working in back-end which is used to assign certain roles to users who mints nft.",

            ],
          },
          {
            id: 2,
            name: "Lumi.com",
            icon: "/images/safari.png",
            kind: "file",
            fileType: "url",
            href: "https://github.com/Uday9316/Lumi-dex.git",
            position: "top-10 right-20",
          },
          {
            id: 4,
            name: "lumi.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-52 right-80",
            imageUrl: "/images/project-1.png",
          },
          {
            id: 5,
            name: "Design.fig",
            icon: "/images/plain.png",
            kind: "file",
            fileType: "fig",
            href: "https://google.com",
            position: "top-60 right-20",
          },
        ],
      },
  
      // ▶ Project 2
      {
        id: 6,
        name: "Umi",
        icon: "/images/folder.png",
        kind: "folder",
        position: "top-52 right-80",
        windowPosition: "top-[20vh] left-7",
        children: [
          {
            id: 1,
            name: "Umi.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-5 right-10",
            description: [
              "Umi Launchpad is a web3 platform for launching NFT collections in a clean, guided way.",
              "Creators can configure and deploy ERC-721 / ERC-1155 collections without wrestling with low-level smart contract details.",
              "It’s built with Vue 3, TypeScript, Tailwind CSS, and Vite, giving a fast UX and a smooth, responsive UI.",
              "The focus is on a clear launch workflow, safe configuration, and a polished experience for both creators and collectors.",
            ],
          },
          {
            id: 2,
            name: "Umi.com",
            icon: "/images/safari.png",
            kind: "file",
            fileType: "url",
            href: "..",
            position: "top-20 left-20",
          },
          {
            id: 4,
            name: "Umi.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-52 left-80",
            imageUrl: "/images/project-2.jpg",
          },
          {
            id: 5,
            name: "Design.fig",
            icon: "/images/plain.png",
            kind: "file",
            fileType: "fig",
            href: "https://google.com",
            position: "top-60 left-5",
          },
        ],
      },
  
      // ▶ Project 3
      {
        id: 7,
        name: "HapeCorp",
        icon: "/images/folder.png",
        kind: "folder",
        position: "top-10 left-80",
        windowPosition: "top-[33vh] left-7",
        children: [
          {
            id: 1,
            name: "HapeCorp Project.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-5 left-10",
            description: [
              "HapeCorp is a 3D interactive marketing website built with Vue, TypeScript, and Nuxt as a minimal, performance-focused starter.",
              "It combines Three.js and GSAP to create smooth, scroll-driven scenes and micro‑interactions that feel playful but still product-focused.",
              "The goal is to showcase the brand in a cinematic way while keeping navigation simple and content readable.",
              "Under the hood it uses a modern Vite-based toolchain, making iteration fast and keeping the 3D experience optimized for the web.",
            ],
          },
          {
            id: 2,
            name: "HapeCorp.com",
            icon: "/images/safari.png",
            kind: "file",
            fileType: "url",
            href: "..",
            position: "top-10 right-20",
          },
          {
            id: 4,
            name: "HapeCorp.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-52 right-80",
            imageUrl: "/images/project-3.png",
          },
          {
            id: 5,
            name: "Design.fig",
            icon: "/images/plain.png",
            kind: "file",
            fileType: "fig",
            href: "https://google.com",
            position: "top-60 right-20",
          },
        ],
      },

      // ▶ Project 4
      {
        id: 8,
        name: "MilkRush",
        icon: "/images/folder.png",
        kind: "folder",
        position: "top-40 left-5",
        windowPosition: "top-[45vh] left-7",
        children: [
          {
            id: 1,
            name: "MilkRush Project.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-5 left-10",
            description: [
              "MilkRush is a Info-fi community engagement platform that gamifies Discord and twitter activity using “Milk” points.",
              "It’s built around a Next.js 15 app and a Discord bot that work together to track messages, score communities, and surface them on a live leaderboard.",
              "Admins get dashboards, statistics, and visualizations powered by PostgreSQL, Prisma, and Highcharts, with Tailwind and shadcn/ui for a clean interface.",
              "The focus is on rewarding real participation, making it easy for web3 and meme communities to grow and compete in a fun, transparent way.",
            ],
          },
          {
            id: 2,
            name: "MilkRush.com",
            icon: "/images/safari.png",
            kind: "file",
            fileType: "url",
            href: "..",
            position: "top-10 right-20",
          },
          {
            id: 4,
            name: "MilkRush.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-52 right-80",
            imageUrl: "/images/project-4.png",
          },
        ],
      },

      // ▶ Project 5
      {
        id: 9,
        name: "TokenDropper",
        icon: "/images/folder.png",
        kind: "folder",
        position: "top-60 left-80",
        windowPosition: "top-[60vh] left-7",
        children: [
          {
            id: 1,
            name: "TokenDropper.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-5 left-10",
            description: [
              "TokenDropper is a fast, serverless token airdrop web app that lets you batch airdrop ERC tokens to many wallets in a single, optimized transaction flow.",
              "It’s built with React and Vite for a minimal, high-performance frontend with hot module replacement and ESLint-enforced clean code.",
              "The app uses libraries like Ethers.js or Viem to interact with EVM-compatible chains and is deployed serverlessly (e.g. Vercel/Netlify), so no dedicated backend is required.",
              "This version is tailored for the Monad ecosystem, supporting gas-efficient batched airdrops to any number of wallets on the Monad chain.",
            ],
          },
          {
            id: 2,
            name: "https://token-dropper.vercel.app/",
            icon: "/images/safari.png",
            kind: "file",
            fileType: "url",
            href: "https://token-dropper.vercel.app/",
            position: "top-10 right-20",
          },
          {
            id: 4,
            name: "TokenDropper.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-52 right-80",
            imageUrl: "/images/project-5.png",
          },
          {
            id: 5,
            name: "Design.fig",
            icon: "/images/plain.png",
            kind: "file",
            fileType: "fig",
            href: "https://google.com",
            position: "top-60 right-20",
          },
        ],
      },

      // ▶ Project 6
      {
        id: 10,
        name: "Nad Court",
        icon: "/images/folder.png",
        kind: "folder",
        position: "top-72 left-10",
        windowPosition: "top-[75vh] left-7",
        children: [
          {
            id: 1,
            name: "Nad Court (Hackathon).txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-5 left-10",
            description: [
              "Nad Court is a decentralized AI justice system built for the Moltiverse Hackathon, running a 3-tier hierarchical court where autonomous agents judge other agents.",
              "The core innovation is using only a single AI call per case (around 5% AI, 95% Python logic), while all decisions and case outcomes are stored permanently on the Monad blockchain.",
              "The system models Local, High, and Supreme Nad Courts with different juror counts, stake requirements, and thresholds, supported by Python agents for reporting, judging, jury voting, execution, and appeals.",
              "The project includes an on-chain Monad smart contract, a Phoenix Wright-style gamified React frontend, and a full agent orchestration layer to simulate the entire justice pipeline end to end.",
            ],
          },
          {
            id: 2,
            name: "Nad Court.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-52 right-80",
            imageUrl: "/images/project-6.png",
          },
          {
            id: 3,
            name: "Design.fig",
            icon: "/images/plain.png",
            kind: "file",
            fileType: "fig",
            href: "https://nad-court.vercel.app/",
            position: "top-60 right-20",
          },
        ],
      },

      // ▶ Project 7
      {
        id: 11,
        name: "Bera Gang",
        icon: "/images/folder.png",
        kind: "folder",
        position: "top-80 left-80",
        windowPosition: "top-[10vh] left-[55vw]",
        children: [
          {
            id: 1,
            name: "Bera Gang.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-5 left-10",
            description: [
              "Bera Gang is an NFT staking platform built on Berachain where users stake NFTs and earn rewards (calculated / distributed by on-chain smart contract) based on the amount (and/or tier) of NFTs staked.",
              "The reward engine calculates each staker’s share from staking weight over time, then distributes rewards through an on-chain smart contract for transparent, verifiable payouts.",
              "It supports deposit/withdraw flows, reward accrual, and claimable distributions, making it easy to manage long-term NFT staking incentives on Berachain.",
            ],
          },
          {
            id: 2,
            name: "BeraGang.jpg",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-52 right-80",
            imageUrl: "/images/project-7.jpg",
          },
          {
            id: 3,
            name: "BeraGang-UI.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-60 right-20",
            imageUrl: "/images/project-7.1.png",
          },
        ],
      },

      // ▶ Project 12
      {
        id: 12,
        name: "Snapshot",
        icon: "/images/folder.png",
        kind: "folder",
        position: "top-80 left-10",
        windowPosition: "top-[22vh] left-[55vw]",
        children: [
          {
            id: 1,
            name: "Snapshot.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-5 left-10",
            description: [
              "Snapshot is a high-speed NFT snapshot tool that captures NFT holder states efficiently for reward, allowlist, and analytics workflows.",
              "It uses Lens contracts to query and process NFT holder data with fast execution while preserving reliable on-chain indexing behavior.",
              "The tool is optimized for rapid snapshot generation so communities can run campaigns and distributions with accurate holder records.",
            ],
          },
          {
            id: 2,
            name: "Snapshot.com",
            icon: "/images/safari.png",
            kind: "file",
            fileType: "url",
            href: "https://snapshot.udaybuilds.in/",
            position: "top-10 right-20",
          },
        ],
      },
    ],
  };
  
  const ABOUT_LOCATION = {
    id: 2,
    type: "about",
    name: "About me",
    icon: "/icons/info.svg",
    kind: "folder",
    children: [
      {
        id: 1,
        name: "me.png",
        icon: "/images/image.png",
        kind: "file",
        fileType: "img",
        position: "top-10 left-5",
        imageUrl: "/images/uday.jpeg",
      },
      {
        id: 2,
        name: "casual-me.png",
        icon: "/images/image.png",
        kind: "file",
        fileType: "img",
        position: "top-28 right-72",
        imageUrl: "/images/uday.jpg",
      },
      {
        id: 3,
        name: "conference-me.png",
        icon: "/images/image.png",
        kind: "file",
        fileType: "img",
        position: "top-52 left-80",
        imageUrl: "/images/uday.jpeg",
      },
      {
        id: 4,
        name: "about-me.txt",
        icon: "/images/txt.png",
        kind: "file",
        fileType: "txt",
        position: "top-60 left-5",
        subtitle: "Meet the Developer Behind the Code",
        image: "/images/uday.jpeg",
        description: [
          "Hey! I’m Uday Dhorajiya 👋, a web developer who enjoys building sleek, interactive websites that actually work well.",
          "I specialize in React, Vue, Solidityand Next.js—and I love making things feel smooth, fast, and just a little bit delightful.",
          "big on clean UI, good UX.",
          "Outside of dev work, you'll find me tweeting about web3 and nft's.",
        ],
      },
    ],
  };
  
  const RESUME_LOCATION = {
    id: 3,
    type: "resume",
    name: "Resume",
    icon: "/icons/file.svg",
    kind: "folder",
    children: [
      {
        id: 1,
        name: "Resume.pdf",
        icon: "/images/pdf.png",
        kind: "file",
        fileType: "pdf",
        // you can add `href` if you want to open a hosted resume
        // href: "/your/resume/path.pdf",
      },
    ],
  };
  
  const TRASH_LOCATION = {
    id: 4,
    type: "trash",
    name: "Trash",
    icon: "/icons/trash.svg",
    kind: "folder",
    children: [
      {
        id: 1,
        name: "trash1.png",
        icon: "/images/image.png",
        kind: "file",
        fileType: "img",
        position: "top-10 left-10",
        imageUrl: "/images/trash-1.png",
      },
      {
        id: 2,
        name: "trash2.png",
        icon: "/images/image.png",
        kind: "file",
        fileType: "img",
        position: "top-40 left-80",
        imageUrl: "/images/trash-2.png",
      },
    ],
  };
  
  export const locations = {
    work: WORK_LOCATION,
    about: ABOUT_LOCATION,
    resume: RESUME_LOCATION,
    trash: TRASH_LOCATION,
  };
  
  const INITIAL_Z_INDEX = 1000;
  
  const WINDOW_CONFIG = {
    finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  };
  
  export { INITIAL_Z_INDEX, WINDOW_CONFIG };