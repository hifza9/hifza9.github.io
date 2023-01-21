"use strict";

(function(){


    function DisplayHomePage() {
        let AboutUsButton = document.getElementById("AboutUsBtn");
        AboutUsButton.addEventListener("click", function (){
            location.href = "about.html"
        });
    }

        let MainContent = document.getElementsByTagName("main");
        let MainParagraph = document.createElement("p");

        MainParagraph.setAttribute("id","MainParagraph");
        MainParagraph.setAttribute("class","mt-3");
        MainParagraph.textContent = "This is Main Paragraph"

        MainContent.appendChild(MainParagraph);

        let FirstString = "This is Main Paragraph";
        let SecondString = '${FirstString} the Main Paragraph.' ;
        MainParagraph.textContent = SecondString;

        // CREATEARTICLE
        let Article = document.createElement("article");
        let ArticleParagraph = <p id="ArticleParagraph" class="mt-3"> This is my article</p>;
        Article.setAttribute("class","container")
        Article.innerHTML =ArticleParagraph;
        DocumentBody.appendChild(Article);




    function  DisplayProductsPage(){

    }

    function DisplayServicesPage(){

    }

    function DisplayAboutUsPage(){

    }
    function DisplayContactPage(){

    }

    function Start() {
        console.log("App Started!")
        switch (document.title)
        {
            case "Home":
                DisplayHomePage();
                break;
            case "Our Products":
                DisplayProductsPage();
                break;
            case "Our Services":
                DisplayServicesPage();
                break;
            case "About Us":
                DisplayAboutUsPage();
                break;
            case "Contact Us":
                DisplayContactPage();
                break
        }
    }
    window.addEventListener ("Load", Start)

})()