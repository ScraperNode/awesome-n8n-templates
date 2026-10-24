# 📊 Generate personalized trip recommendations with Claude AI and Google Sheets

> ⚡ **121 views** · 📊 [Market Research & Insights](../)

## Description

This workflow provides personalized travel destination recommendations by analyzing past trip history, user preferences, travel behavior patterns, and current trends. It uses Claude AI to generate intelligent, context-aware suggestions tailored to each traveler.

### How it works

1. **Receive Trip Request** - Webhook captures user query with preferences and constraints
2. **Validate Input** - Checks required fields, normalizes data, calculates user profile metrics
3. **Fetch Travel History** - Retrieves past trips, ratings, and behavioral data from Google Sheets
4. **Analyze Patterns** - Identifies travel patterns, preferred destinations, seasonal preferences
5. **Claude AI Recommendation** - Generates personalized destination suggestions with reasoning
6. **Enrich with Live Data** - Adds current weather, events, flight prices (optional)
7. **Store Recommendation** - Saves suggestion to database with full context
8. **Send Personalized Response** - Delivers recommendations via email or API response
9. **Daily Batch Updates** - Scheduled job to refresh recommendations for all active users
10. **Trend Analysis** - Weekly reports on popular destinations and emerging trends

### Setup Steps

1. Import workflow into n8n
2. Configure credentials:
   - **Anthropic API** - Claude AI for recommendation engine
   - **Google Sheets** - Trip history and user profiles
   - **SMTP / Gmail** - Email notifications
   - **Weather API** (optional) - Real-time weather data
   - **Flight API** (optional) - Price comparisons
3. Create Google Sheets with tabs:
   - `user_profiles` - User data and preferences
   - `trip_history` - Past trip records
   - `recommendations` - Generated suggestions
   - `analytics` - Trend analysis logs
4. Set your API keys and sheet IDs in the configuration nodes
5. Activate both webhook and scheduled workflows

### Sample Trip Request Payload
```json
{
  "userId": "USER-2025-1234",
  "userName": "Sarah Johnson",
  "userEmail": "sarah.j@example.com",
  "preferences": {
    "budget": "moderate",
    "travelStyle": "adventure",
    "interests": ["hiking", "local cuisine", "cultural sites"],
    "climate": "warm",
    "duration": "7-10 days",
    "travelMonth": "June"
  },
  "constraints": {
    "maxBudget": 3000,
    "departureCity": "San Francisco",
    "companions": "solo",
    "accessibility": "none"
  },
  "excludeRegions": ["visited_recently"],
  "prioritize": "unique_experiences"
}
```

### Features
- **AI-Powered Personalization** - Claude analyzes patterns and generates unique suggestions
- **Behavioral Learning** - Improves over time based on trip ratings and feedback
- **Real-Time Data Integration** - Weather, events, and pricing for recommended destinations
- **Budget Optimization** - Suggests best value destinations within user budget
- **Seasonal Intelligence** - Recommends optimal travel timing
- **Trend Detection** - Identifies emerging destinations before they get crowded
- **Multi-Factor Scoring** - Balances preferences, budget, timing, and uniqueness

## 🔗 Nodes Used

Send Email, Google Sheets, HTTP Request, Webhook, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
