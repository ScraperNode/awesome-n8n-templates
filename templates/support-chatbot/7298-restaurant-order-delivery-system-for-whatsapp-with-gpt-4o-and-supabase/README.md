# 💬 Restaurant order & delivery system for WhatsApp with GPT-4o and Supabase

> ⚡ **6,256 views** · 💬 [Support Chatbots](../)

## Description

## How it works
This workflow creates a complete AI-powered restaurant ordering system through WhatsApp. It receives customer messages, processes multimedia content (text, voice, images, PDFs, location), uses GPT-4 to understand customer intent and manage conversations, handles the complete ordering flow from menu selection to payment verification, and sends formatted orders to restaurant staff. The system maintains conversation memory, verifies payment receipts using OCR, and provides automated responses in multiple languages.

## Who's it for
Restaurant owners, food delivery services, and hospitality businesses looking to automate customer service and order management through WhatsApp without hiring additional staff.

## Requirements
- WhatsApp Business API account
- OpenAI API key (GPT-4/GPT-4o access recommended)
- Supabase account (for conversation memory and vector storage)
- Google Drive account (for menu images and QR codes)
- Google Maps API key (for location services)
- Gemini API key (for PDF processing)

## How to set up
1. **Configure credentials** - Add your WhatsApp Business API, OpenAI, Supabase, Google Drive, and Gemini API credentials to n8n
2. **Update phone numbers** - Replace `[PHONE_NUMBER]` placeholders with your actual restaurant and staff phone numbers
3. **Customize restaurant details** - Replace `[RESTAURANT_NAME]`, `[RESTAURANT_OWNER_NAME]`, and `[BANK_ACCOUNT_NUMBER]` with your information
4. **Upload menu images** - Add your menu images to Google Drive and update the file IDs
5. **Set up Supabase** - Create tables for chat memory and upload your menu/restaurant information to the vector database
6. **Configure AI prompts** - Update the restaurant information in the AI agent system messages
7. **Test the workflow** - Send test messages to verify all integrations work

## How to customize the workflow
- **Menu management**: Update Google Drive file IDs to display your current menu images
- **Payment verification**: Modify the receipt analysis logic to match your bank's receipt format
- **Order formatting**: Customize the order confirmation template sent to kitchen staff
- **AI personality**: Adjust the restaurant agent's tone and responses in the system prompts
- **Languages**: The AI supports multiple languages - customize welcome messages for your target market
- **Business hours**: Add time-based logic to handle orders outside operating hours
- **Delivery zones**: Integrate with your delivery area logic using the location processing features

## 🔗 Nodes Used

HTTP Request, Google Drive, WhatsApp Business Cloud, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
