SET SQL_SAFE_UPDATES = 0;

delete from tb_usuarios;
delete from tb_clientes;
delete from tb_apolices;

SET SQL_SAFE_UPDATES = 1;

-- 1. Inserindo 4 Usuários (tb_usuarios)
-- Senhas com no mínimo 8 caracteres, como exigido pelo @MinLength
INSERT INTO tb_usuarios (nome, usuario, senha, foto) VALUES
('João Corretor', 'joao.corretor@seguros.com', 'senha123', 'https://ik.imagekit.io/leu4crxxao/games/istockphoto-2041572395-612x612.jpg'),
('Maria Vendedora', 'maria.vendedora@seguros.com', 'senha123', 'https://ik.imagekit.io/leu4crxxao/games/istockphoto-2041572395-612x612.jpg'),
('Pedro Suporte', 'pedro.suporte@seguros.com', 'senha123', 'https://ik.imagekit.io/leu4crxxao/games/istockphoto-2041572395-612x612.jpg'),
('Ana Gerente', 'ana.gerente@seguros.com', 'senha123', 'https://ik.imagekit.io/leu4crxxao/games/istockphoto-2041572395-612x612.jpg');


-- 2. Inserindo 5 Clientes (tb_clientes)
-- CPF e Telefones com exatamente 11 caracteres, como exigido
INSERT INTO tb_clientes (nome, email, senha, dataNascimento, cpf, telefone, foto) VALUES
('Carlos Silva', 'carlos@email.com', 'senha123', '1990-01-15', '11122233344', '11988887777', 'https://ik.imagekit.io/leu4crxxao/games/istockphoto-2041572395-612x612.jpg'),
('Beatriz Costa', 'beatriz@email.com', 'senha123', '1985-05-20', '22233344455', '11977776666', 'https://ik.imagekit.io/leu4crxxao/games/istockphoto-2041572395-612x612.jpg'),
('Fernando Souza', 'fernando@email.com', 'senha123', '1995-10-10', '33344455566', '11966665555', 'https://ik.imagekit.io/leu4crxxao/games/istockphoto-2041572395-612x612.jpg'),
('Daniela Alves', 'daniela@email.com', 'senha123', '1980-12-30', '44455566677', '11955554444', 'https://ik.imagekit.io/leu4crxxao/games/istockphoto-2041572395-612x612.jpg'),
('Lucas Mendes', 'lucas.sem.apolice@email.com', 'senha123', '2000-02-25', '55566677788', '11944443333', 'https://ik.imagekit.io/leu4crxxao/games/istockphoto-2041572395-612x612.jpg'); 
-- OBS: O Lucas (ID 5) é o cliente cadastrado que não fará nenhuma apólice.


-- 3. Inserindo 4 Apólices (tb_apolices)
-- Vinculando aos clientes de ID 1 a 4 e distribuindo entre os usuários
INSERT INTO tb_apolices (
    tipoDispositivo, marca, modelo, numeroSerie, 
    anoFabricacao, anoAquisicao, valorBase, valorDesconto, valorFinal, 
    dataInicio, dataFim, clienteId, usuarioId
) VALUES
-- Apólice 1: Cliente 1, feito pelo Usuário 1
('Smartphone', 'Apple', 'iPhone 13', 'SN12345678', 2021, 2022, 5000.00, 500.00, 4500.00, '2024-01-01 10:00:00.000', '2025-01-01 10:00:00.000', 1, 1),

-- Apólice 2: Cliente 2, feito pelo Usuário 2
('Notebook', 'Dell', 'XPS 13', 'SN98765432', 2022, 2022, 8000.00, 0.00, 8000.00, '2024-02-15 14:30:00.000', '2025-02-15 14:30:00.000', 2, 2),

-- Apólice 3: Cliente 3, feito pelo Usuário 3
('Tablet', 'Samsung', 'Galaxy Tab S8', 'SN55555555', 2023, 2023, 4000.00, 200.00, 3800.00, '2024-03-20 09:15:00.000', '2025-03-20 09:15:00.000', 3, 3),

-- Apólice 4: Cliente 4, feito pelo Usuário 1 (Usuário 1 fez duas vendas)
('Smartwatch', 'Garmin', 'Forerunner 945', 'SN77777777', 2021, 2021, 3000.00, 100.00, 2900.00, '2024-04-10 16:45:00.000', '2025-04-10 16:45:00.000', 4, 1);