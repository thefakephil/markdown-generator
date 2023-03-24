// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {header, markdownText, paragraph, image} from '../../../public/strings/strings'

// const headerText = header ? `${header}` : null; 
// function newString(){
//   const assembledString = `
//   ${header}
//   ${header}
// `
//   return assembledString

// }



export default function handler(req, res) {

  const query = req.query;
  const { sizeRequested } = query;
  console.log (req.query, 'in query')

  const inputMap = {
    addHeader: () => assembledString(),
    sizeRequested: () => buildParagraph(sizeRequested)
  }
  
  function includeHeader(addHeader) {
    if (addHeader === 'true') return `${header}`;
    else return
    
  }
  
  function buildParagraph(sizeRequested) {
    let size = sizeRequested;
    let newParagraph = ` `
    const sizeMap = {
      small: 1,
      medium: 2,
      large: 3
    }
    // if (!sizeRequested) return;
    for (let i = 1; i <= sizeMap[size]; i++) {
      newParagraph += `${paragraph}
  
  `;
    }
    console.log('new para', newParagraph)
    console.log('size req', size)
    return `${newParagraph}`
  }
  
  function assembledString() {
    // const headerText = addHeader ? `${header}` : null; 
    return `${header}
  
  `
  }
  
  
  function createQuery(input) {
  
    let newArray = []
    let stringOutput = []
    // Object.values(input).forEach(val => newArray.push(val));
  
    // const looped = newArray.forEach((x, i) => console.log('x', x));
    for (const key in input) {
      if (input.hasOwnProperty(key) && input[key] != 'false') {
        // console.log('key', key)
        newArray.push(key)
        // stringOutput += `${Object.value[inputMap.input[value]]}`
      }
    }
  
    const looped = newArray.forEach((x, i) => stringOutput.push(inputMap[newArray[i]]));
    // console.log('newArray', newArray)
    return newArray
  }

  const strGenerator = createQuery(query);
  let str = ``
  for (const item of strGenerator) {
    str += inputMap[item]();
  }

//  const str = `${inputMap.addHeader()}`
//  console.log('str', str)


  res.status(200).json((str))
}

 
