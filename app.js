<DOCTYPE html>

<html lang="pt-br">

<head>

<meta charset="UTF-8">

<title> curso da Alura  </title>

<style> 

p{text-align: center};

</style>

</head>

<body>

<p> <h1><strong> <background # CCCCCC; color: red > Primeiro curso de programação!</strong> </h1>


<p>  Projeto final com base no curso <u> "Javascript e HTML: desenvolva um jogo e pratique lógica de programação!" </font> </u> 

<body text="green">
<body bgcolor="pink">

<ul>
<p> <li> <font color="#000099"> Que se registre que este trabalho tem como objetivo, expor uma parte dos conteúdos vistos no curso!  </font color="#000099"> ( Afinal, este é um dos modeos de se aprender com mais eficácia!) </li> 
</ul> </p>

<p><button>Clique aqui, agora, por favor!</button></p>

</body>

<script>

document.write("<br>");

    function tchau() {

        alert( nome + ", obrigado por chegar até o fim da minha compilação. Agora, só um textinho final!!!!!")
    }

    var button = document.querySelector("button");
    button.onclick = tchau;


function pularLinha(){document.write("<br>")}
function mostra(frase){document.write(frase);pularLinha()}


var nome = prompt("Qual o seu nome, por favor?");
alert (nome + " , este estudo se refere  a uma compilação do que entendi no curso de tecnologia da Alura. Agradeço por cooperar comigo com estes novos conhecimentos que estou adquirindo!");

alert (nome + ", vamos começar a contagem...");

var valorInicial= 2 

while (valorInicial >= 0) { 
      alert (valorInicial);
      valorInicial--;
  }


function sorteia() {
        return numeroPensado = Math.round(Math.random() * 100);
    }

    alert ("Vamos nos aquecer com um jogo de adivinhação!");
    
var numeroPensado = sorteia();
var chute = parseInt(prompt(nome + ", tente um número aleatório."));

alert (nome + " será que pensou o mesmo número que eu?");

if (chute == numeroPensado) {
    alert ("Parabéns, " + nome +"! Você acertou! O número pensado foi "+ chute+"!");
} else { 
    alert ("O número pensado foi " + numeroPensado +"!");
}

if (chute > numeroPensado) {
    alert ("O seu número " + chute + " é maior do que o pensado por mim!");
} else {
    alert ("O seu número " + chute + " é menor que o pensado por mim!");
}

alert ("Quer saber a média das idades dos estudantes? Ponha o número de turmas que quer saber e a idade respectiva e saberá o resultado. Lembre-se: terá que obrigatoriamente pôr idade na mesma quantidade de turmas que você inserir.");

    var totalTurmas = parseInt(prompt("digite a quantidade de turmas que quer"));

    var totalIdades = 0;

    var numero = 1;
    while(numero <= totalTurmas) {

    var idade = parseInt(prompt("Informe as idades de cada turma"));
    totalIdades = totalIdades + idade;
    numero++;

}
    var mediaDasIdades = totalIdades/totalTurmas
    alert ("A média das idades dos estudantes pedido por você é " + mediaDasIdades);
    

alert (nome + ", temos, agora, uma simulação de login(estudante) e senha(colégio). Você tem 3 tentativas! Vamos lá?");

var loginCadastrado = "estudante" 
var senhaCadastrsda = "colégio"

var tentMax = 3;
var tentMin = 1;

     while (tentMin <= tentMax) { 
         var loginInform = prompt ("Informe o login do usúario");
         var senhaInform = prompt ("Digite a senha");

         if (loginCadastrado == loginInform && senhaCadastrsda == senhaInform) {
             alert ( nome + ", bem vindo");
             tentMin = tentMax;
        } else {
         if (tentMin == 3) {
             alert ( nome+ ", seu número de tentativas maximas foi atingido");
        } else {
             alert (nome + ", sua senha está incorreta");
        }
        }
         tentMin = tentMin + 1;
    }

var anoAtual= 2022
var anoFuturo = 2037
var gastoPorDia= (5.50 * 2)
var gastoPorMês = ( gastoPorDia * 22)
var mediaDoAluno = (8.33 + 7.44 + 5.52 + 9.72 + 4.3 + 3.4 + 7.65 + 6.4 + 3.22+ 3.3)/10
var ConsumoDeGasolina = (480/40)
var numeroDeTurmasAtéHoje = 8 * (2022-2003)
var chute = parseInt(prompt("Digite o ano em que Aristóteles nasceu"));
var AnoDoNascimentodeAristóteles = 384;

alert (nome + ", seria este mesmo?"); 

