# 👥 Monitor candidate email SLA breaches with Gmail and send Slack alerts

> ⚡ **12 views** · 👥 [HR & Recruitment](../)

## Description

# Gmail Candidate Email SLA Monitoring & Slack Alert Workflow

This workflow automatically monitors candidate emails received in the last 24 hours and checks whether a recruiter has replied within the same thread. If no reply is found, it flags it as an SLA breach and sends a Slack alert to an available team member (active if possible, otherwise random). This helps ensure timely communication with candidates.


### Quick Implementation Steps

1. [Login to your n8n account](https://n8n.partnerlinks.io/om1efg2qgvwi).
2. Set up the Scheduler node (e.g., every 5 minutes or as preferred).
2. Connect your Gmail account and fetch emails from the last 24 hours.
3. Filter candidate emails using sender domain and label/category.
4. Use thread analysis to detect if a reply exists.
5. Connect Slack and fetch channel members.
6. Check presence and select an active (or random) user.
7. Send alert message via Slack using user ID.
8. Activate the workflow.


## What It Does

This workflow continuously monitors incoming emails from candidates and ensures that no message goes unanswered. It focuses specifically on emails received within the last 24 hours and identifies conversations that have not received a reply from the recruiter.

Once emails are fetched, the workflow filters relevant candidate communications based on sender domain and label/category. It then retrieves the full email thread and analyzes whether any reply has been sent from the recruiter’s side. If no reply exists in the thread, it is marked as an SLA breach.

To ensure quick action, the workflow integrates with Slack. It checks the availability of team members and intelligently selects an active user. If no one is active, it assigns the alert to a random team member, ensuring accountability and timely follow-up.


## Who It's For

- Recruitment teams handling candidate communication
- HR departments managing high volumes of emails
- Hiring managers who want to improve response times
- Operations teams focused on SLA compliance
- Startups and agencies managing multiple candidate pipelines


## Requirements

To use this workflow, you need:

- [An active n8n account](https://n8n.partnerlinks.io/om1efg2qgvwi)
- Gmail account connected via n8n
- Slack workspace access
- Slack API credentials configured in n8n
- A Slack channel with team members
- Basic understanding of email threads and Slack user IDs


## How It Works & Set Up

### Setup Instructions

1. **Scheduler Configuration**

   - Set the trigger interval (default: every 5 minutes)
   - Users can adjust this based on their needs

2. **Gmail Integration**

   - Connect your Gmail account
   - Use "Get Many Messages" node
   - Configure to fetch emails from the last 24 hours

3. **Filter Candidate Emails**

   - Apply filtering logic using:
     - Sender domain
     - Email label/category

4. **Thread Retrieval**

   - Use thread ID to fetch full conversation
   - Ensure all messages in the thread are available

5. **Reply Detection**

   - Analyze messages in the thread
   - Check if any message has `SENT` label
   - If yes → mark `hasReplied = true`
   - If no → mark as SLA breach

6. **Slack Integration**

   - Fetch members from selected channel
   - Retrieve presence status for each member

7. **User Selection Logic**

   - If any user is active → select active user
   - Else → randomly select a user

8. **Send Slack Alert**

   - Send message using selected user ID
   - Include candidate email and thread details

9. **Activate Workflow**

   - Test all nodes
   - Enable workflow for automation


## How To Customize Nodes

- **Scheduler Node**
  - Adjust frequency (e.g., every 10 mins, hourly)
- **Gmail Node**
  - Modify time window (e.g., last 48 hours)
  - Add more filters if needed
- **Filter Logic**
  - Customize based on:
    - Domains
    - Keywords
    - Labels
- **Reply Detection**
  - Extend logic to include time-based SLA if needed
- **Slack Message Node**
  - Customize alert message format
  - Add urgency indicators or emojis
- **User Selection Logic**
  - Change selection strategy (e.g., round-robin instead of random)


## Add-ons (Enhancements)

- Add SLA time tracking (e.g., alert after 6/12/24 hours)  
- Send escalation alerts if still unresolved  
- Log SLA breaches in Google Sheets or database  
- Add email auto-reply for acknowledgment  
- Integrate with CRM systems  
- Add priority tagging (high-value candidates)  


## Use Case Examples

- Ensuring recruiters respond to candidates within 24 hours  
- Monitoring missed emails in high-volume hiring campaigns  
- Alerting teams about unattended job applications  
- Improving candidate experience through faster replies  
- Managing SLA compliance for recruitment agencies  

There can be many more use cases depending on how you extend and customize this workflow.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
|------|--------------|---------|
| No emails fetched | Gmail node not configured correctly | Check credentials and filters |
| Incorrect email filtering | Wrong domain/label logic | Update filter conditions |
| Replies not detected | Thread parsing issue | Verify `SENT` label logic |
| No Slack message sent | Invalid user ID or Slack config | Check Slack credentials |
| All users shown as away | Slack presence limitation | Verify Slack presence permissions |
| Random user not selected | Logic error in code node | Validate selection script |
| Workflow not triggering | Scheduler disabled | Enable and verify schedule |


## Need Help?

If you need help setting up this workflow, customizing nodes or adding advanced features, our [n8n automation team](https://www.weblineindia.com/hire-n8n-developers/) at **WeblineIndia** is here to assist you.

We can help you:

- Customize SLA logic  
- Integrate additional tools (CRM, databases, etc.)  
- Build advanced automation workflows  
- Optimize your recruitment processes  

Feel free to [reach out to **WeblineIndia** for expert guidance or to build similar automation solutions](https://www.weblineindia.com/contact-us.html) tailored to your business needs.

## 🔗 Nodes Used

Slack, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
