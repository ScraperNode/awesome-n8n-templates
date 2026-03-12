# 💬 Handle WhatsApp customer inquiries with AI and intent routing

> ⚡ **1,816 views** · 💬 [Support Chatbots](../)

## Description

# Handle WhatsApp customer inquiries with AI and intent routing (Whatsapp Chatbot)

An intelligent, **fully customizable** WhatsApp customer support chatbot template that works for ANY business - whether you sell fashion, electronics, food, furniture, cosmetics, or anything else. This workflow combines pre-built responses for common queries with AI for complex questions, creating a cost-effective 24/7 customer support solution that adapts to your specific products and services.

## Who it's for

This **universal template** works for ANY business type:
- **E-commerce stores** (fashion, electronics, home goods, beauty, etc.)
- **Local retail shops** (boutiques, grocery stores, bookshops, etc.)
- **Service businesses** (salons, repair services, consultancies, etc.)
- **Restaurants & cafes** (food delivery, reservations, menu inquiries)
- **Any business** using WhatsApp Business API for customer communication

## What it does

**This is a UNIVERSAL template** - it works for ANY business by simply updating the product categories, company information, and response templates. No coding knowledge required for basic customization!

The workflow automates WhatsApp customer support through intelligent routing and AI assistance:

1. **Receives WhatsApp messages** via WhatsApp Business API webhook trigger
2. **Parses message data** extracting user info, chat ID, and message text
3. **Classifies intent** using pattern matching to determine what the customer wants (product inquiry, contact info, support, greeting, etc.)
4. **Routes intelligently** to the most appropriate response handler:
   - **Product inquiries** → Pre-built catalog responses with pricing and links
   - **Contact information** → Static company details (address, phone, hours)
   - **Complex queries** → AI agent with full company context
5. **Maintains conversation context** using memory to remember previous messages
6. **Sends formatted responses** back to the customer via WhatsApp with markdown formatting

The hybrid approach (pre-built responses + AI) balances speed, cost, and intelligence - common questions get instant answers while complex queries receive personalized AI assistance.

## How to set up

### Requirements

