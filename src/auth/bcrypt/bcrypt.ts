import { Injectable } from "@nestjs/common";
import * as bcrypt from 'Bcrypt';
import { brotliCompressSync } from "zlib";

@Injectable() 
export class Bcrypt {
async senhaRestrita (senha: string ): Promise<string>{
    let salto :number= 10 ;

 return await bcrypt.hash(senha,salto);

}
 async compareSenha(senhabanco: string,senhadigitada: string): Promise<boolean>{
    
    return bcrypt.compareSync(senhadigitada,senhabanco);
 }









 
}