# 📈 Export your daily Binance spot portfolio to Google Sheets

> ⚡ **42 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

# What this workflow does                                                                                    
                                                                                                             
  This workflow automatically exports your Binance spot portfolio positions to Google Sheets on a daily      
  basis, enabling you to build comprehensive tracking dashboards and analyze your crypto holdings over time. 

                                                                                                             
## Who is this for?                                                                                                                                                                                                  
  - Crypto investors wanting to track portfolio evolution                                                    
  - Traders needing historical data for analysis                                                             
  - Anyone wanting automated portfolio snapshots without manual exports                                      
                                                                                                             
##   How it works                                                                                               
                                                                                                             
  1. Schedule Trigger - Runs daily at a configurable time                                                    
  2. Binance API - Fetches current spot wallet balances                                                      
  3. Data Transformation - Filters only non-null assets                                                      
  4. Google Sheets - Clears sheet and appends current assets                                                 
                                                                                                             
  ---                                                                                                        
##   Setup Instructions                                                                                         
                                                                                                             
###   Prerequisites                                                                                              
                                                                                                             
  - Binance account with API access enabled                                                                  
  - Google account with Google Sheets                                                                        
  - n8n instance (cloud or self-hosted)                                                                      
                                                                                                             
###   Step 1: Binance API Configuration                                                                          
                                                                                                             
  1. Go to [https://www.binance.com/en/my/settings/api-management](https://www.binance.com/en/my/settings/api-management)                                             
  2. Create a new API key                                                                                    
  3. IMPORTANT: Enable ONLY "Read" permissions - DO NOT enable trading or withdrawals                        
  4. Whitelist your server IP (recommended for security)                                                     
  5. Save your API Key and Secret Key securely                                                               
                                                                                                             
###   Step 2: Google Sheets Setup                                                                                
                                                                                                             
  1. Create a new Google Sheet with headers matching your exported fields (e.g., Asset | Balance)            
  2. In n8n, connect your Google account via OAuth2                                                          
  3. Note your spreadsheet ID from the URL                                                                   
                                                                                                             
###   Step 3: Import & Configure                                                                                 
                                                                                                             
  1. Import this workflow into n8n                                                                           
  2. Add your Binance credentials (API Key + Secret)                                                         
  3. Configure the Google Sheets node with your spreadsheet ID and sheet name                                
  4. Adjust the schedule trigger to your preferred time (default: daily)                                     
                                                                                                             
  ---                                                                                                        
  ## Customization                                                                                              
                                                                                                             
  Track historical positions: By default, this workflow clears the sheet before each export, giving you a    
  real-time snapshot. To keep position history:                                                              
  1. Remove the "Clear Sheet" action                                                                         
  2. Add a timestamp column to track when each export occurred                                               
  3. Use Google Sheets or Looker Studio to visualize daily evolutions                                        
                                                                                                             
  Add price data: Extend the workflow by adding an HTTP Request node to fetch current prices from Binance API
   (/api/v3/ticker/price) and calculate portfolio value.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
