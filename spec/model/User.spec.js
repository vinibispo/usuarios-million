const crypto = require('crypto')
//Aqui vai ficar o teste para a model
const User = require('../../src/models/User');

describe('Modelo User', () => {

  beforeEach(async ()=>{
    await User.deleteMany()
  });

  it('Deve retornar o modelo de User', async () => {
    const user = await User.find({})
    expect(user != undefined).toBe(true)

  });

  it('Deve incluir um usuario', async () => {
    let nome = `nome ${new Date().getTime()}`;
    let cpfg = `${new Date().getTime()}`;
    const usr = await User.create({ nome: nome, cpf: cpfg, senha: crypto.randomBytes(4).toString('HEX'), telefone: '12457845',logradouro_rua: 'rua seia la',email: nome + '@torneseumprogramador.com.br',logradouro_cep: '13295666', logradouro_bairro: 'Vila Martins', logradouro_cidade: 'Itararé', banco_transferencia: '120', nivel_investidor: '3'});
    expect(usr).not.toBe(undefined)
  });

  it('Não deve incluir um usuario com cpf repetido', async() => {
    let nome = `nome ${new Date().getTime()}`;
    let erro=''
    let cpfg = `${new Date().getTime()}`;
    const usr =  await User.create({nome: nome, cpf: cpfg, senha: crypto.randomBytes(4).toString('HEX'), telefone: '12457845',logradouro_rua: 'rua seia la',email: nome + '@torneseumprogramador.com.br',logradouro_cep: '13294666', logradouro_bairro: 'Vila Adolfo', logradouro_cidade: 'Itajaí', banco_transferencia: '121', nivel_investidor: '4'});
    try{
      const usr2 =  await User.create({nome: nome, cpf: cpfg, senha: crypto.randomBytes(4).toString('HEX'), telefone: '12457845',logradouro_rua: 'rua seia la',email: nome + '@torneseumprogramador.com.br',logradouro_cep: '13294666', logradouro_bairro: 'Vila Adolfo', logradouro_cidade: 'Itajaí', banco_transferencia: '121', nivel_investidor: '4'});
    }
    catch(err){
      erro = err
    }
    expect(erro).not.toBe(undefined)
  });

  it('Não deve incluir um usuario sem nome', async () => {
    let nome = null;
    let erro = ''
    let cpfg = `${new Date().getTime()}`;
    try {
      const usr =  await User.create({ nome: nome, cpf: cpfg, senha: crypto.randomBytes(4).toString('HEX'), telefone: '12457845',logradouro_rua: 'rua seia la',email: nome + '@torneseumprogramador.com.br',logradouro_cep: '13274666', logradouro_bairro: 'Vila do Coco', logradouro_cidade: 'Itanhanhém', banco_transferencia: '122', nivel_investidor: '5'});
    } catch (error) {
      erro = error
    }
    expect(erro).not.toBe(undefined)
  });

  it('Não deve alterar um registro', async() => {
    let nome = `nome ${new Date().getTime()}`;
    let err = ''
    let cpfg = `${new Date().getTime()}`;
    const usr =  await User.create({ nome: nome, cpf: cpfg, senha: crypto.randomBytes(4).toString('HEX'), telefone: '12457845',logradouro_rua: 'Rua Pedro Ferreira dos Santos',email: nome + '@torneseumprogramador.com.br',logradouro_cep: '13295000', logradouro_bairro: 'Parque das Hortênsias', logradouro_cidade: 'Itupeva', banco_transferencia: '132', nivel_investidor: '10'});
    try{
      const user = await User.findByIdAndUpdate('123', {nome: nome+'1', cpf: cpfg, senha: crypto.randomBytes(4).toString('HEX'), telefone: '12457845',logradouro_rua: 'Rua Pedro Ferreira dos Santos',email: nome + '@torneseumprogramador.com.br',logradouro_cep: '13295000', logradouro_bairro: 'Parque das Hortênsias', logradouro_cidade: 'Itupeva', banco_transferencia: '132', nivel_investidor: '10'})
    }
    catch(error){
      err = error
    }
    expect(err).toBeDefined()
  });
});