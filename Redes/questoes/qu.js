// Quiz completo — 80 questões totais (20 por aula)
// Novas questões geradas exclusivamente com base nos Resumos Oficiais fornecidos
const originalQuizData = [
  {
    subject: "Aula 01/02 — Fundamentos e Classificação de Redes",
    questions: [
      {
        texto: "Uma startup de tecnologia está desenvolvendo um novo sistema de compartilhamento de arquivos de vídeo em altíssima resolução. Para economizar custos com infraestrutura de servidores centrais e aproveitar a capacidade de processamento e upload dos próprios usuários, a equipe de engenharia decide que cada nó da rede deve ser capaz de fornecer e consumir dados simultaneamente, sem uma hierarquia rígida.",
        question: "Esse cenário descreve a aplicação de qual modelo de organização?",
        options: [
          "Modelo Cliente-Servidor.",
          "Redes de Área Pessoal (PAN).",
          "Modelo Peer-to-Peer (P2P).",
          "Sistemas Distribuídos Transparentes.",
          "Redes Privadas Virtuais (VPN)."
        ],
        answer: 2,
        feedback: "✓ Resposta correta: C) Modelo Peer-to-Peer (P2P).\n\nPor que está certa:\nNo modelo P2P não há uma divisão estrita entre quem provê e quem consome o dado, e a responsabilidade é compartilhada entre os indivíduos."
      },
      {
        texto: "Um hospital universitário implementou um sistema onde cada computador opera de forma independente, sem um controle central obrigatório, mas todos estão interconectados por fibra óptica para trocar prontuários médicos. Os usuários precisam lidar explicitamente com diferentes sistemas operacionais e máquinas reais para acessar os dados.",
        question: "De acordo com as definições técnicas de arquitetura, esse sistema é classificado como:",
        options: [
          "Sistema Distribuído.",
          "Rede de Computadores.",
          "Computação em Nuvem Centralizada.",
          "Middleware de Coesão.",
          "Mainframe de Processamento Único."
        ],
        answer: 1,
        feedback: "✓ Resposta correta: B) Rede de Computadores.\n\nPor que está certa:\nUma rede de computadores consiste em computadores autônomos interconectados onde o usuário lida explicitamente com o hardware e há ausência de um software de automação (middleware) que traga coesão."
      },
      {
        texto: "Uma grande rede de supermercados deseja substituir os códigos de barras de seus produtos por etiquetas que permitam o inventário em tempo real sem a necessidade de contato visual ou manual com o item. A solução adotada utiliza chips passivos embutidos nas embalagens, que reportam automaticamente dados de identificação e localização via sinal de radiofrequência para leitores espalhados pelo estoque.",
        question: "Esse cenário é um exemplo prático de qual tecnologia?",
        options: [
          "Redes de TV a Cabo (MAN).",
          "Identificação por Radiofrequência (RFID).",
          "Telefonia IP (VoIP).",
          "Bibliotecas Digitais.",
          "Virtual Private Networks (VPN)."
        ],
        answer: 1,
        feedback: "✓ Resposta correta: B) Identificação por Radiofrequência (RFID).\n\nPor que está certa:\nO RFID utiliza chips passivos para monitoramento e identificação, sendo um pilar da computação ubíqua e Internet das Coisas."
      },
      {
        texto: "Um engenheiro de software precisa decidir entre implementar a lógica de um novo sistema de reservas aéreas como uma rede de computadores pura ou como um sistema distribuído. O sistema será acessado por milhares de agências ao redor do mundo e precisa apresentar-se como uma plataforma única e coesa, independentemente de quantas máquinas físicas estejam envolvidas no processamento.",
        question: "Considerando a diferenciação arquitetural entre esses dois conceitos, qual critério seria determinante para escolher o sistema distribuído?",
        options: [
          "A necessidade de os usuários operarem máquinas autônomas e independentes.",
          "A interconexão física obrigatória via cabos de cobre para evitar latência.",
          "A existência de um middleware que ofereça transparência e faça o conjunto parecer um sistema único e coerente.",
          "A capacidade de trocar informações apenas por ondas eletromagnéticas ou satélites.",
          "A presença de roteadores especializados para escolher as melhores interfaces de saída."
        ],
        answer: 2,
        feedback: "✓ Resposta correta: C) A existência de um middleware que ofereça transparência e faça o conjunto parecer um sistema único e coerente.\n\nPor que está certa:\nA principal diferença arquitetural é que sistemas distribuídos possuem um middleware que garante coesão e transparência, fazendo com que o hardware seja invisível para o usuário, ao contrário das redes de computadores."
      },
      {
        texto: "Uma empresa de advocacia com escritórios em Singapura e Nova York precisa garantir que seus advogados acessem documentos confidenciais de clientes de qualquer localidade, como se estivessem operando um servidor local. Graças à infraestrutura de redes, os arquivos localizados fisicamente em um continente são acessados em tempo real por profissionais no outro lado do globo, eliminando a necessidade de deslocamentos ou envio físico de documentos.",
        question: "Esse benefício das redes de computadores é conhecido como:",
        options: [
          "Economia de Escala de Hardware.",
          "Eliminação da \"tirania da geografia\".",
          "Neutralidade da Rede.",
          "Entretenimento Digital IPTV.",
          "Algoritmo de Roteamento Dinâmico."
        ],
        answer: 1,
        feedback: "✓ Resposta correta: B) Eliminação da \"tirania da geografia\".\n\nPor que está certa:\nO compartilhamento de recursos em rede permite que dados em locais distantes sejam acessados como se fossem locais, removendo limitações geográficas."
      },
      {
        texto: "Durante uma auditoria de TI em uma empresa do setor financeiro, descobriu-se que funcionários estavam utilizando o BitTorrent para baixar arquivos pessoais no ambiente de trabalho. Além do alto consumo de banda, o gestor de segurança identificou que essa tecnologia opera sem um banco de dados centralizado para controle de conteúdo — cada usuário conectado pode simultaneamente baixar e distribuir partes de arquivos para outros participantes da rede.",
        question: "Essa característica de descentralização é típica de qual modelo?",
        options: [
          "Modelos Cliente-Servidor tradicionais.",
          "Redes de Área Pessoal (PAN).",
          "Redes Sociais Controladas.",
          "Sistemas Peer-to-Peer (P2P).",
          "Redes Metropolitanas (MAN) de TV."
        ],
        answer: 3,
        feedback: "✓ Resposta correta: D) Sistemas Peer-to-Peer (P2P).\n\nPor que está certa:\nO BitTorrent é um exemplo moderno de sistema P2P, caracterizado pela descentralização e ausência de um banco de dados de conteúdo central."
      },
      {
        texto: "Uma operadora de internet de grande porte passou a oferecer velocidades de download significativamente menores para serviços de streaming de concorrentes, enquanto o acesso à sua própria plataforma de vídeo permanecia sem restrições. Usuários e entidades reguladoras questionaram a legalidade dessa prática, argumentando que o tráfego de todos os provedores de conteúdo deveria ser tratado de forma igualitária pelos operadores de infraestrutura.",
        question: "Esse debate envolve qual conceito central das questões sociais e éticas das redes modernas?",
        options: [
          "Privacidade de Cookies.",
          "Anonimato Digital.",
          "Neutralidade da Rede.",
          "Segurança de Phishing.",
          "Autonomia de Máquinas."
        ],
        answer: 2,
        feedback: "✓ Resposta correta: C) Neutralidade da Rede.\n\nPor que está certa:\nA neutralidade da rede trata da questão de se todo conteúdo deve ser tratado de forma igualitária pelos operadores."
      },
      {
        texto: "Ao estudar o crescimento das redes sociais e da internet, pesquisadores observaram que plataformas como o Facebook se tornaram exponencialmente mais valiosas à medida que novos usuários ingressavam. Esse fenômeno é explicado por um princípio econômico que descreve a relação entre o número de participantes de uma rede e o valor que ela gera para cada um de seus membros.",
        question: "A \"Lei de Metcalfe\", citada no contexto das aplicações domésticas de redes, afirma:",
        options: [
          "O valor de uma rede cresce linearmente com o número de usuários.",
          "O custo da rede diminui à medida que a largura de banda aumenta.",
          "O valor de uma rede cresce proporcionalmente ao quadrado do número de usuários.",
          "A velocidade da rede dobra a cada 18 meses.",
          "Redes sem fio são sempre menos eficientes que redes cabeadas."
        ],
        answer: 2,
        feedback: "✓ Resposta correta: C) O valor de uma rede cresce proporcionalmente ao quadrado do número de usuários.\n\nPor que está certa:\nConforme as aplicações domésticas, a Lei de Metcalfe indica que o valor de uma rede cresce proporcionalmente ao quadrado do número de usuários."
      },
      {
        texto: "Um edifício inteligente utiliza sensores de temperatura, câmeras e etiquetas RFID para controle de acesso e automação de ambientes. O administrador da rede constatou que dispositivos domésticos mal protegidos — como lâmpadas Wi-Fi e termostatos conectados — foram comprometidos por agentes maliciosos e passaram a enviar requisições coordenadas a servidores externos, sobrecarregando-os e tornando-os indisponíveis para usuários legítimos.",
        question: "Esse problema de segurança, onde dispositivos IoT infectados são utilizados para ataques coordenados, é tecnicamente conhecido como:",
        options: [
          "Middleware Malicioso.",
          "Fragmentação de Dados.",
          "Botnets.",
          "Unicasting.",
          "Virtual Private Network (VPN)."
        ],
        answer: 2,
        feedback: "✓ Resposta correta: C) Botnets.\n\nPor que está certa:\nBotnets são redes de dispositivos infectados usados para ataques coordenados, um dos grandes desafios de segurança na conectividade atual."
      },
      {
        texto: "Para reduzir custos operacionais com deslocamentos e ligações internacionais, uma multinacional com filiais em quatro continentes implementou um sistema integrado de videoconferência e comunicação de voz sobre rede de dados. Com isso, as reuniões antes realizadas presencialmente passaram a ocorrer de forma remota, e as chamadas telefônicas entre filiais deixaram de ser roteadas pelas companhias telefônicas tradicionais.",
        question: "Qual é o componente principal dessa solução e quais custos tradicionais ela visa substituir?",
        options: [
          "Substituem custos de energia e usam a rede de telefonia analógica tradicional.",
          "Substituem custos de viagens e usam a rede de dados em vez da companhia telefônica.",
          "Substituem custos de servidores e usam o modelo P2P exclusivo.",
          "Substituem custos de segurança física e usam RFID em todos os funcionários.",
          "Substituem custos de licenciamento de software e usam redes sociais."
        ],
        answer: 1,
        feedback: "✓ Resposta correta: B) Substituem custos de viagens e usam a rede de dados em vez da companhia telefônica.\n\nPor que está certa:\nTecnologias de VoIP e videoconferência eliminam custos de viagens e as chamadas são realizadas pela rede de dados."
      },
      {
        texto: "Um engenheiro de redes foi contratado para projetar a conectividade de um novo campus universitário onde os prédios estão distribuídos em um raio de 800 metros entre si. Os requisitos do projeto exigem alta velocidade de transferência (até 10 Gbps entre os edifícios) e o menor atraso possível para as aplicações acadêmicas e administrativas.",
        question: "De acordo com a escala física das redes, qual é a classificação correta para esse projeto?",
        options: [
          "Personal Area Network (PAN).",
          "Metropolitan Area Network (MAN).",
          "Local Area Network (LAN).",
          "Wide Area Network (WAN).",
          "Internet Planetária."
        ],
        answer: 2,
        feedback: "✓ Resposta correta: C) Local Area Network (LAN).\n\nPor que está certa:\nAs LANs operam dentro de um único prédio ou campus de até 1 km, com altas velocidades e baixo atraso."
      },
      {
        texto: "Em uma rede de laboratório, todas as máquinas compartilham um único canal de comunicação. Quando qualquer computador envia um pacote, ele é fisicamente recebido por todos os outros dispositivos conectados ao mesmo canal. Contudo, apenas o equipamento cujo endereço corresponde ao campo de destino do pacote efetua o processamento da informação; os demais simplesmente ignoram o dado recebido.",
        question: "Esse tipo de tecnologia de transmissão é conhecido como:",
        options: [
          "Ponto a Ponto.",
          "Broadcast.",
          "Roteamento de Malha.",
          "Unicasting Direto.",
          "Gateway de Tradução."
        ],
        answer: 1,
        feedback: "✓ Resposta correta: B) Broadcast.\n\nPor que está certa:\nRedes de broadcast utilizam um único canal compartilhado onde todas as máquinas recebem o pacote, mas um campo de endereço identifica o destino."
      },
      {
        texto: "Um executivo em viagem de negócios utiliza seu smartphone para conectar-se simultaneamente a fones de ouvido sem fio e a um smartwatch enquanto caminha pelo hotel. Todos esses dispositivos trocam dados em um raio inferior a um metro, sem depender de infraestrutura de rede externa.",
        question: "Essa rede, que opera no alcance de uma pessoa, é classificada como:",
        options: [
          "Local Area Network (LAN).",
          "Wide Area Network (WAN).",
          "Metropolitan Area Network (MAN).",
          "Personal Area Network (PAN).",
          "Virtual Private Network (VPN)."
        ],
        answer: 3,
        feedback: "✓ Resposta correta: D) Personal Area Network (PAN).\n\nPor que está certa:\nAs PANs permitem a comunicação no alcance de uma pessoa (geralmente 1 metro) e o Bluetooth é a tecnologia emblemática para isso."
      },
      {
        texto: "Uma empresa de telecomunicações está expandindo sua rede de fibra óptica transcontinental para interligar data centers na América do Sul, Europa e Ásia. No projeto, máquinas especializadas analisam os pacotes de dados recebidos e executam algoritmos para selecionar a melhor interface de saída, encaminhando os dados por rotas eficientes através de dezenas de nós intermediários ao longo dos continentes.",
        question: "Considerando o hardware de rede de longa distância, quais são os dois componentes fundamentais da \"sub-rede de comunicação\" descritos nesse cenário?",
        options: [
          "Pontos de Acesso e Switches Ethernet.",
          "Linhas de Transmissão e Elementos de Comutação (Roteadores).",
          "Bluetooth Mestre e Smartcards Escravos.",
          "Modems DSL e Cabos de TV Analógica.",
          "Gateways de Tradução e Cookies de Sessão."
        ],
        answer: 1,
        feedback: "✓ Resposta correta: B) Linhas de Transmissão e Elementos de Comutação (Roteadores).\n\nPor que está certa:\nUma WAN interconecta hosts utilizando uma sub-rede composta por linhas de transmissão (fibra, cobre, rádio) e elementos de comutação, que são os roteadores."
      },
      {
        texto: "Uma prefeitura municipal decidiu interconectar digitalmente todas as 47 escolas e 23 postos de saúde espalhados por uma cidade de médio porte, cujos pontos mais distantes estão a aproximadamente 10 km do centro administrativo. Para reduzir custos, o projeto aproveitará a infraestrutura de cabos de TV já instalada ao longo das principais avenidas da cidade.",
        question: "Essa rede é classificada como:",
        options: [
          "LAN (Rede Local).",
          "PAN (Rede Pessoal).",
          "MAN (Rede Metropolitana).",
          "WAN (Rede de Longa Distância).",
          "Ad Hoc (Rede Temporária)."
        ],
        answer: 2,
        feedback: "✓ Resposta correta: C) MAN (Rede Metropolitana).\n\nPor que está certa:\nUma MAN abrange uma cidade inteira (~10 km) e o exemplo clássico é a rede de TV a cabo evoluída para internet."
      },
      {
        texto: "Uma multinacional com filiais em São Paulo, Tóquio e Londres precisa garantir que os funcionários de diferentes países trabalhem de forma integrada, acessando os mesmos sistemas internos como se estivessem na mesma rede local. Alugar linhas dedicadas transcontinentais seria inviável financeiramente, por isso a empresa optou por uma solução que utiliza a infraestrutura pública da Internet para criar canais virtuais criptografados e seguros entre os escritórios.",
        question: "Essa solução técnica é chamada de:",
        options: [
          "Backbone de Alta Velocidade.",
          "Virtual Private Network (VPN).",
          "Gateway de Interconexão.",
          "WiMAX (802.16).",
          "Ethernet Comutada."
        ],
        answer: 1,
        feedback: "✓ Resposta correta: B) Virtual Private Network (VPN).\n\nPor que está certa:\nA VPN cria links virtuais sobre a infraestrutura pública da Internet, oferecendo flexibilidade e custo reduzido."
      },
      {
        texto: "Um prédio tombado pelo patrimônio histórico não pode receber perfurações em suas paredes para passar cabos de rede. A equipe de TI instalou então uma antena Wi-Fi no escritório para conectar os computadores desktop à rede corporativa. Apesar de usar tecnologia sem fio, as máquinas permanecem em posição fixa sobre as mesas, sem qualquer mobilidade.",
        question: "Como essa configuração é classificada quanto ao tipo de rede e à mobilidade dos dispositivos?",
        options: [
          "Com fio e Fixa.",
          "Com fio e Móvel.",
          "Sem fio e Móvel.",
          "Sem fio e Fixa.",
          "Bluetooth Ponto a Ponto."
        ],
        answer: 3,
        feedback: "✓ Resposta correta: D) Sem fio e Fixa.\n\nPor que está certa:\nO dispositivo usa rede sem fio (antena), mas é fixo (desktop no escritório). A computação móvel implica deslocamento, o que não é o caso de um desktop fixo, mesmo usando Wi-Fi."
      },
      {
        texto: "Um profissional utiliza diariamente dois tipos de tecnologia sem fio: o Bluetooth para conectar fones de ouvido e um teclado ao seu notebook, e o WiFi para acessar a internet em cafeterias e salas de reunião. Embora ambas as tecnologias utilizem ondas de rádio para transmissão, elas foram projetadas para escalas de uso e contextos de aplicação bem distintos.",
        question: "Qual é a principal diferença de escala entre as tecnologias Bluetooth e WiFi?",
        options: [
          "O Bluetooth é para redes de longa distância (WAN), enquanto o WiFi é para redes locais (LAN).",
          "O Bluetooth foca na escala de rede pessoal (PAN), enquanto o WiFi opera em escala local (LAN).",
          "O WiFi é imune a interferências, enquanto o Bluetooth exige fios de cobre.",
          "O WiFi só funciona em ambientes fechados, enquanto o Bluetooth cobre cidades inteiras.",
          "Não há diferença técnica, pois ambos utilizam fibras ópticas para transmissão."
        ],
        answer: 1,
        feedback: "✓ Resposta correta: B) O Bluetooth foca na escala de rede pessoal (PAN), enquanto o WiFi opera em escala local (LAN).\n\nPor que está certa:\nA comparação de escala entre redes sem fio é: escala pessoal (Bluetooth/PAN) vs. escala local (WiFi/LAN)."
      },
      {
        texto: "Uma empresa de e-commerce deseja expandir seu alcance de vendas pela internet. O diretor de TI apresenta duas opções de modelo de serviço: no primeiro, um servidor centralizado de alto custo processa todas as requisições dos clientes; no segundo, a lógica de negócio é distribuída por vários servidores espalhados geograficamente, mas toda a infraestrutura aparece aos usuários como uma única plataforma coesa. O diretor argumenta que o segundo modelo é um Sistema Distribuído.",
        question: "Qual das seguintes características, segundo o resumo, é exclusiva dos Sistemas Distribuídos e o diferencia de uma simples rede de computadores?",
        options: [
          "A presença de múltiplos computadores autônomos interconectados por cabos.",
          "A necessidade de o usuário conhecer e acessar cada máquina individualmente.",
          "A existência de um software intermediário (middleware) que cria transparência e a ilusão de um sistema único.",
          "O uso obrigatório de ondas eletromagnéticas como meio de transmissão.",
          "A capacidade de armazenar dados localmente em cada nó da rede."
        ],
        answer: 2,
        feedback: "✓ Resposta correta: C) A existência de um software intermediário (middleware) que cria transparência e a ilusão de um sistema único.\n\nPor que está certa:\nConforme o resumo, o middleware é o componente essencial que diferencia um Sistema Distribuído de uma rede simples — ele garante coesão, transparência e faz com que o hardware seja invisível para o usuário."
      },
      {
        texto: "Um gestor de TI de uma rede de clínicas médicas precisa apresentar aos acionistas os benefícios estratégicos de migrar toda a infraestrutura de dados para uma rede corporativa. Entre os pontos levantados, ele destaca que médicos em cidades distintas poderão compartilhar prontuários eletrônicos armazenados em um único servidor, assim como impressoras de alto custo poderão ser compartilhadas entre múltiplos consultórios no mesmo andar, reduzindo despesas operacionais.",
        question: "Os dois benefícios descritos pelo gestor — acesso remoto a dados e compartilhamento de equipamentos — se enquadram em qual vantagem fundamental das redes de computadores, segundo o resumo?",
        options: [
          "Aplicação do modelo P2P para descentralização do sistema.",
          "Uso de VPN para criptografar os dados entre os consultórios.",
          "Compartilhamento de recursos, eliminando a tirania da geografia e promovendo economia de escala.",
          "Implementação de middleware para garantir transparência total ao usuário.",
          "Utilização da Lei de Metcalfe para justificar o investimento financeiro."
        ],
        answer: 2,
        feedback: "✓ Resposta correta: C) Compartilhamento de recursos, eliminando a tirania da geografia e promovendo economia de escala.\n\nPor que está certa:\nO resumo destaca que o compartilhamento de recursos — como servidores, impressoras e dados — independentemente da localização é um dos principais benefícios das redes, tanto para economia quanto para disponibilidade."
      }
    ]
  },

  {
    subject: "Aula 03/04 — Meios, Dispositivos e Modelos",
    questions: [
      {
        texto: "Em um escritório moderno que passou por recente modernização, o antigo cabeamento coletivo foi substituído por uma arquitetura em que cada computador possui seu próprio cabo físico conectado a um dispositivo central. Esse equipamento recebe os pacotes e, consultando uma tabela de endereços, encaminha os dados exclusivamente para a porta à qual o destinatário está conectado, evitando que os outros computadores recebam pacotes desnecessários.",
        question: "Qual é esse hardware central responsável pelo encaminhamento inteligente?",
        options: [
          "Modem DSL.",
          "Roteador WAN.",
          "Switch Ethernet.",
          "Antena de Satélite.",
          "Gateway de Protocolos."
        ],
        answer: 2,
        feedback: "✓ Resposta correta: C) Switch Ethernet.\n\nPor que está certa:\nO switch é um dispositivo com várias portas que repassa pacotes baseado no endereço de destino apenas para a porta correta."
      },
      {
        texto: "Em uma residência, o roteador doméstico conecta dispositivos Wi-Fi (smartphones e notebooks) a uma rede Ethernet cabeada que por sua vez se liga ao modem do provedor. Internamente, o roteador precisa fazer com que essas duas redes — com padrões de comunicação distintos — funcionem de forma integrada, traduzindo os dados entre os diferentes formatos de pacote utilizados por cada tecnologia.",
        question: "Qual é o nome técnico do dispositivo ou função que realiza essa conexão e tradução entre redes quase sempre incompatíveis?",
        options: [
          "Switch.",
          "Roteador.",
          "Gateway.",
          "Modem.",
          "Access Point."
        ],
        answer: 2,
        feedback: "✓ Resposta correta: C) Gateway.\n\nPor que está certa:\nO gateway é o nome geral para a máquina que oferece a conexão e tradução entre redes incompatíveis."
      },
      {
        texto: "Uma expedição científica instalada na Antártida precisa enviar diariamente grandes volumes de dados climáticos para uma universidade na Europa. A região não dispõe de nenhuma infraestrutura terrestre de cabos de fibra óptica ou torres de rádio. A solução adotada utiliza uma antena no solo que transmite os dados para um equipamento em órbita, o qual redistribui o sinal para uma vasta área geográfica no destino.",
        question: "Quais são as características fundamentais dessa tecnologia de transmissão?",
        options: [
          "Curto alcance (1 metro) e paradigma mestre-escravo.",
          "Alcance metropolitano (10 km) via WiMAX.",
          "Cobertura de áreas sem infraestrutura terrestre e propriedade de transmissão broadcast.",
          "Conexão direta entre dois roteadores via cabo de cobre par trançado.",
          "Uso de switches para encaminhamento inteligente de pacotes locais."
        ],
        answer: 2,
        feedback: "✓ Resposta correta: C) Cobertura de áreas sem infraestrutura terrestre e propriedade de transmissão broadcast.\n\nPor que está certa:\nSistemas via satélite funcionam como broadcast inerente e são fundamentais para cobrir áreas geográficas onde o transporte terrestre é inviável."
      },
      {
        texto: "Uma operadora de internet deseja expandir seus serviços para um bairro recém-construído. Após analisar as alternativas disponíveis, a empresa optou pela tecnologia FTTH (Fiber to the Home), que leva a fibra óptica diretamente às residências dos usuários finais, garantindo velocidades superiores a 100 Mbps.",
        question: "Comparada ao tradicional fio de cobre, qual é a principal vantagem técnica da fibra óptica para o desempenho da rede?",
        options: [
          "Menor custo de instalação em curtas distâncias.",
          "Imunidade a interferências eletromagnéticas e baixíssimo atraso.",
          "Capacidade de transmitir apenas sinais analógicos de voz.",
          "Reutilização obrigatória da infraestrutura de telefonia antiga.",
          "Facilidade em realizar emendas manuais sem equipamentos especializados."
        ],
        answer: 1,
        feedback: "✓ Resposta correta: B) Imunidade a interferências eletromagnéticas e baixíssimo atraso.\n\nPor que está certa:\nA fibra óptica é inerentemente imune a ruídos elétricos e oferece um desempenho superior em termos de atraso e largura de banda."
      },
      {
        texto: "Um pesquisador instalado em uma estação científica remota no interior da Amazônia precisa enviar diariamente grandes volumes de dados meteorológicos e de monitoramento ambiental para centros de processamento localizados em São Paulo e Lisboa. A região não possui cobertura de rede celular, não há torres de rádio nas proximidades e nenhum cabo de fibra óptica chega àquela localidade.",
        question: "Qual tecnologia de transmissão é a mais indicada para garantir a conectividade nessa região geográfica isolada?",
        options: [
          "Ethernet comutada via par trançado.",
          "Redes celulares de curto alcance.",
          "Sistemas via satélite de transmissão broadcast.",
          "Linhas DSL reutilizadas de telefonia.",
          "Conexão Dial-up de 56 kbps."
        ],
        answer: 2,
        feedback: "✓ Resposta correta: C) Sistemas via satélite de transmissão broadcast.\n\nPor que está certa:\nSistemas de satélite são ideais para cobrir áreas onde o transporte terrestre é inviável, funcionando como redes de radiodifusão."
      },
      {
        texto: "Uma empresa com escritórios regionais distribuídos por cidades do interior contratou um provedor de internet para fornecer acesso de banda larga. O provedor optou por uma tecnologia que aproveita a extensa malha de fios de cobre já existente da rede telefônica convencional, evitando a necessidade de instalar novos cabos até cada localidade atendida.",
        question: "Qual é a característica específica de aproveitamento de recursos que define essa tecnologia?",
        options: [
          "Substituição total de todos os fios de cobre por fibras ópticas.",
          "Uso exclusivo de sinais de rádio para evitar atenuação.",
          "Reutilização da infraestrutura telefônica existente para transportar dados digitais.",
          "Transmissão de dados apenas em um sentido (simplex).",
          "Limitação obrigatória da velocidade a 56 kbps."
        ],
        answer: 2,
        feedback: "✓ Resposta correta: C) Reutilização da infraestrutura telefônica existente para transportar dados digitais.\n\nPor que está certa:\nO DSL permite que a rede de dados utilize a \"última milha\" dos fios de cobre das companhias telefônicas."
      },
      {
        texto: "Em uma planta industrial com grandes motores elétricos e equipamentos de soldagem, a equipe de TI registra um alto índice de erros na transmissão de bits pela rede interna baseada em fios de cobre. Os campos eletromagnéticos gerados pelos motores corrompem os sinais elétricos nos cabos, fazendo com que bits '1' sejam recebidos como '0' e vice-versa, comprometendo a integridade dos dados.",
        question: "Para resolver o problema de precisão na entrega dos dados nesse ambiente hostil, qual mudança na infraestrutura física seria a mais eficaz?",
        options: [
          "Aumentar a tensão elétrica nos cabos de par trançado.",
          "Substituir o cabeamento de cobre por fibra óptica.",
          "Instalar antenas WiFi potentes próximas aos motores.",
          "Reduzir o tempo de duração de cada bit para nanosegundos.",
          "Utilizar modems de rádio em frequências compartilhadas."
        ],
        answer: 1,
        feedback: "✓ Resposta correta: B) Substituir o cabeamento de cobre por fibra óptica.\n\nPor que está certa:\nA fibra óptica utiliza luz para transmissão, sendo totalmente imune às interferências eletromagnéticas que afetam o sinal elétrico no cobre."
      },
      {
        texto: "Uma universidade instalou uma rede sem fio baseada no padrão IEEE 802.11 (WiFi) em todos os seus campi para permitir que alunos e professores se conectem com notebooks e smartphones. No centro dessa infraestrutura estão dispositivos responsáveis por gerenciar os clientes sem fio e conectá-los à rede cabeada do campus, funcionando como estação-base para a comunicação compartilhada na área de cobertura.",
        question: "Qual é o principal componente que gerencia essa comunicação em uma rede local sem fio?",
        options: [
          "Modem DSL.",
          "Ponto de Acesso (Access Point).",
          "Cabo Coaxial de TV.",
          "Gateway de Tradução.",
          "Backbone de fibra internacional."
        ],
        answer: 1,
        feedback: "✓ Resposta correta: B) Ponto de Acesso (Access Point).\n\nPor que está certa:\nO Ponto de Acesso atua como uma estação-base que gerencia os dispositivos wireless e os conecta à rede externa."
      },
      {
        texto: "Na camada física de uma rede de dados, engenheiros definem padrões técnicos que estabelecem quais níveis de tensão elétrica representam o valor binário '1' e quais representam o valor '0'. Esses padrões, junto com especificações de conectores, pinagens e características elétricas, compõem a base da transmissão bruta de informações entre dispositivos.",
        question: "Qual é o objetivo central ao definir esses padrões técnicos na transmissão bruta?",
        options: [
          "Garantir que a lógica do quadro de dados seja verificada pelo hardware.",
          "Assegurar que um bit '1' enviado seja interpretado corretamente como '1' no destino.",
          "Impedir que o sinal viaje simultaneamente nos dois sentidos do cabo.",
          "Priorizar o tráfego de vídeo sobre o tráfego de texto no meio físico.",
          "Eliminar a necessidade de conectores e pinagens padronizadas."
        ],
        answer: 1,
        feedback: "✓ Resposta correta: B) Assegurar que um bit '1' enviado seja interpretado corretamente como '1' no destino.\n\nPor que está certa:\nO foco da transmissão física é a movimentação bruta de sinais e a garantia da integridade bit a bit."
      },
      {
        texto: "As principais operadoras de telecomunicações do Brasil mantêm redes tronco (backbones) que cruzam o território nacional e se conectam a cabos submarinos internacionais. Esses sistemas são responsáveis por transportar o tráfego agregado de milhões de usuários, unindo milhares de roteadores e data centers em escala nacional e intercontinental.",
        question: "Qual é o meio de transmissão predominante nessas redes de backbone devido à sua alta largura de banda?",
        options: [
          "Satélites de órbita baixa.",
          "Cabos de cobre par trançado.",
          "Fibras ópticas de alta velocidade.",
          "Ondas de rádio infravermelho.",
          "Conexões Dial-up tradicionais."
        ],
        answer: 2,
        feedback: "✓ Resposta correta: C) Fibras ópticas de alta velocidade.\n\nPor que está certa:\nA fibra óptica excede o cobre em todas as dimensões de desempenho, sendo essencial para as conexões de backbone."
      },
      {
        texto: "Um condomínio residencial já possuía toda a infraestrutura de TV a cabo instalada, com cabeamento coaxial chegando a cada apartamento. O provedor de internet local aproveitou essa estrutura existente para oferecer acesso à web aos moradores, sem precisar instalar novos cabos. Um dispositivo específico é instalado em cada unidade para viabilizar essa conexão.",
        question: "Como esse dispositivo consegue transportar dados de internet utilizando a infraestrutura de TV a cabo?",
        options: [
          "Convertendo sinais digitais em ondas de som audíveis pela linha telefônica.",
          "Utilizando canais de TV a cabo que não estão sendo usados para a programação.",
          "Criando uma rede sem fio metropolitana baseada em satélites.",
          "Transmitindo bits através das tubulações de água e esgoto.",
          "Exigindo que o usuário instale uma antena parabólica dedicada em cada cômodo."
        ],
        answer: 1,
        feedback: "✓ Resposta correta: B) Utilizando canais de TV a cabo que não estão sendo usados para a programação.\n\nPor que está certa:\nO modem a cabo aproveita o espectro não utilizado da rede de televisão para o transporte de dados digitais."
      },
      {
        texto: "Ao projetar uma rede sem fio para um grande armazém de logística, um engenheiro percebe que os coletores de dados portáteis (PDAs) perdem frequentemente a conexão quando se movem atrás de prateleiras metálicas de grande porte. O sinal de rádio não consegue atravessar ou contornar adequadamente essas estruturas, resultando em falhas de transmissão e quedas de conexão em certas zonas do armazém.",
        question: "Qual conceito físico explica essa degradação e qual seria uma solução possível de acordo com os dispositivos de rede?",
        options: [
          "Atenuação do sinal no vácuo; solução: usar cabos coaxiais nos PDAs.",
          "Interferência de frequência; solução: usar exclusivamente modems DSL.",
          "Obstrução e reflexão do sinal; solução: instalar múltiplos Pontos de Acesso (APs) para cobertura.",
          "Latência de processamento; solução: aumentar a memória RAM dos coletores.",
          "Falha no protocolo de voz; solução: substituir o rádio por fibra óptica em cada PDA."
        ],
        answer: 2,
        feedback: "✓ Resposta correta: C) Obstrução e reflexão do sinal; solução: instalar múltiplos Pontos de Acesso (APs) para cobertura.\n\nPor que está certa:\nSinais de rádio (meios não guiados) são afetados pelo ambiente físico e obstáculos, exigindo estações-base (APs) bem posicionadas para garantir o repasse de pacotes."
      },
      {
        texto: "Um provedor de internet (ISP) opera uma rede de longa distância com dezenas de pontos de presença espalhados pelo país. Quando um pacote de dados de um cliente chega a um desses pontos, um computador especializado analisa o endereço de destino e executa um algoritmo para determinar por qual interface de saída o dado deve seguir para alcançar o destino final de forma eficiente.",
        question: "Qual é o nome desse dispositivo e de sua função principal?",
        options: [
          "Switch; função de enquadramento de bits.",
          "Roteador; função de roteamento e escolha de caminho.",
          "Modem; função de modulação analógica.",
          "Gateway; função de tradução de voz humana.",
          "Access Point; função de gerar sinal de rádio."
        ],
        answer: 1,
        feedback: "✓ Resposta correta: B) Roteador; função de roteamento e escolha de caminho.\n\nPor que está certa:\nRoteadores são especialistas em decidir caminhos em redes complexas (WANs) através de algoritmos de roteamento."
      },
      {
        texto: "Uma empresa de software legado utiliza internamente uma rede baseada em uma arquitetura proprietária desenvolvida na década de 1990, com formatos de pacotes e regras de comunicação completamente distintas do padrão TCP/IP da Internet. Para que os desenvolvedores possam acessar repositórios e APIs externas sem substituir toda a infraestrutura interna, é necessário um equipamento capaz de converter e traduzir os dados entre os dois ambientes incompatíveis.",
        question: "Esse dispositivo responsável pela conversão e tradução entre redes incompatíveis é chamado de:",
        options: [
          "Roteador Unicast.",
          "Switch de Alta Velocidade.",
          "Gateway.",
          "Antena de Satélite.",
          "Hub de Barramento."
        ],
        answer: 2,
        feedback: "✓ Resposta correta: C) Gateway.\n\nPor que está certa:\nO gateway é o termo geral para a máquina que oferece conexão e tradução entre redes incompatíveis."
      },
      {
        texto: "Muitos usuários residenciais acessam a internet por meio de conexões via linha telefônica ou TV a cabo. Para viabilizar esse acesso, um dispositivo específico é instalado entre o computador do usuário e o meio físico de transmissão. Esse equipamento precisa converter os dados produzidos pelo computador — que trabalha exclusivamente com sinais digitais binários — em sinais compatíveis com o meio físico utilizado pelo provedor.",
        question: "Qual é a função técnica primordial que o Modem (Modulador-Demodulador) desempenha para o computador?",
        options: [
          "Escolher a melhor rota para o pacote na internet.",
          "Armazenar todos os arquivos do usuário em nuvem.",
          "Converter bits digitais do computador em sinais analógicos compatíveis com o meio físico.",
          "Impedir que vírus entrem na rede local.",
          "Traduzir o idioma das páginas web para o usuário."
        ],
        answer: 2,
        feedback: "✓ Resposta correta: C) Converter bits digitais do computador em sinais analógicos compatíveis com o meio físico.\n\nPor que está certa:\nA função do modem é a conversão entre dados digitais e os sinais (elétricos ou de rádio) do canal físico."
      },
      {
        texto: "Uma empresa de consultoria em expansão reformou seu prédio e equipou todas as salas de reunião e andares com conectividade sem fio. O objetivo é que os funcionários possam mover-se livremente com seus notebooks entre qualquer ambiente do edifício sem perder a conexão à rede corporativa. Para isso, o administrador instalou múltiplos dispositivos espalhados estrategicamente pelo prédio, cada um gerenciando os clientes wireless de sua área e conectando-os à rede cabeada existente.",
        question: "Esses dispositivos responsáveis por gerenciar a comunicação sem fio e repassar os dados para a rede cabeada são:",
        options: [
          "Switches de Backbone.",
          "Gateways de Protocolo.",
          "Pontos de Acesso (Access Points).",
          "Roteadores de Borda.",
          "Modems de Fibra Óptica."
        ],
        answer: 2,
        feedback: "✓ Resposta correta: C) Pontos de Acesso (Access Points).\n\nPor que está certa:\nO AP é o componente central que gerencia dispositivos wireless em uma LAN."
      },
      {
        texto: "Quatro pesquisadores de campo estão em uma área remota realizando um levantamento topográfico. Sem infraestrutura de rede disponível, eles precisam compartilhar arquivos de mapas e coordenadas entre seus notebooks em tempo real. Para isso, configuraram seus dispositivos para se comunicarem diretamente entre si via sinal de rádio Wi-Fi, sem nenhum equipamento central de infraestrutura.",
        question: "Essa configuração de rede sem fio sem dispositivo central é conhecida como:",
        options: [
          "Rede baseada em Ponto de Acesso.",
          "Rede Ad-hoc.",
          "Rede de Satélite Planetária.",
          "Sistema de Tradução Gateway.",
          "Ethernet Comutada."
        ],
        answer: 1,
        feedback: "✓ Resposta correta: B) Rede Ad-hoc.\n\nPor que está certa:\nO modo ad-hoc permite que dispositivos próximos se comuniquem diretamente, sem a necessidade de um AP central."
      },
      {
        texto: "Em uma empresa de médio porte, o administrador de rede utiliza dois tipos distintos de dispositivos de interconexão: um para conectar os computadores internamente no escritório (segmento local), e outro para conectar esse escritório à internet e às filiais em outras cidades. Cada dispositivo possui características e capacidades adequadas à sua escala de atuação.",
        question: "Qual é a principal diferença de funcionamento entre um Switch e um Roteador, considerando a escala de atuação de cada um?",
        options: [
          "O Switch conecta computadores em uma rede local (LAN), enquanto o Roteador interconecta redes distintas (WAN).",
          "O Switch só aceita fibras ópticas, enquanto o Roteador só funciona com cabos de telefone.",
          "O Roteador é um dispositivo passivo sem energia, enquanto o Switch é um computador potente.",
          "O Switch escolhe caminhos globais na Internet, enquanto o Roteador apenas repassa pacotes para a porta vizinha.",
          "Ambos são o mesmo dispositivo, mudando apenas o nome conforme o fabricante."
        ],
        answer: 0,
        feedback: "✓ Resposta correta: A) O Switch conecta computadores em uma rede local (LAN), enquanto o Roteador interconecta redes distintas (WAN).\n\nPor que está certa:\nSwitches operam internamente em LANs e roteadores operam na interconexão de redes."
      },
      {
        texto: "O setor administrativo de um hospital opera com computadores conectados por cabos Ethernet, enquanto os médicos utilizam tablets sem fio para acessar prontuários durante as visitas aos leitos. Para que os dados circulem de forma transparente entre a rede cabeada e os dispositivos móveis, o administrador precisa de um equipamento específico que faça o repasse dos pacotes entre os dois meios de transmissão.",
        question: "Qual dispositivo realiza esse repasse de pacotes entre o meio sem fio e o cabeado?",
        options: [
          "Gateway de Tradução de Arquitetura.",
          "Ponto de Acesso (Access Point).",
          "Modem de TV a Cabo.",
          "Roteador de Satélite.",
          "Antena Celular de Longo Alcance."
        ],
        answer: 1,
        feedback: "✓ Resposta correta: B) Ponto de Acesso (Access Point).\n\nPor que está certa:\nO AP tem a função específica de encaminhar pacotes entre máquinas sem fio e a rede cabeada externa."
      },
      {
        texto: "Em uma linha de montagem automatizada, robôs e sensores precisam trocar comandos e leituras em tempo real. O engenheiro responsável analisa o meio de comunicação mais adequado e observa que o fio de cobre sofre com a atenuação do sinal ao longo de grandes distâncias dentro da planta. Ele considera que a atenuação é a perda gradual de intensidade e amplitude do sinal durante a propagação, o que compromete a confiabilidade da rede.",
        question: "Qual é o efeito direto da atenuação em um meio guiado de cobre e qual recurso pode ser utilizado para compensá-la, conforme o resumo?",
        options: [
          "A atenuação aumenta a largura de banda; o recurso para compensar é reduzir o número de nós na rede.",
          "A atenuação converte sinais analógicos em digitais; o recurso para compensar é usar um gateway.",
          "A atenuação provoca a perda progressiva de intensidade do sinal; o recurso para compensar é o uso de amplificadores.",
          "A atenuação causa colisões de pacotes; o recurso para compensar é substituir o switch por um hub.",
          "A atenuação elimina interferências eletromagnéticas; o recurso para compensar é usar cabos coaxiais."
        ],
        answer: 2,
        feedback: "✓ Resposta correta: C) A atenuação provoca a perda progressiva de intensidade do sinal; o recurso para compensar é o uso de amplificadores.\n\nPor que está certa:\nO resumo define atenuação como a perda gradual de intensidade, potência ou amplitude do sinal. Para cabos de cobre, amplificadores são utilizados para regenerar o sinal ao longo do trajeto."
      }
    ]
  },

  {
    subject: "Aula 05 — Topologias e Desempenho",
    questions: [
      {
        texto: "Uma grande operadora de telecomunicações mantém uma rede de longa distância composta por dezenas de roteadores interconectados por linhas de fibra óptica de alta velocidade. Durante uma tempestade, o cabo que conecta os nós de Brasília e Goiânia foi rompido. Apesar disso, o tráfego entre essas cidades continuou fluindo normalmente, sendo automaticamente redirecionado por São Paulo e Belo Horizonte.",
        question: "Essa característica de resiliência e redirecionamento automático é típica de qual configuração de dispositivos?",
        options: [
          "Topologia em Barramento com cabos de cobre.",
          "Topologia em Estrela centralizada em um único Switch.",
          "Topologia em Malha (Mesh) com roteamento dinâmico.",
          "Conexão Dial-up ponto a ponto temporária.",
          "Rede Ad-hoc sem infraestrutura."
        ],
        answer: 2,
        feedback: "✓ Resposta correta: C) Topologia em Malha (Mesh) com roteamento dinâmico.\n\nPor que está certa:\nRedes em malha possuem conexões redundantes e utilizam roteadores para encontrar caminhos alternativos em caso de falhas."
      },
      {
        texto: "Durante um evento de transmissão ao vivo de grande audiência, centenas de computadores de uma emissora passaram a enviar dados simultaneamente para o servidor de streaming. O roteador central, incapaz de processar todos os pacotes recebidos, começou a encher seus buffers de memória e a descartar os pacotes excedentes. Os computadores da rede perceberam as perdas e reduziram automaticamente sua taxa de envio.",
        question: "Qual é o nome do fenômeno que levou ao descarte de pacotes nesse cenário?",
        options: [
          "Unicasting Direto.",
          "Roteamento Estático.",
          "Congestionamento.",
          "Modulação de Amplitude.",
          "Conversão de Protocolos."
        ],
        answer: 2,
        feedback: "✓ Resposta correta: C) Congestionamento.\n\nPor que está certa:\nO congestionamento surge quando a demanda supera a capacidade de entrega da rede, resultando em sobrecarga e perda de dados."
      },
      {
        texto: "Uma agência de publicidade reformulou recentemente sua rede local. Na nova configuração, todos os computadores estão conectados individualmente a um hardware central (switch), que encaminha os dados especificamente para o destinatário final. Durante uma semana de trabalho intensa, o cabo de conexão do computador de um designer rompeu-se acidentalmente. O restante da agência continuou operando normalmente, enquanto apenas a máquina do designer ficou sem acesso à rede.",
        question: "Qual topologia está sendo utilizada e qual sua principal vantagem demonstrada nesse incidente?",
        options: [
          "Topologia em Barramento; facilidade de instalação.",
          "Topologia em Estrela; isolamento de falhas.",
          "Topologia em Anel; latência determinística.",
          "Topologia em Malha; redundância de caminhos.",
          "Topologia Ponto a Ponto; simplicidade de design."
        ],
        answer: 1,
        feedback: "✓ Resposta correta: B) Topologia em Estrela; isolamento de falhas.\n\nPor que está certa:\nNa topologia em estrela cada dispositivo conecta-se a um nó central (switch) de forma independente; se um cabo falha, apenas aquela conexão é afetada."
      },
      {
        texto: "Um provedor de backbone global é responsável por garantir a continuidade do tráfego de dados intercontinental mesmo diante de falhas físicas na infraestrutura. Para isso, a rede foi projetada com múltiplas conexões entre os nós, de forma que, se um cabo submarino ou um roteador de grande porte sofrer uma avaria, os pacotes sejam automaticamente redirecionados por rotas alternativas sem interrupção do serviço.",
        question: "Qual topologia e qual funcionalidade técnica são fundamentais para garantir essa resiliência?",
        options: [
          "Topologia em Árvore e alocação estática.",
          "Topologia em Barramento e difusão de sinal.",
          "Topologia em Malha (Mesh) e roteamento dinâmico.",
          "Topologia em Anel e regeneração de sinal.",
          "Topologia Estrela e comutação por hardware."
        ],
        answer: 2,
        feedback: "✓ Resposta correta: C) Topologia em Malha (Mesh) e roteamento dinâmico.\n\nPor que está certa:\nA topologia em malha oferece conexões redundantes e o roteamento dinâmico permite encontrar novos caminhos em caso de falhas."
      },
      {
        texto: "Durante uma transmissão de videoaula ao vivo para alunos de uma universidade federal, os participantes começaram a reportar que a imagem \"congela\" momentaneamente a cada poucos minutos e o áudio fica fora de sincronia com os movimentos do professor. O administrador da rede verificou que a largura de banda disponível era suficiente para a transmissão, mas identificou que o tempo de entrega dos pacotes variava de forma irregular entre cada envio.",
        question: "Esse problema de desempenho, causado pela variação irregular no tempo de entrega dos pacotes, é tecnicamente conhecido como:",
        options: [
          "Throughput (Vazão).",
          "Propagation Delay (Atraso de Propagação).",
          "Jitter (Variação de Atraso).",
          "Multiplexação Estatística.",
          "Retransmissão por Erro."
        ],
        answer: 2,
        feedback: "✓ Resposta correta: C) Jitter (Variação de Atraso).\n\nPor que está certa:\nO jitter é o atraso desigual na entrega de pacotes, o que prejudica a suavidade de aplicações em tempo real como áudio e vídeo."
      },
      {
        texto: "O engenheiro de redes de uma empresa multinacional precisa decidir como distribuir a capacidade de um link de comunicação entre os diferentes departamentos. Ele opta por um modelo dinâmico que aloca o recurso conforme a demanda real de cada setor — ao contrário de reservar fatias fixas de capacidade para cada departamento, independente do uso efetivo.",
        question: "Qual é o nome dessa técnica e qual o risco associado se a demanda total exceder a capacidade do link?",
        options: [
          "Alocação Estática; risco de desperdício de banda.",
          "Multiplexação Estatística; risco de congestionamento e descarte de pacotes.",
          "Comutação em Estrela; risco de falha no nó central.",
          "Regeneração em Anel; risco de latência determinística.",
          "Padronização IEEE 802.3; risco de incompatibilidade de hardware."
        ],
        answer: 1,
        feedback: "✓ Resposta correta: B) Multiplexação Estatística; risco de congestionamento e descarte de pacotes.\n\nPor que está certa:\nA multiplexação estatística aloca o canal dinamicamente sob demanda; o risco é o congestionamento quando a demanda supera a capacidade."
      },
      {
        texto: "Uma empresa está modernizando toda a sua infraestrutura de rede e adquirindo equipamentos de diferentes fabricantes: switches da marca A, access points da marca B e roteadores da marca C. O gerente técnico exige que todos os componentes adquiridos obedeçam obrigatoriamente aos padrões IEEE 802.3 (Ethernet cabeada) e IEEE 802.11 (Wi-Fi), independentemente do fabricante escolhido.",
        question: "Qual é o objetivo principal dessa exigência no contexto organizacional?",
        options: [
          "Garantir que a rede opere apenas com cabos de cobre.",
          "Permitir a criação de modelos teóricos proprietários.",
          "Garantir a compatibilidade e interoperabilidade entre dispositivos de diferentes fabricantes.",
          "Aumentar o atraso de propagação para evitar erros.",
          "Eliminar a necessidade de protocolos de software."
        ],
        answer: 2,
        feedback: "✓ Resposta correta: C) Garantir a compatibilidade e interoperabilidade entre dispositivos de diferentes fabricantes.\n\nPor que está certa:\nÓrgãos como o IEEE garantem que interfaces e protocolos sejam universais, permitindo que produtos de marcas distintas funcionem juntos."
      },
      {
        texto: "Durante um período de pico de acessos em uma empresa de e-commerce (como uma Black Friday), o roteador central passou a receber um volume de pacotes muito superior à sua capacidade de processamento. Os buffers de memória do equipamento ficaram completamente cheios, forçando o descarte dos pacotes que continuavam chegando. Os servidores e computadores da rede, ao perceberem as perdas, reduziram automaticamente a taxa de envio de dados.",
        question: "Esse cenário descreve um problema de:",
        options: [
          "Baixa Amplitude de Pico.",
          "Congestionamento (Sobrecarga).",
          "Falha na Padronização ISO.",
          "Erro de Fase na Onda Seno.",
          "Incompatibilidade de Gateway."
        ],
        answer: 1,
        feedback: "✓ Resposta correta: B) Congestionamento (Sobrecarga).\n\nPor que está certa:\nO congestionamento ocorre quando o volume de tráfego supera a capacidade de entrega, levando ao preenchimento de buffers e descarte de dados."
      },
      {
        texto: "Um laboratório universitário de pesquisa em redes utiliza uma topologia legada onde todas as máquinas são conectadas por meio de um único cabo coaxial que percorre toda a sala em linha reta. Durante um experimento, um aluno acidentalmente cortou o cabo central ao reposicioná-lo na bancada.",
        question: "Qual foi a consequência imediata para a rede após o corte do cabo?",
        options: [
          "Apenas as máquinas antes do corte continuaram funcionando.",
          "A rede continuou operando normalmente via rádio.",
          "Ocorreu a interrupção total da comunicação em toda a rede.",
          "A rede automaticamente mudou para uma topologia em anel.",
          "A velocidade da rede dobrou devido à diminuição do tamanho do cabo."
        ],
        answer: 2,
        feedback: "✓ Resposta correta: C) Ocorreu a interrupção total da comunicação em toda a rede.\n\nPor que está certa:\nNa topologia em barramento, um rompimento no cabo central (backbone) resulta na falha total da rede."
      },
      {
        texto: "Uma rede de sensores industriais opera em um ambiente com muitos motores elétricos que geram intenso ruído eletromagnético. Para garantir a integridade dos dados, o sistema utiliza códigos redundantes que permitem identificar quando um bit foi corrompido durante a transmissão. Ao detectar um erro, o sistema solicita que o transmissor reenvie o pacote comprometido.",
        question: "Quais são as duas métricas de confiabilidade aplicadas nesse sistema?",
        options: [
          "Amplitude e Frequência.",
          "Detecção de Erros e Retransmissão.",
          "Sincronização e Jitter.",
          "Unicasting e Multicasting.",
          "Vazão e Throughput."
        ],
        answer: 1,
        feedback: "✓ Resposta correta: B) Detecção de Erros e Retransmissão.\n\nPor que está certa:\nO uso de códigos para localizar falhas é a detecção, e o pedido de novo envio é a retransmissão."
      },
      {
        texto: "Uma empresa de tecnologia conectou seus escritórios em São Paulo e em Lisboa por meio de um cabo de fibra óptica submarino. A distância entre os dois pontos é de aproximadamente 5.000 km, e a velocidade de propagação da luz dentro da fibra é de aproximadamente 200.000 km/s.",
        question: "Qual seria o tempo mínimo para que um sinal chegue ao destino e como isso afeta aplicações de tempo real?",
        options: [
          "25 microssegundos; não afeta o tempo real.",
          "25 milissegundos; pode causar atrasos perceptíveis em voz e jogos.",
          "250 milissegundos; inviabiliza qualquer comunicação digital.",
          "2,5 segundos; requer o uso obrigatório de satélites.",
          "Zero segundos; a luz na fibra é instantânea."
        ],
        answer: 1,
        feedback: "✓ Resposta correta: B) 25 milissegundos; pode causar atrasos perceptíveis em voz e jogos.\n\nPor que está certa:\nCom base no cálculo (5.000 / 200.000 = 0,025s ou 25ms), o atraso de propagação é o tempo para o sinal percorrer o meio e é crítico para aplicações em tempo real."
      },
      {
        texto: "O departamento de TI de uma universidade avalia qual topologia adotar para a rede de um novo bloco acadêmico. A equipe analisa uma configuração em que os dispositivos são conectados em cascata, formando uma estrutura hierárquica onde switches de andar se conectam a um switch central, criando níveis organizados por departamentos e setores.",
        question: "Essa organização hierárquica em níveis de switches, derivada da topologia em estrela, é denominada:",
        options: [
          "Topologia em Anel com token de controle.",
          "Topologia em Barramento compartilhado.",
          "Topologia em Árvore (cascata hierárquica).",
          "Topologia em Malha com caminhos redundantes.",
          "Topologia Ponto a Ponto unicast."
        ],
        answer: 2,
        feedback: "✓ Resposta correta: C) Topologia em Árvore (cascata hierárquica).\n\nPor que está certa:\nO resumo descreve a topologia em árvore como uma estrutura hierárquica baseada na estrela, onde switches são conectados em níveis (cascata), facilitando o gerenciamento e a segmentação da rede por setores."
      },
      {
        texto: "Em uma fábrica de semicondutores, a rede de controle de qualidade utiliza uma topologia em anel onde os dados percorrem os nós em sequência. O técnico de TI observa que cada nó da rede não apenas recebe a informação, mas também a regenera e retransmite para o próximo dispositivo do circuito, garantindo a integridade do sinal ao longo de todo o trajeto.",
        question: "Qual é a característica da topologia em anel que torna cada nó um elemento ativo na manutenção do sinal e qual mecanismo essa topologia utiliza para controlar o acesso ao meio?",
        options: [
          "Cada nó armazena os dados em cache; o controle é feito por endereços IP estáticos.",
          "Cada nó atua como repetidor do sinal; o controle de acesso é feito por token.",
          "Cada nó comprime os dados antes de repassar; o controle é por broadcast contínuo.",
          "Cada nó seleciona o melhor caminho; o controle é por algoritmo de roteamento dinâmico.",
          "Cada nó verifica erros e descarta pacotes corrompidos; o controle é por colisão CSMA/CD."
        ],
        answer: 1,
        feedback: "✓ Resposta correta: B) Cada nó atua como repetidor do sinal; o controle de acesso é feito por token.\n\nPor que está certa:\nO resumo descreve que na topologia em anel os dados circulam em um único sentido, cada nó atua como repetidor, e o controle de acesso ao meio é feito por token — um mecanismo que garante latência previsível."
      },
      {
        texto: "Um gerente de TI precisa apresentar ao conselho administrativo de uma empresa os fatores que devem guiar a escolha da topologia de rede para o novo data center. Ele lista três dimensões que são diretamente impactadas pela topologia escolhida: a facilidade de expansão futura, os custos com cabos e equipamentos, e a capacidade de manter o funcionamento mesmo diante de falhas em componentes individuais.",
        question: "Segundo o resumo, quais são os três impactos diretos da escolha da topologia de rede?",
        options: [
          "Velocidade de transmissão, tipo de protocolo e custo do servidor.",
          "Escalabilidade, custo e tolerância a falhas.",
          "Segurança, criptografia e endereçamento IP.",
          "Latência, jitter e largura de banda disponível.",
          "Tipo de cabeamento, frequência de rádio e número de usuários simultâneos."
        ],
        answer: 1,
        feedback: "✓ Resposta correta: B) Escalabilidade, custo e tolerância a falhas.\n\nPor que está certa:\nO resumo afirma explicitamente que os impactos da topologia incluem: escalabilidade (facilidade de crescimento), custo (quantidade de cabos e equipamentos) e tolerância a falhas (capacidade de continuar funcionando)."
      },
      {
        texto: "Uma empresa de streaming de vídeo percebe que, durante horários de pico, usuários relatam travamentos e lentidão na reprodução, mesmo tendo contratado planos de internet de alta velocidade. O administrador de rede investiga e descobre que o volume real de dados efetivamente entregues aos clientes por segundo é significativamente menor do que a capacidade teórica contratada pela empresa junto ao provedor.",
        question: "A métrica que representa a quantidade real de dados transmitidos com sucesso por unidade de tempo, diferente da capacidade máxima teórica do link, é denominada:",
        options: [
          "Jitter (variação de atraso entre pacotes).",
          "Throughput ou Vazão.",
          "Atraso de Propagação no meio físico.",
          "Multiplexação Estatística do canal.",
          "QoS (Qualidade de Serviço) priorizada."
        ],
        answer: 1,
        feedback: "✓ Resposta correta: B) Throughput ou Vazão.\n\nPor que está certa:\nO resumo define Vazão (Throughput) como a quantidade de dados transmitidos por unidade de tempo, medida em Mbps ou Gbps. Ela representa o desempenho real da rede, que pode ser inferior à capacidade teórica por diversos fatores."
      },
      {
        texto: "Uma startup de jogos online recebe reclamações de usuários que experimentam atrasos imprevisíveis e irregulares durante as partidas, mesmo quando a largura de banda disponível é suficiente. O desenvolvedor analisa os logs e verifica que os pacotes de atualização do jogo chegam em intervalos de tempo completamente irregulares: ora com 10ms de atraso, ora com 80ms, sem padrão definido.",
        question: "Esse problema, onde o atraso na entrega de pacotes varia de forma irregular e imprevisível, é crítico para aplicações em tempo real e recebe o nome técnico de:",
        options: [
          "Throughput baixo (vazão insuficiente).",
          "Atraso de processamento nos roteadores.",
          "Jitter (variação do atraso).",
          "Congestionamento por buffers cheios.",
          "Perda de pacotes por retransmissão."
        ],
        answer: 2,
        feedback: "✓ Resposta correta: C) Jitter (variação do atraso).\n\nPor que está certa:\nO resumo define Jitter como a variação no tempo de atraso (latência) na chegada de pacotes de dados, medido em milissegundos. Aplicações em tempo real como jogos, voz e vídeo são especialmente sensíveis ao jitter, pois precisam de entrega consistente."
      },
      {
        texto: "Um analista de redes precisa escolher entre dois modelos de distribuição de largura de banda para o link corporativo. Na primeira opção, cada departamento recebe uma fatia fixa e exclusiva da capacidade, independentemente de usá-la ou não. Na segunda opção, a capacidade total é dividida dinamicamente conforme a demanda real de cada setor a cada momento, evitando que recursos fiquem ociosos.",
        question: "A segunda opção descrita, que aloca o canal dinamicamente sob demanda para evitar desperdício de banda, é chamada de:",
        options: [
          "Alocação Estática com fatias fixas por departamento.",
          "Roteamento Dinâmico com tabelas de prioridade.",
          "Multiplexação Estatística com uso sob demanda.",
          "QoS com priorização de tráfego de voz.",
          "VLAN com segmentação lógica do tráfego."
        ],
        answer: 2,
        feedback: "✓ Resposta correta: C) Multiplexação Estatística com uso sob demanda.\n\nPor que está certa:\nO resumo diferencia a alocação estática (recursos fixos, ineficiente) da multiplexação estatística (uso sob demanda, eficiente). A vantagem da multiplexação estatística é evitar o desperdício de banda quando alguns setores não estão utilizando sua cota."
      },
      {
        texto: "Em uma rede corporativa, a equipe de infraestrutura precisa garantir que as ligações telefônicas via VoIP e as videoconferências tenham prioridade sobre o tráfego de downloads e backups automáticos, mesmo compartilhando o mesmo link físico. Para isso, configuram mecanismos nos roteadores que identificam o tipo de tráfego e ajustam dinamicamente a ordem e a velocidade de entrega dos pacotes.",
        question: "Esse conjunto de mecanismos que prioriza determinados tipos de tráfego para garantir melhor desempenho em aplicações sensíveis a atraso é denominado:",
        options: [
          "Detecção e Correção de Erros (FEC).",
          "Qualidade de Serviço (QoS).",
          "Topologia em Malha com roteamento dinâmico.",
          "Padronização IEEE 802.11 para redes sem fio.",
          "Multiplexação Estatística com fatias fixas."
        ],
        answer: 1,
        feedback: "✓ Resposta correta: B) Qualidade de Serviço (QoS).\n\nPor que está certa:\nO resumo define QoS como mecanismos que priorizam determinados tipos de tráfego. Voz e vídeo precisam de baixa latência, enquanto downloads precisam de alta vazão — o QoS permite essa diferenciação no mesmo link físico."
      },
      {
        texto: "Uma empresa de logística utiliza uma topologia em anel em sua rede de controle de veículos. O gerente de TI avalia migrar para outra topologia que ofereça maior previsibilidade no tempo de entrega dos dados, pois o sistema atual já oferece latência determinística — uma característica crítica para o controle em tempo real dos veículos autônomos da frota.",
        question: "Qual característica da topologia em anel, segundo o resumo, torna-a especialmente indicada para sistemas que precisam de tempo real?",
        options: [
          "Redundância de caminhos e roteamento dinâmico entre nós.",
          "Transmissão em broadcast para todos os nós simultaneamente.",
          "Latência previsível (determinística) garantida pelo mecanismo de token.",
          "Isolamento de falhas independente em cada dispositivo conectado.",
          "Hierarquia de switches em cascata para segmentação por setores."
        ],
        answer: 2,
        feedback: "✓ Resposta correta: C) Latência previsível (determinística) garantida pelo mecanismo de token.\n\nPor que está certa:\nO resumo destaca que a topologia em anel utiliza token para controle de acesso e oferece latência previsível, sendo ideal para sistemas que precisam de tempo real — pois cada nó sabe exatamente quando terá vez de transmitir."
      },
      {
  texto: "Uma empresa de telecomunicações precisa interligar dois data centers localizados em cidades diferentes, garantindo uma conexão dedicada e exclusiva entre eles. O projeto exige que toda a capacidade do link seja utilizada apenas para a comunicação entre esses dois pontos, sem compartilhamento com outros dispositivos ou nós intermediários.",
  question: "Essa configuração, onde há uma conexão direta e exclusiva entre dois dispositivos apenas, corresponde a qual topologia de rede?",
  options: [
    "Topologia em Estrela, pois há um nó central gerenciando a conexão.",
    "Topologia em Barramento, pois o cabo é compartilhado entre os dois pontos.",
    "Topologia Ponto a Ponto, pois a comunicação é exclusiva entre dois dispositivos.",
    "Topologia em Malha, pois existem múltiplos caminhos redundantes.",
    "Topologia em Árvore, pois há hierarquia entre os dois data centers."
  ],
  answer: 2,
  feedback: "✓ Resposta correta: C) Topologia Ponto a Ponto, pois a comunicação é exclusiva entre dois dispositivos.\n\nPor que está certa:\nA topologia ponto a ponto estabelece uma conexão direta e exclusiva (unicast) entre dois dispositivos apenas, sem compartilhamento com outros nós. É simples, eficiente, sem colisões e serve de base para redes WAN, como conexões entre cidades."
}
    ]
  },

  {
    subject: "Aula 06 — Comunicação de Dados e Sinais",
    questions: [
      {
        texto: "Dois computadores em uma sala de servidores estão conectados por um cabo de fibra óptica em perfeito estado físico. Apesar disso, eles não conseguem trocar informações: um utiliza um sistema operacional configurado em russo com padrões de estruturação de dados proprietários, e o outro opera com um sistema em português seguindo padrões completamente distintos. Não existe um \"idioma\" comum para a troca de mensagens entre as máquinas.",
        question: "De acordo com os fundamentos da comunicação, qual componente está ausente nesse cenário?",
        options: [
          "Emissor.",
          "Meio de Transmissão.",
          "Protocolo.",
          "Mensagem.",
          "Receptor."
        ],
        answer: 2,
        feedback: "✓ Resposta correta: C) Protocolo.\n\nPor que está certa:\nO protocolo é o conjunto de regras que governa a comunicação; sem ele, dispositivos conectados não se comunicam."
      },
      {
        texto: "Um sistema hospitalar de monitoramento cardíaco transmite os dados de batimentos em tempo real para o tablet do médico plantonista. Durante uma falha momentânea na rede, os pacotes ficaram armazenados em um buffer e chegaram ao destino com atraso de um minuto. Embora os dados fossem tecnicamente corretos e chegassem ao destinatário certo, o médico não pôde utilizá-los para tomar uma decisão de emergência.",
        question: "Qual característica fundamental de desempenho da comunicação foi violada nesse cenário?",
        options: [
          "Entrega (Delivery).",
          "Precisão (Accuracy).",
          "Sincronização (Timeliness).",
          "Modulação de Amplitude.",
          "Fase da Onda."
        ],
        answer: 2,
        feedback: "✓ Resposta correta: C) Sincronização (Timeliness).\n\nPor que está certa:\nA sincronização exige que os dados sejam entregues em instantes de tempo adequados; dados tardios são inúteis em tempo real."
      },
      {
        texto: "Em um estúdio de gravação musical, um microfone capta a voz de uma cantora. O sinal elétrico gerado pelo microfone varia de forma contínua ao longo do tempo, assumindo valores de intensidade que podem ser qualquer número real dentro de um determinado intervalo — não existe um conjunto finito de valores possíveis para esse sinal.",
        question: "Esse tipo de sinal, que varia continuamente e assume infinitos valores possíveis, é classificado como:",
        options: [
          "Sinal Digital.",
          "Sinal Analógico.",
          "Sinal Binário Não Periódico.",
          "Pulso de Tensão Discreto.",
          "Protocolo de Dados."
        ],
        answer: 1,
        feedback: "✓ Resposta correta: B) Sinal Analógico.\n\nPor que está certa:\nSinais analógicos são contínuos e possuem infinitos valores em sua trajetória, sendo a voz humana o exemplo clássico."
      },
      {
        texto: "Em um ambiente hospitalar com tomógrafos, aparelhos de ressonância magnética e outros equipamentos de alto consumo energético, os campos eletromagnéticos gerados são intensos. A equipe de TI precisa decidir qual tipo de sinal utilizar para transmitir dados médicos críticos por toda a instalação, garantindo que ruídos do ambiente não comprometam a integridade das informações.",
        question: "Qual a principal vantagem técnica dos sinais digitais em relação aos analógicos nesse cenário específico?",
        options: [
          "Sinais digitais possuem infinitos níveis de intensidade.",
          "Sinais digitais são mais fáceis de ouvir pelo ouvido humano.",
          "Sinais digitais são menos suscetíveis a ruídos e permitem uma reconstrução mais fiel.",
          "Sinais digitais exigem cabos de cobre mais grossos.",
          "Sinais digitais nunca variam no tempo."
        ],
        answer: 2,
        feedback: "✓ Resposta correta: C) Sinais digitais são menos suscetíveis a ruídos e permitem uma reconstrução mais fiel.\n\nPor que está certa:\nSinais digitais são discretos e menos sensíveis a interferências, o que facilita a recuperação da informação original."
      },
      {
        texto: "Um técnico de telecomunicações analisa um transmissor de rádio AM utilizado em uma estação. Ao medir o sinal portador, ele registra que a onda seno completa exatamente 1.000 ciclos idênticos em um segundo de observação.",
        question: "De acordo com os atributos de sinais analógicos periódicos, quais são o Período (T) e a Frequência (f) dessa onda?",
        options: [
          "T = 1s; f = 1.000 Hz.",
          "T = 0,001s; f = 1.000 Hz.",
          "T = 1.000s; f = 1 Hz.",
          "T = 0,1s; f = 10 Hz.",
          "T = 1.000 Hz; f = 0,001s."
        ],
        answer: 1,
        feedback: "✓ Resposta correta: B) T = 0,001s; f = 1.000 Hz.\n\nPor que está certa:\nA frequência (f) é o número de ciclos por segundo (1.000 Hz) e o período (T) é o inverso da frequência (1/1000 = 0,001s)."
      },
      {
        texto: "Uma equipe de engenharia monitora a qualidade de uma transmissão de rádio entre dois postos avançados separados por longa distância. Com o aumento da distância, os técnicos observam que a \"força\" do sinal recebido diminui progressivamente, embora a frequência da onda permaneça constante. Esse enfraquecimento está diretamente relacionado à perda de energia ao longo do percurso.",
        question: "Qual atributo da onda seno está sendo afetado pela perda de energia durante a propagação?",
        options: [
          "Fase.",
          "Período.",
          "Amplitude de Pico.",
          "Frequência.",
          "Jitter."
        ],
        answer: 2,
        feedback: "✓ Resposta correta: C) Amplitude de Pico.\n\nPor que está certa:\nA amplitude de pico é o valor absoluto da intensidade mais alta e é proporcional à energia transportada pelo sinal."
      },
      {
        texto: "Um técnico em eletrônica analisa dois sinais distintos em seu osciloscópio. O primeiro, proveniente de um sensor de temperatura industrial, exibe um padrão de onda que se repete identicamente a cada 5 segundos. O segundo, capturado de uma linha de comunicação de chat entre usuários, apresenta formas de onda completamente irregulares, sem qualquer repetição previsível ao longo do tempo.",
        question: "Como são classificados esses dois tipos de sinais, respectivamente?",
        options: [
          "Analógico e Digital.",
          "Periódico e Não Periódico.",
          "Simplex e Full-duplex.",
          "Sincronizado e Com Jitter.",
          "Hertz e Volts."
        ],
        answer: 1,
        feedback: "✓ Resposta correta: B) Periódico e Não Periódico.\n\nPor que está certa:\nSinais periódicos repetem um ciclo em um intervalo determinado e sinais não periódicos mudam sem padrão repetitivo."
      },
      {
        texto: "Em um laboratório de comunicações, um professor demonstra dois geradores de onda seno com a mesma frequência. O primeiro gerador inicia seu ciclo exatamente no instante zero, atingindo imediatamente o valor máximo. O segundo gerador, porém, começa a produzir o mesmo padrão de onda apenas um quarto de período após o primeiro, ou seja, existe um deslocamento temporal entre as duas ondas.",
        question: "Qual atributo descreve essa diferença entre as duas ondas e qual o valor aproximado em graus para o deslocamento do segundo gerador?",
        options: [
          "Amplitude; 90 graus.",
          "Frequência; 45 graus.",
          "Fase; 90 graus.",
          "Período; 180 graus.",
          "Jitter; 0 graus."
        ],
        answer: 2,
        feedback: "✓ Resposta correta: C) Fase; 90 graus.\n\nPor que está certa:\nA fase descreve a posição da onda em relação ao tempo zero. Um deslocamento de 1/4 de período equivale a 90 graus (360/4)."
      },
      {
        texto: "O sistema de transferência eletrônica de um banco processa milhares de transações por segundo. Durante uma análise, descobriu-se que ruído na fiação interna do data center estava corrompendo bits durante a transmissão — um bit '0' estava sendo recebido como '1' em alguns pacotes, alterando valores monetários das transações. O banco exige que todos os dados cheguem com Precisão (Accuracy) absoluta.",
        question: "De acordo com as características fundamentais da comunicação, o que o sistema deve fazer ao detectar um bit corrompido?",
        options: [
          "Aceitar o dado para não gerar atraso (Jitter).",
          "Ignorar o erro, pois a entrega (Delivery) foi feita ao destinatário correto.",
          "Detectar a alteração e, se possível, corrigir o dado ou solicitar retransmissão, pois dados alterados são inúteis.",
          "Mudar a frequência da transmissão para sinais analógicos periódicos.",
          "Aumentar a fase do sinal em 180 graus para anular o ruído."
        ],
        answer: 2,
        feedback: "✓ Resposta correta: C) Detectar a alteração e, se possível, corrigir o dado ou solicitar retransmissão, pois dados alterados são inúteis.\n\nPor que está certa:\nA precisão exige que o sistema entregue dados com exatidão; dados alterados e não corrigidos perdem sua utilidade."
      },
      {
        texto: "Durante uma aula de redes, o professor utiliza a seguinte analogia para explicar os componentes da comunicação de dados: dois diplomatas de países diferentes precisam negociar um acordo importante por telefone. O aparelho telefônico e os fios que o conectam funcionam perfeitamente. No entanto, a negociação é impossível porque os dois diplomatas falam idiomas completamente diferentes e não chegam a um acordo sobre qual língua usar na conversa.",
        question: "Nessa analogia pedagógica, o hardware (telefone e fios) e o idioma representam, respectivamente, quais elementos da comunicação de dados?",
        options: [
          "Mensagem e Meio.",
          "Emissor e Receptor.",
          "Meio de Transmissão e Protocolo.",
          "Jitter e Precisão.",
          "Sinal Analógico e Sinal Digital."
        ],
        answer: 2,
        feedback: "✓ Resposta correta: C) Meio de Transmissão e Protocolo.\n\nPor que está certa:\nO meio (ar ou telefone) provê o caminho físico, e o protocolo (idioma) provê a inteligência e as regras da troca."
      },
      {
        texto: "Um engenheiro de áudio analisa o sinal captado por um microfone durante uma gravação. Ele observa no osciloscópio que o sinal apresenta uma forma de onda senoidal perfeita que se repete com exatidão a cada 0,002 segundos desde o início da medição. O engenheiro precisa calcular a frequência desse sinal para ajustar o equalizador corretamente.",
        question: "Com base no período de 0,002 segundos observado, qual é a frequência desse sinal e o que representa cada um desses atributos em uma onda periódica?",
        options: [
          "f = 2 Hz; o período é o número de ciclos por segundo e a frequência é o tempo de um ciclo.",
          "f = 500 Hz; o período é o tempo de duração de um ciclo completo e a frequência é o número de ciclos por segundo.",
          "f = 0,002 Hz; o período é a amplitude máxima e a frequência é o deslocamento temporal.",
          "f = 200 Hz; o período é a fase da onda e a frequência é a amplitude de pico.",
          "f = 50 Hz; o período é a energia do sinal e a frequência é a velocidade de propagação."
        ],
        answer: 1,
        feedback: "✓ Resposta correta: B) f = 500 Hz; o período é o tempo de duração de um ciclo completo e a frequência é o número de ciclos por segundo.\n\nPor que está certa:\nO resumo define que frequência (f) = 1/T. Com T = 0,002s, temos f = 1/0,002 = 500 Hz. O período é o tempo de um ciclo completo e a frequência indica quantos ciclos ocorrem em um segundo."
      },
      {
        texto: "Durante um processo de digitalização de acervo fotográfico histórico em um museu, o técnico de informática explica ao curador que cada imagem é representada computacionalmente como uma grade organizada de elementos individuais, onde cada elemento armazena um valor numérico binário que define a tonalidade e a cor daquele ponto específico da imagem.",
        question: "O elemento individual descrito — a menor unidade de uma imagem digital — é chamado de:",
        options: [
          "Bit, pois representa o valor binário 0 ou 1 de cor.",
          "Frame, pois é a unidade de uma sequência de vídeo.",
          "Pixel, pois é a menor unidade que compõe a grade da imagem.",
          "Amostra, pois representa o valor do sinal em um instante.",
          "Byte, pois agrupa 8 bits de informação de cor."
        ],
        answer: 2,
        feedback: "✓ Resposta correta: C) Pixel, pois é a menor unidade que compõe a grade da imagem.\n\nPor que está certa:\nO resumo define que imagens são representadas por uma matriz de pixels, sendo o pixel a menor unidade da imagem. Cada pixel define a resolução e armazena um valor binário de cor, podendo ser monocromático (1 bit) ou colorido (sistema RGB)."
      },
      {
        texto: "Uma produtora de conteúdo digital discute com seu time técnico o padrão de gravação de vídeo para uma série de documentários. O diretor questiona a diferença prática entre gravar em 24 FPS (usado no cinema) e 60 FPS (usado em transmissões de alta fluidez). O técnico explica que essa escolha afeta diretamente a percepção de movimento e o volume de dados gerado.",
        question: "O que representa a taxa de quadros (FPS — Frames Per Second) na representação digital de vídeo, conforme o resumo?",
        options: [
          "A quantidade de bits por pixel que define a profundidade de cor da imagem.",
          "O número de amostras de áudio capturadas por segundo durante a gravação.",
          "O número de imagens (frames) exibidas por segundo, que determina a fluidez do movimento.",
          "A resolução horizontal em pixels de cada quadro individual do vídeo.",
          "O tamanho em megabytes de cada arquivo de imagem gerado pela câmera."
        ],
        answer: 2,
        feedback: "✓ Resposta correta: C) O número de imagens (frames) exibidas por segundo, que determina a fluidez do movimento.\n\nPor que está certa:\nO resumo define que o vídeo é uma sequência de imagens (frames) e que a taxa de quadros (FPS) determina a aplicação: 24 FPS para cinema, 30 FPS para TV e 60 FPS para alta fluidez. Mais frames por segundo resultam em movimento mais suave."
      },
      {
        texto: "Em um estúdio de radiodifusão, o engenheiro de som precisa converter a voz dos locutores, captada pelo microfone como um sinal elétrico contínuo, em dados digitais que possam ser processados, armazenados e transmitidos pelos sistemas de broadcast digital. O processo envolve capturar o valor do sinal em instantes regulares de tempo para criar uma representação numérica do áudio.",
        question: "O processo de capturar o valor de um sinal analógico contínuo em instantes regulares de tempo para convertê-lo em representação digital é denominado:",
        options: [
          "Modulação — processo de inserir dados em uma onda portadora.",
          "Codificação ASCII — conversão de caracteres em padrões binários.",
          "Amostragem — captura do valor do sinal em instantes regulares.",
          "Digitalização RGB — conversão de cores em valores de 8 bits.",
          "Multiplexação — compartilhamento do canal entre múltiplos sinais."
        ],
        answer: 2,
        feedback: "✓ Resposta correta: C) Amostragem — captura do valor do sinal em instantes regulares.\n\nPor que está certa:\nO resumo descreve que o processo de digitalização do áudio envolve: captura do som (analógico), amostragem e conversão para binário. Cada amostra representa o valor do som em um instante específico, permitindo a reconstrução do sinal original."
      },
      {
        texto: "Uma equipe de desenvolvimento de um sistema de comunicação para dispositivos IoT precisa representar diferentes tipos de dados — textos de configuração, imagens de câmeras e medições de sensores — em um único formato que todos os componentes do sistema possam processar de forma uniforme. O arquiteto do sistema propõe que todos os dados sejam convertidos para o mesmo formato fundamental antes de serem transmitidos.",
        question: "Qual é o formato fundamental para o qual todos os tipos de dados (texto, imagem, áudio, vídeo) são convertidos para serem transmitidos e processados digitalmente, segundo o resumo?",
        options: [
          "Formato ASCII de 7 bits, pois suporta todos os caracteres necessários.",
          "Formato RGB de 24 bits, pois representa qualquer cor com precisão.",
          "Bits (0 e 1), pois toda informação digital é reduzida a dois estados.",
          "Formato Unicode de 32 bits, pois abrange todos os idiomas do mundo.",
          "Formato hexadecimal, pois é mais compacto que o binário puro."
        ],
        answer: 2,
        feedback: "✓ Resposta correta: C) Bits (0 e 1), pois toda informação digital é reduzida a dois estados.\n\nPor que está certa:\nO resumo afirma que na comunicação de dados, toda informação é convertida em bits (0 e 1), o que permite que diferentes tipos de dados (texto, imagem, áudio, vídeo) sejam transmitidos no mesmo sistema. Essa unificação é o conceito fundamental da representação digital."
      },
      {
        texto: "Durante uma transmissão de dados em uma linha de comunicação industrial, o técnico observa que o sinal recebido apresenta distorções que não estavam presentes no sinal original enviado. Ao analisar o problema, ele identifica três categorias distintas de problemas: em uma delas, o sinal perde energia progressivamente ao longo do cabo; em outra, diferentes frequências do sinal chegam em momentos diferentes, alterando sua forma; e na terceira, interferências externas acrescentam variações indesejadas ao sinal.",
        question: "Segundo o resumo, como são denominados, respectivamente, esses três problemas de transmissão: perda de energia, chegada em tempos diferentes das frequências e interferência externa?",
        options: [
          "Jitter, Multiplexação e Crosstalk.",
          "Atenuação, Distorção e Ruído.",
          "SNR, Amplificação e Modulação.",
          "Throughput, Latência e Congestionamento.",
          "Codificação, Decodificação e Compressão."
        ],
        answer: 1,
        feedback: "✓ Resposta correta: B) Atenuação, Distorção e Ruído.\n\nPor que está certa:\nO resumo lista as três principais deficiências na transmissão: Atenuação (perda de energia do sinal, corrigida com amplificadores), Distorção (alteração na forma do sinal quando frequências chegam em tempos diferentes) e Ruído (interferência externa, que pode ser térmico, induzido, crosstalk ou impulso)."
      },
      {
        texto: "Um engenheiro de telecomunicações analisa dois canais de comunicação distintos. No primeiro canal, o sinal útil é muito mais intenso do que os ruídos presentes, resultando em transmissões claras e confiáveis. No segundo canal, a intensidade do ruído se aproxima da intensidade do sinal útil, tornando a comunicação degradada e propensa a erros de interpretação dos bits.",
        question: "A métrica que expressa a relação entre a intensidade do sinal útil e a intensidade do ruído presente no canal de comunicação, determinando a qualidade da transmissão, é denominada:",
        options: [
          "Throughput — quantidade de dados transmitidos por segundo.",
          "Jitter — variação no tempo de chegada dos pacotes.",
          "SNR (Signal-to-Noise Ratio) — Relação Sinal-Ruído.",
          "Latência — tempo total de entrega de um pacote ao destino.",
          "Frequência — número de ciclos do sinal por segundo."
        ],
        answer: 2,
        feedback: "✓ Resposta correta: C) SNR (Signal-to-Noise Ratio) — Relação Sinal-Ruído.\n\nPor que está certa:\nO resumo define a Relação Sinal-Ruído (SNR) como a métrica que define a qualidade da comunicação. Uma SNR alta indica boa qualidade (sinal muito mais forte que o ruído), enquanto uma SNR baixa indica qualidade ruim (ruído próximo ou igual ao sinal)."
      },
      {
  texto: "Uma equipe de TI analisa os sistemas de comunicação de três dispositivos distintos em uma fábrica: (1) um sensor de temperatura que apenas envia leituras para o servidor central, sem nunca receber dados; (2) um rádio walkie-talkie, onde o operador precisa apertar um botão para falar e só pode ouvir quando para de falar; (3) um telefone IP, onde dois funcionários conversam simultaneamente sem interrupções.",
  question: "Qual é a classificação correta do fluxo de dados de cada um dos três dispositivos, respectivamente?",
  options: [
    "Full-Duplex, Simplex e Half-Duplex.",
    "Simplex, Half-Duplex e Full-Duplex.",
    "Half-Duplex, Full-Duplex e Simplex.",
    "Simplex, Full-Duplex e Half-Duplex.",
    "Half-Duplex, Simplex e Full-Duplex."
  ],
  answer: 1,
  feedback: "✓ Resposta correta: B) Simplex, Half-Duplex e Full-Duplex.\n\nPor que está certa:\nSimplex → comunicação em uma única direção (sensor apenas envia). Half-Duplex → duas direções, mas não simultâneas (walkie-talkie: fala ou ouve, nunca os dois ao mesmo tempo). Full-Duplex → duas direções simultâneas (telefone IP: ambos falam e ouvem ao mesmo tempo)."
},
{
  texto: "Um desenvolvedor de software precisa escolher um padrão de codificação para um sistema de mensagens que será utilizado em 47 países diferentes, suportando caracteres do alfabeto latino, cirílico, árabe, chinês e japonês. Ele analisa dois padrões disponíveis: o primeiro suporta apenas 128 símbolos com 7 bits, enquanto o segundo utiliza até 32 bits e abrange praticamente todos os idiomas e símbolos do mundo.",
  question: "Qual padrão de codificação atende ao requisito multilíngue do sistema e por quê o primeiro padrão seria insuficiente?",
  options: [
    "ASCII, pois 128 símbolos são suficientes para qualquer idioma.",
    "RGB, pois codifica caracteres por valores de cor em 24 bits.",
    "Unicode, pois suporta praticamente todos os idiomas com até 32 bits, enquanto o ASCII com 7 bits só cobre 128 símbolos.",
    "Binário puro, pois converte qualquer caractere diretamente para 0 e 1.",
    "SNR, pois define a qualidade da transmissão em múltiplos idiomas."
  ],
  answer: 2,
  feedback: "✓ Resposta correta: C) Unicode, pois suporta praticamente todos os idiomas com até 32 bits, enquanto o ASCII com 7 bits só cobre 128 símbolos.\n\nPor que está certa:\nO resumo define ASCII como um padrão de 7 bits que representa 128 símbolos — suficiente apenas para o inglês básico. O Unicode utiliza até 32 bits e abrange praticamente todos os idiomas e símbolos do mundo, sendo o padrão correto para sistemas multilíngues."
},{
  texto: "Em um sistema de transmissão de dados de alta velocidade, um engenheiro observa que o sinal recebido apresenta uma forma diferente do sinal original enviado, mesmo sem perda de energia e sem interferências externas identificáveis. Após análise, ele descobre que o cabo utilizado transporta diferentes frequências do sinal em velocidades ligeiramente distintas, fazendo com que componentes do sinal cheguem ao destino em momentos diferentes e se recombinem de forma distorcida.",
  question: "Esse problema de transmissão, onde a forma do sinal é alterada porque diferentes frequências chegam em momentos distintos, é classificado como:",
  options: [
    "Atenuação, pois o sinal perdeu energia ao longo do cabo.",
    "Ruído de impulso, pois interferências externas corromperam os bits.",
    "Distorção, pois frequências do sinal chegam em tempos diferentes alterando sua forma.",
    "Crosstalk, pois sinais de cabos vizinhos se misturaram ao sinal original.",
    "Jitter, pois os pacotes chegaram com variação no tempo de entrega."
  ],
  answer: 2,
  feedback: "✓ Resposta correta: C) Distorção, pois frequências do sinal chegam em tempos diferentes alterando sua forma.\n\nPor que está certa:\nO resumo diferencia os três problemas de transmissão: Atenuação (perda de energia), Distorção (alteração na forma do sinal quando frequências chegam em tempos diferentes) e Ruído (interferência externa). Nesse cenário, não há perda de energia nem interferência externa — apenas a chegada dessas frequências em momentos distintos, o que caracteriza distorção."
}
    ]
  }
];


