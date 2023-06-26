import { OPEN_AI_PRIVATE_KEY } from "@env";


export const getPoem = async(name  ,toName , feelings)=>{
    const response = await fetch(`https://api.openai.com/v1/completion`,{
        method : "POST",
        header : {
            "Content-type" : "application/json",
            Authorization : `Bearer ${OPEN_AI_PRIVATE_KEY}`,
        },
        body : JSON.stringify({
            model : "text-davinci-003",
            prompt : `I am ${name}. I love ${toName}. Write a poem. ${feelings}`,
            max_tokens  :256 , 
            temprature : 0.7,
            top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
        })
    })

    const data = await response.json();
    return data.choices[0].text;
}