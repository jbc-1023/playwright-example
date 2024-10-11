function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }

function getRandomName(option="first"){
    const names_first = [
        "Aaron", "Abigail", "Adam", "Adrian", "Aiden", "Aimee", "Alan", "Albert", "Alec", "Alexa",
        "Alexander", "Alexis", "Alice", "Alicia", "Alisha", "Alison", "Amanda", "Amber", "Amelia", "Amy",
        "Andrea", "Andrew", "Angela", "Anita", "Anna", "Anne", "Annie", "Anthony", "April", "Ariana",
        "Arthur", "Ashley", "Ashton", "Aubrey", "Audrey", "Austin", "Ava", "Bailey", "Barbara", "Barry",
        "Becky", "Ben", "Benjamin", "Bennett", "Beth", "Bethany", "Betty", "Bianca", "Bill", "Billy",
        "Blake", "Bob", "Bonnie", "Brad", "Bradley", "Brandon", "Brayden", "Brenda", "Brett", "Brian",
        "Brianna", "Brittany", "Brooke", "Bruce", "Bryan", "Caitlin", "Caleb", "Callum", "Cameron", "Carl",
        "Carla", "Carlos", "Carmen", "Caroline", "Casey", "Cassandra", "Catherine", "Cathy", "Cecilia", "Cedric",
        "Chad", "Charles", "Charlie", "Charlotte", "Chase", "Chelsea", "Cheryl", "Chris", "Christian", "Christina",
        "Christine", "Christopher", "Claire", "Clara", "Clarence", "Claudia", "Clayton", "Cody", "Colin", "Connie",
        "Connor", "Corey", "Courtney", "Craig", "Crystal", "Curtis", "Cynthia", "Daisy", "Dakota", "Damian",
        "Dan", "Dana", "Daniel", "Danielle", "Danny", "Daphne", "Darren", "Darryl", "Dave", "David",
        "Dawn", "Dean", "Deanna", "Debbie", "Deborah", "Declan", "Dennis", "Derek", "Derrick", "Desmond",
        "Diana", "Diane", "Dominic", "Don", "Donald", "Donna", "Doris", "Dorothy", "Douglas", "Drew",
        "Duncan", "Dustin", "Dylan", "Eddie", "Edgar", "Edith", "Edmund", "Edward", "Edwin", "Eileen",
        "Elaine", "Eleanor", "Elena", "Elijah", "Elisa", "Elise", "Eliza", "Elizabeth", "Ella", "Elliot",
        "Elliott", "Ellis", "Emily", "Emma", "Eric", "Erica", "Erik", "Erin", "Ernest", "Ethan",
        "Eugene", "Eva", "Evan", "Evelyn", "Faith", "Felicity", "Felix", "Fiona", "Finn", "Florence",
        "Frances", "Francis", "Frank", "Franklin", "Fred", "Freddie", "Gabriel", "Gail", "Gareth", "Gary",
        "Gavin", "Gemma", "Gene", "Geoffrey", "George", "Georgia", "Gerald", "Gertrude", "Gina", "Ginger",
        "Gladys", "Glenn", "Gloria", "Gordon", "Grace", "Graham", "Grant", "Greg", "Gregory", "Gwen",
        "Hailey", "Hannah", "Harley", "Harold", "Harry", "Hazel", "Heather", "Hector", "Heidi", "Helen",
        "Helena", "Henry", "Herbert", "Holly", "Howard", "Hugh", "Hunter", "Ian", "Ibrahim", "Imogen",
        "Irene", "Isaac", "Isabel", "Isabella", "Isabelle", "Isaiah", "Ivan", "Ivy", "Jack", "Jackson",
        "Jacob", "Jacqueline", "Jake", "James", "Jamie", "Jane", "Janet", "Janice", "Jared", "Jason",
        "Jasper", "Jay", "Jean", "Jeanette", "Jeff", "Jeffrey", "Jenna", "Jennifer", "Jenny", "Jeremy",
        "Jerome", "Jerry", "Jessica", "Jill", "Joan", "Joanne", "Joe", "Joel", "John", "Johnny",
        "Jonathan", "Jordan", "Joseph", "Joshua", "Joy", "Joyce", "Juan", "Judith", "Judy", "Julia",
        "Julian", "Julie", "Justin", "Kara", "Karen", "Karla", "Kate", "Katherine", "Kathleen", "Kathryn",
        "Katie", "Kay", "Keith", "Kelly", "Ken", "Kenneth", "Kerry", "Kevin", "Kim", "Kimberly",
        "Kirk", "Kirsten", "Kurt", "Kyle", "Lana", "Lance", "Laura", "Lauren", "Leah", "Lee",
        "Leon", "Leona", "Leslie", "Lewis", "Liam", "Lillian", "Lily", "Linda", "Lindsay", "Lisa",
        "Lloyd", "Logan", "Lois", "Lola", "Lori", "Louis", "Lucas", "Lucy", "Luis", "Luke",
        "Lydia", "Mack", "Maddison", "Madeline", "Madison", "Maggie", "Malcolm", "Mandy", "Marcus", "Margaret",
        "Maria", "Mariah", "Marie", "Marilyn", "Mark", "Marlene", "Marsha", "Martha", "Martin", "Marvin",
        "Mary", "Mason", "Matilda", "Matt", "Matthew", "Maureen", "Max", "Megan", "Melanie", "Melissa",
        "Michael", "Michele", "Michelle", "Mick", "Mickey", "Mike", "Mildred", "Mindy", "Miranda", "Miriam",
        "Misty", "Mitchell", "Molly", "Monica", "Morgan", "Nancy", "Naomi", "Natalie", "Nathan", "Nathaniel"
    ];
    const names_last = [
        "Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez",
        "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Martin",
        "Lee", "Perez", "Thompson", "White", "Harris", "Sanchez", "Clark", "Ramirez", "Lewis", "Robinson",
        "Walker", "Young", "Allen", "King", "Wright", "Scott", "Torres", "Nguyen", "Hill", "Flores",
        "Green", "Adams", "Nelson", "Baker", "Hall", "Rivera", "Campbell", "Mitchell", "Carter", "Roberts",
        "Gomez", "Phillips", "Evans", "Turner", "Diaz", "Parker", "Cruz", "Edwards", "Collins", "Reyes",
        "Stewart", "Morris", "Morales", "Murphy", "Cook", "Rogers", "Gutierrez", "Ortiz", "Morgan", "Cooper",
        "Peterson", "Bailey", "Reed", "Kelly", "Howard", "Ramos", "Kim", "Cox", "Ward", "Richardson",
        "Watson", "Brooks", "Chavez", "Wood", "James", "Bennett", "Gray", "Mendoza", "Ruiz", "Hughes",
        "Price", "Alvarez", "Castillo", "Sanders", "Patel", "Myers", "Long", "Ross", "Foster", "Jimenez",
        "Powell", "Jenkins", "Perry", "Russell", "Sullivan", "Bell", "Coleman", "Butler", "Henderson", "Barnes",
        "Gonzales", "Fisher", "Vasquez", "Simmons", "Romero", "Jordan", "Patterson", "Alexander", "Hamilton", "Graham",
        "Reynolds", "Griffin", "Wallace", "Moreno", "West", "Cole", "Hayes", "Bryant", "Herrera", "Gibson",
        "Ellis", "Tran", "Medina", "Aguilar", "Stevens", "Murray", "Ford", "Castro", "Marshall", "Owens",
        "Harrison", "Fernandez", "McDonald", "Woods", "Washington", "Kennedy", "Wells", "Vargas", "Henry", "Chen",
        "Freeman", "Webb", "Tucker", "Guzman", "Burns", "Crawford", "Olson", "Simpson", "Porter", "Hunter",
        "Gordon", "Mendez", "Silva", "Shaw", "Snyder", "Mason", "Dixon", "Muñoz", "Hunt", "Hicks",
        "Holmes", "Palmer", "Wagner", "Black", "Robertson", "Boyd", "Rose", "Stone", "Salazar", "Fox",
        "Warren", "Mills", "Meyer", "Rice", "Schmidt", "Garza", "Daniels", "Ferguson", "Nichols", "Stephens",
        "Soto", "Weaver", "Ryan", "Gardner", "Payne", "Grant", "Dunn", "Kelley", "Spencer", "Hawkins",
        "Arnold", "Pierce", "Vazquez", "Hansen", "Peters", "Santos", "Hart", "Bradley", "Knight", "Elliott",
        "Cunningham", "Duncan", "Armstrong", "Hudson", "Carroll", "Lane", "Riley", "Andrews", "Alvarado", "Ray",
        "Delgado", "Berry", "Perkins", "Hoffman", "Johnston", "Matthews", "Pena", "Richards", "Contreras", "Willis",
        "Carpenter", "Lawrence", "Sandoval", "Guerrero", "George", "Chapman", "Rios", "Estrada", "Ortega", "Watkins",
        "Greene", "Nunez", "Wheeler", "Valdez", "Harper", "Burke", "Larson", "Santiago", "Maldonado", "Morrison",
        "Franklin", "Carlson", "Austin", "Dominguez", "Carr", "Lawson", "Jacobs", "O'Brien", "Lynch", "Singh",
        "Vega", "Bishop", "Montgomery", "Oliver", "Jensen", "Harvey", "Williamson", "Gilbert", "Dean", "Sims",
        "Espinoza", "Howell", "Li", "Wong", "Reid", "Hanson", "Le", "McCoy", "Garrett", "Burton",
        "Fuller", "Wang", "Weber", "Welch", "Rojas", "Lucas", "Marquez", "Fields", "Park", "Yang",
        "Little", "Banks", "Padilla", "Day", "Walsh", "Bowman", "Schultz", "Luna", "Fowler", "Mejia",
        "Davidson", "Acosta", "Brewer", "May", "Holland", "Juarez", "Newman", "Pearson", "Curtis", "Cortez",
        "Douglas", "Schneider", "Joseph", "Barrett", "Navarro", "Figueroa", "Keller", "Avila", "Wade", "Molina",
        "Stanley", "Hopkins", "Campos", "Barnett", "Bates", "Chambers", "Caldwell", "Beck", "Lambert", "Miranda",
        "Byrd", "Craig", "Ayala", "Lowe", "Frazier", "Powers", "Neal", "Leonard", "Gregory", "Carrillo",
        "Sutton", "Fleming", "Rhodes", "Shelton", "Schwartz", "Norris", "Jennings", "Watts", "Duran", "Walters",
        "Cohen", "McDaniel", "Moran", "Parks", "Steele", "Vaughn", "Becker", "Holt", "Deleon", "Barker"
    ];

    if (option == "first"){
        return getRandomElement(names_first);
    } else {
        return getRandomElement(names_last);
    }
}

