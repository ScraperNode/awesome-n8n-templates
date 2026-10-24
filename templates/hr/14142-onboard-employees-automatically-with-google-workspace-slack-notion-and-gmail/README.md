# 👥 Onboard employees automatically with Google Workspace, Slack, Notion and Gmail

> ⚡ **73 views** · 👥 [HR & Recruitment](../)

## Description

## 🚀 How it works                                                                                                                                                                                                                                                  
                                                                                                                                                                                                                                                                      
  Fully automates your Day 0–30 employee onboarding sequence the moment HR submits a webhook. No manual steps, no missed tasks.                                                                                                                                       
                                                                                                                                                                                                                                                                      
  - 🔐 Provisions Google Workspace account via Admin API                                                                                                                                                                                                            
  - 💬 Posts a personalised welcome message to Slack                                                                                                                                                                                                                  
  - 📝 Creates a Notion onboarding page pre-filled with the employee's details                                                                                                                                                                                        
  - 📧 Sends a welcome email via Gmail with first-day instructions                                                                                                                                                                                                    
  - ⏱️  Waits 7 days, then checks task completion — alerts the manager if anything is overdue                                                                                                                                                                          
  - ✅ Waits 30 days, runs a final completion check and closes the onboarding loop                                                                                                                                                                                  
                                                                                                                                                                                                                                                                      
  ## 🛠️  Set up steps                                                                                                                                                                                                                                                  
                                                                                                                                                                                                                                                                      
  **Estimated setup time: ~20 minutes**                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                      
  1. **Webhook** — copy the webhook URL and send it from your HR system (BambooHR, HiBob, Workday, or a simple form)                                                                                                                                                  
  2. **Google Workspace** — connect a Service Account with Domain-Wide Delegation; grant `admin.directory.user` scope                                                                                                                                                 
  3. **Slack** — connect Slack OAuth2; set the welcome channel in the node (e.g. `#general`)                                                                                                                                                                          
  4. **Notion** — connect Notion OAuth2; set your Onboarding database ID in the Create Page node                                                                                                                                                                    
  5. **Gmail** — connect Gmail OAuth2; customise the welcome email template in the Send Email node                                                                                                                                                                    
  6. Follow the sticky notes inside the workflow — each key node has a one-liner guide                                                                                                                                                                              
                                                                                                                                                                                                                                                                      
  ## 📋 Prerequisites                                                                                                                                                                                                                                                 
                                                                                                                                                                                                                                                                      
  - Google Workspace (Business Starter or higher)                                                                                                                                                                                                                     
  - Slack workspace with a bot or OAuth2 app                                                                                                                                                                                                                          
  - Notion workspace with an onboarding database                                                                                                                                                                                                                      
  - Gmail account for sending welcome emails

## Custom Workflow Request with Personal Dashboard

kumar@smartflowcraft.com

https://www.smartflowcraft.com/contact

### More free templates
https://www.smartflowcraft.com/n8n-templates

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, Gmail, Notion

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
