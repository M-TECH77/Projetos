https://ejs.co/
EJS online: https://ionicabizau.github.io/ejs-playground/

**Para executar: npm start**

## Recursos ejs:

- Fluxo de controle com `<% %>`
- Saída com escape com `<%= %>` (função de escape configurável)
- Saída bruta sem escape com `<%- %>`
- Modo de corte de nova linha ('slurping de nova linha ') com tag final `-%>`
- Modo de corte de espaço em branco (slurp all whitespace) para fluxo de controle com `<%_ _%>`
- Delimitadores personalizados (por exemplo, use `<? ?>` em vez de `<% %>`)

## Tags ejs:

- `<%` 'Scriptlet', para fluxo de controle, sem saída
- `<%_` Tag Scriptlet 'Whitespace Slurping', retira todos os espaços em branco antes dele
- `<%=` Exibe o valor no modelo (escaped)
- `<%-` Gera o valor sem escape no modelo
- `<%#` Tag de comentário, sem execução, sem saída
- `<%%` Gera um literal '<%'
- `%%>` Saídas um literal '%>'
- `%>` Tag final simples
- `-%>` Trim-mode ('newline slurp'), apara após a nova linha
- `_%>` Tag final 'Whitespace Slurping', remove todos os espaços em branco depois disso
