/* ═══════════════════════════════════════════════════════════════════════
   checklist.js — Lógica isolada do checklist  (v10)
   ✦ Renderiza módulos e vídeos de uma disciplina
   ✦ Restaura estado a partir de dados do Firebase
   ✦ Coleta o estado atual dos checkboxes do DOM
   ✦ Atualiza barras de progresso (painel + sidebar + geral)
   ✦ Zero dependência de UI de login ou sessão
   ✦ criarSalvador: debounce + throttle máximo para salvar sem perder dados
════════════════════════════════════════════════════════════════════════ */

// ── DADOS DAS DISCIPLINAS ────────────────────────────────────────────────
export const DISCIPLINAS_DATA = {
    design: {
        label:    'Design de SI',
        labelFull:'Design de Sistemas de Informação',
        icone:    'fa-pen-ruler',
        modulos: [
            {
                titulo: '1. Design Centrado no Usuário',
                itens: [
                    { id:'dsg_01', texto:'Conceitos de Design: Entender o design como um plano intencional voltado para a funcionalidade e não apenas estética.' },
                    { id:'dsg_02', texto:'IHC, Usabilidade e UX: Diferenciar a Interação Humano-Computador (estudo da relação), Interface (meio de uso), Usabilidade (eficácia e eficiência) e User Experience (prazer e emoção no uso).' },
                    { id:'dsg_03', texto:'Disciplinas Auxiliares: Estudar o papel do Design de Interação, Design de Interface e Arquitetura da Informação.' },
                    { id:'dsg_04', texto:'Critérios Ergonômicos de Scapin e Bastien: Memorizar os 8 critérios: compatibilidade, condução, carga de trabalho, homogeneidade, significado dos códigos, controle explícito, adaptabilidade e gestão de erros.' },
                ]
            },
            {
                titulo: '2. Comunicação e Engenharia Semiótica',
                itens: [
                    { id:'dsg_05', texto:'Modelos de Comunicação: Conhecer os seis elementos de Jakobson (emissor, receptor, canal, mensagem, código e referente) e como evitar ruídos na interação homem-máquina.' },
                    { id:'dsg_06', texto:'Semiótica de Peirce: Diferenciar os signos em Ícone (analogia), Índice (causalidade) e Símbolo (convenção).' },
                    { id:'dsg_07', texto:'Engenharia Semiótica: Entender o sistema como um artefato de metacomunicação onde o designer "ensina" o usuário a usar a interface.' },
                    { id:'dsg_08', texto:'Métodos de Avaliação: Estudar o Método de Avaliação de Comunicabilidade (MAC) e o Método de Inspeção Semiótica (MIS).' },
                ]
            },
            {
                titulo: '3. Alfabetismo e Alfabeto Visual',
                itens: [
                    { id:'dsg_09', texto:'Níveis de Mensagem: Identificar imagens nos níveis representacional (fiel ao real), abstrato (simplificação) e simbólico (mínimo irredutível).' },
                    { id:'dsg_10', texto:'Elementos Básicos da Linguagem Visual: Estudar a função de: ponto, linha, forma, direção, tom, cor, textura, escala, dimensão e movimento.' },
                ]
            },
            {
                titulo: '4. Psicologia Cognitiva e Gestalt',
                itens: [
                    { id:'dsg_11', texto:'Engenharia Cognitiva: Compreender os processos de atenção (seletiva, vigilância, sondagem e dividida) e os tipos de memória (curta e longa duração).' },
                    { id:'dsg_12', texto:'Princípios da Gestalt: Entender a tendência à estruturação e a segregação figura-fundo.' },
                    { id:'dsg_13', texto:'8 Pilares da Gestalt Aplicados: Saber aplicar Unidade, Segregação, Unificação, Fechamento, Continuidade, Proximidade, Semelhança e Pregnância da forma em interfaces.' },
                ]
            },
            {
                titulo: '5. O Elemento Cor',
                itens: [
                    { id:'dsg_14', texto:'Sistemas de Cores: Diferenciar RGB (síntese aditiva para telas) de CMYK (síntese subtrativa para impressão).' },
                    { id:'dsg_15', texto:'Propriedades da Cor: Definir Matiz, Luminosidade e Saturação.' },
                    { id:'dsg_16', texto:'Harmonias e Contrastes: Usar o círculo cromático para identificar cores análogas e complementares, além de entender a temperatura da cor (quentes vs. frias).' },
                    { id:'dsg_17', texto:'Psicodinâmica: Estudar os significados culturais e psicológicos das cores (ex: azul para confiança, vermelho para atenção).' },
                    { id:'dsg_18', texto:'Regra 60-30-10: Técnica para distribuição de cores no layout.' },
                ]
            },
            {
                titulo: '6. Tipografia',
                itens: [
                    { id:'dsg_19', texto:'História e Evolução: Conhecer a origem desde a escrita cuneiforme até a invenção dos tipos móveis por Gutenberg.' },
                    { id:'dsg_20', texto:'Anatomia do Tipo: Identificar partes como haste, trave, bojo, olho, serifa, altura-x, ascendentes e descendentes.' },
                    { id:'dsg_21', texto:'Classificação: Diferenciar estilos como Antigo, Transicional, Moderno, Egípcio, Decorativo e Caligráfico.' },
                    { id:'dsg_22', texto:'Tipografia Digital: Critérios de alinhamento, legibilidade em telas (uso de fontes <em>sans serif</em>), tamanhos e unidades de medida (pixels vs. em).' },
                ]
            },
            {
                titulo: '7. Imagem e Interação Verbal',
                itens: [
                    { id:'dsg_23', texto:'Formatos de Arquivo: Escolher entre Bitmap e Vetor, e formatos específicos como JPG, GIF, PNG e TIFF conforme a necessidade de compressão ou transparência.' },
                    { id:'dsg_24', texto:'Fotografia vs. Ilustração: Quando usar cada uma para passar credibilidade ou criatividade.' },
                    { id:'dsg_25', texto:'Relação Imagem e Palavra: Estudar as técnicas de ancoragem (texto guia o sentido) e relais (texto e imagem se complementam).' },
                ]
            },
            {
                titulo: '8. Layout e Organização Espacial',
                itens: [
                    { id:'dsg_26', texto:'Dinâmicas de Contraste: Diferenciar o nivelamento (harmonia/eixos) do aguçamento (contraste/tensão) e evitar a ambiguidade.' },
                    { id:'dsg_27', texto:'Técnicas Visuais: Polaridades como Simetria vs. Assimetria, Simplicidade vs. Complexidade e Minimalismo vs. Exagero.' },
                    { id:'dsg_28', texto:'Grids: Uso de grades (especialmente de 12 colunas) para garantir consistência e facilitar o design responsivo.' },
                    { id:'dsg_29', texto:'Lógica Visual: Determinar caminhos de navegação (regra dos três cliques) e criar templates hierárquicos.' },
                ]
            },
        ],
                videos: [
            { label:'Vídeo Geral (todos os conteúdos)', url:'https://drive.google.com/file/d/1zqYcTMjnbkeFfSZPbDXZ-0TSvpKre77O/view?usp=drive_link' },
            { label:'Aula 1', url:'https://drive.google.com/file/d/1N0hkQumdf2MjUmJSfx4AyLK00ienkQk1/view?usp=drive_link' },
            { label:'Aula 2', url:'https://drive.google.com/file/d/1dpnHSyPtOQDJj-ZYpudtVKhT_Oq0yKVP/view?usp=drive_link' },
            { label:'Aula 3', url:'https://drive.google.com/file/d/1r9eoJy2tKvPfrEe5xb7OUQ730yH2joXt/view?usp=drive_link' },
            { label:'Aula 4', url:'https://drive.google.com/file/d/18Pmw9zEKTX7ZXttP_yneyF_N498hvR4C/view?usp=drive_link' },
            { label:'Aula 5', url:'https://drive.google.com/file/d/1SxTUAZmhrsPOT1j-AKJcOPJN0EW-sQHX/view?usp=drive_link' },
            { label:'Aula 6', url:'https://drive.google.com/file/d/1lm9IC6zmMimNR0nkbU0MQBl13K9I0nAB/view?usp=drive_link' },
            { label:'Aula 7', url:'https://drive.google.com/file/d/1-TRhzgSqVBGmRzv6H0HSmBTwwsc9SKW_/view?usp=drive_link' },
            { label:'Aula 8', url:'https://drive.google.com/file/d/1cyFQWAGPdcW8GORd_EBgvni0pDiBLn1Y/view?usp=drive_link' },
            
        ]
    },

    banco: {
        label:    'Banco de Dados',
        labelFull:'Fundamentos de Banco de Dados',
        icone:    'fa-database',
        modulos: [
            {
                titulo: 'Módulo 1: Fundamentos e Contexto Histórico',
                itens: [
                    { id:'bd_01', texto:'Evolução dos Bancos de Dados: Diferenciar as décadas de 60 (surgimento do termo), 70 (modelo relacional de Codd e modelo ER de Peter Chen), 80 (comercialização e SQL), 90 (orientação a objetos) e 2000 (NoSQL para Big Data).' },
                    { id:'bd_02', texto:'Pirâmide do Conhecimento: Distinguir Dado (elemento bruto), Fato (registro do mundo real), Informação (dado lapidado com significado), Conhecimento (informação trabalhada que produz saber) e Metadados (descrição da estrutura armazenada no catálogo).' },
                    { id:'bd_03', texto:'Conceitos de Sistemas: Definir SBD (SGBD + Banco de Dados) e o papel do SGBD como software de propósito geral que facilita definir, construir, manipular e compartilhar dados.' },
                    { id:'bd_04', texto:'Operações CRUD: Identificar as quatro operações básicas e seus comandos: Create (INSERT), Read (SELECT), Update (UPDATE) e Delete (DELETE).' },
                ]
            },
            {
                titulo: 'Módulo 2: Elementos, Arquitetura e Mercado',
                itens: [
                    { id:'bd_05', texto:'Pilares do SGBD: Identificar os componentes fundamentais: Dados, Hardware (armazenamento secundário, CPU, RAM), Software e Usuários.' },
                    { id:'bd_06', texto:'Classes de Usuários: Diferenciar Programadores (escrevem código de acesso), Usuários Finais (acesso interativo via interfaces) e o DBA (administrador responsável por segurança, suporte e performance).' },
                    { id:'bd_07', texto:'Independência de Dados: Compreender a Independência Programa-Dados (catálogo separado do software) e a Independência Programa-Operação (invocar dados sem conhecer a implementação da operação).' },
                    { id:'bd_08', texto:'Arquitetura ANSI/SPARC (Três Esquemas): Níveis Interno (detalhes físicos e bytes), Conceitual (estrutura global e tipos de dados) e Externo (visões específicas para grupos de usuários).' },
                    { id:'bd_09', texto:'SGBDs de Mercado: Conhecer linguagens proprietárias como PL/SQL (Oracle) e T-SQL (SQL Server), além de sistemas <em>open source</em> como MySQL e PostgreSQL.' },
                ]
            },
            {
                titulo: 'Módulo 3: Características e Dinâmica do Banco de Dados',
                itens: [
                    { id:'bd_10', texto:'Estrutura vs. Estado: Diferenciar Esquema/Estrutura (configuração lógica estável) de Estado/Instância (conjunto de dados em um momento específico).' },
                    { id:'bd_11', texto:'Transação: Definir como uma unidade lógica de trabalho que leva o banco de um estado consistente a outro.' },
                    { id:'bd_12', texto:'Propriedades ACID: Atomicidade — operação "tudo ou nada" (indivisível) gerenciada por <em>logs</em> e sistemas de recuperação. Consistência — preservação das regras de integridade e do mini-mundo. Isolamento — garantia de que transações simultâneas não interfiram entre si (controle de concorrência). Durabilidade — persistência das alterações após o sucesso (<em>Commit</em>), resistindo a falhas de sistema.' },
                ]
            },
            {
                titulo: 'Módulo 4: Arquiteturas de Implementação',
                itens: [
                    { id:'bd_13', texto:'Modelos de Camadas: Diferenciar Centralizada (Mainframe), Cliente-Servidor de 2 camadas (processamento dividido) e 3 camadas (introdução do Servidor de Aplicação/Web para regras de negócio).' },
                    { id:'bd_14', texto:'Sistemas Distribuídos: Entender o conceito de Nós e as técnicas de Replicação (cópias em múltiplos nós) e Fragmentação (Horizontal: linhas; Vertical: colunas).' },
                    { id:'bd_15', texto:'Transparência e Nuvem: Garantir a Transparência de Dados (usuário não precisa saber a localização física) e distinguir modelos de nuvem: IaaS (infraestrutura), PaaS (plataforma), SaaS (software) e DBaaS (banco de dados como serviço).' },
                ]
            },
            {
                titulo: 'Módulo 5: Modelagem Conceitual (DER)',
                itens: [
                    { id:'bd_16', texto:'Fases do Projeto: Fluxo do Conceitual (visão global) → Lógico (dependente do modelo, ex: relacional) → Físico (scripts SQL/DDL).' },
                    { id:'bd_17', texto:'Entidades e Atributos: Identificar entidades (Físicas ou Conceituais) e tipos de atributos: Simples, Composto (desmembrável), Multivalorado (múltiplos valores), Derivado (calculado) e Chave (identificador único).' },
                    { id:'bd_18', texto:'Relacionamentos e Cardinalidade: Identificar graus (Binário, Ternário), Autorrelacionamento e razões de cardinalidade (1:1, 1:N, N:M).' },
                    { id:'bd_19', texto:'Restrições Estruturais: Definir números mínimo e máximo de participações e a Restrição de Participação (Total ou Parcial).' },
                ]
            },
            {
                titulo: 'Módulo 6: Modelo Relacional Formal (MER)',
                itens: [
                    { id:'bd_20', texto:'Terminologia Formal: Substituir termos comuns pelos técnicos: Relação (Tabela), Tupla (Linha), Atributo (Coluna) e Domínio (conjunto de valores atômicos).' },
                    { id:'bd_21', texto:'Grau e Chaves: Definir o Grau (número de colunas) e distinguir Super-chave, Chave Candidata (super-chave mínima) e Chave Primária (PK).' },
                    { id:'bd_22', texto:'Integridade: Aplicar a Integridade de Entidade (PK nunca nula) e a Integridade Referencial (Chave Estrangeira - FK deve referenciar uma PK válida).' },
                    { id:'bd_23', texto:'Mapeamento: Converter Conjuntos Entidade (CE) em relações e tratar o mapeamento de relacionamentos (CR) para o modelo lógico.' },
                ]
            },
            {
                titulo: 'Módulo 7: Modelagem Estendida (EER)',
                itens: [
                    { id:'bd_24', texto:'Abstrações: Aplicar Especialização (refinamento conceitual) e Generalização (síntese em nível mais alto).' },
                    { id:'bd_25', texto:'Classificações e Herança: Diferenciar especialização Total de Parcial e compreender a Herança de Propriedades (subclasse herda atributos da superclasse).' },
                    { id:'bd_26', texto:'Agregação: Utilizar a técnica para tratar um relacionamento M:N como um objeto de alto nível associado a outras entidades.' },
                    { id:'bd_27', texto:'Entidade Associativa: Reconhecer a redefinição de um relacionamento que passa a ser tratado como entidade.' },
                ]
            },
            {
                titulo: 'Módulo 8: Introdução ao SQL',
                itens: [
                    { id:'bd_28', texto:'Natureza da Linguagem: A SQL é uma linguagem declarativa, onde se especifica o resultado desejado e não o caminho para obtê-lo.' },
                    { id:'bd_29', texto:'Subconjuntos do SQL: DDL (Definição) — comandos que alteram a estrutura (ex: <code>CREATE</code>, <code>ALTER</code>, <code>DROP</code>). DML (Manipulação) — comandos que gerenciam os dados (ex: <code>INSERT</code>, <code>UPDATE</code>, <code>DELETE</code>). DQL (Consulta) — o comando <code>SELECT</code> para recuperar informações. DCL e DTL — comandos para controle de acesso (<code>GRANT</code>/<code>REVOKE</code>) e gerenciamento de transações (<code>COMMIT</code>/<code>ROLLBACK</code>).' },
                    { id:'bd_30', texto:'Tipos de Dados Práticos: Uso de <code>CHAR</code>, <code>VARCHAR</code>, <code>INT</code>, <code>FLOAT</code>, <code>DATE</code> e <code>BLOB</code> na criação de tabelas.' },
                ]
            },
        ],
        videos: [
            { label:'Vídeo Geral (todos os conteúdos)', url:'https://drive.google.com/file/d/1hxjSEKcfaUF_Tdy6Wp0KB6cimewpax5J/view?usp=drive_link' },
            { label:'Aula 1', url:'https://drive.google.com/file/d/13vsVi-oQymHN7VOAGReD4RmFw-qQhxVh/view?usp=drive_link' },
            { label:'Aula 2', url:'https://drive.google.com/file/d/132h5rAZ7HkBJ4jn03YWE2cISSshgESnn/view?usp=drive_link' },
            { label:'Aula 3', url:'https://drive.google.com/file/d/1NTPCkQR6ndo5kt5Lag85PQ-Vz-p9s2Pn/view?usp=drive_link' },
            { label:'Aula 4', url:'https://drive.google.com/file/d/1nKS9mI8fxnFXEkRbQiaJRvcPN3EkZW8J/view?usp=drive_link' },
            { label:'Aula 5', url:'https://drive.google.com/file/d/13wviNisfvxTL_0LjxlEG5M5Fp2OxH6V6/view?usp=drive_link' },
            { label:'Aula 6', url:'https://drive.google.com/file/d/1X5Ngy3qE_XI-M-93-aMC9k6t3Bj_EzIV/view?usp=drive_link' },
            { label:'Aula 7', url:'https://drive.google.com/file/d/1Px7W0TbOQ-q-cg1Dohc-a4MK-1Z2vTJ5/view?usp=drive_link' },
            { label:'Aula 8', url:'https://drive.google.com/file/d/1sBJEg3ev25ubh0ReI4u0V8204SK0PRbq/view?usp=drive_link' },
        ]
    },

    redes: {
        label:    'Redes',
        labelFull:'Redes de Computadores I',
        icone:    'fa-network-wired',
        modulos: [
            {
                titulo: 'Módulo 1: Fundamentos e Aplicações',
                itens: [
                    { id:'rd_01', texto:'Contexto da Era da Informação: Entender a convergência entre processamento, distribuição e transporte de dados.' },
                    { id:'rd_02', texto:'Definição de Rede: Compreender os pilares de autonomia das máquinas e a capacidade de interconexão para troca de dados.' },
                    { id:'rd_03', texto:'Redes vs. Sistemas Distribuídos: Diferenciar a visibilidade do hardware nas redes da transparência (coerência) via <em>middleware</em> nos sistemas distribuídos.' },
                    { id:'rd_04', texto:'Aplicações Comerciais: Estudar o compartilhamento de recursos para eliminar a "tirania da geografia", o papel das VPNs e tecnologias de colaboração como VoIP e e-commerce.' },
                    { id:'rd_05', texto:'Modelo Cliente-Servidor: Identificar o papel do servidor (provedor de serviço) e do cliente (solicitante).' },
                    { id:'rd_06', texto:'Aplicações Domésticas: Compreender a Lei de Metcalfe (valor da rede vs. número de usuários), entretenimento digital e bibliotecas digitais.' },
                    { id:'rd_07', texto:'Modelo Peer-to-Peer (P2P): Analisar a comunicação direta e descentralizada, como no BitTorrent.' },
                    { id:'rd_08', texto:'Internet das Coisas (IoT): O papel dos sensores e etiquetas RFID na computação ubíqua.' },
                    { id:'rd_09', texto:'Questões Sociais e Éticas: Analisar desafios de privacidade (cookies), segurança (phishing/botnets) e a neutralidade da rede.' },
                ]
            },
            {
                titulo: 'Módulo 2: Classificação e Hardware de Rede',
                itens: [
                    { id:'rd_10', texto:'Tecnologias de Transmissão: Diferenciar redes de Broadcast (canal compartilhado) de redes Ponto a Ponto (enlaces individuais).' },
                    { id:'rd_11', texto:'Endereçamento em Broadcast: Definir Unicasting (1 para 1), Multicasting (1 para grupo) e o conceito de broadcasting (1 para todos).' },
                    { id:'rd_12', texto:'Escala Física das Redes: Memorizar os alcances geográficos e características de: PAN — área pessoal (1m), exemplo Bluetooth com paradigma mestre-escravo. LAN — prédios ou campus (até 1km), focando em Ethernet comutada e WiFi. MAN — abrangência urbana (10km), como redes de TV a cabo e WiMAX. WAN — países ou continentes (100–10.000km), utilizando roteadores e <em>backbones</em>.' },
                    { id:'rd_13', texto:'Redes Sem Fio vs. Móveis: Compreender que uma rede pode ser sem fio mas fixa, ou móvel mas com fios.' },
                    { id:'rd_14', texto:'Redes Interligadas (Internets): O papel do Gateway como a máquina que conecta e traduz redes incompatíveis.' },
                ]
            },
            {
                titulo: 'Módulo 3: Meios de Transmissão e Dispositivos',
                itens: [
                    { id:'rd_15', texto:'Camada Física e Bits: Entender o foco na movimentação física de sinais elétricos ou ópticos para garantir que o bit \'1\' chegue como \'1\'.' },
                    { id:'rd_16', texto:'Meios Guiados: Fio de Cobre — uso em LANs e na "última milha" via DSL. Fibra Óptica — essencial para <em>backbones</em> e FTTH; imune a interferências e com baixo atraso.' },
                    { id:'rd_17', texto:'Meios Não Guiados: Transmissão via rádio (WiFi - 802.11) e satélites (propriedade inerente de broadcast).' },
                    { id:'rd_18', texto:'Dispositivos de Conexão: Modems — conversão de bits digitais em sinais analógicos (DSL, Cabo, Dial-up). Ponto de Acesso (AP) — gerenciamento de comunicação sem fio em LANs. Switch Ethernet — encaminhamento inteligente baseado no endereço de destino em enlaces ponto a ponto. Roteadores — escolha do melhor caminho para dados em redes interconectadas.' },
                ]
            },
            {
                titulo: 'Módulo 4: Arquitetura em Camadas e Modelo OSI',
                itens: [
                    { id:'rd_19', texto:'Conceitos de Camadas: Entender a organização em camadas para reduzir a complexidade, definindo interfaces e entidades pares.' },
                    { id:'rd_20', texto:'Funções das 7 Camadas OSI: 1. Física — transmissão de bits brutos e voltagens. 2. Enlace — enquadramento (<em>framing</em>), controle de erros e controle de fluxo nó a nó. 3. Rede — roteamento, endereçamento lógico e controle de congestionamento. 4. Transporte — comunicação fim a fim, segmentação e multiplexação. 5. Sessão — gerenciamento de diálogos e sincronização (pontos de verificação). 6. Apresentação — sintaxe, semântica, compressão e criptografia. 7. Aplicação — interface com o usuário e protocolos como HTTP, SMTP e FTP.' },
                ]
            },
            {
                titulo: 'Módulo 5: Modelo TCP/IP e Protocolos de Transporte',
                itens: [
                    { id:'rd_21', texto:'Pilha TCP/IP: Estudar as camadas de Aplicação, Transporte, Rede (Internet) e Enlace/Física.' },
                    { id:'rd_22', texto:'Encapsulamento: Compreender como cada camada adiciona cabeçalhos aos dados.' },
                    { id:'rd_23', texto:'TCP (Transmission Control Protocol): Confiável, orientado à conexão, com controle de fluxo e sequenciamento.' },
                    { id:'rd_24', texto:'UDP (User Datagram Protocol): Simples, não confiável e sem conexão; ideal para VoIP e velocidade.' },
                    { id:'rd_25', texto:'Aperto de Mão (Three-way Handshake): O processo de estabelecimento de conexão no TCP.' },
                ]
            },
            {
                titulo: 'Módulo 6: Topologias e Desempenho',
                itens: [
                    { id:'rd_26', texto:'Topologias Físicas: Barramento — cabo central (<em>backbone</em>); ponto único de falha. Estrela — uso de switch central; isolamento de falhas e escalabilidade. Anel — circulação unidirecional com regeneração de sinal. Árvore — estrutura hierárquica multinível. Malha (Mesh) — redundância total e roteamento dinâmico.' },
                    { id:'rd_27', texto:'Métricas de Performance: Vazão (Throughput) — medida em Mbps ou Gbps. Atrasos (Delay) — diferenciar atraso de propagação (no cabo) de atraso de transporte (processamento). Qualidade de Serviço (QoS) — mecanismos para priorizar tráfego crítico e gerenciar o Jitter.' },
                    { id:'rd_28', texto:'Multiplexação Estatística: Alocação dinâmica de canais por demanda.' },
                ]
            },
            {
                titulo: 'Módulo 7: Padronização e Comunicação de Dados',
                itens: [
                    { id:'rd_29', texto:'Órgãos de Padronização: Funções da ISO (modelos teóricos), IEEE (802.3 Ethernet / 802.11 WiFi) e IETF (RFCs da Internet).' },
                    { id:'rd_30', texto:'Cinco Componentes da Comunicação: Mensagem, Emissor, Receptor, Meio de Transmissão e Protocolo.' },
                    { id:'rd_31', texto:'Eficácia do Sistema: Critérios de Entrega, Precisão, Sincronização e Jitter.' },
                    { id:'rd_32', texto:'Sinais Analógicos vs. Digitais: Diferenciar continuidade (infinitos valores) de discretização (0 e 1).' },
                    { id:'rd_33', texto:'Atributos da Onda Seno: Definir Amplitude, Frequência (Hertz) e Fase.' },
                    { id:'rd_34', texto:'Sinais Periódicos vs. Não Periódicos: Padrões repetitivos vs. variações constantes.' },
                ]
            },
        ],
        videos: [
            { label:'Vídeo Geral (todos os conteúdos)', url:'https://drive.google.com/file/d/1-6XLd_z-FM1q38qxa2vWFFo4sjO0VkTw/view?usp=drive_link' },
            { label:'Aulas 1 e 2', url:'https://drive.google.com/file/d/1pwrULVqLCaBfxY1MzJTPNYn2nsGq_m_z/view?usp=drive_link' },
            { label:'Aulas 3 e 4', url:'https://drive.google.com/file/d/1gALBefY4Au-OsoEbmqG69NAsdZe2P5Qc/view?usp=drive_link' },
            { label:'Aula 5',      url:'https://drive.google.com/file/d/1BmIUddd-gsCfQzRds-XM1qDui3qFGICM/view?usp=drive_link' },
            { label:'Aula 6',      url:'https://drive.google.com/file/d/1b1ztYxjGwB3WzVJdXZUh_8EqK42NxmxX/view?usp=drive_link' },
        ]
    },

    poo: {
        label:    'POO',
        labelFull:'Programação Orientada a Objetos',
        icone:    'fa-code',
        modulos: [
            {
                titulo: '1. Fundamentos e Paradigma POO',
                itens: [
                    { id:'poo_01', texto:'Conceito de POO: Unificação de dados (atributos) e funções (métodos) em unidades coesas chamadas objetos.' },
                    { id:'poo_02', texto:'Vantagens arquiteturais: Promoção de acoplamento fraco e coesão forte.' },
                    { id:'poo_03', texto:'Abstração: Processo de isolar características essenciais para um contexto, ignorando detalhes irrelevantes.' },
                    { id:'poo_04', texto:'Convenções de Nomenclatura: Uso de PascalCase para classes e camelCase para membros.' },
                ]
            },
            {
                titulo: '2. Sintaxe e Tipagem',
                itens: [
                    { id:'poo_05', texto:'Tipos Primitivos: Uso de <code>int</code>, <code>long</code> (sufixo L), <code>double</code> (padrão), <code>float</code> (sufixo f), <code>char</code> (Unicode) e <code>boolean</code>.' },
                    { id:'poo_06', texto:'Inferência de Tipo: Uso da palavra-chave <code>var</code> para dedução de tipo pelo compilador (Java 10+).' },
                    { id:'poo_07', texto:'Conversão de Tipos (Casting): Diferença entre promoção implícita (segura) e casting explícito (risco de perda de dados).' },
                    { id:'poo_08', texto:'Operadores Especiais: Divisão inteira, pós/pré-incremento e curto-circuito lógico (<code>&&</code>).' },
                ]
            },
            {
                titulo: '3. Estruturas de Controle e Fluxo',
                itens: [
                    { id:'poo_09', texto:'Decisões: Uso de <code>if/else</code>, "Guard Clauses" para código limpo e o Operador Ternário.' },
                    { id:'poo_10', texto:'Switch Case Moderno: Uso da "Arrow Syntax" (Java 14+) para retorno direto de valores sem <code>break</code>.' },
                    { id:'poo_11', texto:'Repetições: Diferença entre <code>while</code> (teste prévio), <code>do-while</code> (garante uma execução) e loops <code>for</code> (clássico e for-each).' },
                ]
            },
            {
                titulo: '4. Gestão de Memória e Objetos',
                itens: [
                    { id:'poo_12', texto:'Stack vs. Heap: Compreensão da memória de execução rápida (Stack) para variáveis locais e referências, contra a memória global (Heap) para objetos.' },
                    { id:'poo_13', texto:'Referências: Entendimento de que a variável atua como um "controle remoto" para o objeto físico na Heap.' },
                    { id:'poo_14', texto:'Tratamento de Nulos: Identificação de <code>NullPointerException</code> e verificações preventivas.' },
                    { id:'poo_15', texto:'Strings e Imutabilidade: Uso do <em>String Pool</em> para eficiência e comparação correta de conteúdo via <code>.equals()</code> em vez de <code>==</code>.' },
                ]
            },
            {
                titulo: '5. Métodos e Comportamento',
                itens: [
                    { id:'poo_16', texto:'Princípio DRY: Uso de métodos para evitar repetição de lógica.' },
                    { id:'poo_17', texto:'Anatomia do Método: Definição de modificador, tipo de retorno, nome e parâmetros.' },
                    { id:'poo_18', texto:'Passagem de Parâmetros: Entendimento de que em Java a passagem é sempre por valor (cópia do valor para primitivos e cópia da referência para objetos).' },
                    { id:'poo_19', texto:'Sobrecarga (Overloading): Criação de múltiplos métodos com o mesmo nome, mas assinaturas diferentes.' },
                ]
            },
            {
                titulo: '6. Encapsulamento e Modificadores',
                itens: [
                    { id:'poo_20', texto:'Ocultação de Informação: Proteção do estado interno contra modificações externas imprevistas.' },
                    { id:'poo_21', texto:'Modificadores de Acesso: Uso de <code>public</code>, <code>private</code>, <code>protected</code> e o nível padrão (<em>default</em>).' },
                    { id:'poo_22', texto:'Getters e Setters: Implementação do padrão JavaBean para leitura e escrita controlada de atributos.' },
                    { id:'poo_23', texto:'Palavra-chave this: Referência ao objeto atual para desambiguidade e chamadas internas.' },
                ]
            },
            {
                titulo: '7. Membros Estáticos e Construtores',
                itens: [
                    { id:'poo_24', texto:'Construtores: Uso para inicializar objetos e garantir estado válido no nascimento.' },
                    { id:'poo_25', texto:'Membros static: Atributos e métodos que pertencem à classe (molde) e são compartilhados entre todas as instâncias.' },
                    { id:'poo_26', texto:'Constantes: Uso de <code>static final</code> para blindar valores imutáveis.' },
                ]
            },
            {
                titulo: '8. Herança e Polimorfismo',
                itens: [
                    { id:'poo_27', texto:'Herança (extends): Relação "é-um" para reuso de código e especialização de classes.' },
                    { id:'poo_28', texto:'Sobrescrita (@Override): Modificação de comportamento herdado da classe pai.' },
                    { id:'poo_29', texto:'Palavra-chave super: Acesso a construtores e métodos da superclasse.' },
                    { id:'poo_30', texto:'Herança vs. Composição: Preferência pela relação "tem-um" (composição) quando possível.' },
                    { id:'poo_31', texto:'Polimorfismo: Capacidade de tratar objetos de diferentes subclasses através de uma interface comum via <em>Dynamic Method Dispatch</em>.' },
                ]
            },
            {
                titulo: '9. Abstração Avançada',
                itens: [
                    { id:'poo_32', texto:'Classes Abstratas: Modelos incompletos que não podem ser instanciados e servem como base para especialização.' },
                    { id:'poo_33', texto:'Interfaces: Definição de contratos de software com comportamentos obrigatórios, sem possuir estado.' },
                    { id:'poo_34', texto:'Desacoplamento: Uso de interfaces para que o código dependa de contratos e não de implementações específicas.' },
                ]
            },
            {
                titulo: '10. Tratamento de Exceções',
                itens: [
                    { id:'poo_35', texto:'Blocos try, catch e finally: Estrutura para monitorar, capturar e finalizar o tratamento de erros.' },
                    { id:'poo_36', texto:'Tipos de Exceções: Diferença entre exceções checadas (<em>Checked</em>) e não checadas (<em>Unchecked/Runtime</em>).' },
                    { id:'poo_37', texto:'Lançamento de Erros: Uso de <code>throw</code> para disparar exceções e <code>throws</code> na assinatura do método.' },
                    { id:'poo_38', texto:'Exceções Personalizadas: Criação de classes próprias estendendo <code>Exception</code> para erros específicos de negócio.' },
                ]
            },
            {
                titulo: '11. Engenharia e Debugging',
                itens: [
                    { id:'poo_39', texto:'Validação Lógica: Uso de procedimentos de inspeção de fluxo como <em>Breakpoints</em>, <em>Step Over</em> e <em>Step Into</em>.' },
                    { id:'poo_40', texto:'Análise de Pilha (Call Stack): Visualização do encadeamento de métodos para identificar a origem de exceções.' },
                ]
            },
        ],
        videos: [
            { label:'Vídeo Geral (todos os conteúdos)', url:'https://drive.google.com/file/d/1vP3yVEA86ybNSZDMt2AJ61Kquc-UZHkf/view?usp=drive_link' },
            { label:'Aula 1', url:'https://drive.google.com/file/d/1BQ3qiR1Rk-9Sh3ERFkKnKT4gSN4qBfko/view?usp=drive_link' },
            { label:'Aula 2', url:'https://drive.google.com/file/d/1BQ3qiR1Rk-9Sh3ERFkKnKT4gSN4qBfko/view?usp=drive_link' },
            { label:'Aula 3', url:'https://drive.google.com/file/d/1xerybYBcESckEivxS5FEGTbMFpW6lrHX/view?usp=drive_link' },
            { label:'Aula 4', url:'https://drive.google.com/file/d/14uMg0tp1x5ua3cRuIS3YcfGYmAji96Cx/view?usp=drive_link' },
            { label:'Aula 5', url:'https://drive.google.com/file/d/1h8a2ZCaFp0pw5x39BVTEEoeOfJ9d3X68/view?usp=drive_link' },
            { label:'Aula 6', url:'' },
            { label:'Aula 7', url:'' },
            { label:'Aula 8', url:'' },
        ]
    }
};

