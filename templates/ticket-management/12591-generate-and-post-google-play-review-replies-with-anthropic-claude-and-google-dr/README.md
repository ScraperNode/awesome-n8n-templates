# 🎫 Generate and post Google Play review replies with Anthropic Claude and Google Drive

> ⚡ **75 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Generate responses for Google Play Store reviews using Anthropic Claude, Google Drive and Google Play Store API 
This workflow empowers app developers and community management teams by automating the generation and posting of responses to user reviews on the Google Play Store. Designed to streamline the engagement process, it drastically reduces the manual workload on community managers by integrating AI-driven responses with necessary human oversight. By leveraging n8n's workflow automation capabilities, this solution eliminates the need for costly third-party platforms like AppFollow or Appbot, making it a cost-effective and efficient alternative.

**Pre-requisites**
* Google Drive & Google Sheets access: To store and manage review spreadsheets.
* Google Play Developer Account / Service account: To fetch and respond to app reviews.
* LLM credentials (e.g., Anthropic): Required for generating responses.

### Workflow steps
**1. Initialise and trigger workflow:** The process begins daily at 10 AM through a scheduled trigger.

**2. Fetch application data:** Utilizes a data table (Google Play apps) to retrieve a list of applications with their bundle_id and name, essential for identifying review sources.

**3. Collect Google Play Reviews:** Retrieves previous day's reviews from the Google Play Store based on app data. Stores the reviews in Google Sheets for further processing.

**4. Generate AI Responses:** AI model generates initial responses based on review content. Responses are structured and stored along with reviews within a Google Spreadsheet located in a Google Drive folder called *ToReview*. 

**5. Human Review & Modification:** Community managers review and refine AI-generated responses. Reviewed spreadsheets are moved to the *ToSubmit* Google Drive folder by the editor.

**6. Post Verified Responses:** Workflow triggers again at 5 PM to access reviewed spreadsheets in *ToSubmit* folder. It posts the human-verified responses back to the respective reviews on the Google Play Store. Logs are maintained, recording each response's success or failure.

**7. Archive processed spreadsheets:** After posting the responses, workflow moves the processed files from *ToSubmit*  to a different folder called *Archived*

## 🔗 Nodes Used

HTTP Request, Google Drive, Schedule Trigger, Filter, Basic LLM Chain, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