function getRandomNumberInRange(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}

function getRandomDomain(){
    const domains = [
        "gmail.com", "yahoo.com", "aol.com", "outlook.com", "hotmail.com", "icloud.com"
    ]
    return getRandomElement(domains);
}

function getRandomEmail(){
    const spacer_array = ["_", "", "-", "."];
    return (
        getRandomName("first")+
        getRandomElement(spacer_array)+
        getRandomName("last")+
        getRandomElement(spacer_array)+
        String(getRandomNumberInRange(0, 99))+
        "@"+
        getRandomDomain()
    );
}

function getLINYZips(){
    const zips = [
        // Nassau County
        11507, 11510, 11710, 11714, 11514, 11516, 11554, 11732, 11003, 11001, 11010, 
        11520, 11530, 11542, 11545, 11021, 11022, 11023, 11024, 11548, 11550, 11801, 
        11096, 11558, 11559, 11756, 11563, 11565, 11030, 11758, 11566, 11501, 11040, 
        11572, 11568, 11803, 11050, 11570, 11575, 11576, 11783, 11791, 11553, 11580, 
        11581, 11582, 11583, 11793, 11552, 11590, 11598,

        // Suffolk County
        11930, 11701, 11702, 11706, 11705, 11713, 11715, 11716, 11717, 11932, 11719, 
        11934, 11720, 11721, 11722, 11724, 11725, 11726, 11727, 11935, 11729, 11937, 
        11730, 11731, 11772, 11738, 11740, 11946, 11788, 11741, 11742, 11743, 11746, 
        11751, 11752, 11754, 11755, 11757, 11949, 11950, 11763, 11954, 11703, 11768, 
        11772, 11777, 11901, 11778, 11779, 11963, 11782, 11784, 11964, 11967, 11787, 
        11968, 11971, 11790, 11792, 11704, 11795, 11798, 11980
    ]

    return getRandomElement(zips);
}

