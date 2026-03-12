# 📈 Multi-chain token swap relayer with Li.Fi

> ⚡ **334 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

![image.png](fileId:2778)

# Swap Tokens with Li.Fi 

The growing popularity of agentic payments has lead to the development of protocols like [x402](https://x402.org) where agents and humans can pay for internet resources over standard http protocols using stablecoins.

This workflow lets you run your own swap relayer where callers can provide an [x402-compatible payment header](https://1shotapi.com/tools) and a desired destination network to instantly receive gas tokens. This setup is trust minimized - user's have the following guarantees:

1. They will be the receiver of the swap.
2. Only the amount of tokens the authorized will be swapped. 

## Setup

In order to run this relayer workflow, you will need an account on [1Shot API](https://1shotapi.com). You must then import the 1Shot Gas Station contract into your business for any chain you wish to support with your relayer.

Next, follow the directions in the worflow sticky notes to update the Payment Configs for the tokens you wish to support swaps for. Lastly, distrubute your webhook api endpoint to your users.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
