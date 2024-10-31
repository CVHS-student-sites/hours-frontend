<script>
    import {readable} from 'svelte/store';
    import {createRender, createTable, Render, Subscribe} from 'svelte-headless-table';
    import {addPagination, addSelectedRows, addSortBy, addTableFilter} from 'svelte-headless-table/plugins';
    import Action from './Action.svelte';
    import Selection from './Selection.svelte';

    import StatusCell from "./StatusCell.svelte";

    import TableHead from "./sub/TableHead.svelte";


    let filterHour;
    $:{
        if (filterHour) {
            $filterValue = "pending"
        } else {
            $filterValue = "";
        }
    }
    let rawData = [{"id":"968348","email":"ddenley0@acquirethisname.com","firstName":"Dyanne","lastName":"Denley","totalHours":18},
        {"id":"259804","email":"mhoy1@mlb.com","firstName":"Marylinda","lastName":"Hoy","totalHours":189},
        {"id":"719689","email":"rvasiljevic2@plala.or.jp","firstName":"Rhiamon","lastName":"Vasiljevic","totalHours":41},
        {"id":"952683","email":"scuree3@netvibes.com","firstName":"Sheba","lastName":"Curee","totalHours":103},
        {"id":"450584","email":"ihuffa4@dropbox.com","firstName":"Iggy","lastName":"Huffa","totalHours":48},
        {"id":"151706","email":"tlarge5@printfriendly.com","firstName":"Trent","lastName":"Large","totalHours":47},
        {"id":"795151","email":"lbugg6@mapy.cz","firstName":"La verne","lastName":"Bugg","totalHours":190},
        {"id":"974859","email":"fstoute7@wisc.edu","firstName":"Farra","lastName":"Stoute","totalHours":80},
        {"id":"027199","email":"hdemongeot8@shinystat.com","firstName":"Hanni","lastName":"Demongeot","totalHours":30},
        {"id":"475143","email":"cshirrell9@rakuten.co.jp","firstName":"Costanza","lastName":"Shirrell","totalHours":93},
        {"id":"599003","email":"egoodena@google.com.br","firstName":"Edd","lastName":"Gooden","totalHours":189},
        {"id":"222371","email":"zallwrightb@weather.com","firstName":"Zorana","lastName":"Allwright","totalHours":19},
        {"id":"824328","email":"tantunezc@geocities.com","firstName":"Titus","lastName":"Antunez","totalHours":161},
        {"id":"571291","email":"drizzid@biglobe.ne.jp","firstName":"Dorri","lastName":"Rizzi","totalHours":61},
        {"id":"580511","email":"egodferye@earthlink.net","firstName":"Ewell","lastName":"Godfery","totalHours":49},
        {"id":"772315","email":"cpowlesf@rambler.ru","firstName":"Correy","lastName":"Powles","totalHours":183},
        {"id":"591279","email":"lessebyg@com.com","firstName":"Lenci","lastName":"Esseby","totalHours":142},
        {"id":"919302","email":"kfarnishh@ning.com","firstName":"Knox","lastName":"Farnish","totalHours":86},
        {"id":"152037","email":"aovereli@arizona.edu","firstName":"Alphonse","lastName":"Overel","totalHours":53},
        {"id":"638549","email":"tmcdoualj@opera.com","firstName":"Thatch","lastName":"McDoual","totalHours":30},
        {"id":"059727","email":"hcattellionk@japanpost.jp","firstName":"Hillard","lastName":"Cattellion","totalHours":21},
        {"id":"442228","email":"bpartkyal@csmonitor.com","firstName":"Bridgette","lastName":"Partkya","totalHours":29},
        {"id":"596865","email":"nguidonem@yellowbook.com","firstName":"Nils","lastName":"Guidone","totalHours":108},
        {"id":"553475","email":"reschen@un.org","firstName":"Ricky","lastName":"Esche","totalHours":66},
        {"id":"062400","email":"lmowero@ibm.com","firstName":"Letisha","lastName":"Mower","totalHours":172},
        {"id":"630133","email":"wtretterp@over-blog.com","firstName":"Willie","lastName":"Tretter","totalHours":36},
        {"id":"842340","email":"bkeableq@simplemachines.org","firstName":"Bancroft","lastName":"Keable","totalHours":131},
        {"id":"836993","email":"ndanniellr@bloglines.com","firstName":"Nollie","lastName":"Danniell","totalHours":152},
        {"id":"767357","email":"dpikhnos@amazon.co.uk","firstName":"Dorie","lastName":"Pikhno","totalHours":143},
        {"id":"507920","email":"edencht@dion.ne.jp","firstName":"Erna","lastName":"Dench","totalHours":167},
        {"id":"232615","email":"swaldocku@typepad.com","firstName":"Sancho","lastName":"Waldock","totalHours":2},
        {"id":"640191","email":"alloydv@youtube.com","firstName":"Addie","lastName":"Lloyd","totalHours":7},
        {"id":"780351","email":"mgumeyw@nyu.edu","firstName":"Maurene","lastName":"Gumey","totalHours":198},
        {"id":"539403","email":"lzealyx@apple.com","firstName":"Luther","lastName":"Zealy","totalHours":32},
        {"id":"174240","email":"jcabreray@t.co","firstName":"Jerrilee","lastName":"Cabrera","totalHours":134},
        {"id":"899493","email":"hrippingallz@godaddy.com","firstName":"Hector","lastName":"Rippingall","totalHours":46},
        {"id":"172662","email":"tboylund10@de.vu","firstName":"Toby","lastName":"Boylund","totalHours":88},
        {"id":"422973","email":"lpruckner11@cdbaby.com","firstName":"Laverne","lastName":"Pruckner","totalHours":28},
        {"id":"465603","email":"emitrikhin12@weather.com","firstName":"Eldon","lastName":"Mitrikhin","totalHours":98},
        {"id":"867259","email":"qruspine13@macromedia.com","firstName":"Quinton","lastName":"Ruspine","totalHours":70},
        {"id":"419511","email":"nhayland14@bbb.org","firstName":"Normand","lastName":"Hayland","totalHours":158},
        {"id":"688364","email":"lhuntingford15@google.com.au","firstName":"Lenette","lastName":"Huntingford","totalHours":33},
        {"id":"965708","email":"wsabie16@paginegialle.it","firstName":"Willis","lastName":"Sabie","totalHours":83},
        {"id":"197754","email":"epavy17@tripod.com","firstName":"Emylee","lastName":"Pavy","totalHours":32},
        {"id":"158093","email":"dbrunning18@technorati.com","firstName":"Delmor","lastName":"Brunning","totalHours":96},
        {"id":"475191","email":"mpinkstone19@mac.com","firstName":"Mile","lastName":"Pinkstone","totalHours":11},
        {"id":"808312","email":"ddowle1a@msn.com","firstName":"Di","lastName":"Dowle","totalHours":57},
        {"id":"108263","email":"lclaasen1b@google.de","firstName":"Libby","lastName":"Claasen","totalHours":36},
        {"id":"739464","email":"gallewell1c@nymag.com","firstName":"Georgianne","lastName":"Allewell","totalHours":73},
        {"id":"828943","email":"rosheerin1d@themeforest.net","firstName":"Rana","lastName":"O'Sheerin","totalHours":67},
        {"id":"346211","email":"cyonge1e@drupal.org","firstName":"Cheslie","lastName":"Yonge","totalHours":194},
        {"id":"412497","email":"fkellough1f@chronoengine.com","firstName":"Faith","lastName":"Kellough","totalHours":180},
        {"id":"428446","email":"cloughlin1g@time.com","firstName":"Chicky","lastName":"Loughlin","totalHours":112},
        {"id":"774480","email":"gsellman1h@msu.edu","firstName":"Giusto","lastName":"Sellman","totalHours":59},
        {"id":"523121","email":"dwhitaker1i@ucoz.com","firstName":"Demetre","lastName":"Whitaker","totalHours":57},
        {"id":"776141","email":"mlomath1j@wsj.com","firstName":"Mireille","lastName":"Lomath","totalHours":194},
        {"id":"665976","email":"nklimashevich1k@wp.com","firstName":"Nevsa","lastName":"Klimashevich","totalHours":123},
        {"id":"837805","email":"fcasley1l@intel.com","firstName":"Frans","lastName":"Casley","totalHours":54},
        {"id":"066678","email":"fadshead1m@ed.gov","firstName":"Flin","lastName":"Adshead","totalHours":70},
        {"id":"377847","email":"tmartinetto1n@theguardian.com","firstName":"Thaddus","lastName":"Martinetto","totalHours":68},
        {"id":"412629","email":"bgradon1o@craigslist.org","firstName":"Bea","lastName":"Gradon","totalHours":47},
        {"id":"963998","email":"caffuso1p@pen.io","firstName":"Cora","lastName":"Affuso","totalHours":58},
        {"id":"694838","email":"granscombe1q@sbwire.com","firstName":"Gail","lastName":"Ranscombe","totalHours":183},
        {"id":"270199","email":"bdurrington1r@webeden.co.uk","firstName":"Blanch","lastName":"Durrington","totalHours":153},
        {"id":"287960","email":"gyitzhakof1s@seattletimes.com","firstName":"Gerri","lastName":"Yitzhakof","totalHours":91},
        {"id":"303987","email":"amay1t@ucoz.ru","firstName":"Abram","lastName":"May","totalHours":134},
        {"id":"923266","email":"emcmorran1u@dot.gov","firstName":"Elva","lastName":"McMorran","totalHours":151},
        {"id":"055697","email":"ssammut1v@pbs.org","firstName":"Sloan","lastName":"Sammut","totalHours":78},
        {"id":"375421","email":"fwrates1w@usda.gov","firstName":"Fredrika","lastName":"Wrates","totalHours":147},
        {"id":"995755","email":"lstandish1x@omniture.com","firstName":"Lorenzo","lastName":"Standish","totalHours":58},
        {"id":"497005","email":"agodfrey1y@shutterfly.com","firstName":"Aldric","lastName":"Godfrey","totalHours":198},
        {"id":"636596","email":"lroth1z@zimbio.com","firstName":"Layne","lastName":"Roth","totalHours":110},
        {"id":"158849","email":"lberesford20@slideshare.net","firstName":"Lucita","lastName":"Beresford","totalHours":55},
        {"id":"359437","email":"bpeskett21@quantcast.com","firstName":"Beaufort","lastName":"Peskett","totalHours":145},
        {"id":"302832","email":"cerrey22@scribd.com","firstName":"Candie","lastName":"Errey","totalHours":145},
        {"id":"499376","email":"fcoalburn23@wired.com","firstName":"Flory","lastName":"Coalburn","totalHours":135},
        {"id":"871435","email":"mswancott24@oakley.com","firstName":"Marys","lastName":"Swancott","totalHours":121},
        {"id":"813745","email":"kzanioletti25@goo.ne.jp","firstName":"Kelila","lastName":"Zanioletti","totalHours":75},
        {"id":"430406","email":"obalazot26@yandex.ru","firstName":"Odo","lastName":"Balazot","totalHours":144},
        {"id":"507974","email":"mjenking27@illinois.edu","firstName":"Marin","lastName":"Jenking","totalHours":125},
        {"id":"371956","email":"tisakowicz28@dailymail.co.uk","firstName":"Tait","lastName":"Isakowicz","totalHours":116},
        {"id":"771848","email":"ncampos29@51.la","firstName":"Neils","lastName":"Campos","totalHours":151},
        {"id":"071209","email":"hjenny2a@spotify.com","firstName":"Helyn","lastName":"Jenny","totalHours":139},
        {"id":"190612","email":"aquartermaine2b@marketwatch.com","firstName":"Alexandros","lastName":"Quartermaine","totalHours":163},
        {"id":"991843","email":"strawin2c@tinyurl.com","firstName":"Sigfried","lastName":"Trawin","totalHours":145},
        {"id":"009293","email":"bpimblott2d@dailymail.co.uk","firstName":"Burt","lastName":"Pimblott","totalHours":16},
        {"id":"991388","email":"ctrent2e@who.int","firstName":"Cindra","lastName":"Trent","totalHours":186},
        {"id":"285874","email":"dfrogley2f@squidoo.com","firstName":"Delcine","lastName":"Frogley","totalHours":115},
        {"id":"233828","email":"ppoulden2g@odnoklassniki.ru","firstName":"Poul","lastName":"Poulden","totalHours":182},
        {"id":"450545","email":"sbrassington2h@timesonline.co.uk","firstName":"Starlin","lastName":"Brassington","totalHours":35},
        {"id":"137494","email":"dragles2i@xinhuanet.com","firstName":"Derk","lastName":"Ragles","totalHours":39},
        {"id":"176062","email":"cmutch2j@xrea.com","firstName":"Chip","lastName":"Mutch","totalHours":35},
        {"id":"704899","email":"dblunsen2k@who.int","firstName":"Deck","lastName":"Blunsen","totalHours":60},
        {"id":"635168","email":"kjonas2l@shop-pro.jp","firstName":"Kristin","lastName":"Jonas","totalHours":162},
        {"id":"581068","email":"tbanane2m@dion.ne.jp","firstName":"Tiebout","lastName":"Banane","totalHours":107},
        {"id":"193925","email":"ecridlan2n@samsung.com","firstName":"Eliot","lastName":"Cridlan","totalHours":129},
        {"id":"391904","email":"amccreary2o@paginegialle.it","firstName":"Ainslee","lastName":"McCreary","totalHours":160},
        {"id":"622297","email":"mbowerbank2p@youtu.be","firstName":"Mahmoud","lastName":"Bowerbank","totalHours":152},
        {"id":"890551","email":"bcoggan2q@tamu.edu","firstName":"Blake","lastName":"Coggan","totalHours":18},
        {"id":"123028","email":"gbernth2r@typepad.com","firstName":"Goldarina","lastName":"Bernth","totalHours":23},
        {"id":"764821","email":"lclemendot2s@umich.edu","firstName":"Lorrayne","lastName":"Clemendot","totalHours":143},
        {"id":"831504","email":"bgarrett2t@independent.co.uk","firstName":"Boot","lastName":"Garrett","totalHours":155},
        {"id":"964243","email":"nmurname2u@sogou.com","firstName":"Nissa","lastName":"Murname","totalHours":106},
        {"id":"308519","email":"nramberg2v@shutterfly.com","firstName":"Noreen","lastName":"Ramberg","totalHours":10},
        {"id":"107356","email":"bhebbard2w@networkadvertising.org","firstName":"Brigitte","lastName":"Hebbard","totalHours":193},
        {"id":"084297","email":"amarnane2x@intel.com","firstName":"Addia","lastName":"Marnane","totalHours":154},
        {"id":"228373","email":"jfancy2y@mapy.cz","firstName":"Jonie","lastName":"Fancy","totalHours":98},
        {"id":"030379","email":"hseers2z@webeden.co.uk","firstName":"Hattie","lastName":"Seers","totalHours":60},
        {"id":"894619","email":"zdowsing30@baidu.com","firstName":"Zelda","lastName":"Dowsing","totalHours":55},
        {"id":"183791","email":"bsnalham31@about.com","firstName":"Bertie","lastName":"Snalham","totalHours":4},
        {"id":"692571","email":"gbowhay32@nymag.com","firstName":"Garner","lastName":"Bowhay","totalHours":38},
        {"id":"544253","email":"sheigl33@toplist.cz","firstName":"Sal","lastName":"Heigl","totalHours":74},
        {"id":"418071","email":"eseabourne34@lulu.com","firstName":"Ephrayim","lastName":"Seabourne","totalHours":13},
        {"id":"458100","email":"fbraam35@forbes.com","firstName":"Franzen","lastName":"Braam","totalHours":145},
        {"id":"127579","email":"sschoffel36@purevolume.com","firstName":"Simeon","lastName":"Schoffel","totalHours":103},
        {"id":"112558","email":"dpantin37@redcross.org","firstName":"Diane-marie","lastName":"Pantin","totalHours":79},
        {"id":"993193","email":"gmacgettigen38@wired.com","firstName":"Grove","lastName":"MacGettigen","totalHours":160},
        {"id":"123354","email":"twoolstenholmes39@mtv.com","firstName":"Torey","lastName":"Woolstenholmes","totalHours":158},
        {"id":"350838","email":"aslogrove3a@biblegateway.com","firstName":"Annalee","lastName":"Slogrove","totalHours":56},
        {"id":"513060","email":"gfoulds3b@mit.edu","firstName":"Georgianna","lastName":"Foulds","totalHours":142},
        {"id":"209430","email":"cwennam3c@technorati.com","firstName":"Cynde","lastName":"Wennam","totalHours":46},
        {"id":"481939","email":"edeinert3d@omniture.com","firstName":"Ely","lastName":"Deinert","totalHours":186},
        {"id":"612534","email":"dedwin3e@e-recht24.de","firstName":"Dun","lastName":"Edwin","totalHours":133},
        {"id":"141987","email":"ctilt3f@goodreads.com","firstName":"Cleo","lastName":"Tilt","totalHours":36},
        {"id":"031973","email":"thaverty3g@cnn.com","firstName":"Ted","lastName":"Haverty","totalHours":107},
        {"id":"363050","email":"gdalbey3h@nasa.gov","firstName":"Gerardo","lastName":"Dalbey","totalHours":185},
        {"id":"069367","email":"hbartak3i@sakura.ne.jp","firstName":"Heidie","lastName":"Bartak","totalHours":20},
        {"id":"877765","email":"oburgoyne3j@youtube.com","firstName":"Orlando","lastName":"Burgoyne","totalHours":40},
        {"id":"552670","email":"bspottiswoode3k@webs.com","firstName":"Baily","lastName":"Spottiswoode","totalHours":84},
        {"id":"708607","email":"kstolle3l@globo.com","firstName":"Kristos","lastName":"Stolle","totalHours":34},
        {"id":"048068","email":"mlowthian3m@scientificamerican.com","firstName":"Marybeth","lastName":"Lowthian","totalHours":198},
        {"id":"731706","email":"gsiegertsz3n@sakura.ne.jp","firstName":"Griz","lastName":"Siegertsz","totalHours":92},
        {"id":"970319","email":"edugget3o@example.com","firstName":"Edmund","lastName":"Dugget","totalHours":118},
        {"id":"122031","email":"skuscha3p@rediff.com","firstName":"Sarah","lastName":"Kuscha","totalHours":16},
        {"id":"847018","email":"ccannaway3q@simplemachines.org","firstName":"Cory","lastName":"Cannaway","totalHours":138},
        {"id":"536590","email":"skimpton3r@miibeian.gov.cn","firstName":"Scotty","lastName":"Kimpton","totalHours":191},
        {"id":"122582","email":"bivain3s@phoca.cz","firstName":"Berke","lastName":"Ivain","totalHours":195},
        {"id":"089449","email":"dgreening3t@foxnews.com","firstName":"Davin","lastName":"Greening","totalHours":50},
        {"id":"781085","email":"asainsberry3u@buzzfeed.com","firstName":"Averyl","lastName":"Sainsberry","totalHours":11},
        {"id":"015500","email":"kslatten3v@arizona.edu","firstName":"Kiel","lastName":"Slatten","totalHours":105},
        {"id":"981784","email":"kismail3w@cargocollective.com","firstName":"Kare","lastName":"Ismail","totalHours":20},
        {"id":"946084","email":"gstammler3x@vk.com","firstName":"Georgeanne","lastName":"Stammler","totalHours":39},
        {"id":"096306","email":"csitlington3y@github.com","firstName":"Catlee","lastName":"Sitlington","totalHours":174},
        {"id":"927846","email":"mbehnen3z@opera.com","firstName":"Moreen","lastName":"Behnen","totalHours":162},
        {"id":"046349","email":"fhaile40@parallels.com","firstName":"Filberte","lastName":"Haile","totalHours":147},
        {"id":"104617","email":"sgraveney41@ed.gov","firstName":"Starlene","lastName":"Graveney","totalHours":190},
        {"id":"709461","email":"fspaducci42@ft.com","firstName":"Florentia","lastName":"Spaducci","totalHours":94},
        {"id":"405126","email":"obaigent43@ebay.com","firstName":"Olive","lastName":"Baigent","totalHours":47},
        {"id":"300816","email":"atwidle44@goo.gl","firstName":"Antin","lastName":"Twidle","totalHours":103},
        {"id":"288081","email":"cpolle45@accuweather.com","firstName":"Carlyle","lastName":"Polle","totalHours":123},
        {"id":"456637","email":"ybeebis46@bloomberg.com","firstName":"Yettie","lastName":"Beebis","totalHours":86},
        {"id":"682860","email":"asmickle47@weebly.com","firstName":"Alonzo","lastName":"Smickle","totalHours":13},
        {"id":"269548","email":"rhernik48@wordpress.org","firstName":"Ree","lastName":"Hernik","totalHours":136},
        {"id":"763341","email":"bbadam49@lulu.com","firstName":"Beatrisa","lastName":"Badam","totalHours":183},
        {"id":"202500","email":"lholdworth4a@wikimedia.org","firstName":"Lindi","lastName":"Holdworth","totalHours":200},
        {"id":"271833","email":"cpeeters4b@vistaprint.com","firstName":"Cord","lastName":"Peeters","totalHours":149},
        {"id":"848178","email":"msiddeley4c@reddit.com","firstName":"Margarette","lastName":"Siddeley","totalHours":116},
        {"id":"811678","email":"schsteney4d@networksolutions.com","firstName":"Slade","lastName":"Chsteney","totalHours":172},
        {"id":"000619","email":"loutright4e@usgs.gov","firstName":"Levey","lastName":"Outright","totalHours":38},
        {"id":"299178","email":"qromanini4f@surveymonkey.com","firstName":"Quintana","lastName":"Romanini","totalHours":159},
        {"id":"235910","email":"mwhetnell4g@europa.eu","firstName":"Mikel","lastName":"Whetnell","totalHours":200},
        {"id":"145642","email":"gliggett4h@surveymonkey.com","firstName":"Gustav","lastName":"Liggett","totalHours":188},
        {"id":"071171","email":"fferrarotti4i@rambler.ru","firstName":"Florry","lastName":"Ferrarotti","totalHours":170},
        {"id":"894875","email":"tmatussow4j@linkedin.com","firstName":"Tildy","lastName":"Matussow","totalHours":199},
        {"id":"572432","email":"vdavidovicz4k@washington.edu","firstName":"Valina","lastName":"Davidovicz","totalHours":196},
        {"id":"182798","email":"lboscott4l@miitbeian.gov.cn","firstName":"Lucy","lastName":"Boscott","totalHours":90},
        {"id":"811865","email":"msmitheman4m@tinyurl.com","firstName":"Melli","lastName":"Smitheman","totalHours":81},
        {"id":"060737","email":"mwhelpdale4n@bluehost.com","firstName":"Molli","lastName":"Whelpdale","totalHours":186},
        {"id":"305277","email":"gambrogi4o@fastcompany.com","firstName":"Garrot","lastName":"Ambrogi","totalHours":192},
        {"id":"926361","email":"yrisbie4p@tiny.cc","firstName":"Yoshi","lastName":"Risbie","totalHours":182},
        {"id":"843243","email":"kquantick4q@nationalgeographic.com","firstName":"Kanya","lastName":"Quantick","totalHours":22},
        {"id":"516357","email":"sjenik4r@addtoany.com","firstName":"Sam","lastName":"Jenik","totalHours":154},
        {"id":"562581","email":"cparris4s@goo.ne.jp","firstName":"Carolann","lastName":"Parris","totalHours":74},
        {"id":"252198","email":"btock4t@domainmarket.com","firstName":"Billy","lastName":"Tock","totalHours":21},
        {"id":"379865","email":"mgallant4u@yelp.com","firstName":"Malcolm","lastName":"Gallant","totalHours":120},
        {"id":"624672","email":"tdowner4v@stumbleupon.com","firstName":"Trude","lastName":"Downer","totalHours":135},
        {"id":"035304","email":"hnortcliffe4w@dropbox.com","firstName":"Hardy","lastName":"Nortcliffe","totalHours":186},
        {"id":"112872","email":"dcundy4x@nasa.gov","firstName":"Dalton","lastName":"Cundy","totalHours":173},
        {"id":"059095","email":"kgrishechkin4y@php.net","firstName":"Koo","lastName":"Grishechkin","totalHours":189},
        {"id":"546369","email":"bdagostino4z@domainmarket.com","firstName":"Brewster","lastName":"D'Agostino","totalHours":71},
        {"id":"189342","email":"cgoodrum50@privacy.gov.au","firstName":"Cornela","lastName":"Goodrum","totalHours":62},
        {"id":"496018","email":"bdonnelly51@wunderground.com","firstName":"Bard","lastName":"Donnelly","totalHours":189},
        {"id":"962784","email":"cdowling52@wufoo.com","firstName":"Chickie","lastName":"Dowling","totalHours":5},
        {"id":"410165","email":"wmargrem53@123-reg.co.uk","firstName":"Winnah","lastName":"Margrem","totalHours":156},
        {"id":"730391","email":"jharly54@theglobeandmail.com","firstName":"Jobie","lastName":"Harly","totalHours":65},
        {"id":"100855","email":"cdulson55@posterous.com","firstName":"Claus","lastName":"Dulson","totalHours":189},
        {"id":"615620","email":"qmcknish56@fotki.com","firstName":"Queenie","lastName":"McKnish","totalHours":99},
        {"id":"420137","email":"gkidsley57@go.com","firstName":"Gordie","lastName":"Kidsley","totalHours":107},
        {"id":"447102","email":"wdrinkwater58@indiegogo.com","firstName":"Winifield","lastName":"Drinkwater","totalHours":182},
        {"id":"478735","email":"bkerswell59@sfgate.com","firstName":"Beatrisa","lastName":"Kerswell","totalHours":61},
        {"id":"507389","email":"hbohey5a@usgs.gov","firstName":"Holden","lastName":"Bohey","totalHours":128},
        {"id":"797104","email":"gfranks5b@a8.net","firstName":"Godfry","lastName":"Franks","totalHours":10},
        {"id":"269486","email":"bdiscombe5c@redcross.org","firstName":"Bryn","lastName":"Discombe","totalHours":134},
        {"id":"632390","email":"cofogarty5d@ifeng.com","firstName":"Cello","lastName":"O'Fogarty","totalHours":39},
        {"id":"056779","email":"fgrocutt5e@taobao.com","firstName":"Fernandina","lastName":"Grocutt","totalHours":10},
        {"id":"953187","email":"dsamwyse5f@indiegogo.com","firstName":"Devin","lastName":"Samwyse","totalHours":121},
        {"id":"333275","email":"mmatijasevic5g@wix.com","firstName":"Maurise","lastName":"Matijasevic","totalHours":155},
        {"id":"123388","email":"tbostick5h@ted.com","firstName":"Thurstan","lastName":"Bostick","totalHours":133},
        {"id":"616467","email":"ndagnall5i@eventbrite.com","firstName":"Noni","lastName":"Dagnall","totalHours":179},
        {"id":"288089","email":"hduran5j@paypal.com","firstName":"Henryetta","lastName":"Duran","totalHours":148}]

    const data = readable(rawData);


    const table = createTable(data, {
        page: addPagination(),
        tableFilter: addTableFilter(),
        sort: addSortBy(),
        select: addSelectedRows(),
    });


    const columns = table.createColumns([
        table.column({
            id: 'selected',
            header: (_, {pluginStates}) => {
                const {allPageRowsSelected} = pluginStates.select;
                return createRender(Selection, {
                    isSelected: allPageRowsSelected,
                });
            },
            cell: ({row}, {pluginStates}) => {
                const {isSomeSubRowsSelected, isSelected} = pluginStates.select.getRowState(row);
                return createRender(Selection, {
                    isSelected,
                    isSomeSubRowsSelected,
                    class: "checkbox-cell", // Add this line
                });
            },
            plugins: {
                sort: {
                    disable: true,
                },
            },
            attrs: {
                class: 'checkbox-cell'  // Add this line
            }
        }),

        table.column({
            header: "Student ID",
            accessor: "id",
            plugins: {sort: {disable: true}, tableFilter: {exclude: false}},
        }),

        table.column({
            header: "Email",
            accessor: "email",
            plugins: {sort: {disable: false}, tableFilter: {exclude: false}},
        }),
        table.column({
            header: "First Name",
            accessor: "firstName",
            plugins: {sort: {disable: false}, tableFilter: {exclude: false}},
        }),
        table.column({
            header: "Last Name",
            accessor: "lastName",
            plugins: {sort: {disable: false}, tableFilter: {exclude: true}},
        }),
        table.column({
            header: "Total Hours",
            accessor: "totalHours",
            plugins: {sort: {disable: false}, tableFilter: {exclude: true}},
        }),
        table.column({
            header: "",
            accessor: ({id}) => id,
            cell: (item) => {
                return createRender(Action, {id: item.value});
            },
            plugins: {
                sort: {
                    disable: true,
                },
                tableFilter: {exclude: true}
            },
        }),
    ]);
    const tableModel = table.createViewModel(columns);

    const { headerRows, pageRows, tableAttrs, tableBodyAttrs, pluginStates } = tableModel;
    // const {headerRows, pageRows, tableAttrs, tableBodyAttrs, pluginStates} = table.createViewModel(columns);
    const {pageIndex, pageCount, pageSize, hasNextPage, hasPreviousPage} = pluginStates.page;

    const {filterValue} = pluginStates.tableFilter;

    const {sortKeys} = pluginStates.sort;

    const {selectedDataIds} = pluginStates.select;
