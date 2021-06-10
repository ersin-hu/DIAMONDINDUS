export const locations =
    [{
        markerID: 0,
        title: 'Centraal station',
        adres: 'Stationsplein 10, 1211 EX Hilversum',
        description: 'Hallo, mijn naam is Hendrikus Keune. In het begin van de vorige eeuw ben ik samen met veel anderen vanuit Amsterdam naar Hilversum verhuisd, omdat de woonomstandigheden hier beter zijn en ik hier meer kon verdienen. Tegenwoordig verhuizen ook veel mensen naar Hilversum, omdat ze Amsterdam te druk vinden. In 1880 had Hilversum 9615 inwoners. Hoeveel mensen denken jullie dat er tussen 1880 en 1910 naar Hilversum zijn verhuisd?',
        latitude: 52.226632,
        longitude: 5.180905,
        image: require("../assets/station.jpg"),
        question: 'Hoeveel mensen denken jullie dat er tussen 1880 en 1910 naar Hilversum zijn verhuisd?',
        anwser: 'C',
        choice:
        {
            A: '1673',
            B: '7229',
            C: '21844',
        },
    },
        {
            markerID: 1,
            title: 'Wijk ‘over het spoor’',
            adres: 'Noorderweg 12',
            description: 'Op deze locatie, langs het spoor, werd in 1887 de eerste slijperij van Hilversum geopend, genaamd “Over Het Spoor”. Deze naam is ontstaan door het hoge tempo waarop Hilversum toen industrialiseerde. Ontdek op deze locatie hoeveel diamantslijperijen Hilversum op het hoogtepunt in 1912 telde en hoeveel slijpmolens in totaal werden gebruikt. Dit doe je door de muurtekening hier in de buurt te vinden en deze diagram met behulp van je telefoon compleet te maken. ',
            latitude: 52.227759522909714,
            longitude: 5.181212663953345,
            image: require("../assets/marktplein.jpg"),
        },
        {
            markerID: 2,
            title: 'De Volharding',
            adres: 'Liebergerweg 3',
            description: 'Slijperij “De Volharding” werd in 1906 opgericht (door F.F. Kramer) en is een van de laatste diamantslijperijen die nog in takt is gebleven. Neem een kijkje in deze slijperij. Doe dit door je telefoon voor het gebouw langs te bewegen. In dit gebouw zijn een aantal diamanten verstopt. Hoeveel zijn dit er volgens jou?',
            latitude: 52.22270338140939,
            longitude: 5.1866281197827915,
            image: require("../assets/gemeentehuis.jpg"),
            question: 'Tot wanneer was deze slijperij actief?',
            anwser: 'C',
            choice:
                {
                    A: '1673',
                    B: '1881',
                    C: '2000',
                },
        },
        {
            markerID: 3,
            title: 'Slijperij de Bloem',
            description: 'Op 30 juli 1897 werd de slijperij de Bloem opgericht door diamantbewerker Jacob Rijnhard Boonacker. Deze slijperij werd vernoemd naar ‘de Bloem’, aangezien de eerste slijperij van Jacob een mislukking was geworden wegens te weinig animo onder diamantbewerkers. Later werd de slijperij overgenomen door de Joodse Meijer Salomons. Neem het op deze locatie tegen elkaar op en ontdek wie het snelste een diamant kan slijpen! Dit doe je door in de volgende minigame zo snel mogelijk over het scherm van je telefoon te vegen.',
            latitude: 52.22007344329583,
            longitude: 5.184664305790834,
            image: require("../assets/muziekcentrum.jpg"),
            question: 'Slijp zo snel mogelijk de diamand!',
            imageQuestion: require("../assets/diamond.png"),
        },
        {
            markerID: 4,
            title: 'Slijperij Flora',
            description: 'Slijperij Flora, opgericht in 1906, is een van de twee slijperijen in Hilversum die na de kolenbezuinigingen in 1916 nog is blijven bestaan. Het pand van deze slijperij is door de jaren heen redelijk intact gebleven. Toch zijn er dingen veranderd. Vul in deze activiteit de oude foto aan door zelf de hedendaagse helft te fotograferen.',
            latitude: 52.221589566799224,
            longitude: 5.165100647702832,
            image: require("../assets/trompenberg.jpg"),
            question: 'Wat is het verschil met de oude slijperij?',
            imageQuestion: require("../assets/flora.jpg"),
            anwser: 'C B A',
            choice:
                {
                    A: 'De muur',
                    B: 'De ramen',
                    C: 'De kleur',
                },

        },
        {
            markerID: 5,
            title: 'Ons Gebouw',
            description: '',
            latitude: 52.219291291419694,
            longitude: 5.16769920644054,
            image: require("../assets/huisje.jpg"),
            question: 'Zoek de verschillen!',
            anwser: 'B',
            choice:
                {
                    A: 'Diamantslijperij voor de socialistische partij',
                    B: 'Hoofdkantoor van de socialistische partij (SDAP)',
                    C: 'Ontmoetingsplaats voor de diamantbewerkers',
                },
            afterAnswer: 'De Socialistische Democratische Arbeiders Partij (SDAP) zette zich in voor de rechten van de arbeiders van de diamantindustrie. ' +
                'Het pand “Ons Gebouw” is gefinancierd door vrijwillige donaties van leden. '
        },
        {
            markerID: 6,
            title: 'Woningbouwcomplex Verschuyl',
            description: 'In deze straat woonde veel diamantbewerkers, waaronder ik. Met mijn gezin woonde ik in dit kleine huisje. Het was wel een beetje krap. ',
            latitude: 52.214314593777594,
            longitude:  5.170058600181996,
            image: require("../assets/zonnestraal.jpg"),
            question: 'Met hoeveel woonden zij hier?',
            anwser: 'C',
            choice:
                {
                    A: '3',
                    B: '6',
                    C: '9',
                },
            afterAnswer: 'Samen met mijn vrouw en 7 kinderen woonde ik hier. Met elkaar deelden we 2 slaapkamers.'
        },
        {
            markerID: 7,
            title: 'Zonnestraal',
            description: 'Veel van de Hilversumse diamantbewerkers kregen last van tuberculose, door de slechte hygiëne en het gebrek aan zonlicht en frisse lucht tijdens hun werkzaamheden. Deze locatie, de Zonnestraal, is in 1928 geopend om zorg te kunnen verlenen aan deze arbeiders. Geniet na jullie boswandeling op deze locatie van een welverdiend kopje koffie of glaasje fris en neem een kijkje in dit indrukwekkende pand. Op deze locatie eindigt de Hilversum History Hunt. Na voltooiing van alle opdrachten ontvang je hier jouw goodiebag. ',
            latitude: 52.20072574646049,
            longitude: 5.15397627626054,
            image: require("../assets/slijptol.jpg")
        },
        // {
        //     markerID: 8,
        //     title: 'Nike colloseum',
        //     description: 'Het hooggelegen Gooi is een van de oudst bewoonde streken van Nederland. Prehistorische grafheuvels en vondsten uit de Hilversumcultuur getuigen daar nog van. ' +
        //         'Water verzamelde zich op de lager gelegen plaatsen, en dat werden drinkplaatsen voor het vee. De dorpen Hilversum, Laren, Blaricum en Bussum zijn rond die drinkplaatsen ontstaan. ' +
        //         'Door de arme zandgronden was er voornamelijk schapenhouderij. Vroege Hilversummers leefden eenvoudig. Zo gaven zij hun hoeven nooit een naam en, in tegenstelling tot Blaricummers en ' +
        //         'Huizers waar boeren brede, hoge hagen als erfafscheiding plaatsten (vaak doornen of beuken), lieten vrijwel alle Hilversumse boeren het erf open of zetten er een eenvoudig houten hekje omheen. ' +
        //         'Bij het woongedeelte hadden zij vaak een eenvoudig grasveldje met een paar bomen om schaduw te bieden. De hoeven hadden ook nooit een versiering, behalve soms ankers die tot krullen gesmeed waren ' +
        //         'om het bouwjaar aan te duiden, naar de stijl van sobere, eenvoudige Saksische boerderijen. Markant is dat Hilversummers bijna nooit een verdieping op hun hoeve hadden: ze wilden alles op de begane ' +
        //         'grond hebben. De hoeven waren dan ook zeer langgerekt. ' +
        //         'Dit fenomeen kwam nog tot zeker 1880 voor, toen het Wilhelmina Hotel geopend werd. De \'oude\' Hilversummers dachten dan ook dat het hotel geen succes zou worden omdat het hotel uit verdiepingen bestond.',
        //     latitude: 52.212886,
        //     longitude: 5.189491,
        //     image: require("../assets/nike.jpg")
        // },
        // {
        //     markerID: 9,
        //     title: 'Schapenkamp',
        //     description: 'Het hooggelegen Gooi is een van de oudst bewoonde streken van Nederland. Prehistorische grafheuvels en vondsten uit de Hilversumcultuur getuigen daar nog van. ' +
        //         'Water verzamelde zich op de lager gelegen plaatsen, en dat werden drinkplaatsen voor het vee. De dorpen Hilversum, Laren, Blaricum en Bussum zijn rond die drinkplaatsen ontstaan. ' +
        //         'Door de arme zandgronden was er voornamelijk schapenhouderij. Vroege Hilversummers leefden eenvoudig. Zo gaven zij hun hoeven nooit een naam en, in tegenstelling tot Blaricummers en ' +
        //         'Huizers waar boeren brede, hoge hagen als erfafscheiding plaatsten (vaak doornen of beuken), lieten vrijwel alle Hilversumse boeren het erf open of zetten er een eenvoudig houten hekje omheen. ' +
        //         'Bij het woongedeelte hadden zij vaak een eenvoudig grasveldje met een paar bomen om schaduw te bieden. De hoeven hadden ook nooit een versiering, behalve soms ankers die tot krullen gesmeed waren ' +
        //         'om het bouwjaar aan te duiden, naar de stijl van sobere, eenvoudige Saksische boerderijen. Markant is dat Hilversummers bijna nooit een verdieping op hun hoeve hadden: ze wilden alles op de begane ' +
        //         'grond hebben. De hoeven waren dan ook zeer langgerekt. ' +
        //         'Dit fenomeen kwam nog tot zeker 1880 voor, toen het Wilhelmina Hotel geopend werd. De \'oude\' Hilversummers dachten dan ook dat het hotel geen succes zou worden omdat het hotel uit verdiepingen bestond.',
        //     latitude: 52.224442,
        //     longitude: 5.181236,
        //     image: require("../assets/schapenkamp.jpg")
        // },


    ]
