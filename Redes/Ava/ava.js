// ava.js - Redes de Computadores I - AP1
const quizDataAVAPoo = [
  {
    subject: "Redes de Computadores I",
    questions: [

      // ── Questão 1 ──────────────────────────────────────────────────────────
      {
        texto: "Em um sistema de comunicação de dados, diversas entidades participam do processo de transmissão da informação entre dispositivos conectados em rede. Esse processo envolve componentes responsáveis por enviar, transportar e receber os dados, além de regras que definem como a comunicação deve ocorrer.",
        question: "Considerando os elementos fundamentais de um sistema de comunicação de dados, assinale a alternativa que apresenta corretamente o componente responsável por definir as regras da comunicação entre os dispositivos na rede.",
        options: [
          "Protocolo.",
          "Receptor.",
          "Mensagem.",
          "Meio de transmissão."
        ],
        answer: 0,
        feedback: "✓ Resposta correta: A) Protocolo.\n\nPor que está certa:\nO protocolo é o componente responsável por definir as regras que governam a comunicação entre dispositivos em uma rede, incluindo formato, sincronização, sequenciamento e controle de erros. Os demais elementos — receptor, mensagem e meio de transmissão — têm papéis distintos: o receptor recebe os dados, a mensagem é a informação transmitida, e o meio de transmissão é o caminho pelo qual os dados trafegam."
      },

      // ── Questão 2 ──────────────────────────────────────────────────────────
      {
        texto: "O crescimento da Internet ao longo das últimas décadas provocou um aumento significativo na quantidade de dispositivos conectados à rede. Esse crescimento evidenciou limitações do protocolo IPv4, principalmente relacionadas ao número de endereços disponíveis para identificação dos dispositivos na Internet. Como resposta a esse problema, foi desenvolvido o IPv6, que amplia significativamente o espaço de endereçamento.",
        question: "Considerando as diferenças entre os protocolos IPv4 e IPv6 no que se refere ao tamanho do espaço de endereçamento, assinale a alternativa correta.",
        options: [
          "O IPv4 utiliza endereços de 64 bits, enquanto o IPv6 utiliza endereços de 32 bits.",
          "O IPv4 utiliza endereços de 128 bits, enquanto o IPv6 utiliza endereços de 64 bits.",
          "O IPv4 utiliza endereços de 32 bits, enquanto o IPv6 utiliza endereços de 128 bits.",
          "O IPv4 e o IPv6 utilizam endereços de 64 bits, diferenciando-se apenas na forma de codificação."
        ],
        answer: 2,
        feedback: "✓ Resposta correta: C) O IPv4 utiliza endereços de 32 bits, enquanto o IPv6 utiliza endereços de 128 bits.\n\nPor que está certa:\nO IPv4 usa endereços de 32 bits, permitindo aproximadamente 4,3 bilhões de endereços únicos — quantidade insuficiente para o crescimento da Internet. O IPv6 foi desenvolvido com endereços de 128 bits, gerando um espaço de endereçamento vastamente superior (cerca de 3,4 × 10³⁸ endereços), resolvendo o problema de esgotamento."
      },

      // ── Questão 3 ──────────────────────────────────────────────────────────
      {
        texto: "Uma organização utiliza uma rede em que diversos computadores acessam serviços centralizados, como banco de dados, armazenamento de arquivos e aplicações corporativas hospedadas em servidores dedicados. Nesse modelo, os dispositivos dos usuários solicitam serviços e os servidores processam e respondem às requisições.",
        question: "Esse modelo de organização da rede é denominado",
        options: [
          "rede híbrida.",
          "rede distribuída.",
          "arquitetura cliente-servidor.",
          "arquitetura ponto a ponto (P2P)."
        ],
        answer: 2,
        feedback: "✓ Resposta correta: C) arquitetura cliente-servidor.\n\nPor que está certa:\nNa arquitetura cliente-servidor, há uma separação clara de papéis: os clientes (dispositivos dos usuários) solicitam recursos e serviços, enquanto os servidores dedicados processam e respondem a essas requisições de forma centralizada. Esse modelo é diferente do P2P (onde todos os nós têm papéis equivalentes), da rede distribuída (sem controle centralizado) e da rede híbrida (combinação de modelos)."
      },

      // ── Questão 4 ──────────────────────────────────────────────────────────
      {
        texto: "Uma rede é um conjunto de dispositivos conectados. A existência de vários dispositivos, gera um problema relacionado a como conectá-los para tornar possível a comunicação um a um. Uma solução seria criar uma conexão ponto a ponto entre todos os pares possíveis de dispositivos (uma topologia de malha) ou entre um dispositivo central e todos os demais dispositivos (uma topologia estrela). Esses métodos, entretanto, não são práticos e há um desperdício quando aplicado a redes muito grandes. O número e o comprimento dos links exigem uma infraestrutura maior não eficiente em termos de custos e a maioria desses links ficaria ociosa a maior parte do tempo. Outras topologias que empregam conexões multiponto, por exemplo, barramento, também podem ser descartadas em decorrência das distâncias entre os dispositivos e o número total. Uma solução mais apropriada é a comutação. Uma rede comutada é formada por uma série de nós interligados, chamados comutadores. Os comutadores são dispositivos capazes de criar conexões temporárias entre dois ou mais dispositivos conectados ao comutador. Em uma rede comutada, parte dos nós são diretamente conectados aos sistemas finais e outros são utilizados para roteamento de pacotes.",
        source: "FOROUZAN, Behrouz A.; MOSHARRAF, Firouz. Redes de computadores: uma abordagem top-down. AMGH Editora, 2013. (adaptada)",
        miniEnunciado: "Considere o texto acima e os métodos de comutação estudados, e analise as afirmações a seguir.",
        assertions: [
          "A comutação de pacotes permite que os dados sejam divididos em pequenas unidades chamadas pacotes, que podem seguir caminhos diferentes até o destino.",
          "[PORQUE] Na comutação de pacotes, os dados são transmitidos por um canal exclusivo estabelecido previamente entre origem e destino durante toda a comunicação."
        ],
        question: "Assinale a alternativa correta.",
        options: [
          "As asserções I e II são proposições falsas.",
          "A asserção I é uma proposição falsa, e a II é uma proposição verdadeira.",
          "A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.",
          "As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I."
        ],
        answer: 2,
        feedback: "✓ Resposta correta: C) A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.\n\nPor que está certa:\nA asserção I é verdadeira — na comutação de pacotes, os dados são divididos em pacotes que podem percorrer rotas diferentes até o destino. A asserção II é falsa — o canal exclusivo pré-estabelecido descreve a comutação de circuitos (como na telefonia tradicional), não a comutação de pacotes. Na comutação de pacotes, não há reserva de canal exclusivo; os pacotes compartilham os recursos da rede."
      },

      // ── Questão 5 ──────────────────────────────────────────────────────────
      {
        texto: "Quando um computador em algum ponto do mundo precisa se comunicar com outro computador em outra parte do mundo, normalmente, utilizam a Internet. Para que a comunicação ocorra, o pacote transmitido pelo computador transmissor pode passar por várias LANs ou WANs antes de atingir o computador de destino. Para tornar possível esse nível de comunicação, foi desenvolvido um esquema de endereçamento global, denominado endereçamento lógico ou endereçamento IP. A última nomenclatura referencia o protocolo IP usado na internet.",
        source: "FOROUZAN, Behrouz A.; MOSHARRAF, Firouz. Redes de computadores: uma abordagem top-down. AMGH Editora, 2013. (adaptada)",
        miniEnunciado: "Considere o texto acima e o conteúdo estudado sobre endereçamento, analise as afirmações a seguir.",
        assertions: [
          "O endereço IP é utilizado para identificar logicamente um dispositivo em uma rede e permitir o roteamento dos pacotes entre diferentes redes.",
          "[PORQUE] O endereço IP é estruturado de forma linear, permitindo identificar a rede e do dispositivo dentro dela, o que possibilita o encaminhamento eficiente de pacotes por roteadores entre redes semelhantes."
        ],
        question: "Assinale a alternativa correta.",
        options: [
          "As asserções I e II são proposições falsas.",
          "A asserção I é uma proposição falsa, e a II é uma proposição verdadeira.",
          "A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.",
          "As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I."
        ],
        answer: 2,
        feedback: "✓ Resposta correta: C) A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.\n\nPor que está certa:\nA asserção I é verdadeira — o endereço IP identifica logicamente um dispositivo na rede e possibilita o roteamento entre redes distintas. A asserção II é falsa porque o endereço IP não é estruturado de forma \"linear\", mas sim hierárquica, dividido em parte de rede e parte de host. Além disso, roteadores encaminham pacotes entre redes distintas (não \"semelhantes\"). Portanto, a II não pode ser justificativa da I."
      },

      // ── Questão 6 ──────────────────────────────────────────────────────────
      {
        texto: "Um administrador de redes precisa avaliar o desempenho da infraestrutura de comunicação de uma empresa para garantir qualidade no acesso a sistemas corporativos e serviços de videoconferência.",
        miniEnunciado: "Considere as afirmações a seguir sobre métricas de desempenho em redes.",
        assertions: [
          "Largura de banda representa a capacidade máxima de transmissão de dados em um meio de comunicação.",
          "Throughput representa a taxa real de dados transmitidos efetivamente pela rede.",
          "Jitter representa a variação no atraso entre pacotes consecutivos.",
          "Perda de pacotes corresponde à quantidade de dados descartados durante a transmissão na rede."
        ],
        question: "É correto apenas o que se afirma em",
        options: [
          "I e II.",
          "II e III.",
          "III e IV.",
          "I, II, III e IV."
        ],
        answer: 3,
        feedback: "✓ Resposta correta: D) I, II, III e IV.\n\nPor que está certa:\nTodas as afirmações estão corretas. I — largura de banda é a capacidade máxima teórica do meio. II — throughput é a taxa real (efetiva) de transmissão, sempre menor ou igual à largura de banda. III — jitter é a variação no atraso (latência) entre pacotes consecutivos, impactando aplicações em tempo real como VoIP e videoconferência. IV — perda de pacotes é a quantidade de pacotes descartados durante a transmissão, degradando a qualidade da comunicação."
      },

      // ── Questão 7 ──────────────────────────────────────────────────────────
      {
        texto: "Uma rede é a interligação de um conjunto de dispositivos capazes de se comunicar. Nessa definição, os dispositivos podem ser classificados como dispositivos finais, como computadores, servidores e smartphones, ou como dispositivos de interconexão, como roteadores, que conectam diferentes redes, e switches (ou comutadores), que interligam dispositivos dentro de uma mesma rede. Esses dispositivos são conectados por meio de transmissão com ou sem fio, como cabos ou o próprio ar.",
        source: "FOROUZAN, Behrouz A.; MOSHARRAF, Firouz. Redes de computadores: uma abordagem top-down. AMGH Editora, 2013. (adaptada)",
        question: "Com base no trecho apresentado e nos conceitos de redes de computadores estudados, assinale a alternativa correta.",
        options: [
          "Os hosts são responsáveis exclusivamente pela interligação entre redes distintas.",
          "Os meios de transmissão sem fio impedem a comunicação entre dispositivos de rede diferentes.",
          "Dispositivos de conexão, como switches e roteadores, exercem a mesma função que os hosts (dispositivos finais) dentro de uma rede.",
          "Dispositivos de conexão, como roteadores e switches, possuem funções específicas de interligação e encaminhamento de dados na rede."
        ],
        answer: 3,
        feedback: "✓ Resposta correta: D) Dispositivos de conexão, como roteadores e switches, possuem funções específicas de interligação e encaminhamento de dados na rede.\n\nPor que está certa:\nRoteadores interligam redes distintas e encaminham pacotes com base em endereços IP, enquanto switches interligam dispositivos dentro de uma mesma rede usando endereços MAC. As demais alternativas estão erradas: hosts (dispositivos finais) são os pontos de origem/destino da comunicação, não responsáveis pela interligação de redes; meios sem fio não impedem a comunicação; e switches e roteadores têm funções distintas entre si e em relação aos hosts."
      },

      // ── Questão 8 ──────────────────────────────────────────────────────────
      {
        texto: "A comunicação de dados consiste na troca de informações entre dois ou mais dispositivos por meio de um canal de transmissão, que pode ser, por exemplo, um cabo condutor. Para que essa comunicação ocorra de forma eficiente, é necessário que os dispositivos estejam inseridos em um sistema de comunicação, composto por uma combinação de hardware (equipamentos físicos) e software (programas), responsáveis por viabilizar o envio, a recepção e o processamento dos dados.",
        source: "FOROUZAN, Behrouz A. Comunicação de dados e redes de computadores. AMGH Editora, 2010. (adaptada)",
        miniEnunciado: "Sabendo que a comunicação de dados em redes de computadores é formada por cinco componentes, avalie as afirmativas a seguir.",
        assertions: [
          "A mensagem corresponde à informação que será transmitida entre os dispositivos.",
          "O emissor é o dispositivo responsável por enviar os dados, enquanto o receptor é o dispositivo que os recebe.",
          "O meio de transmissão é o caminho físico ou lógico pelo qual a mensagem trafega entre emissor e receptor.",
          "O protocolo define as regras que controlam a comunicação, como formato, sincronização e controle de erros."
        ],
        question: "É correto o que se afirma em",
        options: [
          "I e II.",
          "I, II e III.",
          "II, III e IV.",
          "I, II, III e IV."
        ],
        answer: 3,
        feedback: "✓ Resposta correta: D) I, II, III e IV.\n\nPor que está certa:\nOs cinco componentes de um sistema de comunicação de dados são exatamente: mensagem (informação a transmitir), emissor (quem envia), receptor (quem recebe), meio de transmissão (caminho percorrido) e protocolo (conjunto de regras). Todas as afirmativas descrevem corretamente esses componentes fundamentais."
      },

      // ── Questão 9 ──────────────────────────────────────────────────────────
      {
        texto: "A comunicação de dados consiste na troca de informações entre dois ou mais dispositivos por meio de um canal de transmissão, que pode ser, por exemplo, um cabo condutor. Para que essa comunicação ocorra de forma eficiente, é necessário que os dispositivos estejam inseridos em um sistema de comunicação, composto por uma combinação de hardware (equipamentos físicos) e software (programas), responsáveis por viabilizar o envio, a recepção e o processamento dos dados.\n\nA eficácia de um sistema de comunicações de dados depende de quatro características fundamentais: entrega, precisão, sincronização e jitter.",
        source: "FOROUZAN, Behrouz A. Comunicação de dados e redes de computadores. AMGH Editora, 2010. (adaptado)",
        miniEnunciado: "Sobre o sistema de comunicação de dados, avalie as assertivas a seguir.",
        assertions: [
          "A precisão garante que os dados cheguem ao destino correto, evitando que sejam recebidos por dispositivos indevidos.",
          "A entrega assegura que os dados sejam entregues sem erros ou alterações durante a transmissão.",
          "A sincronização refere-se à necessidade de os dados chegarem dentro de um intervalo de tempo adequado, especialmente em aplicações em tempo real.",
          "O jitter corresponde à variação no tempo de chegada dos pacotes, podendo impactar negativamente aplicações sensíveis a atraso."
        ],
        question: "É correto o que se afirma em",
        options: [
          "I e II.",
          "II e III.",
          "III e IV.",
          "I, II, III e IV."
        ],
        answer: 2,
        feedback: "✓ Resposta correta: C) III e IV.\n\nPor que está certa:\nAs afirmativas I e II estão com as definições trocadas. A entrega (delivery) é que garante que os dados cheguem ao destino correto, enquanto a precisão (accuracy) assegura que os dados cheguem sem erros. As afirmativas III e IV estão corretas: a sincronização diz respeito ao tempo adequado de chegada dos dados (crucial em aplicações em tempo real), e o jitter é a variação no tempo de chegada dos pacotes, impactando negativamente VoIP, streaming e videoconferência."
      },

      // ── Questão 10 ─────────────────────────────────────────────────────────
      {
        texto: "A comunicação de dados consiste na troca de informações entre dois ou mais dispositivos por meio de um canal de transmissão, que pode ser, por exemplo, um cabo condutor ou o próprio ar. Além de possibilitar a transmissão, o meio de transmissão utilizado também influencia a forma como essa troca de dados ocorre, determinando características como velocidade, alcance e direção do fluxo de comunicação. A figura a seguir ilustra três modos distintos de transmissão do fluxo de dados:\n\n[Simplex: fluxo unidirecional — Mainframe → Monitor]\n[Half-duplex: fluxo bidirecional alternado — Estação ↔ Estação (não simultâneo)]\n[Full-duplex: fluxo bidirecional simultâneo — Estação ↔ Estação (simultâneo)]",
        source: "FOROUZAN, Behrouz A. Comunicação de dados e redes de computadores. AMGH Editora, 2010. p. 6.",
        question: "Com base na análise da figura e nos conceitos de comunicação de dados, assinale a alternativa correta.",
        options: [
          "No modo simplex, a comunicação ocorre em um único sentido.",
          "No modo half-duplex, a comunicação ocorre em ambos os sentidos simultaneamente.",
          "No modo full-duplex, a comunicação ocorre em apenas um sentido, sem possibilidade de resposta.",
          "No modo simplex, os dispositivos alternam o envio de dados em intervalos de tempo definidos."
        ],
        answer: 0,
        feedback: "✓ Resposta correta: A) No modo simplex, a comunicação ocorre em um único sentido.\n\nPor que está certa:\nNo modo simplex, a transmissão é unidirecional — apenas um dispositivo envia e o outro apenas recebe (ex: teclado → computador, transmissão de TV). O half-duplex permite comunicação em ambos os sentidos, mas não simultaneamente (ex: walkie-talkie). O full-duplex permite transmissão simultânea nos dois sentidos (ex: telefone). As alternativas B, C e D descrevem incorretamente esses modos."
      },

      // ── Questão 11 ─────────────────────────────────────────────────────────
      {
        texto: "A topologia de uma rede corresponde à representação geométrica das conexões entre os dispositivos e os enlaces que compõem uma rede. Entre as topologias básicas, destacam-se: malha, estrela, barramento e anel. Uma determinada topologia é caracterizada pela conexão de cada dispositivo a todos os outros dispositivos da rede, garantindo alta redundância e confiabilidade, porém com elevado custo de implementação.",
        question: "Com base na descrição apresentada, assinale a alternativa que contém a topologia correspondente.",
        options: [
          "Topologia em barramento.",
          "Topologia em anel.",
          "Topologia em estrela.",
          "Topologia em malha."
        ],
        answer: 3,
        feedback: "✓ Resposta correta: D) Topologia em malha.\n\nPor que está certa:\nNa topologia em malha (mesh), cada dispositivo é conectado diretamente a todos os outros, criando múltiplos caminhos redundantes. Isso garante alta confiabilidade (falha em um enlace não derruba a rede), mas exige n(n-1)/2 conexões para n dispositivos, tornando o custo elevado. A topologia estrela conecta todos ao dispositivo central; o anel conecta em cadeia circular; o barramento usa um único cabo compartilhado."
      },

      // ── Questão 12 ─────────────────────────────────────────────────────────
      {
        texto: "Hoje em dia, quando falamos de redes, geralmente estamos nos referindo a duas categorias principais: redes locais e redes de ampla abrangência, geograficamente distribuídas. A categoria na qual uma rede pertence é determinada pelo seu tamanho. Uma LAN normalmente cobre uma área geográfica menor que 3 km; uma WAN pode ter uma cobertura mundial. As redes de tamanho intermediário a esses são, em geral, conhecidas como redes de abrangência metropolitana (MAN) e abrangem uma cobertura de dezenas de quilômetros.",
        source: "FOROUZAN, Behrouz A. Comunicação de dados e redes de computadores. AMGH Editora, 2010.",
        question: "Com base no texto apresentado, uma rede que interliga dispositivos em um prédio comercial, cobrindo uma área de aproximadamente 30 metros, é classificada como",
        options: [
          "LAN, por abranger uma área restrita e de baixa complexidade.",
          "MAN, por cobrir uma área intermediária entre redes locais e redes de longa distância.",
          "WAN, por permitir comunicação entre diferentes regiões dentro de uma mesma cidade.",
          "PAN, por conectar dispositivos pessoais em curta distância."
        ],
        answer: 0,
        feedback: "✓ Resposta correta: A) LAN, por abranger uma área restrita e de baixa complexidade.\n\nPor que está certa:\nUma LAN (Local Area Network) cobre áreas geograficamente limitadas, geralmente até 3 km, como prédios, andares ou campus. Uma rede em um prédio comercial cobrindo 30 metros se enquadra perfeitamente nessa classificação. MAN abrange dezenas de quilômetros (como uma cidade); WAN tem cobertura nacional ou mundial; PAN (Personal Area Network) conecta dispositivos pessoais em curtíssima distância (metros)."
      },

      // ── Questão 13 ─────────────────────────────────────────────────────────
      {
        texto: "Um meio de transmissão, em termos gerais, pode ser definido como qualquer coisa capaz de transportar informações de uma origem a um destino. Em comunicação de dados, a definição de informações e meios de transmissão é mais específica. O meio de transmissão geralmente pode ser o espaço livre, um cabo metálico ou um cabo de fibra óptica. A informação normalmente é um sinal, resultado da conversão de dados.",
        source: "FOROUZAN, Behrouz A. Comunicação de dados e redes de computadores. AMGH Editora, 2010.",
        question: "Com base no texto apresentado, assinale a alternativa correta.",
        options: [
          "O meio de transmissão em redes de computadores é exclusivamente físico, como cabos metálicos, não incluindo o espaço livre.",
          "A informação transmitida em redes de computadores ocorre diretamente na forma de dados, sem necessidade de conversão.",
          "O meio de transmissão é responsável por transportar sinais, podendo ser representado por cabos ou pelo espaço livre.",
          "A comunicação de dados ocorre apenas por meio de cabos de fibra óptica, devido à maior velocidade de transmissão."
        ],
        answer: 2,
        feedback: "✓ Resposta correta: C) O meio de transmissão é responsável por transportar sinais, podendo ser representado por cabos ou pelo espaço livre.\n\nPor que está certa:\nConforme o texto, o meio de transmissão pode ser o espaço livre (ondas de rádio, micro-ondas), um cabo metálico (par trançado, coaxial) ou fibra óptica. A informação é transmitida na forma de sinais (resultado da conversão dos dados), não diretamente como dados brutos. As demais alternativas contradizem o texto ao limitar exclusivamente os meios ou negar a necessidade de conversão."
      },

      // ── Questão 14 ─────────────────────────────────────────────────────────
      {
        texto: "Entre os meios de transmissão guiados, que são aqueles que requerem um condutor físico para interligar um dispositivo a outro, temos: cabo de par trançado, cabo coaxial e cabo de fibra óptica. Um sinal trafegando por qualquer um desses meios é direcionado e contido por limites físicos do meio. Cabos de par trançado e coaxiais usam condutores metálicos (cobre) que aceitam e transportam sinais na forma de corrente elétrica. A fibra óptica é um cabo que aceita e transporta sinais na forma de luz.",
        source: "FOROUZAN, Behrouz A. Comunicação de dados e redes de computadores. AMGH Editora, 2010. p. 192.",
        question: "Com base no texto e nos conhecimentos sobre desempenho dos meios de transmissão guiados, assinale a alternativa correta.",
        options: [
          "O cabo de par trançado é formado por pares de fios de cobre entrelaçados, o que reduz interferências eletromagnéticas e é amplamente utilizado em redes locais devido ao seu baixo custo e facilidade de instalação.",
          "O cabo coaxial é composto por fibras de vidro que transmitem dados por meio de pulsos de luz, sendo totalmente imune a interferências externas.",
          "A fibra óptica utiliza sinais elétricos para transmissão de dados, o que a torna mais suscetível a ruídos e interferências eletromagnéticas.",
          "Todos os meios guiados utilizam o mesmo princípio de transmissão de dados, diferenciando-se apenas pelo material externo do cabo."
        ],
        answer: 0,
        feedback: "✓ Resposta correta: A) O cabo de par trançado é formado por pares de fios de cobre entrelaçados, o que reduz interferências eletromagnéticas e é amplamente utilizado em redes locais devido ao seu baixo custo e facilidade de instalação.\n\nPor que está certa:\nO par trançado (twisted pair) usa pares de fios de cobre entrelaçados justamente para cancelar interferências eletromagnéticas mútuas (cross-talk). É o meio mais comum em redes locais Ethernet por seu custo reduzido e facilidade de instalação. As demais alternativas estão erradas: o coaxial usa condutor de cobre (não fibra de vidro); a fibra óptica usa sinais de luz (não elétricos) e por isso é imune a interferências eletromagnéticas; os meios guiados usam princípios de transmissão distintos (elétrico vs. óptico)."
      },

      // ── Questão 15 ─────────────────────────────────────────────────────────
      {
        texto: "Em uma empresa, o administrador de rede precisa configurar um roteador para permitir a comunicação entre a rede local (LAN) da organização e outras redes externas, como a Internet. Durante essa configuração inicial, são definidos parâmetros como endereçamento IP, rotas e interfaces de rede, garantindo que os dados sejam encaminhados corretamente entre diferentes redes.",
        question: "Considerando o papel do roteador em uma rede de computadores, assinale a alternativa que representa corretamente sua principal função.",
        options: [
          "Converter sinais analógicos em digitais.",
          "Interligar redes distintas e encaminhar pacotes com base em endereços IP.",
          "Controlar o acesso físico ao meio de transmissão.",
          "Encaminhar quadros com base em endereços MAC dentro da rede local."
        ],
        answer: 1,
        feedback: "✓ Resposta correta: B) Interligar redes distintas e encaminhar pacotes com base em endereços IP.\n\nPor que está certa:\nO roteador opera na camada de rede (camada 3 do modelo OSI) e sua principal função é interligar redes distintas, tomando decisões de encaminhamento de pacotes com base nos endereços IP de destino e nas tabelas de roteamento. A conversão de sinais analógico-digital é feita por modems; o controle de acesso ao meio é função da subcamada MAC; o encaminhamento por endereços MAC é função do switch (camada 2)."
      },

      // ── Questão 16 ─────────────────────────────────────────────────────────
      {
        texto: "Uma empresa está expandindo sua rede corporativa e precisa segmentar o tráfego entre diferentes departamentos, mantendo alta performance e reduzindo a dependência de roteadores dedicados. Para isso, o administrador de rede avalia o uso de switches que operam em diferentes camadas do modelo OSI, considerando suas funcionalidades de comutação e roteamento.",
        question: "Com base no cenário apresentado e nos conceitos de redes de computadores, assinale a alternativa que diferencia corretamente um switch de camada 2 de um switch de camada 3.",
        options: [
          "O switch de camada 2 utiliza endereços MAC para encaminhamento de quadros, enquanto o switch de camada 3 pode encaminhar pacotes com base em endereços IP.",
          "O switch de camada 2 e o switch de camada 3 possuem exatamente as mesmas funções.",
          "O switch de camada 2 utiliza endereços IP para encaminhar quadros dentro da rede local.",
          "O switch de camada 2 realiza roteamento entre redes distintas, enquanto o switch de camada 3 apenas encaminha quadros."
        ],
        answer: 0,
        feedback: "✓ Resposta correta: A) O switch de camada 2 utiliza endereços MAC para encaminhamento de quadros, enquanto o switch de camada 3 pode encaminhar pacotes com base em endereços IP.\n\nPor que está certa:\nO switch de camada 2 (enlace) comuta quadros usando a tabela de endereços MAC, operando dentro de uma mesma rede. O switch de camada 3 (rede) adiciona capacidade de roteamento, podendo encaminhar pacotes com base em endereços IP entre sub-redes — eliminando a necessidade de roteadores dedicados para a segmentação de tráfego entre departamentos, como descrito no cenário."
      },

      // ── Questão 17 ─────────────────────────────────────────────────────────
      {
        texto: "Suponha que um gestor de TI de uma empresa esteja avaliando o desempenho do subsistema de armazenamento, com o objetivo de evitar investimentos desnecessários em expansão de capacidade. Durante a análise, ele identificou que o servidor responsável por um sistema crítico realiza, em média, 6 operações de I/O por transação, sendo que cada operação de I/O no disco consome aproximadamente 15 ms. Em um intervalo de 30 minutos, foram registradas 5.400 transações.",
        question: "Com base nas informações apresentadas, o gestor concluiu que o throughput médio do disco (em transações por segundo) e a utilização média do disco (em valor percentual) são, respectivamente:",
        options: [
          "3 e 45.",
          "3 e 27.",
          "6 e 27.",
          "6 e 45."
        ],
        answer: 1,
        feedback: "✓ Resposta correta: B) 3 e 27.\n\nPor que está certa:\nThroughput = 5.400 transações ÷ (30 × 60 segundos) = 5.400 ÷ 1.800 = 3 transações/segundo.\nUtilização do disco: cada transação gera 6 operações de I/O × 15 ms = 90 ms de uso de disco por transação. Com 3 transações/segundo, o disco fica ocupado 3 × 90 ms = 270 ms por segundo. Utilização = 270 ms ÷ 1.000 ms = 0,27 = 27%."
      },

      // ── Questão 18 ─────────────────────────────────────────────────────────
      {
        texto: "Em sistemas de comunicação modernos, como telefonia móvel, redes de computadores e aplicações multimídia, informações do mundo físico — como voz e imagens — precisam ser capturadas, processadas e transmitidas por dispositivos digitais. Para que isso seja possível, esses sistemas realizam a conversão entre sinais analógicos e digitais.",
        question: "Considerando o cenário apresentado e os fundamentos da comunicação de dados, assinale a alternativa que expressa corretamente a principal finalidade da conversão analógico-digital.",
        options: [
          "Eliminar completamente o ruído do sinal original.",
          "Evitar o uso de protocolos de comunicação.",
          "Reduzir a latência da rede a zero.",
          "Permitir o processamento e a transmissão de informações em sistemas digitais."
        ],
        answer: 3,
        feedback: "✓ Resposta correta: D) Permitir o processamento e a transmissão de informações em sistemas digitais.\n\nPor que está certa:\nA conversão analógico-digital (ADC) transforma sinais contínuos do mundo físico (voz, imagens, temperatura) em representações discretas (bits) que podem ser processadas, armazenadas e transmitidas por sistemas digitais. As demais alternativas estão erradas: a conversão não elimina completamente o ruído (pode introduzir erro de quantização), não dispensa protocolos e não elimina a latência."
      },

      // ── Questão 19 ─────────────────────────────────────────────────────────
      {
        texto: "Os sistemas de comunicação podem ser classificados de acordo com a direção em que ocorre a transmissão de dados entre os dispositivos.",
        question: "Um sistema de comunicação em que a transmissão ocorre em ambos os sentidos, porém não simultaneamente, é classificado como:",
        options: [
          "Full-duplex.",
          "Half-duplex.",
          "Simplex.",
          "Padrão."
        ],
        answer: 1,
        feedback: "✓ Resposta correta: B) Half-duplex.\n\nPor que está certa:\nO half-duplex permite comunicação bidirecional, mas apenas em um sentido por vez — os dispositivos alternam entre enviar e receber (exemplo clássico: walkie-talkie). O full-duplex permite transmissão simultânea nos dois sentidos (ex: telefone). O simplex permite comunicação em apenas um sentido (ex: rádio broadcast). \"Padrão\" não é uma classificação de modo de transmissão."
      },

      // ── Questão 20 ─────────────────────────────────────────────────────────
      {
        texto: "Durante a transmissão de dados em longas distâncias, a qualidade do sinal pode ser comprometida pela presença de interferências externas, como sinais eletromagnéticos provenientes de outros dispositivos, que se somam ao sinal original e podem causar distorções na informação transmitida.",
        question: "O fenômeno descrito, que corresponde à alteração indesejada do sinal devido à interferência externa, é denominado como",
        options: [
          "Jitter.",
          "Atenuação.",
          "Latência.",
          "Ruído."
        ],
        answer: 3,
        feedback: "✓ Resposta correta: D) Ruído.\n\nPor que está certa:\nO ruído (noise) é qualquer sinal indesejado que se soma ao sinal original durante a transmissão, causando distorções e podendo levar a erros na interpretação dos dados. Ele pode ser causado por interferências eletromagnéticas, outros dispositivos eletrônicos ou o próprio meio. Jitter é a variação no atraso entre pacotes; atenuação é a perda de potência do sinal ao longo do meio; latência é o atraso total de transmissão."
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
    return quizDataAVAPoo.map(subject => ({
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

// ─── Formata o feedback ───────────────────────────────────────────────────────
function formatFeedback(feedback) {
    return feedback
        .replace(/\n/g, '<br>')
        .replace(/(✓ Resposta correta:)/g, '<strong>$1</strong>')
        .replace(/(<br>)*(Por que está certa:)(<br>)*/g, '<br><br><strong>Por que está certa:</strong> ');
}

function createOriginalQuizData() {
        return quizDataAVAPoo.map(subject => ({ ...subject, questions: subject.questions.map(q => ({ ...q })) }));
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

// ─── Highlight de sintaxe Java ────────────────────────────────────────────────
function highlightJava(raw) {
    let code = raw
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');

    code = code.replace(/"([^"]*)"/g,
        '<span class="jk-string">"$1"</span>');

    code = code.replace(/(@\w+)/g,
        '<span class="jk-annotation">$1</span>');

    code = code.replace(/\b(public|private|protected|class|interface|extends|implements|return|void|double|int|long|float|boolean|char|byte|short|String|new|this|super|static|final|abstract|null|true|false|if|else|for|while|do|switch|case|break|continue|try|catch|finally|throw|throws|import|package)\b/g,
        '<span class="jk-keyword">$1</span>');

    code = code.replace(/(\/\/.*)$/gm,
        '<span class="jk-comment">$1</span>');

    return code;
}

// ─── Renderiza bloco de código ────────────────────────────────────────────────
function renderCodeBlock(code) {
    if (!code) return '';
    return `<div class="code-block"><pre>${highlightJava(code)}</pre></div>`;
}

// ─── Renderiza fonte/referência bibliográfica ─────────────────────────────────
function renderSource(source) {
    if (!source) return '';
    return `<div class="question-source">${source}</div>`;
}

// ─── Renderiza afirmativas romanas ────────────────────────────────────────────
function renderAssertions(assertions) {
    if (!assertions || assertions.length === 0) return '';

    const romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI'];

    const items = assertions.map((text, idx) => {
        const isPorque = text.startsWith('[PORQUE]');
        const cleanText = text.replace('[PORQUE]', '').trim();

        if (isPorque) {
            return `
                <div class="assertion-connector">
                    <span class="connector-label">PORQUE</span>
                </div>
                <div class="assertion">
                    <span class="assertion-num">${romanNumerals[idx]}.</span>
                    <span>${cleanText}</span>
                </div>`;
        }

        return `
            <div class="assertion">
                <span class="assertion-num">${romanNumerals[idx]}.</span>
                <span>${cleanText}</span>
            </div>`;
    }).join('');

    return `<div class="assertions">${items}</div>`;
}

// ─── Monta o corpo de cada questão ────────────────────────────────────────────
function buildQuestionBody(question) {
    let html = '';

    if (question.texto) {
        html += `<div class="question-texto">${question.texto.replace(/\n/g, '<br>')}</div>`;
    }

    if (question.source) {
        html += renderSource(question.source);
    }

    if (question.miniEnunciado) {
        html += `<div class="question-mini-enunciado">${question.miniEnunciado}</div>`;
    }

    if (question.code) {
        html += renderCodeBlock(question.code);
    }

    if (question.assertions && question.assertions.length > 0) {
        html += renderAssertions(question.assertions);
    }

    html += `<div class="question-enunciado">${question.question}</div>`;

    return html;
}

// ─── Renderização completa ────────────────────────────────────────────────────
function showAllQuestions() {
    let html = "";
    let globalIndex = 0;

    quizData.forEach((subject, sIdx) => {
        html += `<div class="subject-title">${subject.subject}</div>`;

        subject.questions.forEach((question, qIdx) => {
            const gi       = globalIndex;
            const answered = userAnswers[gi] !== null;

            const questionBodyHTML = buildQuestionBody(question);

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

    if (quizModo === 'scroll') iniciarScrollObserver();
}

// ─── Resultado por aula ───────────────────────────────────────────────────────
function renderSubjectResult(sIdx) {
    const subject = quizData[sIdx];
    const total   = subject.questions.length;

    const globalIndices = questionMap
        .map((m, gi) => m.sIdx === sIdx ? gi : -1)
        .filter(gi => gi !== -1);

    const answered = globalIndices.filter(gi => userAnswers[gi] !== null).length;
    const correct  = globalIndices.filter(gi => userAnswers[gi] === quizData[sIdx].questions[questionMap[gi].qIdx].answer).length;
    const pct      = answered > 0 ? Math.round((correct / answered) * 100) : 0;
    const allDone  = answered === total;

    let colorClass = '';
    if (allDone) {
        if (pct >= 70)      colorClass = 'subject-result--good';
        else if (pct >= 50) colorClass = 'subject-result--mid';
        else                colorClass = 'subject-result--bad';
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

    const revealBtn = document.getElementById('reveal');
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

    if (quizModo === 'step') {
        atualizarControlesStep();
        setTimeout(sincronizarAlturaStep, 50);
    }
};

// ─── Revelar todas as respostas ───────────────────────────────────────────────
function revealAnswers() {
    questionMap.forEach((m, gi) => {
        if (userAnswers[gi] === null) {
            userAnswers[gi] = quizData[m.sIdx].questions[m.qIdx].answer;
        }
    });

    const eraModoStep = quizModo === 'step';

    if (eraModoStep) {
        quizModo = 'scroll';
        stepWrapper = null;
        const qc = document.getElementById('quiz-container');
        qc.classList.remove('modo-step');
        qc.style.height = '';
        document.getElementById('step-shell-header')?.remove();
        document.getElementById('step-shell-footer')?.remove();
        document.querySelector('.quiz-header')?.classList.remove('step-hidden');
        document.querySelector('.submit-container')?.classList.remove('step-hidden');
        document.querySelector('#results')?.classList.remove('step-hidden');
        document.querySelector('.page-footer')?.classList.remove('step-hidden');
    }

    showAllQuestions();
    updateGlobalResults();

    if (eraModoStep) {
        setTimeout(() => {
            ativarModoStep();
            setTimeout(() => {
                atualizarControlesStep();
                sincronizarAlturaStep();
            }, 80);
        }, 50);
    } else {
        smoothScrollToTop();
    }
}

// ─── Reiniciar com shuffle ────────────────────────────────────────────────────
function restartQuiz() {
    quizData = createShuffledQuizData();

    questionMap = [];
    quizData.forEach((subject, sIdx) => {
        subject.questions.forEach((_, qIdx) => questionMap.push({ sIdx, qIdx }));
    });

    userAnswers = new Array(questionMap.length).fill(null);
    currentQuestion = 0;

    const eraModoStep = quizModo === 'step';

    if (eraModoStep) {
        quizModo = 'scroll';
        stepWrapper = null;
        const qc = document.getElementById('quiz-container');
        qc.classList.remove('modo-step');
        qc.style.height = '';
        document.getElementById('step-shell-header')?.remove();
        document.getElementById('step-shell-footer')?.remove();
        document.querySelector('.quiz-header')?.classList.remove('step-hidden');
        document.querySelector('.submit-container')?.classList.remove('step-hidden');
        document.querySelector('#results')?.classList.remove('step-hidden');
        document.querySelector('.page-footer')?.classList.remove('step-hidden');
    }

    showAllQuestions();
    resultsContainer.style.display = "none";

    const revealBtn = document.getElementById('reveal');
    if (revealBtn) revealBtn.disabled = false;

    if (eraModoStep) {
        setTimeout(() => {
            ativarModoStep();
        }, 50);
    } else {
        smoothScrollToTop();
    }
}

// ─── Scroll ───────────────────────────────────────────────────────────────────
let _scrollCancelled = false;

function cancelScroll() { _scrollCancelled = true; }

function smoothScrollTo(targetPosition, duration = 800) {
    _scrollCancelled = false;
    const start = window.scrollY;
    const change = targetPosition - start;
    const startTime = performance.now();
    function animateScroll(currentTime) {
        if (_scrollCancelled) return;
        const elapsed  = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        window.scrollTo(0, start + change * progress);
        if (progress < 1) requestAnimationFrame(animateScroll);
    }
    requestAnimationFrame(animateScroll);
}
function smoothScrollToTop() { smoothScrollTo(0, 800); }

window.addEventListener('wheel',     cancelScroll, { passive: true });
window.addEventListener('touchmove', cancelScroll, { passive: true });
window.addEventListener('keydown',   cancelScroll, { passive: true });

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
document.getElementById('reveal').addEventListener('click', revealAnswers);
document.getElementById('restart').addEventListener('click', restartQuiz);

document.getElementById('btn-up').addEventListener('click',   () => smoothScrollTo(0, 1000));
document.getElementById('btn-left').addEventListener('click', () => { window.location.href = '../poo.html'; });
document.getElementById('btn-down').addEventListener('click', () => smoothScrollTo(document.body.scrollHeight, 1000));

document.getElementById('restartButton').addEventListener('click', restartQuiz);
document.getElementById('revealButton').addEventListener('click', revealAnswers);

document.addEventListener("DOMContentLoaded", () => {
    initializeQuiz();
});

// ─── Auto-Save ────────────────────────────────────────────────────────────────
const QUIZ_ID = 'questoes_redes_ap1';
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
            answeredCount:  userAnswers.filter(a => a !== null).length,
            isCompleted:    userAnswers.every(a => a !== null)
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

    const el = document.createElement('div');
    el.style.cssText = `
        background: rgba(59, 130, 246, 0.15);
        color: #93c5fd;
        border: 1px solid rgba(59, 130, 246, 0.3);
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

    requestAnimationFrame(() => {
        el.style.opacity    = '1';
        el.style.transform  = 'translateX(0)';
    });

    setTimeout(() => {
        el.style.opacity   = '0';
        el.style.transform = 'translateX(20px)';
        el.addEventListener('transitionend', () => {
            el.remove();
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


// ═══════════════════════════════════════════════════════════════════════════════
// MODO STEP
// ═══════════════════════════════════════════════════════════════════════════════

let quizModo        = "scroll";
let currentQuestion = 0;
let stepWrapper     = null;
let scrollObserver  = null;

function iniciarScrollObserver() {
    if (scrollObserver) scrollObserver.disconnect();

    const opcoes = {
        root: null,
        rootMargin: '-30% 0px -50% 0px',
        threshold: 0
    };

    scrollObserver = new IntersectionObserver((entries) => {
        if (quizModo !== 'scroll') return;
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                const gi = parseInt(id.replace('q-', ''), 10);
                if (!isNaN(gi)) currentQuestion = gi;
            }
        });
    }, opcoes);

    document.querySelectorAll('.question-container').forEach(el => {
        scrollObserver.observe(el);
    });
}

function pararScrollObserver() {
    if (scrollObserver) {
        scrollObserver.disconnect();
        scrollObserver = null;
    }
}

function getTotalQuestions() { return questionMap.length; }

function irParaQuestao(index) {
    const total = getTotalQuestions();
    if (index < 0 || index >= total) return;
    currentQuestion = index;
    deslizarParaQuestao(index);
    atualizarControlesStep();
    sincronizarAlturaStep();
}

function proximaQuestao()  { irParaQuestao(currentQuestion + 1); }
function questaoAnterior() { irParaQuestao(currentQuestion - 1); }

function deslizarParaQuestao(index) {
    if (!stepWrapper) return;
    stepWrapper.style.transform = `translateX(-${index * 100}%)`;
}

function ativarModoStep() {
    quizModo = "step";
    smoothScrollToTop();

    const qc = document.getElementById('quiz-container');
    if (!qc.querySelector('.question-container')) showAllQuestions();

    document.querySelector('.quiz-header')?.classList.add('step-hidden');
    document.querySelector('.submit-container')?.classList.add('step-hidden');
    document.querySelector('#results')?.classList.add('step-hidden');
    document.querySelector('.page-footer')?.classList.add('step-hidden');

    renderShellStep();
    pararScrollObserver();

    const jaTemQuestaoVisivel = currentQuestion > 0 ||
        (currentQuestion === 0 && userAnswers[0] !== null);

    if (!jaTemQuestaoVisivel) {
        const primeiraUnanswered = userAnswers.findIndex(a => a === null);
        currentQuestion = primeiraUnanswered === -1 ? 0 : primeiraUnanswered;
    }

    if (stepWrapper) {
        stepWrapper.style.transition = 'none';
        deslizarParaQuestao(currentQuestion);
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                if (stepWrapper) {
                    stepWrapper.style.transition =
                        'transform 0.38s cubic-bezier(0.4, 0, 0.2, 1)';
                }
            });
        });
    }

    atualizarControlesStep();
    atualizarBotaoModo();
    setTimeout(sincronizarAlturaStep, 50);
    smoothScrollToTop();
    document.querySelector('.page-wrapper').classList.add('modo-step-wrapper');
}

function ativarModoScroll() {
    quizModo = "scroll";

    const qc = document.getElementById('quiz-container');

    if (stepWrapper) {
        stepWrapper.style.transition = 'none';
        stepWrapper.style.transform  = 'translateX(0)';
    }

    if (stepWrapper && stepWrapper.parentNode === qc) {
        const filhos = Array.from(stepWrapper.children);
        filhos.forEach(filho => qc.appendChild(filho));
        stepWrapper.remove();
    }
    stepWrapper = null;

    qc.classList.remove('modo-step');
    qc.style.height = '';

    qc.querySelectorAll('.step-structural-hidden').forEach(el => {
        el.classList.remove('step-structural-hidden');
    });

    document.getElementById('step-shell-header')?.remove();
    document.getElementById('step-shell-footer')?.remove();

    document.querySelector('.quiz-header')?.classList.remove('step-hidden');
    document.querySelector('.submit-container')?.classList.remove('step-hidden');
    document.querySelector('#results')?.classList.remove('step-hidden');
    document.querySelector('.page-footer')?.classList.remove('step-hidden');

    showAllQuestions();
    updateGlobalResults();
    atualizarBotaoModo();
    iniciarScrollObserver();

    requestAnimationFrame(() => {
        const alvo = document.getElementById(`q-${currentQuestion}`);
        if (alvo) alvo.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
}

function toggleModo() {
    quizModo === "scroll" ? ativarModoStep() : ativarModoScroll();
}

function renderShellStep() {
    const qc = document.getElementById('quiz-container');
    if (!qc) return;

    if (qc.querySelector('.step-quiz-wrapper')) {
        stepWrapper = qc.querySelector('.step-quiz-wrapper');
        qc.classList.add('modo-step');
        _montarShellHTML(qc);
        return;
    }

    const wrapper = document.createElement('div');
    wrapper.className = 'step-quiz-wrapper';

    const questoes = Array.from(qc.querySelectorAll('.question-container'));
    questoes.forEach(q => wrapper.appendChild(q));

    qc.querySelectorAll('.subject-title, .subject-result').forEach(el => {
        el.classList.add('step-structural-hidden');
    });

    qc.insertBefore(wrapper, qc.firstChild);
    stepWrapper = wrapper;

    qc.classList.add('modo-step');

    _montarShellHTML(qc);
}

function _montarShellHTML(qc) {
    document.getElementById('step-shell-header')?.remove();
    document.getElementById('step-shell-footer')?.remove();

    const header = document.createElement('div');
    header.id = 'step-shell-header';
    header.innerHTML = `
        <div class="step-header">
            <div class="step-subject-label" id="step-subject-label"></div>
            <div class="step-progress-wrapper">
                <div class="step-counter" id="step-counter"></div>
                <div class="step-progress-bar">
                    <div class="step-progress-fill" id="step-progress-fill"></div>
                </div>
                <div class="step-score-badges" id="step-score-badges"></div>
            </div>
        </div>
    `;
    qc.parentNode.insertBefore(header, qc);

    const footer = document.createElement('div');
    footer.id = 'step-shell-footer';
    footer.innerHTML = `
        <div class="step-footer">
            <button class="step-btn step-btn-secondary" id="step-prev"
                    onclick="questaoAnterior()">
                <i class="fas fa-arrow-left"></i> Voltar
            </button>
            <div class="step-dots" id="step-dots"></div>
            <button class="step-btn step-btn-primary" id="step-next"
                    onclick="proximaQuestao()">
                Avançar <i class="fas fa-arrow-right"></i>
            </button>
        </div>
    `;
    qc.parentNode.insertBefore(footer, qc.nextSibling);
}

function atualizarControlesStep() {
    const total = getTotalQuestions();
    const gi    = currentQuestion;

    const counter = document.getElementById('step-counter');
    if (counter) counter.textContent = `${gi + 1} / ${total}`;

    const fill = document.getElementById('step-progress-fill');
    if (fill) fill.style.width = `${((gi + 1) / total) * 100}%`;

    const subjectLabel = document.getElementById('step-subject-label');
    if (subjectLabel && questionMap[gi]) {
        const { sIdx } = questionMap[gi];
        subjectLabel.textContent = quizData[sIdx].subject;
    }

    const badges = document.getElementById('step-score-badges');
    if (badges) {
        let acertos = 0, erros = 0;
        userAnswers.forEach((ans, idx) => {
            if (ans === null) return;
            const { sIdx, qIdx } = questionMap[idx];
            ans === quizData[sIdx].questions[qIdx].answer ? acertos++ : erros++;
        });
        badges.innerHTML = `
            <span class="step-badge step-badge-correct">
                <i class="fas fa-check"></i> ${acertos}
            </span>
            <span class="step-badge step-badge-incorrect">
                <i class="fas fa-times"></i> ${erros}
            </span>
        `;
    }

    const dots = document.getElementById('step-dots');
    if (dots) {
        const range = getDotsRange(gi, total, 9);
        dots.innerHTML = range.map(idx => {
            let cls = 'step-dot';
            if (idx === gi) {
                cls += ' step-dot-active';
            } else if (userAnswers[idx] !== null) {
                const { sIdx, qIdx } = questionMap[idx];
                cls += userAnswers[idx] === quizData[sIdx].questions[qIdx].answer
                    ? ' step-dot-correct'
                    : ' step-dot-wrong';
            }
            return `<button class="${cls}" onclick="irParaQuestao(${idx})"
                            title="Questão ${idx + 1}"></button>`;
        }).join('');
    }

    const prevBtn = document.getElementById('step-prev');
    if (prevBtn) prevBtn.disabled = gi === 0;

    const nextBtn = document.getElementById('step-next');
    if (nextBtn) {
        const isLast = gi === total - 1;
        if (isLast) {
            nextBtn.innerHTML = '<i class="fas fa-flag-checkered"></i> Finalizar';
            nextBtn.onclick = () => {
                ativarModoScroll();
                setTimeout(() => smoothScrollTo(document.body.scrollHeight, 800), 150);
            };
        } else {
            nextBtn.innerHTML = 'Avançar <i class="fas fa-arrow-right"></i>';
            nextBtn.onclick = proximaQuestao;
        }
        nextBtn.disabled = false;
    }
}

function getDotsRange(current, total, maxVisible) {
    if (total <= maxVisible) return Array.from({ length: total }, (_, i) => i);
    const half  = Math.floor(maxVisible / 2);
    let   start = Math.max(0, current - half);
    let   end   = start + maxVisible;
    if (end > total) { end = total; start = end - maxVisible; }
    return Array.from({ length: end - start }, (_, i) => start + i);
}

function atualizarBotaoModo() {
    const btn = document.getElementById('btn-toggle-modo');
    if (!btn) return;
    if (quizModo === 'step') {
        btn.innerHTML = '<i class="fas fa-list"></i>';
        btn.title = 'Modo Scroll';
        btn.classList.add('modo-step-active');
    } else {
        btn.innerHTML = '<i class="fas fa-layer-group"></i>';
        btn.title = 'Modo Step (uma questão por vez)';
        btn.classList.remove('modo-step-active');
    }
}

function criarBotaoToggleModo() {
    if (document.getElementById('btn-toggle-modo')) return;
    const btn = document.createElement('button');
    btn.id        = 'btn-toggle-modo';
    btn.className = 'btn-toggle-modo';
    btn.title     = 'Modo Step (uma questão por vez)';
    btn.innerHTML = '<i class="fas fa-layer-group"></i>';
    btn.addEventListener('click', toggleModo);
    document.body.appendChild(btn);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', criarBotaoToggleModo);
} else {
    criarBotaoToggleModo();
}

function sincronizarAlturaStep() {
    if (quizModo !== 'step' || !stepWrapper) return;

    const questoes = stepWrapper.querySelectorAll('.question-container');
    const atual    = questoes[currentQuestion];
    if (!atual) return;

    const altura = atual.scrollHeight;
    stepWrapper.style.height                               = altura + 'px';
    document.getElementById('quiz-container').style.height = altura + 'px';
}

window.quizDataAVAPoo = quizDataAVAPoo;