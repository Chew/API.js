'use strict';

module.exports = {
  genAcro: function genAcro(acro) {

    var acronym = acro['acronym'];
    acronym = acronym.toLowerCase();
    var letters = acronym.split("");
    var phrase = "";
    for (var i = 0; i < letters.length; i++) {
      phrase += generateWord(letters[i]);
      phrase += " ";
    }

    var output = JSON.parse('{"phrase":"phrase"}');

    phrase = phrase.substring(0, phrase.length - 1);

    output['phrase'] = phrase;

    return output;

  }
};

var awords = "Aisle,Actually,Active,Anymore,Art,A,Ago,Authorized,Account,Added,Andesite,Anyone,All,Add,Acorn,Alarm,Alcohol,Alien,Alligator,America,Anchor,Angel,Ankle,Ant,Ants,Anvil,Apple,Arcade,Archer,Armor,Astronaut,Australia,Autumn,Axe,Air"
var bwords = "Bob,Baby,Bacon,Bag,Bagel,Baggage,Balloon,Balloons,Bamboo,Banana,Bank,Barbie,Barn,Baseball,Basketball,Bathroom,Batman,Battery,Battleship,Beach,Beans,Bear,Beard,Beaver,Bed,Beehive,Beer,Bell,Bells,Belly,Bench,Berry,Bicycle,Bike,Bikini,Binoculars,Bird,Birthday,Blanket,Blocks,Blood,Boar,Boat,Bomb,Booger,Book,Bookcase,Bookstore,Boots,Booty,Bottle,Bow,Bowl,Bowtie,Box,Boy,Bracelet,Brain,Branch,Bread,Bridge,Broomstick,Brush,Bubble,Bucket,Bug,Building,Bumblebee,Bunny,Burger,Burn,Bus,Butterfly,Button,Bond"
var cwords = "Cherry,Cabin,Cactus,Cake,Calculator,Camel,Camera,Camp,Campfire,Canada,Candle,Candy,Candy,Cane,Cannibal,Capture,Car,Card,Carrot,Castle,Cat,Cauldron,Cave,Cd,Cereal,Chair,Chalk,Chard,Charmander,Cheek,Cheese,Cheeseburger,Chef,Chess,Chest,Chestplate,Chicken,Children,Chimney,Chin,Chocolate,Christmas,Cigar,Cinema,Circle,Circus,Clock,Cloud,Clown,Coal,Coconut,Coffee,Cold,Comet,Compass,Computer,Cone,Confused,Cookie,Cookies,Cork,Couch,Cow,Crab,Crack,Crayon,Creeper,Crib,Crowd,Crown,Crying,Cup,Cupcake,Cyclop,Cyclops,Can,Cart,Club,Cream"
var dwords = "Dab,Dance,Darts,Desert,Desk,Diamond,Diamonds,Diary,Dice,Dinosaur,Disco,Dog,Doll,Dolphin,Domino,Dominoes,Donut,Door,Doormat,Dragon,Draw,Dream,Dress,Drill,Drink,Drool,Drum,Drums,Duck,Dryer"
var ewords = "Eddie,Eagle,Ear,Ears,Earth,Egg,Eggs,Elbow,Electricity,Elephant,Elevator,Emerald,Emeralds,Ender,Eraser,Erupt,Explosion,Eye,Eyepatch,Eyes"
var fwords = "Far,Face,Facebook,Fall,Family,Farm,Fat,Father,Fighting,Filing,Finger,Fire,Fireplace,Fishing,Fist,Flag,Flamingo,Flashlight,Flint,Flower,Flowers,Flute,Food,Football,Forest,Fort,Fountain,Frenchfries,Fridge,Fries,Frisbee,Frog,Frozen"
var gwords = "Good,George,Gary,Galaxy,Game,Gapples,Garbage,Garden,Gate,Ghast,Ghost,Giant,Gift,Gingerbread,Giraffe,Girl,Glacier,Glasses,Godzilla,Gold,Golem,Golf,Grapes,Grass,Grave,Gravestone,Graveyard,Grim,Guard,Guitar,Gun"
var hwords = "Hair,Halloween,Hammer,Hamster,Hand,Handcuffs,Hands,Hang,Harry,Hat,Head,Headphones,Helicopter,Helmet,Hill,Hippo,Hobo,Hockey,Holding,Hook,Hoop,Horse,Hospital,Hot,Hotdog,House,Hula"
var iwords = "I,Ice,Iceberg,Icecream,Icicle,Igloo,Ipod,Iron"
var jwords = "Jam,James,Jellyfish,Jingle,Joker,Juggle,Jump,Jungle"
var kwords = "Keemstar,Kangaroo,Key,Keyboard,King,Kirby,Kiss,Kite,Kitten,Knot"
var lwords = "Larry,Licking,Ladybug,Lake,Lamp,Lance,Laptop,Lava,Lawnmower,Leaf,Leash,Letter,Letterbox,Light,Lightbulb,Lighthouse,Lightning,Lights,Lightsaber,Lion,Lipstick,Lizard,Llama,Lobster,Lollipop,Love,Luigi"
var mwords = "Merry,Minesweeper,Mixer,Machine,Missions,Magic,Magnet,Mail,Mailman,Man,Mansion,Mario,Math,Mattress,Melon,Microsoft,Milk,Minecart,Minecraft,Mineplex,Miner,Money,Monitor,Monkey,Moon,Moose,Mosquito,Mother,Motorbike,Motorcycle,Mountain,Mouse,Movie,Mudkip,Muffin,Muscles,Mushroom,Music"
var nwords = "Nexus,Nana,Natural,Neck,Necklace,Nether,Newspaper,Night,Nightmare,Ninja,Nintendo,Noodles,Notebook"
var owords = "Oscar,Obsidian,Ocean,Orange,Ore,Ornament,Owl"
var pwords = "Plays,Plush,Plus,Plug,Paint,Painting,Pajamas,Palace,Pancake,Panda,Pants,Paper,Party,Peach,Peanut,Peasant,Pen,Pencil,Penguin,Pepper,Pepsi,Person,Phone,Photo,Photograph,Piano,Pickle,Picnic,Pie,Pig,Pigman,Pikachu,Pillow,Pineapple,Ping,Pinwheel,Pirate,Pistol,Piston,Pizza,Plane,Planet,Plant,Plate,Playstation,Plumber,Pokeball,Pokemon,Pole,Police,Pong,Pool,Poop,Popcorn,Portal,Pot,Potato,Potter,Pregnant,Present,Presenter,Pretzel,Prince,Princess,Prison,Prize,Pull,Pumpkin,Punch,Puppet,Puppy,Purse,Push,Pyramid"
var qwords = "Queen,Quick"
var rwords = "Random,Rabbit,Racecar,Racket,Radar,Radio,Rain,Rainbow,Raspberry,Reaper,Redstone,Refrigerator,Remote,Restaurant,Rhinoceros,Rice,Riding,Rifle,Ring,River,Robot,Rod,Roll,Roof,Rope,Rose,Round,Royal,Rubbish,Rug,Ruins,Ruler"
var swords = "Super,Saddle,Salad,Salsa,Salt,Sandwich,Santa,Scale,Scarf,School,Scissors,Screw,Sea,Seahorse,Seashell,Seesaw,Shark,Sheep,Shield,Shirt,Shoe,Shopping,Shorts,Shotgun,Shout,Shovel,Sideburns,Sidewalk,Sign,Skate,Skateboard,Skeleton,Ski,Skiing,Skinny,Skirt,Skull,Skunk,Skype,Sled,Sleeping,Slide,Slime,Slippers,Sloth,Smile,Snail,Snake,Snorlax,Snow,Snowball,Snowboard,Snowflake,Snowman,Soap,Sock,Soda,Song,Soup,Spaceship,Spaghetti,Speaker,Speedboat,Spider,Spikes,Sponge,Spoon,Spray,Spring,Sprout,Squid,Squirrel,Stable,Stage,Stain,Staircase,Stairs,Stamp,Stars,State,States,Statue,Stingray,Stomach,Stool,Stop,Stoplight,Storm,Strawberry,Stump,Sugar,Suitcase,Summer,Sun,Sunflower,Sunglasses,Sunrise,Sunset,Superman,Sushi,Swimming,Swing,Swordfish,Syrup"
var twords = "Tall,Table,Taco,Tail,Tank,Tape,Taxi,Teapot,Tears,Teddy,Telephone,Telescope,Television,Temple,Tennis,Tent,Tetris,Thief,Thorn,Thumb,Tiger,Time,Tiny,Toast,Toaster,Toilet,Tomato,Tooth,Toothbrush,Top,Torch,Tornado,Towel,Tower,Traffic,Trash,Treasure,Treat,Tree,Treehouse,Trick,Troll,Truck,Trumpet,Turtle,Tv,Twitter"
var uwords = "Umbrella,Unicorn,United,Uppercut,Usb"
var vwords = "Vex,Vest,Video,Violin,Volcano,Vomit"
var wwords = "Wow,Wagon,Waist,Wallet,Watch,Water,Waterfall,Watering,Watermelon,Web,Whale,Wheat,Whisk,Whistle,Wind,Windmill,Window,Winter,Witch,Wither,Wizard,Wolf,Worm,Wrench"
var xwords = "Xylophone,Xbox"
var ywords = "Yawn,Yelling,Yoshi,Youtube"
var zwords = "Zebra,Zipper,Zombie,Zoo"