// ── UTILITÁRIOS ──────────────────────────────────────────────────────────

export function criarSalvador(fn, ms = 800, maxMs = 3000) {
    let timer       = null;
    let ultimoFlush = 0;

    function flush(...args) {
        clearTimeout(timer);
        timer       = null;
        ultimoFlush = Date.now();
        return fn(...args);
    }

    function agendado(...args) {
        clearTimeout(timer);
        const agora     = Date.now();
        const semSalvar = agora - ultimoFlush;

        if (semSalvar >= maxMs) {
            return flush(...args);
        }

        timer = setTimeout(() => flush(...args), ms);
    }

    agendado.flush = flush;
    return agendado;
}

export function totalItensDisciplina(discId) {
    return DISCIPLINAS_DATA[discId].modulos.reduce((acc, m) => acc + m.itens.length, 0);
}

// ── RENDERIZAÇÃO ─────────────────────────────────────────────────────────

export function renderizarPainel(discId, container) {
    const disc  = DISCIPLINAS_DATA[discId];
    const total = totalItensDisciplina(discId);

    container.innerHTML = `
        <div class="panel-header">
            <div class="panel-disc-icon pdi-${discId}">
                <i class="fas ${disc.icone}"></i>
            </div>
            <div class="panel-title-wrap">
                <h2>${disc.labelFull}</h2>
                <p id="panel-sub-${discId}">0 de ${total} itens concluídos</p>
            </div>
            <div class="panel-stats">
                <span class="stat-pill" id="stat-pill-${discId}">0% concluído</span>
            </div>
        </div>

        ${disc.videos.length > 0 ? `
        <div class="panel-videos">
            <p class="section-title"><i class="fas fa-play-circle"></i> Vídeos das Aulas</p>
            <div class="video-grid">
                ${disc.videos.map((v, i) => `
                    <a href="${v.url}" target="_blank" rel="noopener noreferrer"
                       class="vbtn" id="vbtn-${discId}-${i}"
                       data-disc="${discId}" data-idx="${i}">
                        <div class="vplay"><i class="fas fa-play"></i></div>
                        <span>${v.label}</span>
                        <i class="fas fa-external-link-alt vext"></i>
                    </a>
                `).join('')}
            </div>
        </div>
        ` : ''}

        <div class="panel-modules">
            ${disc.modulos.map(mod => `
                <div class="mod-block">
                    <p class="mod-title">
                        ${mod.titulo}
                        <span class="mod-count">${mod.itens.length} itens</span>
                    </p>
                    <div class="checklist">
                        ${mod.itens.map(item => `
                            <label class="ck-item">
                                <input type="checkbox" id="chk-${item.id}" data-disc="${discId}" data-item="${item.id}">
                                <span class="ck-box"><i class="fas fa-check"></i></span>
                                <span class="ck-text">${item.texto}</span>
                            </label>
                        `).join('')}
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// ── ESTADO ───────────────────────────────────────────────────────────────

export function coletarCheckboxes(discId, container) {
    const estado = {};
    DISCIPLINAS_DATA[discId].modulos.forEach(mod => {
        mod.itens.forEach(item => {
            const cb = container.querySelector(`#chk-${item.id}`);
            if (cb) estado[item.id] = cb.checked;
        });
    });
    return estado;
}

export function restaurarCheckboxes(checklistDisc, container) {
    if (!checklistDisc) return;
    Object.entries(checklistDisc).forEach(([itemId, checked]) => {
        const cb = container.querySelector(`#chk-${itemId}`);
        if (cb) cb.checked = checked;
    });
}

export function restaurarVideos(discId, videosAssistidos, container) {
    (videosAssistidos || []).forEach(idx => {
        const btn = container.querySelector(`#vbtn-${discId}-${idx}`);
        if (btn) btn.classList.add('watched');
    });
}

// ── PROGRESSO ────────────────────────────────────────────────────────────

export function atualizarProgressoPainel(discId, container) {
    const total    = totalItensDisciplina(discId);
    const cbs      = container.querySelectorAll('input[type="checkbox"]');
    const marcados = [...cbs].filter(c => c.checked).length;
    const pct      = total > 0 ? Math.round((marcados / total) * 100) : 0;

    const sub  = container.querySelector(`#panel-sub-${discId}`);
    const pill = container.querySelector(`#stat-pill-${discId}`);
    if (sub)  sub.textContent = `${marcados} de ${total} itens concluídos`;
    if (pill) pill.innerHTML  = `${pct}% concluído`;

    return { marcados, total, pct };
}

export function atualizarProgressoTab(discId, marcados, total) {
    const pct     = total > 0 ? Math.round((marcados / total) * 100) : 0;
    const tabProg = document.getElementById(`tabprog-${discId}`);
    const tabFill = document.getElementById(`tabfill-${discId}`);
    if (tabProg) tabProg.textContent = `${marcados} de ${total} `;
    if (tabFill) tabFill.style.width = `${pct}%`;
}

export function atualizarProgressoGeral(checklistCompleto) {
    let totalGlobal = 0, marcadosGlobal = 0;

    Object.entries(DISCIPLINAS_DATA).forEach(([id, disc]) => {
        disc.modulos.forEach(mod => {
            mod.itens.forEach(item => {
                totalGlobal++;
                if (checklistCompleto[id]?.[item.id]) marcadosGlobal++;
            });
        });
    });

    const pct    = totalGlobal > 0 ? Math.round((marcadosGlobal / totalGlobal) * 100) : 0;
    const opFill = document.getElementById('op-fill');
    const opText = document.getElementById('op-text');
    if (opFill) opFill.style.width = `${pct}%`;
    if (opText) opText.textContent = `${pct}%`;
}

export function atualizarTodasAsTabs(checklistCompleto) {
    Object.entries(DISCIPLINAS_DATA).forEach(([discId]) => {
        const estadoDisc = checklistCompleto[discId] || {};
        const total      = totalItensDisciplina(discId);
        const marcados   = Object.values(estadoDisc).filter(Boolean).length;
        atualizarProgressoTab(discId, marcados, total);
    });
    atualizarProgressoGeral(checklistCompleto);
}