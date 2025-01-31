export const  homePage = () => {
    
    const content = document.querySelector(".content");
    content.textContent = "";
    const h1 = document.createElement("h1");
    h1.id  = "title";
    h1.textContent = "Some text"
    
    const p  = document.createElement("p");
    p.id= "description";
    p.textContent = "Some description";
    content.append(h1, p);
  

}