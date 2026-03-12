# 📈 Automate cryptocurrency analysis & reports with Google Gemini and CoinGecko email alerts

> ⚡ **1,217 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

```markdown
## Automated Cryptocurrency Analysis & Reporting with Google Gemini and CoinGecko  
This powerful template is an **n8n workflow** that automates cryptocurrency market data analysis and delivers reports directly to your inbox. It fetches real-time data from CoinGecko API, generates AI-powered analysis, and sends the report via email.  

### Features  
- **Scheduled Execution**: Runs automatically at a set time daily (default: 10:00 AM).  
- **Customizable Analysis**: Personalize analysis content/language via "AI Prompt" nodes.  
- **Easy Scalability**: Duplicate node groups to add more cryptocurrencies.  
- **Flexible AI Integration**: Defaults to Google Gemini, but supports ChatGPT/Ollama.  

### Setup Instructions  
1. **n8n Installation**: Install n8n (self-hosted or Cloud version).  
2. **Email Account Setup**:  
   - Add email service credentials in n8n (e.g., Microsoft Outlook OAuth2).  
3. **AI Model Credentials (Google Gemini)**:  
   - Obtain API key from Google AI Studio and add to n8n "Credentials".  
4. **Import Template**: Copy the JSON code into n8n as a new workflow.  

### Customization  
- **Change Cryptocurrencies**: Update `ids=` parameter in HTTP Request nodes (e.g., `ids=bitcoin`).  
- **Edit AI Prompt**: Modify text in "AI Prompt" nodes.  
- **Use Different AI Model**: Replace Google Gemini with supported alternatives.  
- **Update Email Address**: Change recipient in "Send Mail" nodes.  
```

## 🔗 Nodes Used

HTTP Request, Microsoft Outlook, Schedule Trigger, Basic LLM Chain, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
