const addPerson = (person)=>{
  // create the li that will contain all this person's info
  let li = document.createElement("li");

  // the h2 that contains their name is one part
  const nameH2 = document.createElement('h2')
  nameH2.innerText = `${person.name.title} ${person.name.first} ${person.name.last}`

  // the p that contains their contact info is next
  const contactParagraph = document.createElement('p')
  contactParagraph.innerText = `Email: ${person.email}, Cell: ${person.cell}`

  // image is last
  const picture = document.createElement('img')
  picture.src = person.picture.thumbnail
  
  // put all 3 components into the li
  li.append(nameH2)
  li.append(contactParagraph)
  li.append(picture)
    
  // put the li into the list
  document.querySelector('#people-list').appendChild(li);
}


document.addEventListener("DOMContentLoaded", ()=>{
  const requestUrl = "https://randomuser.me/api/?results=10";

  fetch(requestUrl)
  .then((responseData)=>{
      return responseData.json();
  })
  .then((jsonData)=>{
      // wipe out the Loading... text before putting the people in
      document.querySelector('#people-list').innerText = ''

      // put the people into the list
      let people = jsonData.results;
      people.forEach(p => addPerson(p));
  })
  .catch((error)=>{
      // If any error is sent bac, you will have access to it here.
      console.log("error!!!:", error);
  });
});
