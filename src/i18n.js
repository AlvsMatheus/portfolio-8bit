import i18n from "i18next"
import { initReactI18next } from "react-i18next"

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: {
                navbar: {
                    home: "Home",
                    projects: "Projects",
                    skills: "Skills",
                    about: "about",
                    contact: "Contact",
                    footer: "Thanks"
                },
                header: {
                    title: "Hi, I'm Matheus",
                    button: "View Projects",
                    toggle: "Retro Theme",
                    
                },
                professionalword: {
                    hi: "Hi",
                    matheus: "I'm Matheus Alves",
                    dev: "Web Developer",
                    welcome: "Welcome to my portfolio"
                },
                titles: {
                    projects: "Projects",
                    skills: "Skills",
                    contact: "Contact"
                },
                footer: {
                    thanks: "Thanks for your interest.",
                    rights: "All rights reserved",
                    end: "The end"
                },
                contact: {
                    button: "Talk to me"
                },
                contactform: {
                    name: "Name",
                    message: "Message",
                    emailplaceholder: "example@gmail.com",
                    messageplaceholder: "Type your message here..."
                },
                contactbutton: {
                    send: "Send Message",
                    sending: "Sending..."
                },
                arrows: {
                    next: "Next",
                    back: "Back"
                },
                about: {
                    position: "Full Stack Web Developer",
                    text:
                        "Software Developer with <strong>hands-on experience</strong> building modern, responsive, and user-focused web applications. Strong experience with <strong>React, Next.js, TypeScript, and Node.js</strong>, delivering complete solutions from front-end to back-end. Proven experience delivering <strong>freelance and personal projects</strong>, with a strong focus on quality, performance, and real-world results. Analytical mindset, <strong>continuous learner</strong>, and highly adaptable to new technologies.",
                    journey: "Journey"
                },
                skills: {
                    howilearn: "How did I learn this technology?",
                    tailwind: {
                        description: "I learned Tailwind CSS through the JavaScript Mastery course on YouTube. Since then, I’ve been applying those skills to develop responsive websites, focusing on embracing modern standards and accelerating my styling workflow."
                    },
                    react: {
                        description: "To push my development skills further, I moved beyond standard JavaScript and embraced React. Through dedicated courses at Net Ninja and Alura, I learned to create dynamic interfaces that are much faster and more user-friendly than traditional websites."
                    },
                    gsap: {
                        description: "I discovered GSAP through the JavaScript Mastery course and immediately fell in love with how it brings websites to life. By building independent projects, I mastered the art of creating high-performance animations that enhance user engagement and provide a premium feel to the interface."
                    },
                    html: {
                        description: "I began my journey into software development by mastering HTML and CSS through the 'Curso em Vídeo' program by Gustavo Guanabara. I built numerous projects to practice semantic HTML, SEO best practices, and modern CSS layouts like Flexbox and Grid."
                    },
                    javascript: {
                        description: "JavaScript was the first programming language I mastered. Through Gustavo Guanabara’s 'Curso em Vídeo,' I learned the fundamentals of logic with the specific goal of bringing interactivity and dynamic behavior to my HTML and CSS projects."
                    },
                    bootstrap: {
                        description: "Bootstrap was my first introduction to CSS frameworks. I taught myself how to use its grid system and components through documentation and AI-guided practice. This experience gave me a solid foundation in responsive design and accelerated my ability to build clean, functional user interfaces."
                    }
                },
                projectcard: {
                    about: "About",
                    visit: "Visit website",
                    projects: {
                        laclothes: "An complete ecommerce made using Next and Firebase Api",
                        panelmanagement: "A management panel built for a technical test, featuring a modular React architecture, state management, and simulated API interactions using Node.js.",
                        mensch: "The front end of an ecommerce with functional filter system integrated with shopify that I made for MENSCH company",
                        patrickportfolio: "That project is a Portfolio that I made for a youtuber client",
                        portfolio3d: "A modern portfolio with 3D animations, based on a JavaScript Mastery tutorial.",
                        recipebook: "That website is a blog with a recipe book theme and the first site that I made using React.",
                        nike: "That is a copy of Nike website was made by following a JavaScript Mastery project and includes my TypeScript implementation."

                    }

                },
                hardskills: {
                    skills: {
                        react: "React/Next",
                        tailwind: "Tailwind CSS",
                        typescript: "Typescript",
                        node: "Node.js",
                        mysql: "My SQL",
                    }
                },
                softskills: {
                    skills: {
                        teamwork: "Teamwork",
                        curiosity: "Curiosity",
                        adaptability: "Adaptability",
                        communication: "Communication",
                        english: "English",
                    }
                }
            }
        },
        pt: {
            translation: {
                navbar: {
                    home: "Início",
                    projects: "Projetos",
                    skills: "habilidades",
                    about: "sobre",
                    contact: "contato",
                    footer: "obrigado"
                },
                header: {
                    title: "Olá, eu sou o Matheus",
                    button: "Ver Projetos",
                    toggle: "Tema Retrô",
                },
                professionalword: {
                    hi: "Olá",
                    matheus: "Sou Matheus Alves",
                    dev: "Desenvolvedor Web",
                    welcome: "Bem vindo ao meu portfólio"
                },
                titles: {
                    projects: "Projetos",
                    skills: "habilidades",
                    contact: "contato"          
                },
                footer: {
                    thanks: "Obrigado pelo interesse.",
                    rights: "Todos os direitos reservados",
                    end: "Fim"
                },
                contact: {
                    button: "Fale comigo"
                },
                contactform: {
                    name: "Nome",
                    message: "Mensagem",
                    emailplaceholder: "exemplo@gmail.com",
                    messageplaceholder: "Escreva sua mensagem aqui..."
                },
                contactbutton: {
                    send: "Enviar Mensagem",
                    sending: "Enviando..."
                },
                arrows: {
                    next: "Avançar",
                    back: "Voltar"
                },
                about: {
                    position: "Desenvolvedor Full Stack",
                    text:
                        "Desenvolvedor de Software com <strong>experiência prática</strong> na criação de aplicações web modernas, responsivas e orientadas ao usuário. Atuação sólida com <strong>React, Next.js, TypeScript e Node.js</strong>, desenvolvendo soluções completas do front-end ao back-end. Experiência comprovada na entrega de <strong>projetos freelance e pessoais</strong>, com foco em qualidade, performance e resultados reais. Perfil analítico, <strong>aprendizado contínuo</strong> e forte capacidade de adaptação a novas tecnologias.",
                    journey: "Jornada"
                },
                skills: {
                    howilearn: "Como eu aprendi essa tecnologia?",
                    tailwind: {
                        description:
                            "Aprendi Tailwind CSS por meio do curso JavaScript Mastery no YouTube. Desde então, venho aplicando esse conhecimento no desenvolvimento de sites responsivos, focando em padrões modernos e em acelerar meu fluxo de estilização."
                        },
                        react: {
                        description:
                            "Para levar minhas habilidades de desenvolvimento mais longe, fui além do JavaScript padrão e abracei o React. Por meio de cursos dedicados no Net Ninja e na Alura, aprendi a criar interfaces dinâmicas, muito mais rápidas e amigáveis do que sites tradicionais."
                        },
                        gsap: {
                        description:
                            "Conheci o GSAP através do curso JavaScript Mastery e imediatamente me apaixonei pela forma como ele dá vida às interfaces. Ao desenvolver projetos independentes, dominei a criação de animações de alta performance que aumentam o engajamento e trazem uma sensação premium à experiência do usuário."
                        },
                        html: {
                        description:
                            "Iniciei minha jornada no desenvolvimento de software dominando HTML e CSS através do programa 'Curso em Vídeo', de Gustavo Guanabara. Desenvolvi diversos projetos para praticar HTML semântico, boas práticas de SEO e layouts modernos em CSS, como Flexbox e Grid."
                        },
                        javascript: {
                        description:
                            "JavaScript foi a primeira linguagem de programação que dominei. Por meio do 'Curso em Vídeo', de Gustavo Guanabara, aprendi os fundamentos da lógica com o objetivo específico de adicionar interatividade e comportamento dinâmico aos meus projetos em HTML e CSS."
                        },
                        bootstrap: {
                        description:
                            "Bootstrap foi meu primeiro contato com frameworks CSS. Aprendi a utilizá-lo de forma autodidata através da documentação e de práticas guiadas por IA. Essa experiência me deu uma base sólida em design responsivo e acelerou minha capacidade de construir interfaces limpas e funcionais."
                        }

                },
                projectcard: {
                    about: "Sobre",
                    visit: "Visitar site",
                    projects: {
                        laclothes: "Um ecommerce completo desenvolvido com Next.js e Firebase API.",
                        panelmanagement:
                            "Um painel de gerenciamento desenvolvido para um teste técnico, com arquitetura React modular, gerenciamento de estado e interações com API simuladas utilizando Node.js.",
                        mensch:
                            "O front-end de um ecommerce com sistema de filtros funcional integrado ao Shopify, desenvolvido para a empresa MENSCH.",
                        patrickportfolio:
                            "Projeto de portfólio desenvolvido para um cliente YouTuber.",
                        portfolio3d:
                            "Um portfólio moderno com animações 3D, baseado em um tutorial do JavaScript Mastery.",
                        recipebook:
                            "Um blog com tema de livro de receitas e o primeiro site que desenvolvi utilizando React.",
                        nike:
                            "Uma réplica do site da Nike, desenvolvida seguindo um projeto do JavaScript Mastery, incluindo minha implementação em TypeScript."
                        }


                },
                hardskills: {
                    skills: {
                        react: "React/Next",
                        tailwind: "Tailwind CSS",
                        typescript: "Typescript",
                        node: "Node.js",
                        mysql: "My SQL",
                    }
                },
                softskills: {
                    skills: {
                        teamwork: "Trabalho-em-equipe",
                        curiosity: "Curiosidade",
                        adaptability: "Adaptabilidade",
                        communication: "Comunicação",
                        english: "Inglês",
                    }
                }
            }
        },
        
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
    escapeValue: false
  }
}) 