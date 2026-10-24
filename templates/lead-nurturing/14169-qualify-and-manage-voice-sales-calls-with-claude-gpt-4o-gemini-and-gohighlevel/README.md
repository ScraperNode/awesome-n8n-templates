# 💬 Qualify and manage voice sales calls with Claude, GPT-4o, Gemini, and GoHighLevel

> ⚡ **287 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

⏺ 🚀 How it works                                                                                                                                                                                                                                                     
                                                                                                                                                                                                                                                                      
  Fully automates your inbound and outbound voice sales pipeline — from live call qualification to CRM pipeline management — with multi-agent AI and automatic lead nurturing if a prospect doesn't book.                                                             
                                                                                                                                                                                                                                                                      
  - 📞 Receives end-of-call reports from Vapi or Retell AI via webhook — works with both providers out of the box                                                                                                                                                     
  - 🧠 Qualifies every inbound lead using BANT scoring (Budget · Authority · Need · Timeline) powered by Claude Haiku                                                                                                                                                 
  - 📅 Detects appointment intent and preferred meeting time using GPT-4o before touching your CRM                                                                                                                                                                    
  - 🗂️  Upserts the contact and creates a pipeline opportunity in GoHighLevel automatically — no duplicates                                                                                                                                                            
  - 💬 Analyses objections and generates a rebuttal script using Claude Sonnet (feel-felt-found + Challenger Sale)                                                                                                                                                    
  - 📝 Writes a professional CRM note from the call summary using Gemini 2.0 Flash — ready to sync                                                                                                                                                                    
  - 🔁 Enrols unqualified leads into a GoHighLevel nurture workflow automatically for long-term follow-up                                                                                                                                                             
  - 📤 Fires prioritised outbound calls every morning at 9 AM via Vapi — GPT-4o Mini ranks leads by conversion probability                                                                                                                                            
  - 📊 Logs every call (inbound + outbound) to Supabase and Google Sheets for full pipeline reporting                                                                                                                                                                 
                                                                                                                                                                                                                                                                      
  🛠️  Set up steps                                                                                                                                                                                                                                                     
                                                                                                                                                                                                                                                                      
  Estimated setup time: ~45 minutes                                                                                                                                                                                                                                   
                                                                                                                                                                                                                                                                      
  1. Webhook — copy the webhook URL and paste it into your Vapi or Retell dashboard as the end-of-call report URL                                                                                                                                                     
  2. GoHighLevel — connect your HighLevel OAuth2 credential; set your Pipeline ID, Hot Stage ID, and Nurturing Stage ID in the opportunity nodes (Opportunities → Settings → Pipelines)
  3. Anthropic — connect your Anthropic API credential; used for Claude Haiku (BANT qualification) and Claude Sonnet (objection handling)
  4. OpenAI — connect your OpenAI API credential; used for GPT-4o (booking intent detection) and GPT-4o Mini (outbound lead ranking)                                                                                                                                  
  5. Google Gemini — connect your Google Gemini API credential; used for CRM note writing with gemini-2.0-flash
  6. Vapi — add your Vapi API key to the HTTP Request node header; set your Phone Number ID and Assistant ID in the outbound call node (Vapi Dashboard → Phone Numbers / Assistants)                                                                                  
  7. Supabase — connect your Supabase API credential; create the voice_call_logs table using the SQL in the setup sticky note inside the workflow                                                                                                                     
  8. Google Sheets — connect Google Sheets OAuth2; set your Spreadsheet ID and ensure a sheet named Voice Call Log exists with the columns listed in the setup sticky note                                                                                            
  9. Follow the sticky notes inside the workflow — each section has a one-liner setup guide                                                                                                                                                                           
                                                                                                                                                                                                                                                                      
  📋 Prerequisites                                                                                                                                                                                                                                                    
                                                                                                                                                                                                                                                                      
  - Vapi or Retell AI account with an active phone number and assistant configured                                                                                                                                                                                    
  - Anthropic API key (Claude API access)                                                                                                                                                                                                                             
  - OpenAI API key (GPT-4o and GPT-4o Mini access)                                                                                                                                                                                                                    
  - Google Gemini API key                                                                                                                                                                                                                                             
  - GoHighLevel account with at least one pipeline and automation workflow set up
  - Supabase project with the voice_call_logs table created                                                                                                                                                                                                           
  - Google Sheets spreadsheet set up as your call log
                                                                                                                                                                                                                                                                      
  ---                                                                                                                                                                                                                                                                 
  Custom Workflow Request with Personal Dashboard
                                                                                                                                                                                                                                                                      
  kumar@smartflowcraft.com
                                                                                                                                                                                                                                                                      
  https://www.smartflowcraft.com/contact  

  More free templates                                                                                                                                                                                                                                                 
   
  https://www.smartflowcraft.com/n8n-templates

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Supabase, HighLevel, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