// ─── Função para separar texto e enunciado ─────────────────────────────────────
function splitQuestionParts(questionText) {
    const text = questionText.trim();
    const sentencePattern = /^([\s\S]+?)\s{0,5}([A-ZÁÉÍÓÚÂÊÎÔÛÃÕÇ][^.!?]*[?:])$/;
    const match = text.match(sentencePattern);
    if (match) {
        const contexto = match[1].trim();
        const enunciado = match[2].trim();
        if (contexto.length > 80 && enunciado !== text) {
            return { context: contexto, statement: enunciado };
        }
    }
    const lastSentenceMatch = text.match(/^([\s\S]+\.)(\s+[A-ZÁÉÍÓÚÂÊÎÔÛÃÕÇ][\s\S]*[?:])$/);
    if (lastSentenceMatch) {
        const contexto = lastSentenceMatch[1].trim();
        const enunciado = lastSentenceMatch[2].trim();
        if (contexto.length > 80) {
            return { context: contexto, statement: enunciado };
        }
    }
    return { context: null, statement: text };
}

// ─── Estado do quiz ───────────────────────────────────────────────────────────
let quizData = [];
let userAnswers = [];
let isFirstLoad = true;

// ─── Mapeamento global de índice de questão → {subjectIndex, questionIndex} ───
let questionMap = [];

