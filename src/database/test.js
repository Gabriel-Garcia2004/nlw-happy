const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then( async db => {
  //INSERIR DADOS DA TABELA  

  await saveOrphanage(db, {
    lat:"-22.8365692",
    lng:"-42.3644214",
    name:"lar dos meninos",
    about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    whatsapp: "237461287346",
    images: [
     "https://images.unsplash.com/photo-1595295407820-3563d04518be?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
     "https://images.unsplash.com/photo-1582167410766-a90eea4787ae?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
    ].toString(),
    instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar",
    opening_hours: "Horário de visitas das 8h até 18h",
    open_on_weekends: "0"
  })
    //CONSULTAR DADOS DA TABELA
     const selectedOrphanage = await db.all("SELECT * FROM orphanages")
     console.log(selectedOrphanage)
    
 const orphanage = await db.all(
   'SELECT *FROM orphanages WHERE id = "1"')
   console.log(orphanage)
 
   // delete dados da tabela

  /*console.log(await db.run('DELETE FROM orphanages WHERE id = "3"'))*/
 
 
})
      