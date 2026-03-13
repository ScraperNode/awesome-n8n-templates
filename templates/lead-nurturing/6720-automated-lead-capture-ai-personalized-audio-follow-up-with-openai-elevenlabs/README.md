# 💬 Automated lead capture & AI-personalized audio follow-up with OpenAI & ElevenLabs

> ⚡ **133 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.

## Description

---

## How It Works: The Four-Part Automated Lead Flow

This system meticulously guides each lead through a fully automated journey, from initial contact to a personalized follow-up and CRM integration.

### 1. Automated Lead Capture & Cleaning

This is the system's entry point, designed to automatically bring new leads into your pipeline and prepare their data for processing.

* **Function:** The system actively listens for new lead submissions, typically originating from web forms or other lead generation platforms, via a **Webhook**.
* **Process:** As soon as lead data is received, essential information like the lead's name, email, phone number, and initial message is **extracted and cleaned**. This ensures the data is standardized and ready for the next stages, forming the foundation for all subsequent actions.

### 2. Smart AI Qualification & Personalized Audio Creation

Here's where the intelligence and unique personalization of this system shine. Leads are automatically analyzed, and a custom audio message is prepared for those deemed highly promising.

* **Function:** This stage adds significant value by using AI to intelligently assess incoming leads and prepares a unique, engaging communication.
* **Process:** The lead's message is sent to **OpenAI** for AI-driven analysis. The AI **summarizes the inquiry** and **qualifies the lead's intent** (e.g., "High Potential," "Information Seeking," "Support Request"). If the AI identifies the lead as a **qualified prospect**, the system dynamically crafts a short, personalized text script for that specific lead, incorporating their name and the AI's summary. This script is then passed to **Eleven Labs** to generate a realistic, human-like MP3 audio message. The finished audio file is automatically uploaded to **Google Drive** for secure storage, and a shareable link is generated.

### 3. CRM Integration & Automated Initial Communication

This part ensures your leads are efficiently managed within your Customer Relationship Management (CRM) system and receive an immediate, impactful, and personalized initial follow-up.

* **Function:** This stage focuses on seamless data management and high-impact communication to nurture qualified leads.
* **Process:** The system first queries your **CRM** to check for any duplicate leads (using HTTP Requests for broad compatibility). If it's a new lead, a contact entry is created; if a duplicate, the existing record is updated with new information. Subsequently, a **personalized follow-up email** is sent via **Gmail** to the qualified lead. This email prominently features the link to their unique audio message, making your communication stand out. Simultaneously, your sales team receives an **immediate notification on Slack**, providing key lead details, the AI qualification, and a direct link to the personalized audio message for quick context.

### 4. Comprehensive Logging & Robust Error Handling

The final and crucial part of the system guarantees complete transparency, detailed record-keeping, and continuous operational reliability.

* **Function:** This stage ensures all lead activities are meticulously recorded, and that any potential issues are identified and communicated promptly.
* **Process:** All lead data—regardless of qualification status—is automatically logged into **Google Sheets**, creating a centralized, accessible database for tracking and analysis. Critically, the entire workflow is protected by a **Try/Catch** mechanism. If any step within the process encounters an error, the execution immediately shifts to the "Catch" branch, triggering an **immediate error notification to Slack**. This proactive alerting system allows you to rapidly identify and resolve issues, ensuring your lead pipeline remains uninterrupted and effective.

---

## Setup Steps

To deploy this powerful automated lead system within your n8n instance, follow these steps meticulously:

### 1. Prepare Your Cloud Services & API Credentials

Before building the workflow, ensure all necessary accounts are set up and credentials are ready for n8n.

* **OpenAI:** Obtain your **API Key** from your OpenAI account. This is essential for AI qualification.
* **Eleven Labs:** Secure your **API Key** from your Eleven Labs account. This powers the personalized audio generation.
* **Google Drive:** You'll need a Google account. In n8n, set up a **Google Drive credential**. Crucially, create a dedicated folder in your Google Drive specifically for your personalized audio files and note its **Folder ID** (found in the URL when you open the folder in your browser).
* **Google Sheets:** Set up a **Google Sheets credential** in n8n. Create a new Google Sheet (e.g., "Lead Log") with these exact column headers in the first row: `Timestamp`, `Lead Name`, `Lead Email`, `Lead Phone`, `Lead Message`, `AI Qualification`, `AI Summary`, `Is Qualified`, `Personalized Audio URL`, `CRM Status`, `Follow-up Sent`, `Status (Success/Error)`.
* **Gmail / SMTP:** Configure your **Gmail credential** or a generic **Email credential** in n8n for sending out follow-up emails.
* **Slack:** Set up your **Slack credential** in n8n. Identify the **Channel IDs** for both your sales team's new lead notifications (e.g., `#new-leads`) and a dedicated channel for workflow error alerts (e.g., `#n8n-errors`).
* **CRM (Your Choice):** You'll need access to your CRM's API documentation. Prepare any necessary API keys, access tokens, or OAuth credentials. Be ready to configure `HTTP Request` nodes to interact with your specific CRM.

### 2. Identify Your Lead Capture Source

Determine how new leads will initially enter your n8n workflow.

