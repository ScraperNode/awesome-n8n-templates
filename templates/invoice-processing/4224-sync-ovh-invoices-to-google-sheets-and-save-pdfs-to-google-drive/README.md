# 🧾 Sync OVH invoices to Google Sheets and save PDFs to Google Drive

> ⚡ **437 views** · 🧾 [Invoice Processing](../)

## Description

# 🛠️Setup Guide  'Get OVH Invoices to Google Sheets'
**Author: [Oliver Bardenheier](https://www.linkedin.com/in/oliver-bardenheier)**

## Who is this for?
This Workflow is for all users who have services (Domains, BareMetal, VPS, Cloud, etc.) with Provider OVH.com (European API)
It automatically retrieves invoice data, -files and puts the Data in a Google Spreadsheet for further processing.

## What problem is this workflow solving? / use case
Currently the invoices from OVH do not come as an attachment via mail, it is just a link. So, the receiver has to be logged in to the ovh account to download the file. Even more effort if one is using 2FA. This workflow retrieves all information through the oauth2 token.

## What this workflow does
This Workflow automatically retrieves invoice data, -files from Your OVH.com account and puts the Data in a Google Spreadsheet for further processing.
It also saves the invoice PDF to a certain (yearly) folder in Your Google Drive.

## Setup

1. Make a copy of this [Google Sheet Template](https://docs.google.com/spreadsheets/d/1NDQVUayKCUktwhDfgdyueW15JPeQZl_oExO_4O5GV-I/edit?usp=sharing) 

2. Set the timeframe for the query to Your likings in *"Query Latest OVH Invoices"*
You could set an email trigger before and make the frame only one day.

3. Log into Your OVH Account and get Your Credentials [here](https://eu.api.ovh.com/console/?section=%2Fiam&branch=v2#auth)

Authentication using oAuth2 Authorization Code
"Login with OVHcloud SSO"

You need to Authorize OVHcloud API console

If this worked fine You'll see a green text:  
"Access Token Received"

4. Head over to the [OVH API Console](https://eu.api.ovh.com/console/?section=%2Fme&branch=v1#get-/me) to get Your Token.

5. Set Up *Header Auth* in the HTTP nodes: 
- Authentication = Generic Credential Type
- Generic Auth Type = Header Auth
- Header Auth = Your OVH Header Credentials:
   -- a.) In every API Call in the console You'll find a curl example, just take the data from the line including:   
              -H "authorization: Bearer eyJhxxxxxxxxxxxxxxxxxxxxxxxxxxxxx......"

   -- b.) Create a new Credential in n8n for the header auth.  
        Put in the 'name' Field:   authorization
        Copy Your Token including Bearer in the value field:  'Bearer eyJhxxxxxxxxxxxxxxxxxxxxxxxxxxxxx......'

## How to customize this workflow to your needs
- You can put in a mail trigger that activates on every incoming invoice mail from OVH.
- Adjusting the timeframe to get invoices from a certain time period, or remove the time variables completely to get ALL invoices.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
