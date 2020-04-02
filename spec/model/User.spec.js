//Aqui vai ficar o teste para a model
const User = require('../../src/models/User');

describe('Modelo User', () => {

  beforeEach(async ()=>{
    await User.deleteMany()
  });

  it('Deve retornar o modelo de User', () => {
    User.find().then(dado => {
      expect(dado !== undefined).toBe(true);
    });

  });

  it('Deve incluir um usuario', () => {
    let nome = `nome ${new Date().getTime()}`;
    let cpfg = `${new Date().getTime()}`;
    const usr = new User({ nome: nome, cpf: cpfg, fone: '12457845',endereco: 'rua seia la',email: nome + '@torneseumprogramador.com.br',banco: 1, nivel: 1 });
    usr.save(error => {
      expect(error == undefined || error == null).toBe(true);
    });
  });

  it('Não deve incluir um usuario repetido', () => {
    let nome = `nome ${new Date().getTime()}`;
    let cpfg = `${new Date().getTime()}`;
    const usr =  new User({ nome: nome, cpf: cpfg, fone: '12457845',endereco: 'rua seia la',email: nome + '@torneseumprogramador.com.br',banco: 1, nivel: 1 });
    usr.save(error => {
      const usr2 =  new User({ nome: nome, cpf: cpfg, fone: '12457845',endereco: 'rua seia la',email: nome + '@torneseumprogramador.com.br',banco: 1, nivel: 1 });
      usr2.save(error => {
        expect(error == undefined || error == null).toBe(false);
      });
    })
  });

  it('Não deve incluir um usuario sem nome', () => {
    let nome = null;
    let cpfg = `${new Date().getTime()}`;
    const usr =  new User({ nome: nome, cpf: cpfg, fone: '12457845',endereco: 'rua seia la',email: nome + '@torneseumprogramador.com.br',banco: 1, nivel: 1 });

    usr.save(error => {
      expect(error == undefined || error == null).toBe(false);
    })
  });

  it('Não deve alterar um registro', () => {
    let nome = `nome ${new Date().getTime()}`;
    let cpfg = `${new Date().getTime()}`;
    const usr =  new User({ nome: nome, cpf: cpfg, fone: '12457845',endereco: 'rua seia la',email: nome + '@torneseumprogramador.com.br',banco: 1, nivel: 1 });
    usr.save(error => {
      let novoNome = "Danilo" + new Date().getTime();
      usr.nome = novoNome
      usr.save(error => {
        expect(error == undefined || error == null).toBe(true);
        User.find({nome: novoNome}).then(dado => {
          expect(dado.length > 0).toBe(true);
        });
      });
    })
  });
});