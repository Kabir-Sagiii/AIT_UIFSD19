function createPara() {
  //create a new paragraph element
  var pDOM = document.createElement("p");
  var h1Dom = document.createElement("h1");
  var imgDOM = document.createElement("img");

  pDOM.innerText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita maiores, quis
voluptatum obcaecati natus nobis laudantium sapiente! Illum deserunt qui ea.
Alias assumenda reprehenderit sit eius qui? Dignissimos nihil, voluptatum enim
sequi quo esse accusamus. Amet in officia necessitatibus incidunt suscipit ullam
alias perferendis porro adipisci sequi, itaque vero, rerum aut dolore nobis
`;

  h1Dom.innerText = "This is a heading";

  imgDOM.src =
    "https://www.squash.io/wp-content/uploads/2023/11/javascript-series.jpg";
  imgDOM.width = "200";
  imgDOM.height = "200";

  pDOM.style.color = "red";

  var bodyDomElement = document.querySelector("body");

  bodyDomElement.appendChild(h1Dom);
  bodyDomElement.appendChild(imgDOM);
  bodyDomElement.appendChild(pDOM);
}
