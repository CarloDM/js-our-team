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

const main = document.getElementById('main_container');
console.log(main)

// CICLARE ARRAY CON FOR OF PER LEGGERE L OGGETTO A SUA VOLTA CICLATO PER LOGGARE LE SUE CHIAVI
id = 0;
for(let i of team){
  console.log(i)
  card = document.createElement ('div');
  card.className = 'card';
  id ++;
  card.id = id;
  for ( let key in i){
    console.log(key)
    if (key == 'nome'){
      console.log('condizione nome è vera')
      nam = document.createElement ('h1');
      nam.innerHTML = `${i[key]}`
      card.append(nam)
      
    } else if (key == 'role') {
      console.log('condizione role è vera')
      rol = document.createElement ('span');
      rol.innerHTML = `${i[key]}`
      card.append(rol)

    } else if (key == 'image'){
      console.log('condizione image è vera')
      img = document.createElement ('img');
      img.src = `${i[key]}`
      card.append(img)
    } else {
      console.log('condizione sconosciuta')
    }

    main.append(card);
  }
}