if (chute == AnoDoNascimentodeAristóteles) {
    alert ("Parabéns, " + nome +"! Você acertou!");
} else { 
    alert ("Aristóteles nasceu em  " + AnoDoNascimentodeAristóteles + " a.C!");
}

setTimeout(function(){
                alert(nome + ", eu acredito que erros ou acertos são apenas parte do processo de construção do conhecimento. Por isto, honra-me por você estar cooperando comigo!")
                alert(nome + ", que haja paz em sua existência! ");
        }, 300); 

var quantosDiasOalunoDeveFrequentar = 150;
var tentativas = 1;
while(tentativas <= 3) {

var chute = parseInt(prompt(nome + ", tente adivinhar quantos dias você precisa ir à escola??!"));
if(chute > quantosDiasOalunoDeveFrequentar){alert(nome+ ", chute alto!")}
if(chute < quantosDiasOalunoDeveFrequentar){alert (nome + ", chute baixo!")}
if (chute == 152) { alert(nome + ", quase acertou... Só um pouquinho abaixo!")}
if ( chute == 148) { alert(nome + ", quase acertou...um pouquinho acima!")}     
if(quantosDiasOalunoDeveFrequentar == chute ) {

alert (nome+ ", perfeito. São de fato, " + quantosDiasOalunoDeveFrequentar + " dias, em virtude dos 200 letivos obrigátórios");
        break;

    } else { 
     
      
      alert(nome+ ", pense mais!");
    }

    tentativas++;
}


var DiasAusentes = parseInt ( prompt ("Sabendo quantos dias você precisa ir, quantos dias, mais ou menos você faltou?"));
var faltas = (DiasAusentes * 1)

if(faltas>150) {alert("Aff!!!" + nome + ", exceto por algum motivo de força maior, você está em estado de reprovação. Fale com o setor pedagógico!")}
if (faltas>150) alert("Está com algum problema de saúde?Por favor, não deixe de responder sobre o estado de saúde, na próxima etapa");
if(faltas>=130 && faltas <=149){alert( nome, + ", está no limite, não é mesmo?!")}
if(faltas<=129){alert(nome + ", por enquanto, o número está aceitável!")}

function cálculo( altura, peso) { return peso/ (altura * altura);}

var alturaInformada = prompt (nome + ", informe sua altura");
var alturaInformada = parseFloat(alturaInformada.replace(",", "."))
var pesoInformado = prompt ( nome + " , informe seu peso");
var imc = cálculo ( alturaInformada, pesoInformado);
alert ("O seu cálculo estará no texto final; veja lá, por gentileza!")


alert ( nome + ", nas escolas estaduais, as médias variam de 0 a 10, mas, a partir de qual o estudante fica na média nacional?");
var valorInicial = 1 
while (valorInicial <= 10) { if (valorInicial !=1 && valorInicial !=2 && valorInicial !=3 && valorInicial !=4 && valorInicial !=5)
      alert("acertou se pensou nas notas: " + valorInicial);
      valorInicial = valorInicial +1
}

alert (nome + ", um estudante do ensino médio, tem geralmente, 10 disciplinas. Com base nisto, como estão as suas notas?");
var MédiasAcima = parseInt ( prompt (nome + " ,quantas disciplinas estão acima da média?"));
var pontos =  (MédiasAcima * 5) 

if(pontos>30) {alert("Nossa" + nome + ", seu desempenho está muito satisfatório!")}
if(pontos>=6 && pontos <=30){alert(nome + ", conhecimento é construído gradativamente. Continue acreditando em si e estudando!")}
if(pontos<=5){alert(nome + ", saiba que notas podem ser reflexos de outras prioridades em nossa vida. Em hipótese alguma isto denota incapacidade! Reflita!")}


alert ("Vamos ver se tem  idade para dirigir?");
var idadePossívelParaDirigir = parseInt(prompt("Digite sua idade")) 
 
if( idadePossívelParaDirigir >= 18 ){ alert("Sim, pode dirigir!")} 
if (idadePossívelParaDirigir < 18) { alert ("Não pode dirigir!");
    }
if ( idadePossívelParaDirigir >=16 && idadePossívelParaDirigir <18 ){ alert("ah... um detalhe... com estas idades mencionadas de 16 e 17, poderá sim dirigir, se estiver emancipado!"); }


alert ("Agora, vamos à velha tabuada. Obviamente, você sabe do 1 ao 9, mas, e acima disto? Consegue me dizer a tabuada do 14? Veja até o final, e depois, veremos se acertou!");
alert ("Você gosta de esporte? Se sim, sabe que o futebol é uma das modalidades mais populares para os brasileiros. Há copa desde 1930, então, se quiser saber quantas já tivemos desde algum ano específico, preencha o campo posterior");


