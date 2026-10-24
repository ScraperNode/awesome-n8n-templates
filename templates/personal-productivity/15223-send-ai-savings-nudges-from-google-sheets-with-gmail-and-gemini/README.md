# ⚡ Send AI savings nudges from Google Sheets with Gmail and Gemini

> ⚡ **29 views** · ⚡ [Personal Productivity](../)

## Description

# Goal-Based Savings Tracker with Email Nudges
&gt; n8n, Google Sheets & Gemini AI

---

This workflow automates goal-based savings tracking by pulling user data from Google Sheets, calculating progress and sending AI-generated motivational nudges via email. It evaluates whether users are ahead, on track or behind schedule and dynamically adjusts savings advice using an AI model.

### Quick Start Guide (Get Running in Minutes)

1. [Login to your n8n account](https://n8n.partnerlinks.io/om1efg2qgvwi).
2. Connect your **Google Sheets account** and map required columns
2. Add your **Gemini API credentials** (or any LLM provider)
3. Connect your **Gmail account** for sending emails
4. Replace the **Manual Trigger** with a **Schedule Trigger (daily)**
5. Test the workflow with sample data
6. Activate the workflow


## What It Does  

This workflow acts as a smart financial assistant that helps users stay on track with their savings goals. It fetches savings data from a Google Sheet, processes it to calculate key metrics like progress percentage, expected savings and remaining days and determines whether the user is ahead, on track or behind schedule.

Based on this evaluation, the workflow generates personalized financial nudges using an AI agent. These nudges include motivational messages, practical advice and updated daily savings targets tailored to the user's current progress.

Finally, the workflow formats this information into a structured email and sends it directly to the user, creating a fully automated feedback loop that encourages consistent saving behavior.


## Who It's For  

- Individuals tracking personal savings goals  
- Financial coaches and advisors  
- Fintech startups building savings tools  
- Automation enthusiasts using n8n  
- Anyone who wants automated financial motivation  


## Requirements  

To use this workflow, ensure the following:

### Accounts & Credentials

- [n8n account](https://n8n.partnerlinks.io/om1efg2qgvwi)
- Google Sheets account (OAuth connected in n8n)  
- Gmail account (OAuth for email sending)  
- Google Gemini API (or any supported LLM provider)  

### Google Sheet Structure (Required)

Your sheet must include the following columns:

| Column Name      | Description                          |
|-----------------|--------------------------------------|
| Name            | User's name                          |
| Email           | Recipient email address              |
| Goal Amount     | Total savings target (USD)           |
| Total Saved     | Current saved amount (USD)           |
| Start Date      | Savings start date                   |
| Target Date     | Goal completion date                 |


## How It Works & Set Up  

### Workflow Overview  

1. Fetch data from Google Sheets  
2. Normalize and calculate savings metrics  
3. Evaluate user progress  
4. Generate AI-based savings advice  
5. Format email content  
6. Send email notification  

### Setup Instructions  

#### Step 1: Replace Trigger with Schedule

- Remove or disable **Manual Trigger**
- Add **Schedule Trigger**
- Configure it to run **daily (e.g., 8 AM)**

#### Step 2: Configure Google Sheets Node  

- Connect your Google Sheets account  
- Select your spreadsheet and sheet  
- Ensure column names match the required schema  

#### Step 3: Prepare & Normalize Data  

- This node calculates:
  - Total days between start and target  
  - Days passed and remaining  
  - Expected savings by now  
  - Progress percentage  
  - Daily required savings  
- No changes required unless modifying logic  

#### Step 4: Evaluate Progress (IF Node)  

- Compares:
  - `Total Saved` vs `Expected Savings`
- Outputs:
  - **Ahead / On Track** → Positive path  
  - **Behind** → Recovery path  

#### Step 5: Set Messaging Context  

- Two branches:
  - **Ahead/On Track** → Encouraging messages  
  - **Behind** → Catch-up strategy  
- Prepares base tone before AI processing  

#### Step 6: Configure AI Savings Coach  

- Connect your **Gemini API credentials**  
- You may replace with:
  - OpenAI  
  - Claude  
  - Any LLM supported in n8n  
- AI generates:
  - Motivation  
  - Advice  
  - New daily savings target  

#### Step 7: Format Final Output  

- Structures email content:
  - Subject  
  - Body (Motivation + Advice + Target)  
  - Recipient  

#### Step 8: Configure Gmail Node  

- Connect Gmail OAuth  
- Ensure sender permissions are correct  
- Test email delivery  

#### Step 9: Activate Workflow  

- Run a test execution  
- Activate workflow for daily automation  


## How To Customize Nodes  

### Modify Savings Logic  

- Edit formulas in **Prepare & Normalize Data** node  
- Adjust:
  - Progress calculation  
  - Daily savings logic  

### Customize Email Content  

- Modify **Format Final Output** node  
- Add:
  - Progress percentage  
  - Visual indicators (emojis, charts)  

### Adjust AI Behavior  

- Update prompt in **AI Savings Coach Agent**  
- Change tone:
  - Strict / Friendly / Analytical  
- Modify output format if needed  


## Add-ons (Extend Functionality)  

- Add dashboard using Google Data Studio  
- Send notifications via Slack or WhatsApp  
- Add weekly/monthly summary reports  
- Add reminders for missed savings days  
- Track multiple goals per user  


## Use Case Examples  

1. **Personal Savings Tracker**  
   Automatically monitor and improve individual savings habits  

2. **Financial Coaching Automation**  
   Advisors can send automated guidance to clients  

3. **Employee Financial Wellness Programs**  
   Companies can encourage employees to save regularly  

4. **Fintech App Backend Automation**  
   Use as a backend workflow for savings apps  

5. **Goal-Based Investment Planning**  
   Extend logic for SIP or investment tracking  

&gt; There can be many more use cases depending on how you extend and integrate this workflow.


## Troubleshooting Guide  

| Issue | Possible Cause | Solution |
|------|--------------|---------|
| No data fetched | Incorrect sheet or permissions | Verify Google Sheets connection and sheet ID |
| Email not sent | Gmail OAuth not configured | Reconnect Gmail credentials |
| Incorrect calculations | Date format mismatch | Ensure dates are in valid format (YYYY-MM-DD) |
| AI output missing | API not connected | Check Gemini/OpenAI credentials |
| Workflow not running | Trigger not active | Enable Schedule Trigger |
| Wrong user data | Column mismatch | Ensure exact column names in sheet |


## Need Help?  

If you need assistance setting up or customizing this workflow or if you want to build more advanced automation solutions like this, then our [n8n workflow developers](https://www.weblineindia.com/hire-n8n-developers/) at **WeblineIndia** are here to help.

We can assist you with:  
- Custom workflow development  
- AI integration and optimization  
- Scaling automation systems  
- Adding advanced features and integrations  

👉 [Reach out to **WeblineIndia**](https://www.weblineindia.com/contact-us.html) to turn your automation ideas into production-ready solutions.

## 🔗 Nodes Used

Google Sheets, Gmail, AI Agent, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
