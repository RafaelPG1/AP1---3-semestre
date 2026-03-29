// Configuração do quiz
const originalQuizData = [
  {
    subject: "Aula 1 — Introdução e Ferramentas",
    questions: [
      {
        question: "Uma equipe de desenvolvedores está migrando um sistema procedural legado para o paradigma de Orientação a Objetos. No sistema antigo, os dados dos clientes (nome, CPF, saldo) ficam armazenados em variáveis globais separadas, e as funções que operam sobre esses dados estão dispersas pelo código.\n\nQual é o principal benefício arquitetural esperado após a migração para POO?",
        options: [
          "O código se torna mais lento, pois criar objetos consome mais memória do que variáveis simples.",
          "Os dados e os comportamentos relacionados passam a ser agrupados em unidades coesas chamadas objetos, reduzindo o acoplamento e facilitando a manutenção.",
          "A POO elimina completamente a necessidade de funções, substituindo-as por variáveis globais mais organizadas.",
          "O paradigma orientado a objetos exige que todos os métodos sejam públicos, aumentando a acessibilidade do sistema.",
          "A migração para POO garante automaticamente que o código seja executado mais rápido pelo processador."
        ],
        answer: 1,
        feedback: "<strong>✓ Por que está certa:</strong> A POO une dados (atributos) e comportamentos (métodos) em objetos coesos. Isso promove menor acoplamento entre os módulos, maior coesão interna e facilita a evolução do sistema sem quebrar outras partes."
      },
      {
        question: "Um arquiteto de software analisa um sistema procedural onde os dados de clientes (arrays de strings e inteiros) estão separados das funções que calculam descontos. Ele propõe a transição para POO para mitigar a baixa confiabilidade e o alto custo de evolução.\n\nAo projetar a classe <code>Cliente</code> sob o paradigma de Orientação a Objetos, qual implicação arquitetural é esperada?",
        options: [
          "Aumento do acoplamento entre os módulos de cálculo e os dados do cliente.",
          "Separação rigorosa entre o estado (conhecimento) e o comportamento (serviços) do cliente.",
          "Unificação de dados (atributos) e funções (métodos) em unidades coesas chamadas objetos, promovendo acoplamento mais fraco entre componentes independentes.",
          "Eliminação completa da necessidade de abstração, focando apenas em detalhes irrelevantes de implementação.",
          "Uso exclusivo de lógica linear sequencial para garantir que o estado interno não seja alterado."
        ],
        answer: 2,
        feedback: "<strong>✓ Por que está certa:</strong> A POO unifica dados e funções em objetos, o que resulta em maior coesão e acoplamento mais fraco entre módulos, facilitando a robustez. As outras opções contradizem os princípios básicos de POO ou as motivações de design descritas nas fontes."
      },
      {
        question: "Uma desenvolvedora está criando um sistema de biblioteca digital para gerenciamento de acervo. Ela modela a classe <code>Livro</code> com os atributos <code>titulo</code>, <code>autor</code> e <code>numeroDePaginas</code>, e os métodos <code>abrir()</code>, <code>fechar()</code> e <code>exibirDetalhes()</code>.\n\nNa anatomia desta classe, o que os atributos e os métodos representam, respectivamente, dentro do paradigma de Orientação a Objetos?",
        options: [
          "Os comportamentos do objeto e os dados fixos que nunca mudam.",
          "As ações que o objeto realiza e as variáveis que definem seu estado interno.",
          "O estado interno (o que o objeto conhece/é) e os comportamentos/serviços (o que o objeto faz).",
          "Sequências lineares de instruções e a ocultação total de informações do sistema.",
          "As dependências externas do objeto e os métodos de acesso à memória."
        ],
        answer: 2,
        feedback: "<strong>✓ Por que está certa:</strong> Atributos representam o estado do objeto — o que ele conhece ou é (ex: título, autor). Métodos representam o comportamento — o que o objeto sabe fazer (ex: exibirDetalhes). A alternativa B inverte esses conceitos."
      },
      {
        question: "Em um sistema de Gestão Hospitalar, a equipe de desenvolvimento modela a classe <code>Paciente</code> para monitoramento em tempo real. A classe possui os atributos <code>registroGeral</code> e <code>frequenciaCardiaca</code>, além de métodos que processam e exibem os dados coletados pelos sensores.\n\nNa anatomia desta classe, o que os atributos e métodos representam, respectivamente?",
        options: [
          "Comportamentos essenciais e estados internos fixos.",
          "Serviços que o objeto faz e as variáveis que definem sua condição (dados que o objeto conhece).",
          "O estado interno (conhecimento do objeto) e os comportamentos/serviços (ações que o objeto faz).",
          "Sequências lineares de instruções e a ocultação total de informações.",
          "A variável de configuração e o protocolo de integridade de dados."
        ],
        answer: 2,
        feedback: "<strong>✓ Por que está certa:</strong> Atributos representam o estado (o que o objeto conhece) e métodos representam o comportamento (o que o objeto faz). A alternativa B inverte os conceitos."
      },
      {
        question: "Durante o onboarding de novos desenvolvedores em uma empresa de software, o time técnico apresenta o seguinte trecho de código como exemplo de estrutura básica em Java:\n<pre><code>public class Principal {\n    public static void main(String[] args) {\n        int releaseAmbiente = 17;\n        if (releaseAmbiente >= 17) {\n            System.out.println(\"Ambiente em conformidade técnica.\");\n        }\n    }\n}</code></pre>\n\nSobre a estrutura desta classe e o método <code>main</code>, é correto afirmar que:",
        options: [
          "O nome do arquivo físico não precisa coincidir com o identificador da classe <code>Principal</code>.",
          "O parâmetro <code>String[] args</code> é obrigatório para que a JVM localize o ponto de entrada, mas seu conteúdo vem apenas de variáveis de ambiente.",
          "O modificador <code>static</code> permite que o método seja invocado pela JVM sem a necessidade de instanciar a classe <code>Principal</code>.",
          "A variável <code>releaseAmbiente</code> possui tipagem dinâmica, podendo mudar de <code>int</code> para <code>String</code> posteriormente.",
          "O <code>System.out.println</code> é um componente de versionamento que sinaliza alterações no código."
        ],
        answer: 2,
        feedback: "<strong>✓ Por que está certa:</strong> O método <code>main</code> é o ponto de entrada do programa e o modificador <code>static</code> permite sua execução sem que seja necessário criar uma instância da classe. A alternativa A está errada conforme as convenções de nomenclatura. D está incorreta pois Java usa tipagem estática e forte."
      }
    ]
  },
  {
    subject: "Aula 2 — Sintaxe, Tipagem e Estruturas de Controle",
    questions: [
      {
        question: "Um desenvolvedor de uma fintech está implementando um módulo de câmbio internacional. Durante o processamento, os valores monetários são calculados com precisão decimal usando o tipo <code>double</code>. Para uma etapa específica de auditoria, o sistema precisa trabalhar apenas com centavos inteiros, descartando as casas decimais.\n\nQual técnica de conversão deve ser utilizada e qual o risco associado?",
        options: [
          "Promoção Implícita; risco de NullPointerException.",
          "Casting Explícito; risco de perda de informação (a parte decimal é descartada).",
          "Inferência de Tipo com <code>var</code>; risco de erro em tempo de execução.",
          "Divisão Inteira automática; risco de estouro de memória Stack.",
          "Comparação por <code>==</code>; risco de identidade de objeto."
        ],
        answer: 1,
        feedback: "<strong>✓ Por que está certa:</strong> O casting explícito é necessário para converter um tipo maior (<code>double</code>) em um menor (<code>int</code>), e o programador assume o risco da perda da parte decimal."
      },
      {
        question: "Uma plataforma de ensino online implementa um módulo de controle de acesso. O trecho a seguir gerencia o status de uma conta de usuário e verifica se ele está ativo antes de persistir dados:\n<pre><code>String status = (nota >= 7) ? \"Aprovado\" : \"Reprovado\"; // Linha 1\nif (usuario != null &amp;&amp; usuario.isAtivo()) { salvar(); } // Linha 2</code></pre>\n\nSobre as estruturas de controle e operadores utilizados, analise as afirmações:\nI. A Linha 1 utiliza um Operador Ternário, uma forma condensada de <code>if-else</code> que retorna valor.\nII. A Linha 2 utiliza curto-circuito com o operador <code>&amp;&amp;</code>; se <code>usuario</code> for nulo, a segunda parte não é testada, evitando erro.\nIII. O uso de <code>var</code> na Linha 1 tornaria a tipagem fraca.\n\nEstá(ão) correta(s):",
        options: [
          "Apenas I está correta.",
          "Apenas II está correta.",
          "I e II estão corretas.",
          "II e III estão corretas.",
          "Todas estão corretas."
        ],
        answer: 2,
        feedback: "<strong>✓ Por que está certa:</strong> A afirmação III está incorreta porque o <code>var</code> mantém a tipagem forte, apenas deduz o tipo no momento da atribuição. I e II descrevem corretamente o operador ternário e o curto-circuito."
      },
      {
        question: "Em um sistema de e-commerce, ao finalizar uma compra, o cliente digita um cupom de desconto. O sistema precisa verificar se o texto digitado (\"NATAL10\") corresponde ao cupom cadastrado no banco de dados, que também é uma String de mesmo conteúdo, mas criada em contexto diferente.\n\nQual a forma correta e segura de realizar essa comparação em Java?",
        options: [
          "<code>if (cupomDigitado == cupomCadastrado)</code> pois o String Pool garante o mesmo endereço.",
          "<code>if (cupomDigitado.equals(cupomCadastrado))</code> pois verifica o conteúdo do texto letra por letra.",
          "<code>if (cupomDigitado.compare(cupomCadastrado))</code> para evitar NullPointerException.",
          "Usando o operador <code>!=</code> para verificar a imutabilidade do objeto na Heap.",
          "Atribuindo <code>var resultado = cupomDigitado</code> e comparando na memória Stack."
        ],
        answer: 1,
        feedback: "<strong>✓ Por que está certa:</strong> O operador <code>==</code> compara endereços de memória. Para comparar conteúdo de Strings, deve-se usar <code>.equals()</code>."
      },
      {
        question: "Um sistema de monitoramento térmico industrial coleta leituras de sensores de temperatura e classifica o ambiente automaticamente. O trecho abaixo foi implementado utilizando a sintaxe moderna do Java:\n<pre><code>String tipo = switch (temperatura) {\n    case 0, 10 -> \"Frio\";\n    case 20, 30 -> \"Agradável\";\n    default -> \"Quente\";\n};</code></pre>\n\nEsta sintaxe, introduzida no Java moderno (Java 14+), oferece qual vantagem técnica em relação ao <code>switch</code> tradicional?",
        options: [
          "Permite o uso de tipos primitivos como <code>long</code> e <code>float</code> nos casos.",
          "Elimina a necessidade de <code>break</code> repetitivos e pode retornar valores diretamente (Arrow Syntax).",
          "Garante que a variável <code>tipo</code> seja armazenada na memória Stack em vez da Heap.",
          "Funciona como uma \"Guard Clause\", retornando imediatamente para o método chamador.",
          "Permite o sombreamento (shadowing) de atributos da classe dentro dos casos."
        ],
        answer: 1,
        feedback: "<strong>✓ Por que está certa:</strong> O <code>switch</code> moderno com Arrow Syntax é mais conciso, evita o erro comum de esquecer o <code>break</code> e permite atribuição direta."
      },
      {
        question: "Durante uma revisão de código em uma startup de tecnologia, o tech lead identifica um problema no módulo de cadastro de usuários. Um desenvolvedor júnior declarou <code>int x;</code> dentro de um bloco <code>if</code> e tentou imprimir o valor de <code>x</code> fora desse bloco. O compilador apontou erro antes mesmo da execução.\n\nQual o conceito de gerenciamento de variáveis justifica o erro de compilação?",
        options: [
          "Variáveis locais (de método ou bloco) não recebem valor padrão e seu escopo limita-se às chaves <code>{ }</code> onde foram criadas.",
          "Ocorreu um NullPointerException pois tipos primitivos são sempre referências na Stack.",
          "O Java identificou um Shadowing (sombreamento), impedindo a leitura do atributo da classe.",
          "A variável deveria ter sido declarada com <code>var</code> para ter escopo global.",
          "O Garbage Collector removeu a variável da Heap antes da impressão."
        ],
        answer: 0,
        feedback: "<strong>✓ Por que está certa:</strong> Variáveis de bloco \"nascem e morrem\" dentro das chaves, e variáveis locais não são inicializadas automaticamente com zero ou nulo."
      }
    ]
  },
  {
    subject: "Aula 3 — Métodos e Encapsulamento",
    questions: [
      {
        question: "Um sistema de folha de pagamento de uma grande empresa possui a classe <code>Funcionario</code>. Durante os testes de integração, a equipe identificou que valores negativos de salário estavam sendo persistidos no banco de dados por erro de entrada. O arquiteto determinou que o estado do objeto deve ser protegido contra modificações externas inválidas.\n\nQual pilar da POO e quais ferramentas técnicas devem ser aplicados para resolver esse problema?",
        options: [
          "Herança e modificador <code>protected</code>.",
          "Polimorfismo e sobrescrita de métodos.",
          "Encapsulamento, utilizando atributos <code>private</code> e métodos <code>setter</code> com validação lógica.",
          "Abstração, definindo uma interface <code>Pagável</code>.",
          "Sobrecarga de construtores com a palavra-chave <code>static</code>."
        ],
        answer: 2,
        feedback: "<strong>✓ Por que está certa:</strong> O encapsulamento protege os dados. Atributos privados e métodos <code>set</code> permitem validar os dados (ex: impedir valores negativos) antes de gravá-los."
      },
      {
        question: "Em um sistema de gestão de usuários, o desenvolvedor implementa o método abaixo para atualizar dados de um cadastro. O método recebe um tipo primitivo e um objeto como parâmetros:\n<pre><code>public void atualizar(int idade, Usuario user) {\n    idade = 30;\n    user.setNome(\"Ana\");\n}</code></pre>\nO método é chamado passando a variável <code>int i = 20</code> e um objeto <code>Usuario u</code> com nome \"José\".\n\nApós a execução do método, quais serão os valores de <code>i</code> e do nome em <code>u</code> no código chamador?",
        options: [
          "<code>i</code> será 30 e o nome será \"Ana\".",
          "<code>i</code> será 20 e o nome será \"José\".",
          "<code>i</code> será 20 e o nome será \"Ana\".",
          "O código não compila por causa da tipagem forte.",
          "Ambos causarão um erro de <code>shadowing</code>."
        ],
        answer: 2,
        feedback: "<strong>✓ Por que está certa:</strong> Em Java, a passagem é por valor. Para primitivos, o método recebe uma cópia do valor (não altera o original). Para objetos, recebe uma cópia da referência, permitindo alterar o estado do objeto apontado."
      },
      {
        question: "Uma biblioteca de manipulação de imagens para aplicações mobile é desenvolvida por uma equipe. Para facilitar o uso da API pelos desenvolvedores clientes, o time decide oferecer flexibilidade no método de redimensionamento: um aceita dois inteiros (largura, altura), outro aceita um <code>double</code> (fator de escala) e um terceiro aceita um objeto <code>Dimensoes</code>. Todos os três se chamam <code>redimensionar()</code>.\n\nEste cenário exemplifica qual conceito de POO e qual seu benefício?",
        options: [
          "Sobrescrita (Override); permite mudar o comportamento da classe pai.",
          "Encapsulamento; esconde a implementação do redimensionamento.",
          "Sobrecarga (Overloading); permite criar métodos com mesmo nome, diferenciados pela assinatura (parâmetros), facilitando o uso da API.",
          "Polimorfismo dinâmico; decide em tempo de execução qual método chamar.",
          "Acoplamento rígido; garante que o estado seja imutável."
        ],
        answer: 2,
        feedback: "<strong>✓ Por que está certa:</strong> Sobrecarga é a criação de métodos com mesmo nome e parâmetros diferentes na mesma classe."
      },
      {
        question: "Um desenvolvedor está criando a classe <code>Produto</code> para um sistema de estoque, seguindo o padrão JavaBean adotado pela equipe. Ele define o atributo <code>private double preco</code> e, conforme as boas práticas do padrão, precisa expor esse valor para leitura por outros módulos do sistema.\n\nSeguindo a convenção de nomes Java, como deve ser a assinatura do método de leitura?",
        options: [
          "<code>public double preco()</code>",
          "<code>public void setPreco(double p)</code>",
          "<code>public double getPreco()</code>",
          "<code>private double readPreco()</code>",
          "<code>public boolean isPreco()</code>"
        ],
        answer: 2,
        feedback: "<strong>✓ Por que está certa:</strong> A convenção JavaBean dita o uso de <code>get</code> seguido do nome do atributo com a primeira letra maiúscula para leitura."
      },
      {
        question: "Em um sistema bancário de alto volume de transações, o método <code>transferir</code> da classe <code>Conta</code> é responsável por mover valores entre contas de forma segura. Sua implementação é:\n<pre><code>public void transferir(double valor, Conta destino) {\n    if (this.saldo >= valor) {\n        this.sacar(valor);\n        destino.depositar(valor);\n    }\n}</code></pre>\n\nQual a função técnica da palavra-chave <code>this</code> utilizada neste contexto?",
        options: [
          "Invocar o Garbage Collector para limpar o saldo.",
          "Referenciar o objeto atual da instância, diferenciando atributos de variáveis locais e permitindo chamadas de métodos internos.",
          "Tornar o método acessível de forma estática sem o operador <code>new</code>.",
          "Garantir que a transferência seja realizada apenas entre classes do mesmo pacote.",
          "Atuar como um \"decorator\" de propriedade, similar ao <code>@property</code> do Python."
        ],
        answer: 1,
        feedback: "<strong>✓ Por que está certa:</strong> <code>this</code> refere-se ao objeto atual. É usado para desambiguidade e clareza ao acessar membros da própria instância."
      }
    ]
  },
  {
    subject: "Aula 4 — Construtores, Membros Estáticos e Herança",
    questions: [
      {
        question: "No desenvolvimento de um RPG multiplayer online, a equipe de backend modela os personagens jogáveis. A classe <code>Personagem</code> possui atributos como <code>nome</code> e <code>nivel</code>. Os designers de jogo definem que todo herói recém-criado deve iniciar obrigatoriamente no nível 1, garantindo o balanceamento.\n\nQual estrutura de código garante que o objeto nasça com este estado válido?",
        options: [
          "Um método estático chamado <code>main</code>.",
          "Um construtor com a assinatura <code>public Personagem(String nome)</code>, que inicializa os atributos.",
          "Uma interface que define o contrato de nascimento do objeto.",
          "O uso de <code>var</code> no momento da instanciação.",
          "Um modificador de acesso <code>protected</code> no atributo <code>nivel</code>."
        ],
        answer: 1,
        feedback: "<strong>✓ Por que está certa:</strong> O construtor é o bloco executado no momento do <code>new</code> para garantir que o objeto nasça com um estado válido."
      },
      {
        question: "Durante a revisão de código de um sistema de gerenciamento de usuários, a equipe analisa a seguinte classe de configuração:\n<pre><code>public class Config {\n    public static int limiteUsuarios = 100;\n    public String versao = \"1.0\";\n    public static void exibir() {\n        System.out.println(limiteUsuarios); // Linha A\n        System.out.println(versao);        // Linha B\n    }\n}</code></pre>\n\nAo tentar compilar esta classe, o que ocorrerá e por quê?",
        options: [
          "Compila com sucesso; métodos estáticos acessam tudo.",
          "Erro na Linha A; <code>limiteUsuarios</code> deveria ser <code>private</code>.",
          "Erro na Linha B; métodos estáticos (\"Forma de Bolo\") não enxergam variáveis de instância (normais) pois elas só existem após o <code>new</code>.",
          "Erro em ambas; o <code>main</code> está ausente.",
          "Sucesso, mas o Garbage Collector removerá <code>versao</code> da memória Stack."
        ],
        answer: 2,
        feedback: "<strong>✓ Por que está certa:</strong> Membros <code>static</code> pertencem à classe e não podem acessar diretamente membros de instância, que dependem de um objeto criado."
      },
      {
        question: "Um arquiteto de software está desenhando o módulo de frota de um sistema de logística. Ele identifica que as classes <code>Carro</code>, <code>Moto</code> e <code>Caminhao</code> possuem atributos comuns como <code>placa</code> e <code>ano</code>, além de comportamentos compartilhados. Para evitar repetição de código e facilitar a manutenção, ele decide criar uma superclasse <code>Veiculo</code>.\n\nComo é chamada essa relação e qual a regra fundamental para aplicá-la corretamente em Java?",
        options: [
          "Composição; regra do \"tem-um\".",
          "Generalização; regra do \"é-um\" (ex: Carro É UM Veiculo).",
          "Encapsulamento; regra da \"porta aberta\".",
          "Polimorfismo; regra da \"assinatura idêntica\".",
          "Implementação; regra do \"contrato de software\"."
        ],
        answer: 1,
        feedback: "<strong>✓ Por que está certa:</strong> A herança representa generalização e deve seguir a relação semântica \"é-um\"."
      },
      {
        question: "Um sistema de vendas online possui a classe <code>Pedido</code> com um atributo <code>static int totalPedidos = 0</code>, que é incrementado toda vez que um novo pedido é criado no construtor. O gerente de produto percebe que, ao consultar <code>Pedido.totalPedidos</code> a qualquer momento, o valor reflete com precisão todos os objetos já instanciados durante a sessão.\n\nPor que membros <code>static</code> têm esse comportamento compartilhado entre todas as instâncias?",
        options: [
          "Porque membros <code>static</code> são copiados para cada objeto no momento do <code>new</code>.",
          "Porque membros <code>static</code> pertencem à classe em si, e não a nenhum objeto específico, sendo compartilhados por todas as instâncias.",
          "Porque o Java armazena atributos estáticos em cada objeto para garantir consistência.",
          "Porque o construtor cria um novo <code>static</code> a cada chamada do <code>new</code>.",
          "Porque atributos <code>static</code> são imutáveis por definição e nunca mudam de valor."
        ],
        answer: 1,
        feedback: "<strong>✓ Por que está certa:</strong> Membros <code>static</code> pertencem à classe (não a objetos individuais). Eles existem independentemente de qualquer instância e são compartilhados por todos os objetos da classe, tornando-os ideais para contadores e configurações globais."
      },
      {
        question: "No desenvolvimento de um sistema de torneios de e-sports, a classe <code>Jogador</code> precisa ser criada de duas formas: apenas com o apelido (nick), quando o jogador ainda não está em uma equipe, ou com nick e equipe. O desenvolvedor aplica encadeamento de construtores usando <code>this(nick, \"Sem Equipe\")</code> no construtor simples.\n\nQual a vantagem dessa técnica e qual a restrição imposta pelo Java?",
        options: [
          "Aumenta o uso de memória; deve ser a última linha do bloco.",
          "Facilita a manutenção evitando repetição (DRY); a chamada <code>this()</code> deve ser obrigatoriamente a primeira linha do construtor.",
          "Permite herança múltipla; deve ser estática.",
          "Cria um objeto na Stack; impede o uso de <code>super()</code>.",
          "Reduz o tempo de compilação; exige modificador <code>private</code>."
        ],
        answer: 1,
        feedback: "<strong>✓ Por que está certa:</strong> O uso de <code>this()</code> para encadear construtores reduz duplicação de lógica, mas o Java exige que seja a primeira instrução."
      }
    ]
  },
  {
    subject: "Aula 5 — Herança, Reuso e Membros static",
    questions: [
      {
        question: "Em um sistema financeiro, a classe <code>ContaPoupanca</code> estende a classe <code>ContaBanco</code>. Durante a implementação dos cálculos de rendimento, o desenvolvedor percebe que precisa acessar o atributo <code>saldo</code> definido na classe pai. No entanto, tornar esse atributo público exporia dados sensíveis a qualquer parte do sistema.\n\nQual modificador de acesso na classe pai permite esse equilíbrio entre encapsulamento e reuso?",
        options: [
          "<code>public</code>",
          "<code>private</code>",
          "<code>protected</code>",
          "<code>default</code> (sem modificador)",
          "<code>static</code>"
        ],
        answer: 2,
        feedback: "<strong>✓ Por que está certa:</strong> O modificador <code>protected</code> torna o membro visível para a própria classe, subclasses e classes do mesmo pacote, sendo ideal para herança."
      },
      {
        question: "Em um sistema de RH, a classe <code>Gerente</code> estende <code>Funcionario</code>. Ao implementar o construtor de <code>Gerente</code>, o desenvolvedor precisa repassar o nome recebido ao construtor da classe pai para que os atributos herdados sejam corretamente inicializados.\n\nQual a sintaxe correta e a justificativa técnica para essa obrigatoriedade?",
        options: [
          "<code>this.nome = nome;</code> para garantir o sombreamento.",
          "<code>super(nome);</code> na primeira linha, para garantir que os \"alicerces\" do objeto pai sejam montados antes da especialização do filho.",
          "<code>Funcionario(nome);</code> chamando o método diretamente como se fosse estático.",
          "Não é necessário, pois construtores são herdados automaticamente em Java.",
          "<code>extends(nome);</code> para vincular o Bytecode das duas classes."
        ],
        answer: 1,
        feedback: "<strong>✓ Por que está certa:</strong> Construtores não são herdados. Deve-se usar <code>super()</code> na primeira linha do construtor filho para inicializar a superclasse."
      },
      {
        question: "Em um sistema de simulação de zoológico virtual, a classe <code>Animal</code> define o método <code>emitirSom()</code> com uma implementação genérica. A classe <code>Cachorro</code> herda de <code>Animal</code> e reimplementa esse método para exibir \"Au Au\", utilizando a anotação <code>@Override</code> para sinalizar explicitamente ao compilador a intenção de especialização.\n\nComo é chamado esse mecanismo e o que ele permite?",
        options: [
          "Sobrecarga; permite múltiplos métodos com nomes diferentes.",
          "Sobrescrita; permite que a subclasse forneça uma implementação específica para um método já definido na superclasse.",
          "Abstração; permite esconder a complexidade do latido.",
          "Encapsulamento; protege o som do animal.",
          "Composição; estabelece que Cachorro tem um Som."
        ],
        answer: 1,
        feedback: "<strong>✓ Por que está certa:</strong> A sobrescrita (<code>override</code>) especializa o comportamento herdado, mantendo a mesma assinatura."
      },
      {
        question: "Uma equipe de desenvolvimento está projetando a classe <code>Smartphone</code> para um sistema de inventário de dispositivos. O tech lead sugere que ela herde comportamentos tanto de <code>Telefone</code> quanto de <code>Camera</code>, pois um smartphone é ambos. Um desenvolvedor tenta escrever <code>public class Smartphone extends Telefone, Camera</code>.\n\nQual será o resultado e qual a alternativa recomendada pelas boas práticas?",
        options: [
          "Funciona normalmente, pois Java suporta herança múltipla baseada em estado.",
          "Erro de compilação; Java proíbe herança múltipla de classes para evitar o \"erro do diamante\". Recomenda-se o uso de Interfaces ou Composição.",
          "Funciona apenas se <code>Telefone</code> e <code>Camera</code> forem classes estáticas.",
          "Erro de execução; o JRE não consegue alocar duas superclasses na Heap.",
          "Funciona se o desenvolvedor utilizar o modificador <code>protected</code> em ambos os pais."
        ],
        answer: 1,
        feedback: "<strong>✓ Por que está certa:</strong> Java não permite que uma classe tenha mais de um pai direto (<code>extends</code>). O reuso deve ser buscado via composição ou interfaces."
      },
      {
        question: "O Banco Central atualiza a taxa de juros de referência, e o sistema bancário de uma instituição financeira precisa refletir essa mudança imediatamente para todas as contas cadastradas. A classe <code>Banco</code> possui o atributo <code>public static double taxaJuros = 0.05;</code>, e o sistema realiza a atualização para <code>0.06</code>.\n\nO que acontece com todas as instâncias de contas já criadas?",
        options: [
          "Nada, pois cada conta tem sua própria cópia da taxa na memória Heap.",
          "Todas as instâncias verão o novo valor de <code>0.06</code> simultaneamente, pois atributos estáticos são compartilhados através da Classe.",
          "O código não compila, pois membros estáticos são imutáveis (final) por padrão.",
          "Apenas as novas contas criadas após a alteração terão a nova taxa.",
          "Ocorre um erro de runtime (\"Static Access Exception\")."
        ],
        answer: 1,
        feedback: "<strong>✓ Por que está certa:</strong> Membros <code>static</code> pertencem à classe (molde) e são compartilhados entre todas as instâncias."
      }
    ]
  },
  {
    subject: "Aula 6 — Polimorfismo e Abstração",
    questions: [
      {
        question: "Uma plataforma de pagamentos digitais precisa processar diferentes modalidades de transação de forma unificada. O módulo principal recebe uma <code>List&lt;Pagamento&gt;</code>, que pode conter instâncias de <code>Pix</code>, <code>Cartao</code> e <code>Boleto</code>. O código percorre a lista chamando <code>p.pagar(valor)</code> para cada item sem verificar o tipo concreto.\n\nEste cenário ilustra qual conceito e qual mecanismo da JVM?",
        options: [
          "Encapsulamento e Ocultação de Informação.",
          "Polimorfismo e Dynamic Method Dispatch (despacho dinâmico de métodos), onde a JVM decide em tempo de execução qual implementação executar.",
          "Herança Rígida e Alocação Estática no Metaspace.",
          "Abstração e Casting Explícito obrigatório.",
          "Sobrecarga e Verificação de Tipo em tempo de compilação."
        ],
        answer: 1,
        feedback: "<strong>✓ Por que está certa:</strong> O polimorfismo permite tratar diferentes objetos por uma interface comum, e a JVM decide qual método rodar na hora da execução."
      },
      {
        question: "Em um sistema de simulação de ecossistemas, o arquiteto define que a classe <code>Animal</code> deve servir apenas como modelo base — nenhum objeto do tipo genérico \"Animal\" deve ser instanciado diretamente. Ao mesmo tempo, todo animal concreto do sistema deve obrigatoriamente implementar o método <code>emitirSom()</code>.\n\nQual a definição técnica correta para essa classe e seu método?",
        options: [
          "Classe Privada com método Final.",
          "Classe Estática com método Nativo.",
          "Classe Abstrata com método Abstrato (sem implementação na classe base).",
          "Interface com atributos Protegidos.",
          "Classe Concreta com Sobrecarga de construtores."
        ],
        answer: 2,
        feedback: "<strong>✓ Por que está certa:</strong> Classes abstratas não podem ser instanciadas e servem para definir modelos incompletos que devem ser especializados."
      },
      {
        question: "Em uma API de mapas urbanos, diferentes tipos de estabelecimentos precisam fornecer sua localização geográfica. Define-se <code>public interface Localizavel { void getCoordenadas(); }</code>. As classes <code>Restaurante</code>, <code>Escola</code> e <code>Parque</code> implementam essa interface, cada uma com sua própria lógica de obtenção de coordenadas.\n\nNo contexto de engenharia de software, o que a interface representa e qual seu principal benefício?",
        options: [
          "Representa um \"Molde Físico\" e aumenta o acoplamento.",
          "Representa um \"Contrato de Software\" e promove o desacoplamento, permitindo que o código dependa de contratos e não de implementações.",
          "Representa uma \"Classe Pai\" e permite armazenar estado (variáveis) compartilhado.",
          "Representa uma \"Guard Clause\" para evitar NullPointerException.",
          "Representa um \"Bytecode\" otimizado para o compilador."
        ],
        answer: 1,
        feedback: "<strong>✓ Por que está certa:</strong> Interfaces funcionam como contratos. Elas garantem comportamentos sem impor como eles devem ser feitos, reduzindo dependências entre módulos."
      },
      {
        question: "Em um sistema de automação residencial, a classe <code>ControleRemoto</code> é projetada para comandar qualquer dispositivo inteligente da casa. Ela depende apenas da interface <code>Dispositivo</code>, chamando <code>dispositivo.ligar()</code> sem conhecer a implementação concreta, seja uma <code>TV</code> ou um <code>ArCondicionado</code>.\n\nDe acordo com os princípios de design discutidos, essa abordagem facilita qual aspecto do desenvolvimento?",
        options: [
          "Aumento da carga cognitiva do desenvolvedor.",
          "Manutenibilidade e Escalabilidade, pois novos dispositivos podem ser adicionados ao sistema sem alterar o código do <code>ControleRemoto</code>.",
          "Performance, pois elimina a memória Heap.",
          "Depuração (Debugging), pois as interfaces gravam logs automáticos.",
          "Tipagem dinâmica, transformando Java em uma linguagem similar ao Python."
        ],
        answer: 1,
        feedback: "<strong>✓ Por que está certa:</strong> O desacoplamento via abstração permite que o sistema evolua com novos componentes (novas implementações da interface) sem quebrar as estruturas existentes."
      },
      {
        question: "Uma equipe de arquitetura de software discute quando utilizar uma Classe Abstrata versus uma Interface no projeto de um novo módulo. O tech lead pede que um desenvolvedor explique a diferença fundamental entre as duas construções em Java, tanto em termos de estrutura quanto de regras de herança.\n\nQual a diferença fundamental entre uma Classe Abstrata e uma Interface em relação à estrutura e herança em Java?",
        options: [
          "Interfaces podem ser instanciadas; Classes Abstratas não.",
          "Classes Abstratas podem ter estado (atributos) e métodos concretos; Interfaces definem apenas comportamentos e permitem múltiplas implementações por uma única classe.",
          "Não há diferença; ambos são sinônimos de polimorfismo estático.",
          "Classes Abstratas usam a palavra <code>implements</code>; Interfaces usam <code>extends</code>.",
          "Interfaces são limitadas a um único uso por projeto; Classes Abstratas são globais."
        ],
        answer: 1,
        feedback: "<strong>✓ Por que está certa:</strong> Classes abstratas podem ter atributos e métodos prontos, enquanto interfaces são focadas puramente em contratos de comportamento e superam a limitação de herança única."
      }
    ]
  },
  {
    subject: "Aula 7 — Revisão Geral",
    questions: [
      {
        question: "Uma empresa de segurança digital desenvolve um sistema de autenticação multifator. Para proteger as credenciais dos usuários, a equipe decide que a senha nunca deve ser acessada diretamente por módulos externos. O desenvolvedor cria a classe <code>Usuario</code> com o atributo de senha como <code>private</code> e implementa um método <code>validarSenha(String tentativa)</code> que retorna <code>true</code> ou <code>false</code>.\n\nEste cenário aplica quais conceitos fundamentais, respectivamente?",
        options: [
          "Herança e Polimorfismo.",
          "Abstração e static.",
          "Encapsulamento e Métodos (comportamento).",
          "Bytecode e JDK.",
          "Construtores e Shadowing."
        ],
        answer: 2,
        feedback: "<strong>✓ Por que está certa:</strong> O uso de modificador privado para proteger o dado é encapsulamento, e a validação é um comportamento definido por método."
      },
      {
        question: "Em uma aula de revisão de POO, o professor apresenta três afirmações sobre os pilares do paradigma. Os alunos devem analisar cada uma e identificar quais estão corretas:\nI. O polimorfismo permite que uma lista de <code>FormaGeometrica</code> contenha <code>Circulo</code> e <code>Quadrado</code>.\nII. A abstração foca nos detalhes internos de como o motor do carro funciona.\nIII. O construtor padrão desaparece se o programador definir manualmente um construtor com parâmetros.\n\nEstá(ão) correta(s):",
        options: [
          "I e II apenas.",
          "I e III apenas.",
          "II e III apenas.",
          "I, II e III.",
          "Apenas I."
        ],
        answer: 1,
        feedback: "<strong>✓ Por que está certa:</strong> A afirmação II está incorreta porque a abstração foca no essencial e ignora detalhes de implementação. I e III estão corretas conforme as regras de polimorfismo e construtores."
      },
      {
        question: "Um analista de sistemas recebe o seguinte requisito: \"O sistema bancário permite saques, depósitos e emissão de extratos. Cada tipo de conta (Corrente e Poupança) tem sua própria regra de cálculo de taxa mensal.\" Ele deve modelar esse sistema aplicando as melhores práticas de POO.\n\nPara modelar esse sistema usando as melhores práticas de POO, deve-se:",
        options: [
          "Criar uma única classe <code>Banco</code> com muitos <code>if-else</code> para cada tipo de conta.",
          "Criar uma classe abstrata <code>Conta</code> com o método abstrato <code>calcularTaxa()</code> e estendê-la nas contas específicas.",
          "Usar apenas variáveis globais <code>static</code> para armazenar todos os saldos.",
          "Definir todas as classes como <code>final</code> para impedir o reuso de código.",
          "Substituir a POO por programação procedural linear para aumentar a performance."
        ],
        answer: 1,
        feedback: "<strong>✓ Por que está certa:</strong> O uso de classes abstratas e herança permite especializar o comportamento (taxas) mantendo uma base comum."
      },
      {
        question: "Durante um treinamento de nivelamento em Java, o instrutor explica como a JVM gerencia a memória durante a execução de um programa. Ele destaca a diferença entre a memória Stack, usada para execução rápida, e a Heap, usada para armazenamento dinâmico de objetos.\n\nQual afirmação está correta sobre a relação entre a memória Stack e as referências de objetos?",
        options: [
          "O objeto completo reside na Stack para acesso rápido.",
          "A Stack guarda apenas o endereço (ponteiro/referência) do objeto, enquanto os dados reais do objeto ficam na Heap.",
          "A Stack é limpa pelo Garbage Collector; a Heap não.",
          "O Metaspace substitui a Stack em versões modernas do Java.",
          "Atributos estáticos residem na Stack por serem temporários."
        ],
        answer: 1,
        feedback: "<strong>✓ Por que está certa:</strong> A Stack é para execução rápida de variáveis locais e endereços; a Heap é para armazenamento dinâmico de objetos."
      },
      {
        question: "Uma equipe de desenvolvimento discute as características que diferenciam Java de linguagens de script como Python e JavaScript. Um dos pontos levantados é a tipagem da linguagem, que impacta diretamente na segurança do código e na detecção precoce de erros pelo compilador.\n\nO que caracteriza a \"Tipagem Forte\" do Java?",
        options: [
          "Variáveis podem mudar de tipo a qualquer momento como no Python.",
          "É obrigatório declarar o tipo da variável, e o compilador impede operações entre tipos incompatíveis (ex: somar String com int diretamente sem conversão).",
          "O uso obrigatório de modificadores <code>public</code> em todos os métodos.",
          "A necessidade de usar ferramentas externas para compilar o código.",
          "A impossibilidade de usar herança múltipla."
        ],
        answer: 1,
        feedback: "<strong>✓ Por que está certa:</strong> Java exige declaração explícita (ou inferida via <code>var</code> mas mantendo o tipo fixo) e rigor na compatibilidade de tipos."
      }
    ]
  },
  {
    subject: "Aula 8 — Tratamento de Exceções",
    questions: [
      {
        question: "Em um sistema de caixa eletrônico, um cliente tenta realizar um saque de R$ 500,00 em uma conta com saldo de R$ 200,00. O requisito funcional exige que o sistema não trave nem encerre abruptamente, mas sim informe ao usuário que a operação não é possível e permaneça disponível para novas interações.\n\nComo esse evento é classificado tecnicamente em Java e qual a estrutura básica para lidar com ele?",
        options: [
          "É um Bytecode malformado; usa-se <code>javac</code>.",
          "É uma Exceção; utiliza-se o bloco <code>try-catch</code> para capturar e tratar o erro.",
          "É um Shadowing; utiliza-se a palavra-chave <code>this</code>.",
          "É um erro de herança; utiliza-se <code>extends</code>.",
          "É um erro de Tipagem Dinâmica; utiliza-se <code>casting</code>."
        ],
        answer: 1,
        feedback: "<strong>✓ Por que está certa:</strong> Exceções são erros em tempo de execução que interrompem o fluxo. O <code>try</code> tenta o código perigoso e o <code>catch</code> trata a falha."
      },
      {
        question: "Um desenvolvedor está implementando um módulo de leitura de arquivos de configuração para um sistema corporativo. Ao revisar o código com o tech lead, surge a dúvida sobre o uso correto das palavras-chave <code>throw</code> e <code>throws</code> no contexto do método que lê os arquivos.\n\nQual a diferença técnica entre elas?",
        options: [
          "<code>throw</code> indica que o método pode falhar; <code>throws</code> lança o erro.",
          "<code>throw</code> é usado para lançar uma exceção manualmente dentro do código; <code>throws</code> é usado na assinatura do método para declarar que ele pode gerar aquela exceção.",
          "<code>throw</code> captura o erro; <code>throws</code> finaliza o programa.",
          "Ambas são opcionais e não afetam a compilação de exceções checadas.",
          "<code>throw</code> é para erros estáticos; <code>throws</code> para erros de instância."
        ],
        answer: 1,
        feedback: "<strong>✓ Por que está certa:</strong> <code>throw</code> é a ação de disparar a exceção; <code>throws</code> é o aviso obrigatório na assinatura para exceções que o método não trata internamente."
      },
      {
        question: "Um desenvolvedor de um sistema bancário percebe que as exceções genéricas do Java não descrevem com clareza os erros de regra de negócio. Para resolver isso, ele cria a classe <code>SaldoInsuficienteException</code> que herda de <code>Exception</code>, permitindo que o sistema identifique e trate especificamente tentativas de saques acima do saldo disponível.\n\nComo é chamada essa prática e qual a vantagem?",
        options: [
          "Polimorfismo de erro; aumenta a velocidade da JVM.",
          "Exceção Personalizada; permite criar mensagens claras e tratamentos específicos para regras de negócio do sistema.",
          "Encapsulamento de falha; esconde o erro do usuário final.",
          "Sobrecarga de erro; permite múltiplos <code>catch</code> genéricos.",
          "Abstração de erro; elimina a necessidade de <code>try-catch</code>."
        ],
        answer: 1,
        feedback: "<strong>✓ Por que está certa:</strong> Criar subclasses de <code>Exception</code> permite personalizar o tratamento de erros críticos do negócio."
      },
      {
        question: "Em um sistema de integração com banco de dados, o desenvolvedor implementa um módulo de processamento de transações que abre conexões com recursos externos. O trecho abaixo é extraído desse módulo:\n<pre><code>try {\n    conexao.abrir();\n    processar();\n} catch (SQLException e) {\n    log(e);\n} finally {\n    conexao.fechar();\n}</code></pre>\n\nQual o papel fundamental do bloco <code>finally</code> neste código?",
        options: [
          "Executar apenas se ocorrer um erro na abertura.",
          "Substituir o uso de <code>throws</code> na assinatura do método.",
          "Garantir que o recurso (conexão) seja fechado independentemente de ter ocorrido uma exceção ou não.",
          "Reiniciar o método <code>main</code> automaticamente.",
          "Transformar a exceção em uma <code>RuntimeException</code> não checada."
        ],
        answer: 2,
        feedback: "<strong>✓ Por que está certa:</strong> O bloco <code>finally</code> sempre executa, sendo ideal para liberação de recursos como fechar arquivos ou conexões."
      },
      {
        question: "Durante os testes de um sistema de e-commerce, a equipe de QA identifica uma falha recorrente: ao tentar acessar atributos de um objeto de pedido que não foi corretamente inicializado, o sistema lança um erro em tempo de execução. Ao investigar, o desenvolvedor confirma que a variável de pedido está com valor <code>null</code>.\n\nComo esse erro é classificado e qual a boa prática para evitá-lo?",
        options: [
          "Exceção Checada (Checked); deve-se usar <code>throws</code>.",
          "Erro de Compilação; deve-se inicializar na Stack.",
          "Exceção Não Checada (Unchecked/RuntimeException); deve-se realizar verificações preventivas (ex: <code>if (obj != null)</code>) antes do uso.",
          "Erro de Escopo; deve-se usar o modificador <code>public</code>.",
          "Erro de Casting; deve-se usar promoção implícita."
        ],
        answer: 2,
        feedback: "<strong>✓ Por que está certa:</strong> O NPE é uma exceção de tempo de execução (unchecked). A prevenção lógica é a melhor prática, já que o compilador não obriga o tratamento com <code>try-catch</code>."
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

// ─── Shuffle: apenas embaralha opções e atualiza índice correto ───────────────
function createShuffledQuizData() {
    return originalQuizData.map(subject => ({
        ...subject,
        questions: subject.questions.map(question => {
            const optionIndices = question.options.map((_, index) => index);
            const shuffledIndices = shuffleArray(optionIndices);
            const shuffledOptions = shuffledIndices.map(index => question.options[index]);
            const newCorrectAnswer = shuffledIndices.indexOf(question.answer);
            return {
                ...question,
                options: shuffledOptions,
                answer: newCorrectAnswer
            };
        })
    }));
}

function createOriginalQuizData() {
    return originalQuizData.map(subject => ({ ...subject, questions: subject.questions.map(q => ({ ...q })) }));
}

// ─── Monta o feedback dinamicamente (evita duplicação) ───────────────────────
function buildFeedbackHTML(question, isCorrect) {
    const letters = ['A', 'B', 'C', 'D', 'E'];
    const correctLetter = letters[question.answer];
    const correctOptionText = question.options[question.answer];
    const correctLine = `<strong>✓ Resposta correta:</strong> ${correctLetter}) ${correctOptionText}<br><br>`;
    const body = question.feedback.replace(/\n/g, '<br>');
    return `<div class="feedback ${isCorrect ? 'correct-feedback' : 'incorrect-feedback'}">
        ${correctLine}${body}
    </div>`;
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
                feedbackHTML = buildFeedbackHTML(question, isCorrect);
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

    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = buildFeedbackHTML(question, isCorrect);
    const built = tempDiv.firstElementChild;
    feedbackEl.className = built.className;
    feedbackEl.innerHTML = built.innerHTML;

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

    const revealBtn = document.getElementById('reveal');
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
document.getElementById('reveal').addEventListener('click', revealAnswers);
document.getElementById('restart').addEventListener('click', restartQuiz);

document.getElementById('btn-up').addEventListener('click',   () => smoothScrollTo(0, 1000));
document.getElementById('btn-left').addEventListener('click', () => { window.location.href = '../POO.html'; });
document.getElementById('btn-down').addEventListener('click', () => smoothScrollTo(document.body.scrollHeight, 1000));

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

    // 2. Criação da notificação — paleta Âmbar/Gold (mantida conforme solicitado)
    const el = document.createElement('div');
    el.style.cssText = `
        background: rgba(239, 159, 39, 0.15);
        color: #f5b84c;
        border: 1px solid rgba(239, 159, 39, 0.3);
        padding: 12px 22px;
        border-radius: 10px;
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        box-shadow: 0 4px 15px rgba(239, 159, 39, 0.1);
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

    // 3. Entrada suave
    requestAnimationFrame(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateX(0)';
    });

    // 4. Ciclo de saída
    setTimeout(() => {
        el.style.opacity = '0';
        el.style.transform = 'translateX(20px)';

        el.addEventListener('transitionend', () => {
            el.remove();
            if (container && container.childNodes.length === 0) {
                container.remove();
            }
        });
    }, 4000);
}

document.addEventListener('visibilitychange', () => {
    if (document.hidden) { saveCurrentProgress(); stopAutoSave(); }
    else if (AUTO_SAVE_CONFIG.enabled && storageInitialized) startAutoSave();
});
window.addEventListener('beforeunload', () => { if (storageInitialized) saveCurrentProgress(); });

setTimeout(initializeStorage, 500);


