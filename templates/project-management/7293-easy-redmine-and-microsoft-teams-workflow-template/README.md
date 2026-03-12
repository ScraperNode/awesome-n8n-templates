# 📋 Easy Redmine and Microsoft Teams workflow template

> ⚡ **858 views** · 📋 [Project Management](../)

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

# Daily Easy Redmine Task Digest to Microsoft Teams Channel

## Overview  
This workflow automatically collects newly assigned Easy Redmine tasks for a specific team and sends a concise, formatted summary to a Microsoft Teams channel each weekday morning. It’s designed to keep your team updated without manual copy-pasting or sifting through outdated information.  

Perfect for project managers, team leads, or consultants using Easy Redmine, this automation ensures that no high-priority or recent tasks are missed, improving transparency and daily planning.  

---

## How it works  

- **Daily Trigger (8:30 AM on workdays):** Initiates the automation at a fixed schedule.  
- **Get Issues by Query:** Easy Redmine node retrieves all issues matching a saved filter   
- **Split Out Issues:** Breaks the received array of tasks into individual items for separate processing.  
- **Keep Relevant Fields & Add Link:** Filters to essential data (ID, author, subject, description) and creates a clickable issue link using URL concatenation.  
- **Run for Each Task:** Iterates over tasks to process and send individually.  
- **Message into Team Channel:** Uses the Microsoft Teams node to post formatted HTML content into the chosen channel.  

---

## How to Use  

1. **Import the workflow** into your n8n instance.  
2. **Set up Easy Redmine credentials** with API access. 
-	Add or configure your Easy Redmine API credential. 
3. **Set up Microsoft Teams credentials** with API access.  
- Add or configure your Microsoft Teams OAuth2 API credential.
4. Adjust the **saved filter in Easy Redmine** to match your team’s needs.  
5. Update **Teams channel or chat selection** in the final node.  
6. Modify the **scheduled trigger time** if desired.  
7. Test with a smaller query before enabling full automation.  

---

## Example Use Cases  

- **Daily Team Stand-ups:** Provide an automated pre-meeting digest of all new or updated tasks.  
- **Consulting Project Management:** Keep consultants aware of the latest client requests.  
- **Support Teams:** Quickly distribute newly assigned tickets without manual coordination.  

---

## Requirements  

- Easy Redmine account with API access and permission to use saved filters.  
- Microsoft Teams account with permission to post to the target channel.    

---

## Customization  

- Adjust the saved filter in Easy Redmine to target different teams, statuses, or update windows.  
- Change the schedule to match your meeting cadence (daily, twice daily, etc.).  
- Alter the HTML formatting for better readability or company branding.  
- Add more fields from Easy Redmine (priority, due date, etc.) for richer summaries.  

---

**Workflow Improvement Suggestions:**  
- Rename generic nodes like “manual” and “get-manyissues” to descriptive titles (e.g., “Filter Fields & Build Link”).  
- Remove any real names or project-specific data before publishing.  
- Consider adding error handling if Easy Redmine or Teams API calls fail.

## 🔗 Nodes Used

Microsoft Teams, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
