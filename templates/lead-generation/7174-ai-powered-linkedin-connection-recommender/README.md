# 🎣 AI-powered LinkedIn connection recommender

> ⚡ **767 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.

## Description

The workflow is triggered manually with user input, searches LinkedIn profiles, processes the results using AI, generates connection recommendations, and delivers them via email. It leverages AI to enhance networking opportunities based on insights from profiles.

## Good to Know

- Each email is personalized with the user’s name and recommended connections.
- Recommendations are based on LinkedIn search results and AI analysis.
- The system ensures data privacy by processing inputs securely.
- Email notifications include a curated list of potential connections.

## How it Works

### Profile Analysis Workflow
- **Get User Data from Email**: Manually inputs user email and profile information to initiate the workflow.
- **Your Profile Information**: Provides initial user data for LinkedIn search.
- **Search LinkedIn Profiles**: Queries LinkedIn via an API (e.g., SerpAPI) to gather profile data.
- **Process LinkedIn Search Results**: Extracts relevant details from search results.

### AI Recommendation Workflow
- **AI Profile Analysis**: Uses an AI model (e.g., Ollama Model) to analyze profile data and suggest connections.
- **Create Recommendations**: Generates a curated list of potential connections.
- **Create Final Recommendations**: Refines and formats the recommendation list.
- **Create Email**: Prepares a personalized email with the connection list.
- **Send Email**: Delivers the email to the user.

## Excel Sheet Structure

- **No persistent Excel sheet is required**; data is processed in-memory and emailed directly. However, optional logging can be set up:
  - **Optional Log Sheet (Recommendations)**:
    - **Timestamp**: Date and time of recommendation generation.
    - **User Email**: User’s email address.
    - **Profile Name**: User’s LinkedIn profile name.
    - **Industry**: User’s industry.
    - **Recommended Connections**: List of suggested connections.
    - **Sent Status**: Whether the email was sent successfully.

## How to Use
1. **Import the Workflow into your n8n instance** and configure email integration.
2. **Provide User Data**: Manually enter the user’s email and profile information in the "Get User Data from Email" node.
3. **Configure API Credentials**: Set up SerpAPI for LinkedIn searches and email service (e.g., SMTP).
4. **Run the Workflow**: Execute manually to test the process.
5. **Monitor Emails**: Check the user’s inbox for the curated connection list.
6. **Optional Logging**: Set up a Google Sheet to log recommendations if desired.

## Requirements
- **SerpAPI**: For LinkedIn profile searches.
- **Email Service Integration**: Gmail, SMTP, or similar for email delivery.
- **Ollama Model**: For AI-based profile analysis.
- **n8n Instance**: With SerpAPI, email, and function nodes.

## Customizing this Workflow
- **Expand Data Sources**: Integrate additional platforms (e.g., Xing) for broader searches.
- **Enhance AI**: Train the Ollama Model for more specific connection criteria (e.g., job role, location).
- **Add Notifications**: Include Slack or SMS alerts for admin tracking.
- **Customize Email**: Adjust the email template for branding or additional details.
- **Automate Trigger**: Replace manual input with a scheduled trigger or webhook.

## 🔗 Nodes Used

Email Trigger (IMAP), Send Email, HTTP Request, Basic LLM Chain, Ollama Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
