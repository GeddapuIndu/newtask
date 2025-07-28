console.log("hello world");
const a=3;
const b=7;
const sum=a+b;
console.log(sum);

var myVar=23;
const  d=myVar++;
console.log(d);

//compound addition 

let e=10;
let f=20;
let g=30;
 let h=e+f;
 let i=f+g;
 let j=h+i;
 console.log(j);

 const myStr = "Alan said, \"Peter is learning JavaScript\".";
console.log(myStr); 

const myStr1 = "hello, "
const myStr2="I am Indu";
const myStr3=myStr+myStr1
console.log(myStr3);
 // Change this line


 let var1="hello ";
 var1+="This is example program";
 console.log(var1)
// Only change code below this line

const myName = "indu";
const myStr7 = "My name is "+myName+" and I am well";
console.log(myStr7);

// Setup
const lastName = "Lovelace";
// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length-2];
console.log(secondToLastLetterOfLastName) // Change this line



 var str1="hello indu";
 var str2="this is an example program";
 var str3=[str1,str2];
 console.log(str3)

const input = `Alicella gigantea is a giant species of amphipod that lives in the deep sea. Sometimes referred to as the "supergiant amphipod", the largest of these crustaceans reach up to 34 cm (13 in) in length. It is the only species within the genus Alicella. This species only lives in the deep sea at 4,850–7,000 m (15,910–22,970 ft) in depth. The species is pale in colour and is distinguished from other deep sea amphipods by minute anatomical differences, apart from size in the larger specimens. The large size of the species is often presented as an example of abyssal gigantism, though the specifics of this trait remain under investigation. Genetic studies into the species have found that it has an exceptionally large genome, which may be linked to its large body size. It was first collected and described in the 1890s from the Madeira Abyssal Plain off the Canary Islands. Although it is rarely detected, A. gigantea is a cosmopolitan species and can potentially occur in 59% of the world's oceans. Their diet varies with age, but they are primarily scavengers of carrion. Like other amphipods, female A. gigantea brood their eggs in pouches. Individuals of the species are inferred to have an unusually long life span and can reach over 10 years in age. Despite their relative isolation from the surface, human pollutants such as DDT and chlordane have been detected in specimens.`;
 
const output = [];
const sentences = input.split('.');
 
for (let i = 0; i < sentences.length; i++) {
  const trimmed = sentences[i].trim();
  if (trimmed.length > 0) {
    output.push(`"${trimmed}."`);
  }
}
 
console.log(output);
 
 function chainToSwitch(val) {
  let answer = "";

  switch (val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
    default:
      answer = "";
      break;
  }

  return answer;
}

// Example calls
console.log(chainToSwitch("bob"));  // "Marley"
console.log(chainToSwitch(42));     // "The Answer"
console.log(chainToSwitch(1));      // "There is no #1"
console.log(chainToSwitch(99));     // "Missed me by this much!"
console.log(chainToSwitch(7));      // "Ate Nine"
console.log(chainToSwitch("John")); // ""
console.log(chainToSwitch(156));    // ""



let count = 0;

function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--;
      break;
    case 7:
    case 8:
    case 9:
      // No change
      break;
  }

  return count > 0 ? `${count} Bet` : `${count} Hold`;
}

// Call the function and print the result
console.log(cc(2));    // "1 Bet"
console.log(cc(3));    // "2 Bet"
console.log(cc('K'));  // "1 Bet"
console.log(cc(7));    // "1 Bet"
console.log(cc('A'));  // "0 Hold"
