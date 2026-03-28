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
        "feedback": "✓ Resposta correta: B) Dados em informação, gerando subsídios para o conhecimento e tomada de decisão\n\nPor que está certa: "
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
        "feedback": "✓ Resposta correta: D) INSERT INTO Clientes (IdCliente, Nome) VALUES (1, 'José');\n\nPor que está certa: "
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
        "feedback": "✓ Resposta correta: B) Database-Server, onde o processamento ocorre no servidor, enviando apenas os resultados solicitados aos terminais\n\nPor que está certa: "
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
        "feedback": "✓ Resposta correta: C) Definir quais dados estão armazenados e quais as relações entre eles\n\nPor que está certa: "
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
        "feedback": "✓ Resposta correta: C) Chave Estrangeira\n\nPor que está certa: "
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
        "feedback": "✓ Resposta correta: D) ROLLBACK\n\nPor que está certa: "
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
        "feedback": "✓ Resposta correta: C) Modelo Orientado a Objetos (POO)\n\nPor que está certa: "
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
        "feedback": "✓ Resposta correta: C) Catálogo de metadados\n\nPor que está certa: "
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
        "feedback": "✓ Resposta correta: B) SELECT\n\nPor que está certa: "
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
        "feedback": "✓ Resposta correta: B) Nível de Visão, através de mecanismos de segurança e isolamento\n\nPor que está certa: "
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
        "feedback": "✓ Resposta correta: C) Oracle\n\nPor que está certa: "
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
        "feedback": "✓ Resposta correta: C) Redundância e falta de integração de dados\n\nPor que está certa: "
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
        "feedback": "✓ Resposta correta: B) Otimizar a leitura/gravação em disco e o consumo de memória RAM\n\nPor que está certa: "
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
        "feedback": "✓ Resposta correta: C) SGBD (Sistema Gerenciador de Banco de Dados)\n\nPor que está certa: "
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
        "feedback": "✓ Resposta correta: C) Controle de concorrência no processamento de transações multiusuários\n\nPor que está certa: "
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
        "feedback": "✓ Resposta correta: B) T-SQL (Transaction SQL)\n\nPor que está certa: "
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
        "feedback": "✓ Resposta correta: D) Nível Interno (ou de armazenamento)\n\nPor que está certa: "
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
        "feedback": "✓ Resposta correta: C) Ser open source (software livre) e não exigir sistemas de hardware extremamente avançados\n\nPor que está certa: "
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
        "feedback": "✓ Resposta correta: B) Independência programa-dados (ou abstração)\n\nPor que está certa: "
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
        "feedback": "✓ Resposta correta: C) Desenvolvedor de Aplicações (Programador)\n\nPor que está certa: "
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
        "feedback": "✓ Resposta correta: C) Esquema (ou Estrutura)\n\nPor que está certa: "
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
        "feedback": "✓ Resposta correta: D) Atomicidade\n\nPor que está certa: "
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
        "feedback": "✓ Resposta correta: B) Isolamento\n\nPor que está certa: "
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
        "feedback": "✓ Resposta correta: C) Estado\n\nPor que está certa: "
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
        "feedback": "✓ Resposta correta: D) Durabilidade\n\nPor que está certa: "
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
        "feedback": "✓ Resposta correta: C) Estado inconsistente\n\nPor que está certa: "
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
        "feedback": "✓ Resposta correta: C) Transação\n\nPor que está certa: "
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
        "feedback": "✓ Resposta correta: B) Consistência\n\nPor que está certa: "
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
        "feedback": "✓ Resposta correta: B) Sistema de recuperação\n\nPor que está certa: "
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
        "feedback": "✓ Resposta correta: C) Atomicidade\n\nPor que está certa: "
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
        "feedback": "✓ Resposta correta: B) Transparência de dados\n\nPor que está certa: "
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
        "feedback": "✓ Resposta correta: C) DBaaS (Banco de Dados como um Serviço)\n\nPor que está certa: "
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
        "feedback": "✓ Resposta correta: C) Fragmentação Vertical\n\nPor que está certa: "
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
        "feedback": "✓ Resposta correta: D) Camada Intermediária (Servidor de Aplicação)\n\nPor que está certa: "
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
        "feedback": "✓ Resposta correta: C) Dependência da lógica de negócio residir no lado do cliente\n\nPor que está certa: "
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
        "feedback": "✓ Resposta correta: D) Arquitetura Centralizada\n\nPor que está certa: "
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
        "feedback": "✓ Resposta correta: B) Computação em Nuvem (Cloud)\n\nPor que está certa: "
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
        "feedback": "✓ Resposta correta: C) O Servidor de Aplicação (ou Web)\n\nPor que está certa: "
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
        "feedback": "✓ Resposta correta: C) Replicação de Dados\n\nPor que está certa: "
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
        "feedback": "✓ Resposta correta: A) ODBC (Open Database Connectivity)\n\nPor que está certa: "
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
        "feedback": "✓ Resposta correta: C) Atributo Multivalorado\n\nPor que está certa: "
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
        "feedback": "✓ Resposta correta: C) Derivado\n\nPor que está certa: "
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
        "feedback": "✓ Resposta correta: C) Relacionamento Ternário\n\nPor que está certa: "
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
        "feedback": "✓ Resposta correta: B) Restrição de Participação Total\n\nPor que está certa: "
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
        "feedback": "✓ Resposta correta: C) Atributo Composto\n\nPor que está certa: "
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
        "feedback": "✓ Resposta correta: B) Modelagem de Dados\n\nPor que está certa: "
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
        "feedback": "✓ Resposta correta: C) Entidade, Relacionamento, Atributo\n\nPor que está certa: "
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
        "feedback": "✓ Resposta correta: C) Autorrelacionamento\n\nPor que está certa: "
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
        "feedback": "✓ Resposta correta: D) N:N (Muitos-para-Muitos)\n\nPor que está certa: "
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
        "feedback": "✓ Resposta correta: B) Atributo-Chave (ou Chave Primária)\n\nPor que está certa: "
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
        "feedback": "✓ Resposta correta: B) Domínio, Tupla, Relação\n\nPor que está certa: "
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
        "feedback": "✓ Resposta correta: C) Restrição de Integridade Referencial\n\nPor que está certa: "
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
        "feedback": "✓ Resposta correta: C) Regra do Acesso Lógico\n\nPor que está certa: "
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
        "feedback": "✓ Resposta correta: C) Chave Candidata\n\nPor que está certa: "
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
        "feedback": "✓ Resposta correta: C) Criar uma nova tabela cuja chave primária é a combinação das chaves estrangeiras das tabelas relacionadas\n\nPor que está certa: "
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
        "feedback": "✓ Resposta correta: B) Restrição de Integridade de Entidade\n\nPor que está certa: "
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
        "feedback": "✓ Resposta correta: C) Super-chave\n\nPor que está certa: "
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
        "feedback": "✓ Resposta correta: B) Domínio do Atributo\n\nPor que está certa: "
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
        "feedback": "✓ Resposta correta: B) Integridade Referencial\n\nPor que está certa: "
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
        "feedback": "✓ Resposta correta: C) Domínio e Nome (Atributo)\n\nPor que está certa: "
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
        "feedback": "✓ Resposta correta: B) Especialização Total\n\nPor que está certa: "
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
        "feedback": "✓ Resposta correta: C) Herança de Propriedades\n\nPor que está certa: "
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
        "feedback": "✓ Resposta correta: C) Agregação\n\nPor que está certa: "
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
        "feedback": "✓ Resposta correta: A) Entidade Associativa\n\nPor que está certa: "
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
        "feedback": "✓ Resposta correta: B) Especialização é um refinamento conceitual; Generalização é uma síntese\n\nPor que está certa: "
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
        "feedback": "✓ Resposta correta: B) Parcial\n\nPor que está certa: "
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
        "feedback": "✓ Resposta correta: C) Há pelo menos um objeto envolvido no relacionamento\n\nPor que está certa: "
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
        "feedback": "✓ Resposta correta: C) A mesma Chave Primária da superclasse, atuando também como Chave Estrangeira\n\nPor que está certa: "
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
        "feedback": "✓ Resposta correta: B) Só pode ser usada quando o relacionamento base é Muitos-para-Muitos (N:N)\n\nPor que está certa: "
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
        "feedback": "✓ Resposta correta: A) 1..1 e 0..*\n\nPor que está certa: "
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
        "feedback": "✓ Resposta correta: C) DDL (Linguagem de Definição de Dados)\n\nPor que está certa: "
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
        "feedback": "✓ Resposta correta: B) DML\n\nPor que está certa: "
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
        "feedback": "✓ Resposta correta: D) DCL (Linguagem de Controle de Dados)\n\nPor que está certa: "
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
        "feedback": "✓ Resposta correta: C) Armazenar sequências de caracteres com tamanho variável, economizando espaço em disco\n\nPor que está certa: "
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
        "feedback": "✓ Resposta correta: C) Permanecerão intactos, pois a transação foi desfeita\n\nPor que está certa: "
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
        "feedback": "✓ Resposta correta: C) DQL (Linguagem de Consulta de Dados)\n\nPor que está certa: "
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
        "feedback": "✓ Resposta correta: B) Define e cria a estrutura (esquema) do objeto no banco de dados\n\nPor que está certa: "
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
        "feedback": "✓ Resposta correta: C) BLOB (Binary Large Object)\n\nPor que está certa: "
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
        "feedback": "✓ Resposta correta: B) Declarativa, onde o usuário especifica apenas o resultado e o SGBD decide a melhor forma de obtê-lo\n\nPor que está certa: "
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
        "feedback": "✓ Resposta correta: C) DBA (Database Administrator)\n\nPor que está certa: "
      }
    ]
  }
];

