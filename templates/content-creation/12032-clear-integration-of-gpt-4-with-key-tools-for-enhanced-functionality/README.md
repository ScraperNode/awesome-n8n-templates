# 🎬 Clear integration of GPT-4 with key tools for enhanced functionality

> ⚡ **42 views** · 🎬 [Content Creation & Video](../)

## Description

Turn discovery call forms into polished, personalized proposals in seconds. This workflow captures prospect information via Typeform, uses GPT-4 to write compelling proposal content, and automatically creates professional PandaDoc documents with pricing tables.

**Who is this for?**

Freelancers, consultants, agencies, and service businesses who want to:
- Stop spending hours writing proposals manually
- Respond to prospects faster with professional documents
- Maintain consistent proposal quality at scale

**What problem does it solve?**

Writing proposals is time-consuming and inconsistent. This workflow automates the entire process—from form submission to ready-to-send document—while keeping your proposals personalized and professional.

**How it works**

1. Prospect fills out your Typeform discovery questionnaire
2. Workflow validates required fields (email, company name)
3. AI automatically selects the right template based on budget and project complexity
4. GPT-4 writes personalized proposal content tailored to the prospect's challenges
5. GPT-4 generates realistic project milestones
6. PandaDoc creates a professional document with pricing table
7. You receive a Slack notification with a direct link to review

**Template selection logic**

The workflow intelligently routes to the appropriate template:

- **Quick Quote** → Budget under $2,500 AND simple project
- **Standard Proposal** → Budget $2,500+ OR complex project

**What you get**

- Personalized proposal content written by GPT-4
- Challenge summary that shows you understand their pain points
- Specific benefits with metrics (time savings, cost savings)
- 4-phase project timeline with realistic milestones
- Professional PandaDoc document with pricing table
- Slack notifications for successes and errors

**Setup time:** 15-20 minutes

**Setup steps**

1. Add your OpenAI API credential (select in the 3 GPT nodes)
2. Add your Typeform API credential
3. Add your PandaDoc API credential (HTTP Header Auth with your API key)
4. Create a Typeform with discovery questions (see below)
5. Create 2 PandaDoc templates (Quick Quote + Standard Proposal)
6. Update the Config node with your company info and template IDs
7. Add your Slack webhook URL to the Config node

**Typeform questions needed**

Your discovery form should include these fields:
- What's your company name?
- What industry are you in?
- What's your biggest operational challenge?
- What would the ideal solution look like?
- What tools/platforms do you currently use?
- How complex is this project? (Simple / Moderate / Complex)
- What's your estimated budget? (Under $1,500 / $1,500-$2,500 / $2,500-$5,000 / $5,000-$10,000 / $10,000+)
- First name
- Last name
- Email address

**PandaDoc template tokens**

Your PandaDoc templates should include these placeholder tokens:
- Client.Company, Client.FirstName, Client.LastName
- Client.ChallengeSummary
- Project.Total, Project.Deposit
- Project.TimeSavings, Project.CostSavings
- Timeline.Phase1-4, Timeline.Phase1Date-4Date
- Impact.Bullet1-3
- Proposal.ExpiryDate, Document.Date

**Requirements**

- OpenAI API account (~$0.05-0.15 per proposal)
- Typeform account (free tier works)
- PandaDoc account (API access required)
- Slack workspace (for notifications)

**Good to know**

- Processing time: 15-30 seconds per proposal
- All errors are caught and sent to Slack so you can follow up manually
- The Config node centralizes all settings—easy to customize
- GPT prompts are editable to match your writing style
- Budget threshold is adjustable (default: $2,500)
- Quick Quote proposals expire in 7 days, Standard in 14 days

## 🔗 Nodes Used

HTTP Request, Typeform Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
