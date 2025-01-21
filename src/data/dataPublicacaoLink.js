// dataPublicacaoLink.js
export const dataPublicacaoLink = [
  {
    week: 1, // Semana 1
    days: [
      {
        day: 1, // Dia 1
        publicacoes: [
          {
            id: 1, // Identificador único da publicação
            title: "🌟 Compartilhe sua Experiência",
            content: `
              Conte para sua rede como você alcançou resultados extraordinários e inspire outros a fazerem o mesmo.
              Qual foi o maior desafio que você enfrentou? Como você superou?
            `,
            imgSrc: "path/to/image.jpg", // Caminho da imagem ou vídeo
            imgAlt: "Imagem impactante que complementa a publicação", // Texto alternativo para acessibilidade
            hashtags: ["#Inspiração", "#Resultados", "#Liderança"], // Hashtags relevantes
            linkText: "Saiba mais",
            linkUrl: "https://beacons.ai/cloudexpertschool", // Link para ação
            author: "Cloud Expert School", // Nome do autor ou empresa
          },
        ],
      },
      {
        day: 2, // Dia 2
        publicacoes: [
          {
            id: 2,
            title: "💡 Dica Rápida: Alavanque sua Carreira",
            content: `
              Você sabia que pequenas mudanças no seu perfil podem fazer uma grande diferença?
              Destaque suas conquistas e mantenha seu networking ativo para criar oportunidades.
            `,
            imgSrc: "path/to/another-image.jpg",
            imgAlt: "Imagem de pessoas conectando no LinkedIn",
            hashtags: ["#Dicas", "#Carreira", "#Networking"],
            linkText: "Veja mais dicas",
            linkUrl: "https://beacons.ai/cloudexpertschool",
            author: "Cloud Expert School",
          },
        ],
      },
    ],
  },
];
