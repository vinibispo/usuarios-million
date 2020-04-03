//teste de controller
const supertest = require('supertest');
const crypto = require('crypto')
const Usr = require('../../src/models/User');
const TOKEN = "123456";
const app = require('../../src/app')
const request = supertest(app)

describe("UsrController", () => {
  beforeEach(async()=>{
    await Usr.deleteMany()
    const nome = 'aa'
    await Usr.create( [
      {nome: "Danilo1", cpf: "1234567890", senha: crypto.randomBytes(4).toString('HEX'), telefone: '12457845',logradouro_rua: 'rua seia la',email: nome +'aa@torneseumprogramador.com.br',logradouro_cep: '13274666', logradouro_bairro: 'Vila do Coco', logradouro_cidade: 'Itanhanhém', banco_transferencia: '122', nivel_investidor: '5'},
      {nome: "Danilo2", cpf: "1234567891", senha: crypto.randomBytes(4).toString('HEX'), telefone: '12347845',logradouro_rua: 'rua seia la',email: nome +'bb@torneseumprogramador.com.br',logradouro_cep: '13274566', logradouro_bairro: 'Vila da Rosa', logradouro_cidade: 'Itatiba', banco_transferencia: '222', nivel_investidor: '8'},
    ]);
  })
  describe("GET /user", () => {
    it("deve retornar o status code de 200", async(done) => {
      const response = await request.get(`/user`).set({ 'token': TOKEN})
      expect(response.status).toBe(200)
      done();
    });

    it("deve retornar dados na API", async(done) => {
       const response = await request.get(`/user`).set({'token': TOKEN})
        const itens = response.body;
        expect(itens[0].nome).toBe("Danilo1");
        expect(itens[1].nome).toBe("Danilo2");
        done()
      })
  });
// 

  describe("POST /user", () => {
    it("deve cadastrar um usuário", async(done) => {
      let nome = `teste ${new Date().getTime()}`;
        const body = { 
          nome,
          cpf: "1234560987",
          senha: '123456',
          email: nome + '@torneseumprogramador.com.br',
          telefone: "55939898329",
          logradouro_rua: "Rua do Doca",
          logradouro_cep: "12234567",
          logradouro_bairro: "Nova República",
          logradouro_cidade: "Jundiaí",
          banco_transferencia: "431",
          nivel_investidor: "3"

        }
        const response = await request.post(`/user`).set('token', TOKEN).send(body)

        expect(response.status).toBe(201)
      done();
    });
  });
// 
  describe("PUT /user ", () => {
    let nome = `teste ${new Date().getTime()}`;
      it("deve alterar um administrador", async(done) => {
     const user = await Usr.create({ nome: nome, cpf: "1234560987",
      senha: '123456',
      email: nome + '@torneseumprogramador.com.br',
      telefone: "1393984899",
      logradouro_rua: "Rua da Coca",
      logradouro_cep: "12234467",
      logradouro_bairro: "Novo Horizonte",
      logradouro_cidade: "Várzea Paulista",
      banco_transferencia: "432",
      nivel_investidor: "5"
    }) 
     const body = { 
      nome,
      cpf: "1234560987",
      senha: '123456',
      email: nome + '@torneseumprogramador.com.br',
      telefone: "55939898329",
      logradouro_rua: "Rua do Doca",
      logradouro_cep: "12234567",
      logradouro_bairro: "Nova República",
      logradouro_cidade: "Jundiaí",
      banco_transferencia: "431",
      nivel_investidor: "3"

    }
        const response = await request.put(`/user/${user._id}`).set('token', TOKEN).send(body)
        expect(response.status).toBe(204);
        done();
      });
    });

  describe("DELETE /user", () => {
    it("deve apagar um administrador", async(done) => {
      let nome = `teste ${new Date().getTime()}`;
      const user = await Usr.create({ nome: nome, cpf: "1234560987",
      senha: '123456',
      email: nome + '@torneseumprogramador.com.br',
      telefone: "1393984899",
      logradouro_rua: "Rua da Coca",
      logradouro_cep: "12234467",
      logradouro_bairro: "Novo Horizonte",
      logradouro_cidade: "Várzea Paulista",
      banco_transferencia: "432",
      nivel_investidor: "5" })        // let options = {
        const response = await request.delete(`/user/${user._id}`).set('token', TOKEN)
        expect(response.status).toBe(204)
        done();
    });
  });
})
