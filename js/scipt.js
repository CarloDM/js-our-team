/*
  1.  produco gli oggetti utente - singolarmente o gia dentro l array?
  2. creare l array con gli oggetti utenti dentro
  3. leggere array e le chiavi di ogni oggetto
        <------
  4. riversare su dom
*/

const team = [
{
  image : 'img/wayne-barnett-founder-ceo.jpg',
  nome : 'Wayne Barnett',
  role : 'CEO',
},
{
  image : 'img/angela-caroll-chief-editor.jpg',
nome : 'Angela Caroll',
role : 'chief editor',
},
{
  image : 'img/walter-gordon-office-manager.jpg',
nome : 'Walter Gordon',
role : 'office menager',
},
{
  image : 'img/angela-lopez-social-media-manager.jpg',
nome : 'Angela Lopez',
role : 'social media menager',
},
{
  image : 'img/scott-estrada-developer.jpg',
nome : 'Scott Estrada',
role : 'Developer',
},
{
  image : 'img/barbara-ramos-graphic-designer.jpg',
nome : 'Barbara Ramos',
role : 'graphic Designer',
},
]


const main = document.getElementById('main_container');

// CICLARE ARRAY CON FOR OF PER LEGGERE L OGGETTO A SUA VOLTA CICLATO PER LOGGARE LE SUE CHIAVI
let id = 0; /* per dare id univoco ad ogni card */

// per ogni oggetto trovato si genera una card...
for(let i of team){
  console.log('---------------')
  console.log(i)
  card = document.createElement ('div');
  card.className = 'card';
  id ++;
  card.id = id;
// all interno dell oggetto trovato cicla le chiavi e per ognuna si append tag e contenuti specifici alla card...
  for ( let key in i){
    console.log(i[key])
    if (key == 'nome'){
      nam = document.createElement ('h1');
      nam.innerHTML = `${i[key]}`
      card.append(nam)
      
    } else if (key == 'role') {
      rol = document.createElement ('span');
      rol.style.display ='block'
      rol.innerHTML = `${i[key]}`
      card.append(rol)

    } else if (key == 'image'){
      img = document.createElement ('img');
      img.className = 'card_photo'
      img.src = `${i[key]}`
      card.append(img)
    } else {
      console.warn('chiave non prevista')
    }
  }
  // fuori da secondo ciclo e alla fine del primo inseriamo la card completa di tutto
  main.append(card);
}
// <----------------------------- fine