// ─── Função para separar texto e enunciado ─────────────────────────────────────
function splitQuestionParts(questionText) {
    // Tenta identificar o enunciado: última frase que termina com ":" ou "?"
    // Estratégia: achar a última sentença interrogativa ou a última frase curta que funciona como comando
    const text = questionText.trim();

    // Procura pelo último ponto final seguido de espaço e letra maiúscula, antes de uma frase final curta
    // Padrão ENADE: contexto longo + enunciado curto no final (termina com ":" ou "?")
    
    // Busca a última sentença: tudo após o último ponto que é seguido de espaço e maiúscula
    const sentencePattern = /^([\s\S]+?)\s{0,5}([A-ZÁÉÍÓÚÂÊÎÔÛÃÕÇ][^.!?]*[?:])$/;
    const match = text.match(sentencePattern);

    if (match) {
        const contexto = match[1].trim();
        const enunciado = match[2].trim();

        // Só separa se o contexto for suficientemente longo (mais de 80 chars)
        // e o enunciado for diferente do contexto inteiro
        if (contexto.length > 80 && enunciado !== text) {
            return { context: contexto, statement: enunciado };
        }
    }

    // Fallback: tenta separar pelo último ponto + espaço + maiúscula
    const lastSentenceMatch = text.match(/^([\s\S]+\.)(\s+[A-ZÁÉÍÓÚÂÊÎÔÛÃÕÇ][\s\S]*[?:])$/);
    if (lastSentenceMatch) {
        const contexto = lastSentenceMatch[1].trim();
        const enunciado = lastSentenceMatch[2].trim();
        if (contexto.length > 80) {
            return { context: contexto, statement: enunciado };
        }
    }

    // Se não conseguir separar, retorna tudo como enunciado
    return { context: null, statement: text };
}

