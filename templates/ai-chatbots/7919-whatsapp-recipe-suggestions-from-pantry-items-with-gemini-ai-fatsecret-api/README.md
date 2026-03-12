# 🤖 WhatsApp recipe suggestions from pantry items with Gemini AI & FatSecret API

> ⚡ **378 views** · 🤖 [AI Chatbots & Agents](../)

## Description

## AI Recipe Generator from Pantry Items using FatSecret API

**This workflow creates an intelligent WhatsApp cooking assistant that transforms pantry ingredients into personalized recipe suggestions using AI and the FatSecret Recipes API**

### **What Makes This Different:**
- **AI-Powered Recipe Discovery** - Uses Google Gemini AI to understand user intent and dietary preferences
- **Smart Ingredient Analysis** - Automatically extracts ingredients, dietary restrictions, and cooking constraints
- **FatSecret API Integration** - Leverages comprehensive recipe database with nutritional information
- **WhatsApp Native Experience** - Seamless chat interface for recipe discovery
- **Contextual Memory** - Remembers conversation context for better user experience
- **Intelligent Parameter Mapping** - AI automatically maps user requests to API parameters

### **Key Benefits of AI-Driven Architecture:**
- **Natural Language Understanding** - Users can describe what they have in plain English
- **Personalized Recommendations** - Considers dietary restrictions, time constraints, and preferences
- **Eliminates Manual Search** - No need to manually input specific ingredients or filters
- **Scalable Recipe Database** - Access to thousands of recipes through FatSecret API
- **Conversational Interface** - Natural chat flow instead of form-based inputs
- **Smart Context Management** - Remembers previous requests for better follow-up suggestions

---

## Who's it for

This template is designed for **food delivery services, meal planning apps, nutritionists, cooking enthusiasts, and businesses** looking to provide intelligent recipe recommendations. It's perfect for companies who want to engage customers through WhatsApp with personalized cooking assistance, helping users discover new recipes based on available ingredients and preferences.

## How it works / What it does

This workflow creates an **intelligent WhatsApp cooking assistant** that transforms simple ingredient lists into personalized recipe suggestions. The system:

1. **Receives WhatsApp messages** through webhook triggers
2. **Analyzes user input** using Google Gemini AI to extract ingredients, dietary needs, and preferences
3. **Maps user requests** to FatSecret API parameters automatically
4. **Searches recipe database** based on extracted criteria (ingredients, calories, time, cuisine, etc.)
5. **Processes API results** to format recipe suggestions with images and nutritional info
6. **Maintains conversation context** using memory buffer for better user experience
7. **Sends formatted responses** back to users via WhatsApp

**Key Innovation: AI-Powered Parameter Extraction** - Unlike traditional recipe apps that require users to fill out forms or select from predefined options, this system understands natural language requests and automatically maps them to the appropriate API parameters, making recipe discovery as simple as texting a friend.

## How to set up

### 1. Configure WhatsApp Business API
- Set up WhatsApp Business API credentials
- Configure webhook endpoints for message reception
- Set up phone number ID and recipient handling
- Ensure proper message sending permissions

### 2. Configure Google Gemini AI
- Set up Google Gemini (PaLM) API credentials
- Ensure proper API access and quota limits
- Configure the AI model for recipe-related conversations
- Test the AI's understanding of cooking terminology

### 3. Configure FatSecret API
- Set up FatSecret OAuth2 API credentials
- Ensure access to the Recipes Search v3 endpoint
- Configure proper authentication and rate limiting
- Test API connectivity and response handling

### 4. Set up Memory Management
- Configure the memory buffer for conversation context
- Set appropriate session key mapping for user identification
- Adjust context window length based on expected conversation depth
- Test memory persistence across multiple messages

### 5. Test the Integration
- Send test messages through WhatsApp to verify end-to-end functionality
- Test various ingredient combinations and dietary restrictions
- Verify recipe suggestions are relevant and properly formatted
- Check that context memory works across multiple interactions

## Requirements

- **WhatsApp Business API** account with webhook capabilities
- **Google Gemini AI** API access for natural language processing
- **FatSecret API** credentials for recipe database access
- **n8n instance** with proper webhook and HTTP request capabilities
- **Active internet connection** for real-time API interactions