// ─── Elementos do DOM ─────────────────────────────────────────────────────────
const quizContainer    = document.getElementById("quiz-container");
const resultsContainer = document.getElementById("results");

// ─── Utilitários ──────────────────────────────────────────────────────────────
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function createShuffledQuizData() {
    return originalQuizData.map(subject => ({
        ...subject,
        questions: subject.questions.map(question => {
            const optionIndices = question.options.map((_, index) => index);
            const shuffledIndices = shuffleArray(optionIndices);
            const shuffledOptions = shuffledIndices.map(index => question.options[index]);
            const newCorrectAnswer = shuffledIndices.indexOf(question.answer);
            const correctLetter = String.fromCharCode(65 + newCorrectAnswer);
            const originalCorrectOption = question.options[question.answer];
            return {
                ...question,
                options: shuffledOptions,
                answer: newCorrectAnswer,
                feedback: `✓ Resposta correta: ${correctLetter}) ${originalCorrectOption}\n\n${extractWhyCorrect(question.feedback)}`
            };
        })
    }));
}

function extractWhyCorrect(feedback) {
    const match = feedback.match(/Por que está certa:([\s\S]*)/);
    return match ? `Por que está certa:${match[1].trim()}` : '';
}

// ─── Formata o feedback: negrito nos títulos, linha em branco entre seções ───
function formatFeedback(feedback) {
    return feedback
        .replace(/\n/g, '<br>')
        .replace(/(✓ Resposta correta:)/g, '<strong>$1</strong>')
        .replace(/(<br>)*(Por que está certa:)(<br>)*/g, '<br><br><strong>Por que está certa:</strong> ');
}

