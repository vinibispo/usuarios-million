//teste de controller
const axios = require('axios').default;
const host = "http://localhost:3000";
const Usr = require('../../src/models/User');
const TOKEN = "123456";
const _headers = {headers: {'token':TOKEN}};

describe("UsrController", () => {
  beforeEach(async()=>{
    await Usr.deleteMany()
    await Usr.create( [
            { 
                nome: "nome2",
                cpf: "cpfg2",
                fone: "12457845",
                endereco: "rua seia la",
                email: "eu2@torneseumprogramador.com.br",
                banco: 1,
                nivel: 1
            },
            { 
                nome: "nome1",
                cpf: "cpfg1",
                fone: "12457845",
                endereco: "rua seia la",
                email: "eu1@torneseumprogramador.com.br",
                banco: 1,
                nivel: 1
            }            
    ]);

  describe("GET /adm.json - deve retornar uma lista de administradores", () => {
    it("deve retornar o status code de 200", async(done) => {
      const response = await axios.get(`${host}/adm.json`, _headers)
      expect(response.status).toBe(200)
      done();
    });

    it("deve dados na API", async(done) => {
       const response = await axios.get(`${host}/adm.json`, _headers)
        const itens = response.data;
        expect(itens[0].nome).toBe("Danilo1");
        expect(itens[1].nome).toBe("Danilo2");
        done()
      })
  });
// 

  describe("POST /adm.json - administrador", () => {
    it("deve cadastrar um administrador", async(done) => {
      let nome = `teste ${new Date().getTime()}`;
        const body = { 
          nome,
          senha: '123456',
          email: nome + '@torneseumprogramador.com.br' 
        }
        const response = await axios.post(`${host}/adm.json`, body, _headers)
        expect(response.status).toBe(201)
      done();
    });
  });
// 
  describe("PUT /adm.json - administrador", () => {
    it("deve alterar um administrador", async(done) => {
      let nome = `teste ${new Date().getTime()}`;
     const adm = await Usr.create({ nome: nome, senha: '123456', email: nome + '@torneseumprogramador.com.br' }) 
        const body = { 
            nome,
            senha: '123456',
            email: nome + '@torneseumprogramador.com.br' 
          }
        const response = await axios.put(`${host}/adm/${adm._id}.json`, body, _headers)
        expect(response.status).toBe(204);
        done();
      });
    });

  describe("DELETE /adm.json - administrador", () => {
    it("deve apagar um administrador", async(done) => {
      let nome = `teste ${new Date().getTime()}`;
      const adm = await Usr.create({ nome: nome, senha: '123456', email: nome + '@torneseumprogramador.com.br' })        // let options = {
        const response = await axios.delete(`${host}/adm/${adm._id}.json`, _headers)
        expect(response.status).toBe(204)
        done();
    });
  });
}
)})
