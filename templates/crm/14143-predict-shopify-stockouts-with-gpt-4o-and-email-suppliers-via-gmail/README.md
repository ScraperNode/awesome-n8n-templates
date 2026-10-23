# 🤝 Predict Shopify stockouts with GPT-4o and email suppliers via Gmail

> ⚡ **98 views** · 🤝 [CRM & Sales Operations](../)

## Description

## 🚀 How it works                                                                                                                                                                                                                                                  
                                                                                                                                                                                                                                                                      
  Runs daily at 06:00 UTC, pulls every Shopify product variant's stock level,                                                                                                                                                                                         
  calculates real sales velocity from the last 7 days of orders, then uses                                                                                                                                                                                            
  GPT-4o to predict stockout dates and decide whether to reorder — automatically.                                                                                                                                                                                     
                                                                                                                                                                                                                                                                      
  - 🛍️  Fetches all Shopify product variants and current inventory quantities                                                                                                                                                                                          
  - 📦 Pulls the last 7 days of orders and computes units sold per variant                                                                                                                                                                                            
  - ⚡ Calculates sales velocity (units/day) and estimated days until stockout                                                                                                                                                                                        
  - 🤖 AI Agent classifies risk: **critical / high / medium / low** and recommends reorder quantity (30-day demand + 20% safety buffer)                                                                                                                               
  - 📧 Sends a formatted reorder request email to your supplier for high-risk variants                                                                                                                                                                                
  - 📊 Logs every decision (reordered or skipped) to Google Sheets for inventory tracking                                                                                                                                                                             
                                                                                                                                                                                                                                                                      
  ## 🛠️  Set up steps                                                                                                                                                                                                                                                  
                                                                                                                                                                                                                                                                      
  **Estimated setup time: ~15 minutes**                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                      
  1. **Shopify** — create a Custom App in your Shopify Admin → Apps → Develop Apps; enable `read_products` and `read_orders` scopes; copy the Admin API Access Token                                                                                                  
  2. **OpenAI** — connect your OpenAI API credential (GPT-4o)                                                                                                                                                                                                         
  3. **Gmail** — connect Gmail OAuth2; replace `supplier@example.com` with your real supplier address
  4. **Google Sheets** — connect Google Sheets OAuth2; replace `YOUR_REORDER_LOG_SHEET_ID` with your sheet ID; create a sheet tab named `Reorder Log`                                                                                                                 
  5. Follow the sticky notes inside the workflow for per-node guidance
                                                                                                                                                                                                                                                                      
  ## 📋 Prerequisites                     
                                                                                                                                                                                                                                                                      
  - Shopify store (any plan with Admin API access)                                                                                                                                                                                                                    
  - OpenAI API key                                                                                                                                                                                                                                                    
  - Gmail account for supplier notifications                                                                                                                                                                                                                          
  - Google Sheets for reorder log
## Custom Workflow Request with Personal Dashboard

kumar@smartflowcraft.com

https://www.smartflowcraft.com/contact

### More free templates
https://www.smartflowcraft.com/n8n-templates

## 🔗 Nodes Used

Google Sheets, Shopify, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
