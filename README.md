# Gerenciador de Pacientes

Este é um aplicativo Angular para gerenciar pacientes, permitindo adicionar, remover e visualizar informações de pacientes, além de gerar um QR Code.

## Funcionalidades

- Adicionar novos pacientes com nome, telefone, dia e hora da consulta, e mensagem.
- Remover pacientes da lista.
- Visualizar a lista de pacientes.
- Formatação de entrada para telefone e horário.
- Geração de QR Code para cada paciente.

## Tecnologias Utilizadas

- Angular
- TypeScript
- RxJS
- HTML/CSS

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/gerenciador-de-pacientes.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd gerenciador-de-pacientes
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:
   ```bash
   ng serve
   ```

5. Acesse o aplicativo no navegador:
   ```
   http://localhost:4200
   ```

## Uso

- Preencha os campos para adicionar um novo paciente.
- O telefone deve ser inserido no formato `(99) 99999-9999`.
- A hora da consulta deve ser inserida no formato `HH:mm`.
- Clique em "Adicionar" para salvar o paciente.
- Para remover um paciente, clique no botão de remoção ao lado do paciente desejado.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para mais detalhes.