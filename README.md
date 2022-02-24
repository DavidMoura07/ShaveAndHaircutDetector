# ShaveAndHaircutDetector
Esse repositório detecta quando uma sequência de cliques formam a sinfonia Shave and Haircut

# Shave and a Haircut

Nível: pleno | sênior

## Desejo reconhecer um padrão específico.
Você vai escrever um script em javascript ou typescript que vai reconhecer o padão Shave and a Haircut

1. Crie uma página web simples.
2. Ouça por eventos de clique de forma contínua.
3. A cada novo clique, verifique se a sequência acumulada de cliques descreve o padrão do link acima.
4. É importante que a detecção do padrão esteja preparada para variações ligeiramente mais aceleradas ou mais lentas do padrão, sendo o script ainda capaz de detectar que se trata do padrão melódico do link mencionado.
5. Caso sim, exiba um alerta notificando o usuário.
6. Caso não, não faça nada.


Desenvolvi um algoritmo que detecta a cadência de cliques e calcula a quantos bpm's está sendo tocado o padrão, desta forma, independente da velocidade, caso o padrão seja tocado, ele será detectado, considerando uma margem de erro que pode ser configurada através da variável `errorMarginMs` que deve receber um valor numérico equivalente aos millisegundos de tolerância. 
