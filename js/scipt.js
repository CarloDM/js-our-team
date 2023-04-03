/*
  1.  produco gli oggetti utente - singolarmente o gia dentro l array?
  2. creare l array con gli oggetti utenti dentro
  3. leggere array e le chiavi di ogni oggetto
        <------
  4. riversare su dom
*/

const team = [
  {
  nome : 'Wayne Barnett',
  role : 'CEO',
  image : 'img/wayne-barnett-founder-ceo.jpg'
},
{
nome : 'Angela Caroll',
role : 'chief editor',
image : 'img/angela-caroll-chief-editor.jpg'
},
{
nome : 'Walter Gordon',
role : 'office menager',
image : 'img/walter-gordon-office-manager.jpg'
},
{
nome : 'Angela Lopez',
role : 'social media menager',
image : 'img/angela-lopez-social-media-manager.jpg'
},
{
nome : 'Scott Estrada',
role : 'Developer',
image : 'img/scott-estrada-developer.jpg'
},
{
nome : 'Barbara Ramos',
role : 'graphic Designer',
image : 'img/barbara-ramos-graphic-designer.jpg'
},
]
console.log('team array', team)

// CICLARE ARRAY CON FOR OF PER LEGGERE L OGGETTO A SUA VOLTA CICLATO PER LOGGARE LE SUE CHIAVI
for(let i of team){
  console.log(i)
  for ( let key in i){
    console.log(i[key])
  }
}




