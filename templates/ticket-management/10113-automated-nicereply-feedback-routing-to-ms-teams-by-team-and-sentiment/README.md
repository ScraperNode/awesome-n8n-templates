# 🎫 Automated Nicereply feedback routing to MS Teams by team and sentiment

> ⚡ **190 views** · 🎫 [Ticket Management & Triage](../)

## Description

# Auto-Routing Nicereply Feedback to Microsoft Teams by Team and Sentiment

Automatically collect client feedback from Nicereply, analyze sentiment, and send it to the right Microsoft Teams channels — smartly split by team, tone, and comment presence.

---

## About this Workflow

This workflow pulls customer satisfaction feedback from Nicereply, filters out irrelevant or test entries, and evaluates each item based on the team it belongs to and the sentiment of the response (Great, OK, Bad). It automatically routes the feedback to Microsoft Teams — either as a summary in a channel or a direct message — depending on the team's role and whether a comment is included.

Perfect for support, delivery, consulting, and documentation teams that want to stay in the loop with customer sentiment. It ensures that positive feedback reaches the teams who earned it, and that negative feedback is escalated quickly to leads or management.

---

## Use Cases
- Send daily customer feedback directly to the responsible teams in MS Teams  
- Automatically escalate negative responses to leads or managers  
- Avoid clutter by filtering out unimportant or test entries  
- Keep internal teams motivated by sharing only the most relevant praise

---

## How it works
1. **Schedule Trigger**  
  Starts the workflow on a set schedule (e.g., daily at 7:00 AM)

2. **Get Feedback**  
  Pulls customer feedback from Nicereply using survey ID

3. **Split Out**  
  Processes each feedback entry separately

4. **Edit Feedbacks**  
  Renames or adjusts fields for easier filtering and readability

5. **Change Survey ID**  
  Maps internal survey identifiers for accurate team routing  
  _(Survey ID can be found in Nicereply: `Settings &gt; Surveys &gt; [Survey] &gt; ID`)_

6. **Filter**  
  Excludes old responses

7. **Code Node**  
  Tag unknown clients 

8. **Change Happiness Value**  
  Converts score into “Great”, “OK”, or “Bad” for routing logic

9. **Without Comment**  
  Checks if feedback includes a text comment or not

10. **Send Feedback Without Comment**  
   Routes simple feedback (no comment) to MS Teams based on team + score

11. **Send Feedback With Comment**  
   Routes full feedback with comment to MS Teams for closer review

---

## Feedback Routing Logic

Each team receives only what’s most relevant:  
- **Support, Docs, Consulting** get only **Great** feedback to boost morale  
- **Team Leads** receive **OK and Bad** feedback so they can follow up  
- **Management** is only alerted to **Bad** feedback for critical response

These rules can be **freely customized**. For example, you may want Support to receive all responses, or Management only when multiple Bad entries are received. The structure is modular and easily adjustable.

---

## How to Use

1. **Import the workflow**  
  Load the `.json` file into your Easy Redmine automation workspace

2. **Set up connections**  
  - Nicereply API key or integration setup  
  - Microsoft Teams integration (chat and/or channel posting)  

3. **Insert your Survey ID(s)**  
  - You’ll find these in the Nicereply admin panel under Survey settings

4. **Customize team logic**  
  - Adjust survey-to-team mappings and message routing as needed

5. **Edit Teams message templates**  
  - Modify message text or formatting based on internal tone or content policies

6. **Test with real data**  
  - Run manually and verify correct delivery to MS Teams

7. **Deploy and schedule**  
  - Let it run on its own to automate the feedback cycle

---

## Requirements

- Nicereply account with active surveys  
- Microsoft Teams account with permissions to post to channels or send chats   

---

## Optional Enhancements

- Add AI to summarize long comments  
- Store feedback history in external DB  
- Trigger follow-up tasks or alerts for repeated Bad scores  
- Localize messages for multilingual feedback systems  
- Integrate additional tools like Slack, Easy Redmine, etc.

---

## Tips for a Clean Setup

- Keep team routing logic in one place for easy updates  
- Rename all nodes clearly to reflect their function (e.g., `Change Happiness Value`)  
- Add logging or alerting in case of failed delivery or empty feedback pull  
- Use environment variables for tokens and survey IDs where possible

## 🔗 Nodes Used

HTTP Request, Microsoft Teams, Schedule Trigger, Filter, AI Transform

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
