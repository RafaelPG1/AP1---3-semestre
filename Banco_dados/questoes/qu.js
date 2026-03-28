// Configuração do quiz
const originalQuizData = [
  {
    "subject": "Aula 1 — Introdução a Banco de Dados (Questões 1–10)",
    "questions": [
      {
        "question": "Uma quitanda familiar, fundada em 1982 pelo sr. Antônio, controlava suas operações por meio de cadernetas de papel: cada venda era anotada manualmente e o estoque era conferido ao final do dia de forma visual. Com o crescimento do negócio, erros de cálculo, perdas de cadernetas e dificuldade de consultar o histórico tornaram-se frequentes. Para modernizar a gestão, o filho do sr. Antônio --- formado em Sistemas de Informação --- implantou um sistema computacional de registro de vendas. Ao final de janeiro, o sistema processou automaticamente todas as vendas registradas e emitiu um relatório consolidado de faturamento mensal, permitindo ao proprietário visualizar o total arrecadado e comparar com os custos de fornecimento.\n\nCom base na situação descrita, ao processar os dados brutos das vendas e gerar um relatório de faturamento mensal, o sistema transformou:",
        "options": [
          "Fatos em metadados para garantir a integridade",
          "Dados em informação, gerando subsídios para o conhecimento e tomada de decisão",
          "Metadados em fatos, visando o armazenamento físico",
          "Conhecimento em dados primários, reduzindo a abstração",
          "Registros em campos, facilitando o acesso via ponteiros"
        ],
        "answer": 1,
        "feedback": "✓ Resposta correta: B) Dados em informação, gerando subsídios para o conhecimento e tomada de decisão\n\nPor que está certa: Os registros brutos de cada venda (datas, quantidades, valores) são dados isolados e sem significado imediato. Ao processar esses dados e consolidá-los em um relatório de faturamento mensal, o sistema os transformou em informação — um resultado organizado e com sentido que permite ao proprietário tomar decisões de negócio (ex.: comparar receita com custos). Essa é exatamente a distinção fundamental entre dado e informação na teoria de sistemas de informação."
      },
      {
        "question": "Em um sistema de gestão de clientes, a equipe de desenvolvimento mantém uma tabela denominada Clientes com os campos IdCliente (chave primária, inteiro), Nome (texto) e Email (texto). Durante um sprint de desenvolvimento, o analista João recebeu a tarefa de cadastrar um novo cliente chamado 'José' com o identificador numérico 1 no banco de dados. No contexto do paradigma CRUD --- acrônimo para Create, Read, Update e Delete --- cada operação possui um comando SQL correspondente, e a correta identificação desses comandos é fundamental para a manutenção e integridade dos dados.\n\nConsiderando a necessidade de inserir o novo cliente na tabela Clientes, o comando SQL que representa corretamente a operação de criação (Create) do CRUD é:",
        "options": [
          "SELECT * FROM Clientes;",
          "UPDATE Clientes SET Nome = 'José';",
          "DELETE FROM Clientes WHERE Id = 1;",
          "INSERT INTO Clientes (IdCliente, Nome) VALUES (1, 'José');",
          "CREATE TABLE Clientes (Id INT);"
        ],
        "answer": 3,
        "feedback": "✓ Resposta correta: D) INSERT INTO Clientes (IdCliente, Nome) VALUES (1, 'José');\n\nPor que está certa: O 'C' do CRUD corresponde a Create (Criar), e o comando SQL para inserir um novo registro em uma tabela é o INSERT INTO. O comando especifica corretamente a tabela (Clientes), as colunas a preencher (IdCliente, Nome) e os valores a inserir (1, 'José'). As demais alternativas são: SELECT (Read), UPDATE (Update), DELETE (Delete) e CREATE TABLE — que cria a estrutura da tabela, não insere dados."
      },
      {
        "question": "Uma empresa de médio porte utilizava, há anos, um sistema baseado em File-Server para gerenciar seus dados de RH e financeiro. Nesse modelo, os arquivos ficavam armazenados em um servidor central, mas todo o processamento ocorria nos terminais dos usuários --- o que exigia que arquivos inteiros fossem transferidos pela rede a cada consulta. Com o crescimento do quadro de funcionários e o aumento simultâneo de acessos, a rede corporativa passou a apresentar lentidão crítica, comprometendo a produtividade. O CIO da empresa convocou a equipe de TI para propor uma solução arquitetural que eliminasse o gargalo sem substituir a estrutura de rede existente.\n\nPara resolver o problema de performance e permitir o multiuso eficiente, a equipe de TI deve migrar para um sistema:",
        "options": [
          "Web-Server, onde os dados ficam obrigatoriamente em arquivos de texto",
          "Database-Server, onde o processamento ocorre no servidor, enviando apenas os resultados solicitados aos terminais",
          "Flat-File, para manter a lógica de ordenação física em pastas",
          "Ponteiro de baixo nível, para agilizar os links entre registros",
          "Metadados descentralizados, para evitar consultas ao catálogo do SGBD"
        ],
        "answer": 1,
        "feedback": "✓ Resposta correta: B) Database-Server, onde o processamento ocorre no servidor, enviando apenas os resultados solicitados aos terminais\n\nPor que está certa: No modelo File-Server, os arquivos inteiros trafegam pela rede até o terminal do usuário para serem processados localmente — esse é o gargalo. No modelo Database-Server (arquitetura cliente-servidor com SGBD), o processamento das consultas ocorre no próprio servidor; apenas os resultados filtrados são enviados ao cliente. Isso reduz drasticamente o tráfego de rede e elimina o gargalo descrito no enunciado."
      },
      {
        "question": "O DBA (Administrador de Banco de Dados) de uma instituição de ensino foi incumbido de projetar o banco de dados do novo sistema escolar. Em reunião com a equipe pedagógica, foram levantadas as seguintes necessidades: cada aluno deve ser identificado por uma matrícula única; o sistema deve armazenar o nome completo e o CPF de cada aluno; e as tabelas devem se relacionar de maneira coerente com as demais entidades do sistema. Ao documentar essas decisões, o DBA registrou que a tabela Alunos terá os campos Matricula (Chave Primária), Nome e CPF. Esse registro não diz respeito à forma como os dados serão gravados no disco, tampouco à interface do usuário --- ele se concentra exclusivamente na estrutura lógica dos dados.\n\nNo nível de abstração lógico, a definição da tabela Alunos pelo DBA foca em:",
        "options": [
          "Descrever como os dados são armazenados fisicamente em blocos de memória",
          "Ocultar completamente quais dados existem para todos os usuários",
          "Definir quais dados estão armazenados e quais as relações entre eles",
          "Criar a interface gráfica para interação do usuário final",
          "Gerenciar apenas o consumo de CPU e memória RAM do servidor"
        ],
        "answer": 2,
        "feedback": "✓ Resposta correta: C) Definir quais dados estão armazenados e quais as relações entre eles\n\nPor que está certa: Na arquitetura ANSI/SPARC de três níveis, o nível conceitual (ou lógico) descreve quais dados existem no banco e como se relacionam — sem se preocupar com detalhes físicos de armazenamento (nível interno) nem com visões específicas de cada usuário (nível externo). Definir que a tabela Alunos tem os campos Matricula, Nome e CPF e que se relaciona com outras entidades é exatamente o trabalho do nível lógico."
      },
      {
        "question": "No banco de dados de uma biblioteca pública, existem duas tabelas principais: Livros (campos: ID, Título, Ano, ID_Autor) e Autores (campos: ID, Nome, Nacionalidade). O campo ID da tabela Autores identifica de forma única cada autor cadastrado. Já o campo ID_Autor na tabela Livros armazena o identificador do autor responsável por cada obra. Durante uma auditoria de qualidade do banco de dados, a analista Patrícia verificou que todo livro cadastrado possui obrigatoriamente um autor correspondente na tabela Autores. Ela concluiu que o campo ID_Autor cria um vínculo estrutural entre as duas tabelas, garantindo que nenhum livro fique sem referência a um autor válido.\n\nO campo ID_Autor na tabela Livros é classificado como:",
        "options": [
          "Chave Primária",
          "Atributo Multivalorado",
          "Chave Estrangeira",
          "Metadado Físico",
          "Registro Único"
        ],
        "answer": 2,
        "feedback": "✓ Resposta correta: C) Chave Estrangeira\n\nPor que está certa: Uma Chave Estrangeira (Foreign Key) é um campo em uma tabela que referencia a Chave Primária de outra tabela, criando um vínculo entre elas. O campo ID_Autor na tabela Livros referencia o campo ID da tabela Autores — garantindo que cada livro aponte para um autor válido e existente. Esse mecanismo implementa a integridade referencial no banco de dados relacional."
      },
      {
        "question": "Durante a manutenção do banco de dados de uma empresa varejista, o analista Carlos precisou atualizar o endereço de todos os clientes de uma determinada cidade. Ao executar o script de atualização, ele percebeu --- tarde demais --- que havia esquecido de incluir a cláusula WHERE no comando UPDATE. Como resultado, o campo de endereço de TODOS os clientes da tabela foi sobrescrito com o novo valor. Felizmente, Carlos havia iniciado uma transação explícita antes de executar o script. O SGBD ainda não havia confirmado as alterações fisicamente no disco. Ele precisava, então, de um comando capaz de reverter todas as modificações realizadas dentro da transação atual, restaurando o banco ao estado consistente anterior.\n\nPara evitar a perda permanente dos dados e restaurar o estado anterior do banco, Carlos deve utilizar o comando:",
        "options": [
          "COMMIT",
          "BEGIN TRANSACTION",
          "SELECT @@ROWCOUNT",
          "ROLLBACK",
          "DELETE"
        ],
        "answer": 3,
        "feedback": "✓ Resposta correta: D) ROLLBACK\n\nPor que está certa: O comando ROLLBACK desfaz todas as operações realizadas dentro de uma transação ativa, restaurando o banco ao estado anterior ao início da transação. Como Carlos havia iniciado uma transação explícita e o COMMIT ainda não havia sido executado, o ROLLBACK cancela todas as alterações feitas pelo UPDATE sem WHERE, preservando os dados originais. O COMMIT, ao contrário, confirmaria as alterações de forma permanente."
      },
      {
        "question": "A evolução dos sistemas de gerenciamento de banco de dados acompanhou de perto o desenvolvimento das linguagens de programação e das necessidades corporativas ao longo das décadas. Na década de 1960, surgiram os modelos hierárquico e em rede, baseados em ponteiros físicos. Na década de 1970, Edgar Codd propôs o revolucionário modelo relacional, fundamentado em tabelas e na álgebra relacional. Nas décadas seguintes, com a popularização da programação orientada a objetos e linguagens como C++ e Java, surgiu a demanda por um modelo de banco de dados que permitisse organizar dados em estruturas de classes e atributos, com suporte a herança e encapsulamento, integrando-se naturalmente ao paradigma de desenvolvimento predominante da época.\n\nQual modelo de banco de dados surgiu na década de 1990 para atender a essa demanda, permitindo a organização de dados por classes e atributos?",
        "options": [
          "Modelo Relacional de Edgar Codd",
          "Modelo Entidade-Relacionamento de Peter Chen",
          "Modelo Orientado a Objetos (POO)",
          "Modelo Hierárquico de ponteiros",
          "Modelo NoSQL orientado a documentos"
        ],
        "answer": 2,
        "feedback": "✓ Resposta correta: C) Modelo Orientado a Objetos (POO)\n\nPor que está certa: Na década de 1990, com a dominância de linguagens orientadas a objetos como C++ e Java, surgiu o Modelo de Banco de Dados Orientado a Objetos. Esse modelo permite representar dados como objetos com atributos e métodos, suportando conceitos como herança, encapsulamento e polimorfismo — os mesmos pilares da programação OO. Isso reduzia o chamado 'impedance mismatch' entre o código da aplicação e a estrutura do banco de dados."
      },
      {
        "question": "Em um SGBD de e-commerce, a tabela Produtos possui os campos: ID (inteiro), Nome (Varchar(150)), Preco (Decimal(10,2)) e Estoque (Integer). Quando o desenvolvedor executa uma consulta SELECT, o SGBD precisa saber o tipo e o formato de armazenamento de cada coluna para interpretar corretamente os bytes lidos do disco. Essas informações estruturais --- que descrevem os próprios dados --- ficam armazenadas em um repositório interno do SGBD, acessível automaticamente a cada operação de leitura ou escrita, sem que o usuário precise informá-las manualmente a cada consulta.\n\nAs informações sobre o tipo e o formato de armazenamento de cada campo da tabela ficam guardadas no:",
        "options": [
          "Volume de armazenamento secundário",
          "Arquivo de Log de transações",
          "Catálogo de metadados",
          "Buffer de memória RAM",
          "Terminal do usuário final"
        ],
        "answer": 2,
        "feedback": "✓ Resposta correta: C) Catálogo de metadados\n\nPor que está certa: O Catálogo de Metadados (também chamado de dicionário de dados ou catálogo do sistema) é o repositório interno do SGBD onde ficam armazenadas as informações sobre a estrutura do banco — como nomes de tabelas, nomes e tipos de colunas, restrições, índices e relacionamentos. São os 'dados sobre os dados'. Essa é justamente a característica de autodescritibilidade dos SGBDs modernos, que os diferencia dos sistemas de arquivos simples."
      },
      {
        "question": "Uma empresa de eletrônicos mantém uma tabela Produtos com os campos: ID, Nome, Categoria, Preco e Estoque. O gerente comercial solicitou ao desenvolvedor um relatório contendo apenas o nome e o preço de todos os produtos cadastrados, para comparar com a tabela de preços de um concorrente. Nenhum dado deveria ser alterado ou excluído --- a operação era exclusivamente de leitura. O desenvolvedor precisava, portanto, utilizar o comando SQL correto para recuperar apenas as colunas solicitadas, sem modificar nenhum registro da tabela.\n\nO comando SQL que realiza a leitura e recuperação das informações solicitadas, correspondendo ao R (Read) do CRUD, é:",
        "options": [
          "INSERT",
          "SELECT",
          "UPDATE",
          "DELETE",
          "CREATE"
        ],
        "answer": 1,
        "feedback": "✓ Resposta correta: B) SELECT\n\nPor que está certa: O 'R' do CRUD corresponde a Read (Leitura/Consulta), e o comando SQL que realiza essa operação é o SELECT. Ele permite recuperar dados de uma ou mais tabelas, filtrando colunas e linhas conforme necessário — sem alterar nenhum dado. No caso, o desenvolvedor usaria: SELECT Nome, Preco FROM Produtos; — especificando apenas as colunas solicitadas pelo gerente."
      },
      {
        "question": "Um banco digital opera em ambiente de alta disponibilidade com centenas de transações simultâneas por segundo. O DBA Marcelo foi alertado por um auditor de que usuários estavam, em alguns momentos, visualizando saldos intermediários --- valores que refletiam apenas parte de uma transferência que ainda estava em processamento por outro usuário. Para resolver o problema, Marcelo precisava garantir que um usuário não visualizasse dados incompletos de uma transação financeira ainda em andamento. O mecanismo de proteção deveria ser aplicado em um nível de abstração capaz de controlar o que cada perfil de usuário enxerga no sistema.\n\nEssa proteção contra acesso a estados inconsistentes ocorre no:",
        "options": [
          "Nível Físico, via ponteiros de baixo nível",
          "Nível de Visão, através de mecanismos de segurança e isolamento",
          "Nível de Hardware, via controladores de disco SSD",
          "Nível de Metadados, alterando a estrutura da tabela em tempo real",
          "Nível de Operação de Ponteiro, ligando registros manualmente"
        ],
        "answer": 1,
        "feedback": "✓ Resposta correta: B) Nível de Visão, através de mecanismos de segurança e isolamento\n\nPor que está certa: O Nível de Visão (ou nível externo) da arquitetura ANSI/SPARC é onde se controla o que cada usuário ou aplicação pode enxergar no banco de dados. É nesse nível que se implementam mecanismos de isolamento de transações e restrições de acesso, garantindo que usuários não vejam estados intermediários de outras transações em andamento. Isso é distinto do nível físico (armazenamento) e do nível lógico (estrutura geral)."
      }
    ]
  },
  {
    "subject": "Aula 2 — Características de um SGBD (Questões 11–20)",
    "questions": [
      {
        "question": "Uma multinacional do setor financeiro com operações em 23 países necessita implantar um novo sistema central de banco de dados. Os requisitos técnicos levantados pela equipe de arquitetura incluem: suporte a volumes massivos de dados (na ordem de petabytes), alta escalabilidade vertical e horizontal, suporte a procedimentos armazenados com linguagem procedural proprietária e certificações de segurança corporativa. Após análise comparativa entre os principais SGBDs do mercado, a equipe chegou a três finalistas. A decisão final recaiu sobre o sistema conhecido mundialmente por sua robustez em ambientes de missão crítica e pelo uso da linguagem PL/SQL.\n\nConsiderando os requisitos apresentados, o SGBD que atende a todas essas características e utiliza a linguagem PL/SQL é:",
        "options": [
          "MySQL",
          "SQL Server",
          "Oracle",
          "PostgreSQL",
          "Microsoft Excel"
        ],
        "answer": 2,
        "feedback": "✓ Resposta correta: C) Oracle\n\nPor que está certa: O Oracle Database é o SGBD da Oracle Corporation, amplamente reconhecido por sua robustez em ambientes corporativos de missão crítica e grande escala. Sua linguagem procedural proprietária é o PL/SQL (Procedural Language/SQL), que estende o SQL padrão com estruturas de controle de fluxo, tratamento de exceções e procedimentos armazenados. É o SGBD de referência em instituições financeiras, governos e grandes corporações globais."
      },
      {
        "question": "Em uma universidade pública, o setor financeiro e a secretaria acadêmica utilizam sistemas distintos, desenvolvidos em épocas diferentes por equipes independentes. O sistema financeiro armazena dados de alunos como nome, CPF e endereço para cobranças de mensalidades. O sistema da secretaria armazena os mesmos campos para envio de documentos acadêmicos. Quando um aluno muda de endereço, ele precisa comparecer fisicamente a dois guichês diferentes para atualizar o dado em cada sistema separadamente. Em diversas ocasiões, alunos relataram receber cobranças no endereço antigo porque atualizaram apenas um dos sistemas --- causando transtornos administrativos e jurídicos para a instituição.\n\nA situação descrita caracteriza uma falha clássica em sistemas legados, conhecida como:",
        "options": [
          "Independência programa-dados",
          "Abstração de dados",
          "Redundância e falta de integração de dados",
          "Controle de concorrência",
          "Natureza autodescritiva"
        ],
        "answer": 2,
        "feedback": "✓ Resposta correta: C) Redundância e falta de integração de dados\n\nPor que está certa: Quando o mesmo dado (nome, CPF, endereço do aluno) é armazenado em múltiplos sistemas independentes sem sincronização, ocorre redundância de dados. A falta de integração faz com que uma atualização em um sistema não se propague para os demais, gerando inconsistências — como o aluno receber cobranças no endereço antigo. Esse é um dos principais problemas que os SGBDs modernos resolvem ao centralizar e integrar os dados."
      },
      {
        "question": "O DBA Renato identificou, por meio do sistema de monitoramento, que as consultas ao banco de dados de um sistema de logística estavam levando mais de 30 segundos para retornar --- o que era inaceitável para o negócio. A análise dos logs revelou dois gargalos principais: a fila de operações de escrita em disco estava com alta latência, e o uso de memória RAM havia atingido 97% da capacidade do servidor. Renato precisava elaborar um relatório técnico justificando as otimizações necessárias para o comitê de infraestrutura, abordando os componentes de hardware que diretamente impactavam a performance do SGBD.\n\nPara otimizar a performance segundo os conceitos de hardware de um SGBD, o DBA deve focar em:",
        "options": [
          "Aumentar o poder de processamento do processador de software",
          "Otimizar a leitura/gravação em disco e o consumo de memória RAM",
          "Reduzir o número de usuários para transformar o sistema em monousuário",
          "Migrar o banco de dados para um mainframe centralizado sem rede",
          "Excluir o catálogo de metadados para liberar espaço em disco"
        ],
        "answer": 1,
        "feedback": "✓ Resposta correta: B) Otimizar a leitura/gravação em disco e o consumo de memória RAM\n\nPor que está certa: Os dois principais componentes de hardware que impactam diretamente a performance de um SGBD são o disco (responsável pela persistência e leitura dos dados) e a memória RAM (usada para o buffer pool, cache de consultas e dados temporários). Latência alta em disco e RAM saturada são os gargalos clássicos de performance em bancos de dados — exatamente os identificados no monitoramento do DBA Renato."
      },
      {
        "question": "Em um sistema de gestão hospitalar, o médico acessa o prontuário do paciente por meio de uma interface web. Por trás dessa interface, quando o médico solicita os exames de um paciente digitando o número do prontuário e clicando em 'Pesquisar', a aplicação encaminha a requisição ao componente central do sistema, responsável por interpretar o pedido, verificar as permissões do usuário, localizar os dados no armazenamento físico e retornar o resultado ao médico. Sem esse componente, o médico precisaria interagir diretamente com os arquivos físicos no servidor --- algo tecnicamente inviável em um ambiente hospitalar.\n\nO componente de software responsável por tratar todas as requisições de acesso (como buscar e atualizar informações) vindas do usuário ou de aplicações é:",
        "options": [
          "Hardware",
          "Catálogo",
          "SGBD (Sistema Gerenciador de Banco de Dados)",
          "Usuário Final",
          "Memória RAM"
        ],
        "answer": 2,
        "feedback": "✓ Resposta correta: C) SGBD (Sistema Gerenciador de Banco de Dados)\n\nPor que está certa: O SGBD é o software intermediário que gerencia todo o acesso aos dados. Ele recebe as requisições das aplicações e usuários, interpreta os comandos (SQL), verifica permissões, otimiza as consultas, localiza os dados no armazenamento físico e retorna os resultados. Sem o SGBD, seria necessário interagir diretamente com os arquivos físicos, o que tornaria o desenvolvimento de sistemas extremamente complexo e inseguro."
      },
      {
        "question": "A startup AirFly opera um sistema de reservas de passagens aéreas com alta demanda em períodos de promoção. Em um evento de Black Friday, centenas de usuários acessaram simultaneamente a última poltrona disponível no voo São Paulo--Recife das 18h. Dois usuários --- Ana e Bruno --- clicaram em 'Finalizar Compra' no mesmo instante, e ambos receberam, momentaneamente, a confirmação de que a poltrona estava disponível. O SGBD precisava garantir que apenas uma das compras fosse efetivada, impedindo que os dois reservassem o mesmo assento --- situação conhecida no setor aéreo como overbooking tecnológico.\n\nA característica do SGBD que garante que apenas um dos usuários consiga finalizar a compra é o:",
        "options": [
          "Suporte para múltiplas visões",
          "Isolamento programa-operação",
          "Controle de concorrência no processamento de transações multiusuários",
          "Natureza autodescritiva do catálogo",
          "Armazenamento secundário SSD"
        ],
        "answer": 2,
        "feedback": "✓ Resposta correta: C) Controle de concorrência no processamento de transações multiusuários\n\nPor que está certa: O Controle de Concorrência é o mecanismo do SGBD que garante a execução correta de transações simultâneas, evitando conflitos quando múltiplos usuários acessam e modificam os mesmos dados ao mesmo tempo. No cenário da AirFly, o SGBD usa técnicas como bloqueio (locking) para garantir que apenas uma das transações concorrentes consiga reservar o último assento, enquanto a outra recebe uma resposta de 'indisponível'."
      },
      {
        "question": "Uma equipe de desenvolvimento estava avaliando qual SGBD adotar para um novo sistema de gestão empresarial integrado à plataforma Microsoft Azure. A liderança técnica destacou que o sistema precisaria utilizar uma linguagem de extensão do SQL com suporte nativo a variáveis, estruturas de controle de fluxo (IF, WHILE), tratamento de exceções e procedimentos armazenados --- tudo integrado ao ecossistema Microsoft. Após análise técnica, o arquiteto decidiu pelo SQL Server, da Microsoft. Um dos desenvolvedores iniciantes, no entanto, confundiu a linguagem de extensão do SQL Server com a do Oracle.\n\nO SQL Server, SGBD criado pela Microsoft, utiliza qual linguagem específica para manipulação e administração de dados?",
        "options": [
          "PL/SQL",
          "T-SQL (Transaction SQL)",
          "PHP",
          "Java",
          "NoSQL"
        ],
        "answer": 1,
        "feedback": "✓ Resposta correta: B) T-SQL (Transaction SQL)\n\nPor que está certa: O SQL Server da Microsoft utiliza o T-SQL (Transact-SQL) como sua linguagem procedural proprietária. O T-SQL estende o SQL padrão com suporte a variáveis, estruturas de controle de fluxo (IF/ELSE, WHILE), tratamento de erros (TRY/CATCH) e procedimentos armazenados. É importante não confundir com PL/SQL, que é a linguagem procedural do Oracle — um erro comum entre iniciantes, exatamente o citado no enunciado."
      },
      {
        "question": "A arquitetura ANSI/SPARC de três níveis foi proposta para isolar os usuários dos detalhes de implementação física dos bancos de dados relacionais. Essa arquitetura define três camadas de abstração: o nível externo (visões dos usuários), o nível conceitual (estrutura lógica geral) e o nível interno (detalhes físicos de armazenamento). Um DBA especialista em performance foi contratado para otimizar o armazenamento de uma tabela de transações financeiras com bilhões de registros. Seu trabalho envolvia analisar e reorganizar estruturas como índices B-Tree, definir o tamanho em bytes de cada campo e configurar a organização dos blocos de disco --- sem que essas alterações impactassem os programas que acessavam os dados.\n\nO nível de abstração que se preocupa com os detalhes complexos de armazenamento, como o tamanho em bytes de cada campo, é o:",
        "options": [
          "Nível Externo",
          "Nível Conceitual",
          "Nível Lógico de Usuário",
          "Nível Interno (ou de armazenamento)",
          "Nível de Negócio"
        ],
        "answer": 3,
        "feedback": "✓ Resposta correta: D) Nível Interno (ou de armazenamento)\n\nPor que está certa: Na arquitetura ANSI/SPARC, o Nível Interno (também chamado de nível físico ou de armazenamento) é responsável pelos detalhes de como os dados são fisicamente armazenados no disco — incluindo estruturas de índices (B-Tree, Hash), organização dos blocos, tamanho em bytes de cada campo e métodos de acesso. É o nível mais baixo da arquitetura, invisível para os usuários finais e desenvolvedores de aplicação."
      },
      {
        "question": "Uma prefeitura municipal precisava implantar um sistema de gestão de tributos e precisava escolher um SGBD dentro de um orçamento de TI bastante limitado. O processo licitatório exigia que a solução fosse economicamente viável (sem altos custos de licenciamento), que funcionasse em servidores de hardware convencional já existentes na prefeitura e que suportasse transações ACID e consultas SQL complexas. Após análise comparativa, a comissão técnica identificou um SGBD open source que atendia plenamente a todos esses requisitos, amplamente utilizado em órgãos públicos brasileiros.\n\nA vantagem do SGBD PostgreSQL, em relação a outros sistemas proprietários, que o torna adequado para esse cenário é:",
        "options": [
          "Ser um produto exclusivo da Microsoft com integração ao Excel",
          "Exigir hardware avançado e caríssimo para funcionar",
          "Ser open source (software livre) e não exigir sistemas de hardware extremamente avançados",
          "Não suportar chaves estrangeiras ou consultas complexas",
          "Ser a única opção para sistemas monousuários"
        ],
        "answer": 2,
        "feedback": "✓ Resposta correta: C) Ser open source (software livre) e não exigir sistemas de hardware extremamente avançados\n\nPor que está certa: O PostgreSQL é um SGBD relacional open source (código aberto e gratuito), o que elimina custos de licenciamento — fator crítico em orçamentos públicos limitados. Além disso, funciona eficientemente em hardware convencional, sem exigir infraestrutura de ponta. Apesar de gratuito, suporta completamente transações ACID, chaves estrangeiras, consultas SQL complexas, views, stored procedures e outros recursos avançados, sendo amplamente adotado em órgãos públicos e empresas."
      },
      {
        "question": "A equipe de desenvolvimento de um ERP corporativo precisou migrar o banco de dados de Oracle para PostgreSQL para reduzir custos. Durante a migração, surgiu uma preocupação: os programas em Java que faziam parte do sistema utilizavam referências aos campos pelo nome lógico (ex.: SELECT Nome, Salario FROM Funcionarios), sem qualquer referência à organização física dos dados em disco. Após a migração, o DBA reorganizou completamente a estrutura física de armazenamento --- incluindo alteração de índices e particionamento de tabelas. Para surpresa da equipe, os programas em Java continuaram funcionando sem qualquer alteração no código-fonte.\n\nA característica que permite que um programa de aplicação trabalhe com dados invocando-os por seus nomes, sem considerar como são implementados fisicamente, é chamada de:",
        "options": [
          "Dependência física",
          "Independência programa-dados (ou abstração)",
          "Redundância controlada",
          "Compartilhamento restrito",
          "Metadados estáticos"
        ],
        "answer": 1,
        "feedback": "✓ Resposta correta: B) Independência programa-dados (ou abstração)\n\nPor que está certa: A Independência programa-dados é uma característica fundamental dos SGBDs que permite alterar a organização física dos dados sem precisar modificar os programas de aplicação que os acessam. Os programas trabalham com nomes lógicos de tabelas e colunas (abstração), e o SGBD se encarrega de mapear esses nomes para a localização física real dos dados. Isso foi o que permitiu que os programas Java continuassem funcionando após a reestruturação física do banco."
      },
      {
        "question": "Uma empresa de tecnologia contratou três profissionais com perfis diferentes para trabalhar com seu sistema de banco de dados: Fernanda, que vai usar o sistema de relatórios para consultar dados de vendas; Ricardo, que vai escrever programas em Java que se comunicam com o banco via JDBC para construir o módulo de pedidos; e Cláudio, que vai instalar o SGBD, configurar backups automáticos, criar usuários e monitorar a performance. Durante o processo de integração, o gerente de TI explicou ao novo estagiário as distinções entre os papéis de cada profissional no ecossistema de banco de dados.\n\nO profissional que escreve os códigos em Java ou C++ para acessar o banco é classificado, segundo as classes gerais de usuários de um SGBD, como:",
        "options": [
          "Usuário Final",
          "Administrador de Banco de Dados (DBA)",
          "Desenvolvedor de Aplicações (Programador)",
          "Analista de Hardware",
          "Operador de Mainframe"
        ],
        "answer": 2,
        "feedback": "✓ Resposta correta: C) Desenvolvedor de Aplicações (Programador)\n\nPor que está certa: Na classificação de usuários de SGBDs, o Desenvolvedor de Aplicações (ou Programador) é o profissional que escreve programas em linguagens como Java, Python ou C++ para acessar o banco de dados via APIs (como JDBC, ODBC). No cenário, Ricardo é o desenvolvedor. Fernanda é a Usuária Final (usa o sistema sem programar), e Cláudio é o DBA (administra a infraestrutura do banco)."
      }
    ]
  },
  {
    "subject": "Aula 3 — Características de um Banco de Dados (Questões 21–30)",
    "questions": [
      {
        "question": "O administrador do banco de dados de uma biblioteca municipal recebeu a tarefa de implementar um novo módulo de controle de empréstimos. Para isso, ele criou uma tabela chamada Emprestimos com as colunas: ID (inteiro, chave primária), Data_Emprestimo (date), Data_Devolucao (date) e Livro_ID (inteiro, chave estrangeira). Após criar a tabela, o administrador observou que ela estava vazia --- nenhum empréstimo havia sido registrado ainda. Ele também notou que a estrutura da tabela (nomes das colunas, tipos de dados e restrições) dificilmente mudaria, enquanto os registros de empréstimos seriam inseridos e atualizados diariamente.\n\nA definição da estrutura da tabela Emprestimos --- que não muda frequentemente --- é chamada de:",
        "options": [
          "Estado do banco de dados",
          "Comportamento da aplicação",
          "Esquema (ou Estrutura)",
          "Transação durável",
          "Instância corrente"
        ],
        "answer": 2,
        "feedback": "✓ Resposta correta: C) Esquema (ou Estrutura)\n\nPor que está certa: O Esquema (schema) de um banco de dados é a definição da sua estrutura — os nomes das tabelas, colunas, tipos de dados e restrições. É uma definição estável que raramente muda após a criação do banco. Em contraste, o Estado (ou instância) é o conjunto de dados efetivamente armazenados em um determinado momento, que muda constantemente com inserções, atualizações e exclusões. A tabela Emprestimos vazia logo após a criação possui um esquema definido, mas seu estado inicial é vazio."
      },
      {
        "question": "O sistema bancário do Banco Integra processa milhares de transferências simultâneas por segundo. Em determinada operação, o sistema iniciou uma transferência de R$ 100,00 da conta de Pedro para a de Maria: o valor foi debitado da conta de Pedro com sucesso, mas antes que o crédito fosse efetuado na conta de Maria, o data center sofreu uma queda de energia causada por um curto-circuito. Ao reiniciar, a equipe de TI constatou que R$ 100,00 tinham saído da conta de Pedro, mas não tinham chegado à conta de Maria. O sistema precisava de um mecanismo que garantisse que, em situações de falha parcial, a operação fosse completamente desfeita --- preservando a integridade das duas contas.\n\nO mecanismo que garante que a operação seja desfeita por completo após a falha, seguindo o princípio do 'tudo ou nada', é a propriedade ACID de:",
        "options": [
          "Consistência",
          "Isolamento",
          "Durabilidade",
          "Atomicidade",
          "Persistência"
        ],
        "answer": 3,
        "feedback": "✓ Resposta correta: D) Atomicidade\n\nPor que está certa: A Atomicidade é a propriedade ACID que garante que uma transação seja tratada como uma unidade indivisível — ou todas as operações são executadas com sucesso (COMMIT), ou nenhuma delas é aplicada (ROLLBACK). No caso da transferência, o débito na conta de Pedro e o crédito na conta de Maria devem ocorrer juntos ou nenhum dos dois. Como houve falha no meio da transação, o sistema deve desfazer o débito de Pedro, restaurando o estado consistente anterior."
      },
      {
        "question": "Em um sistema de internet banking, dois processos são executados simultaneamente: T1 está atualizando o saldo de uma conta corrente (debitando R$ 500,00 de uma transferência em andamento) e T2 foi disparado pelo módulo de extratos para ler o saldo da mesma conta e gerar o histórico do cliente. O SGBD detectou o conflito e fez T2 aguardar a finalização de T1 antes de liberar a leitura do saldo. O cliente que solicitou o extrato recebeu o valor correto --- sem ver o saldo intermediário com o débito ainda não finalizado.\n\nQual propriedade ACID está sendo aplicada pelo SGBD ao impedir que T2 leia um estado intermediário gerado por T1?",
        "options": [
          "Durabilidade",
          "Isolamento",
          "Atomicidade",
          "Independência",
          "Escalabilidade"
        ],
        "answer": 1,
        "feedback": "✓ Resposta correta: B) Isolamento\n\nPor que está certa: O Isolamento é a propriedade ACID que garante que transações concorrentes sejam executadas de forma independente entre si, como se fossem sequenciais. Cada transação não deve enxergar os estados intermediários de outras transações em andamento. No cenário, o SGBD impede que T2 leia o saldo 'sujo' (dirty read) gerado por T1 ainda não confirmado, garantindo que o cliente veja apenas dados de transações completas."
      },
      {
        "question": "A analista Débora acabou de finalizar a modelagem de um banco de dados para um sistema educacional. Após criar as tabelas Alunos, Professores, Disciplinas e Matrículas com todos os campos e restrições definidos, ela executou o script DDL de criação no SGBD de produção. Nesse momento, o banco de dados existia estruturalmente, mas não continha nenhum dado. Assim que o sistema entrou em produção e os primeiros registros de alunos e professores foram inseridos pelos usuários, o banco de dados sofreu uma transformação importante, passando de um estado para outro.\n\nAo inserir os primeiros registros de alunos e professores, o banco de dados sofreu uma mudança de:",
        "options": [
          "Esquema físico",
          "Nível de visão",
          "Estado",
          "Log de sistema",
          "Metadados"
        ],
        "answer": 2,
        "feedback": "✓ Resposta correta: C) Estado\n\nPor que está certa: O Estado (ou instância) de um banco de dados é o conjunto de dados armazenados em um determinado momento. Quando as tabelas existem mas estão vazias, o banco está em um estado inicial vazio. Ao inserir os primeiros registros, o banco transita para um novo estado — com dados concretos. O Esquema (estrutura das tabelas) permanece o mesmo; o que muda é o conteúdo, ou seja, o estado atual do banco de dados."
      },
      {
        "question": "Durante a Black Friday, o sistema de e-commerce da loja TechShop registrou um pico de 50.000 pedidos por hora. Ao finalizar uma compra, o usuário recebia a mensagem: 'Pedido realizado com sucesso! Número do pedido: #892341'. Milissegundos após o envio dessa confirmação, o servidor de aplicação sofreu uma falha crítica de hardware e foi reiniciado de emergência. Quando o sistema voltou ao ar, a equipe de suporte verificou que o pedido #892341 estava devidamente registrado no banco de dados, como se nenhuma falha tivesse ocorrido. O cliente não precisou refazer o pedido.\n\nA propriedade ACID que garante que os dados do pedido sejam persistidos permanentemente, mesmo após a falha do servidor, é:",
        "options": [
          "Atomicidade",
          "Consistência",
          "Isolamento",
          "Durabilidade",
          "Disponibilidade"
        ],
        "answer": 3,
        "feedback": "✓ Resposta correta: D) Durabilidade\n\nPor que está certa: A Durabilidade é a propriedade ACID que garante que, uma vez confirmada (COMMIT), uma transação persiste permanentemente no banco de dados — mesmo em caso de falhas de hardware, quedas de energia ou reinicializações do sistema. O pedido #892341 foi confirmado antes da falha do servidor, portanto, pelo princípio da Durabilidade, seus dados devem estar permanentemente gravados no disco e disponíveis após a recuperação do sistema."
      },
      {
        "question": "Analise o seguinte fragmento de operações em um banco de dados bancário: read(A); /* lê o saldo atual da conta A = R$ 1.000,00 */ A := A - 50; /* subtrai R$ 50,00 */ write(A); /* grava o novo saldo A = R$ 950,00 no disco */ [FALHA DO SISTEMA --- energia cortada neste ponto] A operação complementar (creditar R$ 50,00 em outra conta) não chegou a ser executada. O sistema foi reiniciado, mas o mecanismo de recuperação não foi acionado para restaurar o valor original de A.\n\nApós esse cenário, sem o acionamento do sistema de recuperação, o banco de dados estará em um:",
        "options": [
          "Estado durável",
          "Estado consistente",
          "Estado inconsistente",
          "Nível de visão externo",
          "Esquema relacional"
        ],
        "answer": 2,
        "feedback": "✓ Resposta correta: C) Estado inconsistente\n\nPor que está certa: O banco de dados está em estado inconsistente quando as regras de integridade e as restrições de negócio não são satisfeitas. No cenário, R$ 50,00 saíram da conta A (debitado e gravado), mas não chegaram à conta destino — o dinheiro 'desapareceu' do sistema. Sem o mecanismo de recuperação (que faria o ROLLBACK da operação incompleta), o banco permanece em um estado inconsistente: a soma total dos saldos não se mantém, violando a regra fundamental de integridade financeira."
      },
      {
        "question": "Em um sistema de controle de estoque de uma farmácia, o processo de venda de um medicamento envolve duas operações interdependentes: registrar a saída do produto no histórico de vendas (INSERT em Vendas) e atualizar o estoque do produto (UPDATE em Estoque). Essas operações devem sempre ocorrer juntas --- nunca de forma isolada --- para que a farmácia não perca o controle de quantos medicamentos possui fisicamente. O gerente de TI definiu que essas operações devem ser agrupadas de forma que o sistema sempre passe de um estado íntegro (estoque e vendas sincronizados) para outro estado igualmente íntegro, sem jamais ficar em um estado intermediário.\n\nA unidade lógica de trabalho que agrupa essas operações e garante a passagem de um estado consistente a outro é chamada de:",
        "options": [
          "Tabela",
          "Atributo",
          "Transação",
          "Registro",
          "Campo"
        ],
        "answer": 2,
        "feedback": "✓ Resposta correta: C) Transação\n\nPor que está certa: Uma Transação é uma unidade lógica de trabalho que agrupa um conjunto de operações que devem ser executadas de forma atômica — todas juntas ou nenhuma. No contexto da farmácia, o INSERT em Vendas e o UPDATE em Estoque formam uma única transação: se qualquer uma das operações falhar, todo o grupo é desfeito (ROLLBACK), garantindo que o banco sempre passe de um estado consistente para outro, nunca ficando em estado intermediário."
      },
      {
        "question": "O Banco Central realizou uma auditoria nos sistemas de transferência interbancária do País. Os auditores verificaram que, após centenas de milhares de operações Pix entre diferentes contas e instituições, a soma total dos saldos de todas as contas do sistema permanecia matematicamente idêntica à soma inicial --- o dinheiro transferido de uma conta chegava integralmente à conta destino, sem perdas nem criação artificial de saldo. Os auditores concluíram que o SGBD estava corretamente implementando uma das propriedades ACID, responsável por garantir que as regras de negócio e restrições de integridade sejam sempre respeitadas após cada operação.\n\nA propriedade ACID responsável por garantir que a soma total dos saldos permaneça a mesma após todas as transferências é:",
        "options": [
          "Atomicidade",
          "Consistência",
          "Isolamento",
          "Durabilidade",
          "Indexação"
        ],
        "answer": 1,
        "feedback": "✓ Resposta correta: B) Consistência\n\nPor que está certa: A Consistência é a propriedade ACID que garante que uma transação leva o banco de um estado válido para outro estado igualmente válido, respeitando todas as regras de integridade e restrições de negócio definidas. No sistema financeiro, a regra de que 'a soma total dos saldos deve ser constante' é uma restrição de integridade: o dinheiro transferido de uma conta deve chegar integralmente à outra, sem perdas nem criação artificial de valores."
      },
      {
        "question": "O servidor do banco de dados de uma distribuidora de alimentos sofreu uma falha elétrica enquanto diversas transações estavam sendo processadas. Quando o sistema foi reiniciado, o DBA precisava garantir duas coisas: (1) que todas as transações que haviam sido parcialmente executadas antes da falha fossem completamente desfeitas, e (2) que todas as transações que haviam sido confirmadas (COMMIT) antes da falha tivessem seus efeitos garantidos no disco --- mesmo que a gravação física ainda não tivesse ocorrido. Para isso, o DBA acionou o componente específico do SGBD responsável por tratar esse tipo de situação.\n\nO componente do SGBD responsável por tratar falhas, garantindo tanto a atomicidade (desfazendo erros) quanto a durabilidade (garantindo gravações em disco), é o:",
        "options": [
          "Processador de consultas",
          "Sistema de recuperação",
          "Interface gráfica",
          "Gerenciador de rede",
          "Catálogo de dados"
        ],
        "answer": 1,
        "feedback": "✓ Resposta correta: B) Sistema de recuperação\n\nPor que está certa: O Sistema de Recuperação (Recovery Manager) é o componente do SGBD que entra em ação após falhas, garantindo as propriedades ACID de Atomicidade e Durabilidade. Ele utiliza o Log de Transações (arquivo de registro de todas as operações) para: (1) fazer UNDO (desfazer) das transações parcialmente executadas que não receberam COMMIT, e (2) fazer REDO (refazer) das transações confirmadas cujas alterações ainda não tinham sido gravadas fisicamente no disco no momento da falha."
      },
      {
        "question": "Em um sistema de e-commerce, o processo de finalização de compra envolve duas operações: inserir o pedido na tabela Pedidos e atualizar o estoque do produto na tabela Estoque. O desenvolvedor implementou a lógica de modo que, se o estoque for insuficiente para atender ao pedido, a transação inteira seja abortada --- nenhum pedido é inserido e o estoque permanece inalterado. Do ponto de vista do usuário, essas duas operações parecem ser uma única ação: 'fazer um pedido'. O sistema nunca entra em um estado onde o pedido existe mas o estoque não foi atualizado, nem vice-versa.\n\nO conceito que define essas operações como uma 'única unidade indivisível' do ponto de vista do usuário é:",
        "options": [
          "Persistência de dados",
          "Visão lógica de tabelas",
          "Atomicidade",
          "Abstração física",
          "Redundância de arquivos"
        ],
        "answer": 2,
        "feedback": "✓ Resposta correta: C) Atomicidade\n\nPor que está certa: A Atomicidade define que uma transação é uma unidade indivisível de trabalho — 'tudo ou nada'. No cenário do e-commerce, o INSERT em Pedidos e o UPDATE em Estoque formam uma transação atômica: ou ambas ocorrem com sucesso (COMMIT) ou nenhuma é aplicada (ROLLBACK). Nunca haverá um estado intermediário onde um pedido existe sem atualização de estoque. Do ponto de vista do usuário, a ação 'fazer um pedido' é indivisível, mesmo que internamente envolva múltiplas operações SQL."
      }
    ]
  },
  {
    "subject": "Aula 4 — Arquiteturas de Banco de Dados (Questões 31–40)",
    "questions": [
      {
        "question": "A rede de supermercados FrescaMais possui servidores regionais em cada capital brasileira. O estoque de cada loja é gerenciado localmente pelo servidor da região, mas os dados são replicados periodicamente para o servidor central em Brasília. Um analista no escritório de Brasília precisava verificar o estoque de laranjas no CD de Curitiba. Ao executar a consulta no sistema, o analista obteve o resultado sem precisar saber --- nem se preocupar --- em qual servidor o dado residia fisicamente, se estava sendo acessado localmente ou remotamente, ou qual protocolo de comunicação estava sendo utilizado.\n\nA propriedade do banco de dados distribuído que permite ao usuário interagir com o sistema sem precisar saber onde o dado está fisicamente armazenado é:",
        "options": [
          "Fragmentação Vertical",
          "Transparência de dados",
          "Arquitetura Centralizada",
          "Independência de Hardware de Mainframe",
          "Clusterização Monolítica"
        ],
        "answer": 1,
        "feedback": "✓ Resposta correta: B) Transparência de dados\n\nPor que está certa: A Transparência de dados é uma propriedade dos bancos de dados distribuídos que oculta do usuário os detalhes de como e onde os dados estão fisicamente armazenados. O usuário interage com o sistema como se fosse um banco de dados único e centralizado, sem precisar saber se o dado está em Curitiba, São Paulo ou Brasília, nem qual protocolo de rede está sendo usado para acessá-lo. Isso simplifica enormemente o uso do sistema distribuído."
      },
      {
        "question": "A startup NutriApp desenvolveu um aplicativo de saúde e precisava hospedar seu banco de dados. Sem capital para adquirir servidores físicos e contratar uma equipe de infraestrutura, a CTO decidiu contratar um serviço em nuvem onde o provedor seria responsável pela instalação do SGBD, configuração de backups automáticos, aplicação de patches de segurança e escalabilidade conforme a demanda. A equipe de TI da NutriApp ficaria responsável apenas por definir o esquema das tabelas, escrever as consultas SQL e gerenciar os dados da aplicação --- sem se preocupar com a camada de infraestrutura subjacente.\n\nEste modelo de serviço em nuvem, onde o provedor gerencia o SGBD e a infraestrutura, é classificado como:",
        "options": [
          "IaaS (Infraestrutura como um Serviço)",
          "SaaS (Software como um Serviço)",
          "DBaaS (Banco de Dados como um Serviço)",
          "Arquitetura de 2 camadas",
          "Cloud File-Server"
        ],
        "answer": 2,
        "feedback": "✓ Resposta correta: C) DBaaS (Banco de Dados como um Serviço)\n\nPor que está certa: O DBaaS (Database as a Service) é um modelo de serviço em nuvem onde o provedor gerencia toda a infraestrutura e o próprio SGBD — instalação, configuração, backups, patches de segurança, escalabilidade e alta disponibilidade. O cliente é responsável apenas pelos dados e pelo esquema do banco. Exemplos populares: Amazon RDS, Google Cloud SQL, Azure Database. Difere do IaaS (onde o cliente gerencia o SGBD) e do SaaS (onde o cliente usa uma aplicação completa)."
      },
      {
        "question": "O banco CapitalBank decidiu otimizar sua arquitetura de dados separando informações por finalidade. A tabela CONTA_CORRENTE foi dividida em dois fragmentos: o servidor de Auditoria recebeu as colunas Saldo e Limite (dados financeiros sensíveis), enquanto o servidor de Marketing recebeu as colunas Nome e Endereço (dados de relacionamento com o cliente). Quando o módulo de atendimento ao cliente precisava exibir as informações completas de um correntista --- incluindo nome, endereço, saldo e limite --- o sistema precisava combinar os dados dos dois servidores em uma única visão consolidada.\n\nA técnica que divide a tabela por colunas em diferentes servidores, exigindo uma operação de junção para reconstruir a visão completa, é chamada de:",
        "options": [
          "Fragmentação Horizontal",
          "Replicação de Tuplas",
          "Fragmentação Vertical",
          "Processamento Centralizado",
          "Transparência de Replicação"
        ],
        "answer": 2,
        "feedback": "✓ Resposta correta: C) Fragmentação Vertical\n\nPor que está certa: A Fragmentação Vertical divide uma tabela por colunas (atributos), distribuindo grupos de colunas em diferentes servidores. No cenário, as colunas Saldo e Limite ficaram no servidor de Auditoria, enquanto Nome e Endereço ficaram no servidor de Marketing — ambos os fragmentos mantêm a chave primária para permitir a junção. Em contraste, a Fragmentação Horizontal divide uma tabela por linhas (tuplas), distribuindo subconjuntos de registros em diferentes servidores."
      },
      {
        "question": "A plataforma de vendas MegaShop utiliza uma arquitetura de 3 camadas: a camada de apresentação (navegador do usuário), a camada de negócio (servidor de aplicação com as regras de validação de crédito, cálculo de frete e processamento de pagamento) e a camada de dados (servidor de banco de dados). Durante a Black Friday, com tráfego 20 vezes acima do normal, os usuários conseguiam navegar pelo catálogo e adicionar produtos ao carrinho normalmente, mas ao tentar finalizar o pagamento, recebiam a mensagem 'Serviço temporariamente indisponível'. O DBA confirmou que o servidor de banco de dados estava operando normalmente. A equipe de infraestrutura identificou que o gargalo estava na camada que processa as regras de validação de crédito e cálculo de frete.\n\nO gargalo identificado durante a Black Friday está na:",
        "options": [
          "Camada de Cliente (Front-end)",
          "Camada Interna do SGBD",
          "Camada de Interface Gráfica",
          "Camada Intermediária (Servidor de Aplicação)",
          "Camada de Armazenamento Físico"
        ],
        "answer": 3,
        "feedback": "✓ Resposta correta: D) Camada Intermediária (Servidor de Aplicação)\n\nPor que está certa: Na arquitetura de 3 camadas, a Camada Intermediária (ou Camada de Negócio) é o Servidor de Aplicação, responsável por processar as regras de negócio — como validação de crédito, cálculo de frete e processamento de pagamento. Como o banco de dados (camada 3) estava normal e os usuários conseguiam navegar (camada 1 funcionando), o gargalo estava claramente na camada do meio, que processa as transações de pagamento e estava sobrecarregada com o volume da Black Friday."
      },
      {
        "question": "Uma rede de lojas de materiais de construção com 500 filiais utilizava uma arquitetura Cliente-Servidor de duas camadas. O software instalado em cada computador dos vendedores continha, além da interface gráfica, toda a lógica de cálculo de impostos sobre as vendas. Quando o governo federal alterou as alíquotas do ICMS, o departamento de TI precisou atualizar o software em todos os 500 computadores da rede --- um processo que levou 3 dias e custou R$ 45.000,00 em mão de obra. O diretor de TI apresentou à diretoria o problema estrutural causado pela arquitetura adotada.\n\nA desvantagem que obrigou a atualização em cada um dos 500 computadores decorre de:",
        "options": [
          "Alta escalabilidade",
          "Facilidade de manutenção centralizada",
          "Dependência da lógica de negócio residir no lado do cliente",
          "Transparência de rede",
          "Replicação horizontal automática"
        ],
        "answer": 2,
        "feedback": "✓ Resposta correta: C) Dependência da lógica de negócio residir no lado do cliente\n\nPor que está certa: Na arquitetura Cliente-Servidor de 2 camadas com 'fat client' (cliente gordo), a lógica de negócio fica instalada nos computadores clientes. Isso significa que qualquer alteração nas regras de negócio (como mudança nas alíquotas do ICMS) exige atualização em TODOS os computadores clientes individualmente — processo caro, demorado e propenso a erros. Na arquitetura de 3 camadas, a lógica estaria centralizada no servidor de aplicação, e a atualização ocorreria em um único ponto."
      },
      {
        "question": "Nos primórdios da computação corporativa, grandes empresas e órgãos governamentais utilizavam computadores de grande porte para processar todos os dados da organização. Os funcionários interagiam com o sistema por meio de terminais conectados ao computador central --- dispositivos que possuíam apenas teclado e monitor, sem processador próprio nem capacidade de armazenamento local. Todo o processamento das transações, toda a execução dos programas e todo o armazenamento de dados ocorriam exclusivamente naquele único equipamento central.\n\nA arquitetura descrita, com processamento e armazenamento concentrados em um único mainframe e terminais sem poder de processamento próprio, é chamada de:",
        "options": [
          "Cliente-Servidor de 3 camadas",
          "Arquitetura Distribuída",
          "Banco de Dados em Nuvem",
          "Arquitetura Centralizada",
          "Arquitetura de Nó Replicado"
        ],
        "answer": 3,
        "feedback": "✓ Resposta correta: D) Arquitetura Centralizada\n\nPor que está certa: A Arquitetura Centralizada concentra todo o processamento, armazenamento e execução de programas em um único computador central (mainframe). Os usuários acessam o sistema por terminais 'burros' (dumb terminals), que não possuem capacidade de processamento próprio — apenas exibem resultados e enviam entradas. É o modelo mais antigo de computação corporativa, oposto às arquiteturas distribuídas e cliente-servidor que surgiram posteriormente."
      },
      {
        "question": "A empresa farmacêutica BioLab decidiu migrar toda a sua infraestrutura de banco de dados para a nuvem. O gestor de segurança da informação, em reunião com o conselho, levantou uma preocupação específica: com os dados hospedados em servidores de terceiros, a empresa perderia o controle físico direto sobre os discos onde as informações confidenciais de pesquisa e desenvolvimento --- incluindo fórmulas patenteadas --- estavam armazenadas. Além disso, em caso de vazamento de dados, a questão de responsabilidade legal perante a LGPD seria mais complexa quando o dado não estivesse em infraestrutura própria.\n\nO risco de segurança e a responsabilidade legal levantados pelo gestor são características associadas à adoção de:",
        "options": [
          "Sistemas Distribuídos",
          "Computação em Nuvem (Cloud)",
          "Arquitetura Cliente-Servidor",
          "Fragmentação Vertical",
          "Transparência de Replicação"
        ],
        "answer": 1,
        "feedback": "✓ Resposta correta: B) Computação em Nuvem (Cloud)\n\nPor que está certa: A Computação em Nuvem apresenta desafios específicos de segurança e conformidade legal: os dados ficam armazenados em servidores de terceiros (o provedor de nuvem), e a empresa perde o controle físico direto sobre a infraestrutura. Isso gera preocupações com: soberania dos dados, conformidade com leis como a LGPD (especialmente em caso de vazamentos), dependência do provedor e riscos de acesso não autorizado. Esses são trade-offs conhecidos e documentados da adoção de soluções cloud."
      },
      {
        "question": "O sistema de gestão de uma universidade federal foi desenvolvido em arquitetura de três camadas. A camada 1 é o portal web acessado pelos alunos. A camada 3 é o servidor Oracle com todos os dados acadêmicos. A camada intermediária é responsável por receber as requisições dos alunos, verificar se o aluno está dentro do prazo de matrícula, calcular se há pré-requisitos atendidos e, somente após essas validações, emitir o comando SQL ao banco de dados. Um professor questionou a necessidade dessa camada intermediária, sugerindo que os alunos acessassem diretamente o banco de dados. O arquiteto do sistema precisava explicar a função específica dessa camada.\n\nNa arquitetura de três camadas, o componente que recebe as solicitações do usuário, aplica regras de negócio e envia os comandos SQL ao banco de dados é:",
        "options": [
          "O Servidor de Banco de Dados",
          "O Terminal do Usuário",
          "O Servidor de Aplicação (ou Web)",
          "O Catálogo de Metadados",
          "O Disco Rígido (SSD)"
        ],
        "answer": 2,
        "feedback": "✓ Resposta correta: C) O Servidor de Aplicação (ou Web)\n\nPor que está certa: Na arquitetura de 3 camadas, o Servidor de Aplicação (ou Servidor Web) é a camada intermediária responsável por centralizar a lógica de negócio. Ele recebe as requisições dos usuários (camada de apresentação), aplica as regras de negócio (verificação de prazos, pré-requisitos, validações), e só então interage com o banco de dados (camada de dados) para executar as operações necessárias. Isso garante segurança, manutenibilidade e escalabilidade do sistema."
      },
      {
        "question": "O banco digital GlobalPay opera em três continentes --- Américas, Europa e Ásia --- e precisa garantir que seus clientes tenham acesso de baixa latência ao histórico de transações independentemente de onde estejam. Para isso, a equipe de arquitetura decidiu manter a tabela TRANSACAO integralmente duplicada em servidores localizados em São Paulo, Frankfurt e Singapura. Cada servidor possui uma cópia idêntica e atualizada da tabela. Se o servidor de Frankfurt sofrer uma falha, os clientes europeus são redirecionados para Singapura sem interrupção do serviço.\n\nA técnica de armazenamento utilizada, que mantém cópias idênticas de uma tabela em múltiplos servidores, é chamada de:",
        "options": [
          "Fragmentação Horizontal",
          "Fragmentação Vertical",
          "Replicação de Dados",
          "Arquitetura Centralizada",
          "Mapeamento de 3 camadas"
        ],
        "answer": 2,
        "feedback": "✓ Resposta correta: C) Replicação de Dados\n\nPor que está certa: A Replicação de Dados consiste em manter cópias idênticas (réplicas) de um mesmo conjunto de dados em múltiplos servidores geograficamente distribuídos. Os benefícios são: (1) Alta disponibilidade — se um servidor falha, os outros assumem sem interrupção; (2) Baixa latência — cada usuário acessa o servidor mais próximo geograficamente; (3) Balanceamento de carga — as consultas são distribuídas entre as réplicas. É diferente da fragmentação, que divide os dados entre os servidores."
      },
      {
        "question": "Uma empresa de software desenvolveu um sistema ERP que precisava funcionar com diferentes SGBDs dependendo do cliente: alguns usavam Oracle, outros SQL Server, outros MySQL. Para não reescrever o código de acesso ao banco a cada novo cliente, a equipe adotou um padrão de conectividade que permite ao programa cliente se conectar a qualquer SGBD por meio de uma interface de programação única e padronizada. Com essa solução, bastava instalar o driver específico do SGBD desejado na máquina cliente, e o código da aplicação permanecia idêntico, independentemente do banco de dados utilizado.\n\nO padrão de conectividade descrito, fundamental em arquiteturas cliente-servidor, que permite que programas se conectem a diferentes SGBDs por meio de uma API padronizada, é o:",
        "options": [
          "ODBC (Open Database Connectivity)",
          "Eliminação da necessidade de um servidor de banco de dados físico",
          "Transformação de bancos relacionais em bancos orientados a objetos",
          "Garantia de que o banco de dados nunca sofra fragmentação",
          "Linguagem de consulta usada exclusivamente em mainframes"
        ],
        "answer": 0,
        "feedback": "✓ Resposta correta: A) ODBC (Open Database Connectivity)\n\nPor que está certa: O ODBC (Open Database Connectivity) é um padrão de API desenvolvido pela Microsoft que permite que aplicações se comuniquem com diferentes SGBDs por meio de uma interface padronizada. O código da aplicação permanece o mesmo; apenas o driver ODBC específico do SGBD muda. Isso proporciona portabilidade: o mesmo programa pode funcionar com Oracle, SQL Server, MySQL ou PostgreSQL sem reescrita do código de acesso ao banco. O JDBC (Java Database Connectivity) é o equivalente para aplicações Java."
      }
    ]
  },
  {
    "subject": "Aula 5 — Diagrama Entidade e Relacionamento (Questões 41–50)",
    "questions": [
      {
        "question": "Uma locadora de veículos contratou um analista de sistemas para modelar seu banco de dados. Durante o levantamento de requisitos, o analista identificou que a entidade Carro deveria ter, entre seus atributos, o campo Acessórios. A gerente de operações explicou que um único carro pode estar equipado com múltiplos acessórios simultaneamente, como rádio, ar-condicionado, GPS e teto solar. O analista precisava determinar a forma correta de representar esse atributo no Diagrama Entidade-Relacionamento (DER), distinguindo-o de atributos que possuem um único valor por instância.\n\nConsiderando que um carro pode ter rádio, ar-condicionado e GPS simultaneamente, no DER o atributo Acessórios deve ser representado como:",
        "options": [
          "Atributo Simples",
          "Atributo Chave",
          "Atributo Multivalorado",
          "Atributo Composto",
          "Atributo Derivado"
        ],
        "answer": 2,
        "feedback": "✓ Resposta correta: C) Atributo Multivalorado\n\nPor que está certa: Um Atributo Multivalorado é aquele que pode conter múltiplos valores para uma mesma instância da entidade. No DER de Peter Chen, é representado por uma elipse dupla (elipse dentro de elipse). No caso, um único carro pode ter vários acessórios simultaneamente (rádio, ar-condicionado, GPS, teto solar) — cada valor é independente e válido. Diferente do Atributo Composto (que é formado por sub-partes), o Multivalorado tem múltiplas ocorrências do mesmo tipo de valor."
      },
      {
        "question": "Em um sistema de controle acadêmico de uma faculdade, a entidade Aluno possui os seguintes atributos: Matricula (identificador único), Nome, Data_Nascimento e Idade. Durante a revisão do modelo com a equipe de qualidade de dados, um analista observou que manter o campo Idade no banco de dados poderia gerar inconsistências --- pois a idade muda a cada aniversário, e o banco precisaria ser atualizado constantemente para manter o dado correto. A solução proposta foi calcular a idade dinamicamente, com base na Data_Nascimento já armazenada, toda vez que essa informação fosse consultada.\n\nO atributo Idade, que não é armazenado diretamente mas calculado com base na Data de Nascimento, é classificado como:",
        "options": [
          "Monovalorado",
          "Composto",
          "Derivado",
          "Nulo",
          "Determinante"
        ],
        "answer": 2,
        "feedback": "✓ Resposta correta: C) Derivado\n\nPor que está certa: Um Atributo Derivado é aquele cujo valor pode ser calculado ou inferido a partir de outro atributo já armazenado. No DER de Peter Chen, é representado por uma elipse tracejada (pontilhada). A Idade é derivada da Data_Nascimento: a qualquer momento, basta calcular a diferença entre a data atual e a data de nascimento. Armazenar a Idade diretamente causaria inconsistências (o dado envelhece sem atualização automática), portanto o correto é tratá-la como derivada."
      },
      {
        "question": "O sistema de informação de uma clínica médica precisa registrar que, durante uma consulta específica entre o Dr. Rafael e o paciente João Silva, foram prescritos os medicamentos Paracetamol 500mg e Dipirona 1g. A analista responsável pelo modelo percebeu que a relação de prescrição não é simples: ela só faz sentido quando se conhece SIMULTANEAMENTE o médico que prescreveu, o paciente que recebeu e a consulta em que isso aconteceu. Uma representação que envolvesse apenas dois elementos de cada vez não capturaria corretamente essa dependência tripla --- pois o mesmo médico pode prescrever o mesmo medicamento para pacientes diferentes em consultas diferentes.\n\nPara representar que a prescrição depende da ocorrência específica da consulta, envolvendo Médico, Paciente e Medicamento simultaneamente, o projetista deve utilizar um:",
        "options": [
          "Relacionamento Binário Simples",
          "Autorrelacionamento",
          "Relacionamento Ternário",
          "Atributo Multivalorado",
          "Esquema Físico DDL"
        ],
        "answer": 2,
        "feedback": "✓ Resposta correta: C) Relacionamento Ternário\n\nPor que está certa: Um Relacionamento Ternário envolve exatamente três entidades participando simultaneamente de um mesmo relacionamento. É usado quando o significado do relacionamento só pode ser capturado pela combinação das três entidades ao mesmo tempo — um relacionamento binário entre quaisquer dois dos três pares não seria suficiente para representar a semântica correta. No caso da clínica, a prescrição envolve Médico, Paciente e Medicamento simultaneamente, e só faz sentido quando as três entidades estão presentes juntas."
      },
      {
        "question": "O regulamento interno de uma empresa estabelece que todo funcionário contratado deve ser obrigatoriamente alocado em um departamento para iniciar suas atividades. Não é permitido que um funcionário exista no sistema sem estar vinculado a um departamento --- o campo ID_Departamento é obrigatório no cadastro e não pode ser deixado em branco. A analista de modelagem de dados precisava representar essa regra de negócio no Diagrama Entidade-Relacionamento entre as entidades Funcionário e Departamento.\n\nA regra que exige que todo funcionário esteja obrigatoriamente alocado em um departamento define, no DER, uma:",
        "options": [
          "Restrição de Participação Parcial",
          "Restrição de Participação Total",
          "Cardinalidade 1:1 obrigatória bidirecional",
          "Especialização Exclusiva",
          "Entidade Isolada"
        ],
        "answer": 1,
        "feedback": "✓ Resposta correta: B) Restrição de Participação Total\n\nPor que está certa: A Restrição de Participação Total (também chamada de dependência existencial) indica que TODAS as instâncias de uma entidade devem obrigatoriamente participar de um relacionamento. No DER de Peter Chen, é representada por linha dupla entre a entidade e o relacionamento. No cenário, todo funcionário deve obrigatoriamente estar alocado em um departamento — nenhum funcionário pode existir no sistema sem esse vínculo. A Participação Parcial, ao contrário, permite que algumas instâncias não participem do relacionamento."
      },
      {
        "question": "Durante o projeto do banco de dados de um sistema de CRM, o DBA definiu que a entidade Clientes teria um atributo chamado Endereço. Ao detalhar esse atributo com a equipe de negócios, ficou estabelecido que o endereço deveria ser composto por quatro informações distintas: Rua, Número, Bairro e CEP --- cada uma com seu próprio significado e possibilidade de consulta individual. Essa decisão permitiria, por exemplo, filtrar clientes por CEP ou Bairro --- consultas que não seriam possíveis se o endereço fosse armazenado como um único campo de texto.\n\nO atributo Endereço, formado pelas partes Rua, Número, Bairro e CEP, é caracterizado no DER como um:",
        "options": [
          "Atributo Simples",
          "Atributo-Chave",
          "Atributo Composto",
          "Atributo Derivado",
          "Atributo Multivalorado"
        ],
        "answer": 2,
        "feedback": "✓ Resposta correta: C) Atributo Composto\n\nPor que está certa: Um Atributo Composto é formado por sub-atributos que podem ser tratados de forma independente. No DER, o atributo Endereço se ramifica em Rua, Número, Bairro e CEP — cada parte com seu próprio significado e utilidade. Isso permite consultas específicas por sub-atributo (filtrar por CEP, agrupar por Bairro). Diferente do Atributo Simples (valor único e indivisível) e do Atributo Multivalorado (múltiplos valores do mesmo tipo), o Composto tem sub-partes logicamente distintas."
      },
      {
        "question": "Uma empresa de varejo online decidiu criar um novo sistema de gestão de pedidos. Antes de escrever qualquer linha de código ou criar qualquer tabela, a equipe de TI realizou reuniões com as áreas de negócio para entender as necessidades. Em seguida, as regras identificadas foram organizadas em uma representação estruturada que permitia visualizar as entidades do negócio, seus atributos e as relações entre elas. O objetivo dessa etapa era eliminar possíveis redundâncias e inconsistências na estrutura dos dados antes que o banco fosse fisicamente criado --- economizando retrabalho e garantindo qualidade na modelagem.\n\nA técnica de planejamento que transforma uma ideia conceitual em algo traduzível para termos computacionais, visando eliminar redundâncias antes da criação física do banco, é:",
        "options": [
          "Engenharia Reversa",
          "Modelagem de Dados",
          "Compilação DML",
          "Indexação Primária",
          "Normalização de Hardware"
        ],
        "answer": 1,
        "feedback": "✓ Resposta correta: B) Modelagem de Dados\n\nPor que está certa: A Modelagem de Dados é o processo de levantamento, análise e representação estruturada das informações de um domínio de negócio antes da implementação física do banco de dados. Envolve a criação de modelos como o Diagrama Entidade-Relacionamento (DER), que representa entidades, atributos e relacionamentos de forma visual e conceitual. O objetivo é garantir que a estrutura do banco seja coerente, sem redundâncias e alinhada com as necessidades do negócio, antes de qualquer implementação."
      },
      {
        "question": "Um estudante de Banco de Dados está analisando um Diagrama Entidade-Relacionamento (DER) no modelo proposto por Peter Chen. No diagrama, ele observa três tipos diferentes de símbolos geométricos: figuras com quatro lados iguais e ângulos retos, figuras com quatro lados iguais e ângulos de 45 graus (em forma de losango), e figuras ovais. Para interpretar corretamente o diagrama, o estudante precisa saber o que cada símbolo representa na notação de Peter Chen.\n\nNo DER padrão de Peter Chen, os símbolos Retângulo, Losango e Elipse representam, respectivamente:",
        "options": [
          "Atributo, Entidade, Relacionamento",
          "Relacionamento, Entidade, Atributo",
          "Entidade, Relacionamento, Atributo",
          "Entidade, Atributo, Relacionamento",
          "Chave Primária, Tabela, Registro"
        ],
        "answer": 2,
        "feedback": "✓ Resposta correta: C) Entidade, Relacionamento, Atributo\n\nPor que está certa: Na notação clássica de Peter Chen para o DER, os símbolos têm significados fixos: o Retângulo representa Entidades (objetos do mundo real, como Cliente, Produto, Pedido); o Losango representa Relacionamentos (associações entre entidades, como 'faz', 'contém', 'pertence'); e a Elipse representa Atributos (propriedades das entidades ou dos relacionamentos, como Nome, CPF, Data). Essa notação é fundamental e deve ser memorizada para interpretação correta de diagramas."
      },
      {
        "question": "O analista de sistemas do departamento de RH de uma corporação precisava modelar o sistema de gestão de equipes. A regra de negócio estabelecia que cada funcionário poderia gerenciar outros funcionários --- ou seja, um gerente é também um funcionário, e seus subordinados são igualmente funcionários da mesma empresa. Ao construir o DER, o analista percebeu que precisava criar uma associação entre a entidade Funcionário e ela mesma, representando a hierarquia de gestão sem criar entidades redundantes.\n\nO relacionamento em que uma entidade se associa a instâncias da própria entidade, como no caso de Funcionário gerenciando outros Funcionários, é chamado de:",
        "options": [
          "Relacionamento Ternário",
          "Agregação",
          "Autorrelacionamento",
          "Especialização Total",
          "Entidade Associativa"
        ],
        "answer": 2,
        "feedback": "✓ Resposta correta: C) Autorrelacionamento\n\nPor que está certa: O Autorrelacionamento (também chamado de relacionamento unário ou reflexivo) ocorre quando uma entidade se relaciona com instâncias de si mesma. No DER, o losango do relacionamento conecta de volta à mesma entidade. É comum em hierarquias: um Funcionário 'gerencia' outros Funcionários, uma Categoria 'contém' subcategorias, um Produto 'compõe' outros Produtos. O papel de cada participante no relacionamento é diferente (gerente vs. subordinado), mesmo sendo da mesma entidade."
      },
      {
        "question": "O analista de um sistema de vendas de uma distribuidora levantou as seguintes regras de negócio: um único pedido de venda pode conter vários produtos diferentes (ex.: canetas, cadernos e borrachas no mesmo pedido); e um produto pode aparecer em múltiplos pedidos diferentes ao longo do tempo (ex.: a caneta BIC foi vendida em 500 pedidos diferentes no mês). Ao modelar o relacionamento entre as entidades Venda e Produto no DER, o analista precisava determinar a razão de cardinalidade correta para esse relacionamento.\n\n'Uma venda pode conter vários produtos, e um produto pode estar presente em várias vendas'. A razão de cardinalidade deste relacionamento é:",
        "options": [
          "1:1",
          "1:N",
          "N:1",
          "N:N (Muitos-para-Muitos)",
          "0:1"
        ],
        "answer": 3,
        "feedback": "✓ Resposta correta: D) N:N (Muitos-para-Muitos)\n\nPor que está certa: A Razão de Cardinalidade N:N (Muitos-para-Muitos) ocorre quando uma instância de uma entidade pode se relacionar com muitas instâncias da outra, e vice-versa. No cenário: uma Venda pode conter N Produtos, E um Produto pode aparecer em N Vendas. Ambos os lados têm cardinalidade 'muitos'. No modelo relacional, relacionamentos N:N são implementados com uma tabela associativa (ou tabela de junção) que contém as chaves estrangeiras das duas entidades relacionadas."
      },
      {
        "question": "O ISBN (International Standard Book Number) é um código numérico de 13 dígitos atribuído internacionalmente a cada edição de cada livro publicado no mundo. Por definição, nenhum dois livros podem compartilhar o mesmo ISBN --- cada código identifica exatamente uma obra específica. Ao modelar a entidade Livro em um sistema de biblioteca, o analista precisava definir quais atributos seriam responsáveis por identificar unicamente cada instância da entidade, distinguindo-a de todas as demais.\n\nNo MER, o atributo ISBN, que identifica de forma única cada instância da entidade Livro, será definido como:",
        "options": [
          "Atributo Composto",
          "Atributo-Chave (ou Chave Primária)",
          "Relacionamento Binário",
          "Entidade Especializada",
          "Valor Nulo"
        ],
        "answer": 1,
        "feedback": "✓ Resposta correta: B) Atributo-Chave (ou Chave Primária)\n\nPor que está certa: O Atributo-Chave (ou atributo identificador) é aquele que identifica de forma única cada instância de uma entidade no modelo. No DER de Peter Chen, é representado com o nome sublinhado dentro da elipse. O ISBN é o identificador perfeito para a entidade Livro: é único mundialmente, nunca nulo e não se repete. No modelo relacional, o atributo-chave do MER se torna a Chave Primária da tabela correspondente."
      }
    ]
  },
  {
    "subject": "Aula 6 — Modelo Entidade Relacionamento (Questões 51–60)",
    "questions": [
      {
        "question": "O professor de Banco de Dados da disciplina apresentou aos alunos a terminologia formal do Modelo Relacional proposta por Edgar Codd. Durante a aula, ele destacou que muitos profissionais da área utilizam termos do dia a dia (como 'tabela', 'linha' e 'coluna') que têm equivalentes formais na teoria matemática dos conjuntos na qual o modelo relacional se fundamenta. Para uma questão do ENADE, o aluno Lucas precisava associar corretamente os termos formais a seus conceitos: o conjunto de valores permitidos para um atributo, uma linha da tabela e a própria tabela.\n\nNa terminologia formal do Modelo Relacional, os termos que correspondem, respectivamente, ao conjunto de valores permitidos para um atributo, a uma linha da tabela e à própria tabela são:",
        "options": [
          "Atributo, Registro, Arquivo",
          "Domínio, Tupla, Relação",
          "Campo, Linha, Tabela",
          "Tipo, Fato, Entidade",
          "Chave, Instância, Esquema"
        ],
        "answer": 1,
        "feedback": "✓ Resposta correta: B) Domínio, Tupla, Relação\n\nPor que está certa: O Modelo Relacional de Codd tem terminologia formal matemática: Domínio é o conjunto de valores permitidos para um atributo (ex.: domínio de 'Sexo' = {M, F}); Tupla é uma linha da tabela — um conjunto ordenado de valores, um para cada atributo; Relação é a própria tabela — um conjunto de tuplas com o mesmo esquema. Os termos informais equivalentes são: Domínio ≈ Tipo de dado, Tupla ≈ Linha/Registro, Relação ≈ Tabela."
      },
      {
        "question": "O DBA Thiago tentou executar o seguinte comando no banco de dados do sistema de vendas: DELETE FROM Clientes WHERE IdCliente = 1042. O SGBD retornou uma mensagem de erro: 'Violação de restrição: não é possível excluir o registro pai quando existem registros filhos na tabela Vendas que referenciam este cliente.' Thiago verificou que o cliente de ID 1042 possuía 23 vendas registradas. O sistema estava protegendo a integridade estrutural do banco ao impedir a criação de registros órfãos --- vendas sem cliente.\n\nA proteção que impediu a exclusão do cliente com vendas dependentes é garantida pela:",
        "options": [
          "Restrição de Integridade de Entidade",
          "Restrição de Chave Primária",
          "Restrição de Integridade Referencial",
          "Regra de Domínio Atômico",
          "Independência Física dos Dados"
        ],
        "answer": 2,
        "feedback": "✓ Resposta correta: C) Restrição de Integridade Referencial\n\nPor que está certa: A Restrição de Integridade Referencial garante que toda chave estrangeira em uma tabela filho (Vendas.IdCliente) referencie um valor existente na chave primária da tabela pai (Clientes.IdCliente). Ao tentar excluir o cliente 1042, o SGBD detectou que existem 23 registros na tabela Vendas referenciando esse cliente — excluir o pai criaria 23 'registros órfãos' (vendas sem cliente), violando a integridade referencial. O SGBD corretamente bloqueou a operação."
      },
      {
        "question": "Edgar Codd, criador do Modelo Relacional, estabeleceu 12 regras para que um sistema seja considerado verdadeiramente relacional. Uma dessas regras determina que todo valor armazenado em um banco de dados relacional deve ser acessível de forma determinística --- sem ambiguidade --- a partir de três informações: o nome da tabela onde está armazenado, o valor que identifica unicamente a linha (chave primária) e o nome da coluna que contém o dado. Essa regra garante que nenhum dado fique 'perdido' ou inacessível dentro do banco de dados.\n\nA regra de Codd que garante que cada dado seja acessível através da combinação do nome da tabela, valor da chave primária e nome da coluna é a:",
        "options": [
          "Regra da Independência de Distribuição",
          "Regra do Tratamento de Valores Nulos",
          "Regra do Acesso Lógico",
          "Regra da Independência Física",
          "Regra da Linguagem Não-Procedural"
        ],
        "answer": 2,
        "feedback": "✓ Resposta correta: C) Regra do Acesso Lógico\n\nPor que está certa: A Regra do Acesso Lógico (Regra 2 de Codd) estabelece que cada valor atômico em um banco de dados relacional deve ser acessível de forma única e determinística por meio de três informações: nome da relação (tabela) + valor da chave primária (identificador da linha) + nome do atributo (coluna). Isso garante que nenhum dado seja inacessível ou ambíguo, e que qualquer valor possa ser localizado com precisão dentro do banco de dados relacional."
      },
      {
        "question": "Ao projetar o banco de dados de uma empresa, o analista identificou que dois atributos da tabela Funcionários são capazes de identificar de forma única cada funcionário: a Matricula (código interno atribuído pela empresa) e o CPF (documento oficial emitido pela Receita Federal). Ambos os atributos são únicos e não nulos. O projetista precisou escolher qual dos dois seria a chave primária da tabela. Optou pela Matricula, pois é um dado interno e controlado pela empresa. O CPF permaneceu na tabela como um atributo único, mas sem ser a chave primária.\n\nNesse contexto, o CPF é classificado como:",
        "options": [
          "Chave Estrangeira",
          "Super-chave Redundante",
          "Chave Candidata",
          "Domínio Composto",
          "Tupla Órfã"
        ],
        "answer": 2,
        "feedback": "✓ Resposta correta: C) Chave Candidata\n\nPor que está certa: Uma Chave Candidata é todo atributo (ou conjunto mínimo de atributos) capaz de identificar unicamente cada tupla de uma relação. Quando existem múltiplas chaves candidatas, o projetista escolhe uma como Chave Primária — as demais permanecem como Chaves Alternativas (ou candidatas não escolhidas). No cenário, tanto Matricula quanto CPF são chaves candidatas: ambas identificam unicamente cada funcionário. Matricula foi escolhida como primária, e CPF permanece como chave candidata alternativa."
      },
      {
        "question": "Ao converter o Diagrama Entidade-Relacionamento do sistema de uma livraria para o modelo relacional, o analista chegou ao relacionamento entre Venda e Produto: uma venda pode conter vários produtos, e um produto pode aparecer em várias vendas. Esse tipo de relacionamento (N:N) apresenta um desafio específico na implementação relacional, pois não é possível representá-lo diretamente apenas com colunas nas tabelas existentes. O analista precisava definir a prática correta para mapear esse relacionamento no banco de dados relacional.\n\nAo mapear um relacionamento Muitos-para-Muitos (N:N) do modelo DER para o modelo relacional, a prática correta é:",
        "options": [
          "Criar uma chave estrangeira em apenas uma das duas tabelas originais",
          "Fundir as duas entidades em uma única tabela gigante",
          "Criar uma nova tabela cuja chave primária é a combinação das chaves estrangeiras das tabelas relacionadas",
          "Adicionar atributos multivalorados em ambas as tabelas",
          "Ignorar o relacionamento, pois ele só existe na teoria"
        ],
        "answer": 2,
        "feedback": "✓ Resposta correta: C) Criar uma nova tabela cuja chave primária é a combinação das chaves estrangeiras das tabelas relacionadas\n\nPor que está certa: No modelo relacional, relacionamentos N:N não podem ser representados diretamente com chaves estrangeiras em uma das tabelas — isso causaria repetição ou perda de dados. A solução correta é criar uma Tabela Associativa (ou tabela de junção) que contém as chaves primárias das duas entidades como chaves estrangeiras, formando uma chave primária composta. Ex.: Venda_Produto(IdVenda FK, IdProduto FK) — a combinação (IdVenda, IdProduto) é a chave primária composta."
      },
      {
        "question": "Durante a implementação do banco de dados de um sistema de controle de processos judiciais, o DBA tentou inserir um processo sem informar o número do processo --- campo definido como chave primária. O SGBD rejeitou a operação com a mensagem: 'O valor de chave primária não pode ser nulo'. A restrição que impede esse tipo de inserção é fundamental para garantir que todo registro possa ser identificado e referenciado de forma única no banco de dados.\n\nA restrição de integridade que estabelece que nenhum valor de chave primária pode ser nulo (null) é chamada de:",
        "options": [
          "Restrição de Chave Estrangeira",
          "Restrição de Integridade de Entidade",
          "Restrição de Domínio",
          "Restrição de Transparência",
          "Restrição de ACID"
        ],
        "answer": 1,
        "feedback": "✓ Resposta correta: B) Restrição de Integridade de Entidade\n\nPor que está certa: A Restrição de Integridade de Entidade estabelece duas regras fundamentais para a chave primária: (1) o valor da chave primária nunca pode ser nulo (NULL), e (2) o valor da chave primária deve ser único para cada tupla. Essas regras garantem que toda entidade no banco possa ser identificada e referenciada de forma unívoca. É diferente da Integridade Referencial (que trata de chaves estrangeiras) e da Restrição de Domínio (que trata dos valores permitidos para um atributo)."
      },
      {
        "question": "Em uma aula de teoria de banco de dados, o professor apresentou o conceito de super-chave, chave candidata e chave primária. Para exemplificar, usou a tabela Funcionários com os seguintes atributos: ID, CPF, Nome, Departamento. O professor explicou que o conjunto {ID, CPF, Nome} identifica unicamente cada funcionário --- mas ao retirar o atributo 'Nome', o conjunto {ID, CPF} ainda identifica unicamente cada tupla. Ao retirar o 'CPF', o conjunto {ID} também identifica unicamente. Ao retirar o 'ID', o conjunto {CPF} identifica unicamente. Portanto, o conjunto original {ID, CPF, Nome} não é o conjunto mínimo --- ele contém atributos desnecessários.\n\nUm conjunto de atributos que identifica unicamente uma tupla, mas pode conter atributos desnecessários (não mínimo), é classificado como:",
        "options": [
          "Chave Candidata",
          "Chave Primária",
          "Super-chave",
          "Chave Estrangeira",
          "Relação de Grau Zero"
        ],
        "answer": 2,
        "feedback": "✓ Resposta correta: C) Super-chave\n\nPor que está certa: Uma Super-chave é qualquer conjunto de atributos que identifica unicamente cada tupla de uma relação — mas pode conter atributos redundantes (desnecessários para a identificação). Uma Chave Candidata é uma super-chave mínima: não possui atributos redundantes, e qualquer remoção de um atributo faz perder a propriedade de identificação única. Uma Chave Primária é a chave candidata escolhida pelo projetista. A hierarquia é: Super-chave ⊃ Chave Candidata ⊃ Chave Primária."
      },
      {
        "question": "O departamento de RH de uma empresa solicitou ao DBA que configurasse restrições para o campo Salario na tabela Funcionarios. As regras definidas pela área de RH eram: o salário deve ser um número real (com casas decimais), deve ser positivo, não pode ser menor que o salário mínimo vigente (R$ 1.212,00) e não pode ultrapassar o teto de R$ 50.000,00 mensais. O DBA precisava identificar qual conceito do modelo relacional estava sendo definido ao estabelecer essas regras para o campo.\n\nAo definir que a coluna Salário só aceita valores numéricos reais positivos entre R$ 1.212,00 e R$ 50.000,00, o DBA está definindo o:",
        "options": [
          "Esquema da Relação",
          "Domínio do Atributo",
          "Grau da Relação",
          "Cardinalidade da Tupla",
          "Gatilho de Transação"
        ],
        "answer": 1,
        "feedback": "✓ Resposta correta: B) Domínio do Atributo\n\nPor que está certa: O Domínio de um atributo é o conjunto de valores válidos que esse atributo pode assumir — incluindo tipo de dado, formato e restrições de valor. Ao definir que Salario deve ser DECIMAL, positivo, entre R$ 1.212,00 e R$ 50.000,00, o DBA está especificando o domínio do atributo Salario. Qualquer valor fora desse conjunto será rejeitado pelo SGBD com violação de restrição de domínio. O domínio é a base da integridade semântica dos dados."
      },
      {
        "question": "Em um sistema acadêmico, existem as seguintes tabelas: ALUNOS (CodAluno PK, Nome, Email) --- contém os registros dos alunos cadastrados. MATRICULA (CodMatricula PK, CodAlunoDisciplina FK, CodDisciplina FK, Periodo) --- registra as matrículas dos alunos nas disciplinas. O desenvolvedor tentou inserir na tabela MATRICULA um registro com CodAlunoDisciplina = 99. Porém, não existe nenhum aluno com CodAluno = 99 na tabela ALUNOS.\n\nAo tentar inserir na tabela MATRICULA um aluno com código '99' que não existe na tabela ALUNOS, qual restrição será violada?",
        "options": [
          "Integridade de Entidade",
          "Integridade Referencial",
          "Unicidade de Chave Primária",
          "Independência Lógica",
          "Atomicidade de Transação"
        ],
        "answer": 1,
        "feedback": "✓ Resposta correta: B) Integridade Referencial\n\nPor que está certa: A Integridade Referencial garante que todo valor de chave estrangeira em uma tabela filho deve referenciar um valor existente na chave primária da tabela pai. O campo CodAlunoDisciplina na tabela MATRICULA é uma chave estrangeira que referencia CodAluno na tabela ALUNOS. Ao tentar inserir o valor 99, que não existe em ALUNOS, o SGBD detecta a violação e rejeita a operação — pois não pode existir uma matrícula referenciando um aluno inexistente (registro órfão)."
      },
      {
        "question": "Na teoria do Modelo Relacional, uma variável relacional (relvar) é composta por duas partes fundamentais: o cabeçalho e o corpo. O corpo é o conjunto dinâmico de tuplas (linhas de dados que mudam com cada INSERT/UPDATE/DELETE), enquanto o cabeçalho é a parte estática que define a estrutura da relação. Um professor de banco de dados teórico pediu aos alunos que descrevessem formalmente do que é composto o cabeçalho de uma relvar no modelo relacional formal.\n\nO cabeçalho de uma variável relacional (relvar) no modelo formal é um conjunto de pares ordenados de:",
        "options": [
          "Tupla e Valor",
          "Nome de Tabela e Chave",
          "Domínio e Nome (Atributo)",
          "Registro e Arquivo",
          "Hardware e Software"
        ],
        "answer": 2,
        "feedback": "✓ Resposta correta: C) Domínio e Nome (Atributo)\n\nPor que está certa: No modelo relacional formal, o cabeçalho de uma relvar é definido como um conjunto de pares ordenados {(nome_atributo, domínio)}, onde cada par especifica o nome de um atributo e o domínio (conjunto de valores permitidos) desse atributo. O cabeçalho é a parte estrutural estática da relação — equivale ao esquema da tabela. O corpo, por sua vez, é o conjunto de tuplas (linhas) que constituem os dados atuais da relação e varia dinamicamente com as operações DML."
      }
    ]
  },
  {
    "subject": "Aula 7 — DER Estendido (EER) (Questões 61–70)",
    "questions": [
      {
        "question": "A empresa LogiTransp precisa modelar seu banco de dados de frota. Após análise do negócio, o arquiteto de dados identificou que a entidade Veículo é uma superclasse com duas especializações: Caminhão (com atributos específicos como Capacidade_Carga e NumEixos) e Carro_de_Passeio (com atributos como NumPortas e Categoria_CNH). Ao revisar o cadastro de veículos da empresa, o arquiteto confirmou que todos os veículos registrados são obrigatoriamente ou caminhões ou carros de passeio --- não existe nenhum veículo na empresa que não se enquadre em pelo menos uma dessas categorias.\n\nComo todos os veículos são obrigatoriamente um ou outro, e não existe veículo que não se encaixe em nenhuma subclasse, a especialização é classificada como:",
        "options": [
          "Especialização Parcial",
          "Especialização Total",
          "Agregação Binária",
          "Autorrelacionamento N:N",
          "Associação Unária"
        ],
        "answer": 1,
        "feedback": "✓ Resposta correta: B) Especialização Total\n\nPor que está certa: A Especialização Total (ou obrigatória) ocorre quando TODA instância da superclasse deve obrigatoriamente pertencer a pelo menos uma subclasse. No EER, é representada por linha dupla entre a superclasse e o símbolo de especialização. No caso da LogiTransp, todo veículo é necessariamente um Caminhão ou um Carro de Passeio — não existe veículo que não se enquadre em nenhuma subclasse. A Especialização Parcial, ao contrário, permite que algumas instâncias da superclasse não pertençam a nenhuma subclasse."
      },
      {
        "question": "Em um sistema de gestão universitária, o arquiteto definiu que a entidade Pessoa é superclasse das subclasses Aluno e Professor. A entidade Pessoa possui os atributos: ID, Nome, CPF, DataNascimento e Email. Ao definir os atributos específicos de Aluno (Matricula, Curso, Semestre) e Professor (SIAPE, Titulacao, Departamento), o arquiteto observou que não era necessário declarar novamente os campos Nome, CPF e Email em nenhuma das subclasses. Esse comportamento --- no qual subclasses recebem automaticamente os atributos da superclasse --- é um dos pilares do Modelo Entidade-Relacionamento Estendido (EER).\n\nO conceito central do EER que permite que Aluno e Professor recebam automaticamente todos os atributos de Pessoa é chamado de:",
        "options": [
          "Encapsulamento",
          "Agregação",
          "Herança de Propriedades",
          "Polimorfismo Relacional",
          "Abstração de Hardware"
        ],
        "answer": 2,
        "feedback": "✓ Resposta correta: C) Herança de Propriedades\n\nPor que está certa: A Herança de Propriedades é o mecanismo do EER pelo qual as subclasses herdam automaticamente todos os atributos, relacionamentos e restrições da superclasse. Assim, Aluno e Professor herdam automaticamente ID, Nome, CPF, DataNascimento e Email de Pessoa, sem necessidade de redeclaração. Cada subclasse acrescenta apenas seus atributos específicos. Esse conceito é análogo à herança da Programação Orientada a Objetos e é um dos principais diferenciais do EER em relação ao ER básico."
      },
      {
        "question": "Em um sistema de gestão de projetos de TI, a analista identificou o seguinte cenário: vários programadores trabalham em vários projetos (relacionamento N:N), e para cada combinação específica de programador-projeto, é necessário registrar quais linguagens de programação foram utilizadas. A analista percebeu que não poderia simplesmente criar um relacionamento ternário direto entre Programador, Projeto e Linguagem, pois isso não capturaria corretamente a dependência: a linguagem só está vinculada à COMBINAÇÃO específica de programador e projeto, não a cada um individualmente.\n\nA técnica do EER que eleva o relacionamento N:N Programador-Projeto ao status de entidade, permitindo associá-lo a Linguagens, é:",
        "options": [
          "Especialização Parcial",
          "Generalização Total",
          "Agregação",
          "Entidade Fraca",
          "Autorrelacionamento Ternário"
        ],
        "answer": 2,
        "feedback": "✓ Resposta correta: C) Agregação\n\nPor que está certa: A Agregação é uma técnica do EER que trata um relacionamento como uma entidade de nível superior, permitindo que ele participe de outros relacionamentos. É usada exclusivamente quando um relacionamento N:N precisa se relacionar com outra entidade. No cenário, o relacionamento N:N entre Programador e Projeto é 'agregado' (encapsulado como uma entidade composta), e essa agregação se relaciona com Linguagem. No DER, a agregação é representada por um retângulo envolvendo o losango do relacionamento e as entidades participantes."
      },
      {
        "question": "No sistema de uma clínica médica, o relacionamento Consulta (entre Médico e Paciente) precisava ser associado a Medicamentos --- pois uma consulta pode resultar na prescrição de vários medicamentos, e um medicamento pode ser prescrito em várias consultas. Para resolver isso no EER sem criar um relacionamento ternário complexo, o arquiteto redesenhou o diagrama transformando o losango 'Consulta' em uma entidade associativa --- representada visualmente por um losango dentro de um retângulo --- que poderia então participar de novos relacionamentos como qualquer outra entidade.\n\nA representação em que um relacionamento é promovido a entidade (losango dentro de retângulo) para participar de novos relacionamentos é chamada de:",
        "options": [
          "Entidade Associativa",
          "Superclasse Disjunta",
          "Generalização Parcial",
          "Herança Múltipla",
          "Cardinalidade 0..1"
        ],
        "answer": 0,
        "feedback": "✓ Resposta correta: A) Entidade Associativa\n\nPor que está certa: A Entidade Associativa (também chamada de entidade de relacionamento ou agregação) é a representação visual de um relacionamento que foi promovido ao status de entidade — simbolizada por um losango dentro de um retângulo no DER. Isso permite que o relacionamento participe de outros relacionamentos como se fosse uma entidade comum. No caso da clínica, o relacionamento Consulta (entre Médico e Paciente) torna-se uma Entidade Associativa, permitindo associá-la com Medicamentos através de um novo relacionamento de Prescrição."
      },
      {
        "question": "O EER (Modelo Entidade-Relacionamento Estendido) inclui dois processos complementares para organizar a hierarquia entre entidades: a Especialização e a Generalização. Na Especialização, um arquiteto parte da entidade genérica Veículo e cria subclasses mais específicas como Caminhão e Carro. Na Generalização, um arquiteto observa entidades distintas como Médico e Enfermeiro, identifica os atributos comuns (Nome, CRM/COREN, Especialidade) e cria a superclasse ProfissionalDeSaude. Um aluno confundiu os dois processos em uma questão de prova, dizendo que 'ambos partem do específico para o geral'. O professor precisava corrigir o erro.\n\nSobre os processos de Especialização e Generalização no EER, a afirmação correta é:",
        "options": [
          "Especialização é uma síntese conceitual; Generalização é um refinamento",
          "Especialização é um refinamento conceitual; Generalização é uma síntese",
          "Ambas são formas de criar entidades associativas",
          "Ambas exigem obrigatoriamente relacionamentos N:N para existir",
          "A Generalização cria subclasses, enquanto a Especialização cria superclasses"
        ],
        "answer": 1,
        "feedback": "✓ Resposta correta: B) Especialização é um refinamento conceitual; Generalização é uma síntese\n\nPor que está certa: Os dois processos têm direções opostas: a Especialização parte do geral para o específico (top-down) — define uma superclasse e a refina em subclasses com características mais específicas (Veículo → Caminhão, Carro). A Generalização parte do específico para o geral (bottom-up) — identifica atributos comuns em entidades distintas e cria uma superclasse que as unifica (Médico + Enfermeiro → ProfissionalDeSaude). São processos complementares que levam ao mesmo resultado no diagrama, mas com direções de raciocínio opostas."
      },
      {
        "question": "O sistema de RH de uma empresa pública possui a superclasse Funcionário e duas subclasses: Motorista (com atributo CarteiraCNH) e Secretária (com atributo VelocidadeDigitacao). Durante a implantação do sistema, percebeu-se que vários funcionários de alto escalão --- como diretores e coordenadores --- não se enquadram em nenhuma dessas duas subclasses, pois exercem funções distintas não contempladas no modelo atual. O arquiteto de dados precisava determinar o tipo correto de especialização para representar essa situação, onde nem todos os funcionários pertencem a uma subclasse.\n\nA especialização que permite a existência de funcionários que não pertencem a nenhuma subclasse (como o Diretor) é classificada como:",
        "options": [
          "Total",
          "Parcial",
          "Associativa",
          "Agregada",
          "Recursiva"
        ],
        "answer": 1,
        "feedback": "✓ Resposta correta: B) Parcial\n\nPor que está certa: A Especialização Parcial (ou opcional) permite que algumas instâncias da superclasse não pertençam a nenhuma subclasse — elas existem apenas como membros da superclasse genérica. No EER, é representada por linha simples entre a superclasse e o símbolo de especialização. No cenário, os diretores e coordenadores são Funcionários que não são Motoristas nem Secretárias — eles existem como Funcionários 'genéricos', sem especialização. Isso caracteriza uma Especialização Parcial."
      },
      {
        "question": "Em um sistema de gestão de pedidos modelado com notação UML/EER, o arquiteto definiu a associação entre Pedido e ItemDePedido com a multiplicidade '1..*' no lado do ItemDePedido. Essa notação indica que para cada pedido, deve existir pelo menos um item --- um pedido vazio não faz sentido no negócio --- podendo haver muitos itens no mesmo pedido. Um desenvolvedor júnior confundiu essa notação com '0..*' e implementou a lógica de negócio de forma errada, permitindo pedidos sem itens.\n\nA associação representada por '1..*' indica que:",
        "options": [
          "O relacionamento é opcional (zero ou muitos)",
          "Existe exatamente um objeto envolvido",
          "Há pelo menos um objeto envolvido no relacionamento",
          "A chave primária deve ser nula",
          "As entidades são isoladas"
        ],
        "answer": 2,
        "feedback": "✓ Resposta correta: C) Há pelo menos um objeto envolvido no relacionamento\n\nPor que está certa: Na notação UML de multiplicidade: '0..*' significa zero ou mais (opcional, sem limite superior); '1..*' significa um ou mais (obrigatório pelo menos um, sem limite superior); '1..1' ou simplesmente '1' significa exatamente um; '0..1' significa zero ou um (opcional, no máximo um). A notação '1..*' ao lado de ItemDePedido indica que cada Pedido deve ter pelo menos 1 item, podendo ter muitos — um pedido sem nenhum item viola essa restrição de multiplicidade."
      },
      {
        "question": "Ao converter o EER de um sistema universitário para o modelo relacional, o arquiteto tinha a superclasse Pessoa (PK: ID_Pessoa) e as subclasses Aluno (atributos específicos: Matricula, Curso) e Professor (atributos específicos: SIAPE, Titulacao). Decidiu-se mapear cada subclasse em uma tabela separada. A questão a resolver era: qual seria a chave primária das tabelas Aluno e Professor no modelo relacional? O arquiteto precisava preservar o vínculo entre cada instância da subclasse e seu registro correspondente na superclasse.\n\nNo mapeamento de herança para o modelo relacional, a Chave Primária das tabelas das subclasses deve ser:",
        "options": [
          "Um novo número aleatório sem relação com a superclasse",
          "O nome da subclasse",
          "A mesma Chave Primária da superclasse, atuando também como Chave Estrangeira",
          "Um atributo multivalorado de texto",
          "Uma combinação de todos os atributos da subclasse"
        ],
        "answer": 2,
        "feedback": "✓ Resposta correta: C) A mesma Chave Primária da superclasse, atuando também como Chave Estrangeira\n\nPor que está certa: No mapeamento de hierarquias de herança para o modelo relacional (estratégia de tabela por subclasse), cada subclasse gera uma tabela que contém apenas seus atributos específicos mais a chave primária da superclasse. Essa chave primária herdada atua simultaneamente como: (1) Chave Primária da tabela da subclasse (identificador único) e (2) Chave Estrangeira que referencia a tabela da superclasse (garantindo o vínculo e a integridade referencial). Ex.: Tabela Aluno(ID_Pessoa PK FK, Matricula, Curso)."
      },
      {
        "question": "Em uma consultoria de TI, um arquiteto de dados estava debatendo com a equipe em quais situações a técnica de Agregação poderia ser aplicada. Surgiu a dúvida: a agregação pode ser usada em qualquer tipo de relacionamento (1:1, 1:N ou N:N), ou existe uma restrição específica quanto ao tipo de relacionamento que pode ser 'elevado' ao status de entidade? O arquiteto sênior respondeu que a agregação tem uma restrição fundamental em sua aplicação no modelo conceitual.\n\nA principal restrição para o uso da técnica de Agregação em um modelo conceitual é:",
        "options": [
          "Só pode ser usada se as entidades forem idênticas",
          "Só pode ser usada quando o relacionamento base é Muitos-para-Muitos (N:N)",
          "Só pode ser usada em arquiteturas centralizadas de mainframe",
          "Exige que todos os atributos sejam derivados",
          "Proíbe a existência de chaves estrangeiras"
        ],
        "answer": 1,
        "feedback": "✓ Resposta correta: B) Só pode ser usada quando o relacionamento base é Muitos-para-Muitos (N:N)\n\nPor que está certa: A técnica de Agregação no EER é aplicável exclusivamente a relacionamentos N:N, pois é nesses casos que surge a necessidade de tratar o relacionamento como uma entidade de nível superior para que ele possa participar de outros relacionamentos. Em relacionamentos 1:1 ou 1:N, a chave estrangeira simples já é suficiente para representar a associação sem necessidade de agregação. A agregação resolve o problema de 'relacionamentos que precisam se relacionar com outras entidades'."
      },
      {
        "question": "Um analista está modelando um sistema escolar com as seguintes regras de negócio: cada aluno pode estar matriculado em no máximo uma turma por vez (não existem alunos sem turma, e cada aluno pertence a exatamente uma turma); cada turma pode ter qualquer número de alunos matriculados (inclusive pode existir uma turma recém-criada sem alunos). Ao construir o diagrama de associação em notação UML, o analista precisava definir corretamente as multiplicidades dos dois lados do relacionamento entre Aluno e Turma.\n\nAs cardinalidades corretas próximas a Turma (quantas turmas um aluno pode ter) e próximas a Aluno (quantos alunos uma turma pode ter) são, respectivamente:",
        "options": [
          "1..1 e 0..*",
          "0..* e 1..1",
          "*..* e 1..1",
          "1..* e 1..\\",
          "0..1 e 0..1"
        ],
        "answer": 0,
        "feedback": "✓ Resposta correta: A) 1..1 e 0..*\n\nPor que está certa: Analisando as regras de negócio: do lado de Turma (quantas turmas um Aluno pode ter): cada aluno pertence a exatamente uma turma, nem mais nem menos → multiplicidade 1..1; do lado de Aluno (quantos alunos uma Turma pode ter): uma turma pode ter zero alunos (turma recém-criada) ou muitos → multiplicidade 0..*. Portanto, a leitura é: um Aluno pertence a exatamente 1 Turma (1..1), e uma Turma pode ter de 0 a muitos Alunos (0..*)."
      }
    ]
  },
  {
    "subject": "Aula 8 — Introdução ao SQL (Questões 71–80)",
    "questions": [
      {
        "question": "O analista de banco de dados Fábio recebeu duas demandas simultâneas do time de desenvolvimento: (1) remover definitivamente a tabela Log_Antigo do banco de dados de produção, pois os dados haviam sido arquivados e a tabela já não era mais necessária; (2) adicionar uma nova coluna WhatsApp (VARCHAR(15)) à tabela Clientes, para permitir o cadastro de contato via WhatsApp. Ao classificar essas operações para documentação técnica, Fábio precisava identificar à qual sublinguagem do SQL ambos os comandos pertenciam.\n\nOs comandos DROP TABLE e ALTER TABLE, utilizados para atender às demandas de Fábio, pertencem à sublinguagem:",
        "options": [
          "DML (Linguagem de Manipulação de Dados)",
          "DCL (Linguagem de Controle de Dados)",
          "DDL (Linguagem de Definição de Dados)",
          "DTL (Linguagem de Transação de Dados)",
          "DQL (Linguagem de Consulta de Dados)"
        ],
        "answer": 2,
        "feedback": "✓ Resposta correta: C) DDL (Linguagem de Definição de Dados)\n\nPor que está certa: A DDL (Data Definition Language) é o subconjunto do SQL responsável por definir, modificar e remover a estrutura (esquema) dos objetos do banco de dados — tabelas, índices, views, etc. Os principais comandos DDL são: CREATE (criar), ALTER (modificar estrutura) e DROP (remover). Como DROP TABLE e ALTER TABLE operam sobre a estrutura das tabelas (não sobre os dados), ambos pertencem à DDL. A DML, por contraste, opera sobre os dados (INSERT, UPDATE, DELETE, SELECT)."
      },
      {
        "question": "Durante uma manutenção de urgência no banco de dados de um sistema de pedidos, o desenvolvedor Marcos executou o comando UPDATE Pedidos SET Status = 'Cancelado'. Ao verificar o resultado, percebeu que havia esquecido a cláusula WHERE --- o comando havia atualizado o status de TODOS os 15.000 pedidos na tabela, incluindo os que estavam 'Em Andamento' e 'Entregue'. Por sorte, Marcos havia iniciado uma transação explícita antes de executar o script. Ele ainda não havia confirmado as alterações. A operação de modificação de registros pertence ao subconjunto da linguagem SQL que, em muitos SGBDs, permite reversão dentro de uma transação ativa.\n\nA operação de modificação de registros com UPDATE pertence ao subconjunto da SQL denominado:",
        "options": [
          "DDL",
          "DML",
          "DCL",
          "DQL",
          "DBA"
        ],
        "answer": 1,
        "feedback": "✓ Resposta correta: B) DML\n\nPor que está certa: A DML (Data Manipulation Language) é o subconjunto do SQL que opera sobre os dados armazenados nas tabelas. Os principais comandos DML são: INSERT (inserir), UPDATE (atualizar), DELETE (excluir) e, em muitas classificações, SELECT (consultar). O UPDATE é tipicamente um comando DML transacional — suas alterações podem ser confirmadas (COMMIT) ou revertidas (ROLLBACK) dentro de uma transação ativa, o que permitiu ao Marcos recuperar os dados com ROLLBACK."
      },
      {
        "question": "Em uma empresa de consultoria financeira, o DBA Rodrigo recebeu a solicitação do Gerente de Compliance: somente o Gerente Financeiro e seus assistentes diretos poderiam visualizar a coluna Salário da tabela Funcionários, e apenas o DBA teria permissão para inserir ou excluir registros nessa tabela. Para implementar essas restrições, Rodrigo precisava utilizar os comandos específicos que concedem e revogam privilégios de acesso no banco de dados.\n\nOs comandos GRANT (conceder permissão) e REVOKE (revogar permissão), utilizados pelo DBA para configurar os acessos, fazem parte da:",
        "options": [
          "DML",
          "DQL",
          "DDL",
          "DCL (Linguagem de Controle de Dados)",
          "DTL"
        ],
        "answer": 3,
        "feedback": "✓ Resposta correta: D) DCL (Linguagem de Controle de Dados)\n\nPor que está certa: A DCL (Data Control Language) é o subconjunto do SQL responsável pelo controle de acesso e segurança do banco de dados. Seus dois principais comandos são: GRANT (concede privilégios de acesso a usuários ou roles) e REVOKE (revoga privilégios previamente concedidos). O DBA usa DCL para definir quem pode fazer o quê no banco — SELECT em determinadas tabelas, INSERT, UPDATE, DELETE, etc. É a linguagem de segurança e autorização do SQL."
      },
      {
        "question": "Ao modelar o banco de dados de um sistema de cadastro de usuários, o desenvolvedor precisava escolher o tipo de dado mais adequado para o campo Nome. Ele analisou duas opções: CHAR(100) e VARCHAR(100). Ao testar com nomes reais, verificou que a maioria dos nomes brasileiros possui entre 10 e 40 caracteres --- poucos chegam a 100 caracteres. A escolha entre os dois tipos impactaria diretamente o espaço de armazenamento utilizado no disco, especialmente considerando uma tabela com milhões de usuários.\n\nA principal característica do tipo VARCHAR(100), em comparação ao tipo CHAR(100), que o torna mais eficiente nesse cenário é:",
        "options": [
          "Ocupar sempre 100 bytes, independente do nome escrito",
          "Permitir apenas números inteiros",
          "Armazenar sequências de caracteres com tamanho variável, economizando espaço em disco",
          "Ser usado exclusivamente para chaves primárias",
          "Não permitir valores nulos"
        ],
        "answer": 2,
        "feedback": "✓ Resposta correta: C) Armazenar sequências de caracteres com tamanho variável, economizando espaço em disco\n\nPor que está certa: O CHAR(n) é de tamanho fixo: sempre ocupa exatamente n bytes, preenchendo com espaços em branco se o valor for menor. O VARCHAR(n) é de tamanho variável: ocupa apenas o espaço necessário para armazenar o valor real (mais um pequeno overhead de 1-2 bytes para registrar o comprimento). Para nomes com média de 10-40 caracteres em um campo VARCHAR(100), o espaço economizado em disco é significativo — especialmente em tabelas com milhões de registros."
      },
      {
        "question": "Analise a seguinte sequência de comandos SQL executados em um banco de dados: 1. BEGIN TRANSACTION; 2. DELETE FROM Pedidos; 3. ROLLBACK; O DBA estava testando o comportamento da transação antes de decidir se confirmaria a exclusão dos dados ou a cancelaria. Após a execução dos três comandos, a equipe de suporte verificou o banco de dados.\n\nApós a execução dessa sequência, o que aconteceu com os dados da tabela Pedidos?",
        "options": [
          "Serão excluídos permanentemente",
          "Serão excluídos, mas a tabela será renomeada",
          "Permanecerão intactos, pois a transação foi desfeita",
          "A tabela será removida do catálogo (DROP)",
          "O sistema gerará um erro de sintaxe DDL"
        ],
        "answer": 2,
        "feedback": "✓ Resposta correta: C) Permanecerão intactos, pois a transação foi desfeita\n\nPor que está certa: A sequência BEGIN TRANSACTION → DELETE → ROLLBACK demonstra o controle transacional: o BEGIN TRANSACTION inicia uma transação explícita; o DELETE remove os registros, mas apenas em memória/log (as alterações ainda não são permanentes); o ROLLBACK desfaz completamente todas as operações realizadas dentro da transação, restaurando os dados ao estado anterior. Como o COMMIT nunca foi executado, a exclusão não foi confirmada e os dados permanecem intactos."
      },
      {
        "question": "Em uma empresa de análise de dados, diferentes membros da equipe utilizam a linguagem SQL para finalidades distintas. A analista Camila usa principalmente o comando SELECT com cláusulas como WHERE, GROUP BY, HAVING e ORDER BY para extrair relatórios do banco de dados de vendas. Ela nunca insere, atualiza ou deleta dados --- sua função é exclusivamente consultar e recuperar informações para análise. O gerente de TI precisava classificar corretamente o subconjunto da SQL utilizado por Camila em sua documentação técnica.\n\nO subconjunto da linguagem SQL utilizado exclusivamente para consulta e recuperação de informações, tendo o SELECT como principal comando, é:",
        "options": [
          "DDL",
          "DML",
          "DQL (Linguagem de Consulta de Dados)",
          "DCL",
          "DTL"
        ],
        "answer": 2,
        "feedback": "✓ Resposta correta: C) DQL (Linguagem de Consulta de Dados)\n\nPor que está certa: A DQL (Data Query Language) é o subconjunto do SQL dedicado exclusivamente à consulta e recuperação de dados, tendo o comando SELECT como seu único (e principal) componente. Enquanto alguns autores classificam o SELECT como parte da DML, muitos frameworks acadêmicos e documentações técnicas o separam como DQL para destacar sua natureza exclusivamente de leitura — sem modificação de dados. Camila utiliza SELECT com WHERE, GROUP BY, HAVING e ORDER BY — todas cláusulas da DQL."
      },
      {
        "question": "No início de um projeto de banco de dados, o desenvolvedor Julia precisava criar a estrutura para armazenar informações de produtos de um e-commerce. Ela executou o seguinte comando: CREATE TABLE Produtos (ID INT PRIMARY KEY, Nome VARCHAR(150) NOT NULL, Preco DECIMAL(10,2), Estoque INT DEFAULT 0); Esse comando criou a tabela Produtos com quatro colunas, com restrições e valores padrão definidos. Julia precisava classificar esse comando na taxonomia correta da linguagem SQL.\n\nO comando CREATE TABLE é classificado como DDL porque:",
        "options": [
          "Insere novos dados nas linhas da tabela",
          "Define e cria a estrutura (esquema) do objeto no banco de dados",
          "Apaga registros duplicados",
          "Concede permissão de leitura ao usuário",
          "Realiza cálculos matemáticos complexos"
        ],
        "answer": 1,
        "feedback": "✓ Resposta correta: B) Define e cria a estrutura (esquema) do objeto no banco de dados\n\nPor que está certa: O CREATE TABLE é um comando DDL (Data Definition Language) porque sua função é definir e criar a estrutura do objeto no banco de dados — especificando o nome da tabela, os nomes e tipos de dados das colunas, as restrições (PRIMARY KEY, NOT NULL) e valores padrão (DEFAULT). O DDL opera sobre o esquema (metaestrutura), não sobre os dados em si. Após o CREATE TABLE, a tabela existe estruturalmente, mas está vazia — nenhum dado foi inserido."
      },
      {
        "question": "O hospital Santa Cruz precisava digitalizar seu arquivo de exames de imagem. Cada exame de Raio-X é um arquivo de imagem de alta resolução com tamanho médio de 8 MB. O banco de dados precisaria armazenar tanto os metadados do exame (data, médico solicitante, CID) quanto o próprio arquivo da imagem digitalizada, de forma integrada e acessível pelo sistema de laudo médico. O DBA responsável pelo projeto precisava determinar qual tipo de dado SQL seria mais adequado para armazenar esses arquivos de imagem binários de grande porte.\n\nO tipo de dado SQL mais adequado para armazenar os arquivos binários das imagens de Raio-X é:",
        "options": [
          "INT",
          "VARCHAR",
          "BLOB (Binary Large Object)",
          "DATETIME",
          "CHAR"
        ],
        "answer": 2,
        "feedback": "✓ Resposta correta: C) BLOB (Binary Large Object)\n\nPor que está certa: O BLOB (Binary Large Object) é o tipo de dado SQL projetado para armazenar grandes volumes de dados binários — como imagens, arquivos de áudio, vídeos, PDFs e outros arquivos binários. Para arquivos de imagem de Raio-X com ~8 MB cada, o BLOB é o único tipo adequado entre as alternativas. Os tipos INT, VARCHAR e CHAR são para dados textuais ou numéricos simples, e DATETIME é para datas e horários. O equivalente para grandes textos é o CLOB (Character Large Object)."
      },
      {
        "question": "Em uma aula de linguagens de programação, o professor comparou SQL com linguagens procedurais como Python e Java. No Python, para encontrar o maior elemento de uma lista, o programador precisa escrever um algoritmo passo a passo: percorrer cada elemento, comparar com o atual maior, atualizar a variável. Em SQL, para obter o maior valor de uma coluna, basta escrever: SELECT MAX(Preco) FROM Produtos. O professor destacou que essa diferença fundamental na abordagem é o que caracteriza a natureza da linguagem SQL.\n\nA característica da linguagem SQL que permite ao usuário especificar apenas o resultado desejado --- sem definir como o SGBD deve obtê-lo --- é chamada de natureza:",
        "options": [
          "Procedural, onde o programador define o caminho físico e os algoritmos de busca",
          "Declarativa, onde o usuário especifica apenas o resultado e o SGBD decide a melhor forma de obtê-lo",
          "Que só funciona em sistemas de arquivos planos (Flat-Files)",
          "Que exige a declaração manual de todos os ponteiros de memória",
          "Que é executada apenas em hardware de processamento de software"
        ],
        "answer": 1,
        "feedback": "✓ Resposta correta: B) Declarativa, onde o usuário especifica apenas o resultado e o SGBD decide a melhor forma de obtê-lo\n\nPor que está certa: O SQL é uma linguagem declarativa: o usuário declara O QUE quer (o resultado desejado), e o SGBD — por meio do otimizador de consultas — decide automaticamente COMO obter esse resultado da forma mais eficiente (qual índice usar, qual algoritmo de junção aplicar, em que ordem varrer as tabelas). Isso contrasta com linguagens procedurais como Python e Java, onde o programador define explicitamente o algoritmo passo a passo (o COMO). Essa abstração é uma das grandes vantagens do SQL."
      },
      {
        "question": "A empresa TechCorp abriu um processo seletivo para contratar um profissional especializado em banco de dados. O perfil da vaga incluía as seguintes responsabilidades: instalar e configurar o SGBD nos servidores de produção, homologação e desenvolvimento; criar e gerenciar usuários e perfis de acesso (GRANT/REVOKE); monitorar a performance das consultas e otimizar índices; implementar rotinas de backup e recuperação; e garantir a integridade referencial do banco de dados. O RH precisava definir o cargo correto para publicar no anúncio.\n\nO profissional responsável por instalar, configurar, monitorar a segurança e gerenciar a integridade dos SGBDs, utilizando amplamente a linguagem SQL, é denominado:",
        "options": [
          "Cientista de Dados",
          "Desenvolvedor Front-End",
          "DBA (Database Administrator)",
          "Arquiteto de Redes",
          "Analista de Hardware"
        ],
        "answer": 2,
        "feedback": "✓ Resposta correta: C) DBA (Database Administrator)\n\nPor que está certa: O DBA (Database Administrator / Administrador de Banco de Dados) é o profissional responsável pela instalação, configuração, segurança, performance, backup/recuperação e integridade dos SGBDs. Todas as responsabilidades listadas no enunciado — instalar o SGBD, gerenciar usuários com GRANT/REVOKE, monitorar performance, otimizar índices, implementar backups e garantir integridade referencial — são atribuições clássicas do DBA. É o guardião técnico do banco de dados na organização."
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
    return match ? `Por que está certa:${match[1]}` : '';
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
            const parts = splitQuestionParts(question.question);

            let questionBodyHTML = parts.context
                ? `<div class="question-context">${parts.context}</div>
                   <div class="question-divider"></div>
                   <div class="question-statement">${parts.statement}</div>`
                : `<div class="question-text">${parts.statement}</div>`;

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
                    ${question.feedback.replace(/\n/g, '<br>')}
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
    feedbackEl.innerHTML = question.feedback.replace(/\n/g, '<br>');

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
document.getElementById('btn-left').addEventListener('click', () => { window.location.href = '../banco.html'; });
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
    let container = document.getElementById('notification-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'notification-container';
        container.style.cssText = `
            position:fixed;top:20px;right:20px;
            display:flex;flex-direction:column;gap:8px;
            z-index:10000;pointer-events:none;`;
        document.body.appendChild(container);
    }
    const el = document.createElement('div');
    el.style.cssText = `
        background:rgba(55,138,221,.15);color:#60aef5;
        border:1px solid rgba(55,138,221,.3);
        padding:12px 22px;border-radius:10px;
        backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);
        box-shadow:0 4px 15px rgba(55,138,221,.1);
        font-family:'Space Grotesk',sans-serif;font-size:13px;font-weight:600;
        min-width:200px;pointer-events:auto;
        opacity:0;transform:translateX(40px);
        transition:all .4s cubic-bezier(.25,1,.5,1);`;
    el.innerText = message;
    container.appendChild(el);
    requestAnimationFrame(() => { el.style.opacity='1'; el.style.transform='translateX(0)'; });
    setTimeout(() => {
        el.style.opacity='0'; el.style.transform='translateX(20px)';
        el.addEventListener('transitionend', () => {
            el.remove();
            if (container && container.childNodes.length === 0) container.remove();
        });
    }, 4000);
}

document.addEventListener('visibilitychange', () => {
    if (document.hidden) { saveCurrentProgress(); stopAutoSave(); }
    else if (AUTO_SAVE_CONFIG.enabled && storageInitialized) startAutoSave();
});
window.addEventListener('beforeunload', () => { if (storageInitialized) saveCurrentProgress(); });

setTimeout(initializeStorage, 500);