function getRandomPerson(){
    const spacer_array = ["_", "", "-", "."];
    const name_first = getRandomName("first");
    const name_last = getRandomName("last");
    const email = (
        name_first+
        getRandomElement(spacer_array)+
        name_last+
        getRandomElement(spacer_array)+
        String(getRandomNumberInRange(0, 99))+
        "@"+
        getRandomDomain()
    )
    return {
        "first_name": name_first,
        "last_name": name_last,
        "email": email
    }
}

function getRandomGender(){
    const genders = [
        "Female", "Male"
    ];
    return getRandomElement(genders)
}

function getRandomAgeGroup(){
    const ages = [
        "18 - 20", "30 - 39", "40 - 49", "50 - 59", "60 - 69", "70+"
    ];
    return getRandomElement(ages)
}

function getRandomRace(){
    const races = [
        "African-American/Black", "Asian", "Hispanic/Latino", "White", "Two or more races"
    ];
    return getRandomElement(races)
}

function getRandomIncome(){
    const incomes = [
        "Less than $25,000",
        "$25,000 to $49,000",
        "$50,000 to $99,999",
        "$100,000 to $199,999",
        "$200,000 or more"
    ];
    return getRandomElement(incomes)
}
export default { };
export { getRandomEmail, getLINYZips, getRandomPerson, getRandomGender, getRandomAgeGroup, getRandomRace, getRandomIncome };
