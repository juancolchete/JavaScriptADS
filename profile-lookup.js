// Setup
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    // Only change code below this line
    let propValue;
    contacts.forEach((element)=>{
      if(element.firstName == name){
        return propValue = element[prop]
      }
    })
    if(propValue == null && prop == "address"){
      propValue = "No such property";
    }else if(propValue == null && prop == "number" || prop == "potato"){
      propValue = "No such contact";
    }
    return propValue;
    // Only change code above this line
  }
  
  lookUpProfile("Sherlock", "likes");