function generateWord(letter) {
  var array = "";
  if (letter == 'a')
    array = awords.split(",");
  if (letter == 'b')
    array = bwords.split(",");
  if (letter == 'c')
    array = cwords.split(",");
  if (letter == 'd')
    array = dwords.split(",");
  if (letter == 'e')
    array = ewords.split(",");
  if (letter == 'f')
    array = fwords.split(",");
  if (letter == 'g')
    array = gwords.split(",");
  if (letter == 'h')
    array = hwords.split(",");
  if (letter == 'i')
    array = iwords.split(",");
  if (letter == 'j')
    array = jwords.split(",");
  if (letter == 'k')
    array = kwords.split(",");
  if (letter == 'l')
    array = lwords.split(",");
  if (letter == 'm')
    array = mwords.split(",");
  if (letter == 'n')
    array = nwords.split(",");
  if (letter == 'o')
    array = owords.split(",");
  if (letter == 'p')
    array = pwords.split(",");
  if (letter == 'q')
    array = qwords.split(",");
  if (letter == 'r')
    array = rwords.split(",");
  if (letter == 's')
    array = swords.split(",");
  if (letter == 't')
    array = twords.split(",");
  if (letter == 'u')
    array = uwords.split(",");
  if (letter == 'v')
    array = vwords.split(",");
  if (letter == 'w')
    array = wwords.split(",");
  if (letter == 'x')
    array = xwords.split(",");
  if (letter == 'y')
    array = ywords.split(",");
  if (letter == 'z')
    array = zwords.split(",");
  if (array != "")
    return array[Math.floor(Math.random() * array.length)];
  else
    return "";
}