## How to customize the workflow

### Modify Recipe Search Parameters
- Adjust the number of results returned (currently set to 5)
- Add more filtering options (cuisine types, cooking methods, difficulty levels)
- Implement pagination for browsing through more recipe options
- Add sorting preferences (newest, oldest, calorie-based, popularity)

### Enhance AI Capabilities
- Train the AI on specific dietary restrictions or cuisine preferences
- Add support for multiple languages
- Implement recipe rating and review integration
- Add nutritional goal tracking and meal planning features

### Expand Recipe Sources
- Integrate with additional recipe APIs (Spoonacular, Edamam, etc.)
- Add support for user-generated recipes
- Implement recipe bookmarking and favorites
- Add shopping list generation from selected recipes

### Improve User Experience
- Add recipe step-by-step instructions
- Implement cooking timer and progress tracking
- Add recipe sharing capabilities
- Implement user preference learning over time

### Business Features
- Add recipe monetization options
- Implement affiliate marketing for ingredients
- Add restaurant delivery integration
- Implement meal kit subscription services

## Key Features

- **Natural language processing** - Understands cooking requests in plain English
- **Intelligent parameter mapping** - AI automatically extracts search criteria
- **Comprehensive recipe database** - Access to thousands of recipes via FatSecret API
- **WhatsApp native interface** - Seamless chat experience for recipe discovery
- **Contextual memory** - Remembers conversation history for better recommendations
- **Dietary restriction support** - Handles allergies, preferences, and special diets
- **Nutritional information** - Provides calorie counts and macro details
- **Image integration** - Shows recipe photos when available

## Technical Architecture Highlights

### AI-Powered Processing
- **Google Gemini integration** - Advanced natural language understanding
- **Smart parameter extraction** - Automatic mapping of user requests to API calls
- **Contextual memory** - Conversation history management for better user experience
- **Intelligent fallbacks** - Graceful handling of unclear or incomplete requests

### API Integration Excellence
- **FatSecret Recipes API** - Comprehensive recipe database with nutritional data
- **OAuth2 authentication** - Secure and reliable API access
- **Parameter optimization** - Efficient API calls with relevant search criteria
- **Response processing** - Clean formatting of recipe suggestions

### WhatsApp Integration
- **Webhook-based triggers** - Real-time message reception
- **Message formatting** - Clean, readable recipe presentations
- **User identification** - Proper session management for multiple users
- **Error handling** - Graceful fallbacks for failed operations

### Performance Optimizations
- **Efficient API calls** - Single request per user message
- **Memory management** - Optimized conversation context storage
- **Response caching** - Reduced API calls for repeated requests
- **Scalable architecture** - Handles multiple concurrent users

## Use Cases

- **Food delivery platforms** requiring recipe recommendation engines
- **Meal planning services** needing ingredient-based recipe discovery
- **Nutrition and wellness apps** requiring dietary-specific suggestions
- **Cooking schools** offering personalized recipe guidance
- **Grocery stores** helping customers plan meals around available ingredients
- **Restaurant chains** providing recipe inspiration for home cooking
- **Health coaches** offering personalized meal suggestions
- **Social cooking communities** sharing recipe ideas and inspiration

## Business Value

- **Customer Engagement** - Interactive recipe discovery increases user retention
- **Personalization** - AI-driven recommendations improve user satisfaction
- **Operational Efficiency** - Automated recipe suggestions reduce manual support
- **Revenue Generation** - Recipe recommendations can drive ingredient sales
- **Brand Differentiation** - AI-powered cooking assistant sets services apart
- **Data Insights** - User preferences provide valuable market intelligence
- **Scalability** - Handles multiple users simultaneously without performance degradation

This template revolutionizes recipe discovery by combining the power of AI natural language processing with comprehensive recipe databases, creating an intuitive WhatsApp experience that makes cooking inspiration as simple as having a conversation with a knowledgeable chef friend.

## 🔗 Nodes Used

WhatsApp Business Cloud, AI Agent, Simple Memory, WhatsApp Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
