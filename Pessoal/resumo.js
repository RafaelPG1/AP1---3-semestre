/* ═══════════════════════════════════════════════════════════════════════
   resumo.js — Sistema de Resumos das Disciplinas  (v1)
   ✦ Armazena resumos organizados por disciplina e aula
   ✦ Funções utilitárias para acesso e listagem
   ✦ Separado totalmente da lógica de checklist
   ✦ Fácil de expandir: basta adicionar novos objetos no array `resumos`
════════════════════════════════════════════════════════════════════════ */

export const resumoData = {

    // ── DESIGN DE SISTEMAS DE INFORMAÇÃO ────────────────────────────────
design: {
  resumos: [
    {
      id: 'design_aula1',
      titulo: 'Aula 1 — Design com Foco no Usuário',
      conteudo: [
        {
          subtitulo: '🎯 Objetivos da Aula',
          texto: [
            'Ao final do módulo, o estudante deve ser capaz de:',
            [
              'Compreender os conceitos do design centrado no usuário',
              'Diferenciar IHC, Usabilidade e UX Design',
              'Identificar disciplinas que apoiam o design de sistemas',
              'Conhecer práticas do bom design',
              'Entender e aplicar os critérios ergonômicos de Scapin e Bastien'
            ]
          ]
        },
        {
          subtitulo: '🔎 O que é Design?',
          texto: [
            'Design não é apenas estética.',
            'Significa projetar, compor visualmente e colocar em prática um plano intencional.',
            'Não basta ser bonito — precisa ser funcional e cumprir um objetivo.',
            'O designer combina palavras, imagens, vídeos e sons para criar experiências coerentes.'
          ]
        },
        {
          subtitulo: '🖥 Design de Sistemas',
          texto: [
            'O design de sistemas cria produtos que favorecem a interação entre pessoas e computadores.',
            'Problema comum: desenvolvedores focam apenas na tecnologia e esquecem como as pessoas interagem com o sistema.',
            'É aqui que entra o foco no usuário.'
          ]
        },
        {
          subtitulo: '🧠 IHC — Interação Humano-Computador',
          texto: [
            'Surgiu na década de 1970.',
            'Origem: Ergonomia, Psicologia Cognitiva, Design e Computação.',
            'Estuda a relação entre o sistema e o usuário.',
            '⚠ Interface (IU) é a parte visível.',
            '⚠ IHC é o estudo da interação como um todo.'
          ]
        },
        {
          subtitulo: '⚙ Usabilidade',
          texto: [
            'Segundo a NBR 9241-11: é a medida pela qual um produto pode ser usado com eficácia, eficiência e satisfação.',
            'Ela considera:',
            [
              'Cognição',
              'Memória (curto e longo prazo)',
              'Percepção',
              'Atenção',
              'Tomada de decisão'
            ],
            'Hoje, usabilidade é o mínimo esperado.'
          ]
        },
        {
          subtitulo: '🌟 UX — Experiência do Usuário',
          texto: [
            'Vai além da eficiência.',
            'Inclui:',
            [
              'Prazer',
              'Emoção',
              'Afetividade',
              'Encantamento',
              'Desejabilidade'
            ],
            'UX analisa se o usuário se encanta a ponto de querer continuar usando o sistema.',
            'O foco principal do designer deve ser sempre o usuário.'
          ]
        },
        {
          subtitulo: '🎮 Design de Interação',
          texto: [
            'Estuda como ocorre a interação entre usuário e sistema.',
            'Envolve:',
            [
              'Elementos físicos e digitais',
              'Compatibilidade com expectativas do usuário',
              'Consistência',
              'Padronização',
              'Controle do usuário',
              'Interrupção de ações'
            ],
            'É uma visão ampla que envolve teoria, pesquisa e prática.'
          ]
        },
        {
          subtitulo: '🖼 Design de Interface',
          texto: [
            'Foco: ambiente visual onde ocorre a interação.',
            'Elementos: ícones, botões, textos, feedback, condução e códigos.',
            'A interface deve ser fluida, consistente, intuitiva e adequada ao público-alvo.',
            'Princípios do Bom Design (Sobral):',
            [
              '(a) Visibilidade — o usuário deve reconhecer facilmente as funções',
              '(b) Consistência — elementos devem manter padrão visual',
              '(c) Familiaridade — usar ícones e padrões conhecidos',
              '(d) Affordance — a interface deve "ensinar" a usar sem manual'
            ]
          ]
        },
        {
          subtitulo: '🗂 Arquitetura da Informação',
          texto: [
            'Organiza o conteúdo do sistema.',
            'Envolve:',
            [
              'Estruturação',
              'Hiperligações',
              'Legibilidade',
              'Disponibilidade',
              'Fluidez',
              'Categorização',
              'Menus e submenus bem rotulados'
            ],
            'Uma boa arquitetura melhora a experiência geral.'
          ]
        },
        {
          subtitulo: '📏 Critérios Ergonômicos de Scapin e Bastien',
          texto: [
            'A ergonomia organiza os elementos da interface de forma metódica e alinhada à usabilidade.',
            'Base teórica: Bastien e Scapin (1993).',
            'São 8 critérios complementares:',
            [
              '(1) Compatibilidade — a interface está adequada às características do usuário? Considera memória, idade, habilidades e expectativas.',
              '(2) Condução — a interface orienta o usuário? Inclui feedback imediato, agrupamento de itens, legibilidade e ajuda ao aprendizado.',
              '(3) Carga de Trabalho — evita excesso de informação? Subcritérios: brevidade, concisão, ações mínimas e baixa densidade informacional. Objetivo: reduzir esforço cognitivo.',
              '(4) Homogeneidade — manter padrões em contextos semelhantes: consistência de códigos, nomes, formatos e procedimentos.',
              '(5) Significado dos Códigos — os símbolos representam corretamente sua função? Ex: ícone de lixeira para excluir.',
              '(6) Controle Explícito — o usuário tem controle sobre o sistema? Pode interromper, suspender e confirmar ações.',
              '(7) Adaptabilidade — sistema se adapta ao nível do usuário? Ajuda para iniciantes, diálogo para intermediários, atalhos para avançados. Inclui personalização.',
              '(8) Gestão de Erros — o sistema prevê erros, informa claramente e permite correção. Ex: mensagem de confirmação antes de excluir.'
            ]
          ]
        },
        {
          subtitulo: '🏁 Conclusão da Aula',
          texto: [
            'Um design centrado no usuário:',
            [
              'Vai além da implementação técnica',
              'Busca usabilidade eficiente',
              'Proporciona experiência imersiva',
              'É intuitivo',
              'Considera diferentes níveis de usuários',
              'Avalia constantemente erros e melhorias'
            ],
            'O designer precisa ser multidisciplinar e dominar:',
            [
              'IHC',
              'Usabilidade',
              'UX',
              'Design de Interface',
              'Arquitetura da Informação',
              'Ergonomia'
            ]
          ]
        },
        {
          subtitulo: '🎯 Pontos Mais Importantes da Aula',
          texto: [
            [
              '1. UX é mais amplo que usabilidade.',
              '2. Design não é apenas estética — é funcionalidade.',
              '3. Interface é parte do sistema, IHC é o estudo da relação.',
              '4. Ergonomia organiza a interface metodicamente.',
              '5. Os 8 critérios de Bastien e Scapin são base para avaliação.'
            ]
          ]
        },
        {
          subtitulo: '📝 Resumo Ultra Simplificado',
          texto: [
            'Design centrado no usuário busca criar sistemas funcionais, intuitivos e desejáveis.',
            'IHC estuda a interação entre usuário e sistema.',
            'Usabilidade mede eficiência e satisfação.',
            'UX amplia para emoção e encantamento.',
            'Os 8 critérios ergonômicos garantem qualidade na interface.'
          ]
        }
      ],
      lida: false
    },
    {
      id: 'design_aula2',
      titulo: 'Aula 2 — Comunicação e Semiótica',
      conteudo: [
        {
          subtitulo: '🎯 Objetivos da Aula',
          texto: [
            'Ao final do módulo, o estudante deve ser capaz de:',
            [
              'Reconhecer a importância dos elementos comunicativos',
              'Compreender os conceitos de fenomenologia e semiótica',
              'Entender como os signos influenciam a percepção',
              'Analisar e aplicar signos em interfaces gráficas',
              'Utilizar métodos de avaliação da comunicabilidade'
            ]
          ]
        },
        {
          subtitulo: '🗣 O que é Comunicabilidade?',
          texto: [
            'Comunicabilidade é a capacidade de um sistema comunicar ao usuário:',
            [
              'Como ele funciona',
              'O que pode ser feito',
              'Como deve ser usado'
            ],
            'Não é apenas transmitir informação, mas garantir que o usuário compreenda a intenção do sistema.',
            'Base teórica: Modelo de Comunicação de Jakobson (1960).',
            'Comunicação envolve: emissor, mensagem, receptor, código, canal e contexto.',
            'Em sistemas interativos:',
            [
              'O designer é o emissor',
              'A interface é a mensagem',
              'O usuário é o receptor'
            ]
          ]
        },
        {
          subtitulo: '🌐 Evolução da Web e Comunicação',
          texto: [
            [
              'Web 1.0: ambiente estático, sites corporativos, fonte unilateral de informação, usuário passivo.',
              'Web 2.0: interação e compartilhamento, páginas dinâmicas, redes sociais, usuário criando conteúdo.',
              'Web 3.0: web semântica, processos interpretativos, sistematização das informações, dados organizados de forma inteligente.',
              'Web 4.0: mobilidade, ubiquidade, inteligência artificial, sistemas altamente adaptativos.'
            ]
          ]
        },
        {
          subtitulo: '📖 Semiótica',
          texto: [
            'Ciência que estuda os signos.',
            'Principal referência: Charles Sanders Peirce (1839–1914).',
            'A semiótica estuda:',
            [
              'Como os signos representam algo',
              'Como são interpretados',
              'Como produzem significado'
            ]
          ]
        },
        {
          subtitulo: '🎨 Fenomenologia',
          texto: [
            'Estudo da experiência humana.',
            'Relaciona-se com: estética, ética e lógica.',
            'A fenomenologia ajuda a entender como o usuário percebe e interpreta a interface.'
          ]
        },
        {
          subtitulo: '💡 Engenharia Semiótica',
          texto: [
            'A Engenharia Semiótica é uma disciplina da IHC centrada na comunicação.',
            'Ideia central: sistemas são metacomunicadores — o sistema comunica ao usuário as decisões e intenções do designer.',
            'O usuário aprende com o sistema por meio de:',
            [
              'Signos visuais',
              'Estruturas de navegação',
              'Feedback',
              'Padrões de interação'
            ],
            'A semiótica envolve: cultura, conhecimento prévio e contexto social.',
            'Se a comunicação falha, ocorre problema de comunicabilidade.'
          ]
        },
        {
          subtitulo: '🧪 Método MAC',
          texto: [
            'MAC = Método de Avaliação de Comunicabilidade.',
            'Etapas:',
            [
              '1. Preparação do teste',
              '2. Coleta de dados',
              '3. Análise dos dados'
            ],
            'O objetivo é identificar:',
            [
              'Ruídos na comunicação',
              'Dificuldades de interpretação',
              'Quebras de entendimento'
            ]
          ]
        },
        {
          subtitulo: '🔎 Inspeção Semiótica',
          texto: [
            'Método analítico baseado na análise dos signos presentes na interface.',
            'Etapas:',
            [
              'Inspeção dos signos metalinguísticos (textos explicativos, tutoriais, ajuda)',
              'Inspeção dos signos estáticos (ícones, layout, cores, elementos fixos)',
              'Inspeção dos signos dinâmicos (animações, feedback, mudanças de estado)',
              'Contraste e comparação entre análises',
              'Apreciação da qualidade da metacomunicação'
            ]
          ]
        },
        {
          subtitulo: '🎯 Pontos Mais Importantes da Aula',
          texto: [
            [
              '1. Comunicabilidade é a capacidade do sistema transmitir sua intenção ao usuário.',
              '2. Semiótica estuda como os signos produzem significado.',
              '3. Engenharia Semiótica vê o sistema como um metacomunicador.',
              '4. MAC e Inspeção Semiótica avaliam a qualidade da comunicação.',
              '5. A evolução da web mudou a forma como nos comunicamos digitalmente.'
            ]
          ]
        },
        {
          subtitulo: '📝 Resumo Ultra Simplificado',
          texto: [
            'Comunicabilidade é a capacidade de um sistema se fazer entender pelo usuário.',
            'A semiótica estuda os signos e seus significados.',
            'Engenharia Semiótica analisa como sistemas comunicam decisões do designer.',
            'MAC e Inspeção Semiótica avaliam falhas na comunicação.',
            'Uma boa interface comunica claramente suas intenções.'
          ]
        }
      ],
      lida: false
    },
    {
      id: 'design_aula3',
      titulo: 'Aula 3 — Alfabeto Visual',
      conteudo: [
        {
          subtitulo: '🎯 Objetivos da Aula',
          texto: [
            'Ao final do módulo, o estudante deve ser capaz de:',
            [
              'Compreender o conceito de alfabetismo visual',
              'Entender os fundamentos sintáticos da linguagem visual',
              'Identificar os elementos básicos da comunicação visual',
              'Aplicar esses elementos na construção de interfaces gráficas'
            ]
          ]
        },
        {
          subtitulo: '👁 O que é Linguagem Visual?',
          texto: [
            '"Uma imagem vale mais que mil palavras."',
            'Em uma era de excesso de informações, a comunicação visual torna-se essencial para:',
            [
              'Chamar atenção',
              'Transmitir significado',
              'Criar identidade visual',
              'Melhorar a experiência do usuário'
            ],
            'A linguagem visual é a forma de comunicação baseada em: imagens, cores, formas, direções, texturas e movimento.',
            'Assim como existe um alfabeto verbal, existe também um alfabeto visual.'
          ]
        },
        {
          subtitulo: '🔤 O que é Alfabetismo Visual?',
          texto: [
            'Assim como alguém alfabetizado verbalmente conhece letras, gramática e sintaxe, o alfabetizado visual:',
            [
              'Conhece os elementos visuais',
              'Entende seus significados',
              'Sabe combiná-los',
              'Consegue analisar e sintetizar composições'
            ],
            '⚠ Diferente do alfabeto verbal, o visual é: menos rígido, mais interpretativo e culturalmente influenciado.',
            'O designer resolve problemas por meio de:',
            [
              'Análise (investigação do problema)',
              'Síntese (criação da solução visual)'
            ],
            'O computador ampliou as possibilidades criativas, mas os fundamentos visuais continuam os mesmos.'
          ]
        },
        {
          subtitulo: '🖼 Classificação das Mensagens Visuais',
          texto: [
            'As mensagens visuais podem ser classificadas em três níveis:',
            [
              '(1) Representacional — representa o mundo real da forma mais fiel possível; fácil reconhecimento, próximo da realidade, pouca abstração. Ex: fotografia de um objeto real.',
              '(2) Abstrato — simplificação da realidade; redução de detalhes, ênfase em formas e cores, expressão mais subjetiva; usado para intensificar significado.',
              '(3) Simbólico — redução radical da representação; elementos mínimos, fácil memorização, ícones e sinais. Ex: ícones de interface.'
            ],
            'Esses três níveis podem se interligar, se sobrepor e variar conforme o contexto.'
          ]
        },
        {
          subtitulo: '⚫ Os 10 Elementos Básicos da Leitura Visual',
          texto: [
            [
              '(1) Ponto — unidade visual mínima, referência no espaço, direciona o olhar, em conjunto cria tom e textura, base do pontilhismo.',
              '(2) Linha — energética, nunca totalmente estática, direcional, pode ser técnica ou expressiva; linha diagonal = tensão e instabilidade.',
              '(3) Forma — três formas básicas: quadrado (estabilidade, honestidade), triângulo (tensão, ação), círculo (proteção, continuidade); todas as formas derivam dessas bases.',
              '(4) Direção — cada forma sugere uma direção: horizontal/vertical = equilíbrio, diagonal = instabilidade, curva = suavidade e repetição.',
              '(5) Tom — variação entre luz e sombra, cria profundidade e permite distinguir formas.',
              '(6) Cor — forte impacto emocional, elemento de grande apelo comunicacional; deve considerar aspectos físicos, fisiológicos e culturais.',
              '(7) Textura — pode ser percebida visualmente, enriquece superfícies e cria contraste.',
              '(8) Escala — relação de tamanho, define peso visual e cria hierarquia.',
              '(9) Dimensão — ilusão de profundidade, uso de perspectiva, representação 3D em plano 2D.',
              '(10) Movimento — ilusão de dinamismo, uso de repetição, desfoque, sequência e animação; é uma das forças visuais mais dominantes da experiência humana.'
            ]
          ]
        },
        {
          subtitulo: '🏁 Conclusão da Aula',
          texto: [
            [
              'Existe um alfabeto visual assim como o verbal.',
              'Ele é menos rígido, mas igualmente estruturado.',
              'Os 10 elementos básicos formam a base da linguagem visual.',
              'Cada elemento transmite uma metamensagem.',
              'Estética deve sempre estar alinhada à usabilidade.',
              'Interfaces criativas utilizam os elementos básicos de forma coerente, intencional e esteticamente alinhada à usabilidade.'
            ]
          ]
        },
        {
          subtitulo: '🎯 Pontos Mais Importantes da Aula',
          texto: [
            [
              '1. Alfabetismo visual é domínio consciente dos elementos visuais.',
              '2. Existem três níveis de mensagem: representacional, abstrato e simbólico.',
              '3. Os 10 elementos básicos estruturam qualquer composição visual.',
              '4. Cada elemento transmite significado cognitivo.',
              '5. A escolha correta dos elementos fortalece a identidade visual.'
            ]
          ]
        },
        {
          subtitulo: '📝 Resumo Ultra Simplificado',
          texto: [
            'O alfabetismo visual é o domínio da linguagem das imagens.',
            'Mensagens visuais podem ser representacionais, abstratas ou simbólicas.',
            'Existem 10 elementos básicos que estruturam qualquer composição.',
            'Cada elemento transmite uma metamensagem específica.',
            'Interfaces eficazes combinam estética e usabilidade.'
          ]
        }
      ],
      lida: false
    },
    {
      id: 'design_aula4',
      titulo: 'Aula 4 — Psicologia Cognitiva e Gestalt da Forma',
      conteudo: [
        {
          subtitulo: '🎯 Objetivos da Aula',
          texto: [
            'Ao final da aula, o estudante deve ser capaz de:',
            [
              'Compreender os estudos da Psicologia Cognitiva aplicados à IHC',
              'Identificar os pilares da Gestalt da Forma',
              'Analisar a aplicação prática da Gestalt em interfaces gráficas'
            ]
          ]
        },
        {
          subtitulo: '🧠 Psicologia Cognitiva',
          texto: [
            'A construção de interfaces eficientes depende da compreensão de como o ser humano percebe, interpreta, memoriza e toma decisões.',
            'A Psicologia Cognitiva estuda os processos mentais envolvidos no pensamento humano:',
            [
              'Imagens mentais',
              'Atenção',
              'Consciência',
              'Percepção',
              'Memória',
              'Linguagem',
              'Resolução de problemas',
              'Criatividade',
              'Tomada de decisão',
              'Raciocínio',
              'Desenvolvimento cognitivo ao longo da vida',
              'Inteligência humana e inteligência artificial'
            ],
            'Na IHC, o foco principal está em atenção e memória.'
          ]
        },
        {
          subtitulo: '🔎 Tipos de Atenção',
          texto: [
            [
              '(1) Atenção Seletiva — foco em um estímulo específico ignorando outros.',
              '(2) Vigilância e Detecção de Sinal — manter atenção por longos períodos para identificar eventos importantes.',
              '(3) Sondagem — busca ativa por informações no ambiente.',
              '(4) Atenção Dividida — capacidade de realizar mais de uma tarefa ao mesmo tempo.'
            ],
            'Em interfaces: excesso de informação reduz foco.'
          ]
        },
        {
          subtitulo: '🧠 Memória e Processo de Ação',
          texto: [
            [
              'Memória de Curta Duração: temporária e limitada.',
              'Memória de Longa Duração: armazenamento permanente.'
            ],
            'Interfaces devem reduzir carga cognitiva e evitar exigir memorização excessiva.',
            'A interação do usuário segue três grandes etapas:',
            [
              '(1) Análise da Situação — ativação, observação, categorização e interpretação.',
              '(2) Planificação das Ações — avaliação das possibilidades, definição da tarefa e definição dos procedimentos.',
              '(3) Controle das Ações — baseado em habilidades, regras e conhecimentos.'
            ],
            'Interfaces devem facilitar esse fluxo.'
          ]
        },
        {
          subtitulo: '👁 Gestalt da Forma',
          texto: [
            'A Gestalt estuda como percebemos padrões e organizamos estímulos visuais.',
            'Premissa básica: o todo é maior que a soma das partes.',
            'Princípios fundamentais:',
            [
              '(1) Tendência à estruturação — o cérebro organiza estímulos automaticamente.',
              '(2) Segregação Figura-Fundo — separação entre elemento principal e plano de fundo.',
              '(3) Constância Perceptiva — reconhecimento de objetos mesmo com mudanças.',
              '(4) Pregnância — preferência por formas simples, estáveis e organizadas.'
            ]
          ]
        },
        {
          subtitulo: '🧩 Os 8 Pilares da Gestalt em Interfaces',
          texto: [
            [
              '(1) Unidades — elementos percebidos como partes organizadas.',
              '(2) Unificação — agrupamento que gera sensação de conjunto.',
              '(3) Continuidade — o olhar segue linhas e direções naturalmente.',
              '(4) Proximidade — elementos próximos são percebidos como relacionados.',
              '(5) Semelhança — elementos semelhantes são agrupados mentalmente.',
              '(6) Segregação — diferenciação clara entre figura e fundo.',
              '(7) Fechamento — tendência a completar formas incompletas.',
              '(8) Pregnância da Forma — preferência por formas simples e organizadas.'
            ]
          ]
        },
        {
          subtitulo: '🎯 Pontos Mais Importantes da Aula',
          texto: [
            [
              '1. Interfaces devem considerar atenção e memória.',
              '2. O usuário passa por análise, planejamento e controle ao interagir.',
              '3. O cérebro organiza estímulos automaticamente.',
              '4. Gestalt fornece princípios práticos para design.',
              '5. Simplicidade e organização aumentam eficiência visual.'
            ]
          ]
        },
        {
          subtitulo: '📝 Resumo Ultra Simplificado',
          texto: [
            'Psicologia Cognitiva estuda como pensamos, percebemos e memorizamos.',
            'A atenção e a memória são essenciais na interação humano-computador.',
            'A Gestalt explica como organizamos estímulos visuais.',
            'Existem 8 pilares aplicáveis ao design de interfaces.',
            'Interfaces boas reduzem esforço cognitivo e organizam bem a informação.'
          ]
        }
      ],
      lida: false
    },
    {
      id: 'design_aula5',
      titulo: 'Aula 5 — O Elemento Cor',
      conteudo: [
        {
          subtitulo: '🎯 Tema',
          texto: [
            'A Aula 5 aborda como aplicar cores de forma estratégica em projetos visuais, considerando aspectos técnicos, psicológicos e culturais para criar interfaces eficientes, atrativas e comunicativas.'
          ]
        },
        {
          subtitulo: '🔴 Critérios para Escolha de Cores',
          texto: [
            'A escolha de cores não é aleatória.',
            'Ela depende de:',
            [
              'Fatores fisiológicos (como o olho humano percebe as cores)',
              'Fatores psicológicos (impacto emocional das cores)',
              'Fatores culturais (significados variam entre culturas)',
              'Fatores contextuais (objetivo do projeto)',
              'Público-alvo (idade, preferências, hábitos)'
            ],
            'A cor deve ser escolhida com base na mensagem que se quer transmitir.'
          ]
        },
        {
          subtitulo: '🧠 Psicologia das Cores',
          texto: [
            'As cores possuem efeitos diferentes no corpo humano.',
            'Cores Quentes (vermelho, amarelo): comprimento de onda maior, exigem mais energia do cérebro, efeito: estímulo, agitação, atenção.',
            'Cores Frias (azul, verde, violeta): comprimento de onda menor, exigem menos energia, efeito: calma, relaxamento.',
            'O significado das cores não é universal:',
            [
              'Vermelho pode significar energia, fome ou raiva',
              'Preto = morte (cultura ocidental)',
              'Branco = morte (cultura hindu)'
            ],
            'A interpretação depende de cultura, religião e experiência pessoal.'
          ]
        },
        {
          subtitulo: '🌈 Significado das Cores',
          texto: [
            [
              'Azul: paz, confiança, serenidade, harmonia.',
              'Amarelo: alerta, energia, euforia, esperança.',
              'Vermelho: paixão, perigo, energia, ação.',
              'Verde: saúde, natureza, equilíbrio, esperança.',
              'Laranja: alegria, entusiasmo, criatividade.',
              'Violeta: calma, dignidade, espiritualidade.'
            ],
            'Esses significados ajudam a definir a identidade visual de um projeto.'
          ]
        },
        {
          subtitulo: '🧩 Processo de Criação de Esquema de Cores',
          texto: [
            '1º Passo — Escolher a cor principal:',
            [
              'Base do design',
              'Pode vir da marca ou do objetivo do projeto',
              'Considerar psicologia e cultura'
            ],
            '2º Passo — Regra 60-30-10:',
            [
              '60% = cor dominante (fundo/base)',
              '30% = cor secundária (textos/elementos)',
              '10% = cor de destaque (detalhes)'
            ],
            'Garante equilíbrio visual e organização.',
            '3º Passo — Escolher o esquema de cores baseado no círculo cromático:',
            [
              'Cores análogas (harmonia)',
              'Complementares (contraste)',
              'Tríade (equilíbrio vibrante)',
              'Monocromático (variações de uma cor)'
            ]
          ]
        },
        {
          subtitulo: '💻 RGB vs CMYK na Prática',
          texto: [
            [
              'RGB (luz) → telas digitais; mais variedade de cores.',
              'CMYK (pigmento) → impressão; menor gama de cores.'
            ],
            'Regra essencial: digital = RGB, impressão = CMYK.',
            'Ferramenta de apoio: Adobe Color — gera combinações e permite criar paletas monocromáticas, complementares e tríades.',
            'Facilita a tomada de decisão visual.'
          ]
        },
        {
          subtitulo: '⚖️ Boas Práticas no Uso da Cor',
          texto: [
            'Essenciais:',
            [
              'Não escolher cores aleatoriamente',
              'Pensar no público-alvo',
              'Considerar emoção e cultura',
              'Manter equilíbrio visual'
            ],
            'Importantes:',
            [
              'Usar contraste para destacar elementos',
              'Usar harmonia para conforto visual',
              'Definir hierarquia visual com cores'
            ],
            'Complementares:',
            [
              'Testar combinações antes de aplicar',
              'Usar ferramentas de apoio',
              'Ajustar conforme contexto do projeto'
            ]
          ]
        },
        {
          subtitulo: '🧭 Conclusão e Resumo Final',
          texto: [
            'A cor é uma ferramenta poderosa de comunicação visual.',
            'Quando bem utilizada, ela:',
            [
              'Guia o usuário',
              'Transmite emoções',
              'Reforça a identidade',
              'Melhora a experiência'
            ],
            'Porém exige planejamento, análise do contexto e conhecimento técnico.',
            'Síntese:',
            [
              'Cor = comunicação + emoção',
              'Escolha baseada em psicologia + cultura + objetivo',
              'Use a regra 60-30-10 para equilíbrio',
              'Combine cores com técnica (círculo cromático)',
              'RGB para digital, CMYK para impressão'
            ]
          ]
        }
      ],
      lida: false
    },
    {
      id: 'design_aula6',
      titulo: 'Aula 6 — Tipografia',
      conteudo: [
        {
          subtitulo: '🎯 Tema',
          texto: [
            'A Aula 6 aborda como aplicar a tipografia de forma estratégica em projetos digitais, considerando fatores como legibilidade, alinhamento, tamanho, peso e adaptação a diferentes dispositivos, com o objetivo de criar interfaces claras, funcionais e visualmente equilibradas.'
          ]
        },
        {
          subtitulo: '🔴 Importância do Uso da Tipografia',
          texto: [
            'A tipografia não é apenas estética — ela impacta diretamente a experiência do usuário (UX).',
            'A escolha da fonte influencia:',
            [
              'Legibilidade',
              'Conforto visual',
              'Compreensão da informação'
            ],
            'Tipografia bem aplicada:',
            [
              'Facilita a navegação',
              'Reduz esforço de leitura',
              'Melhora a experiência geral'
            ],
            'Há diferença entre uso em meios impressos e meios digitais (sites, apps).',
            'Antes havia limitação de fontes na web; hoje é possível usar diversas fontes com CSS @font-face e serviços como Google Fonts.'
          ]
        },
        {
          subtitulo: '🔴 Tipos de Fonte: Serifadas vs Sem Serifas',
          texto: [
            'Serifadas (Serif):',
            [
              'Possuem pequenos traços nas extremidades',
              'Indicadas para textos longos',
              'Vantagem: melhor fluxo de leitura e menor cansaço visual',
              'Transmitem tradição e formalidade'
            ],
            'Sem serifas (Sans Serif):',
            [
              'Não possuem esses traços',
              'Indicadas para telas (celulares, computadores)',
              'Vantagem: melhor leitura em resolução digital',
              'Transmitem modernidade e simplicidade'
            ]
          ]
        },
        {
          subtitulo: '🔴 Alinhamento Tipográfico',
          texto: [
            'Função do alinhamento: criar organização, unidade visual e hierarquia.',
            [
              'Alinhamento à esquerda (recomendado): mais natural para leitura, segue padrão ocidental (esquerda → direita).',
              'Justificado: pode causar espaços irregulares ("caminhos de rato"), problema comum na web por falta de hifenização.',
              'Centralizado: uso recomendado para títulos e frases curtas; evitar em textos longos.'
            ]
          ]
        },
        {
          subtitulo: '🔴 Tamanho da Fonte e Responsividade',
          texto: [
            'Padrão navegadores: 16px (desktop).',
            'Mobile: pode começar em 12px.',
            'Ajustar espaçamento entre linhas conforme dispositivo.',
            'Tamanho por faixa etária:',
            [
              'Menor de 7 anos = 24',
              '7–8 anos = 18',
              '8–9 anos = 14',
              '10–11 anos = 12',
              'Adultos = 10'
            ],
            'O tamanho varia conforme a fonte (ex: Garamond vs Minion).',
            [
              'Unidade EM (recomendada): flexível e adaptável a qualquer tela.',
              'Pixels (px): precisão, mas pouca flexibilidade.'
            ]
          ]
        },
        {
          subtitulo: '🔴 Quantidade de Caracteres por Linha',
          texto: [
            'Legibilidade refere-se ao esforço necessário para ler e entender.',
            [
              'Desktop: ideal de 50 a 80 caracteres por linha.',
              'Mobile: ideal de 30 a 35 caracteres.'
            ],
            'Linhas muito longas cansam; linhas muito curtas quebram o ritmo de leitura.'
          ]
        },
        {
          subtitulo: '🔴 Peso da Tipografia (Font Weight)',
          texto: [
            'Peso é a espessura dos traços da fonte.',
            'Principais variações:',
            [
              'Light (fino)',
              'Regular (normal)',
              'Bold (negrito)',
              'Black (muito pesado)',
              'Condensed (mais estreito)',
              'Extended (mais largo)',
              'Outline (contorno)'
            ],
            'Fontes gratuitas têm menos variações; fontes pagas têm mais opções.',
            'Dica CSS: font-weight: normal;'
          ]
        },
        {
          subtitulo: '🔴 Aplicação Estratégica e Resumo Final',
          texto: [
            'A decisão tipográfica deve considerar:',
            [
              'Objetivo do projeto',
              'Público-alvo',
              'Dispositivo (desktop/mobile)',
              'Tipo de conteúdo'
            ],
            'Impacto direto em: UX, clareza da informação e estética do design.',
            'A tipografia deve ser escolhida estrategicamente, não apenas visualmente.',
            'O mesmo texto pode ter experiências totalmente diferentes dependendo da tipografia.',
            'Uma boa tipografia:',
            [
              'Facilita a leitura',
              'Melhora a navegação',
              'Enriquece o design',
              'Influencia a percepção do usuário'
            ]
          ]
        }
      ],
      lida: false
    },
    {
      id: 'design_aula7',
      titulo: 'Aula 7 — A Imagem',
      conteudo: [
        {
          subtitulo: '🎯 Tema',
          texto: [
            'A Aula 7 aborda como utilizar imagens de forma técnica, semiótica e comunicativa, considerando seus significados, formatos e aplicações para criar interfaces visuais eficientes, expressivas e funcionais.'
          ]
        },
        {
          subtitulo: '🔴 Conceito de Imagem',
          texto: [
            'A imagem é um elemento visual com forte poder simbólico e emocional.',
            'Substitui experiências reais na mente do observador.',
            'A imagem é um signo visual que pode ser representacional (realista) ou abstrata.',
            'Atua junto ao texto, reforçando significado.',
            'A imagem não resolve o design sozinha — precisa estar em harmonia com o projeto.'
          ]
        },
        {
          subtitulo: '🔴 Função Comunicativa da Imagem',
          texto: [
            'Associação por contiguidade: imagem + texto criam significado conjunto.',
            'Ex: logotipo com símbolo ativa memória.',
            'Impacto psicológico: a imagem evoca memória, cria associações mentais e influencia percepção.'
          ]
        },
        {
          subtitulo: '🔴 Imagem na Semiótica — Tipos de Signos',
          texto: [
            'Segundo a semiótica: signo = objeto + interpretação + representação.',
            'Tipos de signos:',
            [
              '(1) Ícone — relação por semelhança, representa visualmente o objeto. Ex: ícone da Torre Eiffel = Paris.',
              '(2) Índice (indício) — relação de causa ou evidência, indica algo indiretamente. Ex: fumaça = fogo, pegadas = alguém passou.',
              '(3) Símbolo — relação cultural/convenção, depende de interpretação social. Ex: pomba branca = paz, cruz = cristianismo.'
            ],
            'Observação: nem toda imagem precisa representar algo (imagens abstratas).'
          ]
        },
        {
          subtitulo: '🔴 Percepção e Composição Visual',
          texto: [
            'Uma imagem pode ter múltiplos significados.',
            'Influência da composição:',
            [
              'Posição central = neutra',
              'Deslocada = dinâmica',
              'Pequena = isolamento',
              'Cortada = impacto/força'
            ],
            'Exemplo: pontos formando triângulo — o cérebro interpreta a forma mesmo sem ela existir.'
          ]
        },
        {
          subtitulo: '🔴 Classificação das Imagens',
          texto: [
            [
              'Bitmap: baseado em pixels, usado em fotografias.',
              'Vetor: baseado em fórmulas matemáticas, usado em ilustrações.'
            ],
            'Fotografia: representação real, mensagem direta, alta credibilidade; uso ideal para informações rápidas e realismo.',
            'Ilustração: mais criativa e interpretativa, estimula imaginação; uso ideal para criatividade e comunicação conceitual.',
            'Comparação:',
            [
              'Fotografia: alto realismo, alta objetividade.',
              'Ilustração: alta criatividade, realismo baixo.'
            ]
          ]
        },
        {
          subtitulo: '🔴 Formatos de Imagem',
          texto: [
            [
              'BMP: sem perda de qualidade, mas arquivos grandes.',
              'GIF: compacto, sem perda, máx. 256 cores; indicado para gráficos simples.',
              'PNG: alta qualidade, suporta transparência, arquivo maior; indicado para imagens com transparência.',
              'JPEG: boa compressão, mas perde qualidade; indicado para fotos.',
              'TIFF: alta qualidade, muito pesado; indicado para impressão.'
            ]
          ]
        },
        {
          subtitulo: '🔴 Relação Imagem + Texto',
          texto: [
            'Tipos de interação:',
            [
              '(1) Redundância — texto mais importante, imagem complementa.',
              '(2) Informatividade — imagem mais importante, ex: infográficos.',
              '(3) Complexidade — texto + imagem com mesmo peso.'
            ],
            'Técnicas:',
            [
              'Ancoragem — texto direciona interpretação da imagem.',
              'Relais — texto + imagem se complementam mutuamente.'
            ],
            'Relação incoerente entre imagem e texto prejudica a comunicação.'
          ]
        },
        {
          subtitulo: '🔴 Imagem no Meio Digital',
          texto: [
            'Características:',
            [
              'Interatividade',
              'Dinamismo',
              'Possibilidade de clique, zoom e navegação'
            ],
            'Limitações técnicas:',
            [
              'Velocidade da internet',
              'Peso da imagem',
              'Tempo de carregamento'
            ],
            'Boas práticas:',
            [
              'Escolher formato adequado',
              'Otimizar tamanho',
              'Manter qualidade suficiente',
              'Pensar na experiência do usuário'
            ],
            'Papel do designer: criatividade é essencial, ferramentas não substituem conhecimento, imagem deve seguir o conceito do projeto.'
          ]
        },
        {
          subtitulo: '🧠 Resumo Final',
          texto: [
            'A imagem é um elemento fundamental da comunicação visual, com forte impacto emocional, simbólico e funcional.',
            'Elementos-chave:',
            [
              'Semiótica (ícone, índice, símbolo)',
              'Tipos de imagem (bitmap e vetor)',
              'Fotografia vs ilustração',
              'Formatos (PNG, JPG, etc.)',
              'Interação com texto'
            ],
            'A imagem não comunica sozinha — depende de contexto e composição.',
            'Uma imagem bem utilizada:',
            [
              'Comunica mais rápido que texto',
              'Influencia percepção',
              'Melhora a experiência do usuário',
              'Reforça a mensagem do projeto'
            ]
          ]
        }
      ],
      lida: false
    },
    {
      id: 'design_aula8',
      titulo: 'Aula 8 — O Layout',
      conteudo: [
        {
          subtitulo: '🎯 Tema',
          texto: [
            'A Aula 8 aborda como organizar elementos visuais de forma estratégica para criar interfaces eficientes, legíveis e com boa experiência do usuário (UX), utilizando princípios como contraste, harmonia, composição e grids.'
          ]
        },
        {
          subtitulo: '🔴 Conceito de Layout',
          texto: [
            'Layout é a organização hierárquica dos elementos visuais.',
            'Integra: cores, tipografia e imagens.',
            'Objetivo: garantir legibilidade, usabilidade e comunicação eficiente.',
            'Função: organizar elementos para criar interação intuitiva e facilitar tarefas do usuário.',
            'A forma de apresentação é mais importante que os elementos isolados.',
            [
              'Layout estruturado: mais fácil de entender.',
              'Layout não estruturado: mais criativo, porém mais complexo.'
            ],
            'Técnicas tradicionais de revistas e livros também se aplicam ao digital: grid, regra dos terços e peso visual.'
          ]
        },
        {
          subtitulo: '🔴 Dinâmica do Contraste e Harmonia',
          texto: [
            [
              'Harmonia = organização, equilíbrio.',
              'Contraste = tensão visual, destaque.'
            ],
            'Ambos são necessários e devem ser usados com intenção.',
            'Estados da composição:',
            [
              '(1) Nivelamento (harmonia) — elementos alinhados nos eixos vertical/horizontal, sensação de estabilidade.',
              '(2) Aguçamento (contraste) — elementos fora do eixo, sensação de dinamismo e tensão.',
              '(3) Ambiguidade — nem harmônico nem contrastante, gera confusão visual. ⚠ Evitar.'
            ],
            'Tipos de contraste:',
            [
              'Tom (claro vs escuro)',
              'Cor (diferença de cores)',
              'Forma (regular vs irregular)',
              'Escala (grande vs pequeno)'
            ],
            'Regra: contraste só existe com oposição entre elementos.'
          ]
        },
        {
          subtitulo: '🔴 Técnicas Visuais de Design (Polaridades)',
          texto: [
            'As técnicas funcionam em pares opostos:',
            [
              '(1) Equilíbrio x Instabilidade — equilíbrio = estável e seguro; instabilidade = tensão e movimento visual.',
              '(2) Simetria x Assimetria — simetria = efeito espelho; assimetria = diferentes, mas equilibrados (baseada em proximidade, continuidade e similaridade da Gestalt).',
              '(3) Regularidade x Irregularidade — regularidade = padrão constante; irregularidade = surpresa visual.',
              '(4) Simplicidade x Complexidade — simplicidade = fácil percepção (pregnância); complexidade = muitos elementos, mas pode ser organizada.',
              '(5) Unidade x Fragmentação — unidade = percepção do todo; fragmentação = elementos separados, mas relacionados.',
              '(6) Economia x Profusão — economia = poucos elementos; profusão = muitos elementos (riqueza visual).',
              '(7) Minimização x Exagero — minimização = "menos é mais"; exagero = ampliação de características visuais.'
            ]
          ]
        },
        {
          subtitulo: '🔴 Layout em Interfaces Gráficas',
          texto: [
            'É a etapa crítica do projeto — a interface é o ponto de contato com o usuário.',
            'Três pilares do layout:',
            [
              '(1) Navegação — regra dos 3 cliques, acesso rápido às informações.',
              '(2) Lógica visual — organização intuitiva, uso de princípios visuais.',
              '(3) Templates — estrutura padrão reutilizável, mantém consistência visual.'
            ],
            'Sites imitam estrutura de livros e revistas.'
          ]
        },
        {
          subtitulo: '🔴 Grid (Grade de Layout)',
          texto: [
            'Grid é uma estrutura com linhas e colunas.',
            'Função: organizar elementos e garantir consistência.',
            'Vantagens:',
            [
              'Organização clara',
              'Rapidez no desenvolvimento',
              'Padronização'
            ],
            'O grid não limita a criatividade — serve como guia.',
            'Estrutura comum: grid de 12 colunas (permite várias divisões).',
            'Para responsividade, usar medidas em porcentagem (%).',
            'Fórmula de conversão: objeto ÷ largura total = resultado.',
            'Ex: 300px ÷ 960px = 31,25%.'
          ]
        },
        {
          subtitulo: '🔴 Comportamento do Usuário e Leitura',
          texto: [
            'Padrão ocidental: leitura da esquerda para direita, de cima para baixo.',
            'Aplicação prática: elementos principais devem estar no topo ou à esquerda.',
            'Uso de contraste, cor e peso visual para guiar o olhar.'
          ]
        },
        {
          subtitulo: '🧠 Resumo Final',
          texto: [
            'O layout é a organização estratégica dos elementos visuais, responsável por garantir clareza, usabilidade e impacto visual.',
            'Elementos-chave:',
            [
              'Contraste vs harmonia',
              'Técnicas visuais (polaridades)',
              'Grid e estrutura',
              'Navegação e UX'
            ],
            'Um bom layout não depende só dos elementos, mas de como eles são organizados.',
            'Um layout bem planejado:',
            [
              'Facilita a navegação',
              'Melhora a experiência do usuário',
              'Destaca informações importantes',
              'Torna o design eficiente e profissional'
            ]
          ]
        }
      ],
      lida: false
    }
  ]
},

    // ── PROGRAMAÇÃO ORIENTADA A OBJETOS ─────────────────────────────────
    poo: {
        resumos: [
            {
                id: 'poo_aula1',
                titulo: 'Aula 1 — Fundamentos da POO e Anatomia de Classes',
                conteudo: [
                    {
                        subtitulo: 'Paradigma',
                        texto: 'A POO surge como solução para a complexidade procedural, unificando dados e funções em unidades coesas chamadas objetos.'
                    },
                    {
                        subtitulo: 'Atributos e Métodos',
                        texto: 'Atributos representam o estado interno (o que o objeto conhece), enquanto métodos representam o comportamento ou serviços (o que o objeto faz).'
                    },
                    {
                        subtitulo: 'Abstração',
                        texto: 'Processo de isolar apenas as características essenciais para um contexto, ignorando detalhes irrelevantes para reduzir a carga cognitiva.'
                    },
                    {
                        subtitulo: 'Nomenclatura',
                        texto: 'Java utiliza PascalCase para nomes de classes e camelCase para membros (atributos e métodos).'
                    }
                ],
                lida: false
            },
            {
                id: 'poo_aula2',
                titulo: 'Aula 2 — Sintaxe, Tipagem e Memória',
                conteudo: [
                    {
                        subtitulo: 'Tipagem Forte',
                        texto: 'Java exige a declaração de tipos. Tipos primitivos incluem int, long, double, boolean e char.'
                    },
                    {
                        subtitulo: 'Inferência de Tipo',
                        texto: 'A partir do Java 10, a palavra-chave var permite que o compilador deduza o tipo com base no valor atribuído.'
                    },
                    {
                        subtitulo: 'Gestão de Memória',
                        texto: 'Stack (Pilha): Memória rápida para variáveis locais e referências. Heap (Monte): Onde residem todos os objetos criados com o operador new.'
                    },
                    {
                        subtitulo: 'Strings',
                        texto: 'São imutáveis e gerenciadas em um String Pool para eficiência. A comparação de conteúdo deve ser feita com .equals() e não com ==.'
                    }
                ],
                lida: false
            },
            {
                id: 'poo_aula3',
                titulo: 'Aula 3 — Métodos e Comportamento',
                conteudo: [
                    {
                        subtitulo: 'Princípio DRY',
                        texto: 'Métodos evitam a repetição de lógica (Don\'t Repeat Yourself).'
                    },
                    {
                        subtitulo: 'Passagem de Parâmetros',
                        texto: 'Em Java, é sempre por valor (uma cópia). Para primitivos, a variável original não muda; para objetos, a cópia da referência permite alterar o estado do objeto original.'
                    },
                    {
                        subtitulo: 'Sobrecarga (Overloading)',
                        texto: 'Capacidade de definir múltiplos métodos com o mesmo nome na mesma classe, desde que possuam parâmetros diferentes.'
                    }
                ],
                lida: false
            },
            {
                id: 'poo_aula4',
                titulo: 'Aula 4 — Encapsulamento e Modificadores',
                conteudo: [
                    {
                        subtitulo: 'Encapsulamento',
                        texto: 'Protege o estado do objeto contra modificações externas imprevistas e valores inválidos.'
                    },
                    {
                        subtitulo: 'Modificadores de Acesso',
                        texto: 'public: Acesso total por qualquer classe. private: Acesso apenas dentro da própria classe. protected: Acesso pela classe, subclasses e classes do mesmo pacote.'
                    },
                    {
                        subtitulo: 'Getters e Setters',
                        texto: 'Métodos "guardiões" que permitem ler e validar a alteração de atributos privados.'
                    },
                    {
                        subtitulo: 'Palavra-chave this',
                        texto: 'Refere-se à instância atual do objeto, sendo útil para diferenciar atributos de variáveis locais.'
                    }
                ],
                lida: false
            },
            {
                id: 'poo_aula5',
                titulo: 'Aula 5 — Construtores e Membros Estáticos',
                conteudo: [
                    {
                        subtitulo: 'Construtores',
                        texto: 'Métodos que garantem que um objeto nasça com um estado válido. Devem ter o mesmo nome da classe e não possuem tipo de retorno.'
                    },
                    {
                        subtitulo: 'Membros static',
                        texto: 'Pertencem à classe (forma) e não à instância. Variáveis estáticas são compartilhadas entre todos os objetos da classe, e métodos estáticos não podem acessar membros de instância diretamente.'
                    }
                ],
                lida: false
            },
            {
                id: 'poo_aula6',
                titulo: 'Aula 6 — Herança e Polimorfismo',
                conteudo: [
                    {
                        subtitulo: 'Herança (extends)',
                        texto: 'Relação "É-UM" que permite o reuso de código e a especialização de classes. Java não permite herança múltipla de classes.'
                    },
                    {
                        subtitulo: 'Sobrescrita (@Override)',
                        texto: 'Redefinição de um método herdado da classe pai para fornecer um comportamento mais específico no filho.'
                    },
                    {
                        subtitulo: 'Palavra-chave super',
                        texto: 'Usada para referenciar o construtor ou métodos da superclasse.'
                    },
                    {
                        subtitulo: 'Polimorfismo',
                        texto: 'Capacidade de diferentes objetos responderem ao mesmo método de formas distintas, permitindo tratar subclasses como sua classe base.'
                    }
                ],
                lida: false
            },
            {
                id: 'poo_aula7',
                titulo: 'Aula 7 — Abstração Avançada e Interfaces',
                conteudo: [
                    {
                        subtitulo: 'Classes Abstratas',
                        texto: 'Modelos incompletos que não podem ser instanciados. Servem como base obrigatória para outras classes.'
                    },
                    {
                        subtitulo: 'Interfaces',
                        texto: 'Definem contratos de software (comportamentos obrigatórios). Uma classe pode implementar múltiplas interfaces, promovendo o desacoplamento.'
                    }
                ],
                lida: false
            },
            {
                id: 'poo_aula8',
                titulo: 'Aula 8 — Tratamento de Exceções',
                conteudo: [
                    {
                        subtitulo: 'Exceções',
                        texto: 'Erros em tempo de execução que interrompem o fluxo normal.'
                    },
                    {
                        subtitulo: 'Estrutura de Controle',
                        texto: 'try: Código que pode gerar erro. catch: Captura e trata a falha. finally: Bloco que sempre executa, ideal para fechar recursos.'
                    },
                    {
                        subtitulo: 'Tipos',
                        texto: 'Checked (Checadas): Verificadas na compilação, o tratamento é obrigatório. Unchecked (Não checadas): Erros de lógica ou de execução (ex: ArithmeticException).'
                    },
                    {
                        subtitulo: 'Lançamento',
                        texto: 'throw dispara uma exceção manualmente, enquanto throws declara na assinatura do método que ele pode gerar um erro.'
                    }
                ],
                lida: false
            }
        ],
    },

    // ── REDES DE COMPUTADORES ────────────────────────────────────────────
    redes: {
        resumos: [
            {
                id: 'redes_aula1',
                titulo: 'Aula 01/02 — Introdução a Redes de Computadores',
                conteudo: [
                    {
                        subtitulo: '1.1 Contexto da Era da Informação',
                        texto: 'O avanço tecnológico do século XX foi marcado principalmente pelo desenvolvimento na área de informação, incluindo: Aquisição de dados, Processamento, Armazenamento e Distribuição. No século XXI, essas áreas passaram por um processo de convergência tecnológica, ou seja, começaram a se integrar completamente, eliminando diferenças práticas entre elas. Conceitos-chave: Revolução da Informação (surgimento de redes globais, crescimento da indústria da informática); Convergência Tecnológica (integração entre computação e comunicação, sistemas antes separados passam a funcionar juntos); Demanda por Sofisticação (quanto maior o poder de processamento, maior a necessidade de sistemas complexos de distribuição de dados).'
                    },
                    {
                        subtitulo: '2.1 O que é uma Rede de Computadores?',
                        texto: 'Uma rede de computadores é um conjunto de computadores autônomos interconectados por uma tecnologia, capazes de trocar informações. Características fundamentais: Autonomia (cada computador funciona de forma independente), Interconexão (comunicação entre máquinas), Diversidade de meios (comunicação pode ocorrer via cabos de cobre, fibra óptica ou ondas eletromagnéticas como Wi-Fi e satélite).'
                    },
                    {
                        subtitulo: '3.1 Redes vs Sistemas Distribuídos',
                        texto: 'Diferença principal: em Redes de Computadores o usuário vê várias máquinas, com baixa transparência e sem software intermediário obrigatório. Em Sistemas Distribuídos o usuário vê um único sistema, com alta transparência e middleware essencial. Conceitos importantes: Middleware (software que cria a ilusão de um sistema único), Coesão e Transparência (características dos sistemas distribuídos), Visibilidade do Hardware (em redes, o usuário percebe diferentes máquinas e sistemas).'
                    },
                    {
                        subtitulo: '4.1 Aplicações Comerciais — Compartilhamento de Recursos',
                        texto: 'Objetivo principal: disponibilizar recursos independentemente da localização. Benefícios: Economia de escala (compartilhamento de impressoras, servidores e armazenamento), Disponibilidade de dados (acesso remoto a informações como sistemas financeiros), VPN — Virtual Private Network (conecta redes separadas como se fossem uma só).'
                    },
                    {
                        subtitulo: '4.2 Modelo Cliente-Servidor',
                        texto: 'Estrutura: Servidor (fornece serviços ou dados) e Cliente (solicita serviços). Características: comunicação baseada em requisições, alta escalabilidade (um servidor atende muitos clientes). Representação: um servidor central conectado a vários clientes, comunicação ocorre via rede.'
                    },
                    {
                        subtitulo: '4.3 Comunicação Empresarial',
                        texto: 'Tecnologias: VoIP — Voice over IP (ligações pela internet), Videoconferência (comunicação visual em tempo real), Compartilhamento de desktop (controle remoto de telas) e E-commerce (comércio eletrônico).'
                    },
                    {
                        subtitulo: '5.1 e 5.2 Aplicações Domésticas',
                        texto: 'Uso da Internet: acesso à informação, comunicação e entretenimento. Lei de Metcalfe: o valor de uma rede cresce proporcionalmente ao quadrado do número de usuários. Tipos de Conteúdo: Bibliotecas digitais (e-books, artigos científicos), Conteúdo colaborativo (Wikis como a Wikipedia), Entretenimento digital (música MP3, vídeos HD, IPTV).'
                    },
                    {
                        subtitulo: '6.1 Comunicação Peer-to-Peer (P2P)',
                        texto: 'Modelo onde não há hierarquia fixa e todos podem ser cliente e servidor. Características: Descentralização e Compartilhamento direto. Exemplos: BitTorrent e redes sociais. Vários computadores conectados diretamente entre si, sem servidor central.'
                    },
                    {
                        subtitulo: '7.1 Computação Ubíqua (IoT) — Internet das Coisas',
                        texto: 'Integração de dispositivos do cotidiano com a internet. Tecnologias: Sensores inteligentes (monitoramento em tempo real), RFID — Radio Frequency Identification (tecnologia sem fio que usa ondas de rádio para identificar, rastrear e gerenciar objetos, produtos ou pessoas, substitui códigos de barras), Monitoramento remoto (segurança e saúde).'
                    },
                    {
                        subtitulo: '8.1 Questões Sociais e Éticas',
                        texto: 'Problemas principais: Privacidade (uso de cookies e rastreamento), Segurança (ataques: Phishing, Vírus, Botnets), Anonimato vs Responsabilidade (liberdade vs controle), Neutralidade da rede (debate sobre tratamento igual de dados).'
                    },
                    {
                        subtitulo: '10.1 e 10.2 Tecnologias de Transmissão',
                        texto: 'Broadcast: canal único compartilhado, todos recebem a mensagem. Tipos: Unicast (um → um) e Multicast (um → grupo). Analogia: como falar em uma sala onde todos escutam, mas só um responde. Ponto a Ponto: conexão direta entre pares. Características: uso de roteamento, pode passar por vários nós, maior eficiência (menos colisões).'
                    },
                    {
                        subtitulo: '11. Classificação por Escala',
                        texto: 'PAN (Personal Area Network): alcance ~1 metro. Tecnologias: Bluetooth, RFID, Smartcards. Aplicações: periféricos e dispositivos médicos. LAN (Local Area Network): alcance até 1 km, alta velocidade (100 Mbps a 10 Gbps), baixo atraso. Tecnologias: Wi-Fi (802.11) e Ethernet (switches). Recursos: VLAN (segmentação lógica). MAN (Metropolitan Area Network): alcance cidade (~10 km). Exemplos: TV a cabo e internet urbana. Tecnologia: WiMAX (802.16). WAN (Wide Area Network): alcance países/continentes. Componentes: Hosts, Roteadores e Backbone. Características: longas distâncias e uso de sub-redes.'
                    },
                    {
                        subtitulo: '12. Topologias de WAN',
                        texto: 'Tipos: WAN dedicada (linhas exclusivas) e VPN (rede virtual sobre a internet). Vantagens da VPN: menor custo e maior flexibilidade.'
                    },
                    {
                        subtitulo: '13. Redes Sem Fio e Móveis',
                        texto: 'Diferença importante: Sem fio (não usa cabos) e Móvel (dispositivo pode se mover). Tecnologias: redes celulares (3G/4G), satélites e Bluetooth vs Wi-Fi. Combinações possíveis: Desktop (não sem fio, não móvel), Notebook (não sem fio, móvel), Prédio sem fio (sem fio, não móvel), Dispositivo móvel (sem fio e móvel).'
                    },
                    {
                        subtitulo: '14.1 Redes Interligadas (Internets)',
                        texto: 'Uma internet (minúsculo) é um conjunto de redes diferentes interligadas. Elementos: Gateway (faz a conexão entre redes diferentes), Heterogeneidade (integra tecnologias distintas) e A Internet (maior exemplo mundial).'
                    },
                    {
                        subtitulo: '📝 Resumo Final Simplificado',
                        texto: 'Redes permitem compartilhar dados e recursos. Existem diferentes modelos e arquiteturas. A classificação depende de: Tecnologia (broadcast vs ponto a ponto) e Escala (PAN → WAN). A internet é uma rede de redes. Redes impactam empresas, pessoas e a sociedade.'
                    }
                ],
                lida: false
            },
            {
                id: 'redes_aula2',
                titulo: 'Aula 03/04 — Meios de Transmissão e Dispositivos de Rede',
                conteudo: [
                    {
                        subtitulo: '1.1 Camada Física e Transmissão de Bits',
                        texto: 'A camada física é responsável por transmitir bits puros (0 e 1) através de um meio de comunicação. Objetivo central: garantir que um bit enviado seja recebido corretamente. Trabalha com aspectos físicos, não lógicos. Elementos envolvidos: sinais elétricos ou ópticos, tempo de transmissão (nanosegundos) e sentido da comunicação (simplex, half-duplex, full-duplex). Componentes fundamentais: Representação Digital (bits são representados por níveis de tensão), Interfaces Mecânicas (define conectores, cabos e pinagem) e Transmissão Bruta (apenas transporte de sinais, sem interpretação de dados).'
                    },
                    {
                        subtitulo: '1.2.1 Meios Guiados — Fio de Cobre',
                        texto: 'Muito usado em redes locais (LANs). Características: tecnologia madura, limitação de distância por atenuação do sinal. Aplicações: Ethernet clássica (um único cabo compartilhado — broadcast) e DSL — Digital Subscriber Line (usa linha telefônica para dados). Limitações: atraso, erros de transmissão e perda de sinal com distância.'
                    },
                    {
                        subtitulo: '1.2.2 Meios Guiados — Fibra Óptica',
                        texto: 'Tecnologia moderna de alta velocidade. Características: muito maior desempenho que o cobre, usa luz para transmitir dados. Aplicações: FTTH — Fiber to the Home (fibra diretamente na casa do usuário) e Backbones de Internet (conectam grandes redes globais). Vantagens: imune a interferência eletromagnética, baixíssimo atraso e alta largura de banda (Mbps → Gbps).'
                    },
                    {
                        subtitulo: '1.3.1 Meios Não Guiados — Rádio e Wi-Fi',
                        texto: 'Base das redes wireless modernas. Características: usa frequências de rádio, comunicação compartilhada. Aplicações: Wi-Fi (IEEE 802.11) e redes locais sem fio. Vantagens: mobilidade e flexibilidade.'
                    },
                    {
                        subtitulo: '1.3.2 e 1.3.3 Redes Celulares e Satélites',
                        texto: 'Redes Celulares: redes WAN sem fio, controladas por estações-base. Satélites de Comunicação: comunicação via satélite em órbita, cada estação terrestre envia e recebe dados. Características: comunicação do tipo broadcast, cobertura de grandes áreas. Uso: regiões remotas e redes globais.'
                    },
                    {
                        subtitulo: '2.1 Dispositivos de Rede — Modems',
                        texto: 'Dispositivo que converte sinais. Tipos: DSL (usa linha telefônica), Cabo (usa rede de TV) e Dial-up (conexão antiga, até 56 kbps). Função: converter sinal digital ↔ analógico.'
                    },
                    {
                        subtitulo: '2.2 Ponto de Acesso (Access Point - AP)',
                        texto: 'Função: atua como estação-base Wi-Fi. Responsabilidades: conectar dispositivos sem fio à rede e encaminhar pacotes. Modos: Infraestrutura (com AP) e Ad hoc (P2P, sem AP).'
                    },
                    {
                        subtitulo: '2.3 Switches (Camada 2)',
                        texto: 'Função: encaminhar pacotes para o destino correto. Características: conexões ponto a ponto e usa endereço de destino. Vantagens: evita colisões e escalabilidade.'
                    },
                    {
                        subtitulo: '2.4 Roteadores (Camada 3)',
                        texto: 'Função: conectar redes diferentes. Características: escolhe o melhor caminho (roteamento) e usa tabelas de roteamento. Responsabilidades: controle de tráfego e interligação de LANs e WANs.'
                    },
                    {
                        subtitulo: '2.5 Gateways',
                        texto: 'Função: conectar redes incompatíveis. Características: tradução de protocolos e conversão de hardware/software.'
                    },
                    {
                        subtitulo: '3.1 Modelos de Referência — Arquitetura em Camadas',
                        texto: 'Objetivo: reduzir complexidade. Conceitos: Camada (função específica), Interface (comunicação entre camadas) e Entidades pares (comunicação entre sistemas).'
                    }
                ],
                lida: false
            },
            {
                id: 'redes_aula3',
                titulo: 'Aula 05 — Topologias de Rede, Métricas e Padronização',
                conteudo: [
                    {
                        subtitulo: '1.1 Topologias de Rede — Conceito Geral',
                        texto: 'A topologia de rede define como os dispositivos (computadores, roteadores, switches) estão organizados física e logicamente. Impactos da topologia: Escalabilidade (facilidade de crescimento da rede), Custo (quantidade de cabos e equipamentos) e Tolerância a falhas (capacidade de continuar funcionando).'
                    },
                    {
                        subtitulo: '1.2.1 Topologia em Barramento',
                        texto: 'Definição: todos os dispositivos compartilham um único cabo central (backbone). Funcionamento: comunicação em broadcast (difusão), todos recebem os dados e apenas o destino processa, os outros ignoram. Características: meio compartilhado, necessidade de verificar se o canal está livre e uso histórico na Ethernet antiga. Problema crítico: ponto único de falha — se o cabo quebra, toda a rede cai.'
                    },
                    {
                        subtitulo: '1.2.2 Topologia Ponto a Ponto',
                        texto: 'Definição: conexão direta entre dois dispositivos apenas. Funcionamento: comunicação exclusiva (unicast). Características: simples e eficiente, sem colisões e base das redes WAN. Aplicação: conexões entre cidades (ex: redes SONET).'
                    },
                    {
                        subtitulo: '1.2.3 Topologia em Estrela',
                        texto: 'Definição: todos os dispositivos conectados a um nó central (switch). Funcionamento: o switch decide para onde enviar os dados. Características: isolamento de falhas (um cabo quebrado afeta só um dispositivo), fácil expansão e muito usada em redes atuais (LANs).'
                    },
                    {
                        subtitulo: '1.2.4 Topologia em Anel',
                        texto: 'Definição: dispositivos conectados formando um circuito fechado. Funcionamento: dados circulam em um único sentido e cada nó atua como repetidor. Características: regeneração de sinal, uso de token (controle de acesso) e latência previsível. Importante: ideal para sistemas que precisam de tempo real.'
                    },
                    {
                        subtitulo: '1.2.5 Topologia em Árvore',
                        texto: 'Definição: estrutura hierárquica baseada na estrela. Funcionamento: switches conectados em níveis (cascata). Características: organização por setores (ex: departamentos), facilita gerenciamento e permite segmentação da rede. Atenção: muitos níveis geram aumento da latência.'
                    },
                    {
                        subtitulo: '1.2.6 Topologia em Malha (Mesh)',
                        texto: 'Definição: dispositivos com múltiplas conexões redundantes. Funcionamento: dados podem seguir vários caminhos. Características: alta disponibilidade, roteamento dinâmico e base da Internet. Trade-off: alta confiabilidade (vantagem) vs alto custo e complexidade (desvantagem).'
                    },
                    {
                        subtitulo: '2.1 Métricas de Desempenho — Vazão (Throughput)',
                        texto: 'Definição: quantidade de dados transmitidos por unidade de tempo. Unidades: Mbps (1.000.000 bits/s) e Gbps (1.000.000.000 bits/s). Observações: redes cabeadas têm desempenho superior às redes sem fio.'
                    },
                    {
                        subtitulo: '2.2 Atraso (Delay / Latência)',
                        texto: 'Definição: tempo que os dados levam para chegar ao destino. Tipos: Atraso de propagação (tempo no meio físico) e Atraso de processamento (tempo em roteadores). Medidas: microssegundos (µs) e nanossegundos (ns). Importância: crítico para jogos online, streaming e chamadas de vídeo.'
                    },
                    {
                        subtitulo: '2.3 Congestionamento e Perda de Dados',
                        texto: 'Definição: ocorre quando a rede não suporta o volume de tráfego. Consequências: aumento de atraso e perda de pacotes. Elementos: Gargalos (caminhos sobrecarregados) e Buffers cheios (descarte de pacotes). Solução: sistemas reduzem envio automaticamente.'
                    },
                    {
                        subtitulo: '2.4 Qualidade de Serviço (QoS)',
                        texto: 'Definição: mecanismos que priorizam determinados tipos de tráfego. Componentes: Jitter (variação do atraso) e prioridade de tráfego. Aplicações: voz e vídeo precisam de baixa latência; downloads precisam de alta vazão.'
                    },
                    {
                        subtitulo: '2.5 Eficiência — Multiplexação Estatística',
                        texto: 'Definição: compartilhamento dinâmico do canal de comunicação. Comparação: Estática (recursos fixos, ineficiente) vs Dinâmica (uso sob demanda, eficiente). Vantagem: evita desperdício de banda.'
                    },
                    {
                        subtitulo: '3.1 e 3.2 Padronização de Redes',
                        texto: 'Objetivo: garantir que dispositivos diferentes consigam se comunicar. Benefícios: interoperabilidade, compatibilidade e evolução tecnológica. Principais organizações: ISO (criadora do modelo OSI, foco em modelos teóricos) e IEEE (foco em hardware e redes locais — IEEE 802.3 → Ethernet e IEEE 802.11 → Wi-Fi).'
                    },
                    {
                        subtitulo: '3.3 Padronização da Internet',
                        texto: 'IETF: define padrões da Internet. RFC: documentos oficiais dos protocolos. Exemplos: TCP e IP. Característica: desenvolvimento aberto e colaborativo.'
                    },
                    {
                        subtitulo: '4.1 e 4.2 Métricas de Erro (Confiabilidade)',
                        texto: 'Problema: transmissão pode sofrer interferências de ruído elétrico e alteração de bits. Soluções — técnicas: Detecção de erros (identifica falhas), Correção de erros (recupera dados) e Retransmissão (reenvio de dados).'
                    },
                    {
                        subtitulo: '📝 Resumo Final',
                        texto: 'Topologias definem a estrutura da rede. Desempenho envolve vazão, latência e congestionamento. QoS garante priorização de tráfego. Padronização garante comunicação global. Erros são detectados e corrigidos automaticamente.'
                    }
                ],
                lida: false
            },
            {
                id: 'redes_aula4',
                titulo: 'Aula 06 — Representação de Dados e Fluxo de Transmissão',
                conteudo: [
                    {
                        subtitulo: '1.1 Conceito Fundamental — Representação de Dados',
                        texto: 'Na comunicação de dados, toda informação é convertida em bits (0 e 1). Isso permite que diferentes tipos de dados sejam transmitidos no mesmo sistema. Computadores não entendem texto, imagem ou som diretamente — eles trabalham apenas com dois estados: ligado (1) e desligado (0).'
                    },
                    {
                        subtitulo: '1.2 Texto e Codificação',
                        texto: 'O texto é representado por padrões binários, utilizando sistemas de codificação. Principais padrões: ASCII (7 bits → 128 símbolos) e Unicode (até 32 bits → suporta praticamente todos os idiomas). Representação de números: diferente do texto, convertidos diretamente para binário. Exemplo: 6 → 110.'
                    },
                    {
                        subtitulo: '1.3 Imagens e Digitalização',
                        texto: 'Imagens são representadas por uma matriz de pixels. Pixel: menor unidade da imagem, define a resolução. Cores: Monocromático (1 bit, preto/branco) e Colorido (sistema RGB). Profundidade de cor: número de bits por pixel, define a quantidade de cores possíveis. Representação: imagem dividida em grade (matriz), cada célula = pixel, cada pixel = valor binário de cor.'
                    },
                    {
                        subtitulo: '1.4 Áudio e Vídeo',
                        texto: 'São sinais contínuos (analógicos) que precisam ser convertidos para digital. Áudio — processo: captura do som (analógico), amostragem e conversão para binário. Cada amostra representa o valor do som em um instante. Vídeo: sequência de imagens (frames). Taxa de quadros (FPS): 24 (cinema), 30 (TV) e 60 (alta fluidez). Representação: sinal contínuo sendo "quebrado" em pontos (amostras) e depois convertido em números binários.'
                    },
                    {
                        subtitulo: '1.5 Analogia: Alfabeto de Dois Símbolos',
                        texto: 'Toda informação pode ser reduzida a dois estados: 0 e 1. Analogia: comunicação como piscar de lanterna, padrões de piscadas formam mensagens. Conceitos-chave: Unificação (todos os dados viram bits) e Eficiência (permite compressão).'
                    },
                    {
                        subtitulo: '2.1 e 2.2 Fluxo de Dados',
                        texto: 'Define como os dados trafegam entre dispositivos. Tipos de comunicação: Simplex (uma direção, sem simultaneidade — só envia), Half-Duplex (duas direções, não simultâneo — envia e recebe, mas alternado) e Full-Duplex (duas direções simultâneas — comunicação ao mesmo tempo).'
                    },
                    {
                        subtitulo: '3.1 e 3.2 Deficiências na Transmissão',
                        texto: 'Durante a transmissão, o sinal pode sofrer alterações e perdas. Principais problemas: Atenuação (perda de energia do sinal; solução: amplificadores), Distorção (alteração na forma do sinal; ocorre quando frequências chegam em tempos diferentes) e Ruído (interferência externa). Tipos de ruído: térmico, induzido, crosstalk e impulso.'
                    },
                    {
                        subtitulo: '3.3 Relação Sinal-Ruído (SNR)',
                        texto: 'Define a qualidade da comunicação. Interpretação: SNR Alta = boa qualidade; SNR Baixa = má qualidade. Representação: sinal limpo → alta SNR; sinal distorcido → baixa SNR.'
                    },
                    {
                        subtitulo: '📝 Conclusão da Aula',
                        texto: 'Toda informação é convertida em bits (0 e 1). Dados podem ser texto, imagem, áudio ou vídeo. Comunicação depende do fluxo de dados (simplex, half-duplex, full-duplex). Sinais sofrem problemas como atenuação, distorção e ruído. A qualidade da transmissão depende da SNR.'
                    }
                ],
                lida: false
            }
        ],
    },

    // ── BANCO DE DADOS ───────────────────────────────────────────────────
    banco: {
        resumos: [
            {
                id: 'banco_aula1',
                titulo: 'Aula 1 — Introdução a Banco de Dados',
                conteudo: [
                    {
                        subtitulo: 'Objetivos',
                        texto: 'Entender o contexto histórico dos bancos de dados; entender o que é um banco de dados e por que sistemas de banco de dados (SBD) e os sistemas de gerenciamento de banco de dados (SGBDs) são úteis; compreender os principais elementos e características de banco de dados; entender a importância da abstração na construção de um banco de dados e como essa abstração é desenvolvida por meio de modelos de dados em diferentes níveis.'
                    },
                    {
                        subtitulo: '1.1 Armazenamento de Dados Antes da Computação',
                        texto: 'Antes do uso de computadores, as organizações armazenavam dados manualmente: cadernetas, fichas físicas e pastas organizadas por ordem lógica. Problemas desse modelo: atualização trabalhosa, geração de relatórios demorada, alto risco de inconsistência e dificuldade de escalabilidade.'
                    },
                    {
                        subtitulo: '1.2 Surgimento dos Bancos de Dados (Anos 60)',
                        texto: 'Na década de 1960 surgem os primeiros Sistemas Gerenciadores de Banco de Dados (SGBDs). Características iniciais: acesso por ponteiros de baixo nível, estruturas rígidas e processamento limitado.'
                    },
                    {
                        subtitulo: '1.3 Modelo Relacional (Anos 70)',
                        texto: 'Na década de 1970, Edgar Frank Codd publicou o artigo "A Relational Model of Data for Large Shared Data Banks". Contribuições: introduziu o Modelo Relacional, dados organizados em tabelas, base matemática (Teoria dos Conjuntos e Álgebra Relacional) e independência lógica e física dos dados. Esse modelo se tornou o mais utilizado até hoje.'
                    },
                    {
                        subtitulo: '1.4 Modelo Entidade-Relacionamento (ER)',
                        texto: 'Também na década de 70, Peter Chen propôs o Modelo ER (Entidade-Relacionamento). Permitiu: modelar dados de forma conceitual, focar nas entidades e relacionamentos e projetar banco antes da implementação física.'
                    },
                    {
                        subtitulo: '1.5 Linguagem SQL',
                        texto: 'Ainda nos anos 70 surge a SQL: linguagem padrão para bancos relacionais, permite manipulação e consulta de dados e é base para praticamente todos os SGBDs relacionais.'
                    },
                    {
                        subtitulo: '1.6 Comercialização (Anos 80)',
                        texto: 'Na década de 80, os SGBDs tornaram-se populares comercialmente com Oracle Database e IBM DB2. Posteriormente: SQL Server, MySQL e PostgreSQL.'
                    },
                    {
                        subtitulo: '1.7 Orientação a Objetos (Anos 90)',
                        texto: 'Com a popularização da Programação Orientada a Objetos (POO), dados passaram a ser organizados por classes, atributos e objetos.'
                    },
                    {
                        subtitulo: '1.8 Bancos NoSQL (Anos 2000)',
                        texto: 'Surge o movimento NoSQL (Not Only SQL). Características: alta escalabilidade, flexibilidade de estrutura, uso em Big Data e aplicações web em tempo real. Tipos: orientado a documentos, orientado a grafos, chave-valor e orientado a colunas.'
                    },
                    {
                        subtitulo: '2.1 Banco de Dados (BD)',
                        texto: 'Um Banco de Dados é uma coleção de dados relacionados que: representam um aspecto do mundo real, são logicamente coerentes e possuem propósito específico. Propriedades: persistência, organização estruturada e compartilhamento controlado.'
                    },
                    {
                        subtitulo: '2.2 Sistema Gerenciador de Banco de Dados (SGBD)',
                        texto: 'Software responsável por definir, construir, manipular e compartilhar um banco de dados. Funções principais: (1) definição de dados, (2) armazenamento físico, (3) manipulação, (4) controle de acesso e (5) controle de concorrência.'
                    },
                    {
                        subtitulo: '3. Dado, Fato, Informação e Metadado',
                        texto: 'Dado: elemento bruto, sem significado isolado. Ex: "Perna". Fato: conjunto de dados relacionados que representa ocorrência do mundo real. Informação: dados processados, organizados com significado, apoiam decisões. Ex: total de vendas no mês. Conhecimento: informação interpretada, gera aprendizado, base para estratégia. Metadados: dados sobre dados — descrevem estrutura, tipo, restrições e formato; ficam armazenados no catálogo do SGBD.'
                    },
                    {
                        subtitulo: '4.1 Arquiteturas de Servidor',
                        texto: 'File Server: arquivos compartilhados, processamento no cliente, baixa performance em grandes volumes. Database Server: processamento no servidor, melhor desempenho, multiusuário eficiente. Web Server: disponibiliza recursos via internet, pode integrar banco de dados.'
                    },
                    {
                        subtitulo: '4.2 Estruturas Relacionais',
                        texto: 'Tabela: conjunto de linhas e colunas, representa uma entidade. Entidade: objeto do mundo real com características próprias. Ex: Cliente. Registro (Tupla ou Linha): instância da entidade, conjunto de campos. Campo (Atributo): característica da entidade. Ex: Nome, CPF, Endereço.'
                    },
                    {
                        subtitulo: '4.3 Chaves',
                        texto: 'Chave Primária (PK): identificador único, não pode repetir e não pode ser nulo. Chave Estrangeira (FK): relaciona tabelas, pode repetir e referencia a PK de outra tabela.'
                    },
                    {
                        subtitulo: '5.1 Transação',
                        texto: 'Unidade lógica de trabalho que: executa operações, deve manter integridade e não pode sofrer interferência externa.'
                    },
                    {
                        subtitulo: '5.2 CRUD',
                        texto: 'Create (Inserção): INSERT INTO Clientes (...). Read (Consulta): SELECT IdCliente, Nome FROM Clientes. Update (Atualização): UPDATE Clientes SET Nome = \'José Alterado\' WHERE IdCliente = 1. Delete (Exclusão): DELETE FROM Clientes WHERE IdCliente = 1.'
                    },
                    {
                        subtitulo: '5.3 Controle de Transação',
                        texto: 'BEGIN TRANSACTION: inicia transação lógica. @@ROWCOUNT: verifica quantidade de registros afetados. COMMIT: confirma alteração. ROLLBACK: desfaz operação. Boas práticas: sempre usar WHERE e validar antes de confirmar.'
                    },
                    {
                        subtitulo: '6. Níveis de Abstração em Banco de Dados',
                        texto: 'A abstração permite ocultar complexidade. Nível Físico: como os dados são armazenados — bytes, blocos, estrutura de arquivos; usuário comum não acessa esse nível. Nível Lógico: quais dados existem, tipos de dados, relacionamentos; responsabilidade do DBA. Nível de Visão (ou Conceitual): o que cada usuário enxerga, interface gráfica, restrições de acesso e segurança. Ex: cliente vê apenas seus dados.'
                    }
                ],
                lida: false
            },
            {
                id: 'banco_aula2',
                titulo: 'Aula 2 — Características de um SGBD',
                conteudo: [
                    {
                        subtitulo: '🎯 Objetivos da Aula',
                        texto: 'Compreender as definições básicas e os principais conceitos sobre SGBDs; identificar os principais componentes de um Sistema Gerenciador de Banco de Dados; entender as principais características que diferenciam SGBDs do processamento tradicional de arquivos; explicar a arquitetura de três esquemas (ANSI/SPARC); reconhecer os principais SGBDs do mercado e suas características.'
                    },
                    {
                        subtitulo: '🔎 Definição de Banco de Dados e SGBD',
                        texto: 'Um Banco de Dados (BD) pode ser entendido como um repositório organizado de dados, comparável a um "armário eletrônico de arquivamento", onde informações são armazenadas para posterior consulta e manipulação. O Sistema Gerenciador de Banco de Dados (SGBD) é: uma coleção de programas (software), responsável por criar, manter e controlar o acesso ao banco de dados, capaz de permitir operações como Inserção (INSERT), Consulta (SELECT), Atualização (UPDATE) e Exclusão (DELETE). Definição técnica: um SGBD é um software de propósito geral que facilita os processos de definição, construção, manipulação e compartilhamento de bancos de dados entre múltiplos usuários e aplicações. Observação importante: "Dado" refere-se ao valor armazenado. "Informação" refere-se ao dado com significado para o usuário. No contexto da disciplina, os termos podem aparecer como sinônimos.'
                    },
                    {
                        subtitulo: '🔎 Componentes Básicos de um SGBD',
                        texto: 'Um sistema de banco de dados é composto por quatro elementos principais: (1) Dados, (2) Hardware, (3) Software (SGBD) e (4) Usuários.'
                    },
                    {
                        subtitulo: '🔎 Dados',
                        texto: 'Em sistemas multiusuários: os dados são integrados → redução de redundância; os dados são compartilhados → vários usuários acessam simultaneamente. Exemplo prático — em um sistema universitário: Tabela Disciplina e Tabela Funcionário; a especialidade do professor não precisa estar duplicada na tabela Disciplina, pois pode ser obtida por relacionamento. Conceitos-chave: integração = unificação de arquivos; compartilhamento = acesso simultâneo controlado.'
                    },
                    {
                        subtitulo: '🔎 Hardware',
                        texto: 'O hardware dá suporte físico ao SGBD e envolve: armazenamento secundário (HD e SSD), memória principal (RAM) e processador (CPU). Pontos críticos para desempenho: (1) leitura e gravação em disco, (2) consumo de CPU e (3) consumo de memória. Problemas nesses recursos impactam diretamente a performance do banco.'
                    },
                    {
                        subtitulo: '🔎 Software (SGBD)',
                        texto: 'O SGBD é a camada intermediária entre usuário, hardware e dados. Ele: processa requisições, controla acesso e garante integridade. Observação conceitual: no mercado, muitas vezes "Banco de Dados" é usado como sinônimo de SGBD, embora tecnicamente não seja correto.'
                    },
                    {
                        subtitulo: '🔎 Usuários',
                        texto: 'Três classes principais: (1) Desenvolvedores — criam aplicações, utilizam linguagens como Java e C++, enviam comandos SQL ao SGBD; (2) Usuários finais — acessam via interface ou aplicação, executam consultas e operações básicas; (3) DBA (Administrador de Banco de Dados) — garante segurança, controla desempenho e gerencia riscos e otimizações.'
                    },
                    {
                        subtitulo: '🔎 Diferença entre SGBD e Processamento Tradicional de Arquivos',
                        texto: 'No modelo tradicional: cada aplicação mantém seus próprios arquivos, alta redundância e dificuldade de atualização consistente. No modelo com SGBD: repositório único, acesso compartilhado e redução de redundância.'
                    },
                    {
                        subtitulo: '🔎 Natureza Autodescritiva',
                        texto: 'O SGBD mantém dados e metadados. Metadados: estrutura das tabelas, tipos de dados e restrições — armazenados no catálogo do SGBD.'
                    },
                    {
                        subtitulo: '🔎 Independência Programa-Dados e Abstração',
                        texto: 'A estrutura dos dados fica separada das aplicações. Isso permite: independência programa-dados e independência programa-operação. Abstração: usuários interagem com representações conceituais sem conhecer detalhes físicos. Exemplo: cálculo de média de notas sem saber como a operação é implementada internamente.'
                    },
                    {
                        subtitulo: '🔎 Múltiplas Visões e Controle de Concorrência',
                        texto: 'Múltiplas Visões: um SGBD permite diferentes usuários acessarem diferentes perspectivas (views) do mesmo banco. Controle de Concorrência e Transações: em ambientes multiusuários, vários usuários acessam simultaneamente e o SGBD deve controlar conflitos. Exemplo: compra de um único produto em estoque por dois usuários ao mesmo tempo — o sistema deve garantir integridade e evitar inconsistência.'
                    },
                    {
                        subtitulo: '4️⃣ Arquitetura de Três Esquemas (ANSI/SPARC)',
                        texto: 'A arquitetura divide o sistema em três níveis: (1) Interno, (2) Conceitual e (3) Externo. Objetivo: separar aplicações do armazenamento físico e garantir independência de dados. Nível Interno: próximo ao armazenamento físico; define como os dados são armazenados; inclui estrutura física, tamanho em bytes e caminhos de acesso. Nível Conceitual: representação lógica global do banco; descreve entidades, relacionamentos e restrições; não inclui detalhes físicos. Nível Externo: visão do usuário; mostra apenas parte do banco; simplifica interação.'
                    },
                    {
                        subtitulo: '5️⃣ Principais SGBDs do Mercado',
                        texto: 'Oracle: criado entre 1970–1980, linguagem principal PL/SQL, alta escalabilidade, indicado para grandes volumes, exige hardware robusto. SQL Server: criado pela Microsoft em 1989, linguagem T-SQL, alta segurança (criptografia), forte integração com produtos Microsoft. MySQL: relacional, open source, popular em aplicações web, utilizado em grandes plataformas online. PostgreSQL: open source (licença BSD), forte em consultas complexas, suporte a chaves estrangeiras, não exige hardware avançado.'
                    },
                    {
                        subtitulo: '📝 Resumo Ultra Simplificado',
                        texto: 'SGBD é o software responsável por gerenciar bancos de dados. Possui quatro componentes: dados, hardware, software e usuários. Garante independência entre programas e dados, múltiplas visões e controle de concorrência. Utiliza arquitetura de três níveis: interno, conceitual e externo. Reduz redundância e melhora integridade. Exemplos de mercado: Oracle, SQL Server, MySQL e PostgreSQL.'
                    }
                ],
                lida: false
            },
            {
                id: 'banco_aula3',
                titulo: 'Aula 3 — Características de um Banco de Dados',
                conteudo: [
                    {
                        subtitulo: '🎯 Objetivos da Aula',
                        texto: 'Identificar as principais características de um banco de dados; diferenciar estrutura (esquema) e estado de um banco de dados; compreender o conceito de comportamento e transação; entender profundamente as propriedades ACID; aplicar os conceitos de transação em exemplos práticos.'
                    },
                    {
                        subtitulo: '🔎 Banco de Dados ≠ SGBD',
                        texto: 'Banco de Dados → conjunto organizado de dados. SGBD → software que gerencia o banco de dados. Embora complementares, não são a mesma coisa. O banco de dados é o conteúdo estruturado. O SGBD é o mecanismo de controle, acesso e manipulação.'
                    },
                    {
                        subtitulo: '🔎 Estrutura (Esquema)',
                        texto: 'O esquema representa a configuração lógica do banco de dados. Ele define: tabelas, campos (atributos), tipos de dados, relacionamentos e restrições de integridade. Conceito central: esquema é a descrição do banco de dados, não os dados em si. Características importantes: é definido na fase de projeto, não muda com frequência e pode ser representado por diagramas.'
                    },
                    {
                        subtitulo: '🔎 Estado',
                        texto: 'O estado corresponde ao conjunto de dados armazenados em um determinado momento. Conceitos: estado inicial → banco vazio; estado corrente → dados presentes em um momento específico; o estado muda ao longo do tempo. Distinção fundamental: esquema → estrutura fixa; estado → conteúdo variável.'
                    },
                    {
                        subtitulo: '🔎 Comportamento',
                        texto: 'O comportamento do banco de dados corresponde às mudanças de estado ao longo do tempo. Essas mudanças ocorrem devido a: eventos do mini-mundo, operações executadas e interações dos usuários. Definição técnica: o comportamento é a abstração das transições entre estados do banco. Mudança de estado = comportamento observado.'
                    },
                    {
                        subtitulo: '🔎 Transação (Mudança de Estado)',
                        texto: 'Uma transação é: um conjunto de operações, uma unidade lógica de trabalho, responsável por levar o banco de um estado consistente a outro estado consistente. Exemplo: transferência de aluno de uma turma para outra — Remover da turma A e Inserir na turma B. Ambas as operações devem ocorrer: ou totalmente, ou nenhuma delas.'
                    },
                    {
                        subtitulo: '🔎 Propriedades ACID (Visão Geral)',
                        texto: 'Toda transação deve obedecer às propriedades: Atomicidade, Consistência, Isolamento e Durabilidade. Essas propriedades garantem: integridade, confiabilidade e correção do sistema.'
                    },
                    {
                        subtitulo: '🔎 Atomicidade',
                        texto: 'Conceito: tudo ou nada. Se uma transação falhar: todas as alterações são desfeitas. Se concluir: todas as alterações são confirmadas. O sistema utiliza: log de transações e mecanismos de recuperação.'
                    },
                    {
                        subtitulo: '🔎 Consistência',
                        texto: 'Uma transação deve: manter as regras do banco, preservar restrições e não violar integridade. Se o banco começa consistente, ele deve terminar consistente.'
                    },
                    {
                        subtitulo: '🔎 Isolamento',
                        texto: 'Mesmo com transações simultâneas, elas não devem interferir entre si. O efeito deve parecer execução em ordem serial. O sistema usa: controle de concorrência e bloqueios.'
                    },
                    {
                        subtitulo: '🔎 Durabilidade',
                        texto: 'Após confirmação: as alterações persistem e não são perdidas mesmo com falhas. Garantida por: escrita em disco, logs e backup.'
                    },
                    {
                        subtitulo: '🔎 Modelo Simplificado de Transação e Aplicação Prática',
                        texto: 'Operações básicas: read(X) → lê valor do disco para memória; write(X) → grava valor da memória para o disco. Exemplo — transferência de R$50 da conta A para B: read(A), A := A - 50, write(A), read(B), B := B + 50, write(B). Aplicando as propriedades: Consistência — soma A + B permanece constante; Atomicidade — se falhar antes do write(B), tudo deve ser desfeito; Durabilidade — após commit, valores persistem; Isolamento — outra transação não pode ler valores intermediários.'
                    },
                    {
                        subtitulo: '📝 Resumo Ultra Simplificado',
                        texto: 'Banco de dados possui estrutura (esquema) e estado (dados atuais). O comportamento ocorre por meio de mudanças de estado chamadas transações. Toda transação deve obedecer às propriedades ACID. Atomicidade garante tudo ou nada. Consistência mantém regras válidas. Isolamento evita interferência entre transações. Durabilidade garante persistência após falhas.'
                    }
                ],
                lida: false
            },
            {
                id: 'banco_aula4',
                titulo: 'Aula 4 — Arquiteturas de Banco de Dados',
                conteudo: [
                    {
                        subtitulo: '🎯 Objetivos da Aula',
                        texto: 'Compreender o conceito de arquitetura de banco de dados e de SGBDs; identificar as diferenças entre arquiteturas centralizada, cliente-servidor, distribuída e em nuvem; analisar vantagens e desvantagens de cada arquitetura; entender os impactos de desempenho, segurança, escalabilidade e custos em cada modelo; escolher a arquitetura adequada conforme o contexto do projeto.'
                    },
                    {
                        subtitulo: '🔎 Conceito e Evolução das Arquiteturas',
                        texto: 'A arquitetura de um sistema de banco de dados é influenciada por: arquitetura de processador e memória, operação em rede, requisitos de paralelismo e distribuição geográfica. Inicialmente, os sistemas eram: centralizados, executados em mainframes e fortemente integrados (monolíticos). Com a evolução tecnológica: redução do custo de hardware, popularização de PCs e redes, surgimento da arquitetura cliente-servidor e, posteriormente, bancos distribuídos e computação em nuvem. Conceito importante: a arquitetura define como os componentes do sistema (interface, regras de negócio e dados) são distribuídos entre máquinas.'
                    },
                    {
                        subtitulo: '2️⃣ Arquitetura Centralizada',
                        texto: 'Nesta arquitetura: todo o processamento ocorre em uma única máquina (host), o SGBD, aplicações e interface rodam no mesmo sistema e usuários acessam via terminais ou estações conectadas. Funcionamento: processamento remoto, controle centralizado e armazenamento único. Vantagens: alto controle de segurança, backup e recuperação centralizados, controle eficiente de concorrência e sem necessidade de diretório distribuído. Desvantagens: alto custo (infraestrutura e mainframes), gargalo no host central, baixa escalabilidade e indisponibilidade total se o host falhar.'
                    },
                    {
                        subtitulo: '3️⃣ Arquitetura Cliente-Servidor — Conceito Geral',
                        texto: 'Baseada na divisão entre Cliente (front-end): interface gráfica (GUI), processamento local e requisições ao banco; e Servidor (back-end): armazenamento, processamento de consultas e controle de transações.'
                    },
                    {
                        subtitulo: '🔎 Arquitetura de Duas Camadas',
                        texto: 'Componentes: Camada Cliente → Interface + parte da aplicação; Camada Servidor → SGBD. Comunicação via ODBC (Open Database Connectivity) e JDBC (Java Database Connectivity). Fluxo: (1) cliente envia consulta, (2) servidor processa, (3) resultado retorna ao cliente. Vantagens: simplicidade, redução de tráfego na rede e boa para aplicações locais. Desvantagens: problemas de escalabilidade, manutenção mais difícil e forte dependência do servidor.'
                    },
                    {
                        subtitulo: '🔎 Arquitetura de Três Camadas',
                        texto: 'Introduz: Camada Cliente (interface), Camada de Aplicação (regras de negócio) e Camada de Dados (SGBD). Camada intermediária: servidor de aplicação ou Web, implementa regras de negócio, controle de segurança e filtragem de dados. Fluxo: Cliente → Servidor de Aplicação → Servidor de Banco. Vantagens: melhor escalabilidade, maior segurança, separação clara de responsabilidades e ideal para aplicações Web.'
                    },
                    {
                        subtitulo: '4️⃣ Banco de Dados em Sistemas Distribuídos',
                        texto: 'Banco armazenado em múltiplos nós geograficamente distribuídos. Características: não compartilham memória ou disco, comunicação via rede e processamento distribuído. Conceito-chave — Transparência: o usuário não precisa saber onde os dados estão, se estão replicados ou se estão fragmentados. Técnicas: Replicação — cópias idênticas em diferentes nós, aumenta disponibilidade, exige sincronização; Fragmentação Horizontal → divide por linhas (tuplas); Fragmentação Vertical → divide por atributos (colunas); Fragmentação + Replicação — combinação das duas. Desafios: controle de concorrência distribuído, detecção de impasse, falhas de comunicação, particionamento de rede e sincronização de réplicas.'
                    },
                    {
                        subtitulo: '5️⃣ Banco de Dados em Nuvem',
                        texto: 'Banco executado em infraestrutura de terceiros (provedores de nuvem). Provedores oferecem: infraestrutura, plataforma e software. Modelos de Serviço: IaaS (Infraestrutura como Serviço) — aluguel de máquinas virtuais, cliente gerencia banco; PaaS (Plataforma como Serviço) — infraestrutura + plataforma gerenciada; DBaaS (Database as a Service) — banco como serviço, cliente paga por uso, provedor gerencia infraestrutura. Vantagens: redução de custos, escalabilidade sob demanda, alta disponibilidade e trabalho remoto facilitado. Desvantagens: dependência do provedor, riscos jurídicos, questões de privacidade internacional e menor controle físico dos dados.'
                    },
                    {
                        subtitulo: '📝 Resumo Ultra Simplificado',
                        texto: 'Arquiteturas de banco de dados definem como processamento e armazenamento são organizados. A centralizada concentra tudo em um único servidor. A cliente-servidor divide cliente e banco. A arquitetura de três camadas separa interface, lógica e dados. Sistemas distribuídos usam replicação e fragmentação. A nuvem oferece escalabilidade, redução de custos e modelo DBaaS.'
                    }
                ],
                lida: false
            },
            {
                id: 'banco_aula5',
                titulo: 'Aula 5 — Diagrama Entidade e Relacionamento (DER)',
                conteudo: [
                    {
                        subtitulo: '🎯 Objetivos da Aula',
                        texto: 'Aplicar conceitos de Modelagem Entidade-Relacionamento na criação de DER; reconhecer entidades, atributos e relacionamentos em um minimundo; identificar e classificar tipos de atributos; definir corretamente cardinalidades e restrições; desenvolver modelo conceitual e modelo lógico de banco de dados; compreender a transição entre modelo conceitual, lógico e físico.'
                    },
                    {
                        subtitulo: '🔎 Importância da Modelagem de Dados',
                        texto: 'Modelagem de banco de dados é o processo de levantamento, análise, classificação e organização dos dados que sustentarão um sistema. Objetivo principal: transformar uma ideia do mundo real (minimundo) em uma representação estruturada. Benefícios: redução de redundâncias, evita inconsistências, facilita manutenção e melhora desempenho e organização. A modelagem não é apenas responsabilidade da equipe de TI — os usuários do negócio devem participar do levantamento de requisitos.'
                    },
                    {
                        subtitulo: '🔎 MER (Modelo Entidade-Relacionamento)',
                        texto: 'Criado por Peter Chen (1976), o MER é um modelo conceitual de alto nível. Utilizado na fase de projeto conceitual. Não trata detalhes de implementação. Representa a semântica dos dados. O MER é composto por três elementos fundamentais: Entidades, Atributos e Relacionamentos.'
                    },
                    {
                        subtitulo: '🔎 Modelo Conceitual, Lógico e Físico',
                        texto: 'Modelo Conceitual: representa a realidade de forma abstrata e independente de SGBD; características: visão global, alto nível de abstração e foco no negócio. Modelo Lógico: derivado do modelo conceitual; define estrutura de registros, campos, tipos de dados e regras iniciais. Modelo Físico: representa a implementação no SGBD; inclui tabelas, tipos de dados, índices, triggers, views e DDL.'
                    },
                    {
                        subtitulo: '🔎 Entidades',
                        texto: 'Entidade é um objeto do mundo real com existência independente. Pode ser Física (Pessoa, Produto) ou Conceitual (Venda, Serviço). Representação no DER (notação de Peter Chen): Entidade → Retângulo.'
                    },
                    {
                        subtitulo: '🔎 Atributos',
                        texto: 'Atributos são propriedades que descrevem uma entidade. Representação no DER: Atributo → Elipse. Tipos: Atributo Simples — não pode ser subdividido (ex: Nome, Sexo); Atributo Composto — pode ser dividido em partes (ex: Endereço → Rua, Número, CEP); Atributo Multivalorado — pode ter vários valores (ex: Telefones); Atributo Derivado — calculado a partir de outro (ex: Idade derivada da Data de Nascimento); Atributo-Chave — identifica unicamente uma entidade, representado por sublinhado.'
                    },
                    {
                        subtitulo: '🔎 Relacionamentos',
                        texto: 'Relacionamento é a associação entre entidades. Representação: losango (na notação de Peter Chen) com verbo na voz ativa. Relacionamento Binário: envolve duas entidades (ex: Funcionário — Trabalha no — Setor). Relacionamento Ternário: envolve três entidades simultaneamente. Autorrelacionamento: ocorre quando uma entidade se relaciona com ela mesma (ex: Funcionário Chefe ↔ Subordinado).'
                    },
                    {
                        subtitulo: '🔎 Cardinalidade e Restrições',
                        texto: 'Cardinalidade define quantas ocorrências de uma entidade se relacionam com outra. Tipos: 1:1 (Um-para-Um), 1:N (Um-para-Muitos) e N:N (Muitos-para-Muitos).'
                    },
                    {
                        subtitulo: '📐 O que cada figura significa no DER',
                        texto: 'Retângulo → Entidade: representa um conjunto de objetos do mundo real; possui existência própria, tem atributos e pode participar de relacionamentos. Retângulo Duplo → Entidade Fraca: depende de outra para existir, não possui chave própria suficiente (ex: ITEM_VENDA depende de VENDA). Elipse → Atributo: característica da entidade ou relacionamento. Elipse Sublinhada → Atributo Identificador (PK): identifica unicamente, não pode se repetir (ex: CRM para Médico). Elipse Dupla → Atributo Multivalorado: pode ter mais de um valor para a mesma entidade (ex: Telefones). Elipse Pontilhada → Atributo Derivado: calculado a partir de outro (ex: Idade). Losango → Relacionamento: associação entre entidades expressa por um verbo (ex: POSSUI, ATENDE, CREDENCIA). Losango Duplo → Relacionamento Identificador: envolve entidade fraca. Linha → Conexão (Participação): liga entidade ↔ atributo ou entidade ↔ relacionamento. Cardinalidade (1, N, 0): indica quantas ocorrências de uma entidade podem se relacionar com outra: 1:1, 1:N, N:N, 0:N.'
                    },
                    {
                        subtitulo: '📝 Resumo Ultra Simplificado',
                        texto: 'O MER é um modelo conceitual criado por Peter Chen. Ele utiliza entidades (retângulos), atributos (elipses) e relacionamentos (losangos). A cardinalidade define como as entidades se relacionam (1:1, 1:N, N:N). O processo de modelagem passa por modelo conceitual, lógico e físico. Uma boa modelagem evita redundâncias e melhora a qualidade do banco de dados.'
                    }
                ],
                lida: false
            },
            {
                id: 'banco_aula6',
                titulo: 'Aula 6 — Modelo Entidade e Relacionamento (MER)',
                conteudo: [
                    {
                        subtitulo: '🟡 1.1 Conceito Geral do Modelo Relacional',
                        texto: 'Criado por Edgar F. Codd (anos 70). Baseado em relações matemáticas (tabelas). Estrutura: Linhas → Tuplas (registros), Colunas → Atributos, Tabela → Relação. Representa dados de forma organizada e lógica.'
                    },
                    {
                        subtitulo: '🔴 1.2 Estrutura Fundamental',
                        texto: 'Relação (Tabela): conjunto de dados organizados em linhas e colunas. Ex: tabela ALUNO. Atributo (Coluna): representa uma característica da entidade. Ex: Nome, CPF, Idade. Tupla (Linha): representa um registro completo. Ex: dados de um aluno específico. Domínio: conceito essencial — conjunto de valores possíveis de um atributo. Exemplos: Idade → 15 a 80; CPF → formato ddd.ddd.ddd-dd; Nome → apenas letras. Define tipo de dado, formato e regras.'
                    },
                    {
                        subtitulo: '🟡 1.3 Esquema de Relação e Grau',
                        texto: 'Esquema de relação — representação estrutural: Aluno (CodAluno, Nome, RG, CPF, Telefone, Endereço). Define nome da tabela, atributos e tipos de dados. Grau da Relação: número de atributos. Ex: 6 colunas → grau = 6.'
                    },
                    {
                        subtitulo: '🔴 2. Restrições do Modelo Relacional',
                        texto: 'Garantem consistência e integridade dos dados. Chave Candidata: conjunto mínimo de atributos que identifica uma tupla. Chave Primária (Primary Key): principal identificador, não pode repetir e não pode ser nula (ex: CodAluno). Superchave: conjunto maior que ainda identifica unicamente (ex: CodAluno + CPF). Restrição de Entidade: chave primária NUNCA pode ser NULL — garantia de que toda linha é identificável. Integridade Referencial — Chave Estrangeira (FK): liga tabelas diferentes, referencia a PK de outra tabela (ex: Matrícula → CodAluno); pode ser NULL; deve existir na tabela referenciada; garante consistência entre tabelas. Exemplo prático: não pode matricular aluno inexistente; não pode excluir aluno que está sendo usado (ou deve tratar isso).'
                    },
                    {
                        subtitulo: '🔴 3. Modelo Relacional x MER e Mapeamento',
                        texto: 'MER: representação conceitual (alto nível), usado antes da implementação — mostra entidades, atributos e relacionamentos. Conversão MER → Modelo Relacional é processo essencial no desenvolvimento. Conjuntos Entidade (CE): cada entidade vira uma tabela, atributos → colunas, chave primária mantida. Ex: Entidade Aluno → Tabela Aluno. Conjuntos Relacionamento (CR) sem restrições: criar nova tabela com chaves estrangeiras das entidades + atributos do relacionamento + chave primária composta. Ex: Matrícula (CodAluno, CodTurma). CR com restrição de chave: Opção 1 — criar tabela separada; Opção 2 (mais eficiente) — inserir chave estrangeira em uma das tabelas. Vantagem: melhor desempenho. Desvantagem: pode gerar campos vazios (NULL).'
                    },
                    {
                        subtitulo: '🔴 6. Conceitos Essenciais — Resumo Final',
                        texto: 'Relação = tabela. Tupla = linha. Atributo = coluna. Domínio = tipo + regras do dado. Chave Primária = identificação única. Chave Estrangeira = ligação entre tabelas. Integridade Referencial = consistência entre relações. O Modelo Relacional organiza dados em tabelas. O MER modela o sistema antes da implementação. A conversão MER → Relacional é essencial. As restrições garantem integridade dos dados. Base fundamental para qualquer sistema que use banco de dados.'
                    }
                ],
                lida: false
            },
            {
                id: 'banco_aula7',
                titulo: 'Aula 7 — Diagrama Entidade e Relacionamento Estendido (EER)',
                conteudo: [
                    {
                        subtitulo: '🟡 1.1 Contexto — Introdução ao EER',
                        texto: 'O Modelo EER (Extended Entity-Relationship) é uma extensão do MER tradicional. Surge para representar situações mais complexas de banco de dados. Problema do MER: funciona bem para casos simples, mas tem limitação ao representar hierarquias, herança e relações mais complexas. Solução: o EER adiciona novos recursos semânticos.'
                    },
                    {
                        subtitulo: '🔴 1.2 Definição',
                        texto: 'O EER é uma técnica de modelagem que: inclui herança de atributos, trabalha com superclasses e subclasses e permite maior precisão semântica. Usado em projetos complexos de banco de dados, modelagem avançada e integração com UML.'
                    },
                    {
                        subtitulo: '🟡 2.1 Associação',
                        texto: 'Representa um vínculo entre entidades/classes. Tipos: Associação Binária — entre duas entidades (ex: Aluno — Curso); Associação Unária (Recursiva) — entidade se relaciona com ela mesma (ex: Funcionário supervisiona funcionário). Pode envolver mais de duas entidades (n-ária). Define como os objetos se conectam.'
                    },
                    {
                        subtitulo: '🟡 2.2 Agregação',
                        texto: 'Um dos conceitos mais importantes do EER. Permite tratar um relacionamento como uma entidade. Normalmente: relacionamento liga entidades. Na agregação: o relacionamento vira algo "independente" e pode participar de outro relacionamento. Exemplo prático: Aluno — se matricula — Curso; agora essa matrícula tem relação com Professor → "Matrícula" vira uma entidade intermediária. Quando usar: quando um relacionamento tem atributos próprios ou precisa se relacionar com outros elementos.'
                    },
                    {
                        subtitulo: '🟡 2.3 Generalização e Especialização',
                        texto: 'Representa hierarquia entre entidades baseada em herança. Estrutura: Superclasse = entidade mais genérica; Subclasse = entidade mais específica que herda atributos da superclasse. Exemplo clássico: Superclasse Funcionário → Subclasses Professor, Secretária, Técnico (todos são funcionários, mas com características próprias). Especialização: processo de criar subclasses a partir de uma superclasse (ex: Funcionário → Professor, Técnico). Generalização: processo inverso — unir entidades específicas em uma mais geral (ex: Professor + Técnico → Funcionário). Herança: subclasses herdam atributos e podem ter atributos próprios.'
                    },
                    {
                        subtitulo: '🔴 3. Diagrama EER (DEER)',
                        texto: 'Representação gráfica do modelo EER, similar ao MER mas com elementos adicionais. Elementos: entidades, relacionamentos, associações, agregações e generalização/especialização. No diagrama: associação = linhas conectando entidades, representa interação entre objetos; agregação = relacionamento dentro de um "bloco", mostra que virou uma entidade composta; generalização/especialização = estrutura em forma de árvore (hierarquia). Exemplo: Funcionário → Professor, Técnico.'
                    },
                    {
                        subtitulo: '🔴 5. Conceitos Essenciais — Resumo Final',
                        texto: 'EER = extensão do MER. Associação = ligação entre entidades. Agregação = relacionamento tratado como entidade. Generalização = agrupar entidades. Especialização = dividir entidade em subclasses. Herança = subclasses recebem atributos. O EER melhora o MER e permite modelar sistemas mais complexos. Introduz: hierarquia, reuso de dados e melhor organização. Com EER consegue-se representar sistemas reais com mais fidelidade, organizar melhor entidades complexas e reduzir redundância com herança. O MER resolve o básico; o EER resolve o complexo.'
                    }
                ],
                lida: false
            },
            {
                id: 'banco_aula8',
                titulo: 'Aula 8 — Introdução ao SQL',
                conteudo: [
                    {
                        subtitulo: '🔴 1. Conceito de SQL (Structured Query Language)',
                        texto: 'SQL é uma linguagem padrão utilizada para interagir com bancos de dados relacionais. Permite: criar estruturas (tabelas, colunas), manipular dados, consultar informações e controlar acesso. Características principais: linguagem declarativa → você informa o que quer, não como fazer; simples e padronizada (ANSI e ISO); base dos bancos de dados comerciais. Origem: criada na IBM (anos 70) — Projeto System R. Evolução: SQL-86 (primeiro padrão), SQL-92 e SQL-99 (mais moderno). Importância: fundamental para DBAs, desenvolvedores e analistas de dados. Facilita comunicação entre profissionais e gerenciamento completo de bancos.'
                    },
                    {
                        subtitulo: '🔴 2. Gerenciamento de SGBDs com SQL',
                        texto: 'SGBD: sistema que gerencia bancos de dados. SQL é a principal ferramenta de interação com o banco. Funções realizadas com SQL: criar tabelas, índices e esquemas; manipular — inserir dados, atualizar e excluir; controlar permissões de usuários. Comando essencial: CREATE — usado para criar banco de dados, tabelas e estruturas.'
                    },
                    {
                        subtitulo: '🔴 3. Subconjuntos da Linguagem SQL',
                        texto: 'DDL (Data Definition Language): função = definir estrutura do banco; comandos = CREATE, ALTER, DROP; característica = alterações são automáticas e permanentes. DML (Data Manipulation Language): função = manipular dados; comandos = INSERT, UPDATE, DELETE; característica = não são automáticos, podem ser desfeitos. DQL (Data Query Language): consulta de dados; comando = SELECT. DCL (Data Control Language): controle de acesso; comandos = GRANT e REVOKE. DTL (Data Transaction Language): controle de transações; comandos = COMMIT e ROLLBACK.'
                    },
                    {
                        subtitulo: '🔴 4. Diferença entre DDL e DML',
                        texto: 'DDL: função = criar estrutura, tipo de ação = estrutural, confirmação = automática, exemplo = CREATE TABLE. DML: função = manipular dados, tipo de ação = operacional, confirmação = manual, exemplo = INSERT. DDL → constrói o banco. DML → trabalha com os dados dentro dele.'
                    },
                    {
                        subtitulo: '🔴 5. Aplicação da Estrutura de Banco de Dados',
                        texto: 'Estrutura define: tipos de dados, relacionamentos e restrições. Tabelas: conjunto de dados organizados compostos por linhas (registros) e colunas (atributos). Linha = um registro (ex: um cliente). Coluna = tipo de informação (ex: nome). Tipos de dados: CHAR (texto fixo), VARCHAR (texto variável), TEXT (texto longo), INT (número inteiro), FLOAT/DOUBLE (número decimal), BLOB (dados binários). Chave Primária (PK): identificador único, deve ser única, não nula e imutável. Exemplos: ID do cliente, número de pedido. Relacionamentos: conectam tabelas entre si e definem dependência entre dados. Processo de construção: (1) modelagem (ex: DER), (2) criação com DDL, (3) inserção de dados com DML, (4) manipulação e consultas.'
                    },
                    {
                        subtitulo: '🔴 6 e 7. Funcionamento Geral e Observações',
                        texto: 'Um banco de dados inclui: tabelas, catálogo do sistema (metadados), arquivos de configuração e logs de transações. SQL não mostra o caminho, apenas o resultado desejado — o SGBD decide como executar (otimização). Pode usar chave composta (vários campos). Tipos automáticos (Auto Increment): geram IDs automaticamente. SQL é base para: sistemas empresariais, aplicações web e Big Data (base inicial). Aprender SQL é essencial para carreira em tecnologia.'
                    },
                    {
                        subtitulo: '✅ Conclusão da Aula 8',
                        texto: 'SQL é a principal linguagem de bancos de dados. Divide-se em subconjuntos (DDL, DML, DQL, DCL, DTL). DDL cria estrutura; DML manipula dados. Bancos são organizados em tabelas com regras e relacionamentos. Conhecimento em SQL é essencial para diversas áreas de TI.'
                    }
                ],
                lida: false
            }
        ],
    }
};


