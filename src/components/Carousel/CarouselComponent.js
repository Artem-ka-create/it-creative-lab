import Carousel from "react-multi-carousel";
import Item from "./Item";


function CarouselComponent() {



  const projectData = [
    {
      name: 'Energia je budúcnosť sveta',
      schoolName: 'Gymnázium , Alejová 1',
      description:
        <>
          <br></br>
          Študenti vytvoria interaktívnu mapu obnoviteľných zdrojov energie v širšom okolí. Produkt by mal byť výstupom projektu Erasmus+ "Energy is the future of the world".
        </>
    },
    {
      name: 'Škola online',
      schoolName: 'Gymnázium, Opatovská cesta 7',
      description: <>
        <br></br>
        Monitorovanie teploty, svetla na chodbách v škole a následne publikovanie informácii na web. Cieľom je využitie IoT sád pre micro:bit a spoznávanie IoT technológie.
      </>
    },
    {
      name: 'Inteligentná permakultúrna záhrada',
      schoolName: 'Gymnázium P.J.Šafárika',
      description:
        <>
          <br></br>
          "Východisko:   Škola získala v rámci projektu ""Ekologicky sa zeleniť, je časom overený hit""  realizovaného cez Nórske fondy prostriedky na realizáciu permakultúrnej záhrady, ktorá sa nachádza v areáli školy.  Jej súčasťou sú nádoby na zber ďažďovej vody, vyvýšené záhony s rôznymi typmi rastlín.

          <br></br>Cieľ projektu: Realizovať inteligentnú školskú záhradu, vybrať a inštalovať vhodné senzory.   Vytvoriť jednoduchú aplikáciu, v ktorej budú môcť používatelia získať údaje o prostredí v záhrade v reálnom čase, ako je napríklad momentálna teplota a vlhkosť v jednotlivých častiach s rôznymi typmi rastlín.
          <br></br>Nainštalovať kameru – resp. fotopascu v kritických oblastiach, ktoré je potrebné monitorovať napr. proti vandalom a iným neželaným návštevníkom.  Projekt je náročnejší aj finančne vzhľadom na to, že je potrebné vyriešiť napájanie zariadení a pripojenie k internetu .

        </>
    },
    {
      name: 'Aplikácia prvej pomoci',
      schoolName: 'Gymnázium Trebišovská ',
      description:
        <>
          <br></br>
          Mobilná aplikácia prvej pomoci bude vždy po ruke, keď ju bude treba. Napriek tomu, že každý z nás by mal ovládať poskytnutie prvej pomoci, my si uvedomujeme, že v krízových situáciách môže človek zažiť šok a všetko zabudnúť. <br></br>Táto aplikácia by poskytovala podrobný návod na zvládnutie rôznych situácií. Sprevádzala by nás všetkými potrebnými krokmi.
        </>
    },
    {
      name: 'Mobilná aplikácia - testy na autoškolu',
      schoolName: 'Gymnázium Trebišovská ',
      description:
        <>
          <br></br>
          Mobilná aplikácia bude slúžiť ako pomôcka uchádzačom o vodičský preukaz. Bude obsahovať základné otázky vo forme testu. Pomocou nich sa precvičia, otestujú svoje znalosti a odstránia prípadné vedomostné nedostatky.
        </>
    },
    {
      name: 'Kvalita vzduchu v učebniach',
      schoolName: 'Gymnázium, Komenského 32',
      description:
        <>
          <br></br>
          "Cieľom projektu je vytvorenie aplikácie, ktorá by bola využiteľné v bežnom živote školy Hnacím motorom pre zapojenie je vyskúšať nové možnosti, naučiť sa spolupracovať v tíme a získať nové, zaujímavé poznatky a zručnosti od ľudí z praxe.
          <br></br>Tím: Ervín Karvaš a Iveta Lešková
          <br></br>Vytvorenie aplikácie, ktorá by merala kvalitu vzduchu, teplotu vzduchu, vlhkosť, baktérie...
          <br></br>v učebniach pomocou senzorov na kvalitu vzduchu. V aplikácii by sa dali pozrieť vybrané učebne (podľa poctu senzorov) a informácie o nich. Aplikácia by zaslala hlásenie používateľovi v prípade, že by kvalita vzduchu nebola dobra (upozornenie na vyvetranie a podobne) Cena za senzor cca 50 eur
        </>
    },
    {
      name: 'Chémia jednoduchšie',
      schoolName: 'Gymnázium, Komenského 32',
      description: <>
        <br></br>
        "Tím: Ivo Micišin, Patrik Ragan, Dávid Toma, René Demjan, Matej Janok<br></br>

        <br></br>Táto aplikácia by slúžila ako učebná pomôcka, vďaka ktorej by bolo zobrazenie chemických väzieb jednoduchšie. Zobrazenie týchto väzieb pomocou 3D modelov by bolo prehľadnejšie a nápomocné aj pre študentov s horšou priestorovou predstavivosťou. V aplikácii by sa nachádzala ponuka prvkov, ktoré by sa dali filtrovať a následne vybrať presne ten, ktorý potrebujeme.
        <br></br>
        <br></br>- zozbieranie informácií od profesorov ohľadom stavby prvkov
        <br></br>- vytvorenie 3d modelov

        <br></br>- kreatívne navrhnúť dizajn aplikácie

        <br></br>- vytvoriť program
        <br></br>
        <br></br>Vďaka našej aplikácii by bolo možné porozumieť skutočnému významu a tak mať lepšiu predstavu o čom sa učím.
      </>
    },
    {
      name: 'Fitko v mobile',
      schoolName: 'Gymnázium Pavla Horova, Masarykova 1, Michalovce',
      description: <>
        <br></br>
        "Cieľom nášho projektu je 3D vizualizácia fitka, rozmiestnenie  a návod na použitie strojov, ktoré sa nachádzajú vo fitness centre.
        <br></br>Členovia tímu: Matej Mika, Jakub Drahňovský, Ján Paľo, Branislav Kaššaj, Tomáš Ščerbák, Marko Kotora, Samuel Jenčik, Samuel Maľar, Samuel Halas, Šimon Repel
      </>
    },
    {
      name: 'Hra v 3D',
      schoolName: 'Gymnázium Pavla Horova, Masarykova 1, Michalovce',
      description: <>
        <br></br>
        V našom projekte sa zameriame na vývoj počítačovej hry v 3D prostredí. Upriamime sa na arkádu - hru s postupne rastúcou náročnosťou.
        <br></br>Členovia tímu: Peter Palkoci, Samuel Makšim, Norbert Riebesam, Denis Landa, Richard Semjan, Matúš Pituk, Peter Šimko, Matej Kornúc
      </>
    },
    {
      name: 'METEO lab',
      schoolName: 'Gymnázium, Ľ: Štúra 26, 07101 Michalovce',
      description: <>
        <br></br>
        Naším cieľom je prepojiť informatiku, geografiu a fyziku pri zostrojení meteorologickej stanice a zbere dát z tejto stanice. Následne spracovanie získaných dát a naprogramovanie apky pre METEOstanicu.
        <br></br>Pri možnosti vyrobenia viacerých staníc rozmiestnenie v areály školy a v areály družobných škôl. Následný zber údajov by vytvoril okrem iného mapy sledovaných javov (mapa teploty, vlhkosti, smeru vetra).
        <br></br>Cez aplikáciu by bolo možné prepojiť postupne stanice v ďalších miestach.
      </>
    },
    {
      name: 'Byť zelený je TOP',
      schoolName: 'Gymnázium, Ľ: Štúra 26, 07101 Michalovce',
      description: <>
        <br></br>
        Mobilná aplikácia bude slúžiť ako pomôcka uchádzačom o vodičský preukaz. Bude obsahovať základné otázky vo forme testu. Pomocou nich sa precvičia, otestujú svoje znalosti a odstránia prípadné vedomostné nedostatky.
      </>
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


  return (

    <div style={{ marginBottom: '100px' }} id='projects' >
      <h1 style={{ color: '#2E3058' }}>Nase projekty</h1>
      <Carousel containerClass="carousel" responsive={responsive}>
        {projectData.map((item, k) => {
          console.log(item);
          return <Item key={k} item={item} />
        })}


      </Carousel>

    </div>
  )
}


export default CarouselComponent;