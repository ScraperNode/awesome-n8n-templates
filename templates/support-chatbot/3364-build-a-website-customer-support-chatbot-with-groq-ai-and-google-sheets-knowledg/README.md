# 💬 Build a website customer support chatbot with Groq AI and Google Sheets knowledge base

> ⚡ **254 views** · 💬 [Support Chatbots](../)

## Description

Build a Website Customer Support Chatbot with Groq AI and Google Sheets as its Knowledge Base.

## Setup Instructions

### Prerequisites
1. **API Credentials Required:**
   - Groq API credentials - You'll need a valid API key from Groq
   - Google Sheets credentials - OAuth authentication required to access your knowledge base sheets

### Step-by-Step Setup
1. **Add Required Credentials:**
   - Click on the Credentials menu and add your Groq API credentials
   - Set up Google OAuth credentials for Google Sheets access
   
2. **Configure the Groq Chat Model:**
   - Click on the "Groq Chat Model" node
   - Select your preferred Groq model (e.g., Llama-3-70b or Mixtral-8x7b)
   - Set token limits and other parameters as needed
   
3. **Set Up Your Knowledge Base:**
   - Create a Google Sheet with your support information (example structure below)
   - Note the Google Sheet ID from the URL
   
4. **Configure the Google Sheets Node:**
   - Click on the "Google Sheets" node
   - Select your document ID from the dropdown
   - Select the specific sheet name containing your knowledge base
   
5. **Customize the AI Agent:**
   - Modify the system message to match your brand's tone and support style
   - Adjust the context window length in the "Chat History" node based on your needs
   
6. **Test the Chatbot:**
   - Click the "Chat" button to test with sample customer questions
   - Verify the AI retrieves correct information from your knowledge base
   
7. **Deploy to Your Website:**
   - Click "Make Public" to generate an embed code
   - Add the embed code to your website HTML

### Knowledge Base Structure Example
Your Google Sheet should be structured with clear headers and organized data. Example format:

| Question | Answer | Category | Keywords |
|----------|--------|----------|----------|
| How do I reset my password? | To reset your password, click the "Forgot Password" link on the login page and follow the instructions sent to your email. | Account | password, reset, forgot, login |
| What are your shipping rates? | Standard shipping is $5.99. Express shipping is $12.99. Orders over $50 qualify for free standard shipping. | Shipping | rates, costs, delivery, free shipping |
| How do I return an item? | Returns can be initiated within 30 days of purchase by logging into your account and selecting "Start a Return" in your order history. | Returns | return policy, exchange, refund |

Each row should contain a complete customer query and response pair, with optional categorization and keywords to help the AI find relevant information quickly.

## Website Embedding 
You can use and replace the placeholders in the following code: [View on Codepen (external link)](https://codepen.io/olemai/pen/RNwPdVp)

Put the customized Code inside your website's head element (before the `&lt;/head&gt;` tag).

## 🔗 Nodes Used

AI Agent, Simple Memory, Chat Trigger, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
