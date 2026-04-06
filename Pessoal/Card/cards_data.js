/* ═══════════════════════════════════════════════════
   cards_data.js — Dados dos Flashcards
   Estrutura: 4 disciplinas × 50 cards cada
   Total: 200 cards
   
   ⚠️  Substituir os placeholders pelo conteúdo real
       antes de colocar em produção.
═══════════════════════════════════════════════════ */

export const CARDS_DATA = {

    // ─────────────────────────────────────────────
    //  DESIGN  (d1 → d50)
    // ─────────────────────────────────────────────
    design: [
    {
        id: 'd1',
        categoria: 'Design',
        pergunta: 'Qual a diferença entre IHC, Usabilidade e UX Design?',
        resposta: '<b>IHC</b> (Interação Humano-Computador) estuda a relação como um todo entre usuário e sistema. <b>Usabilidade</b> mede eficácia, eficiência e satisfação no uso (NBR 9241-11). <b>UX</b> vai além, incluindo emoção, prazer, afetividade e encantamento. A usabilidade é o mínimo esperado; o UX busca que o usuário <em>queira</em> continuar usando.'
    },
    {
        id: 'd2',
        categoria: 'Design',
        pergunta: 'O que são os 8 critérios ergonômicos de Scapin e Bastien?',
        resposta: 'São critérios que organizam a interface de forma metódica: <b>(1) Compatibilidade</b>, <b>(2) Condução</b>, <b>(3) Carga de Trabalho</b>, <b>(4) Homogeneidade</b>, <b>(5) Significado dos Códigos</b>, <b>(6) Controle Explícito</b>, <b>(7) Adaptabilidade</b> e <b>(8) Gestão de Erros</b>. Todos são complementares e visam qualidade na interface.'
    },
    {
        id: 'd3',
        categoria: 'Design',
        pergunta: 'O que é o critério ergonômico de "Carga de Trabalho"?',
        resposta: 'Busca reduzir o esforço cognitivo do usuário. Seus subcritérios são: <b>brevidade</b>, <b>concisão</b>, <b>ações mínimas</b> e <b>baixa densidade informacional</b>. O objetivo é evitar excesso de informações na tela, tornando a interação mais fluida e menos cansativa.'
    },
    {
        id: 'd4',
        categoria: 'Design',
        pergunta: 'O que é "Affordance" no contexto do Design de Interface?',
        resposta: 'É a capacidade da interface de "ensinar" ao usuário como usá-la sem a necessidade de um manual. Um botão que parece clicável, um slider que convida ao arrasto — todos exemplificam affordance. É um dos princípios do bom design segundo Sobral.'
    },
    {
        id: 'd5',
        categoria: 'Design',
        pergunta: 'Quais são os 4 princípios do bom design de interface segundo Sobral?',
        resposta: '<b>(a) Visibilidade</b> — funções reconhecíveis facilmente; <b>(b) Consistência</b> — padrão visual mantido; <b>(c) Familiaridade</b> — uso de ícones e padrões conhecidos pelo usuário; <b>(d) Affordance</b> — a interface "ensina" a ser usada sem manual.'
    },
    {
        id: 'd6',
        categoria: 'Design',
        pergunta: 'O que é Engenharia Semiótica e qual sua relação com IHC?',
        resposta: 'É uma disciplina da IHC que vê o sistema como um <b>metacomunicador</b>: o sistema comunica ao usuário as decisões e intenções do designer por meio de signos visuais, estruturas de navegação, feedback e padrões de interação. Se essa comunicação falha, ocorre um problema de comunicabilidade.'
    },
    {
        id: 'd7',
        categoria: 'Design',
        pergunta: 'Quais são os três tipos de signos segundo a semiótica de Peirce?',
        resposta: '<b>(1) Ícone</b> — relação por semelhança (ex: ícone da Torre Eiffel representa Paris); <b>(2) Índice</b> — relação de causa/evidência (ex: fumaça indica fogo); <b>(3) Símbolo</b> — relação por convenção cultural (ex: pomba branca = paz). Os três são amplamente usados em interfaces gráficas.'
    },
    {
        id: 'd8',
        categoria: 'Design',
        pergunta: 'O que é o Método MAC e quais são suas etapas?',
        resposta: 'MAC = <b>Método de Avaliação de Comunicabilidade</b>. Suas etapas são: <b>(1) Preparação do teste</b>, <b>(2) Coleta de dados</b> e <b>(3) Análise dos dados</b>. O objetivo é identificar ruídos na comunicação, dificuldades de interpretação e quebras de entendimento entre usuário e sistema.'
    },
    {
        id: 'd9',
        categoria: 'Design',
        pergunta: 'Quais são os três níveis de mensagem visual?',
        resposta: '<b>(1) Representacional</b> — representa o mundo real da forma mais fiel; <b>(2) Abstrato</b> — simplificação da realidade com ênfase em formas e cores; <b>(3) Simbólico</b> — redução radical da representação (ícones e sinais). Esses níveis podem se interligar e variar conforme o contexto.'
    },
    {
        id: 'd10',
        categoria: 'Design',
        pergunta: 'O que é "Pregnância da Forma" na Gestalt?',
        resposta: 'É a tendência do cérebro a preferir formas <b>simples, estáveis e organizadas</b>. Quanto mais pregnante uma forma, mais rápida e facilmente ela é percebida. Em interfaces, formas pregnantes reduzem o esforço cognitivo e aumentam a eficiência visual.'
    },
    {
        id: 'd11',
        categoria: 'Design',
        pergunta: 'Quais são os 8 pilares da Gestalt aplicados a interfaces?',
        resposta: '<b>(1) Unidades</b>, <b>(2) Unificação</b>, <b>(3) Continuidade</b>, <b>(4) Proximidade</b>, <b>(5) Semelhança</b>, <b>(6) Segregação</b>, <b>(7) Fechamento</b> e <b>(8) Pregnância da Forma</b>. Juntos, explicam como o cérebro organiza estímulos visuais automaticamente para criar percepção de ordem.'
    },
    {
        id: 'd12',
        categoria: 'Design',
        pergunta: 'Como a psicologia cognitiva se aplica ao design de interfaces?',
        resposta: 'O design deve considerar como o usuário <b>percebe, memoriza e toma decisões</b>. Os pontos centrais são: <b>atenção</b> (seletiva, dividida, vigilância) e <b>memória</b> (curta e longa duração). Interfaces boas reduzem carga cognitiva e evitam exigir memorização excessiva.'
    },
    {
        id: 'd13',
        categoria: 'Design',
        pergunta: 'Quais são os 4 tipos de atenção relevantes para o design?',
        resposta: '<b>(1) Seletiva</b> — foco em um estímulo ignorando outros; <b>(2) Vigilância</b> — atenção sustentada por longos períodos; <b>(3) Sondagem</b> — busca ativa por informações; <b>(4) Dividida</b> — realizar mais de uma tarefa ao mesmo tempo. Excesso de informação reduz o foco do usuário.'
    },
    {
        id: 'd14',
        categoria: 'Design',
        pergunta: 'Explique a regra 60-30-10 na escolha de cores.',
        resposta: 'É uma técnica de equilíbrio visual: <b>60%</b> = cor dominante (fundo/base); <b>30%</b> = cor secundária (textos/elementos principais); <b>10%</b> = cor de destaque (detalhes e chamadas à ação). Garante harmonia visual sem poluição nem monotonia.'
    },
    {
        id: 'd15',
        categoria: 'Design',
        pergunta: 'Qual a diferença entre RGB e CMYK?',
        resposta: '<b>RGB</b> (luz) é usado em telas digitais e possui maior variedade de cores. <b>CMYK</b> (pigmento) é usado para impressão e possui menor gama de cores. Regra prática: <em>digital = RGB</em>, <em>impressão = CMYK</em>. Confundir os dois pode gerar cores incorretas no produto final.'
    },
    {
        id: 'd16',
        categoria: 'Design',
        pergunta: 'O que são cores quentes e cores frias e qual seu efeito psicológico?',
        resposta: '<b>Cores quentes</b> (vermelho, amarelo, laranja): comprimento de onda maior, exigem mais energia do cérebro, causam estímulo, agitação e atenção. <b>Cores frias</b> (azul, verde, violeta): comprimento de onda menor, causam calma e relaxamento. A escolha deve considerar o objetivo emocional do projeto.'
    },
    {
        id: 'd17',
        categoria: 'Design',
        pergunta: 'O que é tipografia e por que ela impacta a UX?',
        resposta: 'Tipografia é a arte de escolher e organizar fontes. Ela impacta diretamente a <b>legibilidade</b>, o <b>conforto visual</b> e a <b>compreensão da informação</b>. Uma tipografia bem aplicada facilita a navegação e reduz o esforço de leitura, enquanto uma má escolha pode comprometer toda a experiência do usuário.'
    },
    {
        id: 'd18',
        categoria: 'Design',
        pergunta: 'Qual a diferença entre fontes Serifadas e Sans Serif?',
        resposta: '<b>Serifadas (Serif)</b>: possuem pequenos traços nas extremidades, indicadas para textos longos e transmitem tradição/formalidade. <b>Sans Serif</b>: sem esses traços, indicadas para telas digitais, transmitem modernidade e simplicidade. A regra geral: impressos podem usar serif; telas preferem sans serif.'
    },
    {
        id: 'd19',
        categoria: 'Design',
        pergunta: 'Quais são os tipos de alinhamento tipográfico e suas recomendações?',
        resposta: '<b>Esquerda</b>: mais natural para leitura ocidental (recomendado); <b>Justificado</b>: pode causar espaços irregulares ("caminhos de rato") sem hifenização; <b>Centralizado</b>: ideal para títulos e frases curtas, evitar em textos longos. O alinhamento cria organização e hierarquia visual.'
    },
    {
        id: 'd20',
        categoria: 'Design',
        pergunta: 'O que é o Grid e qual sua função no layout?',
        resposta: 'Grid é uma estrutura de linhas e colunas que <b>organiza elementos</b> e garante consistência visual. Vantagens: organização clara, rapidez no desenvolvimento e padronização. O grid mais comum usa <b>12 colunas</b> (permite diversas divisões). Ele não limita a criatividade — serve como guia estrutural.'
    },
    {
        id: 'd21',
        categoria: 'Design',
        pergunta: 'O que é contraste e harmonia no layout? Como se relacionam?',
        resposta: '<b>Harmonia</b> = organização e equilíbrio visual. <b>Contraste</b> = tensão visual e destaque de elementos. Ambos são necessários e devem ser usados com intenção. Existe ainda a <b>ambiguidade</b>, que é nem harmônica nem contrastante — deve ser evitada por gerar confusão visual.'
    },
    {
        id: 'd22',
        categoria: 'Design',
        pergunta: 'Quais são os três estados de composição visual no layout?',
        resposta: '<b>(1) Nivelamento (harmonia)</b> — elementos nos eixos vertical/horizontal, sensação de estabilidade; <b>(2) Aguçamento (contraste)</b> — elementos fora do eixo, sensação de dinamismo e tensão; <b>(3) Ambiguidade</b> — nem harmônico nem contrastante, gera confusão. Deve ser evitado.'
    },
    {
        id: 'd23',
        categoria: 'Design',
        pergunta: 'O que é Arquitetura da Informação no design de sistemas?',
        resposta: 'É a disciplina que <b>organiza o conteúdo</b> do sistema por meio de: estruturação, hiperligações, legibilidade, disponibilidade, fluidez, categorização e menus bem rotulados. Uma boa arquitetura torna a navegação intuitiva e melhora a experiência geral do usuário no sistema.'
    },
    {
        id: 'd24',
        categoria: 'Design',
        pergunta: 'Qual a diferença entre Interface (IU) e IHC?',
        resposta: '<b>Interface (IU)</b> é a parte visível do sistema — o ambiente visual onde ocorre a interação (botões, menus, ícones, textos). <b>IHC</b> é o estudo de toda a interação entre humano e computador, incluindo aspectos cognitivos, ergonômicos, emocionais e culturais que vão além do que é visto.'
    },
    {
        id: 'd25',
        categoria: 'Design',
        pergunta: 'O que é comunicabilidade em sistemas interativos?',
        resposta: 'É a capacidade de um sistema comunicar ao usuário: <b>como funciona</b>, <b>o que pode ser feito</b> e <b>como deve ser usado</b>. Baseada no Modelo de Jakobson (1960): designer = emissor, interface = mensagem, usuário = receptor. Se a comunicação falha, ocorre problema de comunicabilidade.'
    },
    {
        id: 'd26',
        categoria: 'Design',
        pergunta: 'Quais são as etapas da Inspeção Semiótica?',
        resposta: '<b>(1)</b> Inspeção dos signos metalinguísticos (textos, tutoriais, ajuda); <b>(2)</b> Inspeção dos signos estáticos (ícones, layout, cores); <b>(3)</b> Inspeção dos signos dinâmicos (animações, feedback); <b>(4)</b> Contraste e comparação entre análises; <b>(5)</b> Apreciação da qualidade da metacomunicação.'
    },
    {
        id: 'd27',
        categoria: 'Design',
        pergunta: 'O que é o princípio de "Proximidade" na Gestalt e como se aplica em interfaces?',
        resposta: 'Elementos próximos são percebidos como <b>relacionados</b> pelo cérebro. Em interfaces, isso significa agrupar visualmente botões, rótulos e campos que pertencem a mesma ação ou seção. Menus agrupados, formulários organizados em blocos e cards são exemplos práticos desse princípio.'
    },
    {
        id: 'd28',
        categoria: 'Design',
        pergunta: 'O que é "Fechamento" na Gestalt?',
        resposta: 'É a tendência do cérebro a <b>completar formas incompletas</b>. O olho preenche automaticamente os espaços vazios para perceber uma figura completa. Em interfaces, isso permite usar ícones incompletos que o usuário reconhece facilmente, e logos ou formas abstratas que o cérebro "fecha" para dar sentido.'
    },
    {
        id: 'd29',
        categoria: 'Design',
        pergunta: 'Quais são os 10 elementos básicos da linguagem visual?',
        resposta: '<b>(1) Ponto</b>, <b>(2) Linha</b>, <b>(3) Forma</b>, <b>(4) Direção</b>, <b>(5) Tom</b>, <b>(6) Cor</b>, <b>(7) Textura</b>, <b>(8) Escala</b>, <b>(9) Dimensão</b> e <b>(10) Movimento</b>. Todos juntos estruturam qualquer composição visual e cada um transmite uma metamensagem específica ao observador.'
    },
    {
        id: 'd30',
        categoria: 'Design',
        pergunta: 'O que cada forma básica transmite visualmente segundo o alfabeto visual?',
        resposta: '<b>Quadrado</b>: estabilidade e honestidade. <b>Triângulo</b>: tensão e ação. <b>Círculo</b>: proteção e continuidade. Todas as formas existentes derivam dessas três bases. A escolha consciente das formas reforça a mensagem e a identidade visual do projeto.'
    },
    {
        id: 'd31',
        categoria: 'Design',
        pergunta: 'O que é o critério ergonômico de "Adaptabilidade"?',
        resposta: 'O sistema deve se adaptar ao <b>nível do usuário</b>: <em>ajuda</em> para iniciantes, <em>diálogo</em> para intermediários e <em>atalhos</em> para avançados. Inclui também a possibilidade de personalização. Garante que o sistema seja acessível a todos os perfis, sem prejudicar a eficiência dos mais experientes.'
    },
    {
        id: 'd32',
        categoria: 'Design',
        pergunta: 'O que é o critério ergonômico de "Condução"?',
        resposta: 'A interface deve <b>orientar o usuário</b> em sua interação. Inclui: feedback imediato, agrupamento lógico de itens, legibilidade e apoio ao aprendizado. Um sistema com boa condução reduz erros e a necessidade de ajuda externa, guiando o usuário naturalmente pelo fluxo de uso.'
    },
    {
        id: 'd33',
        categoria: 'Design',
        pergunta: 'O que é o critério ergonômico de "Gestão de Erros"?',
        resposta: 'O sistema deve <b>prevenir erros</b>, <b>informar claramente</b> quando ocorrem e <b>permitir correção</b>. Exemplo: exibir mensagem de confirmação antes de excluir um arquivo. Uma boa gestão de erros protege o usuário de ações irreversíveis e reduz a frustração durante o uso.'
    },
    {
        id: 'd34',
        categoria: 'Design',
        pergunta: 'Qual a diferença entre Generalização e Especialização no design?',
        resposta: 'No contexto do design: <b>Generalização</b> é o processo de criar uma representação mais ampla agrupando elementos específicos. <b>Especialização</b> é o processo inverso, detalhando elementos para contextos específicos. Esses processos também se aplicam à criação de sistemas de design com hierarquias visuais claras.'
    },
    {
        id: 'd35',
        categoria: 'Design',
        pergunta: 'O que são as técnicas de "Ancoragem" e "Relais" na relação imagem-texto?',
        resposta: '<b>Ancoragem</b>: o texto direciona e limita a interpretação da imagem, guiando o olhar do usuário para o significado desejado. <b>Relais</b>: texto e imagem se complementam mutuamente, cada um acrescentando algo que o outro não tem. Uma relação incoerente entre ambos prejudica a comunicação.'
    },
    {
        id: 'd36',
        categoria: 'Design',
        pergunta: 'Quais são os formatos de imagem mais usados e suas indicações?',
        resposta: '<b>BMP</b>: sem perda, arquivos grandes; <b>GIF</b>: compacto, máx. 256 cores, bom para gráficos simples; <b>PNG</b>: alta qualidade, suporta transparência; <b>JPEG</b>: boa compressão, perde qualidade, ideal para fotos; <b>TIFF</b>: altíssima qualidade, muito pesado, indicado para impressão profissional.'
    },
    {
        id: 'd37',
        categoria: 'Design',
        pergunta: 'O que é a Regra dos 3 Cliques no layout de interfaces?',
        resposta: 'É um princípio de <b>navegação</b> que diz que o usuário deve conseguir acessar qualquer informação em no máximo 3 cliques a partir da página inicial. Seu objetivo é garantir acesso rápido e reduzir o esforço de navegação, evitando estruturas de menu muito profundas ou confusas.'
    },
    {
        id: 'd38',
        categoria: 'Design',
        pergunta: 'O que é Fenomenologia e como se relaciona com o design?',
        resposta: 'É o estudo da <b>experiência humana</b>, relacionando-se com estética, ética e lógica. No design, ajuda a entender como o usuário <b>percebe e interpreta</b> a interface — não apenas o que é visto, mas a experiência subjetiva gerada. Influencia decisões sobre cores, formas, sons e ritmo visual.'
    },
    {
        id: 'd39',
        categoria: 'Design',
        pergunta: 'Qual a evolução da Web e seu impacto na comunicação?',
        resposta: '<b>Web 1.0</b>: sites estáticos, usuário passivo; <b>Web 2.0</b>: redes sociais, usuário criando conteúdo; <b>Web 3.0</b>: web semântica, dados organizados inteligentemente; <b>Web 4.0</b>: mobilidade, ubiquidade e inteligência artificial. Cada fase exigiu novas abordagens de design e comunicabilidade.'
    },
    {
        id: 'd40',
        categoria: 'Design',
        pergunta: 'O que é tamanho de fonte ideal e como varia por faixa etária?',
        resposta: 'Padrão desktop: <b>16px</b>. Mobile: pode começar em <b>12px</b>. Por faixa etária: <em>menor de 7 anos = 24</em>, <em>7-8 anos = 18</em>, <em>8-9 anos = 14</em>, <em>10-11 anos = 12</em>, <em>adultos = 10</em>. A unidade <b>EM</b> é recomendada para responsividade por ser flexível e adaptável a qualquer tela.'
    },
    {
        id: 'd41',
        categoria: 'Design',
        pergunta: 'O que é "Controle Explícito" no critério ergonômico de Scapin e Bastien?',
        resposta: 'Garante que o <b>usuário tenha controle</b> sobre o sistema: ele pode interromper, suspender e confirmar ações antes que sejam executadas. Ex: um botão de cancelar durante um processo, ou uma caixa de diálogo de confirmação antes de uma ação crítica. Evita que o sistema "tome decisões" pelo usuário.'
    },
    {
        id: 'd42',
        categoria: 'Design',
        pergunta: 'O que é o princípio de "Semelhança" na Gestalt?',
        resposta: 'Elementos com características visuais semelhantes (cor, forma, tamanho, textura) são <b>agrupados mentalmente</b> pelo cérebro. Em interfaces, isso significa que botões de mesma função devem ter o mesmo estilo, e seções diferentes devem ter aparência distinta. Reforça a hierarquia e a lógica visual do sistema.'
    },
    {
        id: 'd43',
        categoria: 'Design',
        pergunta: 'O que é "Continuidade" na Gestalt e como se aplica ao design?',
        resposta: 'O olhar humano tende a <b>seguir linhas e direções naturalmente</b>, completando trajetórias visuais. Em interfaces, isso é usado para criar fluxo de leitura, direcionar o olhar para elementos importantes e organizar a navegação. Setas, linhas e alinhamentos são ferramentas comuns desse princípio.'
    },
    {
        id: 'd44',
        categoria: 'Design',
        pergunta: 'O que é peso tipográfico (font weight) e quais suas variações?',
        resposta: 'É a espessura dos traços da fonte. Principais variações: <b>Light</b> (fino), <b>Regular</b> (normal), <b>Bold</b> (negrito), <b>Black</b> (muito pesado), <b>Condensed</b> (estreito), <b>Extended</b> (largo) e <b>Outline</b> (contorno). O peso cria hierarquia visual e direciona a atenção do leitor para as informações mais importantes.'
    },
    {
        id: 'd45',
        categoria: 'Design',
        pergunta: 'Como a fotografia e a ilustração se diferenciam em comunicação visual?',
        resposta: '<b>Fotografia</b>: alto realismo, alta objetividade, mensagem direta e alta credibilidade. Ideal para informações rápidas e contextos que exigem realismo. <b>Ilustração</b>: criativa e interpretativa, estimula a imaginação, baixo realismo. Ideal para criatividade, conceitos abstratos e comunicação mais subjetiva.'
    },
    {
        id: 'd46',
        categoria: 'Design',
        pergunta: 'O que é "Significado dos Códigos" nos critérios ergonômicos?',
        resposta: 'Os símbolos e ícones da interface devem <b>representar corretamente sua função</b>. Exemplo clássico: um ícone de lixeira para excluir. Quando o código visual não corresponde à sua função real, o usuário se confunde e a comunicabilidade do sistema é comprometida. Baseia-se na semiótica aplicada ao design.'
    },
    {
        id: 'd47',
        categoria: 'Design',
        pergunta: 'O que é "Homogeneidade" no critério ergonômico de Scapin e Bastien?',
        resposta: 'Exige a <b>manutenção de padrões</b> em contextos semelhantes: consistência de códigos, nomes, formatos e procedimentos. Exemplo: se um botão de confirmar é sempre verde em uma tela, deve ser verde em todas. Reduz o tempo de aprendizado do usuário e aumenta a previsibilidade do sistema.'
    },
    {
        id: 'd48',
        categoria: 'Design',
        pergunta: 'O que é "Compatibilidade" no critério ergonômico?',
        resposta: 'A interface deve estar adequada às <b>características do usuário</b>: memória, idade, habilidades, expectativas e contexto cultural. Sistemas projetados sem considerar o perfil do usuário geram esforço desnecessário e erros frequentes. É o primeiro critério e afeta todos os outros.'
    },
    {
        id: 'd49',
        categoria: 'Design',
        pergunta: 'Quais são as técnicas visuais que funcionam em pares opostos no layout?',
        resposta: '<b>(1) Equilíbrio x Instabilidade</b>; <b>(2) Simetria x Assimetria</b>; <b>(3) Regularidade x Irregularidade</b>; <b>(4) Simplicidade x Complexidade</b>; <b>(5) Unidade x Fragmentação</b>; <b>(6) Economia x Profusão</b>; <b>(7) Minimização x Exagero</b>. Cada par oferece efeitos visuais distintos e deve ser escolhido conforme o objetivo do design.'
    },
    {
        id: 'd50',
        categoria: 'Design',
        pergunta: 'O que é design centrado no usuário e quais são suas características?',
        resposta: 'É uma abordagem que coloca o usuário no centro do processo de design. Suas características: vai além da implementação técnica, busca usabilidade eficiente, proporciona experiência imersiva, é intuitivo, considera diferentes níveis de usuário e avalia constantemente erros e melhorias. O designer deve dominar IHC, UX, Ergonomia e Arquitetura da Informação.'
    },
],

    // ─────────────────────────────────────────────
    //  BANCO DE DADOS  (b1 → b50)
    // ─────────────────────────────────────────────
    banco: [
            { id: 'b1',  categoria: 'Banco de Dados', pergunta: 'O que é um Banco de Dados?',                                                                                   resposta: 'É uma coleção de dados relacionados que representam um aspecto do mundo real, são logicamente coerentes e possuem um propósito específico.' },
            { id: 'b2',  categoria: 'Banco de Dados', pergunta: 'O que é um SGBD?',                                                                                             resposta: 'É um software responsável por definir, construir, manipular e compartilhar um banco de dados entre múltiplos usuários e aplicações.' },
            { id: 'b3',  categoria: 'Banco de Dados', pergunta: 'Quais são as 5 funções principais de um SGBD?',                                                                resposta: 'Definição de dados, armazenamento físico, manipulação, controle de acesso e controle de concorrência.' },
            { id: 'b4',  categoria: 'Banco de Dados', pergunta: 'Qual a diferença entre Dado e Informação?',                                                                    resposta: 'Dado é o elemento bruto sem significado isolado. Informação são dados processados e organizados com significado que apoiam decisões.' },
            { id: 'b5',  categoria: 'Banco de Dados', pergunta: 'O que são Metadados?',                                                                                         resposta: 'São dados sobre dados — descrevem estrutura, tipo, restrições e formato, ficando armazenados no catálogo do SGBD.' },
            { id: 'b6',  categoria: 'Banco de Dados', pergunta: 'Quais são os três níveis de abstração de um banco de dados?',                                                  resposta: 'Nível Físico (como os dados são armazenados), Nível Lógico (quais dados existem e seus relacionamentos) e Nível de Visão (o que cada usuário enxerga).' },
            { id: 'b7',  categoria: 'Banco de Dados', pergunta: 'O que é uma Chave Primária (PK)?',                                                                             resposta: 'É o identificador único de uma tabela: não pode se repetir e não pode ser nulo.' },
            { id: 'b8',  categoria: 'Banco de Dados', pergunta: 'O que é uma Chave Estrangeira (FK)?',                                                                          resposta: 'É um campo que relaciona tabelas diferentes, podendo repetir, e que referencia a Chave Primária de outra tabela.' },
            { id: 'b9',  categoria: 'Banco de Dados', pergunta: 'O que significa CRUD?',                                                                                        resposta: 'Create (INSERT), Read (SELECT), Update (UPDATE) e Delete (DELETE) — as quatro operações básicas de manipulação de dados.' },
            { id: 'b10', categoria: 'Banco de Dados', pergunta: 'O que é uma Transação em banco de dados?',                                                                     resposta: 'É uma unidade lógica de trabalho composta por um conjunto de operações que deve manter a integridade do banco, sem sofrer interferência externa.' },
            { id: 'b11', categoria: 'Banco de Dados', pergunta: 'O que é o comando COMMIT?',                                                                                    resposta: 'Confirma e torna permanentes as alterações realizadas durante uma transação.' },
            { id: 'b12', categoria: 'Banco de Dados', pergunta: 'O que é o comando ROLLBACK?',                                                                                  resposta: 'Desfaz todas as operações realizadas desde o início da transação, revertendo o banco ao estado anterior.' },
            { id: 'b13', categoria: 'Banco de Dados', pergunta: 'Quais são as propriedades ACID?',                                                                              resposta: 'Atomicidade, Consistência, Isolamento e Durabilidade — garantem integridade, confiabilidade e correção em transações.' },
            { id: 'b14', categoria: 'Banco de Dados', pergunta: 'O que é a propriedade de Atomicidade?',                                                                        resposta: 'Garante o princípio do "tudo ou nada": se uma transação falhar, todas as alterações são desfeitas; se concluir, todas são confirmadas.' },
            { id: 'b15', categoria: 'Banco de Dados', pergunta: 'O que é a propriedade de Consistência em ACID?',                                                               resposta: 'Garante que uma transação mantém as regras do banco, preserva restrições e não viola a integridade: se o banco começa consistente, deve terminar consistente.' },
            { id: 'b16', categoria: 'Banco de Dados', pergunta: 'O que é a propriedade de Isolamento em ACID?',                                                                 resposta: 'Garante que transações simultâneas não interfiram entre si, como se fossem executadas em ordem serial, usando controle de concorrência e bloqueios.' },
            { id: 'b17', categoria: 'Banco de Dados', pergunta: 'O que é a propriedade de Durabilidade em ACID?',                                                               resposta: 'Garante que após o COMMIT as alterações persistem mesmo com falhas, assegurada por escrita em disco, logs e backup.' },
            { id: 'b18', categoria: 'Banco de Dados', pergunta: 'Qual a diferença entre Esquema e Estado de um banco de dados?',                                                resposta: 'Esquema é a estrutura fixa (tabelas, campos, tipos), definida na fase de projeto. Estado é o conteúdo variável armazenado em um determinado momento.' },
            { id: 'b19', categoria: 'Banco de Dados', pergunta: 'Quais são os quatro componentes básicos de um SGBD?',                                                          resposta: 'Dados, Hardware, Software (SGBD) e Usuários.' },
            { id: 'b20', categoria: 'Banco de Dados', pergunta: 'Quais são as três classes de usuários de um SGBD?',                                                            resposta: 'Desenvolvedores (criam aplicações), Usuários Finais (acessam via interface) e DBA (administrador que garante segurança, desempenho e integridade).' },
            { id: 'b21', categoria: 'Banco de Dados', pergunta: 'O que é a Arquitetura de Três Esquemas (ANSI/SPARC)?',                                                         resposta: 'Divide o sistema em três níveis — Interno (físico), Conceitual (lógico global) e Externo (visão do usuário) — para separar aplicações do armazenamento físico.' },
            { id: 'b22', categoria: 'Banco de Dados', pergunta: 'Quais são as diferenças entre arquitetura centralizada e cliente-servidor?',                                   resposta: 'Na centralizada, todo o processamento ocorre em uma única máquina. Na cliente-servidor, há divisão entre cliente (interface) e servidor (SGBD e processamento).' },
            { id: 'b23', categoria: 'Banco de Dados', pergunta: 'O que é a arquitetura de Três Camadas em banco de dados?',                                                     resposta: 'Divide o sistema em Camada Cliente (interface), Camada de Aplicação (regras de negócio) e Camada de Dados (SGBD), sendo ideal para aplicações Web.' },
            { id: 'b24', categoria: 'Banco de Dados', pergunta: 'O que é Fragmentação em banco de dados distribuído?',                                                          resposta: 'É a divisão dos dados entre nós: Horizontal (por linhas/tuplas) ou Vertical (por colunas/atributos), podendo ser combinada com replicação.' },
            { id: 'b25', categoria: 'Banco de Dados', pergunta: 'O que é DBaaS?',                                                                                               resposta: 'Database as a Service — modelo de banco de dados em nuvem onde o cliente paga por uso e o provedor gerencia toda a infraestrutura.' },
            { id: 'b26', categoria: 'Banco de Dados', pergunta: 'Quem criou o Modelo Relacional e quando?',                                                                     resposta: 'Edgar Frank Codd, na década de 1970, com o artigo "A Relational Model of Data for Large Shared Data Banks".' },
            { id: 'b27', categoria: 'Banco de Dados', pergunta: 'O que é o Modelo ER e quem o criou?',                                                                          resposta: 'O Modelo Entidade-Relacionamento, criado por Peter Chen nos anos 70, permite modelar dados de forma conceitual, focando em entidades e relacionamentos antes da implementação física.' },
            { id: 'b28', categoria: 'Banco de Dados', pergunta: 'Quais são os três elementos fundamentais do MER?',                                                             resposta: 'Entidades, Atributos e Relacionamentos.' },
            { id: 'b29', categoria: 'Banco de Dados', pergunta: 'Como as Entidades são representadas no DER (notação de Peter Chen)?',                                          resposta: 'Por Retângulos. Entidades Fracas (que dependem de outra para existir) são representadas por Retângulos Duplos.' },
            { id: 'b30', categoria: 'Banco de Dados', pergunta: 'Quais são os tipos de Atributos no MER?',                                                                      resposta: 'Simples, Composto, Multivalorado, Derivado e Atributo-Chave (identificador único, representado com sublinhado).' },
            { id: 'b31', categoria: 'Banco de Dados', pergunta: 'Como os Relacionamentos são representados no DER e o que é Cardinalidade?',                                    resposta: 'Por Losangos. Cardinalidade define quantas ocorrências de uma entidade se relacionam com outra: 1:1, 1:N ou N:N.' },
            { id: 'b32', categoria: 'Banco de Dados', pergunta: 'Quais são os três modelos de representação de dados na modelagem?',                                            resposta: 'Modelo Conceitual (abstrato, independente de SGBD), Modelo Lógico (estrutura de registros e tipos de dados) e Modelo Físico (implementação com tabelas, índices e DDL).' },
            { id: 'b33', categoria: 'Banco de Dados', pergunta: 'O que é o MER Estendido (EER)?',                                                                               resposta: 'Uma extensão do MER que adiciona recursos como Herança, Superclasses e Subclasses, Agregação e Generalização/Especialização para modelar sistemas mais complexos.' },
            { id: 'b34', categoria: 'Banco de Dados', pergunta: 'O que é Generalização e Especialização no EER?',                                                               resposta: 'Especialização cria subclasses a partir de uma superclasse (ex: Funcionário → Professor, Técnico). Generalização é o processo inverso: unir entidades específicas em uma mais geral.' },
            { id: 'b35', categoria: 'Banco de Dados', pergunta: 'O que é Agregação no EER?',                                                                                    resposta: 'Técnica que permite tratar um relacionamento como uma entidade independente, usada quando um relacionamento possui atributos próprios ou precisa se relacionar com outros elementos.' },
            { id: 'b36', categoria: 'Banco de Dados', pergunta: 'O que é SQL e qual sua origem?',                                                                               resposta: 'Structured Query Language — linguagem padrão para bancos de dados relacionais, criada na IBM nos anos 70 no Projeto System R. É declarativa: você informa o que quer, não como fazer.' },
            { id: 'b37', categoria: 'Banco de Dados', pergunta: 'Quais são os cinco subconjuntos da linguagem SQL?',                                                            resposta: 'DDL (definição de estrutura), DML (manipulação de dados), DQL (consulta), DCL (controle de acesso) e DTL (controle de transações).' },
            { id: 'b38', categoria: 'Banco de Dados', pergunta: 'Qual a diferença entre DDL e DML?',                                                                            resposta: 'DDL cria e altera a estrutura do banco (CREATE, ALTER, DROP) com confirmação automática. DML manipula dados (INSERT, UPDATE, DELETE) com confirmação manual.' },
            { id: 'b39', categoria: 'Banco de Dados', pergunta: 'Quais são os comandos da DDL?',                                                                                resposta: 'CREATE (criar), ALTER (alterar) e DROP (excluir) — usados para definir a estrutura do banco de dados.' },
            { id: 'b40', categoria: 'Banco de Dados', pergunta: 'Quais são os comandos da DCL e DTL?',                                                                          resposta: 'DCL: GRANT (conceder permissões) e REVOKE (revogar permissões). DTL: COMMIT (confirmar transação) e ROLLBACK (desfazer transação).' },
            { id: 'b41', categoria: 'Banco de Dados', pergunta: 'O que é Domínio de um atributo no Modelo Relacional?',                                                         resposta: 'É o conjunto de valores possíveis para um atributo, definindo tipo de dado, formato e regras. Ex: Idade → 15 a 80; CPF → formato ddd.ddd.ddd-dd.' },
            { id: 'b42', categoria: 'Banco de Dados', pergunta: 'O que é Grau de uma Relação?',                                                                                 resposta: 'É o número de atributos (colunas) de uma tabela. Ex: uma tabela com 6 colunas tem grau 6.' },
            { id: 'b43', categoria: 'Banco de Dados', pergunta: 'O que é uma Chave Candidata e uma Superchave?',                                                                resposta: 'Chave Candidata é o conjunto mínimo de atributos que identifica unicamente uma tupla. Superchave é um conjunto maior que também identifica, mas contém atributos desnecessários.' },
            { id: 'b44', categoria: 'Banco de Dados', pergunta: 'O que é Integridade Referencial?',                                                                             resposta: 'Restrição que garante consistência entre tabelas: a Chave Estrangeira deve existir na tabela referenciada. Ex: não se pode matricular um aluno inexistente.' },
            { id: 'b45', categoria: 'Banco de Dados', pergunta: 'Como se converte uma Entidade do MER para o Modelo Relacional?',                                               resposta: 'Cada entidade vira uma tabela, seus atributos viram colunas e a chave primária é mantida. Ex: Entidade Aluno → Tabela Aluno.' },
            { id: 'b46', categoria: 'Banco de Dados', pergunta: 'Quais são as vantagens e desvantagens de bancos de dados em Nuvem?',                                           resposta: 'Vantagens: redução de custos, escalabilidade sob demanda e alta disponibilidade. Desvantagens: dependência do provedor, riscos jurídicos, privacidade internacional e menor controle físico.' },
            { id: 'b47', categoria: 'Banco de Dados', pergunta: 'Cite quatro SGBDs comerciais e suas características principais.',                                               resposta: 'Oracle (PL/SQL, alta escalabilidade), SQL Server (T-SQL, alta segurança, integração Microsoft), MySQL (open source, popular em aplicações web) e PostgreSQL (open source BSD, forte em consultas complexas).' },
            { id: 'b48', categoria: 'Banco de Dados', pergunta: 'Qual a diferença entre o movimento NoSQL e os bancos relacionais?',                                             resposta: 'Bancos NoSQL oferecem alta escalabilidade, flexibilidade de estrutura e são usados em Big Data. Os relacionais usam tabelas rígidas com SQL; NoSQL pode ser orientado a documentos, grafos, chave-valor ou colunas.' },
            { id: 'b49', categoria: 'Banco de Dados', pergunta: 'O que significa a Natureza Autodescritiva de um SGBD?',                                                        resposta: 'O SGBD armazena tanto os dados quanto os metadados (estrutura das tabelas, tipos de dados e restrições) em seu próprio catálogo interno.' },
            { id: 'b50', categoria: 'Banco de Dados', pergunta: 'O que é Independência Programa-Dados em um SGBD?',                                                             resposta: 'A estrutura dos dados fica separada das aplicações, permitindo alterar o banco sem reescrever os programas. Os usuários interagem com representações conceituais sem conhecer detalhes físicos.' },
        ],

    // ─────────────────────────────────────────────
    //  REDES  (r1 → r50)
    // ─────────────────────────────────────────────
redes: [
        // ── RESUMO POR AULA (25 questões) ────────────────────────────────

        // Aula 01/02 — Introdução a Redes de Computadores (4 questões)
        { id: 'r1',  categoria: 'Redes', pergunta: 'O que é uma Rede de Computadores?', resposta: 'É um conjunto de computadores autônomos interconectados por uma tecnologia, capazes de trocar informações entre si.' },
        { id: 'r2',  categoria: 'Redes', pergunta: 'Qual a diferença entre Redes de Computadores e Sistemas Distribuídos?', resposta: 'Em Redes, o usuário vê várias máquinas distintas (baixa transparência). Em Sistemas Distribuídos, o usuário vê um único sistema unificado (alta transparência), graças ao middleware.' },
        { id: 'r3',  categoria: 'Redes', pergunta: 'O que é a Lei de Metcalfe?', resposta: 'O valor de uma rede cresce proporcionalmente ao quadrado do número de usuários conectados a ela.' },
        { id: 'r4',  categoria: 'Redes', pergunta: 'Quais são as classificações de rede por escala (do menor para o maior)?', resposta: 'PAN (Personal Area Network) → LAN (Local Area Network) → MAN (Metropolitan Area Network) → WAN (Wide Area Network).' },

        // Aula 03/04 — Meios de Transmissão e Dispositivos de Rede (5 questões)
        { id: 'r5',  categoria: 'Redes', pergunta: 'Qual a função da Camada Física em uma rede?', resposta: 'Transmitir bits puros (0 e 1) através de um meio de comunicação, garantindo que um bit enviado seja recebido corretamente.' },
        { id: 'r6',  categoria: 'Redes', pergunta: 'Quais são as vantagens da Fibra Óptica em relação ao cabo de cobre?', resposta: 'A fibra óptica é imune a interferência eletromagnética, possui baixíssimo atraso e altíssima largura de banda (Mbps → Gbps).' },
        { id: 'r7',  categoria: 'Redes', pergunta: 'Qual a diferença entre um Switch e um Roteador?', resposta: 'O Switch (Camada 2) encaminha pacotes dentro de uma mesma rede usando endereços MAC. O Roteador (Camada 3) conecta redes diferentes, escolhendo o melhor caminho usando tabelas de roteamento.' },
        { id: 'r8',  categoria: 'Redes', pergunta: 'O que é comunicação Half-Duplex? Dê um exemplo.', resposta: 'Comunicação bidirecional, mas não simultânea — apenas um lado transmite por vez. Exemplo: walkie-talkie e redes Wi-Fi (802.11).' },
        { id: 'r9',  categoria: 'Redes', pergunta: 'Qual a função de um Gateway?', resposta: 'Conectar redes incompatíveis, realizando tradução de protocolos e conversão de hardware/software entre elas.' },

        // Aula 05 — Topologias de Rede, Métricas e Padronização (5 questões)
        { id: 'r10', categoria: 'Redes', pergunta: 'Qual é o principal problema da Topologia em Barramento?', resposta: 'Ponto único de falha: se o cabo central (backbone) quebrar, toda a rede para de funcionar.' },
        { id: 'r11', categoria: 'Redes', pergunta: 'Por que a Topologia em Estrela é a mais usada nas LANs atuais?', resposta: 'Porque oferece isolamento de falhas (um cabo quebrado afeta só um dispositivo), fácil expansão e melhor gerenciamento.' },
        { id: 'r12', categoria: 'Redes', pergunta: 'O que é Throughput (Vazão)?', resposta: 'É a quantidade real de dados transmitidos com sucesso por unidade de tempo, medida em Mbps ou Gbps.' },
        { id: 'r13', categoria: 'Redes', pergunta: 'O que é QoS (Quality of Service)?', resposta: 'São mecanismos que priorizam determinados tipos de tráfego. Voz e vídeo precisam de baixa latência; downloads precisam de alta vazão.' },
        { id: 'r14', categoria: 'Redes', pergunta: 'Quais as principais organizações de padronização de redes e o que cada uma define?', resposta: 'ISO — criou o modelo OSI (foco teórico). IEEE — define padrões de hardware: 802.3 (Ethernet) e 802.11 (Wi-Fi). IETF — define padrões da Internet via RFCs (ex: TCP, IP).' },

        // Aula 06 — Representação de Dados e Fluxo de Transmissão (4 questões)
        { id: 'r15', categoria: 'Redes', pergunta: 'Como o texto é representado digitalmente? Quais os principais padrões?', resposta: 'O texto é convertido em padrões binários. Os principais padrões são: ASCII (7 bits, 128 símbolos) e Unicode (até 32 bits, suporta praticamente todos os idiomas).' },
        { id: 'r16', categoria: 'Redes', pergunta: 'O que é atenuação de sinal e como é resolvida?', resposta: 'É a perda gradual de energia do sinal ao longo do meio de transmissão. É resolvida com o uso de amplificadores de sinal.' },
        { id: 'r17', categoria: 'Redes', pergunta: 'O que é SNR (Relação Sinal-Ruído) e como interpretá-la?', resposta: 'SNR define a qualidade da comunicação. SNR alta = boa qualidade (sinal limpo). SNR baixa = má qualidade (sinal distorcido por ruído).' },
        { id: 'r18', categoria: 'Redes', pergunta: 'Quais são os três tipos de fluxo de dados em redes?', resposta: 'Simplex (uma direção apenas), Half-Duplex (duas direções, mas alternadas) e Full-Duplex (duas direções simultâneas).' },

        // Resumo Geral / Transversal (7 questões)
        { id: 'r19', categoria: 'Redes', pergunta: 'O que é RFID e qual sua função?', resposta: 'Radio Frequency Identification: tecnologia sem fio que usa ondas de rádio para identificar, rastrear e gerenciar objetos ou pessoas. Substitui os códigos de barras.' },
        { id: 'r20', categoria: 'Redes', pergunta: 'O que é VPN e qual sua vantagem?', resposta: 'Virtual Private Network: conecta redes separadas como se fossem uma só, usando a internet como meio. Vantagem: menor custo e maior flexibilidade em relação a linhas dedicadas.' },
        { id: 'r21', categoria: 'Redes', pergunta: 'O que é a Topologia em Malha (Mesh) e onde é usada?', resposta: 'Dispositivos possuem múltiplas conexões redundantes, permitindo que dados sigam vários caminhos. É a base da Internet e de redes críticas. Alta confiabilidade, porém alto custo.' },
        { id: 'r22', categoria: 'Redes', pergunta: 'Qual a diferença entre rede "sem fio" e rede "móvel"?', resposta: 'Sem fio significa que não usa cabos físicos. Móvel significa que o dispositivo pode se mover durante a comunicação. Um notebook em casa pode ser móvel mas não sem fio.' },
        { id: 'r23', categoria: 'Redes', pergunta: 'O que é Convergência Tecnológica no contexto de redes?', resposta: 'É a integração entre computação e comunicação, onde sistemas antes separados (dados, voz, vídeo) passaram a funcionar juntos sobre a mesma infraestrutura de rede.' },
        { id: 'r24', categoria: 'Redes', pergunta: 'O que é Jitter?', resposta: 'É a variação no tempo de atraso (latência) na chegada de pacotes de dados em uma rede, medido em milissegundos. Afeta diretamente a qualidade de chamadas e videoconferências.' },
        { id: 'r25', categoria: 'Redes', pergunta: 'O que é uma internet (com "i" minúsculo) e o que a diferencia da Internet?', resposta: 'Uma internet (minúsculo) é qualquer conjunto de redes diferentes interligadas por gateways. A Internet (maiúsculo) é a maior e mais conhecida implementação mundial desse conceito.' },

        // ── RESUMO DO PROFESSOR (25 questões) ────────────────────────────

        // Modelos e Protocolos
        { id: 'r26', categoria: 'Redes', pergunta: 'Quais são os 3 pilares fundamentais de um protocolo de rede?', resposta: 'Sintaxe (formato dos dados), Semântica (significado dos campos) e Temporização (ordem e controle de envio).' },
        { id: 'r27', categoria: 'Redes', pergunta: 'Dois dispositivos podem estar conectados fisicamente e não se comunicar. Por quê?', resposta: 'Porque para se comunicar não basta conexão física — os dispositivos precisam compartilhar o mesmo protocolo de comunicação.' },
        { id: 'r28', categoria: 'Redes', pergunta: 'O que é encapsulamento em redes e qual sua importância?', resposta: 'É o processo onde cada camada adiciona um cabeçalho (header) e às vezes um trailer aos dados. Permite que camadas se comuniquem de forma independente, garantindo modularidade e controle.' },
        { id: 'r29', categoria: 'Redes', pergunta: 'Durante o encapsulamento, o que muda a cada salto (hop) na rede — o IP ou o MAC?', resposta: 'O endereço MAC muda a cada salto (hop). O endereço IP permanece o mesmo do início ao fim da comunicação (entre redes diferentes).' },
        { id: 'r30', categoria: 'Redes', pergunta: 'Qual é o PDU (Protocol Data Unit) de cada camada: Física, Enlace, Rede e Transporte?', resposta: 'Física → Bits. Enlace → Frame. Rede → Pacote. Transporte → Segmento.' },

        // Endereçamento
        { id: 'r31', categoria: 'Redes', pergunta: 'O que é NAT e por que foi necessário no IPv4?', resposta: 'Network Address Translation: permite que vários dispositivos compartilhem um único IP público. Foi necessário por causa da escassez de endereços IPv4.' },
        { id: 'r32', categoria: 'Redes', pergunta: 'Quais as principais melhorias do IPv6 em relação ao IPv4?', resposta: 'IPv6 elimina a necessidade de NAT (cada dispositivo pode ter IP público), melhora o desempenho no roteamento e oferece suporte nativo a segurança (IPsec).' },
        { id: 'r33', categoria: 'Redes', pergunta: 'Qual a diferença conceitual entre endereço IP e endereço MAC?', resposta: 'IP é lógico e mutável — representa a localização do dispositivo na rede ("onde está"). MAC é físico e fixo — representa a identidade do dispositivo ("quem é").' },
        { id: 'r34', categoria: 'Redes', pergunta: 'IPv4 usa broadcast; como o IPv6 resolve isso?', resposta: 'IPv6 substitui o broadcast pelo multicast, tornando a comunicação mais eficiente ao enviar dados apenas para os destinatários interessados, não para toda a rede.' },

        // Arquiteturas
        { id: 'r35', categoria: 'Redes', pergunta: 'Qual o principal problema da arquitetura Cliente-Servidor?', resposta: 'Ponto único de falha: se o servidor central cair, todos os clientes perdem o serviço. Além disso, sua escalabilidade é limitada.' },
        { id: 'r36', categoria: 'Redes', pergunta: 'Por que em redes P2P (como BitTorrent) mais usuários = mais velocidade?', resposta: 'Porque em P2P cada nó contribui com seus próprios recursos (banda, armazenamento). Quanto mais usuários compartilhando, mais fontes disponíveis para download simultâneo.' },

        // Comutação
        { id: 'r37', categoria: 'Redes', pergunta: 'Quais são as consequências da comutação de pacotes que o TCP precisa resolver?', resposta: 'Na comutação de pacotes não há caminho fixo, então pode ocorrer atraso, perda de pacotes e chegada fora de ordem. O TCP reorganiza os dados e garante a entrega confiável.' },
        { id: 'r38', categoria: 'Redes', pergunta: 'Quais são as 3 fases da comutação por circuito?', resposta: '1. Estabelecimento do circuito. 2. Transmissão dos dados. 3. Encerramento da conexão. A latência inicial é alta, mas depois o fluxo é contínuo e garantido.' },
        { id: 'r39', categoria: 'Redes', pergunta: 'Qual a diferença prática entre TCP e UDP?', resposta: 'TCP é confiável: garante entrega, ordem e controle de fluxo (mais lento). UDP é rápido: não garante entrega nem ordem, mas tem menor overhead (usado em streaming e jogos).' },

        // Métricas
        { id: 'r40', categoria: 'Redes', pergunta: 'De que componentes é formado o atraso (latência) total em uma rede?', resposta: 'Atraso de processamento (nos roteadores) + atraso de fila (espera para transmissão) + atraso de transmissão (colocar bits no meio) + atraso de propagação (tempo no meio físico).' },
        { id: 'r41', categoria: 'Redes', pergunta: 'Qual a fórmula mental que diferencia Bandwidth de Throughput?', resposta: 'Throughput = Bandwidth – perdas. As perdas são causadas por congestionamento, erros de transmissão e retransmissões.' },
        { id: 'r42', categoria: 'Redes', pergunta: 'Por que o Jitter é crítico para chamadas de voz e vídeo?', resposta: 'Porque o Jitter é a variação da latência entre pacotes. Se os pacotes chegam em tempos irregulares, o áudio/vídeo fica entrecortado e sem sincronia, prejudicando a qualidade.' },

        // Dispositivos
        { id: 'r43', categoria: 'Redes', pergunta: 'Como um Switch aprende para onde enviar os dados?', resposta: 'O Switch mantém uma tabela MAC (CAM Table) que aprende automaticamente o endereço MAC de cada dispositivo conectado em cada porta, enviando os dados somente para o destino correto.' },
        { id: 'r44', categoria: 'Redes', pergunta: 'Quais protocolos de roteamento um Roteador pode utilizar?', resposta: 'RIP (Routing Information Protocol), OSPF (Open Shortest Path First) e BGP (Border Gateway Protocol — usado na Internet).' },
        { id: 'r45', categoria: 'Redes', pergunta: 'Por que o Hub é considerado obsoleto em redes modernas?', resposta: 'Porque o Hub repassa os dados para todas as portas simultaneamente (broadcast), gerando colisões e reduzindo drasticamente o desempenho. O Switch resolveu esse problema.' },

        // Meios de Transmissão
        { id: 'r46', categoria: 'Redes', pergunta: 'Qual a diferença entre fibra monomodo e fibra multimodo?', resposta: 'Monomodo: transmite um único feixe de luz, usada em longas distâncias. Multimodo: transmite múltiplos feixes, usada em curtas distâncias (ex: dentro de um prédio).' },
        { id: 'r47', categoria: 'Redes', pergunta: 'Quais são os principais problemas dos meios de transmissão não guiados (sem fio)?', resposta: 'Interferência eletromagnética de outros dispositivos e questões de segurança, pois o sinal se propaga pelo ar e pode ser interceptado.' },

        // Conexões e Macete Final
        { id: 'r48', categoria: 'Redes', pergunta: 'Qual protocolo resolve os problemas da comutação de pacotes, e como?', resposta: 'O TCP resolve: numera os segmentos para reordenação, usa confirmações (ACK) para garantir entrega e possui controle de fluxo para evitar sobrecarga.' },
        { id: 'r49', categoria: 'Redes', pergunta: 'Na prática, como Switch (MAC) e Roteador (IP) funcionam juntos para fazer a Internet funcionar?', resposta: 'O Switch usa endereços MAC para entregar dados dentro de uma rede local (LAN). O Roteador usa endereços IP para encaminhar os dados entre redes diferentes até o destino final.' },
        { id: 'r50', categoria: 'Redes', pergunta: 'Qual o meio de transmissão com melhor desempenho e por quê?', resposta: 'A Fibra Óptica: não sofre interferência eletromagnética, oferece altíssima velocidade e baixíssimo atraso, sendo a base dos backbones da Internet.' },
    ],

    // ─────────────────────────────────────────────
    //  POO  (p1 → p50)
    // ─────────────────────────────────────────────
    poo: [
            { id: 'p1',  categoria: 'POO', pergunta: 'O que é a Programação Orientada a Objetos e qual problema ela resolve?',                                                  resposta: 'É um paradigma que surge como solução para a complexidade procedural, unificando dados e funções em unidades coesas chamadas objetos.' },
            { id: 'p2',  categoria: 'POO', pergunta: 'O que são Atributos em POO?',                                                                                             resposta: 'Representam o estado interno de um objeto — o que o objeto conhece.' },
            { id: 'p3',  categoria: 'POO', pergunta: 'O que são Métodos em POO?',                                                                                               resposta: 'Representam o comportamento ou os serviços de um objeto — o que o objeto faz.' },
            { id: 'p4',  categoria: 'POO', pergunta: 'O que é Abstração em POO?',                                                                                               resposta: 'É o processo de isolar apenas as características essenciais para um contexto, ignorando detalhes irrelevantes para reduzir a carga cognitiva.' },
            { id: 'p5',  categoria: 'POO', pergunta: 'Quais convenções de nomenclatura Java utiliza para classes e membros?',                                                   resposta: 'PascalCase para nomes de classes (ex: ContaBancaria) e camelCase para membros como atributos e métodos (ex: saldoAtual, calcularJuros).' },
            { id: 'p6',  categoria: 'POO', pergunta: 'O que é Tipagem Forte em Java?',                                                                                          resposta: 'Java exige a declaração explícita de tipos para todas as variáveis. Exemplos de tipos primitivos: int, long, double, boolean e char.' },
            { id: 'p7',  categoria: 'POO', pergunta: 'O que é inferência de tipo em Java e como é usada?',                                                                      resposta: 'A partir do Java 10, a palavra-chave var permite que o compilador deduza o tipo da variável automaticamente com base no valor atribuído.' },
            { id: 'p8',  categoria: 'POO', pergunta: 'Qual a diferença entre Stack e Heap na gestão de memória Java?',                                                          resposta: 'Stack é a memória rápida para variáveis locais e referências. Heap é onde residem todos os objetos criados com o operador new.' },
            { id: 'p9',  categoria: 'POO', pergunta: 'O que são Strings em Java e como compará-las corretamente?',                                                              resposta: 'Strings são imutáveis e gerenciadas em um String Pool. A comparação de conteúdo deve ser feita com .equals() e não com ==, que compara referências.' },
            { id: 'p10', categoria: 'POO', pergunta: 'O que é o princípio DRY e como os métodos o aplicam?',                                                                    resposta: 'DRY significa "Don\'t Repeat Yourself" (Não Se Repita). Métodos aplicam esse princípio evitando a duplicação de lógica no código.' },
            { id: 'p11', categoria: 'POO', pergunta: 'Como funciona a passagem de parâmetros em Java?',                                                                         resposta: 'É sempre por valor (uma cópia). Para primitivos, a variável original não é alterada. Para objetos, a cópia da referência permite alterar o estado do objeto original.' },
            { id: 'p12', categoria: 'POO', pergunta: 'O que é Sobrecarga (Overloading) de métodos?',                                                                            resposta: 'É a capacidade de definir múltiplos métodos com o mesmo nome na mesma classe, desde que possuam parâmetros diferentes.' },
            { id: 'p13', categoria: 'POO', pergunta: 'O que é Encapsulamento em POO?',                                                                                          resposta: 'É o pilar que protege o estado interno do objeto contra modificações externas imprevistas e valores inválidos.' },
            { id: 'p14', categoria: 'POO', pergunta: 'O que faz o modificador de acesso public?',                                                                               resposta: 'Concede acesso total ao membro por qualquer classe, sem restrições.' },
            { id: 'p15', categoria: 'POO', pergunta: 'O que faz o modificador de acesso private?',                                                                              resposta: 'Restringe o acesso ao membro apenas dentro da própria classe onde ele foi declarado.' },
            { id: 'p16', categoria: 'POO', pergunta: 'O que faz o modificador de acesso protected?',                                                                            resposta: 'Permite acesso pelo membro da própria classe, pelas subclasses e pelas classes que estão no mesmo pacote.' },
            { id: 'p17', categoria: 'POO', pergunta: 'O que são Getters e Setters?',                                                                                            resposta: 'São métodos "guardiões": o getter lê um atributo privado e o setter valida e altera um atributo privado de forma controlada.' },
            { id: 'p18', categoria: 'POO', pergunta: 'Para que serve a palavra-chave this em Java?',                                                                            resposta: 'Refere-se à instância atual do objeto. É útil para diferenciar atributos da classe de variáveis locais que possuem o mesmo nome.' },
            { id: 'p19', categoria: 'POO', pergunta: 'O que é um Construtor em Java?',                                                                                          resposta: 'É um método especial que garante que um objeto nasça com um estado válido. Deve ter o mesmo nome da classe e não possui tipo de retorno.' },
            { id: 'p20', categoria: 'POO', pergunta: 'Quais são as duas regras fundamentais de um Construtor?',                                                                 resposta: 'Deve ter o mesmo nome da classe e não pode possuir tipo de retorno (nem void).' },
            { id: 'p21', categoria: 'POO', pergunta: 'O que são membros static em Java?',                                                                                       resposta: 'São membros que pertencem à classe e não às instâncias. Variáveis estáticas são compartilhadas entre todos os objetos da classe.' },
            { id: 'p22', categoria: 'POO', pergunta: 'Qual a limitação de métodos estáticos?',                                                                                  resposta: 'Métodos estáticos não podem acessar membros de instância (atributos ou métodos não estáticos) diretamente.' },
            { id: 'p23', categoria: 'POO', pergunta: 'O que é Herança em POO e qual palavra-chave Java usa?',                                                                   resposta: 'É a relação "É-UM" que permite o reuso de código e a especialização de classes. Em Java é implementada com a palavra-chave extends.' },
            { id: 'p24', categoria: 'POO', pergunta: 'Java permite herança múltipla de classes?',                                                                               resposta: 'Não. Java não permite herança múltipla de classes — uma classe só pode estender uma única outra classe.' },
            { id: 'p25', categoria: 'POO', pergunta: 'O que é Sobrescrita (@Override) de métodos?',                                                                             resposta: 'É a redefinição de um método herdado da classe pai na classe filha, com o objetivo de fornecer um comportamento mais específico.' },
            { id: 'p26', categoria: 'POO', pergunta: 'Para que serve a palavra-chave super?',                                                                                   resposta: 'É usada para referenciar o construtor da superclasse (super()) ou seus métodos (super.metodo()), acessando comportamentos da classe pai.' },
            { id: 'p27', categoria: 'POO', pergunta: 'O que é Polimorfismo em POO?',                                                                                            resposta: 'É a capacidade de diferentes objetos responderem ao mesmo método de formas distintas, permitindo tratar subclasses como sua classe base.' },
            { id: 'p28', categoria: 'POO', pergunta: 'Qual a diferença entre Sobrecarga (Overloading) e Sobrescrita (Override)?',                                               resposta: 'Sobrecarga: múltiplos métodos com o mesmo nome e parâmetros diferentes na mesma classe. Sobrescrita: redefinição de um método herdado na classe filha.' },
            { id: 'p29', categoria: 'POO', pergunta: 'O que é uma Classe Abstrata?',                                                                                            resposta: 'É um modelo incompleto que não pode ser instanciado diretamente. Serve como base obrigatória para outras classes que a estendem.' },
            { id: 'p30', categoria: 'POO', pergunta: 'O que é uma Interface em Java?',                                                                                          resposta: 'Define um contrato de software com comportamentos obrigatórios que as classes devem implementar. Promove o desacoplamento entre componentes.' },
            { id: 'p31', categoria: 'POO', pergunta: 'Qual a vantagem de uma classe poder implementar múltiplas interfaces?',                                                   resposta: 'Compensa a restrição de herança simples de classes, permitindo que uma classe assuma múltiplos contratos de comportamento ao mesmo tempo.' },
            { id: 'p32', categoria: 'POO', pergunta: 'Qual a principal diferença entre Classe Abstrata e Interface?',                                                           resposta: 'Classe abstrata é um modelo parcial com código (não instanciável). Interface define apenas um contrato (comportamentos obrigatórios) e uma classe pode implementar várias.' },
            { id: 'p33', categoria: 'POO', pergunta: 'O que é uma Exceção em Java?',                                                                                            resposta: 'É um erro em tempo de execução que interrompe o fluxo normal do programa.' },
            { id: 'p34', categoria: 'POO', pergunta: 'Para que serve o bloco try no tratamento de exceções?',                                                                   resposta: 'Envolve o trecho de código que pode gerar um erro em tempo de execução.' },
            { id: 'p35', categoria: 'POO', pergunta: 'Para que serve o bloco catch?',                                                                                           resposta: 'Captura e trata a exceção gerada dentro do bloco try, evitando que o programa seja encerrado abruptamente.' },
            { id: 'p36', categoria: 'POO', pergunta: 'Para que serve o bloco finally?',                                                                                         resposta: 'É um bloco que sempre executa, independentemente de ter ocorrido exceção ou não. É ideal para fechar recursos como arquivos e conexões.' },
            { id: 'p37', categoria: 'POO', pergunta: 'O que são Exceções Checked (Checadas)?',                                                                                  resposta: 'São exceções verificadas em tempo de compilação. O tratamento com try-catch ou declaração com throws é obrigatório.' },
            { id: 'p38', categoria: 'POO', pergunta: 'O que são Exceções Unchecked (Não Checadas)?',                                                                            resposta: 'São erros de lógica ou de execução não verificados na compilação. Exemplo: ArithmeticException (divisão por zero).' },
            { id: 'p39', categoria: 'POO', pergunta: 'Qual a diferença entre throw e throws?',                                                                                  resposta: 'throw dispara uma exceção manualmente dentro do código. throws declara na assinatura do método que ele pode lançar um determinado tipo de exceção.' },
            { id: 'p40', categoria: 'POO', pergunta: 'Quais são os quatro pilares da POO?',                                                                                     resposta: 'Abstração, Encapsulamento, Herança e Polimorfismo.' },
            { id: 'p41', categoria: 'POO', pergunta: 'O que diferencia um objeto de uma classe?',                                                                               resposta: 'A classe é o molde ou modelo (definição). O objeto é uma instância concreta desse molde, criada em memória com o operador new.' },
            { id: 'p42', categoria: 'POO', pergunta: 'Por que Strings em Java não devem ser comparadas com ==?',                                                                resposta: 'Porque == compara referências de memória, não o conteúdo. Para comparar o valor textual, deve-se usar o método .equals().' },
            { id: 'p43', categoria: 'POO', pergunta: 'O que é o String Pool em Java?',                                                                                          resposta: 'É uma área especial no Heap onde Java armazena strings para reaproveitamento. Strings com o mesmo valor podem compartilhar a mesma referência, aumentando a eficiência de memória.' },
            { id: 'p44', categoria: 'POO', pergunta: 'O que acontece com a variável original ao passar um primitivo para um método?',                                           resposta: 'Ela não é alterada, pois Java passa uma cópia do valor. Modificações dentro do método afetam apenas a cópia local.' },
            { id: 'p45', categoria: 'POO', pergunta: 'O que acontece ao passar um objeto como parâmetro para um método em Java?',                                               resposta: 'Uma cópia da referência é passada. Como ambas apontam para o mesmo objeto no Heap, alterações no estado do objeto dentro do método afetam o objeto original.' },
            { id: 'p46', categoria: 'POO', pergunta: 'Por que usar atributos private com getters e setters em vez de deixá-los public?',                                        resposta: 'Para proteger o estado interno do objeto. O setter permite validar os dados antes de atribuí-los, evitando valores inválidos.' },
            { id: 'p47', categoria: 'POO', pergunta: 'Qual a relação entre Herança e Polimorfismo?',                                                                            resposta: 'A herança cria a hierarquia de classes. O polimorfismo se apoia nela para permitir que subclasses sejam tratadas como a classe base, respondendo ao mesmo método de formas distintas.' },
            { id: 'p48', categoria: 'POO', pergunta: 'O que é desacoplamento e por que interfaces o promovem?',                                                                 resposta: 'Desacoplamento é a redução de dependência entre componentes. Interfaces promovem isso pois o código depende do contrato (interface) e não da implementação concreta.' },
            { id: 'p49', categoria: 'POO', pergunta: 'Quando um método estático pode ser chamado?',                                                                             resposta: 'Pode ser chamado diretamente pelo nome da classe, sem precisar criar um objeto. Ex: NomeDaClasse.nomeDoMetodo().' },
            { id: 'p50', categoria: 'POO', pergunta: 'O que é a relação "É-UM" em Herança?',                                                                                   resposta: 'É a forma de validar se a herança faz sentido. Ex: "Cachorro É-UM Animal" faz sentido, logo Cachorro pode estender Animal. Se a frase não fizer sentido, herança não é adequada.' },
        ],
};