function createOriginalQuizData() {
    return originalQuizData.map(subject => ({ ...subject, questions: subject.questions.map(q => ({ ...q })) }));
}

// ─── Inicialização ────────────────────────────────────────────────────────────
function initializeQuiz() {
    if (isFirstLoad) {
        quizData = createOriginalQuizData();
        isFirstLoad = false;
    }

    questionMap = [];
    quizData.forEach((subject, sIdx) => {
        subject.questions.forEach((_, qIdx) => {
            questionMap.push({ sIdx, qIdx });
        });
    });

    userAnswers = new Array(questionMap.length).fill(null);
    showAllQuestions();
    updateGlobalResults();
}

// ─── Renderização completa ────────────────────────────────────────────────────
function showAllQuestions() {
    let html = "";
    let globalIndex = 0;

    quizData.forEach((subject, sIdx) => {
        html += `<div class="subject-title">${subject.subject}</div>`;

        subject.questions.forEach((question, qIdx) => {
            const gi = globalIndex;
            const answered = userAnswers[gi] !== null;
let questionBodyHTML = question.texto
    ? `<div class="question-texto">${question.texto}</div>
       <div class="question-enunciado">${question.question}</div>`
    : `<div class="question-text">${question.question}</div>`;

            const optionsHTML = question.options.map((option, oi) => {
                let cls = "option";
                if (answered) {
                    if (oi === question.answer) cls += " correct";
                    else if (userAnswers[gi] === oi) cls += " incorrect";
                    cls += " locked";
                }
                const clickHandler = answered ? '' : `onclick="selectOption(${gi}, ${oi})"`;
                return `<div class="${cls}" ${clickHandler}>${String.fromCharCode(65 + oi)}) ${option}</div>`;
            }).join("");

            let feedbackHTML = "";
            if (answered) {
                const isCorrect = userAnswers[gi] === question.answer;
                feedbackHTML = `<div class="feedback ${isCorrect ? 'correct-feedback' : 'incorrect-feedback'}">
                    ${formatFeedback(question.feedback)}
                </div>`;
            }

            html += `<div class="question-container" id="q-${gi}">
                <div class="question-number">Questão ${gi + 1}</div>
                ${questionBodyHTML}
                ${question.image ? `<div class="question-image"><img src="${question.image}" alt="Imagem da questão"></div>` : ''}
                ${question.questionContinuation ? `<div class="question-text">${question.questionContinuation}</div>` : ''}
                <div class="options">${optionsHTML}</div>
                ${feedbackHTML}
            </div>`;

            globalIndex++;
        });

        html += renderSubjectResult(sIdx);
    });

    quizContainer.innerHTML = html;
}