* The most versatile and recommended method is a **Webhook**. Configure your existing website forms (e.g., WordPress forms, custom HTML forms, landing page builders) to send **HTTP POST requests** containing lead data (name, email, message, etc.) to the unique Webhook URL that n8n will provide.

### 3. Build the n8n Workflow

Now, let's assemble the workflow step-by-step in your n8n instance.

* **Start a New Workflow:** In n8n, create a **new, blank workflow**.
* **Add & Connect Nodes:** Systematically add and connect the nodes as described in the "How It Works" section above, following the provided flow diagram.
* **Configure Each Node's Parameters Meticulously:**
    * **Webhook:** Activate it and copy the unique URL. This is the endpoint for your lead forms.
    * **Set (Extract & Clean Lead Data):** Map incoming webhook fields (e.g., `$json.body.name`) to intuitive n8n variables like `leadName`. Provide fallback values like 'N/A' if a field might be empty.
    * **OpenAI (AI Qualification & Summary):** Select your credential. Choose a suitable model (e.g., `gpt-4o` for accuracy). Crucially, craft your system and user prompts to instruct the AI to output qualification and summary data in a **strict JSON format** (e.g., `{"summary": "...", "qualification": "...", "is_qualified": true/false}`).
    * **Set (Parse AI Qualification):** Use `JSON.parse($json.choices[0].message.content)` to extract values from the OpenAI's JSON response into separate n8n variables like `aiSummary`, `aiIsQualified`.
    * **If (Is Lead Qualified?):** Set the condition to check if `aiIsQualified` is `true`.
    * **Code (Craft Personalized Audio Text):** Write a small JavaScript snippet that combines variables like `leadName` and `aiSummary` into a natural-sounding sentence for the audio.
    * **ElevenLabs (Generate Personalized Audio):** Select your credential, input your chosen `Voice ID` (you'll find this in your Eleven Labs dashboard), and point the `Text` field to your crafted personalized audio text.
    * **Google Drive (Upload Personalized Audio):** Select your credential, input the specific `Folder ID` for your audio files, and ensure `Allow Anyone to Read` is set to `True` to make the link public.
    * **Set (Store Personalized Audio Link):** Create a new variable, e.g., `personalizedAudioUrl`, and assign it the `webViewLink` from the Google Drive node's output.
    * **HTTP Request (CRM Interaction - Check/Create/Update):** This is highly dependent on your specific CRM.
        * For checking duplicates (GET request): Configure URL (e.g., `/contacts?email=...`) and authentication based on your CRM's API.
        * For creating (POST request): Configure URL (e.g., `/contacts`) and the JSON body with lead fields matching your CRM's requirements.
        * For updating (PUT/PATCH request): Configure URL (e.g., `/contacts/{id}`) and the JSON body with fields to update.
    * **If (Is Lead a Duplicate?):** Configure the condition to check the response from your CRM's duplicate check (e.g., if the count of results is `&gt; 0`).
    * **Merge (CRM Result):** Use `Merge By Position` to combine the paths after creating or updating CRM records.
    * **Gmail (Send Personalized Follow-up):** Select your credential. Set the `To` field to `{{ $json.leadEmail }}`. Craft a compelling subject line and email body, explicitly including `{{ $json.personalizedAudioUrl }}` where you want the audio link to appear.
    * **Slack (Notify Sales Team):** Select your credential. Set the `Chat ID` to your sales channel. Compose a clear message summarizing the lead, AI insights, and the `personalizedAudioUrl`.
    * **Google Sheets (Log Lead Data):** Select your credential. Input your Spreadsheet ID and Sheet Name. Map all relevant lead data variables (e.g., `leadName`, `aiQualification`, `personalizedAudioUrl`) to their corresponding column headers in your Google Sheet.
    * **Set (Mark Lead as Unqualified - for 'If' False branch):** In this branch, ensure variables like `aiIsQualified` are explicitly set to `false`, and `personalizedAudioUrl` is set to `N/A`, before going to the Google Sheets logger.
    * **Try/Catch & Error Slack:** Wrap your entire main workflow with a `Try/Catch` node (connect `Try` to your Webhook). Connect the `Catch` branch to a `Slack` node for error notifications. Configure this Slack message to provide immediate, actionable error details (e.g., `{{ $json.error.message }}`).

### 4. Test and Activate

Thorough testing is crucial to ensure your automation runs flawlessly.

* **Simulate a Lead:** Before activating the workflow, manually send a test lead to your n8n Webhook URL. You can use your actual website form, or tools like Postman, Insomnia, or even a simple `curl` command.
* **Monitor Execution:** In n8n's workflow editor, observe the execution details for each node during the test run. Check the input and output data of every node to ensure information is flowing and being processed as expected.
* **Verify External Outputs:** After a successful test run, meticulously check all external services:
    * Confirm the audio file is in your Google Drive folder and the generated public link works.
    * Verify the lead (or its update) appears correctly in your CRM with all relevant data.
    * Check your test lead's email inbox for the personalized follow-up email, ensuring the audio link is clickable and functional.
    * Confirm your sales team's Slack channel received the correct notification.
    * Validate that the Google Sheet log is accurate and complete, reflecting both qualified and unqualified leads.
* **Activate:** Once all tests pass and you are completely confident in the workflow's operation, activate it in n8n. It will then automatically process every new lead!

---

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook, Google Drive, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