// ═══════════════════════════════════════════════════════════════════════
//  FUNÇÕES UTILITÁRIAS
// ═══════════════════════════════════════════════════════════════════════

/**
 * Retorna o objeto de resumos de uma disciplina.
 * @param {string} nome - Chave da disciplina ('design', 'poo', 'redes', 'banco')
 * @returns {object|null}
 */
export function getResumoPorDisciplina(nome) {
    return resumoData[nome] ?? null;
}

/**
 * Retorna a lista de resumos de uma disciplina.
 * @param {string} disciplina - Chave da disciplina
 * @returns {Array}
 */
export function listarResumos(disciplina) {
    return resumoData[disciplina]?.resumos ?? [];
}

/**
 * Retorna um resumo específico pelo id.
 * @param {string} id - id do resumo (ex: 'design_aula1')
 * @returns {object|null}
 */
export function getResumoPorId(id) {
    for (const disc of Object.values(resumoData)) {
        const encontrado = disc.resumos.find(r => r.id === id);
        if (encontrado) return encontrado;
    }
    return null;
}

/**
 * Marca um resumo como lido/não lido em memória.
 * @param {string} id - id do resumo
 * @param {boolean} lida
 */
export function marcarComoLida(id, lida = true) {
    const resumo = getResumoPorId(id);
    if (resumo) resumo.lida = lida;
}

/**
 * Retorna quantos resumos de uma disciplina estão marcados como lidos.
 * @param {string} disciplina
 * @returns {{ lidos: number, total: number }}
 */
export function progressoLeitura(disciplina) {
    const lista = listarResumos(disciplina);
    return {
        lidos: lista.filter(r => r.lida).length,
        total: lista.length
    };
}