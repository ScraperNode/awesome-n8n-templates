# 📱 Send weekly personalized pet health tips with GPT-4o-mini, Gmail and Google Sheets

> ⚡ **203 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Send personalized pet care tips from Google Sheets with AI

Automate weekly pet wellness emails with AI-generated, location and age-specific advice. 



##  Who's it for

Pet care businesses, veterinary clinics, pet subscription services, and animal shelters sending regular wellness content to pet owners.


##  How it works

1. **Loads pets data** from Google Sheets
2. **Filters** pets who haven't received email in 7+ days
3. **Calculates age** from birthdate (formats as "2 years and 3 months")
4. **AI generates tip** - GPT-4o-mini creates climate-aware, veterinary-aligned advice based on pet type, age, and location
5. **Sends email** via Gmail or SendGrid
6. **Updates timestamp** in sheet to prevent duplicates
7. **Logs activity** to tracking sheet




## Requirements

**APIs:**
- Google Sheets, Airtable, Typeform or similar
- OpenAI (GPT-4o-mini)
- Gmail OAuth2 OR SendGrid, you can use Brevo, Mailchimp or any other.

**Google Sheet Structure:**

**Sheet 1: `Pets`**
| Email | Owner_Name | Pet_Name | Pet_Type | Date_of_Birth | Country (ISO) | Status | Last_Email_Sent |
|-------|------------|----------|----------|---------------|---------------|--------|-----------------|

**Sheet 2: `Email_Log`**
| Timestamp | Parent_Email | Pet_Name | Tip_Category | Status |
|-----------|--------------|----------|--------------|--------|



## How to set up

1. **Create Google Sheet** with structure above, add 2-3 test pets.
2. **Import workflow** and add credentials.
3. **Update nodes:**
   - "Load Pet Info": Set your Sheet ID
   - "Update Last_Email_Sent Date": Set Sheet ID
   - "Log to Email_Log Sheet": Set Sheet ID
4. **Test manually** with 1 active pet
5. **Enable schedule** (default: Mondays 9am)



## How to customize

**Switch email provider:**
- Enable "Send via SendGrid" node
- Disable "Send Health Tip using Gmail" node
- Update template ID

**Modify AI prompt:**
- Edit "Generate Personalized Tip" node
- Adjust temperature 
- Add/remove categories



## Use cases beyond pets

Same workflow works for:
- **Plant care** (growth stage tips)
- **Baby milestones** (age-based parenting advice)
- **Fitness coaching** (experience level workouts)
- **Language learning** (study streak motivation)

Just update sheet columns and AI prompt.



## Notes
- Choose only one mailing service. 
- Country codes use ISO format (US, UK, AU, CA, etc.)
- AI considers location for seasonal advice.

## 🔗 Nodes Used

Google Sheets, Gmail, SendGrid, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
