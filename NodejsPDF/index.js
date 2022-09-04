const pdf = require("html-pdf")
const ejs = require("ejs")

const nomeUsuario = "Seu-Nome"
const projeto = "Node!"
const categoria = "NodeJS"

ejs.renderFile(
  "./meuPDF.ejs",
  {
    nome: nomeUsuario,
    projeto: projeto,
    categoria: categoria,
  },
  (err, html) => {
    if (err) {
      console.log("ERRO!!!!")
    } else {
      pdf.create(html, {}).toFile("./geradorPDF.pdf", (err, res) => {
        if (err) {
          console.log("UM ERRO ACONTECEU :(")
        } else {
          console.log(res)
        }
      })
    }
  }
)
