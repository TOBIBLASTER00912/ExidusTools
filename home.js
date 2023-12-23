const readline = require("readline-sync");
const gradient = require('gradient-string');
const germany = require("./region gens/germany.js");
const america = require("./region gens/america.js")
const italy = require("./region gens/italy.js")
const uk = require("./region gens/uk.js")
const spain = require("./region gens/spain.js")
const russia = require("./region gens/russia.js")
const china = require("./region gens/china.js")
const settings = require("./settings.js")
const japan = require("./region gens/japan.js")
const greenland = require("./region gens/greenland.js")
const numberchecker = require("./numchecker/numgen.js")
const sort = require("./sorter.js")
const india = require("./region gens/india.js")
console.clear();
process.title = "Exidus Tools | Home |+| Made by TOBIBLASTER0912 ";

console.log(gradient.atlas(`
V 1.0


                                            This tool is made by TOBIBLASTER0912. You can change everything by typing 99 in the next page!.
                                            Webhooks often gets Ratelimited. Just ignore and keep genning eventually it will work again.
                                            You need to get a bunch of API Keys (i suggest 10). Tutorial how to get them (+ infinite keys Method) in Folder! (Tutorial.mkv)
                                            Join https://discord.gg/cGVJbqbz8f for updates and more!


                                            Press 1 to Start Exidus Tools!

`))
const start = readline.question("Press 1 =>  ");
if (start == 1) {
    console.clear()

    console.log(gradient.rainbow(`
                                                ______________________________________________________________________________________________________________
                                                |  @@@@@@@@  @@@  @@@  @@@  @@@@@@@   @@@  @@@   @@@@@@      @@@@@@@   @@@@@@    @@@@@@   @@@        @@@@@@  | 
                                                |  @@@@@@@@  @@@  @@@  @@@  @@@@@@@@  @@@  @@@  @@@@@@@      @@@@@@@  @@@@@@@@  @@@@@@@@  @@@       @@@@@@@  |
                                                |  @@!       @@!  !@@  @@!  @@!  @@@  @@!  @@@  !@@            @@!    @@!  @@@  @@!  @@@  @@!       !@@      |
                                                |  !@!       !@!  @!!  !@!  !@!  @!@  !@!  @!@  !@!            !@!    !@!  @!@  !@!  @!@  !@!       !@!      | 
                                                |  @!!!:!     !@@!@!   !!@  @!@  !@!  @!@  !@!  !!@@!!         @!!    @!@  !@!  @!@  !@!  @!!       !!@@!!   |
                                                |  !!!!!:      @!!!    !!!  !@!  !!!  !@!  !!!  !!@!!!         !!!    !@!  !!!  !@!  !!!  !!!        !!@!!!  |
                                                |  !!:        !: :!!   !!:  !!:  !!!  !!:  !!!      !:!        !!:    !!:  !!!  !!:  !!!  !!:            !:! |
                                                |  :!:       :!:  !:!  :!:  :!:  !:!  :!:  !:!       !:!       :!:    :!:  !:!  :!:  !:!  :!:            !:! | 
                                                |  :: ::::    ::  :::   ::  :::: ::   ::::: ::  :::: ::         ::    ::::: ::  ::::: ::   :: ::::  :::: ::  | 
                                                |  : :: ::   :     ::   :   :: :  :    : :  :   :: : :          :      : :  :    : :  :   : :: : :  :: : :   | 
                                                |  X = UNAVAILABLE                                                                                    V 1.0  |
                                                |____________________________________________________________________________________________________________|
                                                | > 1 = Generate Numbers      |> 4 = Mass Add to WhatsApp Group (X)                                          |
                                                | > 2 = Check a Number        |> 5 = Mass DM on WhatsApp (X)                 |> 99 = Settings                |
                                                | > 3 = Mass Spam Numbers (X) |> 100 = Remove Duplicates from Number files   |> 0 = Discord Server Link      |
                                                |____________________________________________________________________________________________________________| 
    `));



    const number = readline.question("Number? => ");

    if (number == 1) {
        console.clear()
        process.title = "Exidus Tools | Region Selector |+| Made by TOBIBLASTER0912 ";
        console.log(gradient.rainbow(` 
                                                    _________________________________________________________
                                                    |  @@@@@@@   @@@@@@@@   @@@@@@@@  @@@   @@@@@@   @@@  @@@ | 
                                                    |  @@@@@@@@  @@@@@@@@  @@@@@@@@@  @@@  @@@@@@@@  @@@@ @@@ | 
                                                    |  @@!  @@@  @@!       !@@        @@!  @@!  @@@  @@!@!@@@ | 
                                                    |  !@!  @!@  !@!       !@!        !@!  !@!  @!@  !@!!@!@! | 
                                                    |  @!@!!@!   @!!!:!    !@! @!@!@  !!@  @!@  !@!  @!@ !!@! | 
                                                    |  !!@!@!    !!!!!:    !!! !!@!!  !!!  !@!  !!!  !@!  !!! | 
                                                    |  !!: :!!   !!:       :!!   !!:  !!:  !!:  !!!  !!:  !!! | 
                                                    |  :!:  !:!  :!:       :!:   !::  :!:  :!:  !:!  :!:  !:! | 
                                                    |  ::   :::   :: ::::   ::: ::::   ::  ::::: ::   ::   :: | 
                                                    |   :   : :  : :: ::    :: :: :   :     : :  :   ::    :  |
                                                    |________________________________________________________ |                 
                                                    | > 1 = Germany         |  > 8 = Japan                    |
                                                    | > 2 = America         |  > 9 = Denmark/Greenland        |
                                                    | > 3 = Italy           |  > 10 = India                   |
                                                    | > 4 = United Kingdom  |                                 |
                                                    | > 5 = Spain           |                                 |
                                                    | > 6 = Russia          |                                 |
                                                    | > 7 = China           |                                 |
                                                    |_______________________|_________________________________|
                                                    `))

        const subnumber = readline.question("Number? => ");
        if (subnumber == 1) {
            process.title = "Exidus Tools | Generator Started; Selected Germany |+| Made by TOBIBLASTER0912 ";
            console.clear()
            console.log(gradient.rainbow("Launching Germany..."))
            setTimeout(() => {
                germany();
            }, 2000);
        } else if (subnumber == 2) {
            process.title = "Exidus Tools | Generator Started; Selected America |+| Made by TOBIBLASTER0912 ";
            console.clear()
            console.log(gradient.rainbow("Launching America..."))
            setTimeout(() => {
                america();
            }, 2000);
        } else if (subnumber == 3) {
            process.title = "Exidus Tools | Generator Started; Selected Italy |+| Made by TOBIBLASTER0912 ";
            console.clear()
            console.log(gradient.rainbow("Launching Italy..."))
            setTimeout(() => {
                italy();
            }, 2000);
        } else if (subnumber == 4) {
            process.title = "Exidus Tools | Generator Started; Selected United Kingdom |+| Made by TOBIBLASTER0912 ";
            console.clear()
            console.log(gradient.rainbow("Launching United Kingdom..."))
            setTimeout(() => {
                uk();
            }, 2000);
        } else if (subnumber == 5) {
            process.title = "Exidus Tools | Generator Started; Spain |+| Made by TOBIBLASTER0912 ";
            console.clear()
            console.log(gradient.rainbow("Launching Spain..."))
            setTimeout(() => {
                spain();
            }, 2000);
        } else if (subnumber == 6) {
            process.title = "Exidus Tools | Generator Started; Russia |+| Made by TOBIBLASTER0912 ";
            console.clear()
            console.log(gradient.rainbow("Launching Russia..."))
            setTimeout(() => {
                russia();
            }, 2000);
        } else if (subnumber == 7) {
            process.title = "Exidus Tools | Generator Started; China |+| Made by TOBIBLASTER0912 ";
            console.clear()
            console.log(gradient.rainbow("Launching China..."))
            setTimeout(() => {
                china();
            }, 2000);
        } else if (subnumber == 8) {
            process.title = "Exidus Tools | Generator Started; Japan |+| Made by TOBIBLASTER0912 ";
            console.clear()
            console.log(gradient.rainbow("Launching Japan..."))
            setTimeout(() => {
                japan();
            }, 2000);
        } else if (subnumber == 9) {
            process.title = "Exidus Tools | Generator Started; Greenland |+| Made by TOBIBLASTER0912 ";
            console.clear()
            console.log(gradient.rainbow("Launching Denmark..."))
            setTimeout(() => {
                greenland();
            }, 2000);
        } else if (subnumber == 10) {
            process.title = "Exidus Tools | Generator Started; India |+| Made by TOBIBLASTER0912 ";
            console.clear()
            console.log(gradient.rainbow("Launching India..."))
            setTimeout(() => {
                india();
            }, 2000);
        }
    } else if (number == 2) {
        numberchecker()
    } else if (number == 99) {
        settings()
    } else if (number == 0) {
        console.clear()
        console.log(gradient.rainbow("https://discord.gg/cGVJbqbz8f"))
    } else if (number == 100) {
        sort.cleanTextFiles()
    }
}