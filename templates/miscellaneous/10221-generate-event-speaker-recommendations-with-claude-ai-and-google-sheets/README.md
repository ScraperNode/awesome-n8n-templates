# 🔧 Generate event speaker recommendations with Claude AI and Google Sheets

> ⚡ **132 views** · 🔧 [Miscellaneous](../)

## Description

Simplify event planning with this automated n8n workflow. Triggered by incoming requests, it fetches speaker and audience data from Google Sheets, analyzes profiles and preferences, and generates optimized session recommendations. The workflow delivers formatted voice responses and updates tracking data, ensuring organizers receive real-time, tailored suggestions. 🎙️📊

### Key Features  
- Real-time analysis of speaker and audience data for personalized recommendations.  
- Generates optimized session lineups based on profiles and preferences.  
- Delivers responses via voice agent for a seamless experience.  
- Logs maintain a detailed recommendation history in Google Sheets.  

### Workflow Process  
- The **Webhook Trigger** node initiates the workflow upon receiving voice agent or external system requests.  
- **Parse Voice Request** processes incoming voice data into actionable parameters.  
- **Fetch Database** retrieves speaker ratings, past sessions, and audience ratings from Google Sheets.  
- **Calculate & Analyze** combines voice request data with speaker profiles and audience insights for comprehensive matching.  
- **AI Optimization Engine** analyzes speaker-audience fit and recommends optimal session lineups.  
- **Format Recommendations** structures the recommendations for voice agent response.  
- **Voice Agent Response** returns formatted recommendations to the user with natural language summary and structured data.  
- **Update Tracking Sheet** saves recommendation history and analytics to Google Sheets.  
- If errors occur, the **Check for Errors** node branches to:  
  - **Format Error Response** prepares an error message.  
  - **Send Error Response** delivers the error notification.  

### Setup Instructions  
- Import the workflow into n8n and configure Google Sheets OAuth2 for data access.  
- Set up the Webhook Trigger with your voice agent or external system's API credentials.  
- Configure the AI Optimization Engine node with a suitable language model (e.g., Anthropic Chat Model).  
- Test the workflow by sending sample voice requests and verifying recommendations.  
- Adjust analysis parameters as needed for specific event requirements.  

### Prerequisites  
- Google Sheets OAuth2 credentials  
- Voice agent API or integration service  
- AI/LLM service for optimization (e.g., Anthropic)  
- Structured speaker and audience data in a Google Sheet  

**Google Sheet Structure:**  
1. Create a sheet with columns:  
   - Speaker Name  
   - Rating  
   - Past Sessions  
   - Audience Rating  
   - Preferences  
   - Updated At  

### Modification Options  
- Customize the **Calculate & Analyze** node to include additional matching criteria (e.g., topic expertise).  
- Adjust the **AI Optimization Engine** to prioritize specific session formats or durations.  
- Modify voice response templates in the **Voice Agent Response** node with branded phrasing.  
- Integrate with event management tools (e.g., Eventbrite) for live data feeds.  
- Set custom error handling rules in the **Check for Errors** node.  

**Discover more workflows – [Get in touch with us](https://www.oneclickitsolution.com/contact-us/)**

## 🔗 Nodes Used

Google Sheets, Webhook, AI Agent, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