</script>

<style>
    .admin-table-root {
        display: flex;
        flex: 1;
        width: 100%;
        flex-direction: column;
    }

    .table-cont {
        display: flex;
        width: 100%;
        border-radius: 10px;
        border: 1px solid var(--muted);
        box-sizing: border-box;
    }

    .table-row {
        padding: 8px;
        box-sizing: content-box;
    }

    .table-header {
        padding-left: 8px;
        padding-right: 8px;
        text-align: left;
        height: 2rem;
        box-sizing: border-box;
        color: var(--muted);
    }

    table {
        width: 100%;
        border-collapse: collapse;
        margin: 0;
    }

    td:first-child {
        padding-right: 0;
        width: 20px;
        text-align: center;
    }

    th:first-child {
        padding-left: 8px;
        padding-right: 0;
        width: 20px;
        text-align: center;
    }

    td:last-child {
        padding-left: 0;
        padding-right: 8px;
        width: 32px;
        text-align: center;
    }

    th:last-child {
        padding-left: 0;
        padding-right: 8px;
        width: 32px;
        text-align: center;
    }

    .table-head{
        height: 2.5rem;
    }

    th {
        height: 2.5rem;
        border-bottom: 1px solid var(--muted);
    }

    tr {
        border-bottom: 1px solid var(--muted);
        padding: 0.5rem;
    }

    .matches {
        background: rgba(46, 196, 182, 0.2);
    }

    tr:last-child {
        border-width: 0px;
    }