You'll need:
- **WhatsApp Business API** access (via Twilio, 360Dialog, Meta Cloud API, or other providers)
- **Google Gemini API key** (for AI responses) - [Get API key](https://ai.google.dev/)
- **Google Docs** (optional - for product catalog reference)
- **n8n instance** with WhatsApp nodes installed

### Setup Steps

1. **Configure WhatsApp Business API**
   - Sign up with a WhatsApp Business API provider (Twilio, 360Dialog, or Meta)
   - Get your API credentials (phone number ID, access token, webhook verify token)
   - Add credentials to n8n's WhatsApp node
   - Copy the webhook URL from n8n and configure it in your provider's dashboard

2. **Customize Company Information**
   - Open the "Build AI System Prompt" node
   - Replace all placeholder text with your actual company details:
     - Company name
     - Address and phone numbers
     - Email and website
     - Product categories and brands
     - Policies (COD, warranty, returns, delivery)
     - Store hours
   
3. **Configure Product Responses**
   - Edit the "Generate Product Response" node
   - Replace the sample products with your actual catalog:
     - Product names and specifications
     - Prices (update currency if not using INR)
     - Product URLs from your website
     - Add/remove product categories as needed
   
4. **Update Contact Details**
   - Edit the "Generate Contact Info Response" node
   - Add your complete contact information
   - Update store hours and addresses
   
5. **Set Up AI Credentials**
   - Add your Google Gemini API key to the credential manager
   - (Optional) Connect Google Docs if you want to use a product catalog document
   
6. **Activate and Test**
   - Activate the workflow in n8n
   - Send test messages to your WhatsApp Business number
   - Test different intents: greetings, product questions, contact requests
   - Verify responses are accurate and timely

### WhatsApp Business API Providers

**Option 1: Meta Cloud API** (Official, free for moderate usage)
- Sign up at: https://developers.facebook.com/
- Requires Facebook Business account
- Best for: Small to medium businesses

**Option 2: Twilio** (Reliable, paid service)
- Sign up at: https://www.twilio.com/whatsapp
- Pay-per-message pricing
- Best for: Businesses needing high reliability

**Option 3: 360Dialog** (WhatsApp-focused)
- Sign up at: https://www.360dialog.com/
- Competitive pricing
- Best for: WhatsApp-heavy businesses

**Option 4: MessageBird, Vonage, others**
- Various pricing and features
- Research and compare based on your needs

## How it works

### Intent Classification System

The workflow uses keyword pattern matching to classify user intent into these categories:

**Priority 1: Contact Information** (highest priority)
- Triggers: "where is store", "address", "contact", "phone number"
- Response: Static contact details
- Why first: Users asking for contact info need immediate, accurate answers

**Priority 2: Greetings**
- Triggers: "hi", "hello", "hey", "good morning"
- Response: Friendly welcome with menu options
- Helps: Sets a positive tone for the conversation

**Priority 3: Product Inquiries**
- Triggers: Category keywords (monitor, processor, GPU, RAM, etc.)
- Response: Pre-built catalog with products, prices, and links
- Categories: Customizable based on your products

**Priority 4: AI Fallback**
- Triggers: Everything else (comparisons, complex questions, multi-step queries)
- Response: Google Gemini AI with company knowledge
- Features: Conversation memory, personalized recommendations

### Response Architecture

**Pre-Built Responses (Fast & Cost-Effective)**
- Instant answers (no API calls)
- Handles 70-80% of queries
- Consistent, accurate information
- No ongoing costs
- Used for: Product lists, contact info, FAQs

**AI Agent (Intelligent & Flexible)**
- Handles complex questions
- Maintains conversation context
- Provides personalized recommendations
- Adapts to different query styles
- Used for: Comparisons, custom builds, technical questions

### Conversation Memory

The workflow uses buffer window memory to remember recent conversation:
- Stores last 10 messages per user
- Enables multi-turn conversations
- AI can reference previous questions
- Creates more natural interactions
- Memory is user-specific (isolated by user ID)

### Message Flow Example

**User**: "Hi"
→ Intent: greeting
→ Response: Welcome message with menu

**User**: "Show me monitors"
→ Intent: product_inquiry (monitors)
→ Response: Pre-built list of monitors with prices

**User**: "Which one is best for gaming?"
→ Intent: general_inquiry (complex)
→ Response: AI analyzes previous context (monitors) and recommends gaming-focused option

**User**: "What's your address?"
→ Intent: contact_info
→ Response: Complete contact details

## How to customize the workflow

### STEP 1: Customize Product Categories

The workflow comes with example categories for multiple business types. Replace them with YOUR categories:

**For a Fashion Store:**
```javascript
const categories = [
  { pattern: /(shirt|tshirt|top)/i, category: 'tops' },
  { pattern: /(jeans|pants|trousers)/i, category: 'bottoms' },
  { pattern: /(dress|gown|kurti)/i, category: 'dresses' },
  { pattern: /(shoe|footwear|heels)/i, category: 'shoes' },
];
```

**For a Grocery Store:**
```javascript
const categories = [
  { pattern: /(vegetable|veggies)/i, category: 'vegetables' },
  { pattern: /(fruit|fruits)/i, category: 'fruits' },
  { pattern: /(dairy|milk|cheese)/i, category: 'dairy' },
  { pattern: /(snack|chips|biscuit)/i, category: 'snacks' },
];
```

**For a Beauty/Cosmetics Store:**
```javascript
const categories = [
  { pattern: /(skincare|cream|serum)/i, category: 'skincare' },
  { pattern: /(makeup|lipstick|foundation)/i, category: 'makeup' },
  { pattern: /(perfume|fragrance)/i, category: 'perfumes' },
  { pattern: /(hair|shampoo|conditioner)/i, category: 'haircare' },
];
```

**For a Home Furniture Store:**
```javascript
const categories = [
  { pattern: /(sofa|couch)/i, category: 'sofas' },
  { pattern: /(bed|mattress)/i, category: 'bedroom' },
  { pattern: /(table|desk|dining)/i, category: 'tables' },
  { pattern: /(chair|seating)/i, category: 'chairs' },
];
```

**For a Restaurant:**
```javascript
const categories = [
  { pattern: /(pizza|italian)/i, category: 'italian' },
  { pattern: /(burger|sandwich)/i, category: 'fast_food' },
  { pattern: /(biryani|curry|indian)/i, category: 'indian' },
  { pattern: /(dessert|sweet|ice cream)/i, category: 'desserts' },
];
```

---

### STEP 2: Customize Product Responses

Update the "Generate Product Response" node with YOUR actual products:

**Example for Fashion Store:**
```javascript
if (category === 'tops') {
  response = `Hi ${userName}! Check out our *TOPS* collection:\\n\\n`;
  response += `👕 *Cotton Casual T-Shirt*\\n   💰 ₹499\\n   🎨 5 colors available\\n   🔗 yourstore.com/tshirts\\n\\n`;
  response += `👚 *Formal Shirt*\\n   💰 ₹899\\n   🎉 Buy 2 Get 20% OFF\\n   🔗 yourstore.com/shirts\\n\\n`;
}
```

**Example for Grocery Store:**
```javascript
if (category === 'vegetables') {
  response = `Fresh *VEGETABLES* available, ${userName}:\\n\\n`;
  response += `🥕 *Fresh Carrots (1kg)*\\n   💰 ₹40\\n   🌱 Organic\\n\\n`;
  response += `🍅 *Tomatoes (1kg)*\\n   💰 ₹30\\n   ✅ Farm Fresh\\n\\n`;
}
```

**Example for Restaurant:**
```javascript
if (category === 'italian') {
  response = `Delicious *ITALIAN* dishes, ${userName}:\\n\\n`;
  response += `🍕 *Margherita Pizza*\\n   💰 ₹299\\n   👨‍🍳 Chef's Special\\n\\n`;
  response += `🍝 *Creamy Alfredo Pasta*\\n   💰 ₹349\\n   🔥 Bestseller\\n\\n`;
}
```

---

### STEP 3: Update Company Information

Edit the "Build AI System Prompt" node:

**For a Boutique:**
```javascript
const systemPrompt = `You are a customer service assistant for Elegant Threads Boutique.

COMPANY INFORMATION:
- Business: Women's Designer Clothing Boutique
- Products: Ethnic wear, western wear, accessories
- Price Range: ₹1,500 - ₹15,000
- Speciality: Custom tailoring available
- Store Address: Shop 12, Fashion Street, Mumbai
- Phone: +91 98XXXXXXXX
- Delivery: Pan-Mumbai, 2-3 days
- Returns: 7-day no-questions-asked return policy
`;
```

**For a Tech Store:**
```javascript
const systemPrompt = `You are customer support for TechHub Electronics.

COMPANY INFORMATION:
- Business: Consumer Electronics Retailer
- Products: Smartphones, laptops, accessories, home appliances
- Price Range: ₹500 - ₹2,00,000
- Speciality: Same-day delivery in Delhi NCR
- Warranty: Extended warranty on all electronics
- Store: Connaught Place, New Delhi
- Phone: +91 11-XXXXXXXX
`;
```

**For a Bakery:**
```javascript
const systemPrompt = `You are the assistant for Sweet Delights Bakery.

COMPANY INFORMATION:
- Business: Fresh Baked Goods & Custom Cakes
- Products: Cakes, pastries, cookies, bread
- Price Range: ₹50 - ₹3,000
- Speciality: Custom cakes for all occasions (24hrs notice)
- Store: Baker Street, Bangalore
- Phone: +91 80-XXXXXXXX
- Delivery: Free above ₹500 within 5km
`;
```

---

### Additional Customization Options

### Change AI Model
**Replace Google Gemini** with other LLM providers:
- **OpenAI GPT-4**: Best for nuanced understanding
- **Anthropic Claude**: Strong at following instructions
- **Llama** (self-hosted): Cost-effective for high volume

Simply swap the "Google Gemini Chat Model" node with your preferred model.

### Add More Intents
Extend the intent classification in the "Classify User Intent" node:
```javascript
// Add order tracking
if (/track.*order|order.*status|where.*order/i.test(text)) {
  intent = 'order_tracking';
}