// ─── Resultado por aula ───────────────────────────────────────────────────────
function renderSubjectResult(sIdx) {
    const subject = quizData[sIdx];
    const total = subject.questions.length;

    const globalIndices = questionMap
        .map((m, gi) => m.sIdx === sIdx ? gi : -1)
        .filter(gi => gi !== -1);

    const answered = globalIndices.filter(gi => userAnswers[gi] !== null).length;
    const correct  = globalIndices.filter(gi => userAnswers[gi] === quizData[sIdx].questions[questionMap[gi].qIdx].answer).length;
    const pct      = answered > 0 ? Math.round((correct / answered) * 100) : 0;
    const allDone  = answered === total;

    let colorClass = '';
    if (allDone) {
        if (pct >= 70) colorClass = 'subject-result--good';
        else if (pct >= 50) colorClass = 'subject-result--mid';
        else colorClass = 'subject-result--bad';
    }

    if (!allDone) {
        const progressPct = Math.round((answered / total) * 100);
        return `<div class="subject-result subject-result--progress" id="sr-${sIdx}">
            <div class="sr-progress-label">${answered} de ${total} questões respondidas</div>
            <div class="sr-progress-bar"><div class="sr-progress-fill" style="width:${progressPct}%"></div></div>
        </div>`;
    }

    return `<div class="subject-result ${colorClass}" id="sr-${sIdx}">
        <div class="sr-icon">${pct >= 70 ? '🎯' : pct >= 50 ? '📊' : '📚'}</div>
        <div class="sr-content">
            <div class="sr-title">Resultado da Aula</div>
            <div class="sr-score">${correct} de ${total} questões corretas</div>
            <div class="sr-pct">${pct}%</div>
        </div>
    </div>`;
}

