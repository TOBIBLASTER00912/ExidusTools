const axios = require('axios');
const config = require('./config.json');
const webhooks = require('./webhooks.json');
const gradient = require("gradient-string")

async function sendToDiscordWebhook(webhookUrl, message) {
  const data = {
    content: message,
  };

  try {
    if (config.MultiHook === 'true') {
      for (const webhook of webhooks.webhooks) {
        await axios.post(webhook, data);
      }
    } else {
      await axios.post(webhookUrl, data);
    }
  } catch (error) {
    console.error(gradient.rainbow("Webhook(s) Ratelimited."));
  }
}

module.exports = {
  sendToDiscordWebhook,
};
