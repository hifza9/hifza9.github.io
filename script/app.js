"use strict";

(function(){


    function DisplayHomePage(){
        console.log("Home Page Called!");

        $("#AboutUsBtn").on("click", () => {
            location.href = "about.html"
        });

        $("main").append(`<p id="MainParagraph" class="mt-3" >This is the main Paragraph</p>`);
        $("body").append(`<article class="container">
                                         <p id="ArticleParagraph" class="mt-3">This is my article paragraph</p> </article>`)

    }


    function  DisplayProductsPage(){
        console.log("Product Page Called!")
    }

    function DisplayServicesPage(){
        console.log("Service Page Called!")
    }

    function DisplayAboutUsPage(){
        console.log("About Us Page Called!")
    }
    function DisplayContactPage() {
        console.log('Contact Us Page Called!');

        let sendButton = document.getElementById("sendButton");
        let SubscribeCheckbox = document.getElementById("SubscribeCheckbox");


        sendButton.addEventListener("click", function (event) {

            if (SubscribeCheckbox.checked) {

                let contact = new Contact(fullName.value, contactNumber.value, emailAddress.value);
                if (contact.serialize()) {
                    let key = contact.FullName.substring(0, 1) + Date.now();
                    localStorage.setItem(key, contact.serialize());
                }
            }
        });

    }
    function DisplayContactListPage(){
        console.log("Contact List Page Called!");
        if (localStorage.length > 0){
            let contactList = document.getElementById("contactList");
            let data = "";  //add deserialized data from localstorage

            let keys = Object.keys(localStorage); //return a string  array  of keys
            let index = 1;
            for(const key of keys){
                let contactData = localStorage.getItem(key);
                let contact = new Contact();
                contact.deserialize(contactData);
                data += `<tr><th scope="row" class="text-center">${index}</th>
                        <td>${contact.FullName}</td>
                         <td>${contact.ContactNumber}</td>
                         <td>${contact.EmailAddress}</td>
                         
                         <td class="text-center">
                         <button value="${key}" class="btn btn-primary btn-sm edit">
                                        <i class="fas fa-edit fa-sm"></i> Edit</button>
                                        
                          <td class="text-center">
                         <button value="${key}" class="btn btn-danger btn-sm delete">
                                        <i class="fas fa-trash-alt fa-sm"></i> Delete</button>             
                         
                         
                         </td>
                         
                          </tr>`;
                index++;
            }
            contactList.innerHTML = data;

            $("#addButton").on("click",() => {
               location.href = "edit.html#add"
            });


        }
    }
    function DisplayEditPage(){
        console.log("Edit Page");

        let page = location.hash.substring(1);

        switch(page) {
            case"add":

                $("main>h1").text("Add Contact");
                $("#editButton").html(`<i class="fas fa-plus-circle fa-sm"></i> Add`);

                $("editButton").on("click", (event) => {
                });

                break;
            default:{

                //edit operation code
            }
        }
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
            case "Contact List":
                DisplayContactListPage();
                break
            case "Edit Contact":
                DisplayEditPage();
                break
        }
    }
    window.addEventListener ("Load", Start)



})()