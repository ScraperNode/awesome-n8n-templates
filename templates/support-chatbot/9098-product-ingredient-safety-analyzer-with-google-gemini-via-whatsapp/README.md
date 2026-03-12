# 💬 Product ingredient safety analyzer with Google Gemini via WhatsApp

> ⚡ **201 views** · 💬 [Support Chatbots](../)

## Description

# Product Ingredient Safety Analyzer with AI via WhatsApp

## What does this workflow do?

This workflow creates an intelligent WhatsApp bot that analyzes product ingredients and provides instant safety assessments. Users can send either text queries (product names/brands) or images of product labels, and receive AI-powered analysis covering food, cosmetics, personal care, pharmaceuticals, and household products.

## Who's it for?

- **Health-conscious consumers** wanting to make informed purchasing decisions
- **Parents** checking product safety for their children
- **People with allergies or sensitivities** screening for harmful ingredients
- **Beauty and skincare enthusiasts** verifying cosmetic product safety
- **Wellness coaches or nutritionists** helping clients evaluate products
- **Small business owners** offering product safety consultation services
- **Eco-conscious consumers** checking for environmental toxins
- **Anyone** looking to understand what's in their everyday products

## What do you need to get started?

### Required Accounts & APIs:
- **WhatsApp Business API** - For receiving and sending messages
- **Google Cloud Account** - For Document AI (OCR) service
- **Google Gemini API** - For AI-powered ingredient analysis

### Setup Steps:
1. Configure WhatsApp Business API credentials
2. Enable Google Document AI in your Google Cloud project
3. Create a Document AI processor for OCR
4. Set up Google Gemini API access
5. Configure all credentials in N8N

## How does this workflow work?

### User Input Options:
- **Text Messages**: Send product name/brand (e.g., "Dove soap", "Coca Cola")
- **Images**: Upload photos of product ingredient labels
- **Conversational**: Ask questions or request help

### Processing Flow:

**For Image Messages:**
1. WhatsApp receives image message
2. Extracts and downloads the image
3. Converts image to Base64 format
4. Uses Google Document AI OCR to extract text
5. AI analyzes extracted text + user caption
6. Returns safety assessment via WhatsApp

**For Text Messages:**
1. WhatsApp receives text query
2. AI directly analyzes product name/ingredients
3. Returns safety assessment via WhatsApp

### AI Analysis Includes:
- Product type identification (food, cosmetic, pharmaceutical, etc.)
- Harmful ingredient detection (parabens, sulfates, trans fats, etc.)
- Beneficial ingredient highlights
- Clear safety verdict: ✅ SAFE / ⚠️ CAUTION / ❌ AVOID
- Practical recommendations and alternatives

### Response Format:
The AI provides concise, WhatsApp-friendly messages with:
- Product category and type
- Key ingredients found
- Safety concerns with specific flags
- Clear recommendation
- Actionable advice

## Use Cases

- **Health-conscious consumers** checking food product ingredients
- **Beauty enthusiasts** verifying cosmetic safety
- **Parents** ensuring child product safety
- **People with allergies** screening for harmful ingredients
- **Eco-conscious users** checking for environmental toxins
- **General wellness** making informed purchase decisions

## Key Features

- **Dual input support**: Text and image processing
- **OCR technology**: Extracts text from product labels
- **Multi-category analysis**: Food, cosmetics, pharmaceuticals, household items
- **Conversational AI**: Handles greetings, help requests, unclear queries
- **Mobile-optimized**: WhatsApp-friendly formatting
- **Instant results**: Real-time safety assessments
- **Educational**: Explains why ingredients are safe or harmful

## Technical Highlights

- **Smart routing**: Automatically detects message type (text vs image)
- **Structured output**: JSON-formatted AI responses for reliability
- **Product-specific criteria**: Different analysis standards per category
- **Error handling**: Requests clearer images if OCR fails
- **Conversational fallback**: Guides users when information is insufficient

## Example Interactions

**User sends image of shampoo bottle:**
*Response:* "Hair Care Product Analysis - Contains sulfates and parabens. ⚠️ USE WITH CAUTION. Consider sulfate-free alternatives for healthier hair."

**User texts "Maggi noodles":**
*Response:* "Food Product Analysis - High sodium content, contains MSG and artificial colors. ❌ AVOID REGULAR CONSUMPTION. Occasional treat okay."

**User texts "Hi":**
*Response:* "Hi! I'm your Product Safety Analyzer. Send me a product name or photo of ingredients to check safety!"

## Benefits

- **Empowers informed decisions**: Know what you're consuming/using
- **Saves research time**: Instant analysis vs manual ingredient lookup
- **Accessible**: Works via familiar WhatsApp interface
- **Comprehensive**: Covers multiple product categories
- **Educational**: Learn about ingredient safety over time
- **Convenient**: Analyze products while shopping

## Notes

- OCR works best with clear, well-lit images
- AI provides general safety information, not medical advice
- Analysis based on commonly known ingredient safety standards
- Users should consult professionals for specific health concerns
- Supports conversational queries for better user experience

---

## 🔗 Nodes Used

HTTP Request, WhatsApp Business Cloud, AI Agent, Structured Output Parser, Extract from File, WhatsApp Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
