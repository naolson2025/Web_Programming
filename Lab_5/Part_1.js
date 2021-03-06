/* Lab 5, Part 1 - write the code requested by lines marked //TODO  */

/* a. Use this JavaScript object of exchange rates relative to Euros.
The properties are currency symbols, the values are the exchange rates.
Data source: http://fixer.io/
* */

var rates = {
    "AUD": 1.5417,
    "BGN": 1.9558,
    "BRL": 3.8959,
    "CAD": 1.5194,
    "CHF": 1.1787
};

// TODO add a new property for Swiss Francs. Symbol is CHF, value is 1.1787.
//done
// TODO if you had 100 Euros, calculate the equivalent value in Australian Dollars (AUD)
let num_of_euros = 100;

let euro_to_AUD = num_of_euros * rates.AUD;

console.log(euro_to_AUD);
// TODO write code to identify the currency symbol that has the highest exchange rate compared to Euros.
// In other words, identify the property with the largest value. the answer is BRL (Brazilian Real) at 3.8959 BRL to 1 Euro.

let rates_array = [];

for (let currency in rates){
    rates_array.push(rates[currency]);
}

rates_array.sort();

let highest_exchange_rate = rates_array[rates_array.length - 1];

console.log(highest_exchange_rate);

/* b. Use this JavaScript object. This represents the current position of the International Space Station
at 1pm on January 12th, fetched from http://api.open-notify.org/iss-now.json.
 */

var iss_location = {
    "timestamp": 1515784140,
    "iss_position":
        {
            "latitude": "49.2167",
            "longitude": "100.5363"
        },
    "message": "success"
};

// TODO Extract the latitude value, and log it to the console.

console.log(iss_location.iss_position.latitude);

// TODO Extract the longitude value, and log it to the console.

console.log(iss_location.iss_position.longitude);


/* c. Use this JavaScript array of objects of cat owners, and their cats. Source, moderncat.com
 */

var cats_and_owners = [
    { name: 'Bill Clinton', cat : 'Socks' },
    { name: 'Gary Oldman', cat : 'Soymilk' },
    { name: 'Katy Perry', cat : 'Kitty Purry' },
    { name: 'Snoop Dogg', cat : 'Miles Davis' }
];

// TODO print Gary Oldman's cat's name

cats_and_owners.forEach(function (cat_and_owner) {
    if (cat_and_owner['name'] === 'Gary Oldman'){
        console.log(cat_and_owner['cat'])
    }
});

// TODO Taylor Swift's cat is called  'Meredith'. Add this data to the array.

let t_swift = {name: 'Taylor Swift', cat: 'Meredith'};

cats_and_owners.push(t_swift);

console.log(cats_and_owners);

// TODO write a loop to print each cat owner, and their cat's name, one per line. Use the forEach style.

cats_and_owners.forEach(function (cat_and_owner) {
   console.log(cat_and_owner.name);
   console.log(cat_and_owner.cat);
});

/* d. Use the following JSON object, describing the Nobel Prize winners in 2017.
Source http://api.nobelprize.org/v1/prize.json?year=2017
* */



var nobel_prize_winners_2017 = {
    "prizes":[
        {
            "year":"2017",
            "category":"physics",
            "laureates":[
                {
                    "id":"941",
                    "firstname":"Rainer",
                    "surname":"Weiss",
                    "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                    "share":"2"
                },
                {
                    "id":"942",
                    "firstname":"Barry C.",
                    "surname":"Barish",
                    "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                    "share":"4"
                },
                {
                    "id":"943",
                    "firstname":"Kip S.",
                    "surname":"Thorne",
                    "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                    "share":"4"
                }
            ]
        },
        {
            "year":"2017",
            "category":"chemistry",
            "laureates":[
                {
                    "id":"944",
                    "firstname":"Jacques",
                    "surname":"Dubochet",
                    "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                    "share":"3"
                },
                {
                    "id":"945",
                    "firstname":"Joachim",
                    "surname":"Frank",
                    "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                    "share":"3"
                },
                {
                    "id":"946",
                    "firstname":"Richard",
                    "surname":"Henderson",
                    "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                    "share":"3"
                }
            ]
        },
        {
            "year":"2017",
            "category":"medicine",
            "laureates":[
                {
                    "id":"938",
                    "firstname":"Jeffrey C.",
                    "surname":"Hall",
                    "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                    "share":"3"
                },
                {
                    "id":"939",
                    "firstname":"Michael",
                    "surname":"Rosbash",
                    "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                    "share":"3"
                },
                {
                    "id":"940",
                    "firstname":"Michael W.",
                    "surname":"Young",
                    "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                    "share":"3"
                }
            ]
        },
        {
            "year":"2017",
            "category":"literature",
            "laureates":[
                {
                    "id":"947",
                    "firstname":"Kazuo",
                    "surname":"Ishiguro",
                    "motivation":"\"who, in novels of great emotional force, has uncovered the abyss beneath our illusory sense of connection with the world\"",
                    "share":"1"
                }
            ]
        },
        {
            "year":"2017",
            "category":"peace",
            "laureates":[
                {
                    "id":"948",
                    "firstname":"International Campaign to Abolish Nuclear Weapons (ICAN)",
                    "motivation":"\"for its work to draw attention to the catastrophic humanitarian consequences of any use of nuclear weapons and for its ground-breaking efforts to achieve a treaty-based prohibition of such weapons\"",
                    "share":"1",
                    "surname":""
                }
            ]
        },
        {
            "year":"2017",
            "category":"economics",
            "laureates":[
                {
                    "id":"949",
                    "firstname":"Richard H.",
                    "surname":"Thaler",
                    "motivation":"\"for his contributions to behavioural economics\"",
                    "share":"1"
                }
            ]
        }
    ]
};

console.log();

// TODO print the full name of the Literature Nobel laureate.

nobel_prize_winners_2017.prizes.forEach(function (prize) {
    if (prize.category === 'literature'){
        prize.laureates.forEach(function (person) {
            console.log(person.firstname + ' ' + person.surname)
        })
    }
});

// TODO print the ids of each of the Physics Nobel laureates. Your code should still work without modification if a laureate was added, or removed.

nobel_prize_winners_2017.prizes.forEach(function (prize) {
   if (prize.category === 'physics'){
       prize.laureates.forEach(function (person) {
           console.log(person.id)
       })
   }
});

// TODO write code to print the names of all of the prize categories (So your output would start physics, chemistry, medicine... ).

nobel_prize_winners_2017.prizes.forEach(function (prize) {
    console.log(prize.category)
});

// TODO write code to print the total number of prize categories
let category_count = 0;

nobel_prize_winners_2017.prizes.forEach(function (prize) {
    category_count++
});

console.log(category_count);

// TODO write code to count the total number of laureates from 2017. (have a good look at how the JSON is structured, and think about what loop(s) you'll need to write.)
let laureate_count = 0;

nobel_prize_winners_2017.prizes.forEach(function (prize) {
    prize.laureates.forEach(function (people) {
        laureate_count++
    })
});

console.log(laureate_count);