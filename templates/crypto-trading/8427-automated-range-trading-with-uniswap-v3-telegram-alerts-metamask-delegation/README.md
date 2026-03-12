# 📈 Automated range trading with Uniswap V3, Telegram alerts & MetaMask delegation

> ⚡ **907 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

![image.png](fileId:2341)

# Simple Range Trading w/ Uniswap V3

This workflow will monitor the price of a token trading pair (default is ETH - USDC) and automatically buy into ETH or sell into USDC based on a price window configured by the user. 

Additionally, the workflow will notify the user on Telegram before a trade is executed, giving the user 1 minute to cancel the trade before the workflow proceeds. 

Transaction are executed via MetaMask's Delegation Framework, so trades are fully non-custodial, you retain full control of your assets at all times. 

Check out the [YouTube tutorial](https://docs.1shotapi.com) for a full walkthrough.

## Maintain Complete Trading Control with MetaMask Delegations

With the [MetaMask Delegation Framework](https://metamask.io/developer/delegation-toolkit), you never relinquish control of your funds to any 3rd party, not even 1Shot API. Furthermore, with this workflow, you have full control of your trading parameters and the assets you trade against. Lastly, by running your own trading setup, you can bypass fees incurred through centralized exchanges or hosted frontends that reduce your profitability. 

## Human-in-the-Loop with Telegram Notifiactions

This workflow uses Telegram to send you real-time updates on whats happening with your trades. Specifically, the Telegram human-in-the-loop node is used to give you a change to cancel trades before they happen or immediately approve them. 

## Setup

1. Create a free [1Shot API](https://1shotapi.com) account, and create an API key.
2. Import the workflow into your n8n portal.
3. Create a credential for the 1Shot API nodes to communicate with your 1Shot API account.
4. Trigger the sub-workflow to generate an Arbitrum server wallet and import all required smart contract methods. 
5. Point the 1Shot API nodes at the appropriate smart contract methods in you 1Shot API account.
6. Create a Telegram credential for notifications & input the chatID of your Telegram bot.
7. Set your desired trading price range in the Swap Configs node.
8. Start your trading workflow.

## 🔗 Nodes Used

Telegram, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
