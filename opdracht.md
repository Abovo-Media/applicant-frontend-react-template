# Home pagina

* Haal data op via een API call van de volgende url: localhost:3000/api/v2/orders
* Sla deze data op in een state management library (redux, pinia, etc.)
* Maak een tabel met de volgende kolommen: id, name, email, product, price, quantity, total
    * Deze tabel moet kunnen sorteren op de kolommen
    * Deze tabel moet kunnen filteren op de kolommen
    * Deze tabel moet kunnen pagineren
    * Op het klikken van de rij moet er genavigeerd worden naar een detail pagina dmv. een router
* Op de homepage moet een formulier komen die een nieuwe entry kan aanmaken
    * Valideer de input van het formulier (naam, product, price) zijn required

# Detail pagina

* Laat de data zien uit de store dmv. een route param
    * Loop door de data properties heen en toon de key en value in een lijst
    * Formatteer de data waar nodig (price, quantity, dates)
    * extra: toon de lat + lang coordinaten op een google map (of een andere map provider)

## Notes

* [Figma Prototype](https://www.figma.com/file/KuQWnLEb6mpAAWarzQzGv1/Sollicitatie-proefopdracht-template?node-id=0%3A1&t=6RDLM5gqeNpLBweI-1)
* Gebruik [TailwindCSS](https://tailwindcss.com/) + [Flowbite React](https://flowbite-react.com/) voor de styling +
  components. Je mag ook zelf styling schrijven.
* Zorg ervoor dat de app goed bruikbaar is op mobiele formaten
* Weet je nog wat cools te verzinnen? Doe het!

![Alt Text](https://repository-images.githubusercontent.com/43623432/e3756280-e50c-11e9-877f-24272543fd9c)
