const parent = document.getElementById('parent');
console.log(parent);

const root = ReactDOM.createRoot(parent);
// const li3 = React.createElement('li',{},"React");
// root.render(li3);
const pic = React.createElement('img',{src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9JUm2wyp6OQoa1rsWY_oQ-nMWS85NJLEiMA&s',style:{border:'2px solid orange',width:'150px',height:'100px',borderRadius:'20px',marginRight:'10px',padding:'5px'}});
const li1 = React.createElement('li',{},"Prakhar Jain");
const li2 = React.createElement('li',{},"CS");
const li3 = React.createElement('li',{},"B");
const li4 = React.createElement('li',{},"ABESEC");

const ul = React.createElement("ul",{style:{textAlign:'center',listStyleType:'none',color:'blue'}},li1,li2,li3,li4);
const wrapper1 = React.createElement('div',{style:{width:'200px',display:'flex flex:column',border:'2px solid black'}},pic,ul);
root.render(wrapper1);