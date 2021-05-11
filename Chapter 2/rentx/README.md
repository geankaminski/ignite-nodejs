# Cadastro de carro

**Requisitos funcionais - RF**
- Deve ser possível cadastrar um novo carro.
- Deve ser possível listar todas as categorias.

**Regras de negócio - RN**
- Não deve ser possível cadastrar um carro com uma placa já existente.
- Não deve ser possível alterar a plca de um carro já cadastrado.
- O carro deve ser cadastrado com disponibilidade por padrão.
- O usuário responsável responsável pelo cadastro deve ser um usuário administrador.

# Listagem de carros

**Requisitos funcionais - RF**
- Deve ser possível listar todos os carros disponíveis.
- Deve ser possível listar todos os carros disponíveis pelo nome da categoria.
- Deve ser possível listar todos os carros disponíveis pelo nome da marca.
- Deve ser possível listar todos os carros disponíveis pelo nome do carro.

**Regras de negócio - RN**
- O usuário não precisa estar logado no sistema.

# Cadastro de especificação no carro

**Requisitos funcionais - RF**
- Deve ser possível cadastrar uma especificação para um carro.
- Deve ser possível listar todas as especificações.
- Deve ser possível listar todos os carros.

**Regras de negócio - RN**
- Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
- Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.
- O usuário responsável responsável pelo cadastro deve ser um usuário administrador.

# Cadastro de imagens do carro

**Requisitos funcionais - RF**
- Deve ser possível cadastrar a imagem do carro.
- Deve ser possível listar todos os carros.

**Requisitos não funcionais - RNF**
- Utilizar o multer para upload dos arquivos.

**Regras de negócio - RN**
- O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
- O usuário responsável responsável pelo cadastro deve ser um usuário administrador.

# Aluguel de carro

**Requisitos funcionais - RF**
- Deve ser possível cadastrar um aluguel.

**Regras de negócio - RN**
- O aluguel deve ter duração mínima de 24 horas.
- Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.
- Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.
- O usuário deve estar logado na aplicação.

# Devolução de carro

**RF**
- Deve ser possível realizar a devolução de um carro.

**RN**
- Se o carro for devolvido com menos de 24 horas será cobrado diária completa.
- Ao realizar devolução o carro deverá ser liberado para outro aluguel.
- Ao realizar devolução o usuário deverá ser liberado para outro aluguel.
- Ao realizar a devolução, deverá ser calculado o total do aluguel.
- Caso haja multa, deverá ser somado ao total do aluguel.

# Listagem de Aluguéis para usuário

**RF**
- Deve ser possível realizar a busca de todos os aluguéis para o usuário.

**RN**
- O usuário deve estar logado na aplicação.

# Recuperar senha
**RF**
- Deve ser possível o usuário recuperar a senha informando o e-mail.
- O usuário deve receber um e-mail com o passo a passo para recuperação de senha.
- O usuário deve conseguir inserir uma nova senha.

**RN**
- O usuário precisa informar uma nova senha.
- O link enviado para recuperação deve expirar em 3 horas.
