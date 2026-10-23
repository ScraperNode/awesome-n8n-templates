# 🔬 Create AI proposals from Fireflies transcripts with GPT-4o, Google Docs, Gmail and Telegram approval

> ⚡ **32 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Fireflies AI - Meeting Proposal Automation
Listens for completed Fireflies transcripts, qualifies whether a proposal is needed using OpenAI, drafts structured proposal content, populates a Google Doc template, converts to PDF, and sends it to the client via Gmail after you approve it in Telegram.

### Who is this for?
Freelancers, agency owners, and consultants who run discovery or sales calls and want proposals out the door faster. If you are spending 30-60 minutes after every call writing proposals by hand, this workflow turns that into a 30-second review-and-approve flow from your phone.

#### What problem does this solve?
Proposals lose momentum. The longer the gap between a call and a follow-up, the colder the lead gets. Most freelancers finish a great call, get pulled into other work, and send the proposal 2-3 days later when the client has already moved on. This workflow captures everything from the Fireflies transcript, drafts a proposal using your own Google Doc template, and holds it for your approval before sending - so you stay fast without losing control or quality.

##### How it works
1. Fireflies Webhook receives a transcript-ready event after your meeting ends
2. Respond 200 OK sends an immediate response so Fireflies does not retry
3. Fetch Fireflies Transcript calls the Fireflies GraphQL API to pull the full transcript, participants, summary, and action items using the transcript ID from the webhook
4. IF Transcript Valid checks the response is not empty or malformed before proceeding
5. OpenAI Qualify Meeting analyzes the full transcript - determines if this was a sales/discovery call that needs a proposal, and extracts client name, email, company, pain points, services discussed, and scope
6. IF Needs Proposal routes to drafting if qualified, or notifies you via Telegram that no proposal is needed with the reason
7. OpenAI Draft Proposal generates structured content for each template variable - CLIENT_NAME, MEETING_RECAP, UNDERSTANDING_OF_NEEDS, PROPOSED_SOLUTION, DELIVERABLES, TIMELINE, INVESTMENT, NEXT_STEPS
8. Prepare Proposal Data consolidates AI outputs from both OpenAI nodes into a single clean data object
9. Copy Template Doc duplicates your Google Doc template in Drive, Replace Template Variables does a find-and-replace for all 10 placeholders
10. Export Doc as PDF converts the populated doc, Save PDF to Google Drive stores it in your proposals folder
11. Telegram Send Approval Request sends you a summary with client details, a link to review the doc, and Approve/Reject buttons
12. Wait for Approval pauses the workflow execution until you click a button - no polling, no timeout pressure
13. If approved and client email exists, Send Proposal via Gmail emails the PDF with a professional follow-up message
14. If client email was not found in the transcript, Telegram Ask for Email prompts you to reply with the address before sending

###### Setup
- [ ] Fireflies - Create an HTTP Header Auth credential with your Fireflies API key. Go to Fireflies &gt; Settings &gt; Developer Settings &gt; Webhooks, add your n8n webhook production URL, and select the Transcription completed event
- [ ] OpenAI - Connect your API key credential. Default model is GPT-4o for both qualification and drafting. GPT-4o-mini works for qualification if you want to save cost on that step
- [ ] Google Doc Template - Create a Google Doc with your proposal layout. Insert these exact placeholders where you want AI content: {{CLIENT_NAME}}, {{CLIENT_COMPANY}}, {{MEETING_DATE}}, {{MEETING_RECAP}}, {{UNDERSTANDING_OF_NEEDS}}, {{PROPOSED_SOLUTION}}, {{DELIVERABLES}}, {{TIMELINE}}, {{INVESTMENT}}, {{NEXT_STEPS}}. Copy the Doc ID from the URL and paste it into the Copy Template Doc node fileId field
- [ ] Google Drive - Set the destination folder ID in both the Copy Template Doc and Save PDF to Google Drive nodes. This is where proposal docs and PDFs will be stored
- [ ] Gmail - Connect your Google OAuth2 credential. The email will be sent from whichever Gmail account you authenticate
- [ ] Telegram - Create a bot via @BotFather, copy the token. Get your Chat ID by messaging @userinfobot. Enter both in all 6 Telegram nodes
- [ ] Test first - Set the workflow to inactive. Send a manual POST to the webhook URL with a real transcript ID from a past meeting. Review the full execution before activating for production

###### Customization tips
- Qualification criteria - Edit the OpenAI Qualify Meeting system prompt to match your business. Add or remove trigger conditions like budget discussion, timeline mentioned, or specific services
- Proposal tone - Adjust the OpenAI Draft Proposal system prompt few-shot examples and instructions to match your brand voice and proposal structure
- Notification channel - Swap all Telegram nodes for Slack (using Slack node + webhook callback) if your team lives in Slack
- Email copy - Edit the Gmail node message body to include your name, title, company, and any standard sign-off or links
- Pricing logic - The default {{INVESTMENT}} value is [PRICING TO BE CONFIRMED]. Modify the OpenAI Draft Proposal prompt to generate pricing tiers based on scope if you have standard packages
- Batch processing - If you run back-to-back calls, each transcript triggers independently. No conflicts between parallel executions

## 🔗 Nodes Used

HTTP Request, Webhook, Telegram, Google Drive, Gmail, Google Docs

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
