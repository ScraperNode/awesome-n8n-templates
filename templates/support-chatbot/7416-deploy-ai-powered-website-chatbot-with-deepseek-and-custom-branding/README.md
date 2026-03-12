# 💬 Deploy AI-powered website chatbot with DeepSeek and custom branding

> ⚡ **2,818 views** · 💬 [Support Chatbots](../)

## Description

## Who's it for

This template is perfect for **business owners, developers, and marketers** who want to add a professional, branded AI chatbot to their website. Whether you're running an e-commerce site, a SaaS platform, or a corporate website, this template gives you a fully customizable chat widget that integrates seamlessly with your brand.

[![Brandable Custom Chatbox for N8N](https://omerfayyaz.com/n8n-brandable-chatbox/n8n-brandable-chatbox-copy.jpg)](https://omerfayyaz.com/n8n-brandable-chatbox/index.html)

## How it works

The template creates a **webhook endpoint** that receives chat messages and processes them through an AI agent powered by DeepSeek. The workflow includes:

- **Webhook endpoint** that accepts POST requests from your website
- **AI Agent** that processes user messages and maintains conversation context
- **Memory buffer** that remembers conversation history for each user session
- **Response formatting** that sends AI replies back to your chat widget

The chat widget itself is a **vanilla JavaScript component** that you embed on your website. It features:
- Customizable colors, branding, and positioning
- Light/dark theme support
- Mobile-responsive design
- Local conversation history
- Session management with expiration
- WordPress plugin integration

## How to set up

1. **Import the workflow** into your n8n instance
2. **Configure your DeepSeek API credentials** in the DeepSeek Chat Model node
3. **Activate the workflow** to generate your webhook URL
4. **Copy the webhook URL** from the Webhook node
5. **Embed the chat widget** on your website using the provided JavaScript files

## Requirements

- **n8n instance** (self-hosted or cloud)
- **DeepSeek API account** and API key
- **Website** where you want to embed the chatbot
- **Basic HTML/JavaScript knowledge** for customization

## How to customize the workflow

### AI Agent Configuration
- Modify the AI Agent prompt to change how the bot responds
- Adjust the memory buffer settings for conversation context
- Change the AI model parameters for different response styles

### Webhook Customization
- Add authentication headers if needed
- Modify the response format to match your requirements
- Add additional processing nodes before the AI Agent

### Chat Widget Styling
- Change `brandColor` and `accentColor` to match your brand
- Customize the bot name, avatar, and welcome message
- Adjust positioning and launcher style
- Enable dark mode or HTML responses as needed

### Advanced Features
- Add user authentication integration
- Implement rate limiting
- Connect to your CRM or support system
- Add analytics and tracking

## Template Features

✅ **No hardcoded API keys** - uses n8n credential system  
✅ **Sticky notes included** - explains the entire workflow  
✅ **Professional branding** - fully customizable appearance  
✅ **WordPress ready** - includes plugin and shortcode support  
✅ **Mobile responsive** - works on all devices  
✅ **Session management** - remembers conversations per user  

## Use Cases

- **Customer Support**: Provide instant AI-powered assistance
- **Lead Generation**: Engage visitors and collect contact information
- **Product Guidance**: Help customers find the right products/services
- **FAQ Automation**: Answer common questions automatically
- **Booking Assistant**: Help with appointments and reservations
- **E-commerce Support**: Guide customers through purchases

## Technical Details

The workflow uses the **LangChain AI Agent** with **DeepSeek** as the language model and includes a **Memory Buffer** for conversation context. The webhook response format is optimized for the chat widget.

## Live Demo

**Try it online:** [Live Demo](https://omerfayyaz.com/n8n-brandable-chatbox/index.html)

Experience the chatbox widget in action with a working n8n webhook integration. The demo showcases all features including light/dark themes, HTML responses, and session management.

---

**Note:** This template includes a complete JavaScript chat widget and WordPress plugin, making it ready for immediate use on any website. The workflow is designed to be production-ready with proper error handling and security considerations.

## 🔗 Nodes Used

Webhook, AI Agent, Simple Memory, DeepSeek Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
