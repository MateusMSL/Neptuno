
    
        /* Variaveis de Comparação de Dialogo*/
        Conversa_login = "0"; /* check */
        Conversa_cadastro = "0"; /* fazendo */
        Conversa_matricula = "0";
        Conversa_cursos = "0"; /* check */
        Conversa_pagamento = "0"; 
        Conversa_avaliacao = "0";
        dialogos = 0;
        /* Variaveis de Comparação de Dialogo*/

    function getBotResponse(input) {

         /* Projeto Cloteus */


       
        /*----------------------> Arrays de dialogo <----------------------*/


        help =
        /*Fala 0*/ ["Vou te ajudar com isso, não esquece que se quiser falar sobre outra coisa pode cancelar esse atendimento a qualquer hora, só escrever <strong> !cancelar </strong> que eu finalizo pra você <br> <br> Vamo lá!"];
       
        finalizar =
        /*Fala 0*/ ["OK então, mas se precisar de algo pode volte aqui e fale comigo.",
        /*Fala 1*/ "<strong> Finalizando atendimento. </strong> "];


        iniciar =
        /*Fala 0*/ ["Tudo bem. Me fale o que você precisa.",
        /*Fala 1*/ "ah, <strong> já encerrei o atendimento anterior, </strong> portanto se precisar falar sobre outra coisa pode falar, to aqui pra isso"];


        erro =
        /*Fala 0*/ ["Eita.. <strong> não tenho informações sobre isso. 🤖 </strong>",
        /*Fala 1*/ "<br> <br> Tenta digitar outra coisa, vamos ver se eu acho. <br> Eu Opero por sessões, então se nao der certo, digite !cancelar pra reiniciar o atendimento e tente digitar novamente",
        /*Fala 2*/ "Entendi, vou ter que te encaminhar pra um atendente então <br> <br>  Por favor, aguarde um pouco que ele já vai resolver seu problema!"];

        DoTheL =
        /*Fala 0*/ ["please do the L, <strong> faz o L </strong>"];
       
        InfoLogin =

        /*Fala 0*/ ["Problema pra logar né?🕵, vamos ver o que está acontecendo. ",
        /*Fala 1*/ "Você digitou email do cadastro corretamente?, <br> <br> Aqui um exemplo bem comum: <strong> nepturno@gmail.com </strong> ",
        /*Fala 2*/ "Você digitou a senha corretamente? <br> é necessário utilizar: <br> <strong> - letras MAIUSCULAS  </strong> <br> <strong> - numeros (0, 1, 2, 3...) </strong> <br> - <strong> simbolos( !, @, #, $, %, &, *) </strong>",
        /*Fala 3*/ "Talvez seja isso, anota esses passos que te passei e tenta denovo. se nao der certo, qualquer coisa você volta aqui e me avisa que nao deu certo 😉",
        /*Fala 4*/ "Esqueceu seu login? <br> <strong> vamos te redirecionar a um atendente, </strong> ele vai tentar recuperar sua conta!"
    ];


        InfoCadastro =
        /*Fala 0*/ ["Cadastro... 🤔? que coisa hein 😣",
        /*Fala 1*/ "<br><br>Confere se você digitou os dados da seguinte forma: ",
        /*Fala 2*/ "<br><br><strong>Nome: seu primeiro nome </strong>",
        /*Fala 3*/ "<br><br><strong>Sobrenome: seu sobrenome </strong>",
        /*Fala 4*/ "<br><br><strong>Email: confira se seu email se parece com: nepturno@gmail.com</strong>",
        /*Fala 5*/ "<br><br><strong>Senha: confira se sua senha tem 8 digitos, letras maiusculas e minusculas, numeros e simbolos</strong>",
        /*Fala 6*/ "<br><br><strong>CPF: 111.222.333-44 </strong>",
        /*Fala 7*/ "<br><br><strong>Telefone: (DDD) 9 0000-0000 </strong>",
        /*Fala 8 */"<br><br> Funcionou ?",
        /*Fala 9 */"Nós te encaminharemos para nosso suporte técnico então, eles vão poder te ajudar com isso!",
        /*Fala 10 */"entendi. <br><br> vou finalizar esse atendimento pra você, dai você pode perguntar sobre outras coisas se quiser"
];


        InfoMatricula =
        /*Fala 0*/ ["Me ajude a entender a situação. <br> Você já efetuou sua matrícula na nossa instituição??🎓",
        /*Fala 1*/ "Ainda não?, tudo bem. recomendamos criar sua matricula antes de prosseguir, mas você pode tentar perguntar algumas coisas mesmo sem possuir uma",
        /*Fala 2*/ "Ok, <strong> você tem matricula </strong>. mas qual o problema?",
        /*Fala 3*/ "Não sabe seu numero de matricula?, busquei aqui e <strong> como você nao fez login seu numero de matricula não pode ser fornecido </strong>, por favor entre com sua conta antes ",
        /*Fala 4*/ "Não encontrou a opçao para realizar matricula?, vou te ajudar! <strong> o botão fica ali em cima no canto direito do cabeçario da página </strong>, é necessário criar uma conta antes",
        /*Fala 5*/ "Quer trancar a matrícula?... que pena, mas nós entendemos e vamos te ajudar!",
        /*Fala 6*/ "<br> <strong> Para trancar sua matrícula você precisa ir na secretária presencialmente </strong>, nossos atendentes vão te ajudar com esse probleminha",
        /*Fala 7*/ "<br> <br> Quer ajuda com outra coisa relacionada a matricula? <br> caso nao queira saber de mais nada digite: <strong> !cancelar </strong> <br> <br> eu finalizo o atendimento sobre matricula e podemos falar sobre outra coisa "];


        InfoCursos =
        /*Fala 0*/ ["Nossos cursos?, beleza! 🤗",
        /*Fala 1*/ "<br><br><strong>Administração mensalmente por: R$230,00 </strong> ",
        /*Fala 2*/ "<br><br><strong>Antropologia mensalmente por: R$150,00 </strong> ",
        /*Fala 3*/ "<br><br><strong>Arquitetura e Urbanismo mensalmente por: R$150,00 </strong> ",
        /*Fala 4*/ "<br><br><strong>Artes Visuais mensalmente por: R$170,00 </strong> ",
        /*Fala 5*/ "<br><br><strong>Biomedicina mensalmente por: R$200,00 </strong> ",
        /*Fala 6*/ "<br><br><strong>Ciência da computação mensalmente por: R$300,00 </strong> ",
        /*Fala 7*/ "<br><br><strong>Ciências contábeis mensalmente por: R$270,00 </strong> ",
        /*Fala 8*/ "<br><br><strong>Ciências sociais mensalmente por: R$170,00 </strong> ",
        /*Fala 9*/ "<br><br><strong>Cinema de animação e artes digitais mensalmente por: R$180,00 </strong> ",
        /*Fala 10*/ "<br><br><strong>Design mensalmente por: R$250,00 </strong> ",
        /*Fala 11*/ "<br><br><strong>Direito mensalmente por: R$290,00 </strong> ",
        /*Fala 12*/ "<br><br><strong>Enfermagem mensalmente por: R$290,00 </strong> ",
        /*Fala 13*/ "<br><br><strong>Engenharia civil mensalmente por: R$260,00 </strong> ",
        /*Fala 14*/ "<br><br><strong>Engenharia ambiental mensalmente por: R$230,00 </strong> ",
        /*Fala 15*/ "<br><br><strong>Engenharia de produção mensalmente por: R$240,00 </strong> ",
        /*Fala 16*/ "<br><br><strong>História mensalmente por: R$170,00 </strong> ",
        /*Fala 17*/ "<br><br><strong>Jornalismo mensalmente por: R$210,00 </strong> ",
        /*Fala 18*/ "<br><br><strong>Letras mensalmente por: R$450,00 </strong> ",
        /*Fala 19*/ "<br><br><strong>Matemática mensalmente por: R$350,00 </strong> ",
        /*Fala 20*/ "<br><br><strong>Medicina mensalmente por: R$230,00 </strong> ",
        /*Fala 21*/ "<br><br><strong>Medicina veterinária mensalmente por: R$200,00 </strong> ",
        /*Fala 22*/ "<br><br><strong>Música mensalmente por: R$250,00 </strong> ",
        /*Fala 23*/ "<br><br><strong>Odontologia mensalmente por: R$220,00 </strong> ",
        /*Fala 24*/ "<br><br><strong>Pedagogia mensalmente por: R$210,00 </strong> ",
        /*Fala 25*/ "<br><br><strong>Química mensalmente por: R$210,00 </strong> ",
        /*Fala 26*/ "<br><br><strong>Teatro mensalmente por: R$200,00 </strong> ",
        /*Fala 27*/ "<br><br><strong>Turismo mensalmente por: R$200,00 </strong> ",
        /*Fala 28*/ "<br><br>Todos os cursos sofrem aumento de 5% a cada periodo </strong> ",
        /*Fala 29*/"<br><br>Eai se interessou por algum curso? Se sim venha e faça sua matrícula!"
        ];
       


        InfoPagamento =
        /*Fala 0*/ ["<br> <br> Eita😟... problemas com pagamento são realmente preocupantes, me fale mais sobre a situação para vermos o que fazer. 😉",
        /*fala 1*/ "<br> Problema no débito automático ? Vou te encaminhar pra um atendente.",
        /*Fala 2*/ "<br> <br> não recebeu a fatura para pagamento?, visite a secretária da universidade, iremos corrigir isso o mais rápido possivel",
        /*Fala 3*/ "<br> <br> a cobrança não veio com o valor correto?... vamos verificar isso e ligaremos pra você assim que identificarmos o que aconteceu."];
       
       
        avaliacao =
        /*Fala 0*/ ["<br> <br> Caso eu tenha sido útil <strong> favorite nosso atendimento! Basta clicar no coração abaixo,</strong>  isso é importante para que eu possa me aprimorar! 🤗 <br><br> <i id='chat-icon' style='color: crimson;' class='fa fa-fw fa-heart'onclick= 'heartButton()'></i>"
    ];
       
        obrigado =
        /*Fala 0*/ [ "<br> <br> Que isso, é um prazer! 😉",];


        ajuda =
        /*Fala 0*/ [ "Aqui estão algumas sugestões dos meus comandos",
        /*Fala 1*/ "<br> <strong> !atendente</strong>: você solicita direto um atendente",
        /*Fala 2*/ "<br> <strong> !cancelar</strong>: Finaliza a sessão e reinicia o bot, caso haja problemas com seu uso'",
        /*Fala 3*/ "<br> <strong> *Quero saber sobre matricula</strong> ",
        /*Fala 4*/ "<br> <strong> *estou com problemas no login</strong> ",
        /*Fala 5*/ "<br> <strong> *estou com problemas no cadastro</strong> ",
        /*Fala 6*/ "<br> <strong> *quero saber sobre os cursos</strong> ",
        /*Fala */ "<br> <br> eu tambem tenho informações de: <br><br> - <strong> ver numero de matricula </strong> <br> - <strong> trancamento de matricula </strong> <br> - <strong> localização de funções do site </strong> <br> "
    ];

    

        /*----------------------> Arrays de dialogo <----------------------*/


        RespostaUsuario = input.toLowerCase();
    
        
        if(Conversa_avaliacao == "0" && Conversa_login == "0" &&  Conversa_cadastro == "0" &&  Conversa_matricula == "0" &&  Conversa_cursos == "0" &&  Conversa_pagamento == "0" &&  Conversa_avaliacao == "0" ){
            dialogos = 0;
        } else{
            dialogos = 1;
        }

       
        if (dialogos == 0 && (RespostaUsuario.includes("cancelar")||RespostaUsuario.includes("sair")||RespostaUsuario.includes("fechar")) ){
            return finalizar[0];
        }else if (dialogos == 0 && (RespostaUsuario.includes("sim") || RespostaUsuario.includes("claro") || RespostaUsuario.includes("ok")) ){
            return iniciar[0];
        
        }else if ( dialogos == 0 && RespostaUsuario.includes("faz o l")){
            return DoTheL;
        }else if ( dialogos == 0 && RespostaUsuario.includes("valeu")||RespostaUsuario.includes("agradecid")||RespostaUsuario.includes("obrigad")||RespostaUsuario.includes("beleza")){
            return obrigado;
        }else if ( dialogos == 0 && RespostaUsuario.includes("pagamento")||RespostaUsuario.includes("dinheiro")||RespostaUsuario.includes("paga")||RespostaUsuario.includes("paguei")){
            return InfoPagamento;








        
        /* <----------------------------------------------------------------------------- Ifs de login ----------------------------------------------------------------------------->*/
        
    
            }else if (dialogos == 0 && (RespostaUsuario.includes("login")||RespostaUsuario.includes("loga")||RespostaUsuario.includes("entra")) ){
            Conversa_login = "login_email";
            return help[0] + "<br> <br>" + InfoLogin[0] + InfoLogin[1]; /* problema pra logar né + você digitou o email corretamente? */ 


            /* CASO EMAIL E SENHA ESTEJAM CERTOS */
            }else if (dialogos == 1 && Conversa_login == "login_email" && (RespostaUsuario.includes("claro")||RespostaUsuario.includes("sim")||RespostaUsuario.includes("obvio")||RespostaUsuario.includes("óbvio"))){
            Conversa_login = "login_email_correto";
            return InfoLogin[2]; /* problema pra logar né + você digitou o senha corretamente? */
            
            }else if (dialogos == 1 && Conversa_login == "login_email_correto" && (RespostaUsuario.includes("claro")||RespostaUsuario.includes("sim")||RespostaUsuario.includes("obvio")||RespostaUsuario.includes("óbvio"))){
            Conversa_login = "login_senha_correto";
            return erro[2]; /* nao tenho informações + encaminhando para atendente */



            /* CASO EMAIL E SENHA ESTEJAM ERRADOS */
            }else if (dialogos == 1 && Conversa_login == "login_email" && (RespostaUsuario.includes("nao")||RespostaUsuario.includes("não")||RespostaUsuario.includes("nem")||RespostaUsuario.includes("talvez"))){
            Conversa_login = "login_email_errado";
            return InfoLogin[3]; /* talvez seja isso */
            
            }else if (dialogos == 1 && Conversa_login == "login_email_correto" && (RespostaUsuario.includes("nao")||RespostaUsuario.includes("não")||RespostaUsuario.includes("nem")||RespostaUsuario.includes("talvez"))){
            Conversa_login = "login_senha_errado";
            return InfoLogin[3]; /* talvez seja isso */

            
            /* EMAIL ESTEJA ERRADO E NAO DE CERTO */
            }else if (dialogos == 1 && Conversa_login == "login_email_errado"  && (RespostaUsuario.includes("nao deu certo")||RespostaUsuario.includes("não deu certo")||RespostaUsuario.includes("nao funcionou")||RespostaUsuario.includes("não funcionou")||RespostaUsuario.includes("nao resolveu")||RespostaUsuario.includes("não resolveu")||RespostaUsuario.includes("nao ajudou")||RespostaUsuario.includes("não ajudou"))){
            Conversa_login = "login_email_correto";
            return InfoLogin[2];

            /* senha ESTEJA ERRADO E NAO DE CERTO */
            }else if (dialogos == 1 && Conversa_login == "login_email_correto"  && (RespostaUsuario.includes("nao deu certo")||RespostaUsuario.includes("não deu certo")||RespostaUsuario.includes("nao funcionou")||RespostaUsuario.includes("não funcionou")||RespostaUsuario.includes("nao resolveu")||RespostaUsuario.includes("não resolveu")||RespostaUsuario.includes("nao ajudou")||RespostaUsuario.includes("não ajudou"))){
            return erro[2];


            }else if (dialogos == 0 && (RespostaUsuario.includes("esqueci meu login")||RespostaUsuario.includes("nao lembro minha senha")||RespostaUsuario.includes("esqueci minha senha")) ){
            Conversa_login = "recuperarLogin";
            return help[0] + "<br>" + InfoLogin[5];

        /* <----------------------------------------------------------------------------- Ifs de login ----------------------------------------------------------------------------->*/


        /* <--------------------------------------------------------------------------- Ifs de matricula --------------------------------------------------------------------------->*/
    

            }else if ( dialogos == 0 && RespostaUsuario.includes("matricula")||RespostaUsuario.includes("matrícula")){
                Conversa_matricula = "matricula_problema";
                return help[0] + "<br> <br>" + InfoMatricula[0];

            }else if ( dialogos == 1 && Conversa_matricula == "matricula_problema" && (RespostaUsuario.includes("claro")||RespostaUsuario.includes("sim")||RespostaUsuario.includes("obvio")||RespostaUsuario.includes("óbvio"))){
                return InfoMatricula[2]; /* usuário tem matricula, perguntamos o problema  */
                
            }else if (dialogos == 1 && Conversa_matricula == "matricula_problema" && (RespostaUsuario.includes("nao")||RespostaUsuario.includes("não")||RespostaUsuario.includes("nem")||RespostaUsuario.includes("talvez"))){
                return InfoMatricula[1]; /* usuário nao tem matricula, recomendamos criar uma  */

            }else if (dialogos == 1 && Conversa_matricula == "matricula_problema" && (RespostaUsuario.includes("numero de matricula")||RespostaUsuario.includes("minha matricula"))){
                return InfoMatricula[3]; /* nao sei meu numero de matricula  */

            }else if (dialogos == 1 && Conversa_matricula == "matricula_problema" && (RespostaUsuario.includes("como crio a matricula")||RespostaUsuario.includes("como faço uma matricula")||RespostaUsuario.includes("quero me matricular")||RespostaUsuario.includes("como crio uma matricula"))){
                return InfoMatricula[4]; /* onde crio uma matricula  */

            }else if (dialogos == 1 && Conversa_matricula == "matricula_problema" && (RespostaUsuario.includes("tranca")||RespostaUsuario.includes("encerrar matricula")||RespostaUsuario.includes("finalizar matricula"))){
                return InfoMatricula[5] +"<br>"+ InfoMatricula[6]; /* trancar matricula  */

        /* <--------------------------------------------------------------------------- Ifs de matricula --------------------------------------------------------------------------->*/
        
        /* <--------------------------------------------------------------------------- Ifs de cancelamento --------------------------------------------------------------------------->*/

            }else if (dialogos == 1 && (RespostaUsuario.includes("!cancelar"))){
                Conversa_login = "0";
                Conversa_cadastro = "0"; 
                Conversa_matricula = "0";
                Conversa_cursos = "0";
                Conversa_pagamento = "0"; 
                Conversa_avaliacao = "0";
                return finalizar[1] + avaliacao[0] + "<br>" + iniciar[1];

        /* <--------------------------------------------------------------------------- Ifs de cancelamento --------------------------------------------------------------------------->*/

        /* <--------------------------------------------------------------------------- Ifs de cadastro --------------------------------------------------------------------------->*/
        
            }else if (dialogos == 0 && (RespostaUsuario.includes("cadastro")||RespostaUsuario.includes("cadastrar")||RespostaUsuario.includes("registrar")||RespostaUsuario.includes("conta")) ){
                Conversa_cadastro = "cadastro_usuario";
                return InfoCadastro[0] + InfoCadastro[1] + InfoCadastro[2] + InfoCadastro[3]  + InfoCadastro[4] + InfoCadastro[5] + InfoCadastro[6] + InfoCadastro[7] + InfoCadastro[8];

            }else if (dialogos == 1 && Conversa_cadastro == "cadastro_usuario" && (RespostaUsuario.includes("claro")||RespostaUsuario.includes("sim")||RespostaUsuario.includes("obvio")||RespostaUsuario.includes("óbvio"))){
                return InfoCadastro[10];

            }else if (dialogos == 1 && Conversa_cadastro == "cadastro_usuario" && (RespostaUsuario.includes("nao")||RespostaUsuario.includes("não")||RespostaUsuario.includes("nem")||RespostaUsuario.includes("talvez"))){
               
                Conversa_login = "0";
                Conversa_cadastro = "0"; 
                Conversa_matricula = "0";
                Conversa_cursos = "0";
                Conversa_pagamento = "0"; 
                Conversa_avaliacao = "0";
                return InfoCadastro[9] + "<br> <br> <br>" + finalizar[1] + avaliacao[0] + "<br>" + iniciar[1];
        /* <--------------------------------------------------------------------------- Ifs de cadastro --------------------------------------------------------------------------->*/

        /* <--------------------------------------------------------------------------- Ifs de curso --------------------------------------------------------------------------->*/
        
            }else if (RespostaUsuario.includes("curso")||RespostaUsuario.includes("materia")||RespostaUsuario.includes("matéria")) {
                return InfoCursos;
            
        
        /* <--------------------------------------------------------------------------- Ifs de curso --------------------------------------------------------------------------->*/


            }else if (RespostaUsuario.includes("!comandos")||RespostaUsuario.includes("ajuda")||RespostaUsuario.includes("guia")) {
                return ajuda[0] + "<br>" + ajuda[1] + "<br>" + ajuda[2] + "<br> <br>" + ajuda[3] + "<br>" + ajuda[4] + "<br>" + ajuda[5] + "<br>" + ajuda[6] + "<br>" + ajuda[7];

            }else if (RespostaUsuario.includes("!atendente")){
                return erro[2];

            }else{
                return erro[0] + erro[1];
            }
    
        
    }
    
    
