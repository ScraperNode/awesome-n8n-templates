# 📈 Crypto market alert system with Binance and Telegram integration

> ⚡ **16,248 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

An innovative N8N workflow that monitors cryptocurrency prices on Binance, identifies significant market movements, and sends customized alerts through Telegram. Ideal for traders and enthusiasts seeking real-time market insights.

[![659d07c153303c6de24e6442.jpg](fileId:730)](https://www.youtube.com/embed/slG_q_sT_E8)

### How It Works

1. **Trigger Options**: Choose between a manual trigger or a scheduled trigger to start the workflow.
2. **Fetch Market Data**: The 'Binance 24h Price Change' node retrieves the latest 24-hour price changes for cryptocurrencies from Binance.
3. **Identify Significant Changes**: The 'Filter by 10% Change rate' node filters out cryptocurrencies with price changes of 10% or more.
4. **Aggregate Data**: The 'Aggregate' node combines all significant changes into a single dataset.
5. **Format Data for Telegram**: The 'Split By 1K chars' node formats this data into chunks suitable for Telegram's message size limit.
6. **Send Telegram Message**: The 'Send Telegram Message' node broadcasts the formatted message to a specified Telegram chat.

### Set Up Steps
* **Estimated Time**: About 1-5 minutes for setup.
* **Initial Configuration**: Set up a Binance API connection (Optional) and your Telegram bot credentials.
* **Customization**: Adjust the trigger according to your preference (manual or scheduled) and update the Telegram chat ID.

* **Create Telegram bot steps**:-
Setting up a Telegram bot and obtaining its token involves several steps. Here's a detailed guide:

1. **Start a Chat with BotFather:**
   - Open Telegram and search for "BotFather". This is the official bot that allows you to create new bots.
   - Start a chat with BotFather by clicking on the "Start" button at the bottom of the screen.

2. **Create a New Bot:**
   - In the chat with BotFather, type `/newbot` and send the message.
   - BotFather will ask you to choose a name for your bot. This is a display name and can be anything you like.
   - Next, you'll need to choose a username for your bot. This must be unique and end in `bot`. For example, `my_crypto_alert_bot`.

3. **Receive Your Token:**
   - After you've set the name and username, BotFather will provide you with a token. This token is like a password for your bot, so keep it secure.
   - The message will look something like this: 
     ```
     Done! Congratulations on your new bot. You will find it at t.me/my_crypto_alert_bot. You can now add a description, about section and profile picture for your bot, see /help for a list of commands. Use this token to access the HTTP API: 123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11
     ```
   - The token in this case is `123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11`.

4. **Test Your Bot:**
   - You can find your bot by searching for its username in Telegram.
   - Start a chat with your bot and try sending it a message. Although it won't respond yet, this step is essential to ensure it's set up correctly.

5. **Use the Token in n8n:**
   - In your n8n workflow, when setting up the Telegram node, you'll be prompted to enter credentials.
   - Choose to add new credentials and paste the token you received from BotFather.

6. **Get Your Chat ID:**
   - To send messages to a specific chat, you need to know the chat ID.
   - The easiest way to find this is to first message your bot, then use a bot like `@userinfobot` to get your chat ID.
   - Once you have the chat ID, you can configure it in the Telegram node in your n8n workflow.

7. **Finalize Your Workflow:**
   - With the bot token and chat ID set up in n8n, your Telegram notifications should work as intended in your workflow.

Remember, keep your bot token secure and never share it publicly. If your token is compromised, you can always generate a new one by chatting with BotFather and selecting `/token`.

### Example result

![siDCAAKSc3.png](fileId:727)

```
Keywords: n8n workflow, cryptocurrency market, Binance API, Telegram bot, price alert system, automated trading signals, market analysis
```

## 🔗 Nodes Used

Function, HTTP Request, Telegram, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
