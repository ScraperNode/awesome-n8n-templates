# ⚙️ Automatically prune n8n execution history

> ⚡ **1,775 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Automated Execution Pruning

This workflow is designed to help you manage and optimize your n8n instance by automatically pruning old workflow executions, ensuring a cleaner environment and improved performance. You can customize the retention period to suit your needs.

---

## Key Features:
1. **Configurable Retention Period**:  
   The workflow is preconfigured to delete workflow executions older than 10 days. You can easily adjust this duration by modifying the condition in the **If** node.

2. **Daily Automation**:  
   Using the **Schedule Trigger**, the workflow runs daily at the specified time (default: 4:44 AM), retrieving all workflow executions and identifying those that are older than the defined retention period.

3. **On-Demand Testing**:  
   The **Manual Trigger** allows you to test the workflow at any time, ensuring everything is working as expected.

4. **Decision Making**:  
   The **If** node evaluates each execution based on its start date and determines whether it should be deleted or retained.

5. **Execution Pruning**:  
   - **Delete Action**: Executions meeting the criteria are removed via the **Delete Execution** node.  
   - **No-Operation**: Executions that don't meet the criteria remain untouched.

---

## Workflow Nodes:
1. **Manual Trigger**: Enables on-demand testing of the workflow.  
2. **Schedule Trigger**: Runs the workflow daily at the configured time.  
3. **n8n List Execution**: Fetches all executions in your n8n instance.  
4. **If Node**: Compares the execution's start date with the configured retention period.  
5. **Delete Execution**: Deletes executions older than the specified retention period.  
6. **No Operation**: Serves as a placeholder for executions that don't meet the pruning criteria.  

---

## How to Customize:
- **Retention Period**:  
   Update the **If** node's condition to modify the retention period. For instance, change `10 * 24 * 60 * 60 * 1000` to the desired number of days in milliseconds.
   
- **Schedule**:  
   Adjust the timing of the **Schedule Trigger** to match your preferred automation schedule.

This workflow ensures your instance remains efficient by keeping only the relevant execution logs. Use it to maintain a streamlined and clutter-free environment effortlessly.

## 🔗 Nodes Used

n8n, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