// ─── Variáveis do quiz ────────────────────────────────────────────────────────
let quizData = [];
let userAnswers = [];
let quizSubmitted = false;
let isFirstLoad = true;

// ─── Elementos do DOM ─────────────────────────────────────────────────────────
const quizContainer = document.getElementById("quiz-container");
const submitButton = document.getElementById("submit");
const restartButton = document.getElementById("restart");
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
    return originalQuizData.map(subject => ({
        ...subject,
        questions: subject.questions.map(question => ({
            ...question
        }))
    }));
}

// ─── Inicialização ────────────────────────────────────────────────────────────
function initializeQuiz() {
    userAnswers = [];
    quizSubmitted = false;

    if (isFirstLoad) {
        quizData = createOriginalQuizData();
        isFirstLoad = false;
    }

    const allQuestions = [];
    quizData.forEach(subject => allQuestions.push(...subject.questions));
    userAnswers = new Array(allQuestions.length).fill(null);

    showAllQuestions();
}

// ─── Renderização ─────────────────────────────────────────────────────────────
function showAllQuestions() {
    let questionsHTML = "";
    let questionIndex = 0;

    quizData.forEach(subject => {
        questionsHTML += `<div class="subject-title">${subject.subject}</div>`;

        subject.questions.forEach(question => {
            const parts = splitQuestionParts(question.question);

            let questionBodyHTML = '';
            if (parts.context) {
                questionBodyHTML = `
                    <div class="question-context">${parts.context}</div>
                    <div class="question-divider"></div>
                    <div class="question-statement">${parts.statement}</div>
                `;
            } else {
                questionBodyHTML = `<div class="question-text">${parts.statement}</div>`;
            }

            questionsHTML += `
                <div class="question-container">
                    <div class="question-number">Questão ${questionIndex + 1}</div>
                    ${questionBodyHTML}
                    ${question.image ? `<div class="question-image"><img src="${question.image}" alt="Imagem da questão"></div>` : ''}
                    ${question.questionContinuation ? `<div class="question-text">${question.questionContinuation}</div>` : ''}
                    <div class="options">
                        ${question.options.map((option, optionIndex) => {
                            let cls = "option";
                            if (userAnswers[questionIndex] === optionIndex) cls += " selected";
                            if (quizSubmitted) {
                                if (optionIndex === question.answer) cls += " correct";
                                else if (userAnswers[questionIndex] === optionIndex) cls += " incorrect";
                            }
                            return `<div class="${cls}" onclick="selectOption(${questionIndex}, ${optionIndex})">${String.fromCharCode(65 + optionIndex)}) ${option}</div>`;
                        }).join("")}
                    </div>
                    ${quizSubmitted ? `
                        <div class="feedback ${userAnswers[questionIndex] === question.answer || userAnswers[questionIndex] === null ? 'correct-feedback' : 'incorrect-feedback'}">
                            ${question.feedback.replace(/\n/g, '<br>')}
                        </div>` : ''}
                </div>`;
            questionIndex++;
        });
    });

    quizContainer.innerHTML = questionsHTML;
}

