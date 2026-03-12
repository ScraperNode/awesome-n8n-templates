# 🎫 Generate and post Apple App Store review replies with Anthropic Claude

> ⚡ **48 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Generate and post Apple App Store review replies with Anthropic Claude, Google Drive and App Store Connect API 
This workflow empowers app developers and community management teams by automating the generation and posting of responses to user reviews on the Apple App Store. Designed to streamline the engagement process, it drastically reduces the manual workload on community managers by integrating AI-driven responses with necessary human oversight. By leveraging n8n's workflow automation capabilities, this solution eliminates the need for costly third-party platforms like AppFollow or Appbot, making it a cost-effective and efficient alternative.

**Pre-requisites**
* Google Drive & Google Sheets access: To store and manage review spreadsheets.
* App Store Connect API credentials: To fetch and respond to app reviews.
* LLM credentials (e.g., Anthropic): Required for generating responses.
* Slack account

### Workflow steps
**1. Initialise and trigger workflow:** The process begins daily at 10 AM through a scheduled trigger.

**2. Fetch application data:** Utilizes a data table (Apple App Store apps) to retrieve a list of applications with their app id and name, essential for identifying review sources.

**3. Collect App Store Reviews:** Retrieves previous day's reviews from the App Store Connect API based on app data. Stores the reviews in Google Sheets for further processing.

**4. Generate AI Responses:** AI model generates initial responses based on review content. Responses are structured and stored along with reviews within a Google Spreadsheet located in a Google Drive folder called *ToReview*. A Slack message is sent with the URL of the file

**5. Human Review & Modification:** Community managers review and refine AI-generated responses. Reviewed spreadsheets are moved to the *ToSubmit* Google Drive folder by the editor.

**6. Post Verified Responses:** Workflow triggers again at 5 PM to access reviewed spreadsheets in *ToSubmit* folder. It posts the human-verified responses back to the respective reviews on Apple App Store using App Store Connect API. Logs are maintained, recording each response's success or failure.

**7. Archive processed spreadsheets:** After posting the responses, workflow moves the processed files from *ToSubmit*  to a different folder called *Archived*

## 🔗 Nodes Used

HTTP Request, Slack, Google Drive, Schedule Trigger, Filter, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
