# 📈 Automate cryptocurrency funding fee tracking with Binance API and Airtable

> ⚡ **2,107 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

### Video Guide

I prepared a detailed guide that showed the whole process of integrating the Binance API and storing data in Airtable to manage funding statements associated with tokens in a wallet.

[![Youtube Thumbnail](https://res.cloudinary.com/de9jgixzm/image/upload/qkd9krobszxhrzk34wpg)](https://youtu.be/GBZRduOzOzg)

[Youtube Link](https://youtu.be/GBZRduOzOzg)

### Who is this for?
This workflow is ideal for developers, financial analysts, and cryptocurrency enthusiasts who want to automate the process of managing funding statements and token prices. It’s particularly useful for those who need a systematic approach to track and report funding fees associated with tokens in their wallets.

### What problem does this workflow solve?
Managing funding statements and token prices across multiple platforms can be cumbersome and error-prone. This workflow automates the process, allowing users to seamlessly fetch funding fees from Binance and record them alongside token prices in Airtable, minimizing manual data entry and potential discrepancies.

### What this workflow does
This workflow integrates the Binance API with an Airtable database, facilitating the storage and management of funding statements linked to tokens in a wallet. The agent can:
- Fetch funding fees and current positions from Binance.
- Aggregate data to create structured funding statements.
- Insert records into Airtable, ensuring proper linkage between funding data and tokens.

1. **API Authentication**: The workflow establishes authentication with the Binance API using a Crypto Node to handle API keys and signatures, ensuring secure and verified requests.
2. **Data Collection**: It retrieves necessary data, including funding fees and current positions with properly formatted API requests to ensure seamless communication with Binance.
3. **Airtable Integration**: The workflow inserts aggregated funding statements and token data into the corresponding Airtable records, managing token existence checks to avoid duplicate entries.

### Setup

1. **Set Up Airtable Database**:
   - Create an Airtable base with tables for Funding Statements and Tokens.

2. **Generate Binance API Key**:
   - Log in and create an API key with appropriate permissions.

3. **Set Up Authentication in N8N**:
   - Utilize a Crypto Node for Binance API authentication.

4. **Configure API Request to Binance**:
   - Set request method and headers for communication with the Binance API.

5. **Fetch Funding Fees and Current Positions**:
   - Retrieve funding data and current positions efficiently.

6. **Aggregate and Create Statements**:
   - Aggregate data to create detailed funding statements.

7. **Insert Data into Airtable**:
   - Input the structured data into Airtable and manage token records.

8. **Using Get Price Node**:
   - Implement a Get Price Node to maintain current token price tracking without additional setup.

## 🔗 Nodes Used

Airtable, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
