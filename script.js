const taxis = [{
  type: "Econome",
  mark: "Toyota",
  name: "Toyota 1",
  imgsrc: "taxi1.jpg",
},{
  type: "Standart",
  mark: "Audi",
  name: "Audi 1",
  imgsrc: "taxi2.jpg",
},{
  type: "Comfort",
  mark: "Nissan",
  name: "Nissan 1",
  imgsrc: "taxi3.jpg",
},{
  type: "Econome",
  mark: "Nissan",
  name: "Nissan 2",
  imgsrc: "taxi4.jpg",
},{
  type: "Standart",
  mark: "BMW",
  name: "BMW 1",
  imgsrc: "taxi5.jpg",
},{
  type: "Comfort",
  mark: "Toyota",
  name: "Toyota 2",
  imgsrc: "taxi6.jpg",
},{
  type: "Econome",
  mark: "BMW",
  name: "BMW 2",
  imgsrc: "taxi7.jpg",
},{
  type: "Standart",
  mark: "Nissan",
  name: "Nissan 3",
  imgsrc: "taxi8.jpg",
},{
  type: "Comfort",
  mark: "Audi",
  name: "Audi 2",
  imgsrc: "taxi9.jpg",
},{
  type: "Econome",
  mark: "Audi",
  name: "Audi 3",
  imgsrc: "taxi10.jpg",
},{
  type: "Standart",
  mark: "Toyota",
  name: "Toyota 3",
  imgsrc: "taxi11.jpg",
},{
  type: "Comfort",
  mark: "BMW",
  name: "BMW 3",
  imgsrc: "taxi12.jpg",
}];
const lookup = { type: ['Econome','Standart','Comfort'], mark: ['Toyota', 'Audi', 'Nissan', 'BMW', 'Any'] };

// shuffle array
var i = taxis.length, j, temp;
while(--i > 0){
  j = Math.floor(Math.random()*(i+1));
  temp = taxis[j];
  taxis[j] = taxis[i];
  taxis[i] = temp;
}
const getSearch =()=> document.getElementById('search').value.toLowerCase();
const filterTaxis = (key) => ((key=='Any') ? taxis : taxis.filter(x => x.type==key || x.mark==key)
).filter(x=>x.name.toLowerCase().includes(getSearch()));
let perpage = 3;
let currpage = 1;
const page = (pageid,filter) => [...filterTaxis(filter)].slice(perpage*(pageid-1), perpage*pageid);
const upd =()=> { console.log('upd'); document.getElementById('pagination').innerHTML = page(currpage,document.getElementById('filter').value).map(template).join('') };
const template = (obj) => `
<flex class="pagination-card" style="background-image:url('./img/taxis/${obj.imgsrc}')">
  <div class="pagination-card-title">${obj.name}</div>
  <div class="pagination-card-type">${obj.type}</div>
</flex>
`;
upd();

document.getElementById('pagination-prev').onclick = ()=>{
  currpage--; if(currpage==0) currpage = Math.ceil(filterTaxis(document.getElementById('filter').value).length/perpage); upd();
};
document.getElementById('pagination-next').onclick = ()=>{
  currpage++; if(currpage>Math.ceil(filterTaxis(document.getElementById('filter').value).length/perpage)) currpage = 1; upd();
};
document.getElementById('filter').onchange = ()=>{
  currpage=1;
  perpage = 3 + !(lookup.mark.includes(document.getElementById('filter').value));
  upd();
};
document.getElementById('search').oninput = _.debounce(upd,250);