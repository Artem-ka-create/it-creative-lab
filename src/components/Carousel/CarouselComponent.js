import Carousel from "react-multi-carousel";
import Item from "./Item";


function CarouselComponent(){

  const projectData = [
    {
      name:'Energia je budúcnosť sveta',
      schoolName: 'Gymnázium , Alejová 1',
      description: 'Študenti vytvoria interaktívnu mapu obnoviteľných zdrojov energie v širšom okolí. Produkt by mal byť výstupom projektu Erasmus+ "Energy is the future of the world".'
    },
    {
      name:'Škola online',
      schoolName: 'Gymnázium, Opatovská cesta 7',
      description: 'Monitorovanie teploty, svetla na chodbách v škole a následne publikovanie informácii na web. Cieľom je využitie IoT sád pre micro:bit a spoznávanie IoT technológie.'
    },
    {
      name:'Inteligentná permakultúrna záhrada',
      schoolName: 'Gymnázium P.J.Šafárika',
      description: '"Východisko: Škola získala v rámci projektu ""Ekologicky sa zeleniť, je časom overený hit""  realizovaného cez Nórske fondy prostriedky na realizáciu permakultúrnej záhrady, ktorá sa nachádza v areáli školy.  Jej súčasťou sú nádoby na zber ďažďovej vody, vyvýšené záhony s rôznymi typmi rastlín. Cieľ projektu: Realizovať inteligentnú školskú záhradu, vybrať a inštalovať vhodné senzory.   Vytvoriť jednoduchú aplikáciu, v ktorej budú môcť používatelia získať údaje o prostredí v záhrade v reálnom čase, ako je napríklad momentálna teplota a vlhkosť v jednotlivých častiach s rôznymi typmi rastlín.  Nainštalovať kameru – resp. fotopascu v kritických oblastiach, ktoré je potrebné monitorovať napr. proti vandalom a iným neželaným návštevníkom.  Projekt je náročnejší aj finančne vzhľadom na to, že je potrebné vyriešiť napájanie zariadení a pripojenie k internetu .'
    },
    {
      name:'Aplikácia prvej pomoci',
      schoolName: 'Gymnázium Trebišovská ',
      description: 'Mobilná aplikácia prvej pomoci bude vždy po ruke, keď ju bude treba. Napriek tomu, že každý z nás by mal ovládať poskytnutie prvej pomoci, my si uvedomujeme, že v krízových situáciách môže človek zažiť šok a všetko zabudnúť. Táto aplikácia by poskytovala podrobný návod na zvládnutie rôznych situácií. Sprevádzala by nás všetkými potrebnými krokmi.'
    },
    {
      name:'Mobilná aplikácia - testy na autoškolu',
      schoolName: 'Gymnázium Trebišovská ',
      description: 'Študenti vytvoria interaktívnu mapu obnoviteľných zdrojov energie v širšom okolí. Produkt by mal byť výstupom projektu Erasmus+ "Energy is the future of the world".'
    },
    {
      name:'Kvalita vzduchu v učebniach',
      schoolName: 'Gymnázium, Komenského 32',
      description: '"Cieľom projektu je vytvorenie aplikácie, ktorá by bola využiteľné v bežnom živote školy Hnacím motorom pre zapojenie je vyskúšať nové možnosti, naučiť sa spolupracovať v tíme a získať nové, zaujímavé poznatky a zručnosti od ľudí z praxe. \n Tím: Ervín Karvaš a Iveta Lešková \n Vytvorenie aplikácie, ktorá by merala kvalitu vzduchu, teplotu vzduchu, vlhkosť, baktérie... \nv učebniach pomocou senzorov na kvalitu vzduchu. V aplikácii by sa dali pozrieť vybrané učebne (podľa poctu senzorov) a informácie o nich. Aplikácia by zaslala hlásenie používateľovi v prípade, že by kvalita vzduchu nebola dobra (upozornenie na vyvetranie a podobne) Cena za senzor cca 50 eur'
    }
  ]

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1800 },
            items: 5
          },
        largeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 1800, min: 1350 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 1350, min: 950 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 950, min: 725 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 725, min: 0 },
          items: 1
        }
      };


    return(
    
          <div style={{marginBottom:'100px'}}  id='projects' >
            <h1 style={{color:'#2E3058'}}>Nase projekty</h1> 
            <Carousel   containerClass="carousel" responsive={responsive}>
              {projectData.map((item,k) => {
                console.log(item);
                return <Item key={k} item={item}/>
              })}
             
             
            </Carousel>

        </div>
    )
}


export default CarouselComponent;