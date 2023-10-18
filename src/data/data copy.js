// JavaScript
const quiz = [
    
    //JAVASCRIPT
    
    [
        {id: 1, perg: "Qual é o operador lógico utilizado para negar uma expressão em JavaScript?", alts: [
            {certo: "!"},
            "not",
            "&&",
            "!!",
            "!"
            ]
        },
        {id: 2, perg: "Qual é o operador utilizado para comparar igualdade de valor e tipo em JavaScript?", alts: [
            {certo: "==="},
            "==",
            "!=",
            "===",
            "<>"
            ]
        },
        {id: 3, perg: "Qual é o método utilizado para converter uma string em um número em JavaScript?", alts: [
            {certo: "parseInt"},
            "parseFloat",
            "parseInt",
            "convert",
            "toNumber"
            ]
        },
        {id: 4, perg: "Qual método altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos?", alts: [
            {certo: "splice"},
            "splice",
            "deleteElement",
            "removeElement",
            "pop"
            ]
        },
        {id: 5, perg: `Qual é o resultado da expressão 2 + "2" em JavaScript?`, alts: [
            {certo: "22"},
            "4",
            "22",
            "”4”",
            `"2 + 2"`
            ]
        },
        {id: 6, perg: "O que é hoisting em JavaScript?", alts: [
            {certo: "Processo de elevar uma variável ou função para o topo do escopo em que foi declarada"},
            "O processo de mover um elemento HTML para cima na hierarquia do DOM",
            "Processo de elevar uma variável ou função para o topo do escopo em que foi declarada",
            "Hoisting é o processo de executar o código JavaScript em diferentes ambientes",
            "A capacidade de executar código JavaScript em diferentes ambientes",
            ]
        },
    ],

    //REACT

    [
        {id: 1, perg: "O que é React?", alts: [
            {certo: "Um framework javascript para desenvolvimento web, para o desenvolvimento de apps e sites"},
            "Uma linguagem de programação",
            "Uma biblioteca JavaScript para construção de interfaces de usuário",
            "Um framework javascript para desenvolvimento web, para o desenvolvimento de apps e sites",
            "É um banco de dados relacional"
            ]
        },
        {id: 2, perg: "Qual é o hook do React usado para adicionar estado a um componente funcional?", alts: [
            {certo: "useState"},
            "useContext",
            "useState",
            "useEffect",
            "useForm"
            ]
        },
        {id: 3, perg: "Qual é a sintaxe correta para criar um novo componente React?", alts: [
            {certo: "Todas as opções estão corretas"},
            "class MyComponent extends React.Component {}",
            "onst MyComponent = () => {}",
            "function MyComponent() {}",
            "Todas as opções estão corretas"
            ]
        },
        {id: 4, perg: "O que é JSX em React?", alts: [
            {certo: "Uma linguagem de marcação similar ao HTML utilizada para definir a estrutura do componente"},
            "Um formato de arquivo específico para componentes React",
            "Uma linguagem de programação para escrever lógica de negócio em React",
            "Uma linguagem de marcação similar ao HTML utilizada para definir a estrutura do componente",
            "Nenhuma das opções acima"
            ]
        },
        {id: 5, perg: "Qual é o ciclo de vida de um componente React? ", alts: [
            {certo: "Montagem, Atualização e Desmontagem"},
            "Construção, Renderização e Atualização",
            "Inicialização, Execução e Finalização",
            "Criação, Fatoração, Execução",
            "Montagem, Atualização e Desmontagem"
            ]
        },
        {id: 6, perg: "Qual é a forma correta de definir um estado inicial em um componente React?", alts: [
            {certo: "const { value, setValue } = useState(10);"},
            "this.state = { value: 10 };",
            "state = { value: 10 };",
            "const [value, setValue] = useState(10);",
            "const { value, setValue } = useState(10);"
            ]
        },
    ],

    //HTML

    [
        {id: 1, perg: "O que significa a sigla HTML?", alts: [
            {certo: "HyperText Markup Language"},
            "HyperText Markup Languag",
            "HyperText Management Language",
            "Hypertext Transfer Markup Language",
            "Hyperlink Text Manipulation Language"
            ]
        },
        {id: 2, perg: "Qual é a tag HTML usada para criar uma lista ordenada?", alts: [
            {certo: "<ol>"},
            "<ul>",
            "<il>",
            "<ol>",
            "<list>"
            ]
        },
        {id: 3, perg: "Qual atributo HTML é usado para definir o texto alternativo de uma imagem?", alts: [
            {certo: "alt"},
            "alt",
            "src",
            "href",
            "text",
            ]
        },
        {id: 4, perg: "Qual elemento HTML é usado para criar uma lista não ordenada em um documento web?", alts: [
            {certo: "<ul>"},
            "<ol>",
            "<li>",
            "<ul>",
            "<dl>"
            ]
        },
        {id: 5, perg: "Qual elemento HTML é usado para criar um link para uma folha de estilo externa?", alts: [
            {certo: "<link>"},
            "<style>",
            "<a>",
            "<span>",
            "<link>"
            ]
        },
        {id: 6, perg: "Qual é o elemento HTML usado para criar uma lista de itens com marcadores personalizados?", alts: [
            {certo: "<li>"},
            "<li>",
            "<ul>",
            "<ol>",
            "<customlist>"
            ]
        },
    ],

    //CSS

    [
        {id: 1, perg: "Qual propriedade CSS é usada para definir a margem interna de um elemento?", alts: [
            {certo: "padding"},
            "margin",
            "border",
            "padding",
            "margin-inner"
            ]
        },
        {id: 2, perg: "Qual propriedade CSS é usada para alterar o tamanho de uma fonte em um elemento HTML?", alts: [
            {certo: "font-size"},
            "text-size",
            "size",
            "text-font",
            "font-size"
            ]
        }, 
        {id: 3, perg: "Qual propriedade CSS é usada para definir a altura de um elemento?", alts: [
            {certo: "height"},
            "height",
            "length",
            ":focus",
            "size"
            
            ]
        },
        {id: 4, perg: "Qual propriedade CSS é usada para definir a imagem de fundo de um elemento HTML?", alts: [
            {certo: "background-image"},
            "background-url",
            "background-source",
            "background-image",
            "bg-image"
            ]
        },
        {id: 5, perg: "Qual propriedade CSS é usada para definir a largura máxima que um elemento pode atingir, impedindo-o de se estender além dessa largura?", alts: [
            {certo: "max-width"},
            "max-width",
            "max-height",
            "min-width",
            "width-max"
            ]
        },
        {id: 6, perg: "Qual é a propriedade CSS que é usada para criar um gradiente linear em um elemento HTML?", alts: [
            {certo: "background-image"},
            "gradient-color",
            "linear-background",
            "background-gradient",
            "background-image"
            ]
        },
    ]

]

export default quiz;
