//This line retrieves the HTML element with the ID "result" and assigns it to the result variable. This element will be used to display the fetched word and its meaning.
const result = document.getElementById("result");

//Here, a function named x is defined. This function uses the Fetch API to send a GET request to the Dictionary API with the word "hello" as the search term. The response is received as a Promise.
const x = () =>
  fetch("https://api.dictionaryapi.dev/api/v2/entries/en/cat")
    // The first .then() block converts the response to JSON format,
    .then((response) => response.json())
    //the second .then() block receives the JSON data.
    .then((data) => {
      //This line clears the existing content of the result element by setting its textContent to an empty string. This ensures that any previous results are removed before displaying the new result.
      result.textContent = "";

      // Code for handling the fetched data

      //These lines create a new <div> element and assign it to the wordDiv variable. The word class is added to this <div> element using classList.add()
      const wordDiv = document.createElement("div");
      wordDiv.classList.add("word");

      //a new <h3> element is created and assigned to the wordHeading variable. The text content of the <h3> element is set to "ball". The <h3> element is then appended as a child to the wordDiv element.
      const wordHeading = document.createElement("h3");
      wordHeading.textContent = "cat";
      wordDiv.appendChild(wordHeading);

      //These lines create a new <p> element and assign it to the meaningParagraph variable. The word-meaning class is added to this <p> element. The text content of the <p> element is set to the definition of the fetched word. The meaningParagraph element is appended as a child to the wordDiv element.
      const meaningParagraph = document.createElement("p");
      meaningParagraph.classList.add("word-meaning");
      meaningParagraph.textContent =
        data[0].meanings[0].definitions[0].definition;
      wordDiv.appendChild(meaningParagraph);

      //Finally, the wordDiv element, containing the word and its meaning, is appended as a child to the result element. This will display the word and its meaning within the result section of the HTML page
      result.appendChild(wordDiv);
    });

x();