// ─── Resultado global ─────────────────────────────────────────────────────────
function updateGlobalResults() {
    const total    = userAnswers.length;
    const answered = userAnswers.filter(a => a !== null).length;

    if (answered < total) {
        resultsContainer.style.display = "none";
        return;
    }

    let correct = 0;
    questionMap.forEach((m, gi) => {
        if (userAnswers[gi] === quizData[m.sIdx].questions[m.qIdx].answer) correct++;
    });

    const pct = Math.round((correct / total) * 100);
    resultsContainer.innerHTML = `
        <h2>Resultado Final</h2>
        <div class="score">Você acertou ${correct} de ${total} questões</div>
        <div class="percentage">${pct}%</div>
        <p>${pct >= 70 ? "Parabéns! Excelente desempenho." : "Revise os conceitos para melhorar seu desempenho."}</p>`;
    resultsContainer.style.display = "block";

    const clearBtn  = document.getElementById('clear');
    const revealBtn = document.getElementById('reveal');
    if (clearBtn)  clearBtn.disabled  = true;
    if (revealBtn) revealBtn.disabled = true;
}

// ─── Selecionar opção (feedback imediato) ─────────────────────────────────────
window.selectOption = function(gi, oi) {
    if (userAnswers[gi] !== null) return;

    userAnswers[gi] = oi;

    const container = document.getElementById(`q-${gi}`);
    if (!container) return;

    const { sIdx, qIdx } = questionMap[gi];
    const question = quizData[sIdx].questions[qIdx];
    const isCorrect = oi === question.answer;

    container.querySelectorAll('.option').forEach((el, idx) => {
        el.classList.remove('selected');
        el.classList.add('locked');
        el.removeAttribute('onclick');
        if (idx === question.answer) el.classList.add('correct');
        else if (idx === oi)         el.classList.add('incorrect');
    });

    let feedbackEl = container.querySelector('.feedback');
    if (!feedbackEl) {
        feedbackEl = document.createElement('div');
        container.querySelector('.options').after(feedbackEl);
    }
    feedbackEl.className = `feedback ${isCorrect ? 'correct-feedback' : 'incorrect-feedback'}`;
    feedbackEl.innerHTML = formatFeedback(question.feedback);

    const srEl = document.getElementById(`sr-${sIdx}`);
    if (srEl) srEl.outerHTML = renderSubjectResult(sIdx);

    updateGlobalResults();

    if (typeof storageInitialized !== 'undefined' && storageInitialized) {
        setTimeout(saveCurrentProgress, 100);
    }
};