window.selectOption = function (questionIndex, optionIndex) {
    if (quizSubmitted) return;
    userAnswers[questionIndex] = optionIndex;
    const allContainers = document.querySelectorAll('.question-container');
    const container = allContainers[questionIndex];
    if (!container) return;
    container.querySelectorAll('.option').forEach((el, idx) => {
        el.classList.toggle('selected', idx === optionIndex);
    });
};

// ─── Scroll ───────────────────────────────────────────────────────────────────
function smoothScrollTo(targetPosition, duration = 800) {
    const start = window.scrollY;
    const change = targetPosition - start;
    const startTime = performance.now();
    function animateScroll(currentTime) {
        const elapsed = currentTime - startTime;
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
        position: fixed; top: 20px; left: 50%;
        transform: translateX(-50%) translateY(-100%);
        background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
        color: white; padding: 12px 24px; border-radius: 10px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        font-family: 'Space Grotesk', sans-serif; font-size: 14px; font-weight: 500;
        z-index: 10000; opacity: 0; transition: all 0.4s ease;`;
    el.textContent = message;
    document.body.appendChild(el);
    setTimeout(() => { el.style.opacity = '1'; el.style.transform = 'translateX(-50%) translateY(0)'; }, 50);
    setTimeout(() => {
        el.style.opacity = '0'; el.style.transform = 'translateX(-50%) translateY(-100%)';
        setTimeout(() => el.parentNode && el.parentNode.removeChild(el), 400);
    }, 5000);
}

// ─── Enviar ───────────────────────────────────────────────────────────────────
function showResults() {
    const firstUnansweredIndex = userAnswers.findIndex(a => a === null);
    if (firstUnansweredIndex !== -1) {
        const containers = document.querySelectorAll('.question-container');
        containers[firstUnansweredIndex]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        showAlertNotification("⚠️ Por favor, responda todas as questões antes de enviar.");
        return;
    }

    quizSubmitted = true;
    showAllQuestions();

    const clearBtn = document.getElementById('clear');
    const revealBtn = document.getElementById('reveal');
    if (clearBtn) { clearBtn.disabled = true; }
    if (revealBtn) { revealBtn.disabled = true; }

    let score = 0, questionIndex = 0;
    quizData.forEach(subject => {
        subject.questions.forEach(question => {
            if (userAnswers[questionIndex] === question.answer) score++;
            questionIndex++;
        });
    });

    const total = questionIndex;
    const pct = Math.round((score / total) * 100);

    resultsContainer.innerHTML = `
        <h2>Resultado</h2>
        <div class="score">Você acertou ${score} de ${total} questões</div>
        <div class="percentage">${pct}%</div>
        <p>${pct >= 70 ? "Parabéns! Excelente desempenho." : "Revise os conceitos para melhorar seu desempenho."}</p>`;
    resultsContainer.style.display = "block";
    submitButton.style.display = "none";
    restartButton.style.display = "inline-flex";
}

// ─── Reiniciar ────────────────────────────────────────────────────────────────
function restartQuiz() {
    userAnswers = [];
    quizSubmitted = false;
    quizData = createShuffledQuizData();

    const allQuestions = [];
    quizData.forEach(s => allQuestions.push(...s.questions));
    userAnswers = new Array(allQuestions.length).fill(null);

    showAllQuestions();
    resultsContainer.style.display = "none";
    submitButton.style.display = "inline-flex";
    restartButton.style.display = "none";

    const clearBtn = document.getElementById('clear');
    const revealBtn = document.getElementById('reveal');
    if (clearBtn) { clearBtn.disabled = false; }
    if (revealBtn) { revealBtn.disabled = false; }

    smoothScrollToTop();
}

// ─── Limpar ───────────────────────────────────────────────────────────────────
function clearAnswers() {
    const clearBtn = document.getElementById('clear');
    if (clearBtn?.disabled) return;

    userAnswers.fill(null);
    quizSubmitted = false;
    showAllQuestions();
    resultsContainer.style.display = "none";
    submitButton.style.display = "inline-flex";
    restartButton.style.display = "none";
    smoothScrollToTop();
}

// ─── Revelar ──────────────────────────────────────────────────────────────────
function revealAnswers() {
    quizSubmitted = true;
    showAllQuestions();

    const clearBtn = document.getElementById('clear');
    const revealBtn = document.getElementById('reveal');
    if (clearBtn) { clearBtn.disabled = true; }
    if (revealBtn) { revealBtn.disabled = true; }

    submitButton.style.display = "none";
    restartButton.style.display = "inline-flex";
    smoothScrollToTop();
}

// ─── Event Listeners ─────────────────────────────────────────────────────────
document.getElementById('clear').addEventListener('click', clearAnswers);
document.getElementById('reveal').addEventListener('click', revealAnswers);
submitButton.addEventListener("click", showResults);
restartButton.addEventListener("click", restartQuiz);

document.getElementById('btn-up').addEventListener('click', () => smoothScrollTo(0, 1000));
document.getElementById('btn-left').addEventListener('click', () => { window.location.href = '../banco.html'; });
document.getElementById('btn-down').addEventListener('click', () => smoothScrollTo(document.body.scrollHeight, 1000));

function updateSubmitButtonIcon() {
    const icon = document.querySelector('#submitButton i');
    if (!icon) return;
    if (quizSubmitted) {
        icon.className = 'fas fa-redo';
        document.getElementById('submitButton').title = 'Reiniciar Quiz';
    } else {
        icon.className = 'fas fa-paper-plane';
        document.getElementById('submitButton').title = 'Enviar Quiz';
    }
}

document.getElementById('clearButton').addEventListener('click', () => { clearAnswers(); updateSubmitButtonIcon(); });
document.getElementById('submitButton').addEventListener('click', () => {
    if (quizSubmitted) restartQuiz(); else showResults();
    setTimeout(updateSubmitButtonIcon, 100);
});
document.getElementById('revealButton').addEventListener('click', () => { revealAnswers(); updateSubmitButtonIcon(); });

document.addEventListener("DOMContentLoaded", () => {
    initializeQuiz();
    setTimeout(updateSubmitButtonIcon, 150);
});

// ─── Auto-Save ────────────────────────────────────────────────────────────────
const QUIZ_ID = 'questoes_banco_de_dados';

const AUTO_SAVE_CONFIG = { enabled: true, interval: 10000, saveOnAnswer: true };
let autoSaveInterval = null;
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
            isCompleted: quizSubmitted || false
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
    // 1. Gerenciador de Container (empilhamento vertical)
    let container = document.getElementById('notification-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'notification-container';
        container.style.cssText = `
            position: fixed; top: 20px; right: 20px;
            display: flex; flex-direction: column; gap: 8px;
            z-index: 10000; pointer-events: none;
        `;
        document.body.appendChild(container);
    }

    // 2. Criação do elemento com a paleta azul atualizada
    const el = document.createElement('div');
    el.style.cssText = `
        background: rgba(55, 138, 221, 0.15);
        color: #60aef5;
        border: 1px solid rgba(55, 138, 221, 0.3);
        padding: 12px 22px;
        border-radius: 10px;
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        box-shadow: 0 4px 15px rgba(55, 138, 221, 0.1);
        font-family: 'Space Grotesk', sans-serif;
        font-size: 13px;
        font-weight: 600;
        min-width: 200px;
        pointer-events: auto;
        opacity: 0;
        transform: translateX(40px);
        transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
    `;
    
    el.innerText = message;
    container.appendChild(el);

    // 3. Entrada suave (Slide-in)
    requestAnimationFrame(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateX(0)';
    });

    // 4. Ciclo de vida: Saída e Remoção
    setTimeout(() => {
        el.style.opacity = '0';
        el.style.transform = 'translateX(20px)';
        
        el.addEventListener('transitionend', () => {
            el.remove();
            // Limpa o container se não houver mais avisos
            if (container && container.childNodes.length === 0) {
                container.remove();
            }
        });
    }, 4000);
}

const _origSelect = window.selectOption;
window.selectOption = function (qi, oi) {
    _origSelect(qi, oi);
    if (AUTO_SAVE_CONFIG.saveOnAnswer && storageInitialized)
        setTimeout(saveCurrentProgress, 100);
};

document.addEventListener('visibilitychange', () => {
    if (document.hidden) { saveCurrentProgress(); stopAutoSave(); }
    else if (AUTO_SAVE_CONFIG.enabled && storageInitialized) startAutoSave();
});

window.addEventListener('beforeunload', () => { if (storageInitialized) saveCurrentProgress(); });

setTimeout(initializeStorage, 500);