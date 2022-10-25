import { isEmail, isNotEmpty, Matches } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'tb_usuario'})
export class Usario{

@PrimaryGeneratedColumn ('uuid')
id: string;

@isNotEmpty()
@Column ({name: 'Primeiro_Nome'})
primeiroNome: string

@isNotEmpty()
@Column ({name: 'Sobrenome'})
Sobrenome: string 

@isNotEmpty()
@isEmail()
@Column ({nullable: false})
Email: string 


@isNotEmpty()
@Column({nullable: false})
@Matches(RegExp.senha,(message: MessagesHelper.PASSWORD_VALID))
Senha: string





}