mostra ("<h2>" + nome+ " </h2> Alegra-me você estar aqui!");
pularLinha();
mostra("<img src= C:\Users\tania\Desktop>");
https://www.facebook.com/edson.lisboa.773>");  
// width=300 height=200>"); 
pularLinha();
//mostra("como pôr imagem salvas na máquina?Funcionou utilizando um link, mas, da outra maneira não deu certo!");
mostra( nome + ", meu nome é <a href=https://www.escavador.com/sobre/4149088/edson-da-silva-rodrigues-lisboa> Edson </a>!"); 
//mostra("Meu email é <a href= nosdeavlis@yahoo.com.br </a>");
mostra ("Sou estudante em fase inicial de programação e o que vocês responderam faz parte dos conhecimentos inciais adquiridos em 16 horas do meu primeiro curso sobre Javascript e HTML na escola de tecnologia Alura.");
mostra ("Se estiver disposto a aprender o passo a passo, como eu estou começando a fazer, ou mesmo desenvolver suas habilidades, clique e conheça a <a href= https://cursos.alura.com.br/formacao-programacao>Alura!</a>");
mostra("Para finalizar o meu primeiro estudo, tentei compilar comandos dados no curso de lógica de programação 1, em que se aprende os primeiros passos da área. Assim, no intuito de assimilar os dados obtidos, direcionei os conhecimentos de 16 horas de aprendizagem para minha área de atuação.");

pularLinha();

mostra("<h4> <i> Feitas as considerações iniciais, vamos apresentar alguns itens para fazer uso dos comandos aprendidos! </i> </h4> <hr>");
//mostra(" As cores não podem ser feitas aqui da mesma forma que fiz no html? Tentei pôr verde e não consegui!");
mostra("Sobre aquele cálculo de peso e altura ," + nome + " , o seu imc é de " +  imc.toFixed(2) + ".");
mostra("Leciono desde 2003 no cólégio, tendo por ano 8 turmas. Assim, já ministrei aulas para" + numeroDeTurmasAtéHoje + " turmas até hoje");  
mostra(" Nas salas em que atuo, os alunos(as) têm em média 15 anos de idade. Portanto, nasceram no ano de " + (anoAtual-15) + "."); 
mostra("Se estivéssemos no ano de 2037, estes alunos teriam " + (anoFuturo- anoAtual + 15) + " anos.");
mostra("Os adolescentes deste colégio em Curitiba gastam " + gastoPorDia + " reais por dia com transporte, e por mês " + gastoPorMês + " reais.");
mostra("Se forem de carro e abastecerem o carro com 40 litros de gasolina, e percorrerem 480 km, o consumo será de" + ConsumoDeGasolina + "Km por litro.");
mostra("Um estudante precisa ir, no mínimo,  " + quantosDiasOalunoDeveFrequentar + " dias. Isto se deve ao fato de haver 200 dias letivos. " );
mostra("Os estudantes possuem em media 10 disciplinas na escola; supondo-se este fato verdadeiro, se um aluno tirar 8,33; 7,44; 5,52; 9,72; 4,3; 3,4; 7,65; 6,4; 3,22 e 2,1, sua média será de " + Math. round (mediaDoAluno) + " pontos, e estará abaixo da proposta oficial.");
pularLinha();

for( var linha = 1; linha <=1; linha++){
    mostra("*****************************************************************************************************************");
}

//var coluna = 1; coluna <=10; coluna++ ( não rodou!)

mostra ("Mostrarei a tabuada do 14 até o 5 apenas: Veja se acertou:");
for(var multiplicador = 1; multiplicador <= 5; multiplicador++) {
mostra( 14 * multiplicador);
}
//mostra("Como eu posso pôr estes números na mesma linha?");

for( var linha = 1; linha <=1; linha++){
    mostra("*************************************************************************************************************");
}

var limite = parseInt(prompt("Digite um ano de seu interesse!"));

var anoCopa = 1930;

while(anoCopa <= limite) {

    mostra("Teve copa em " + anoCopa);
    anoCopa = anoCopa + 4;
}
 mostra( nome + ", esses foram os anos de copa desde " + limite);
 mostra ( "Grato, " +  nome+ ".Até um dia!")
 pularLinha(); 


</script>

<html>





 <p style font-size: 20 px; text-align: center> <em> É isto ! </em> 

</html>
