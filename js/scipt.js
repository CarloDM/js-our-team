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
console.log('team array', team)

const main = document.getElementById('main_container');

// CICLARE ARRAY CON FOR OF PER LEGGERE L OGGETTO A SUA VOLTA CICLATO PER LOGGARE LE SUE CHIAVI
id = 0;
for(let i of team){
  console.log(i)
  card = document.createElement ('div');
  card.className = 'card';
  id ++;
  card.id = id;
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
      console.warn('condizione sconosciuta')
    }

    main.append(card);
  }
}





