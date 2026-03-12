# 🤝 Create Shopify customers from a Google Sheet

> ⚡ **316 views** · 🤝 [CRM & Sales Operations](../)

## Description

### Task

Read a list of customers from a GoogleSheet and create them in Shopify using Shopify's Admin API (GraphQL).

### Why ?

- Generate test users for development stores.
- Migrate customers from other platforms.
- Easy intro to Shopify's GraphQL API.

### Setup 

#### Setting up Google Sheets access

Follow the instructions in the [N8N Docs](https://docs.n8n.io/integrations/builtin/credentials/google/oauth-generic/) for granting Oauth2 access to Google services. You'll need to grant API access to Google Sheets and Google Drive (to list available sheets). 

#### Setting up Shopify access

Shopify's Admin API uses 'Header Auth' with a **key** of X-Shopify-Access-Token and a **value** of your shopify access token which starts with shpat_ .

##### How to generate a Shopify Access Token 
To generate a Shopify Access Token create an app, grant the app the necessary scopes, then generate a token. 

##### From inside a store do the following :
1. click Settings (nav link) 
2. click Apps and sales channels (nav link) 
3. click Develop Apps (button)
4. click Create App (button)
5. give the app a name
6. click configure Admin API Scopes (button)
7. at a minimum grant read_customers and write_customers scope. Grant additional scopes if you plan on accessing other parts of the API.
8. click save

##### To generate the token 
1. click install app (button)
2. click install on the dialog that pops up (button)
3. click 'reveal token once' (button)
4. copy the token into a password vault or somewhere secure.

### Template Updates

To test this out you'll need to make the following changes :
1) Create a header credential where the **key** is X-Shopify-Access-Token and the **value** is your Shopify Access Token (it starts with shpat_ 
2) In the GraphQL node change the endpoint URL to your store. Something like  https://{your store goes here}.myshopify.com/admin/api/2025-04/graphql.json 

### Google Sheet Structure

Columns can be in any order, because the rows will be mapped to fields in a json object. N8N will treat the first row in the sheet as a column name, so at a minimum use the column names below in row 1 of your sheet. 
- first_name : Any string
- last_name : Any string
- email : Valid email 
- mobile_phone : International mobile phone format with no spaces eg. +61414708406 (Shopify will reject anything else).

Example CSV

"first_name","last_name","email","mobile_phone"
"Bob","Smith","bob@example.com","+61414999999"

## 🔗 Nodes Used

Google Sheets, GraphQL

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
