Create table pessoa (email varchar(255) primary key,
    tipo varchar(50), 
    login varchar(100), 
    senha varchar(100), 
    bairro varchar(100)
);

create table cidade (id serial primary key, 
    estado varchar(50),
    pais varchar(50),
    cep varchar(20),
    fkpessoa varchar(255),
    FOREIGN KEY (fkpessoa) REFERENCES pessoa (email)
);

create table lixeira (id serial primary key,
    nome varchar(100),
    situacao varchar(50),
    ip VARCHAR(45),
    latitude DECIMAL(9,6),
    longitude DECIMAL(9,6)
);


create table grupo (id serial primary key, pessoa varchar(255), lixeira int,
    FOREIGN KEY (pessoa) REFERENCES pessoa (email),
    FOREIGN KEY (lixeira) REFERENCES lixeira (id)
);