// ─── Revelar todas as respostas ───────────────────────────────────────────────
function revealAnswers() {
    questionMap.forEach((m, gi) => {
        if (userAnswers[gi] === null) {
            userAnswers[gi] = quizData[m.sIdx].questions[m.qIdx].answer;
        }
    });
    showAllQuestions();
    updateGlobalResults();
    smoothScrollToTop();
}

// ─── Limpar respostas ─────────────────────────────────────────────────────────
function clearAnswers() {
    const clearBtn = document.getElementById('clear');
    if (clearBtn?.disabled) return;

    userAnswers.fill(null);
    showAllQuestions();

    resultsContainer.style.display = "none";

    const revealBtn = document.getElementById('reveal');
    if (clearBtn)  clearBtn.disabled  = false;
    if (revealBtn) revealBtn.disabled = false;

    smoothScrollToTop();
}

// ─── Reiniciar com shuffle ────────────────────────────────────────────────────
function restartQuiz() {
    quizData = createShuffledQuizData();

    questionMap = [];
    quizData.forEach((subject, sIdx) => {
        subject.questions.forEach((_, qIdx) => questionMap.push({ sIdx, qIdx }));
    });

    userAnswers = new Array(questionMap.length).fill(null);

    showAllQuestions();

    resultsContainer.style.display = "none";

    const clearBtn  = document.getElementById('clear');
    const revealBtn = document.getElementById('reveal');
    if (clearBtn)  clearBtn.disabled  = false;
    if (revealBtn) revealBtn.disabled = false;

    smoothScrollToTop();
}

