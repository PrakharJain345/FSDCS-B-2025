const parent=document.getElementById("parent");
// console.log(parent);
const root = ReactDOM.createRoot(parent);
// const h2 = React.createElement("h2", {style:{color:"brown",backgroundColor:"pink"}}, "Welcome to React App");

// const list = React.createElement("li",{},"Java");
// const list1 = React.createElement("li",{},"C++");
// const list2 = React.createElement("li",{},"Python");
// const ul = React.createElement("ul", {style:{listStyleType:"none", backgroundColor:"lightgray",color:"blue"}}, list,list1,list2);

// const pic= React.createElement("img", {src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9JUm2wyp6OQoa1rsWY_oQ-nMWS85NJLEiMA&s", style:{height:200,width:200,borderRadius:"50%",border:"2px solid black"}});
// const myname= React.createElement("h3", {style:{color:"green"}}, "Panda");

// const wrapper1 = React.createElement("div", {style:{display:"flex", alignItems:"center", gap:"1rem"}}, pic,myname);
// const wrapper = React.createElement("div", {style:{}}, h2,wrapper1,ul);
// // root.render(h2);
//root.render(wrapper);

//JSX
const h2= <h2 style={{color:"brown",backgroundColor:"pink"}}>Hello using JSX</h2>;
const li=<li>Java</li>;
const li1=<li>C++</li>;
const li2=<li>Python</li>;
const ul=<ul style={{listStyleType:"none", backgroundColor:"lightgray",color:"blue"}}>{li}{li1}{li2}</ul>;
const container =(
<>
{h2}
{ul}
</>

)

    root.render(container);