</style>

<div class="admin-table-root">

<!--<pre>{JSON.stringify(-->
    <!--    {-->
    <!--        $pageIndex: $pageIndex,-->
    <!--        $pageCount: $pageCount,-->
    <!--        $pageSize: $pageSize,-->
    <!--    },-->
    <!--    null,-->
    <!--    2,-->
    <!--)}</pre>-->

    <!--    <pre>{JSON.stringify(-->
    <!--        {-->
    <!--            $selectedDataIds: $selectedDataIds,-->
    <!--        },-->
    <!--        null,-->
    <!--        2,-->
    <!--    )}</pre>-->

    <input bind:value={$filterValue} placeholder="Search rows..." type="text"/>


<!--    <label for="page-size">Page size</label>-->
<!--    <input bind:value={$pageSize} id="page-size" min={1} type="number"/>-->

<!--    <input bind:checked={filterHour} type="checkbox"/>-->

    <div class="table-cont">
        <table {...$tableAttrs}>
            <thead class="table-head">
            {#each $headerRows as headerRow (headerRow.id)}
                <Subscribe rowAttrs={headerRow.attrs()} let:rowAttrs>
                    <tr {...rowAttrs} class="table-ro">
                        {#each headerRow.cells as cell (cell.id)}
                            <Subscribe attrs={cell.attrs()} let:attrs props={cell.props()} let:props>
                                <th {...attrs} on:click={props.sort.toggle} class="table-header">
                                    {#if cell.id !== "select" && cell.id !== "actions"}
                                        <TableHead
                                                {props}
                                                {tableModel}
                                                cellId={cell.id}
                                        >
                                            <Render of={cell.render()} /></TableHead
                                        >
                                    {:else}
                                        <Render of={cell.render()} />
                                    {/if}
                                </th>


                            </Subscribe>
                        {/each}
                    </tr>
                </Subscribe>
            {/each}
            </thead>
            <tbody {...$tableBodyAttrs}>
            {#each $pageRows as row (row.id)}
                <Subscribe rowAttrs={row.attrs()} let:rowAttrs>
                    <tr {...rowAttrs} class:matches={$selectedDataIds[row.id] && "selected"} class="table-ro">
                        {#each row.cells as cell (cell.id)}
                            <Subscribe attrs={cell.attrs()} let:attrs props={cell.props()} let:props>
                                <td {...attrs} class:matches={props.tableFilter.matches} class="table-row">
                                    <Render of={cell.render()}/>
                                </td>
                            </Subscribe>
                        {/each}
                    </tr>
                </Subscribe>
            {/each}
            </tbody>
        </table>
    </div>
    <div>
        <button
                disabled={!$hasPreviousPage}
                on:click={() => $pageIndex--}>Previous page
        </button
        >
        {$pageIndex + 1} out of {$pageCount}
        <button
                disabled={!$hasNextPage}
                on:click={() => $pageIndex++}>Next page
        </button
        >
    </div>
</div>