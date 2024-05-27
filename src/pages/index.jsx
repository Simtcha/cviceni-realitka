import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/Header';
import { Estate } from '../components/Estate'


const cesta = window.location.pathname
const house = cesta.slice(0, cesta.indexOf('.'))
console.log(house)

const response = await fetch (`https://apps.kodim.cz/daweb/trening-api/apis/realitka${house}`);
const data = await response.json()
console.log(response)

const { title, text, price, city, contact, photo } = data;
const { name, email, phone } = contact;

document.querySelector('#root').innerHTML = render(
  <div className="container">
    <Header />
    <Estate 
      title={title} 
      text={text} 
      price={price}
      city={city}
      name={name}
      email={email}
      phone={phone}
      photo={photo}
    />
  </div>
);





/*
const inzerattitle = data.title
const inzerattext = data.text
const inzeratprice = data.price
const inzeratcity = data.city
const inzeratname = data.contact.name
const inzeratemail = data.contact.email
const inzeratphone = data.contact.phone
const photo = data.photo

document.querySelector('#root').innerHTML = render(
  <div className="container">
    <Header/>
    <Estate 
    title={inzerattitle} 
    text={inzerattext} 
    price={inzeratprice}
    city={inzeratcity}
    contactname={inzeratname}
    contactemail={inzeratemail}
    contactphone={inzeratphone}
    photo={photo}
    />
    
  </div>  */



/*
"title": "Vilka na předměstí",
"text": "Tato elegantní vila na předměstí je dokonalým spojením luxusu a pohodlí. Nachází se v klidné čtvrti, obklopená stromy a krásnou zahradou, což vytváří pocit soukromí a klidu. Rozlehlý obývací prostor s vysokými stropy a velkými okny přináší do domu spoustu přirozeného světla. Velká kuchyně s moderními spotřebiči je snem každého kuchaře. Navíc máte k dispozici venkovní terasu a bazén, ideální pro rodinné grilování a relaxaci.",
"price": 26000000,
"city": "Malopotocké Údolí",
"contact": {
  "name": "Roman Blažek",
  "email": "roman.blazek@realitka.cz",
  "phone": "+420 606 707 808"
},
"photo": "https://apps.kodim.cz/daweb/trening-api/assets/house02.jpg"
} */