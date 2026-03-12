# 👥 AI-powered recruitment system for resume screening & automated outreach with GPT-4

> ⚡ **388 views** · 👥 [HR & Recruitment](../)

## Description

### How It Works ⚙️

Imagine your recruitment process transformed into a sleek, efficient, AI-powered assembly line for talent. That's exactly what this system creates. It automates the heavy lifting, allowing your human recruiters to focus on strategic decisions and personal connections.

1.  **Candidate Arrival & Smart Parsing (The Intake Officer):**
    * **What happens:** A new candidate applies (via your job board, application form, or email). The system instantly captures their resume and core details. Our intelligent parser then reads the resume, extracting all the crucial information like skills, experience, and education, turning it into structured data.
    * **Data In:** `Resume files` (PDF/DOCX), basic `candidate contact info`.
    * **Output:** `Structured candidate data` (skills, experience, contact), `raw resume text`.

2.  **AI-Powered Screening & Qualification (The Expert Reviewer Team):**
    * **What happens:** This is where the magic of AI takes over.
        * **AI Agent 1 (The Matchmaker):** Compares the candidate's extracted `skills` and `experience` against your specific `job description` and requirements. It provides a precise `match score` (e.g., 1-100) and highlights their strongest alignments and any potential gaps.
        * **AI Agent 2 (The Insight Investigator):** Dives deeper into the `raw resume text` to uncover nuances. It identifies potential `red flags` (like very short tenures) or strong indicators of `cultural fit`.
        * **AI Agent 3 (The Interview Question Generator):** Based on the candidate's profile and any identified gaps or areas of interest, it automatically crafts `3-5 tailored initial screening questions`.
    * **Data In:** `Structured candidate data`, `raw resume text`, `job description details`.
    * **Output:** `Match score`, `strengths/gaps`, `cultural fit notes`, `red flags`, `customized interview questions`.

3.  **Automated Initial Engagement & Scheduling (The Personalized Outreach Specialist):**
    * **What happens:** The system evaluates the AI match score. If the candidate meets your minimum threshold, **AI Agent 4 (The Persuasion Pro)** crafts a highly `personalized email invitation` for a screening call, directly referencing their strong fit and specific strengths. This email is then automatically sent, and a `placeholder event` can even be added to your calendar.
    * **Data In:** `Qualified candidate data`, `AI match score`, `AI-generated email content`.
    * **Output:** `Personalized invitation emails sent`, `calendar event details`.

4.  **Smart Follow-up & CRM Integration (The Nurturer & Notifier):**
    * **What happens:** The system waits for a few days for a response. If no reply is received, **AI Agent 5 (The Gentle Follow-up Generator)** creates a polite, yet persistent, `follow-up email`, ensuring promising candidates don't fall through the cracks. All candidate `status updates` (e.g., "Invited for Screening," "Follow-up Sent," "Interview Scheduled") are seamlessly logged in your central `candidate database`. Finally, your recruiters get instant `Slack notifications` for highly qualified candidates or when someone responds positively, keeping them informed and agile.
    * **Data In:** `Candidate status`, `AI-generated follow-up content`.
    * **Output:** `Follow-up emails sent`, `updated candidate status` in your database, `recruiter notifications`.

### Setup Steps 🛠️ (Detailed & Easy to Follow)

Building this powerful system will give you a significant edge in talent acquisition. Follow these steps meticulously:

1.  **Prepare Your Digital Recruitment Backbone:**
    * **Candidate Database (Google Sheets or Airtable):**
        * Create a dedicated spreadsheet (e.g., "Talent Pipeline") to serve as your central candidate database.
        * Set up comprehensive columns: `ID` (for unique tracking), `Name`, `Email`, `Phone`, `Resume URL` (if applicable), `Raw Resume Text`, `Education`, `Experience`, `Skills`, `Status` (e.g., "New," "AI Screened," "Invited," "Interview Scheduled"), `Match Score`, `Cultural Fit Notes`, `Red Flags`, `Interview Questions`, `Last Contacted`.
    * **Job Descriptions Database (Google Sheets or Airtable):**
        * Create a separate sheet (e.g., "Job Openings") to store your active job descriptions.
        * Include columns like `JobID`, `Title`, `Description` (full text of the job description), `Required Skills` (list key skills), `Experience Level`, `Department`. This will be the reference for AI screening.
    * **(Optional) Recruitment Templates (Google Docs):**
        * While AI generates most content, having a simple Google Doc template can be useful for any internal reports or structured notes you might want the system to generate in the future (though not strictly required for the core flow described).

2.  **Gather Your Essential API Keys & Credentials:**
    * **OpenAI API Key**: This is the brain power for all your AI agents. Get it from your OpenAI account dashboard.
    * **Google Sheets Credential**: Allows n8n to read from and write to your Candidate and Job Descriptions databases. Set up an OAuth2 credential in n8n.
    * **Gmail Credential**: For sending personalized outreach and follow-up emails. Set up an OAuth2 credential.
    * **Google Calendar Credential**: (Optional but recommended) For creating placeholder interview events on your recruiters' calendars. Set up an OAuth2 credential.
    * **Slack Credential**: For sending internal notifications to your recruitment team (e.g., new qualified candidates, anomalies). Get a Bot Token from your Slack app settings.
    * **(Optional) PDF Parser API Key**: If n8n's native `PDF Read` (Node 2) isn't robust enough for varied resume formats, you might consider an external service like Affinda or Textract and their corresponding API key. You would then use an `HTTP Request` node to call their API.

