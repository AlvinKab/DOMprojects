let btn = document.querySelector("#new-quote")
let quote = document.querySelector(".quote")
let person = document.querySelector(".person")

const quotes = [
    {
        quote:`"I figured something out. The future is unpredictable."`,
        person:`John Green, An Abundance of Katherines`
    },
    {
        quote:`“A day without sunshine is like, you know, night.”`,
        person:`Steve Martin`
    },
    {
        quote:`“There's just something obvious about emptiness, even when you try to convince yourself otherwise. ”`,
        person:`Sarah Dessen, Lock and Key`
    },
    {
        quote:`“The right thing isn't always real obvious. Sometimes the right thing for one person is the wrong thing for someone else. So...good luck figuring that out.”`,
        person:`Stephenie Meyer, Twilight`
    },
    {
        quote:`“Accomplishments don’t erase shame, hatred, cruelty, silence, ignorance, discrimination, low self-esteem or immorality. It covers it up, with a creative version of pride and ego. Only restitution, forgiving yourself and others, compassion, repentance and living with dignity will ever erase the past.”`,
        person:`Shannon L. Alder`
    }
]

btn.addEventListener("click", function(){
    let random = Math.floor(Math.random() * quotes.length)
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})