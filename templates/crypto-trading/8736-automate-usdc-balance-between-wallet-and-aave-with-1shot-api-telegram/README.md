# 📈 Automate USDC balance between wallet and Aave with 1Shot API & Telegram

> ⚡ **68 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

![image.png](fileId:2669)

# Automated Savings with 1Shot API and Aave Protocol

With the increasing popularity of stablecoins like [USDC](https://www.circle.com/), its becoming easier to pay for everyday items with crypto thanks to debit cards from issuers like [MetaMask](https://metamask.io/card). These solutions work by processing payments on traditional payment rails then pulling the stablecoin out of your onchain account to cover the cost of the purchase. 

One downside is that if a stablecoin like USDC is simply sitting in your onchain account, you are missing out on competitive savings rates offered by decentralized protocols like [Aave](https://aave.com/). Often the APY offered by these onchain lending protocols is much higher than those offered by traditional banks while maintaining a low-risk profile for high-quality assets like USDC or [mUSD](https://metamask.io/price/metamask-usd). 

Ideally your balance would automatically stay in something like Aave when you don't need it and automatically refill your onchain account used for payments when it gets low. This workflow, powered by [1Shot API](https://1shotapi.com), does just that. It also sends you real time Telegram notifications about your account balance and savings every time your account rebalances. 

## Aave Protocol

![image.png](fileId:2748)

This workflow integrates the [Aave](https://aave.com/) lending protocol to generate savings APY on your excess USDC funds on the [Base](https://www.base.org/) network. When your holdings in your primary [Metamask smart account](https://support.metamask.io/configure/accounts/what-is-a-smart-account/#what-are-metamask-smart-accounts) exceed a threshold you set, it will deposit them into the Aave Lending Pool. This results in your account receiving aBasUSDC, a deposit receipt token used to withdraw your savings at a later time. When your account drops below a refill-threshold you set, it will exchange the aBasUSDC back to USDC and put in back into your primary account so that you can spend it.

## Setup Instructions

This workflow will automatically balance your USDC funds on Base network so that you keep funds you aren't using in [Aave](https://aave.com/) to earn interest and automatically move funds out of savings back into your wallet when funds get low. 

1. Create a free [1Shot API](https://1shotapi.com) account.
2. Generate an API key & secret and use these to create a credential for the 1Shot API node's.
3. Click the trigger on the subworkflow to automatically import the required smart contract functions and provision a 1Shot API server wallet on Base that will relay your transactions when you are not online. 
4. Input the contract method IDs from 1Shot API into the "Savings Config" node. 
5. Set your saving thresholds in the "Savings Config" node.
6. Create a Telegram bot and use the bot's API key to generate a credential for the Telegram nodes. Get your chat id with the bot and input it into the "Savings Config" node. 
7. Configure your desired schedule in the "Schedule" trigger node (like every 24 hours)
8. Activate the workflow.

## 🔗 Nodes Used

Telegram, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
