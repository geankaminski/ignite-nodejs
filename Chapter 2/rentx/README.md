# Cadastro de carro

**Requisitos funcionais - RF**
Deve ser possível cadastrar um novo carro.
Deve ser possível listar todas as categorias.

**Regras de negócio - RN**
Não deve ser possível cadastrar um carro com uma placa já existente.
Não deve ser possível alterar a plca de um carro já cadastrado.
O carro deve ser cadastrado com disponibilidade por padrão.
O usuário responsável responsável pelo cadastro deve ser um usuário administrador.

# Listagem de carros

**Requisitos funcionais - RF**
Deve ser possível listar todos os carros disponíveis.
Deve ser possível listar todos os carros disponíveis pelo nome da categoria.
Deve ser possível listar todos os carros disponíveis pelo nome da marca.
Deve ser possível listar todos os carros disponíveis pelo nome do carro.

**Regras de negócio - RN**
O usuário não precisa estar logado no sistema.

# Cadastro de especificação no carro

**Requisitos funcionais - RF**
Deve ser possível cadastrar uma especificação para um carro.
Deve ser possível listar todas as especificações.
Deve ser possível listar todos os carros.

**Regras de negócio - RN**
Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.
O usuário responsável responsável pelo cadastro deve ser um usuário administrador.

# Cadastro de imagens do carro

**Requisitos funcionais - RF**
Deve ser possível cadastrar a imagem do carro.
Deve ser possível listar todos os carros.

**Requisitos não funcionais - RNF**
Utilizar o multer para upload dos arquivos.

**Regras de negócio - RN**
O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
O usuário responsável responsável pelo cadastro deve ser um usuário administrador.

# Aluguel de carro

**Requisitos funcionais - RF**
Deve ser possível cadastrar um aluguel.

**Regras de negócio - RN**
O aluguel deve ter duração mínima de 24 horas.
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.
