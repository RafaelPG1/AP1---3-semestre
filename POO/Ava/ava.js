//ava.js - modelo
const quizDataAVAPoo = [
  {
    subject: "Programação Orientada a Objetos",
    questions: [

      // ── Questão 1 ──────────────────────────────────────────────────────────
      {
        texto: "Uma equipe de desenvolvimento está criando um sistema de simulação de tráfego urbano para uma metrópole. Eles precisam modelar computacionalmente elementos reais como semáforos, veículos e pedestres, garantindo que dezenas de carros possam existir simultaneamente na simulação com características e velocidades próprias. A Programação Orientada a Objetos (POO) baseia-se na criação de modelos que representam elementos do mundo real ou do domínio do problema computacional. Para que esse mapeamento ocorra de forma eficiente, a POO apoia-se fortemente nos conceitos de classes e objetos, que constituem a base estrutural e comportamental da maioria das aplicações modernas.\n\nConsiderando a arquitetura de sistemas orientados a objetos e a construção do referido simulador, avalie as asserções a seguir e a relação proposta entre elas:",
        assertions: [
          "Em um sistema orientado a objetos, uma classe atua como um molde abstrato, enquanto um objeto é uma instância concreta operando de forma ativa na memória.",
          "A classe define os atributos e métodos compartilhados estruturalmente, permitindo a materialização de múltiplas entidades independentes mantendo estados internos próprios."
        ],
        question: "A respeito dessas asserções, assinale a opção correta.",
        options: [
          "A asserção I é proposição falsa, e a II é verdadeira.",
          "As asserções I e II são verdadeiras, mas a II não justifica a I.",
          "A asserção I é proposição verdadeira, e a II é falsa.",
          "As asserções I e II são verdadeiras, e a II é uma justificativa da I."
        ],
        answer: 3,
        feedback: "✓ Resposta correta: D) As asserções I e II são verdadeiras, e a II é uma justificativa da I.\n\nPor que está certa:\nA asserção I está correta pois a classe é de fato um molde abstrato e o objeto é uma instância concreta em memória. A asserção II justifica a I porque explica o mecanismo que permite isso: a classe define estrutura compartilhada, mas cada objeto mantém seus próprios estados internos — o que explica como múltiplos carros podem coexistir com características independentes."
      },

      // ── Questão 2 ──────────────────────────────────────────────────────────
      {
        texto: "O desenvolvimento de sistemas de software pode ser orientado por diferentes formas de pensar e estruturar soluções, conhecidas como paradigmas de programação. A Programação Orientada a Objetos (POO) consolidou-se como um dos principais paradigmas modernos na área de tecnologia e engenharia de software. Em vez de focar primariamente na lógica algorítmica estrita e na decomposição de funções, a POO propõe que o software seja projetado como uma coleção de entidades que interagem entre si, buscando uma modelagem mais próxima da forma como compreendemos e organizamos o mundo real.\n\nAvalie as afirmações a seguir.",
        assertions: [
          "O paradigma orientado a objetos estrutura o sistema aproximando-o do mundo real, utilizando abstrações que agrupam características (estados/atributos) e comportamentos (ações/métodos) em unidades fundamentais chamadas de objetos.",
          "Uma premissa essencial desse paradigma é o isolamento completo e inflexível de código, o que na prática desencoraja o reuso de estruturas e exige que cada entidade do programa seja construída integralmente do zero.",
          "A construção de sistemas sob o paradigma da orientação a objetos é baseada na colaboração entre diferentes entidades, onde a dinâmica do programa ocorre principalmente por meio da troca de mensagens ou invocação de métodos entre os objetos.",
          "O foco central da abordagem orientada a objetos é a resolução de problemas através da quebra do sistema em um fluxo linear de procedimentos matemáticos, priorizando funções que não mantêm nenhum tipo de estado interno."
        ],
        question: "É correto o que se afirma em:",
        options: [
          "II e IV, apenas.",
          "I, III e IV, apenas.",
          "I e III, apenas.",
          "I, II e III, apenas."
        ],
        answer: 2,
        feedback: "✓ Resposta correta: C) I e III, apenas.\n\nPor que está certa:\nI está correta — a POO agrupa atributos e comportamentos em objetos que modelam o mundo real. III está correta — os objetos colaboram por meio de troca de mensagens/invocação de métodos. II está errada pois a POO incentiva o reuso (herança, composição). IV está errada pois descreve o paradigma procedural/funcional, não a POO."
      },

      // ── Questão 3 ──────────────────────────────────────────────────────────
      {
        texto: "Um engenheiro de software de um banco digital precisa garantir que o atributo \"saldo\" da classe ContaCorrente não possa ser alterado de forma irrestrita por outras classes do sistema, prevenindo fraudes ou falhas lógicas que deixem o saldo negativo sem validação prévia. O pilar do encapsulamento defende o isolamento estrito de dados sensíveis. Modificadores de acesso como private, protected e public controlam a visibilidade de membros da classe. O acesso seguro e validado ocorre primordialmente por meio de métodos padronizados de leitura e escrita.",
        question: "Analise a necessidade arquitetural de segurança da conta bancária descrita e assinale a alternativa que apresenta a solução técnica correta em linguagem Java.",
        options: [
          "O escopo protected garante que componentes externos não modifiquem o saldo atual.",
          "O uso de métodos construtores estáticos anula a necessidade de regras de saques.",
          "O encapsulamento completo da conta exige que a declaração da classe seja private.",
          "O atributo saldo deve ser private e modificado unicamente por métodos controlados."
        ],
        answer: 3,
        feedback: "✓ Resposta correta: D) O atributo saldo deve ser private e modificado unicamente por métodos controlados.\n\nPor que está certa:\nO encapsulamento correto exige que atributos sensíveis sejam declarados como private, impedindo acesso direto externo. O acesso deve ocorrer apenas por meio de métodos (getters/setters) que podem conter validações — como impedir saldo negativo. As outras alternativas estão erradas: protected ainda permite acesso por subclasses e classes do mesmo pacote; classes não podem ser private (exceto internas); construtores estáticos não resolvem o problema de validação de acesso."
      },

      // ── Questão 4 ──────────────────────────────────────────────────────────
      {
        texto: "O reuso de software é um dos maiores benefícios práticos apontados na adoção da Programação Orientada a Objetos (POO). Na linguagem Java, essa característica é promovida de forma estrutural por meio de mecanismos relacionais entre classes, destacando-se a herança. Ao permitir que novas classes sejam construídas estendendo os atributos e métodos de classes previamente testadas e implementadas, a herança minimiza a duplicação de código, reduz a probabilidade de introdução de erros e simplifica significativamente a manutenção e a expansão arquitetural do sistema.",
        miniEnunciado: "Considere o trecho de código Java a seguir, que ilustra um modelo simplificado de folha de pagamento para funcionários de uma empresa:",
        code:
`public class Funcionario {
  protected String nome;
  protected double salarioBase;
  public Funcionario(String nome, double salarioBase) {
    this.nome = nome;
    this.salarioBase = salarioBase;
  }
  public double calcularPagamento() { return salarioBase; }
}

public class Gerente extends Funcionario {
  private double bonusProdutividade;
  public Gerente(String nome, double salarioBase, double bonusProdutividade) {
    super(nome, salarioBase);
    this.bonusProdutividade = bonusProdutividade;
  }
  @Override
  public double calcularPagamento() {
    return super.calcularPagamento() + bonusProdutividade;
  }
}`,
        assertions: [
          "A palavra-chave extends estabelece uma relação de herança, permitindo que a classe Gerente reaproveite estruturalmente os atributos nome e salarioBase criados na classe Funcionario, evitando a duplicação de declaração de variáveis.",
          "A chamada super.calcularPagamento() dentro do método sobrescrito na classe Gerente é um exemplo de reuso de comportamento, pois a subclasse aproveita a lógica de cálculo já validada na superclasse e apenas adiciona a sua regra específica (o bônus).",
          "O paradigma da orientação a objetos determina que a herança é a única maneira aceitável e eficiente de se obter reuso de código em Java, substituindo totalmente outras abordagens modulares, como a composição de objetos."
        ],
        question: "É correto o que se afirma em:",
        options: [
          "I, apenas.",
          "II e III, apenas.",
          "I e II, apenas.",
          "I, II e III."
        ],
        answer: 2,
        feedback: "✓ Resposta correta: C) I e II, apenas.\n\nPor que está certa:\nI está correta — extends estabelece herança e Gerente reutiliza os atributos de Funcionario. II está correta — super.calcularPagamento() reutiliza a lógica da superclasse. III está errada — a herança não é a única forma de reuso; a composição de objetos é uma alternativa igualmente válida e muitas vezes preferida (princípio \"Prefira composição à herança\")."
      },

      // ── Questão 5 ──────────────────────────────────────────────────────────
      {
        texto: "Uma montadora de veículos precisa criar um catálogo digital de sua frota. O analista de sistemas responsável decidiu modelar os diferentes tipos de transporte utilizando uma taxonomia baseada em herança, garantindo o reuso de propriedades gerais para automóveis, caminhões e motocicletas. A reutilização de código é uma das vantagens centrais da Programação Orientada a Objetos. Em linguagens como Java, esse recurso pode ser implementado por meio da herança.",
        miniEnunciado: "Considere o seguinte código base criado pelo analista:",
        code:
`public class Veiculo {
  private String marca;
  public Veiculo(String marca) { this.marca = marca; }
}

public class Carro extends Veiculo {
  public Carro(String marca) { super(marca); }
}`,
        assertions: [
          "A classe Carro herda de forma direta atributos e métodos declarados na classe Veiculo.",
          "A palavra-chave extends é utilizada nativamente em Java para indicar a herança.",
          "A classe Veiculo não pode ser instanciada diretamente por agir como uma Interface."
        ],
        question: "É correto o que se afirma em:",
        options: [
          "I, apenas.",
          "II, apenas.",
          "I e II apenas.",
          "I, II e III."
        ],
        answer: 2,
        feedback: "✓ Resposta correta: C) I e II apenas.\n\nPor que está certa:\nI está correta — Carro herda atributos e métodos de Veiculo via extends. II está correta — extends é a palavra-chave Java para herança. III está errada — Veiculo é uma classe concreta comum, não uma interface. Ela PODE ser instanciada diretamente com new Veiculo(\"Toyota\"). Para não poder ser instanciada, precisaria ser declarada como abstract ou interface."
      },

      // ── Questão 6 ──────────────────────────────────────────────────────────
      {
        texto: "A Programação Orientada a Objetos (POO) baseia-se na criação de modelos que representam elementos do mundo real ou do domínio do problema computacional. Para que esse mapeamento ocorra de forma eficiente, a POO apoia-se fortemente nos conceitos de classes e objetos, que constituem a base estrutural e comportamental da maioria das aplicações modernas desenvolvidas sob esse paradigma.\n\nConsiderando as informações apresentadas, avalie as asserções a seguir e a relação proposta entre elas.",
        assertions: [
          "Em um sistema orientado a objetos, uma classe atua como um molde ou especificação abstrata, enquanto um objeto é uma instância concreta gerada a partir dessa especificação, operando de forma ativa na memória do computador durante a execução do programa.",
          "[PORQUE] A classe define os atributos (estado) e os métodos (comportamento) que serão compartilhados de forma estrutural, permitindo a materialização de múltiplas entidades independentes que mantêm seus próprios estados internos com base no mesmo modelo."
        ],
        question: "A respeito dessas asserções, assinale a opção correta.",
        options: [
          "As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta da I.",
          "A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.",
          "As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I.",
          "As asserções I e II são proposições falsas."
        ],
        answer: 2,
        feedback: "✓ Resposta correta: C) As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I.\n\nPor que está certa:\nA primeira asserção é verdadeira — classe é um molde abstrato e objeto é uma instância concreta em memória. A segunda asserção também é verdadeira e justifica a primeira: é exatamente porque a classe define atributos e métodos compartilhados estruturalmente que múltiplos objetos independentes (cada um com seu estado próprio) podem ser criados a partir do mesmo modelo."
      },

      // ── Questão 7 ──────────────────────────────────────────────────────────
      {
        texto: "Um desenvolvedor sênior foi encarregado de refatorar o sistema de folha de pagamento de uma empresa, visando reduzir redundâncias. Ele optou por aplicar conceitos avançados de Orientação a Objetos para otimizar o código legado e facilitar futuras integrações. O reuso de software é um dos maiores benefícios práticos na adoção da POO. Na linguagem Java, essa característica é promovida de forma estrutural por meio de mecanismos relacionais entre classes, destacando-se a herança, que minimiza a duplicação de código.",
        miniEnunciado: "Analise o trecho a seguir:",
        code:
`public class Funcionario {
  protected String nome;
  protected double salarioBase;
  public Funcionario(String nome, double salarioBase) {
    this.nome = nome;
    this.salarioBase = salarioBase;
  }
  public double calcularPagamento() { return salarioBase; }
}

public class Gerente extends Funcionario {
  private double bonusProdutividade;
  public Gerente(String nome, double salarioBase, double bonusProdutividade) {
    super(nome, salarioBase);
    this.bonusProdutividade = bonusProdutividade;
  }
  @Override
  public double calcularPagamento() {
    return super.calcularPagamento() + bonusProdutividade;
  }
}`,
        assertions: [
          "A palavra-chave extends estabelece uma relação de herança, permitindo que a classe Gerente reaproveite estruturalmente os atributos criados na classe Funcionario.",
          "A chamada super.calcularPagamento() na classe Gerente é um exemplo de reuso de comportamento, aproveitando a lógica de cálculo já validada na superclasse.",
          "O paradigma determina que a herança é a única maneira aceitável e eficiente de se obter reuso de código em Java, substituindo outras abordagens modulares."
        ],
        question: "Escolha a alternativa correta.",
        options: [
          "Apenas a afirmação I está correta.",
          "Apenas as afirmações II e III estão corretas.",
          "Apenas as afirmações I e II estão corretas.",
          "As afirmações I, II e III estão corretas."
        ],
        answer: 2,
        feedback: "✓ Resposta correta: C) Apenas as afirmações I e II estão corretas.\n\nPor que está certa:\nI está correta — extends cria herança e Gerente reutiliza os atributos de Funcionario. II está correta — super.calcularPagamento() é reuso de comportamento da superclasse. III está errada — a herança não é a única forma de reuso em Java; composição de objetos é outra abordagem igualmente válida e amplamente utilizada."
      },

      // ── Questão 8 ──────────────────────────────────────────────────────────
      {
        texto: "O encapsulamento é um dos pilares da Programação Orientada a Objetos, permitindo que os detalhes internos de implementação de um objeto sejam ocultados do mundo externo. Na linguagem Java, esse controle de visibilidade é implementado por meio dos modificadores de acesso, palavras-chave que definem o nível de acessibilidade de classes, atributos, métodos e construtores. A escolha correta desses modificadores é fundamental para garantir a segurança, a coesão e o acoplamento adequado na arquitetura do software.\n\nA partir das informações apresentadas e dos conceitos de modificadores de acesso na linguagem Java, avalie as afirmações a seguir.",
        assertions: [
          "O modificador public representa o nível mais permissivo de visibilidade, permitindo que a classe ou o membro seja acessado a partir de qualquer outra classe, independentemente do pacote em que se encontre.",
          "O modificador private aplica a restrição máxima de visibilidade, garantindo que o membro declarado possa ser acessado ou modificado unicamente dentro do escopo da própria classe onde foi criado.",
          "O modificador protected estabelece um nível de acesso intermediário, permitindo que a visibilidade ocorra para todas as classes pertencentes ao mesmo pacote e, também, para classes filhas (subclasses) localizadas em pacotes distintos.",
          "A ausência de uma palavra-chave de modificador caracteriza o acesso default (padrão ou de pacote), que possui as mesmas regras de visibilidade do protected, estendendo o acesso para subclasses em qualquer lugar do projeto."
        ],
        question: "É correto o que se afirma em:",
        options: [
          "III e IV, apenas.",
          "I, II e III, apenas.",
          "I e II, apenas.",
          "I, III e IV, apenas."
        ],
        answer: 1,
        feedback: "✓ Resposta correta: B) I, II e III, apenas.\n\nPor que está certa:\nI está correta — public é o modificador mais permissivo, acessível de qualquer lugar. II está correta — private restringe o acesso apenas à própria classe. III está correta — protected permite acesso no mesmo pacote e em subclasses de outros pacotes. IV está errada — o acesso default (sem modificador) NÃO é igual ao protected; ele permite acesso apenas dentro do mesmo pacote, mas NÃO estende para subclasses em pacotes diferentes."
      },

      // ── Questão 9 ──────────────────────────────────────────────────────────
      {
        texto: "No desenvolvimento de um gateway de pagamentos que suportará múltiplas operadoras de cartão de crédito, a equipe de arquitetura exige que haja um alto nível de desacoplamento. Cada operadora terá sua própria implementação técnica, mas o núcleo do sistema deve se comunicar com elas de forma padronizada. No desenvolvimento de sistemas orientados a objetos, abstrações são amplamente utilizadas para definir contratos de comportamento estritos entre diferentes componentes de software, sem expor os detalhes lógicos de como as operações são realizadas internamente na memória.",
        question: "Considerando a necessidade de padronização arquitetural descrita para o gateway de pagamentos, assinale a alternativa que define corretamente o papel estrutural de uma Interface na linguagem Java.",
        options: [
          "Forçar a implementação exclusiva de múltiplos construtores padronizados.",
          "Instanciar objetos de forma direta para contornar restrições de memória.",
          "Substituir totalmente o uso de classes abstratas no paradigma de objetos.",
          "Estabelecer assinaturas de métodos que as classes concretas implementarão."
        ],
        answer: 3,
        feedback: "✓ Resposta correta: D) Estabelecer assinaturas de métodos que as classes concretas implementarão.\n\nPor que está certa:\nUma interface em Java define um contrato — ela declara as assinaturas dos métodos (sem implementação) que as classes concretas devem implementar. Isso garante padronização e desacoplamento: o núcleo do gateway se comunica com a interface, sem precisar conhecer a implementação específica de cada operadora. As outras alternativas estão erradas: interfaces não podem ter construtores, não instanciam objetos e não substituem totalmente classes abstratas."
      },

      // ── Questão 10 ─────────────────────────────────────────────────────────
      {
        texto: "A essência da Programação Orientada a Objetos reside na distinção fundamental e na relação intrínseca entre classes e objetos. Uma classe pode ser compreendida como uma planta arquitetônica ou um gabarito estrutural que define os dados e as operações pertinentes a uma entidade. Quando um programa entra em execução, essa planta é utilizada para construir objetos na memória, sendo que cada objeto atua como uma entidade independente, armazenando seu próprio conjunto de dados (estado) que pode ser manipulado pelos métodos definidos na classe.",
        miniEnunciado: "Considere o seguinte código Java, que simula as operações de uma conta bancária:",
        code:
`public class ContaBancaria {
  private String titular;
  private double saldo;
  public ContaBancaria(String titular, double saldoInicial) {
    this.titular = titular;
    this.saldo = saldoInicial;
  }
  public void depositar(double valor) { this.saldo += valor; }
  public void exibirInformacoes() {
    System.out.println("Titular: " + this.titular + " | Saldo: " + this.saldo);
  }
  public static void main(String[] args) {
    ContaBancaria minhaConta = new ContaBancaria("Maria", 100.0);
    minhaConta.depositar(50.0);
    minhaConta.exibirInformacoes();
  }
}`,
        assertions: [
          "A execução do método main resultará na impressão da mensagem \"Titular: Maria | Saldo: 150.0\" no console, evidenciando a alteração do estado interno do objeto após a invocação do método depositar.",
          "[PORQUE] A instrução new ContaBancaria(\"Maria\", 100.0) instanciou um objeto alocando em memória seus atributos próprios de forma encapsulada, o que permitiu que o método depositar(50.0) acessasse e somasse o valor fornecido estritamente ao saldo pertencente a essa instância específica."
        ],
        question: "A respeito dessas asserções, assinale a opção correta.",
        options: [
          "As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta da I.",
          "A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.",
          "As asserções I e II são proposições falsas.",
          "As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I."
        ],
        answer: 3,
        feedback: "✓ Resposta correta: D) As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I.\n\nPor que está certa:\nA primeira asserção é verdadeira — o código inicia com saldo 100.0, deposita 50.0 e imprime 150.0. A segunda também é verdadeira e justifica a primeira: o new instancia o objeto com seus atributos encapsulados em memória, e é exatamente por isso que depositar() opera sobre o saldo daquela instância específica, resultando na saída correta."
      },

      // ── Questão 11 ─────────────────────────────────────────────────────────
      {
        texto: "Em um sistema de gestão escolar orientado a objetos, a equipe de desenvolvimento precisa modelar diferentes tipos de usuários — professores, alunos e coordenadores — que compartilham comportamentos comuns, mas também possuem responsabilidades específicas. Para isso, o arquiteto de software propõe o uso de herança como mecanismo principal de estruturação das classes. Herança é um mecanismo fundamental da POO que permite que uma classe (subclasse) adquira atributos e métodos de outra classe (superclasse), promovendo reuso e possibilitando polimorfismo no sistema.\n\nNo que se refere à herança na Programação Orientada a Objetos, avalie as afirmativas a seguir:",
        assertions: [
          "Herança pode ser utilizada como base para a implementação de polimorfismo.",
          "Herança permite reutilização de código entre classes relacionadas.",
          "Todo método herdado é obrigatoriamente sobrescrito na subclasse."
        ],
        question: "Assinale a opção correta.",
        options: [
          "II, apenas.",
          "I e II, apenas.",
          "I, apenas.",
          "I, II e III."
        ],
        answer: 1,
        feedback: "✓ Resposta correta: B) I e II, apenas.\n\nPor que está certa:\nI está correta — a herança é base para o polimorfismo, pois uma subclasse pode sobrescrever métodos da superclasse e objetos podem ser referenciados pelo tipo da superclasse. II está correta — herança permite que subclasses reutilizem código da superclasse. III está errada — a subclasse NÃO é obrigada a sobrescrever métodos herdados; ela pode utilizá-los diretamente sem nenhuma alteração."
      },

      // ── Questão 12 ─────────────────────────────────────────────────────────
      {
        texto: "No desenvolvimento de um sistema de cadastro de clientes para uma clínica veterinária, a equipe de TI precisou modelar a entidade Animal de forma que seus dados internos não pudessem ser acessados ou alterados diretamente por outras partes do sistema. Para isso, o desenvolvedor adotou uma abordagem que oculta o estado interno do objeto e fornece métodos específicos para leitura e escrita controlada dos dados.",
        miniEnunciado: "Considere o seguinte código em Java:",
        code:
`public class Animal {
  private String nome;
  public String getNome() { return nome; }
  public void setNome(String nome) { this.nome = nome; }
}`,
        question: "Considerando os princípios da Programação Orientada a Objetos e a forma como os atributos são manipulados na classe apresentada, o código exemplifica principalmente o conceito de:",
        options: [
          "Polimorfismo",
          "Herança",
          "Abstração",
          "Encapsulamento"
        ],
        answer: 3,
        feedback: "✓ Resposta correta: D) Encapsulamento.\n\nPor que está certa:\nO código declara o atributo nome como private (ocultando o estado interno) e fornece métodos públicos getNome() e setNome() para controlar o acesso — isso é encapsulamento. Polimorfismo envolve múltiplas formas de um método; herança envolve extends/relação entre classes; abstração envolve ocultar complexidade por meio de classes abstratas/interfaces."
      },

      // ── Questão 13 ─────────────────────────────────────────────────────────
      {
        texto: "Uma empresa de locação de veículos está desenvolvendo um sistema orientado a objetos para gerenciar sua frota. O analista de sistemas criou uma hierarquia de classes para representar os diferentes tipos de veículos disponíveis para aluguel, utilizando herança para reaproveitar características comuns.",
        miniEnunciado: "Considere o seguinte código:",
        code:
`public class Veiculo {
  private String marca;
  public Veiculo(String marca) { this.marca = marca; }
}

public class Carro extends Veiculo {
  public Carro(String marca) { super(marca); }
}`,
        assertions: [
          "A classe Carro herda atributos e métodos da classe Veiculo.",
          "A palavra-chave extends é utilizada em Java para indicar herança.",
          "A classe Veiculo não pode ser instanciada diretamente."
        ],
        question: "No que se refere ao código exibido acima, é correto o que se afirma em:",
        options: [
          "II e III apenas",
          "I apenas",
          "I e II apenas",
          "I, II e III"
        ],
        answer: 2,
        feedback: "✓ Resposta correta: C) I e II apenas.\n\nPor que está certa:\nI está correta — Carro herda de Veiculo via extends, obtendo seus atributos e métodos. II está correta — extends é a palavra-chave Java para declarar herança. III está errada — Veiculo é uma classe concreta comum e PODE ser instanciada diretamente (ex: new Veiculo(\"Ford\")). Para não poder ser instanciada, precisaria ser declarada como abstract."
      },

      // ── Questão 14 ─────────────────────────────────────────────────────────
      {
        texto: "Uma plataforma de streaming de áudio deseja implementar um módulo de reprodução que suporte diferentes fontes de som — como cachorros, gatos e pássaros — em uma seção de sons da natureza. O desenvolvedor percebeu que, embora todos os animais emitam sons, cada espécie possui sua própria forma de fazê-lo. Para tratar esses animais de maneira uniforme no código, ele utilizou uma referência do tipo base Animal.",
        miniEnunciado: "Considere o seguinte trecho de código:",
        code:
`Animal a;
a = new Cachorro();
a.emitirSom();
a = new Gato();
a.emitirSom();`,
        question: "O código apresentado ilustra um exemplo do conceito de programação orientada a objetos denominado:",
        options: [
          "Herança.",
          "Abstração.",
          "Encapsulamento.",
          "Polimorfismo."
        ],
        answer: 3,
        feedback: "✓ Resposta correta: D) Polimorfismo.\n\nPor que está certa:\nO polimorfismo permite que uma referência do tipo Animal aponte para objetos de tipos diferentes (Cachorro, Gato) e que o método emitirSom() se comporte de forma diferente para cada tipo em tempo de execução. É o polimorfismo de subtipo (ou polimorfismo de inclusão), onde a mesma chamada de método produz resultados distintos dependendo do objeto real referenciado."
      },

      // ── Questão 15 ─────────────────────────────────────────────────────────
      {
        texto: "Uma empresa de tecnologia financeira está desenvolvendo um sistema de processamento de pagamentos que precisa integrar múltiplos métodos — cartão de crédito, PIX, boleto e carteiras digitais. O arquiteto de software propôs o uso de um mecanismo da Programação Orientada a Objetos que permita definir um contrato comum para todos os métodos de pagamento, garantindo que cada implementação forneça os comportamentos esperados pelo sistema, sem que o núcleo do processamento precise conhecer os detalhes de cada meio de pagamento. Em Java, o conceito de interface é fundamental para o design de sistemas desacoplados e extensíveis. Uma interface define um contrato que as classes concretas devem cumprir, sem especificar como as operações serão realizadas internamente.",
        question: "Em Java, uma interface é utilizada para:",
        options: [
          "criar objetos diretamente",
          "definir atributos privados compartilhados entre classes",
          "substituir completamente as classes abstratas",
          "definir métodos que devem ser implementados por outras classes"
        ],
        answer: 3,
        feedback: "✓ Resposta correta: D) definir métodos que devem ser implementados por outras classes.\n\nPor que está certa:\nUma interface em Java define assinaturas de métodos (contrato) que as classes que a implementam são obrigadas a fornecer implementação concreta. Interfaces não podem criar objetos diretamente (não têm construtores), não definem atributos privados de instância, e não substituem completamente classes abstratas — ambos coexistem com propósitos complementares."
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
const QUIZ_ID = 'questoes_poo_revisao';
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
    btn.style.bottom = '90px'; // ← adiciona essa linha
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