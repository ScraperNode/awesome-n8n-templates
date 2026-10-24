# 🤝 Automate service order fulfillment with Claude, Freshworks CRM and SLA escalation

> ⚡ **200 views** · 🤝 [CRM & Sales Operations](../)

## Description

## 🚀 How it works
                                                                                                                                  
  Fully automates your service order pipeline from incoming booking to supplier confirmation — with built-in SLA enforcement and automatic escalation if a supplier goes silent.
                                              
  - 📥 Receives orders via webhook from your booking form or website
  - 💳 Verifies payment against Stripe before processing anything                                                                                                                                                                                                     
  - 🤖 Extracts and structures order details (service type, address, date, priority) using Claude AI                                                                                                                                                                  
  - 👤 Upserts the customer contact and creates a deal in Freshworks CRM automatically                                                                                                                                                                                
  - 📧 Sends branded confirmation emails to the customer and assigned supplier via Postmark                                                                                                                                                                           
  - ⏱️  Enforces a 4-hour supplier acceptance SLA — escalates automatically if no response                                                                                                                                                                             
  - 🔁 Reassigns to a backup supplier and retries for 2 hours before flagging for manual review                                                                                                                                                                       
  - 🚨 Alerts your team on Slack if manual intervention is required                                                                                                                                                                                                   
  - 📊 Logs every outcome (confirmed, reassigned, escalated) to Google Sheets for full audit trail                                                                                                                                                                    
                                                                                                                                                                                                                                                                      
  ## 🛠️  Set up steps                                                                                                                                                                                                                                                  
                                                                                                                                                                                                                                                                      
  **Estimated setup time: ~30 minutes**                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                      
  1. **Webhook** — copy the webhook URL and point it from your booking form or website checkout                                                                                                                                                                       
  2. **Stripe** — add your Stripe secret key to the HTTP Request node; set the correct `payment_intent` field name from your payload                                                                                                                                  
  3. **Claude (Anthropic)** — connect your Anthropic API credential; claude-sonnet-4-6 or higher recommended
  4. **Freshworks CRM** — connect your Freshworks credential; set your domain in the HTTP Request upsert node (e.g. `yourcompany.freshsales.io`)                                                                                                                      
  5. **Postmark** — add your Postmark Server Token to the HTTP Request nodes; update the sender email address
  6. **Slack** — connect Slack OAuth2; set your ops/dispatch channel in the alert nodes (e.g. `#dispatch-alerts`)                                                                                                                                                     
  7. **Google Sheets** — connect Google Sheets OAuth2; set your spreadsheet ID and sheet name in the log nodes                                                                                                                                                        
  8. Follow the sticky notes inside the workflow — each section has a one-liner setup guide                                                                                                                                                                           
                                                                                                                                                                                                                                                                      
  ## 📋 Prerequisites                                                                                                                                                                                                                                                 
                                                                                                                                                                                                                                                                      
  - Stripe account with payment intents enabled                                                                                                                                                                                                                       
  - Anthropic API key (Claude API access)                                                                                                                                                                                                                             
  - Freshworks CRM account (Growth plan or higher for API access)
  - Postmark account with a verified sender domain                                                                                                                                                                                                                    
  - Slack workspace with a bot or OAuth2 app  
  - Google Sheets spreadsheet set up as your audit log                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                      
  ---                                                                                                                                                                                                                                                                 
                                                                                                                                                                                                                                                                      
  ## Custom Workflow Request with Personal Dashboard                                                                                                                                                                                                                  
                  
  kumar@smartflowcraft.com                                                                                                                                                                                                                                            
                  
  https://www.smartflowcraft.com/contact

  ### More free templates
  https://www.smartflowcraft.com/n8n-templates

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook, Freshworks CRM, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
