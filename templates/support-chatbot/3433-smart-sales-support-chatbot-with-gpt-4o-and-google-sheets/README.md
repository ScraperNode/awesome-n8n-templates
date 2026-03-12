# 💬 Smart sales support chatbot with GPT-4o and Google Sheets

> ⚡ **9,463 views** · 💬 [Support Chatbots](../)

## Description

## Who is this tempate for?
This workflow powers a **simple yet effective customer and sales support chatbot** for your webshop. It's perfect for solopreneurs who want to **automate customer interactions without relying on expensive or complex support tools**.

## How it works?
The chatbot listens to user requests—such as checking product availability—and automatically handles the following

- Fetches product information from a Google Sheet
- Answers customer queries
- Places an order
- Updates the stock after a successful purchase

*Everything runs through a single Google Sheet used for both stock tracking and order management.*

## **Setup Instructions**

Before you begin, connect your Google Sheets credentials by following this guide: This will be used to connect all the tools to Google Sheets
👉 [Setup Google sheets credentials](https://docs.n8n.io/integrations/builtin/credentials/google/oauth-generic/#finish-your-n8n-credential)

- ### Get Stock

	- Open "Get Stock" tool node and select the Google sheet credentials you created. 
	- Choose the correct google sheet document and sheet name and you are done.
	
- ### Place order
	
	- Go to your "Place Order" tool node and select the Google sheet credentials you have created. 
	- Choose the correct google sheet document and sheet name.

- ### Update Stock
	- - Open your "Update Stock" tool node and select the Google sheet credentials you have created. 
	- Choose the correct google sheet document and sheet name.
	- In "Mapping Column Mode" section select map each column manually.
	- In "Column to match on" select the column with a unique identifier (e.g., Product ID) to match stock items.
	- In values to update section, add only the column(s) that need to be updated—usually the stock count.
	
- ### AI Agent node 
	- Adjust the prompt according to your use case and customize what you need. 

## Google Sheet Template
**Stock sheet**

|Case ID|Phone Model|Case Name|Case Type|Image URL|Quantity Avaialble|Initital Inventory|Sold|
|-|-|-|-|-|-|-|-|
|1023|Iphone 14 pro|Black Leather|Magsafe|https://example.com/url|90|100|10

**Order sheet**

|Case ID|Phone Model|Case Name|Name|Phone Number|Address|
|-|-|-|-|-|-|
|1023|Black Leather |Iphone 14 pro|Fernando Torres|9998898888|Paris, France

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Simple Memory, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
