INSERT INTO DEPARTAMENTO (Dnome,Dnumero,Cpf_gerente,Data_inicio_gerente) 
	VALUES ("Desenvolvimento", 6, "000111222333","01-07-2000");

SELECT DEPARTAMENTO.Dnome, DEPARTAMENTO.Cpf_gerente LOCALIZACAO_DEP.Dlocal
    FROM DEPARTAMENTO
    LEFT OUTER JOIN LOCALIZACAO_DEP
    ON DEPARTAMENTO.Dnome = LOCALIZACAO_DEP.Dnome;
