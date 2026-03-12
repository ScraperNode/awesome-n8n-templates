# 📈 Check Tron wallet USDT blacklist status via Telegram

> ⚡ **1,076 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

![n8ntorn.png](fileId:1210)
**Description**
This n8n workflow template allows users to check if a Tron wallet address is blacklisted on the USDT contract via a Telegram bot. When a user sends the command {walletAddress} through the Telegram bot, the workflow queries the Tronscan API to determine if the provided wallet address is blacklisted. The result is then sent back to the user via the Telegram bot.

**Detailed Description**
**Workflow Overview**
This workflow is designed to interact with users through a Telegram bot and check if a given Tron wallet address is blacklisted on the USDT contract. The workflow consists of four main nodes:

1. **Telegram Trigger Node:** Listens for messages from the Telegram bot.
2. **HTTP Request Node:** Sends a GET request to the Tronscan API to check the blacklist status of the provided wallet address.
3. **Function Node:** Processes the API response and formats the message to be sent back to the user.
4. **Telegram Send Message Node:** Sends the formatted message back to the user via the Telegram bot.

**Nodes Configuration**

**1.Telegram Trigger Node**

- Event: Message
- Update Types: Message
- Command: /sorgu
- Description: This node listens for the {walletAddress} command followed by a wallet address from the user.

**2.HTTP Request Node**

- Method: GET
- URL: https://apilist.tronscanapi.com/api/stableCoin/blackList?blackAddress={{ $json.message.text }}
- Response Format: JSON
- Description: This node sends a GET request to the Tronscan API using the wallet address provided by the user.

**3.Code Node**
 Check Api Response:
```const response = items[0].json;
let message;

if (response.total && response.total &gt; 0) {
  message = `🚨🛑 **This Wallet is Blacklisted!** 🛑🚨: ${response.data[0].blackAddress}`;
} else {
  message = `✅💚 **This Wallet is NOT Blacklisted!** 💚✅.`;
}

return [
  {
    json: {
      text: message,
    },
  },
];
```
- **Description:** This node processes the API response to determine if the wallet address is blacklisted and formats the message to be sent back to the user.

**4.Telegram Send Message Node**

- Resource: Message
- Operation: Send
- Chat ID: ={{$json["chat_id"]}}
- Text: ={{$json["text"]}}
- Description: This node sends the formatted message back to the user via the Telegram bot.

**How to Use**
1. Set Up Telegram Bot: Create a Telegram bot and obtain the API token. Configure the bot to listen for the **{walletAddress}** command.

2. Import Workflow: Import this workflow into your n8n instance.

3. Configure Credentials: Add your Telegram API credentials to the Telegram Trigger and Telegram Send Message nodes.

4. Run Workflow: Start the workflow. Users can now send the **{walletAddress}** command to the Telegram bot to check if a Tron wallet address is blacklisted.

**Example Usage**
User Telegram Command: {TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t}
API Request: https://apilist.tronscanapi.com/api/stableCoin/blackList?blackAddress=TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t
API Response:
```{
  "total": 1,
  "data": [
    {
      "blackAddress": "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",
      "tokenName": "USDT",
      "num": "367583344429",
      "time": 1593184959,
      "transHash": "af4bc4d793f82ca5ba500cf13cf93ca3e7a56fccc2aabf8b09e55fc756500ea8",
      "contractAddress": "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t"
    }
  ]
}

```
Bot Response: 🚨🛑 **This Wallet is Blacklisted!** 🛑🚨: TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t


&gt; This workflow provides a simple and efficient way to check the blacklist status of Tron wallet addresses via a Telegram bot, making it easy for users to stay informed about the status of their wallets.

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
