Create table pessoa (email varchar primary key,
    tipo varchar, 
    login varchar, 
    senha varchar, 
    bairro varchar,
    fkcidade int
);

create table cidade (id serial primary key, 
    estado varchar,
    pais varchar,
    cep varchar
);

create table lixeira (id serial primary key,
    nome varchar,
    situacao varchar,
    ip VARCHAR(45),
    latitude DECIMAL(9,6),
    longitude DECIMAL(9,6)
);


create table grupo (id serial primary key, pessoa varchar, lixeira int,
    FOREIGN KEY (pessoa) REFERENCES pessoa (email),
    FOREIGN KEY (lixeira) REFERENCES lixeira (id)
);

ALTER TABLE pessoa ADD FOREIGN KEY (fkcidade) REFERENCES cidade (id);