// ─── Scroll ───────────────────────────────────────────────────────────────────
function smoothScrollTo(targetPosition, duration = 800) {
    const start = window.scrollY;
    const change = targetPosition - start;
    const startTime = performance.now();
    function animateScroll(currentTime) {
        const elapsed  = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        window.scrollTo(0, start + change * progress);
        if (progress < 1) requestAnimationFrame(animateScroll);
    }
    requestAnimationFrame(animateScroll);
}
function smoothScrollToTop() { smoothScrollTo(0, 800); }

// ─── Alerta ───────────────────────────────────────────────────────────────────
function showAlertNotification(message) {
    const el = document.createElement('div');
    el.style.cssText = `
        position:fixed;top:20px;left:50%;
        transform:translateX(-50%) translateY(-100%);
        background:linear-gradient(135deg,#e74c3c 0%,#c0392b 100%);
        color:white;padding:12px 24px;border-radius:10px;
        box-shadow:0 4px 20px rgba(0,0,0,.3);
        font-family:'Space Grotesk',sans-serif;font-size:14px;font-weight:500;
        z-index:10000;opacity:0;transition:all .4s ease;`;
    el.textContent = message;
    document.body.appendChild(el);
    setTimeout(() => { el.style.opacity='1'; el.style.transform='translateX(-50%) translateY(0)'; }, 50);
    setTimeout(() => {
        el.style.opacity='0'; el.style.transform='translateX(-50%) translateY(-100%)';
        setTimeout(() => el.parentNode && el.parentNode.removeChild(el), 400);
    }, 5000);
}

// ─── Event Listeners ─────────────────────────────────────────────────────────
document.getElementById('clear').addEventListener('click', clearAnswers);
document.getElementById('reveal').addEventListener('click', revealAnswers);
document.getElementById('restart').addEventListener('click', restartQuiz);

document.getElementById('btn-up').addEventListener('click',   () => smoothScrollTo(0, 1000));
document.getElementById('btn-left').addEventListener('click', () => { window.location.href = '../redes.html'; });
document.getElementById('btn-down').addEventListener('click', () => smoothScrollTo(document.body.scrollHeight, 1000));

document.getElementById('clearButton').addEventListener('click', clearAnswers);
document.getElementById('restartButton').addEventListener('click', restartQuiz);
document.getElementById('revealButton').addEventListener('click', revealAnswers);

document.addEventListener("DOMContentLoaded", () => {
    initializeQuiz();
});

// ─── Auto-Save ────────────────────────────────────────────────────────────────
const QUIZ_ID = 'questoes_banco_de_dados';
const AUTO_SAVE_CONFIG = { enabled: true, interval: 10000, saveOnAnswer: true };
let autoSaveInterval   = null;
let storageInitialized = false;

function initializeStorage() {
    if (typeof storage === 'undefined') return false;
    if (!storage.isStorageAvailable()) return false;
    storageInitialized = true;
    loadSavedProgress();
    if (AUTO_SAVE_CONFIG.enabled) startAutoSave();
    return true;
}

function loadSavedProgress() {
    if (!storageInitialized) return;
    try {
        const saved = storage.loadProgress(QUIZ_ID);
        if (saved?.respostas) {
            const hasAnswers = saved.respostas.some(a => a !== null && a !== undefined);
            if (hasAnswers) {
                userAnswers = [...saved.respostas];
                showAllQuestions();
                updateGlobalResults();
                const count = saved.respostas.filter(a => a !== null && a !== undefined).length;
                showProgressNotification(`Progresso restaurado! 📚 (${count} questões respondidas)`);
            }
        }
    } catch (e) { console.error('[Storage] Erro ao carregar:', e); }
}

function saveCurrentProgress() {
    if (!storageInitialized || !userAnswers) return;
    try {
        storage.saveProgress(QUIZ_ID, userAnswers, {
            totalQuestions: userAnswers.length,
            answeredCount: userAnswers.filter(a => a !== null).length,
            isCompleted: userAnswers.every(a => a !== null)
        });
    } catch (e) { console.error('[Storage] Erro ao salvar:', e); }
}

function startAutoSave() {
    if (autoSaveInterval) clearInterval(autoSaveInterval);
    autoSaveInterval = setInterval(saveCurrentProgress, AUTO_SAVE_CONFIG.interval);
}

function stopAutoSave() {
    if (autoSaveInterval) { clearInterval(autoSaveInterval); autoSaveInterval = null; }
}


function showProgressNotification(message) {
    // 1. Criar ou obter o container para empilhar notificações
    let container = document.getElementById('notification-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'notification-container';
        container.style.cssText = `
            position: fixed; top: 20px; right: 20px;
            display: flex; flex-direction: column; gap: 10px;
            z-index: 10000; pointer-events: none;
        `;
        document.body.appendChild(container);
    }

    // 2. Criar o elemento da notificação
    const el = document.createElement('div');
    el.style.cssText = `
        background: rgba(168, 85, 247, 0.15);
        color: #c88cff;
        border: 1px solid rgba(168, 85, 247, 0.3);
        padding: 12px 20px;
        border-radius: 12px;
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        font-family: 'Space Grotesk', sans-serif;
        font-size: 14px;
        font-weight: 600;
        min-width: 200px;
        pointer-events: auto;
        opacity: 0;
        transform: translateX(50px);
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    `;
    
    el.innerText = message;
    container.appendChild(el);

    // 3. Trigger da animação de entrada
    requestAnimationFrame(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateX(0)';
    });

    // 4. Remover após o tempo determinado
    setTimeout(() => {
        el.style.opacity = '0';
        el.style.transform = 'translateX(20px)';
        
        // Remove do DOM após o término da transição
        el.addEventListener('transitionend', () => {
            el.remove();
            // Remove o container se estiver vazio
            if (container.childNodes.length === 0) container.remove();
        });
    }, 4000);
}

document.addEventListener('visibilitychange', () => {
    if (document.hidden) { saveCurrentProgress(); stopAutoSave(); }
    else if (AUTO_SAVE_CONFIG.enabled && storageInitialized) startAutoSave();
});
window.addEventListener('beforeunload', () => { if (storageInitialized) saveCurrentProgress(); });

setTimeout(initializeStorage, 500);