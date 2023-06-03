
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";       
import './DropDownList.module.css'

import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown} from '@fortawesome/free-solid-svg-icons'

function DropDownListComponent(){   

    const [selected, setSelected] = useState(null);


const toggle = i => {
    
    if(selected === i){
        return setSelected(null);
    }
    
    setSelected(i);
}

    return (

        <div style={{marginBottom:'100px'}} id="schoolsFirms"> 
            <h1 style={{color:'#2E3058'}} >Školy</h1> 

            <div className="accordion">
                { data.map((item,i)=> (
                    <div key={i} className="item">
                        <div className="tittle" onClick={() => toggle(i)}>
                            <div className="tittle_schoolNameBlock">
                                <p className="tittle_schoolNameBlock_tittle">Nazov</p>
                                <div className="tittle_schoolNameBlock_content">{item.schoolName}</div>
                            </div>
                            <div className="tittle_schoolCityBlock">
                                <p className="tittle_schoolNameBlock_tittle">Mesto</p>
                                <div className="tittle_schoolNameBlock_content">{item.city}</div>
                            </div>
                            {selected === i ? <FontAwesomeIcon icon={faChevronUp}/> : <FontAwesomeIcon icon={faChevronDown}/> }
                        </div>
                        <div className={selected === i ? 'content show' : 'content' }>
                            <div className="contentBox">
                            <div className="tittle_schoolNameBlock_tittle">
                                Popis
                            </div>
                            <div className="contentBox_content">
                                {item.content}
                            </div>
                        </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
const data = [
    {
        schoolName : 'Gymnázium, Alejová 1',
        city : 'Košice',
        content : 
            <>
            Gymnázium Alejová 1 je gymnázium so štvorročným aj osemročným štúdiom nachádzajúce sa na ulici Alejová v Košiciach, mestskej časti Juh. Je partnerskou školou Prírodovedeckej fakulty Univerzity P. J. Šafárika v Košiciach
            
            <br></br><br></br>Počiatky školy siahajú do roku 1988, kedy v základnej škole L. Novomeského 4 bola zriadená jedna trieda 5. ročníka so zameraním na matematiku, kmeňovo pričlenená ku Gymnáziu na bývalej Šmeralovej ulici. Po čase škole chýbali priestory. Nové priestory im ponúkol Ing. Ladislav Makó, CSc., riaditeľ SPŠH na Alejovej ulici. 24. septembra 1990 sa osem tried gymnázia spolu s vtedajším pedagogickým zborom nasťahovalo do budovy hutníckej priemyslovky. Riaditeľ priemyslovky sa stal taktiež riaditeľom gymnázia.
            <br></br><br></br>V školskom roku 2004/2005 bolo založené samostatné gymnázium na Alejovej ulici s vlastným vedením. Riaditeľom školy sa stal PhDr. Ľubomír Sobek, ktorý pôsobí ako riaditeľ do dnes. Zastupiteľstvo Košického samosprávneho kraja v rámci tretej etapy racionalizácie siete škôl rozhodlo, že odo dňa 31. augusta 2011 zo siete stredných škôl vyradí Stredná priemyselná škola hutnícka. Týmto gymnázium získalo vlastnú samostatnú budovu.
            <br></br><br></br>Gymnázium Alejová je špecifické tým, že otvára triedy osemročného a štvorročného štúdia. Osemročné štúdium je špecializované na matematiku, štvorročné je všeobecné. V školskom roku 2018/2019 sa otvorila experimentálna trieda štvorročného gymnázia so zameraním na matematiku. Týmto sa Gymnázium Alejová 1 stála jedným z dvoch slovenských gymnázií, ktoré sa zapojilo do experimentálneho overovania nového vzdelávacieho programu pre predmety matematika a matematické metódy.
            </>
    },
    {
        schoolName : 'Gymnázium, Opatovská cesta 7',
        city : 'Košice',
        content : 
        <>
        Gymnázium Opatovská 7 je jediné nemecko-slovenské bilingválne gymnázium v Košickom kraji. Nachádza sa v mestskej časti Košice – Vyšné Opatské. Škola v súčasnosti ponúka štúdium v 3 študijných odboroch: 4-ročné gymnázium, 8-ročné gymnázium a 5-ročné bilingválne (slovensko-anglické alebo slovensko-nemecké) gymnázium. Škola spolupracuje s Univerzitou Pavla Jozefa Šafárika v Košiciach, Technickou univerzitou v Košiciach a Prešovskou univerzitou. Zriadovateľom gymnázia je Košický samosprávny kraj.
        
        <br></br><br></br>Gymnázium bolo zriadené 1. septembra 1980 na základe rozhodnutia Rady Východoslovenského krajského národného výboru. Gymnázium vzniklo v priestoroch bývalej SEŠ v Košiciach na ulici Opatovská cesta 7. Dňa 12. mája 1981 bola odovzdaná do užívania prístavba samotnej školy. Tvoril ju foyer, spojovacia chodba, šatne pre žiakov a novopristavený pavilón chémie s odbornou učebňou, dvoma laboratóriami, kabinetom a váhovňou. Tieto nové učebné priestory boli účelne zariadené a vybavené učebnými pomôckami a didaktickou technikou.
        <br></br><br></br>Prví absolventi gymnázia maturovali v školskom roku 1983/84. Spolu s nimi zmaturovali aj poslední frekventanti bývalej SEŠ v 2-ročnom nadstavbovom štúdiu sociálno-právnej starostlivosti. Týmto SEŠ na Opatovskej 7 v Košiciach ukončila svoju činnosť a jej priestory kompletne prebralo gymnázium.
        
        </>
        },
    {
        schoolName : 'Gymnázium P.J.Šafárika, Akademika Hronca 1',
        city : 'Rožňava',
        content : 
        <>
        Gymnázium Pavla Jozefa Šafárika je stredná škola v Rožňave, zameraná na všeobecné vzdelanie v štvorročnom a osemročnom štúdiu. Nachádza sa na ulici Akademika Hronca 1.
        <br></br> <br></br>Prvé gymnázium v Rožňave založili jezuiti v roku 1688. Otvorili 1. – 3. triedu latinskej školy a nazvali ju Gymnasium Archiepiscopale (Arcibiskupské gymnázium). V 1705 – 1714 bola jezuitská škola zatvorená. Od r. 1790 sa stala základom kráľovského vyššieho gymnázia Regium gymnasium maius Rosnaviense. Kvôli zrušeniu jezuitskej rehole v roku 1713 bolo gymnázium prevzaté františkáni, po nich premonštrátmi. Po rozpustení premonštrátskej rehole, na škole vyučovali svetskí kňazi. Niektorí z profesorov gymnázia boli členmi vedeckých a umeleckých spoločností v Budapešti a mnohí z nich boli aj významnými osobnosťami kultúry.
        <br></br> <br></br>V rokoch 1904 – 1906 bola postavená nová budova Rímskokatolíckeho gymnázia (dnešného sídla Gymnázia P. J. Šafárika) podľa návrhov architekta M. Ungára. V roku 1920 sa Rímskokatolícke gymnázium premenovalo na Štátne reálne gymnázium. Dňa 2. júna 1945 bola budova zoštátnená a po oslobodení Slovenska bolo na škole štvorročné gymnázium, ktoré sa v roku 1953 pretransformovalo na Jedenásťročnú strednú školu. V roku 1961 sa škola premenovala na Strednú všeobecnovzdelávaciu školu a boli pridané aj triedy s vyučovacím jazykom maďarským. Od školského roku 1968/69 škola fungovala ako štvorročné gymnázium a v školskom roku 1997/1998 na škole pribudlo osemročné gymnázium.
        <br></br><br></br>V súčasnosti je na škole 21 tried, z toho 8 tried osemročného gymnázia, 5 tried päťročného bilingválneho štúdia, 4 triedy štvorročného gymnázia s vyučovacím jazykom slovenským a 4 triedy štvorročného gymnázia s vyučovacím jazykom maďarským. Školu navštevuje viac ako 400 žiakov.
        <br></br><br></br>Žiaci sa zapájajú do rôznych súťaží a projektov. Jedným z nich bol aj projekt Comenius, do ktorého sa zapojili školy z Belgicka a Španielska. Na škole prebiehajú dlhodobé projekty: Infovek, Zdravá škola, a projekt Školy budúcnosti, ktoré sú zamerané na skvalitnenie systému výučby na základných a stredných školách s podporou informačných a komunikačných technológií.
        </>
    },
    {
        schoolName : 'Gymnazium Trebisovska 12',
        city : 'Košice',
        content : 
        <>
        Gymnázium, Trebišovská 12, Košice je všeobecnovzdelávacia, vnútorne diferencovaná stredná škola, ktorá pripravuje žiakov vo štvorročnom, päťročnom alebo v osemročnom vzdelávacom programe a poskytuje úplné stredné všeobecné vzdelanie. Vzdelávací program  gymnázia je zameraný predovšetkým na prípravu pre štúdium na vysokých školách, môže pripravovať aj na výkon niektorých činností vo verejnej správe, kultúre a športe.
 
        <br></br> <br></br>Koncepcia výchovy a vzdelávania vychádza z rozboru prebiehajúcich spoločenských a ekonomických zmien a zohľadňuje požiadavky na obsah a kvalitu prípravy žiakov v gymnaziálnom štúdiu. Zohľadňuje základné ciele vzdelávacej sústavy SR - rozvíjať osobnosť a tvorivosť  žiaka a tým  vytvoriť pružný systém vzdelávania,  reagujúci na požiadavky trhu práce.
        <br></br> <br></br>Gymnázium Trebišovská 12 v Košiciach poskytuje vyššie sekundárne vzdelanie ISCED 3A – úplné (maturitné) stredné všeobecné vzdelanie, ktoré získa žiak úspešným absolvovaním programu ostatného ročníka najmenej štvorročného a najviac osemročného programu odboru vzdelávania v gymnáziu, ktorý sa ukončuje predpísanou štandardnou maturitnou skúškou. Dokladom o získanom maturitnom vzdelaní je vysvedčenie o maturitnej skúške. V nižších ročníkoch viacročných gymnázií sa vzdelávanie riadi Štátnym vzdelávacím programom pre nižšie sekundárne vzdelávanie ISCED 2.
        <br></br> <br></br>Absolventi vyššieho sekundárneho vzdelávania ISCED 3A – gymnázia môžu pokračovať v následnom vzdelávaní na terciárnej úrovni ISCED 5 (vysoká škola), prípadne v rôznych formách nadstavbového alebo pomaturitného štúdia na úrovni ISCED 4 – postsekundárneho neterciárneho vzdelávania alebo vstúpiť získanou kvalifikáciou na trh práce.
        </>
    },
    {
        schoolName : 'Gymnázium, Komenského 32',
        city : 'Trebišov',
        content : 
        <>
        Gymnázium na Komenského 32 v Trebišove je jedným z dvoch trebišovských gymnázií. Založené bolo 12. septembra 1949 a patrí medzi najstaršie vzdelávacie inštitúcie v regióne Zemplín. Od jeho založenia prešlo bránami školy 6045 absolventov, v súčasnosti študuje na škole vyše 600 študentov.
        <br></br> <br></br>Rozhodnutím PŠVU v Bratislave 4. augusta 1949 boli preložené tri gymnaziálne triedy zo Spišského Podhradia do Trebišova. Vyučovanie sa začalo 12. septembra 1949 s jednou prvou, jednou druhou a jednou treťou triedou v budove vtedajšej 8-ročnej strednej školy. V rokoch 1949-1953 mala škola oficiálny názov Gymnázium. V roku 1953 bola premenovaná na Jedenásťročnú strednú školu, v roku 1959 sa zmenil na Dvanásťročnú strednú školu a v roku 1961 na Všeobecnovzdelávaciu strednú školu. Pod súčasným názvom, Gymnázium v Trebišove, je škola známa od 1. septembra 1969.
        </>
    },
    {
        schoolName : 'Gymnázium Pavla Horova, Masarykova 1',
        city : 'Michalovce',
        content : 
        <>
        Gymnázium Pavla Horova je stredná škola nachádzajúca sa v meste Michalovce v Košickom kraji na Slovensku. Založené v roku 1922, je to najstaršie slovenské gymnázium východne od oblasti Mátra-Slanec a je jedným z dvoch hlavných poskytovateľov stredného školského vzdelávania v Michalovciach, spolu s Gymnáziom na ulici Ľudovíta Štúra.
 
        <br></br> <br></br>Pred vyhlásením československej nezávislosti 28. októbra 1918 bola oblasť okolo mesta Michalovce súčasťou bývalého maďarského okresu Košice (maďarsky: Kassa). V tom čase existovali v celom okrese len tri stredné školy, všetky čisto maďarské, nachádzajúce sa vtedy v kultúrnych centrách Košíc, Prešova a Užhorodu.
        <br></br> <br></br>Po získaní nezávislosti bola vysoká vlastenecká nálada a Slováci okamžite pocítili potrebu založiť slovenskú strednú školu v oblasti, aby mohli poskytnúť vyššie vzdelanie v slovenčine pre obyvateľstvo vo východnom Slovensku. Spočiatku stála voľba medzi troma miestami v Zemplíne, ktorými boli mestá Humenné, Trebišov a Michalovce. Vďaka schopnosti poskytnúť dostatočné prostriedky a personál sa Michalovce stali zjavnou voľbou pre výstavbu novej školy.
        <br></br> <br></br>Vzdelávací program školy pozostáva z 8 semestrov (4 roky), rozdelených na dve časti po dva roky. Každá časť zahŕňa predmety ako všeobecné vzdelávanie, cudzie jazyky (zvyčajne ruština, francúzština, nemčina a angličtina), telesná výchova, informatika a veda/technológia.
        </>
    },
    {
        schoolName : 'Gymnázium, Ľ: Štúra 26',
        city : 'Michalovce',
        content : 
        <>
        Gymnázium, Ľ. Štúra 26, Michalovce ponúka žiakom vzdelávanie v štvorročnom vzdelávacom programe so všeobecným zameraním, v ktorom je posilnená dotácia v cudzích jazykoch, informatike a prírodovedných predmetoch. V osemročnom vzdelávacom programe s vnútorným zameraním na cudzie jazyky a informatiku. A v päťročnom bilingválnom programe.
 
        <br></br> <br></br>Vznik školy sa viaže k 1. 9. 1992. Jej počiatky sú spojené s SOU strojárskym na Močarianskej ulici č.1 v Michalovciach, na pôde ktorého bolo jej prvé sídlo. Vznik nového gymnázia odobrilo ministerstvo školstva, podporili ho aj orgány mesta a rodičovská verejnosť, takže nič nebránilo tomu, aby v našom meste uzrelo svetlo sveta ďalšie gymnázium.
        <br></br> <br></br>Dôležitým medzníkom bol rok 1994, kedy bolo gymnázium z SOU strojárskeho v počte 3 tried, z toho 2 triedy 2. ročníka a 1 trieda 1. ročníka štvorročného štúdia delimitované do priestorov SPŠ na Ulici Ľ. Štúra 26 v Michalovciach, od čoho je odvodený aj jeho súčasný oficiálny názov školy – Gymnázium, Ľ. Štúra 26, Michalovce.
        <br></br> <br></br>Záujem verejnosti, rodičov i žiakov po osemročnom gymnaziálnom štúdiu viedol vedenie školy k aktivite týmto smerom. Od 1. 9. 1999 boli do siete škôl zaradené študijné odbory osemročného gymnázia, jedna trieda so zameraním na matematiku a fyziku a jedna trieda so zameraním na cudzie jazyky, od 1. 9. 2004 bolo toto zameranie na matematiku a fyziku nahradené zameraním na informatiku. Nové legislatívne úpravy zrušili tieto zamerania, vo vnútornej profilácii v podobe modulov však pokračujú ďalej v osvedčenej podobe.
        <br></br> <br></br>V snahe podchytiť talentovaných žiakov zo základných škôl dostala škola od zriaďovateľa súhlas zriadiť od školského roka 2010/2011 triedy pre žiakov so všeobecným intelektovým nadaním.
        </>
    },

]

export default DropDownListComponent;