(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{151:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(29),o=a.n(l),c=(a(73),a(74),a(12)),s=a(152),i=a(24),m=a.n(i),u=function(){var e=Object(n.useState)(!1),t=Object(c.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){setTimeout(l(!0),2e3)}),[]),r.a.createElement(s.a,{in:a,timeout:4e3,classNames:"header-transition",appear:!0},r.a.createElement("header",{className:m()("App-header","header-transition--active")},r.a.createElement("img",{alt:"",src:"pic.jpeg"}),r.a.createElement("div",null,r.a.createElement("h1",null,"Paul Rose"),r.a.createElement("h3",null,"Software Engineer "),r.a.createElement("h3",null,"React, Redux, Node.js, Rails "),r.a.createElement("div",{className:"header-links"},r.a.createElement("a",{href:"https://github.com/rose-paul",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{alt:"",src:"001-github.png"})),r.a.createElement("a",{href:"https://www.linkedin.com/in/paul-rose-72626952/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{alt:"",src:"002-linkedin.png"})),r.a.createElement("a",{href:"mailto:prose0021@gmail.com"},r.a.createElement("img",{alt:"",src:"003-email.png"})),r.a.createElement("a",{href:"Paul_Rose_Resume.pdf",download:"PaulRoseResume"},r.a.createElement("img",{src:"cv.png",alt:""}))))))},p=(a(77),function(){var e=Object(n.useState)("hidden"),t=Object(c.a)(e,2),a=(t[0],t[1]),l=Object(n.useState)("hidden2"),o=Object(c.a)(l,2),s=(o[0],o[1]);return Object(n.useEffect)((function(){setTimeout(a("transform"),2e3,s("about"),500)}),[]),r.a.createElement("div",{className:"flex-wrapper"},r.a.createElement("img",{id:"transform",src:"about.jpg",alt:""}),r.a.createElement("section",{className:"about"},r.a.createElement("h2",null,"About Me"),r.a.createElement("p",null,"Skills: React, Redux, JavaScript, Node.js, Ruby on Rails, Mapbox, SQL, PostgresSQL, MongoDB"),r.a.createElement("article",null,"I came into the tech realm as a developer following my previous work teaching English at tech companies in Moscow. I do fullstack web development and enjoy all aspects, from page design to system design. My most recent endeavors have focused on engineering in Javascript and React. I value teamwork and continual growth."),r.a.createElement("article",null,"Outside of programming, I love to travel. I was fortunate to explore a lot of places during my time in Moscow, both in the country and the surrounding region. To the left is from the Krasnodar region on top of the mountain Indyuk. Feel free to reach out if you want to chat more!")))}),d=function(){var e=function(e){e.target.style="",e.target.className=""};return r.a.createElement("section",{className:"projects"},r.a.createElement("h2",null,"Projects"),r.a.createElement("div",null,r.a.createElement("div",{id:"single-project"},r.a.createElement("a",{href:"http://ride-mern.herokuapp.com/#/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{alt:"",src:"wheel-128.png",onMouseEnter:function(e){e.target.className="rotate"},onMouseLeave:e}),r.a.createElement("p",null,"Ride")),r.a.createElement("div",null,r.a.createElement("p",null,'Ride is a web application targeting the motorcycling enthusiast community. It allows a user to record a ride on a map and peruse all saved rides. Use the "post" a ride feature to share it or stop by Ride and find your next adventure. Leave the community your nugget of wisdom in a ride review. Our aim is to enhance the enjoyment of two wheeled riding everywhere.',r.a.createElement("ul",null,r.a.createElement("li",null,"Frontend: React / Redux, Mapbox"),r.a.createElement("li",null,"Backend: Express.js"),r.a.createElement("li",null,"DB: MongoDB"))))),r.a.createElement("div",{id:"single-project"},r.a.createElement("div",null,r.a.createElement("a",{href:"https://gramcrackers.herokuapp.com/#/login",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{alt:"",src:"gramcrackers.png",onMouseEnter:function(e){var t="rotateY(35deg)";e.target.style.transform=t,e.target.style.webkitTransform=t,e.target.style.mozTransform=t,e.target.style.msTransform=t,e.target.style.oTransform=t},onMouseLeave:e}),r.a.createElement("p",null,"Gramcrackers"))),r.a.createElement("div",null,r.a.createElement("p",null,"Gramcrackers, an Instagram clone, is a social media app that allows users to post photos and interact with other users through following, comments and likes.",r.a.createElement("ul",null,r.a.createElement("li",null,"Frontend: React / Redux"),r.a.createElement("li",null,"Backend: Ruby on Rails"),r.a.createElement("li",null,"DB: PostgreSQL, AWS S3"))))),r.a.createElement("div",{id:"single-project"},r.a.createElement("a",{href:"https://rose-paul.github.io/MoscowCows/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{alt:"",src:"matryoshka.png",onMouseEnter:function(e){e.target.className="shake"},onMouseLeave:e}),r.a.createElement("p",null,"Moscow Cows")),r.a.createElement("div",null,r.a.createElement("p",null,"In Moscow Cows, a game implemented in JavaScript using the HTML5 canvas tag, players must successfully collect full sets of Russian nesting dolls while avoiding being trampled by a herd of cows.",r.a.createElement("ul",null,r.a.createElement("li",null,"Frontend: JavaScript, HTML5 Canvas")))))))},g=a(20),E=a(15),h=function(){var e=Object(n.useState)(!1),t=Object(c.a)(e,2),a=(t[0],t[1]);return Object(n.useEffect)((function(){setTimeout(a(!0),2e3)}),[]),r.a.createElement("header",{className:m()("navbar","header-transition--active")},r.a.createElement(g.b,{to:"/"},"Home"),r.a.createElement(g.b,{to:"/about"},"About"),r.a.createElement(g.b,{to:"/projects"},"Projects"))};var f=function(){return r.a.createElement(g.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(h,null),r.a.createElement(E.c,null,r.a.createElement(E.a,{exact:!0,path:"/",component:u}),r.a.createElement(E.a,{exact:!0,path:"/about",component:p}),r.a.createElement(E.a,{exact:!0,path:"/projects",component:d})),r.a.createElement("p",{id:"copyright"},"\xa9 2020 Paul Rose ")))};document.addEventListener("DOMContentLoaded",(function(){o.a.render(r.a.createElement(f,null),document.getElementById("root"))}))},68:function(e,t,a){e.exports=a(151)},73:function(e,t,a){},74:function(e,t,a){},84:function(e,t){},86:function(e,t){}},[[68,1,2]]]);
//# sourceMappingURL=main.d5481fa9.chunk.js.map