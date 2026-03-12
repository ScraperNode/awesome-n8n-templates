# 📈 Monitor USDT ERC-20 wallet balance with Etherscan and Telegram notifications

> ⚡ **1,492 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

![Screenshot at Mar 26 113716.png](fileId:1062)

# Overview

This n8n workflow is specifically designed to monitor the USDT ERC-20 balance within a specific wallet. It uses Etherscan's public blockchain database, which does not require API authentication, to periodically check and process transaction data. This workflow is ideal for users who need an automated solution to track ERC-20 wallet transactions.

# Features
- **Automatic Monitoring**: Executes every 5 minutes to capture new transactions.
- **Customizable Filters**: Customize tracking based on parameters like transaction duration and wallet addresses.
- **Data Aggregation**: Compiles transaction data into a single, structured list.
- **Formatted Outputs**: Presents processed data in an organized format.
- **Telegram Tracking**: Tracks wallet balances via Telegram notifications using the bot.

# Requirements
- **n8n Setup**: Requires a self-hosted or cloud-based n8n instance.
- **Basic Understanding**: Basic knowledge of n8n workflows and nodes.

# Installation and Configuration

1. **Import Workflow**: Load the provided JSON workflow into your n8n instance.
2. **Configure the User Data Node**:
   - Enter your ERC-20 Wallet Address in the 'Your Wallet Address' field.
   - Enter your Etherscan API Key in the “Your Etherscan API Key” field.
   - Enter your USDT ERC-20 Contract Address in the "Your ERC-20 USDT Contract Address" field (0xdAC17F958D2ee523a2206206994597C13D831ec7). You can also monitor another token by entering a different contract address.
   
3. **Configure the Telegram Node**:
   - Go to Telegram and search for "BotFather".
   ![botfather.png](fileId:1061)
   - Select `/newbot` from the BotFather menu to create your bot.
   - Get the API key BotFather provides.
   - Go to Telegram and search for "Get My ChatID".
   ![chatid.png](fileId:1060)
   - Start the conversation and get your ChatID.
   - Use this information to configure the Telegram Node.

4. **Schedule Trigger Node**: By default, the workflow is triggered every 5 minutes. Adjust this according to your needs.

5. **Test the Workflow**: Execute the workflow manually to ensure everything is working as expected.

# How It Works

1. **Schedule Trigger**: Starts the workflow at predetermined intervals.
2. **Edit Fields**: Sets the wallet address, Etherscan API key, and USDT ERC-20 token address.
3. **Edit Telegram Settings**: Create a bot via BotFather. Configure the API key and Telegram Chat ID.
4. **Etherscan Data Import**: Collects transaction data from the ERC-20 wallet using Etherscan's public database.
5. **Final Results**: Organizes and formats the transaction data for review.
6. **Telegram Bot Message Sending**: If there is a balance change, it sends a formatted message about the balance change. If there is no balance change, it sends a message that your balance has not changed. You can configure it to avoid sending a message when there is no change.

## 🔗 Nodes Used

Cron, HTTP Request, Telegram

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
