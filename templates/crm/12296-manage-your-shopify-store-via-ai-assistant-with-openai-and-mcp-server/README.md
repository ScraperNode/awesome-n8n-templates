# 🤝 Manage your Shopify store via AI assistant with OpenAI and MCP server

> ⚡ **63 views** · 🤝 [CRM & Sales Operations](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
>
> <a href="https://scrapernode.com/facebook"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Who it's for
This **n8n workflow** is designed for Shopify store owners and e-commerce managers who want to automate their store operations through an intelligent AI assistant. The workflow creates a conversational interface that can manage products, process orders, and provide store analytics through natural language commands.

## Features
- **Intelligent AI Assistant**: Powered by OpenAI with specialized system prompts for e-commerce operations
- **Shopify Integration**: Complete MCP (Model Context Protocol) server implementation for seamless Shopify operations
- **Product Management**: Create, update, search, retrieve, and delete products automatically
- **Order Processing**: Create, update, retrieve, and manage orders including fulfillment status
- **Context-Aware Automation**: Uses conversation history and Shopify data to minimize user input requirements

## Requirements
- **Shopify Access Token**: For accessing Shopify store data and operations
- **OpenAI API Credentials**: For powering the AI assistant
- **Notification Service Credentials**:
  `Discord Bot API`, `Telegram Bot API`, `Rapiwa API (for WhatsApp)`, `Gmail OAuth2`
#### Configure Credentials
- **Shopify Access Token**: Configure with proper permissions for your store
- **OpenAI API**: Set up with appropriate model access (gpt-4.1-mini or similar)
- **Notification Services**: Configure each service with proper API keys and target IDs

## Important Notes
- **MCP Server Setup**: The workflow includes a Shopify MCP Server that must be properly configured for production use
- **Tool Selection**: The MCP Client includes specific Shopify tools that can be enabled/disabled based on requirements
- **System Prompt**: The AI assistant is configured with specialized e-commerce guidelines that can be customized
- **Confirmation Requirements**: Irreversible actions like deletions will require confirmation
- **Rate Limiting**: The workflow includes appropriate delays to prevent API rate limiting
- **Notification Content**: All notifications include a standard success message that can be customized

## Production Deployment for MCP Server
`To deploy this workflow in production`

## Support & Help
- **WhatsApp**: [Chat on WhatsApp](https://wa.me/8801322827799)
- **Discord**: [SpaGreen Community](https://discord.gg/SsCChWEP)
- **Facebook Group**: [SpaGreen Support](https://www.facebook.com/groups/spagreenbd)
- **Website**: [https://spagreen.net](https://spagreen.net)
- **Developer Portfolio**: [Codecanyon SpaGreen](https://codecanyon.net/user/spagreen/portfolio)

## 🔗 Nodes Used

Telegram, Discord, Gmail, Stop and Error, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
