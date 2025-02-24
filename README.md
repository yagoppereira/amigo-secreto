Amigo Secreto - Sorteio Online
Este é um projeto simples de sorteio de "Amigo Secreto", desenvolvido com HTML, CSS e JavaScript. O sistema permite que os usuários adicionem seus nomes, realizem o sorteio e descubram com quem irão trocar presentes.

Funcionalidades
Adicionar amigos: Os usuários podem adicionar os nomes de seus amigos para participar do sorteio.
Evitar duplicações: O sistema impede que nomes repetidos sejam adicionados à lista.
Garantir que ninguém tire a si mesmo: Durante o sorteio, se alguém for sorteado para si mesmo, o sistema automaticamente troca o sorteio com outro amigo.
Garantir que cada pessoa seja sorteada apenas uma vez: Nenhuma pessoa pode ser sorteada mais de uma vez no mesmo sorteio.
Como Funciona
Adicionar amigos: O usuário insere os nomes dos amigos no campo de entrada e clica no botão "Adicionar". Se o nome já estiver na lista, o sistema não permitirá a duplicação.
Sorteio: O usuário pode clicar no botão "Sortear amigo" para realizar o sorteio. O sistema garante que:
Ninguém tire a si mesmo.
Nenhuma pessoa seja sorteada mais de uma vez.
Resultado: O resultado do sorteio será exibido na tela, mostrando quem sorteou quem.
Tecnologias Utilizadas
HTML: Estrutura da página.
CSS: Estilo da página (via arquivo style.css).
JavaScript: Lógica do sorteio e manipulação da lista de amigos.

Como Usar
Baixe ou clone o repositório:
git clone https://github.com/yagoppereira/amigo-secreto.git
Abra o arquivo index.html no seu navegador para acessar o aplicativo.

Adicione os nomes dos amigos:

Digite os nomes dos amigos no campo de entrada e clique no botão "Adicionar".
O nome será adicionado à lista de amigos.

Realize o sorteio:
Após adicionar pelo menos 2 amigos, clique no botão "Sortear amigo".
O resultado aparecerá logo abaixo, mostrando quem tirou quem.
Aproveite o sorteio!

Exemplo de Uso

Adicione os nomes:

João
Maria
Ana
Clique em "Sortear amigo".

O sistema exibirá o seguinte:

João tirou Maria
Maria tirou Ana
Ana tirou João

Estrutura de Arquivos
index.html: Arquivo principal do HTML que contém a estrutura da página.
style.css: Arquivo CSS para estilizar a página.
app.js: Arquivo JavaScript que contém a lógica do sorteio.

Contribuições
Sinta-se à vontade para fazer melhorias, correções ou adicionar novos recursos. Para contribuir:
Faça um fork deste repositório.
Crie uma nova branch para sua contribuição (git checkout -b minha-contribuicao).
Faça as mudanças e faça commit (git commit -am 'Adicionando novas funcionalidades').
Envie a branch para o repositório (git push origin minha-contribuicao).
Abra um Pull Request explicando suas alterações.

Licença
Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para mais detalhes.
