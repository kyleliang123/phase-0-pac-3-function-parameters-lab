function introduction(name1, name2) {
    return(`Hi, my name is ${name1}.`)
    return(`Hi, my name is ${name2}.`)
}
    introduction("Aki", "Samip")

function introductionWithLanguage(firstName, language) {
    return(`Hi, my name is ${firstName} and I am learning to program in ${language}.`)
}
    introductionWithLanguage("Aki", "Ember.js")
    introductionWithLanguage("Samip", "React")

function introductionWithLanguageOptional(name3, language1 = "JavaScript"){
    return(`Hi, my name is ${name3} and I am learning to program in ${language1}.`)
}