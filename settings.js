const fs = require('fs');
const path = require('path');
const axios = require("axios");
const gradient = require('gradient-string');
const config = require("./config.json");
const apikeys = require("./apikeys.json");
const { sendToDiscordWebhook } = require('./utils');
const desc = require("./settingsdesc.json");
const readline = require("readline-sync");
const webhooks = require("./webhooks.json")
const numberOfAPIKeys = apikeys.apikeys.length;

module.exports = function settings() {
    console.clear();
    process.title = `Exidus Tools | Settings`;

    console.log(gradient.pastel(`
    ____________________________________________________________________
    |   @@@@@@   @@@@@@@@  @@@@@@@  @@@@@@@  @@@  @@@  @@@   @@@@@@@@  |  
    |  @@@@@@@   @@@@@@@@  @@@@@@@  @@@@@@@  @@@  @@@@ @@@  @@@@@@@@@  |  
    |  !@@       @@!         @@!      @@!    @@!  @@!@!@@@  !@@        |  
    |  !@!       !@!         !@!      !@!    !@!  !@!!@!@!  !@!        |  
    |  !!@@!!    @!!!:!      @!!      @!!    !!@  @!@ !!@!  !@! @!@!@  |  
    |   !!@!!!   !!!!!:      !!!      !!!    !!!  !@!  !!!  !!! !!@!!  | 
    |       !:!  !!:         !!:      !!:    !!:  !!:  !!!  :!!   !!:  |  
    |      !:!   :!:         :!:      :!:    :!:  :!:  !:!  :!:   !::  | 
    |  :::: ::    :: ::::     ::       ::     ::   ::   ::   ::: ::::  | 
    |  :: : :    : :: ::      :        :      :    ::    :    :: :: :  | 
    |__________________________________________________________________|
    | > Webhook Mode (1)                                               |
    | > Bot Mode (2)                                                   |
    | > Api Keys (3)                                                   |
    |__________________________________________________________________|
    `))

    const readline = require("readline-sync");

    function updateWebhookMode() {
        console.clear();
        console.log(gradient.rainbow(`Webhook Mode Settings
            
            ` + desc.Webhook + `
            
            Active: ` + config.WebhookMode + `
            Webhook: ` + config.Webhook + `
            MultiMode: ` + config.MultiHook + `
            `));
        if (!config.Webhook) {
            console.log(gradient.rainbow("No Webhook inserted! Please set one!"))
            const webquestion = readline.question("Do you want to insert a Webhook? Yes/No | -> ")
            if (webquestion == "yes") {
                const webq = readline.question("Insert Webhook -> ")
                console.log(gradient.passion("Webhook set to " + webq + "!"))
                config.Webhook = webq;
                fs.writeFileSync('./config.json', JSON.stringify(config, null, 2));
            }
            else if (webquestion == "no") {
                const newVal = readline.question(gradient.rainbow('Enter "true" to enable or "false" to disable Webhook Mode, Enter multi to activate MultiHook mode. -> '));

                if (newVal === 'true' || newVal === 'false') {
                    config.WebhookMode = newVal;
                    fs.writeFileSync('./config.json', JSON.stringify(config, null, 2));
                    console.log(gradient.rainbow(`Webhook Mode set to ${config.WebhookMode}`));
                    console.log(gradient.rainbow(`Please restart the Script to apply the changes`))
                } else if (newVal == "multi") {
                    const multimode = readline.question("Type yes to activate, type no to disable. -> ")
                    if (multimode == "yes") {
                        config.MultiHook = "true";
                        fs.writeFileSync('./config.json', JSON.stringify(config, null, 2));
                    } else if (multimode == "no") {
                        config.MultiHook = "false";
                        fs.writeFileSync('./config.json', JSON.stringify(config, null, 2));
                    }
                } else {
                    console.log(gradient.rainbow('Invalid input. Please enter either true or false.'));
                }
            }
        } else {
            const newValue = readline.question(gradient.rainbow('Enter "true" to enable or "false" to disable Webhook Mode, Enter multi to manage MultiHook settings. -> '));

            if (newValue === 'true' || newValue === 'false') {
                config.WebhookMode = newValue;
                fs.writeFileSync('./config.json', JSON.stringify(config, null, 2));
                console.log(gradient.rainbow(`Webhook Mode set to ${config.WebhookMode}`));
                console.log(gradient.rainbow(`Please restart the Script to apply the changes`));
            } else if (newValue === "del") {
                config.Webhook = "";
                fs.writeFileSync('./config.json', JSON.stringify(config, null, 2));
                console.log(gradient.rainbow('Deleted the Webhook! Restart to set a new one!'));
            } else if (newValue == "multi") {
                const multimode = readline.question("Type yes to activate, type no to disable, type add to add webhooks, type dis to display them. -> ")
                if (multimode == "yes") {
                    config.MultiHook = "true";
                    fs.writeFileSync('./config.json', JSON.stringify(config, null, 2));
                } else if (multimode == "no") {
                    config.MultiHook = "false";
                    fs.writeFileSync('./config.json', JSON.stringify(config, null, 2));
                } else if (multimode == "add") {
                    const addhook = readline.question("Webhook -> ")
                    webhooks.webhooks.push(addhook);
                fs.writeFileSync('./webhooks.json', JSON.stringify(webhooks, null, 2));
                console.log(gradient.rainbow("Successfully added " + addhook + " to the list!"))
                } else if (multimode == "dis") {
                    console.log(webhooks.webhooks)
                }
            }
        }
    }

    function updateBotMode() {
        console.clear();
        console.log(gradient.rainbow(`Bot Mode Settings
            
            ` + desc.Bot + `
            
            Active: ` + config.BotMode + `
            Bot Token: ` + config.BotToken + `
            `));
        if (!config.BotToken) {
            console.log(gradient.rainbow("No Bot token inserted! Please set one!"))
            const botquestion = readline.question("Do you want to insert a bot token? Yes/No | -> ")
            if (botquestion == "yes") {
                const tokenq = readline.question("Insert Bot Token -> ")
                console.log(gradient.passion("Token set to " + tokenq + "!"))
                config.BotToken = tokenq;
                fs.writeFileSync('./config.json', JSON.stringify(config, null, 2));
            } else if (botquestion == "no") {
                const newVal = readline.question(gradient.rainbow('Enter "true" to enable or "false" to disable Bot Mode: '));

                if (newVal === 'true' || newVal === 'false') {
                    config.BotMode = newVal;
                    fs.writeFileSync('./config.json', JSON.stringify(config, null, 2));
                    console.log(gradient.rainbow(`Bot Mode set to ${config.BotMode}`));
                    console.log(gradient.rainbow(`Please restart the Script to apply the changes`));
                } else {
                    console.log(gradient.rainbow('Invalid input. Please enter either true or false.'));
                }
            }
        } else {
            const newValue = readline.question(gradient.rainbow('Enter "true" to enable or "false" to disable Bot Mode or enter "del" to reset the Token : '));

            if (newValue === 'true' || newValue === 'false') {
                config.BotMode = newValue;
                fs.writeFileSync('./config.json', JSON.stringify(config, null, 2));
                console.log(gradient.rainbow(`Bot Mode set to ${config.BotMode}`));
                console.log(gradient.rainbow(`Please restart the Script to apply the changes`));
            } else if (newValue === "del") {
                config.BotToken = "";
                fs.writeFileSync('./config.json', JSON.stringify(config, null, 2));
                console.log(gradient.rainbow('Deleted the token! Restart to set a new one!'));
            }
        }
    }

    const settingsnumber = readline.question("Number? -> ");
    if (settingsnumber == 1) {
        updateWebhookMode()
    } else if (settingsnumber == 2) {
        updateBotMode();
    } else if (settingsnumber == 3) {
        console.clear()
        console.log(gradient.rainbow(`Api Key Settings
            
            ` + desc.Keys + `
            
            Count: ` + numberOfAPIKeys + `
            Make sure to watch the tutorial in the folder where this project is to get unlimited API Keys! (Tutorial.mkv)`));
        const keyq = readline.question("Type dis to display the keys, type add to add a key, type del to delete ALL keys. -> ")
        if (keyq == "dis") {
            console.clear()
            console.log(gradient.rainbow(`Current Api Keys:
                __________________________________________`))
            console.log(apikeys.apikeys)
        } else if (keyq == "add") {
            const addapikey = readline.question("Insert API key here -> ")
            if (!apikeys.apikeys.includes(addapikey)) {
                apikeys.apikeys.push(addapikey);
                fs.writeFileSync('./apikeys.json', JSON.stringify(apikeys, null, 2));
                console.log(gradient.passion("Added the API Key " + addapikey + "!"));
            } else {
                console.log(gradient.passion("This API Key is already in list!"));
            }
        } else if (keyq == "del") {
            if (apikeys.apikeys.length > 0) {
                apikeys.apikeys = [];
                fs.writeFileSync('./apikeys.json', JSON.stringify(apikeys, null, 2));
                console.log(gradient.passion("Deleted " + numberOfAPIKeys + " API Keys!"));
            } else {
                console.log(gradient.passion("No API Keys to delete!"));
            }
        }
    }
}
