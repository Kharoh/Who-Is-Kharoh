const generatePickUserName = (setUserInfos: Function) => {
  return () => {
    const nouns = [
      "Concombre",
      "Chevalier",
      "Aubergine",
      "Templier",
      "Tempête",
      "Cheval",
      "Cerise",
      "Edouard",
      "Comte",
      "Prince",
      "Princesse",
      "Eléphant",
      "Canard",
      "Etoile",
      "Héro",
      "Fantôme",
      "Gardien",
      "Dame",
      "Voyageur",
      "Maître",
      "Ministre",
      "Commandant",
      "Capitaine",
      "Sénateur",
      "Roi",
      "Prêtre",
      "Radis",
      "Général",
      "Soldat",
      "Soupe",
      "Fourchette",
      "Sorcier",
      "Amphibien",
      "Méduse",
      "Caravane",
    ]
    const adjectives = [
      "Flamboyant",
      "Fantastique",
      "De la mort",
      "De la muerte",
      "Surpuissant",
      "Gigantesque",
      "Rouge",
      "Bleu",
      "Généreux",
      "Du feu",
      "De l'eau",
      "Rafistolé",
      "En lambeau",
      "Obèse",
      "De guerre",
      "Hélicoptère",
      "Magique",
      "Hermaphrodite",
      "Mystique",
    ]

    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)]
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)]

    const userName = `${randomNoun} ${randomAdjective}`

    setUserInfos({ name: userName, isUserNamePicked: true })
  }
}

export default generatePickUserName
