# 📈 Monetize workflows with x402 Payment Protocol and 1Shot API

> ⚡ **431 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

![image.png](fileId:2684)

# Monetize Your n8n Workflow with x402

This workflow lets you monetize any n8n workflow with the [x402](https://x402.org) payment protocol. 

It uses [1Shot API](https://1shotapi.com) as the onchain transaction fascilitator role.

Check out the [tutorial](https://youtu.be/sqLUpR6t--0?si=sDbLTyLCS3nY4Fk0) video for a complete walkthrough. 

## Setup

1. Create a free [1Shot API](https://1shotapi.com) account, then go to the [API Keys](https://1shotapi.com/api-keys) tab and generate a new API key & secret. 
2. Click on one of the 1Shot API nodes and use the API key & secret from step 1 to create a credentail. You'll need you 1Shot API business ID as well which is located in the top right-hand corner of the 1Shot API dashboard. 
3. Click on the `Payment Token Configs` box and enter in the required token information for the x402-compatible tokens you want to accept as payment. Import the x402-compatible tokens you want to accept as payments into your 1Shot API (must be an ERC-20 token with a `transferWithAuthorization` method) account using the [1Shot Prompts](https://1shotapi.com/1shot-prompts) directory. 
4. Click on the webhook trigger node and set the route.

## 🔗 Nodes Used

Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
