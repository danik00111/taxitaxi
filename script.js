const taxis = [{
  type: "Econome",
  mark: "Toyota",
  imgsrc: "taxi1.jpg",
},{
  type: "Standart",
  mark: "Audi",
  imgsrc: "taxi2.jpg",
},{
  type: "Comfort",
  mark: "Nissan",
  imgsrc: "taxi3.jpg",
},{
  type: "Econome",
  mark: "Nissan",
  imgsrc: "taxi4.png",
},{
  type: "Standart",
  mark: "BMW",
  imgsrc: "taxi5.jpg",
},{
  type: "Comfort",
  mark: "Toyota",
  imgsrc: "taxi6.jpg",
},{
  type: "Econome",
  mark: "BMW",
  imgsrc: "taxi7.jpg",
},{
  type: "Standart",
  mark: "Nissan",
  imgsrc: "taxi8.jpg",
},{
  type: "Comfort",
  mark: "Audi",
  imgsrc: "taxi9.jpg",
},{
  type: "Econome",
  mark: "Audi",
  imgsrc: "taxi10.jpg",
},{
  type: "Standart",
  mark: "Toyota",
  imgsrc: "taxi11.jpg",
},{
  type: "Comfort",
  mark: "BMW",
  imgsrc: "taxi12.jpg",
}];

// shuffle array
var i = taxis.length, j, temp;
while(--i > 0){
  j = Math.floor(Math.random()*(i+1));
  temp = taxis[j];
  taxis[j] = taxis[i];
  taxis[i] = temp;
}
const page = (pageid,arr=taxis,perpage=2) => [...arr].slice(perpage*(pageid-1), perpage*pageid);
let currpage = 1;
const upd = () => { document.getElementById('pagination').innerHTML = page(currpage).map(template).join('') };
const template = (obj) => `
<flex class="pagination-card" style="background-image:url('./img/taxis/${obj.imgsrc}')">
  <div class="pagination-card-title">${obj.mark}</div>
  <div class="pagination-card-type">${obj.type}</div>
</flex>
`;
upd();

const filter = obj => {
  const filterby = Object.keys(obj)[0];
  return taxis.filter(x => x[filterby] === obj[filterby]);
}

document.getElementById('pagination-prev').onclick = ()=>{
  currpage--; if(currpage==0) currpage = 4; upd();
};
document.getElementById('pagination-next').onclick = ()=>{
  currpage++; if(currpage==5) currpage = 1; upd();
};