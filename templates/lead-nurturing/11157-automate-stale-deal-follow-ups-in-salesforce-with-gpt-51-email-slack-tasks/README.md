# 💬 Automate stale deal follow-ups in Salesforce with GPT-5.1, email, Slack & tasks

> ⚡ **289 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## How it works
- Runs every morning at 8:00 using the Schedule Trigger.  
- Sets a `stale_days` value and queries Salesforce for Opportunities where `Stage_Unchanged_Days__c` equals that value and the stage is not Closed Won / Closed Lost.  
- For each “stale” Opportunity, loads full deal details and sends them to an OpenAI model.  
- The model uses the `query_soql` tool to pull recent Notes, the primary Contact, and the Opportunity Owner, then returns a single JSON object with:  
  - a personalized follow-up **email** for the client,  
  - a short **SMS** template,  
  - a concise **Slack** summary for the sales team,  
  - and a ready-to-use **Task** payload for Salesforce.  
- n8n parses that JSON, sends the email via SMTP, posts the Slack message to your chosen channel, and creates a Salesforce Task assigned to the Opportunity Owner so every stalled deal has a clear next step.

## Setup steps
Estimated setup time: ~30–45 minutes if your Salesforce, OpenAI, SMTP and Slack credentials are ready.

1. **Create `Stage_Unchanged_Days__c` on Opportunity (Salesforce)**  
   - Field Type: Formula (Number, 0 decimal places)  
   - Formula:  
     ```text
     IF(
       ISBLANK(LastStageChangeDate),
       TODAY() - DATEVALUE(CreatedDate),
       TODAY() - DATEVALUE(LastStageChangeDate)
     )
     ```  
   - This field tracks how many days the Opportunity has been in the current stage.

2. **Connect credentials in n8n**  
   - Salesforce OAuth2 for the Salesforce nodes and the `query_soql` HTTP Tool.  
   - OpenAI (or compatible) credential for the “Message a model” node.  
   - SMTP credential for the customer email node.  
   - Slack credential for the internal notification node.

3. **Configure your follow-up rules**  
   - In **Edit Fields (Set)**, set `stale_days` to the threshold that defines a stalled deal (e.g. 7, 14, 30).  
   - In **Perform a query**, optionally refine the SOQL (record types, owners, minimum amount, etc.) to match your pipeline.  
   - Update the **Send Email SMTP Customer** node with your real “from” address and tweak the wording if needed.  
   - Point **Send Message To Internal Team (Slack)** to the right channel or user.

4. **Test safely**  
   - Turn off the Schedule Trigger and run the workflow manually with a few test Opportunities.  
   - Inspect the AI output in **Message a model** and **Parse JSON** to confirm the structure (`email`, `sms`, `slack`, `task.api_body`).  
   - Check that the email and Slack messages look good and that Salesforce Tasks are created, assigned to the right Owner, and linked to the correct Opportunity.

5. **Go live**  
   - Re-enable the Schedule Trigger.  
   - Monitor the first few days to confirm that follow-ups, Slack alerts, and Tasks all behave as expected, then let the automation quietly keep your pipeline clean and moving.

## 🔗 Nodes Used

Send Email, HTTP Request, Slack, Salesforce, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
