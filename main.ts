       function multiplicacao(x: number, y: number): number {
        return x * y;
    }

    function saudacao(nome: string): string {
        return "Olá " + nome;
    }
    
    const resultadoMultiplicacao = multiplicacao(5, 3);
    const mensagemSaudacao = saudacao("João");
    
    console.log("Resultado da multiplicação:", resultadoMultiplicacao);
    console.log("Mensagem de saudação:", mensagemSaudacao);
    