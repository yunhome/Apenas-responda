const output = document.getElementById('output');
const commandInput = document.getElementById('command');

const dossiers = {
  kara_ellyson: `
[ARQUIVO CLASSIFICADO - KARA ELLYSON]
Nome: Kara Ellyson
Nascimento: 14/05/1998
Falecimento Presumido: 22/09/2022
Status: DESAPARECIDA

Última mensagem enviada: "Os olhos voltaram."
Descrição: Acredita-se que Kara tenha feito parte de um culto que estudava "a entidade dos reflexos".
Relatos apontam que seu espelho embaçava sozinho à noite e mostrava imagens que não correspondiam à realidade.
`,
  dante_murakami: `
[ARQUIVO CLASSIFICADO - DANTE MURAKAMI]
Nome: Dante Murakami
Nascimento: 12/11/2003
Falecimento: 03/03/2021
Status: FALECIDO

Último registro conhecido: Um sussurro captado pelo microfone: "Eu sou o reflexo deles."
Relato completo:
Dante desapareceu dentro do colégio abandonado em Kyoto. A polícia encontrou apenas seu gravador, com a frase repetida 14 vezes.
`,
  victoria_luz: `
[ARQUIVO CLASSIFICADO - VITÓRIA LUZ]
Nome: Vitória Luz
Nascimento: 21/03/1990
Desaparecimento: 29/08/2018
Status: NÃO ENCONTRADA

Relato:
Ela acreditava que sua casa era viva. Dizia que as paredes respiravam e cochichavam à noite. Sua última frase registrada foi:
"A casa quer me digerir."`,
  jeff_the_killer: `
[ARQUIVO CREEPYPASTA - JEFF THE KILLER]
Nome: Jeff
Identidade real: Desconhecida
Status: Lenda viva

Relato:
Figura com rosto branco, olhos fundos e sorriso permanente. Supostamente responsável por diversos desaparecimentos.
Última frase de uma vítima: "Go to sleep."`,
  ben_drowned: `
[ARQUIVO CREEPYPASTA - BEN DROWNED]
Nome: Ben
Relato: Uma cópia amaldiçoada do jogo Majora's Mask.
A entidade conhecida como Ben manipula o jogo e envia mensagens como: "Você não deveria ter feito isso."
Usuários relatam ouvir risadas mesmo com o som desligado.
`
};

function runCommand() {
  const cmd = commandInput.value.trim().toLowerCase();
  if (cmd === "") return;

  output.textContent += cmd + "\n";

  if (dossiers[cmd]) {
    output.textContent += dossiers[cmd] + "\n\n> ";
  } else {
    output.textContent += "[ERRO] Código não reconhecido.\n> ";
  }

  commandInput.value = "";
  window.scrollTo(0, document.body.scrollHeight);
}