// Add complaint handling
if (/complaint|unhappy|problem|issue|refund/i.test(text)) {
  intent = 'complaint';
}

// Add shipping questions
if (/shipping|delivery|courier|when.*arrive/i.test(text)) {
  intent = 'shipping_inquiry';
}
```

Then add corresponding response nodes in the routing switch.

### Integrate with CRM
**Connect to HubSpot:**
- Add HubSpot node after intent classification
- Log every conversation as a ticket
- Create contacts automatically
- Track customer journey

**Connect to Salesforce:**
- Use Salesforce node to create leads
- Update opportunity stages based on intent
- Log interactions in Activity History

**Connect to Airtable:**
- Store conversations in Airtable database
- Analyze common questions
- Build knowledge base from real conversations

### Add Multi-Language Support
**Method 1: Google Translate API**
- Detect message language
- Translate to English for processing
- Translate response back to user's language

**Method 2: Multilingual AI**
- Add language preference to AI prompt
- Train AI on multilingual responses
- Support major languages natively

### Rich Media Responses
**Send images:**
```javascript
return [{
  chatId: chatId,
  image: 'https://yoursite.com/product.jpg',
  caption: 'Check out this product!'
}];
```

**Send documents:**
- Product catalogs (PDF)
- Warranty cards
- Invoice copies
- Installation guides

**Send location pins:**
- Store locations
- Delivery tracking
- Service centers

### Human Handoff Logic
Add escalation for complex issues:
```javascript
// Check if AI can't help
if (complexityScore &gt; 8 || sentiment === 'angry') {
  // Notify human agent
  // Transfer conversation
  // Set status: 'awaiting_agent'
}
```

Integrate with:
- Intercom for live chat handoff
- Slack for agent notifications
- Zendesk for ticket creation

### Connect to Inventory
**Real-time stock checking:**
- Query your database for availability
- Show "In Stock" / "Out of Stock" status
- Suggest alternatives for unavailable products
- Notify customers when items are restocked

**Dynamic pricing:**
- Pull current prices from database
- Apply promotional discounts automatically
- Show time-sensitive offers

### Add Analytics
**Track metrics:**
- Messages per day/week/month
- Most common intents
- AI usage vs. pre-built responses
- Average response time
- Customer satisfaction scores

**Integration options:**
- Google Analytics for website tracking
- Mixpanel for event tracking
- Custom dashboard in Grafana
- Google Sheets for simple logging

### Business Hours Management
Add business hours logic:
```javascript
const now = new Date();
const hour = now.getHours();
const isBusinessHours = (hour &gt;= 10 && hour &lt; 20); // 10 AM - 8 PM