3.  **Build the n8n Workflow Manually:**
    * Start a new workflow in n8n.
    * Add each node one by one, according to the detailed explanation provided in our previous conversation (e.g., `Webhook`, `PDF Read`, `Function`, `OpenAI`, `Google Sheets`, `Gmail`, `If`, `Wait`, `Slack`).
    * **Crucially, connect the nodes** by dragging lines between their output and input ports, following the logical flow of the system.

4.  **Connect Your Tools (Credentialing & Linking):**
    * Click on each node that connects to an external service (e.g., `OpenAI`, `Google Sheets`, `Gmail`, `Slack`, `Google Calendar`).
    * In the node's settings panel, you'll find an "Authentication" section. Select the specific credential you created in Step 2 from the dropdown list. This links n8n to your external accounts.

5.  **Customize Workflow Nodes (The Tailoring Phase – This is Key!):**
    * **`Webhook` Node (Node 1):** Once you save this node, n8n will provide a unique `Webhook URL`. Copy this URL and configure your application forms (e.g., Google Forms, Typeform, your career page's backend) or job board integrations to send candidate application data (including resume file/URL) to this address via a `POST` request.
    * **`PDF Read` Node (Node 2):** Ensure the `Binary Property` or `PDF URL` setting correctly points to where the resume file or its URL is located in the incoming data from your `Webhook`.
    * **`Function` Nodes (Nodes 3, 8, 12):** Carefully review and, if necessary, *adjust the JavaScript code* inside these nodes. This code is responsible for parsing raw text, consolidating data, and preparing prompts. You might need to tweak regex patterns in Node 3 if your resumes have unique layouts.
    * **`Google Sheets` Nodes (Nodes 4, 5, 6, 7, 13, 18, 20, 24):**
        * For each of these nodes, accurately paste the `Spreadsheet ID` for your Candidate and Job Descriptions sheets.
        * Enter the exact `Sheet Name` (e.g., "Candidates," "Job Descriptions").
        * **CRITICAL MAPPING:** In nodes that `Append` or `Update` rows, meticulously map the `Values` from previous nodes' outputs to the correct column headers in your Google Sheet (e.g., `Name` mapped to `={{ $json.parsed_candidate_name }}`).
    * **`OpenAI` Nodes (Nodes 9, 10, 11, 15, 22):**
        * **This is your AI's personality and intelligence!** Carefully review and **refine the `Prompts`** within these nodes.
            * For Agent 1 (Matcher), clarify what makes a "strong match" for your roles.
            * For Agent 2 (Cultural Fit), specify cultural values important to your company and define "red flags."
            * For Agent 4 (Outreach), customize the tone, call-to-action, and what strengths to highlight.
            * **TEST THESE PROMPTS RIGOROUSLY** with various candidate profiles and job descriptions to ensure they deliver accurate, relevant, and desired outputs.
    * **`If` Nodes (Nodes 14, 21):** Adjust the `match score threshold` in Node 14 (e.g., `70` for 70%) to control which candidates get automated outreach. In Node 21, confirm the `Status` values that indicate a positive response (e.g., "Interview Scheduled").
    * **`Gmail` Nodes (Nodes 16, 23):** Verify the `To` email address is dynamically pulled from the candidate data (`={{ $json.candidate_email }}`). Double-check that the `Subject` and `Body` expressions correctly extract the email content generated by the AI agent.
    * **`Google Calendar` Node (Node 17):** Set your `Calendar ID` (typically your recruiter's calendar ID). Adjust the `Start Date/Time` and `End Date/Time` to suggest appropriate screening call durations.
    * **`Wait` Node (Node 19):** Configure the `Amount` and `Unit` (e.g., `3 Days`) for how long the system should wait before sending a follow-up.
    * **`Slack` Node (Node 25):** Enter the specific `Chat ID` (the channel ID) where you want recruitment notifications to appear (e.g., `#hiring-alerts`).

7.  **Test Thoroughly & Activate!**
    * **Manual Trigger & Inspection:** Before going live, trigger the workflow manually several times using diverse test candidate data. Use the "Test Workflow" feature in n8n to inspect the output of *each individual node*. Check that data is flowing correctly, AI agents are producing accurate results, and emails/notifications are formatted as you expect.
    * **Activate:** Once you're completely confident in its performance, click the "Inactive" toggle in the top-right corner of your workflow to switch it to "Active."

You've now successfully built and launched a cutting-edge, AI-powered recruitment and candidate engagement system. Get ready to transform your hiring process!

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, Google Calendar, Gmail, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Job boards are notoriously hard to scrape — CAPTCHAs, rate limits, constantly changing layouts. [ScraperNode](https://scrapernode.com) has maintained scrapers for [Indeed jobs](https://scrapernode.com/indeed/scrapers/jobs), [Glassdoor reviews](https://scrapernode.com/glassdoor/scrapers/reviews), and [Glassdoor jobs](https://scrapernode.com/glassdoor/scrapers/jobs) that handle all of that for you.