if (!isBusinessHours) {
  return [{
    response: "We're currently closed. Our hours are 10 AM - 8 PM. We'll respond when we open!"
  }];
}
```

### A/B Testing Responses
Test different response styles:
- Formal vs. casual tone
- With/without emojis
- Short vs. detailed answers
- Different CTAs

Track which versions lead to more sales/conversions.

## Tips for best results

**1. Start Simple**
- Begin with 3-5 main intents
- Add more as you see common patterns
- Don't over-complicate the initial setup

**2. Monitor and Iterate**
- Review conversations weekly
- Identify missed intents
- Refine pattern matching
- Update product information regularly

**3. Balance Pre-Built vs. AI**
- Use pre-built for: FAQs, product lists, contact info (fast, cheap)
- Use AI for: Comparisons, complex queries, personalization (slower, costs money)
- Aim for 70-80% pre-built, 20-30% AI

**4. Optimize Response Times**
- Pre-built responses are instant
- AI responses take 2-5 seconds
- Set user expectations ("Let me check that for you...")

**5. Test Different Scenarios**
- Happy path (normal inquiries)
- Edge cases (misspellings, slang)
- Multi-turn conversations
- Multiple topics in one message

**6. Keep Responses Concise**
- WhatsApp users prefer short messages
- Use formatting (bold, bullets) for readability
- Break long responses into multiple messages

**7. Maintain Brand Voice**
- Customize AI system prompt with your brand personality
- Use consistent tone across all responses
- Include brand-appropriate emojis

**8. Handle Failures Gracefully**
- Add error handling for API failures
- Have fallback responses ready
- Always offer human contact option

**9. Respect Privacy**
- Don't store sensitive information
- Comply with GDPR/local privacy laws
- Allow users to delete their data

**10. Monitor Costs**
- Track Gemini API usage
- Set spending alerts
- Optimize prompt length to reduce token usage

## Common use cases across industries

**Fashion & Apparel Store**
- Answer size and fit questions
- Share new collection arrivals
- Check stock availability by size/color
- Process exchange requests
- Share styling tips

**Electronics & Tech Store**
- Provide product specifications
- Compare different models
- Check warranty information
- Share installation guides
- Handle technical support queries

**Grocery & Food Store**
- Check product availability
- Share daily fresh stock updates
- Take bulk orders
- Provide recipe suggestions
- Handle delivery slot bookings

**Beauty & Cosmetics**
- Recommend products for skin types
- Share ingredient information
- Explain usage instructions
- Handle shade/color queries
- Process return for wrong products

**Home Furniture Store**
- Share dimensions and specifications
- Check delivery timelines
- Provide assembly instructions
- Schedule store visits
- Custom furniture inquiries

**Restaurant & Cafe**
- Share menu and prices
- Take table reservations
- Handle takeaway orders
- Answer dietary restriction questions
- Share daily specials

**Jewelry Store**
- Share designs and prices
- Book appointments for trials
- Check customization options
- Verify metal purity/certifications
- Handle repair inquiries

**Bookstore**
- Check book availability
- Take pre-orders for new releases
- Recommend books by genre
- Share reading lists
- Handle exchange requests

---

**Important Notes:**
- This workflow requires WhatsApp Business API (not regular WhatsApp Business app)
- WhatsApp Business API typically requires business verification
- Message rates and limits vary by provider
- Test thoroughly before deploying to customers
- Always provide a way to reach human support

**Getting Started Tip**: Start with just contact info and product inquiries. Once that works smoothly, add AI responses for complex queries. Gradually expand based on actual customer needs you observe in conversations.

## 🔗 Nodes Used

WhatsApp Business Cloud, AI Agent, Simple Memory, WhatsApp Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
