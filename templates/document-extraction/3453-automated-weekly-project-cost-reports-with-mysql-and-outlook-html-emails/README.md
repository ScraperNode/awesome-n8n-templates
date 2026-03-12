# 🔬 Automated weekly project cost reports with MySQL and Outlook HTML emails

> ⚡ **2,053 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Automated Weekly Project Cost Reports with MySQL and Outlook HTML Emails

## 🧠 Use Case

Need to keep your finance or operations team updated on missing project costs?  
This practical **automated report workflow** does the job without AI — and saves hours weekly.

- Runs on a **weekly schedule**
- Queries your **MySQL** database for projects missing cost data
- Filters by `budgeted_project_cost IS NULL`
- Generates a clean **HTML email report**
- Sends it through **Microsoft Outlook** to relevant teams

## 🚀 How It Works

1. **Schedule Trigger** – Runs every Monday at 8 AM
2. **MySQL Node** – Connects and runs SQL to fetch project data missing `budgeted_project_cost`
3. **Switch Node** – Routes logic based on `cost_center` (e.g., Retail, Service, Projects)
4. **Outlook Nodes** – Sends formatted HTML emails; each node handles a specific group
5. **Dynamic Content** – Inject values using mustache tags like `{{ $json.project_name }}`

## 🔧 Setup Instructions

1. **MySQL Setup**:
   - Ensure the MySQL node is connected using a valid credential set:
     - Hostname/IP
     - Port (default: 3306)
     - Database name
     - Username with SELECT permissions
     - Password
   - Query Example:
     ```sql
     SELECT project_name, cost_center FROM tabProject 
     WHERE status = 'Open' AND project_type = 'External' AND budgeted_project_cost IS NULL;
     ```

2. **Outlook Configuration**:
   - Connect your Microsoft Outlook node using OAuth2 credentials.
   - Rename each Outlook node clearly (e.g., `Send Email - Retail`, `Send Email - Service`).

3. **Switch Node**:
   - Modify cost center values as needed to match your organization (e.g., `'Retail'`, `'Service'`, `'Projects'`).

4. **HTML Email Formatting**:
   - Customize the HTML message body using inline styles and mustache syntax.
   - Sample:
     ```html
     <h3>Missing Budgeted Cost Report</h3>
     <ul>
       <li>Project: {{ $json.project_name }}</li>
       <li>Cost Center: {{ $json.cost_center }}</li>
     </ul>
     ```

5. **Recipients**:
   - Replace `amjid@amjidali.com` with the actual email addresses of the concerned teams.


## 📘 Read More

👉 [Why Simple Workflows Work](https://syncbricks.com/why-simple-n8n-workflows-often-deliver-more-value-than-complex-ones/)  

## 📺 Demo & Tutorial

🎥 Watch the video walkthrough:  
[https://youtube.com/@syncbricks](https://youtube.com/@syncbricks)

---

## 👤 About the Creator

**Amjid Ali**  
🌐 [amjidali.com](https://amjidali.com)  
📘 [n8n Book](https://lms.syncbricks.com/books/n8n/)  
🎓 [Learn n8n](https://www.udemy.com/course/mastering-n8n-ai-agents-api-automation-webhooks-no-code/?referralCode=0309FD70BE2D72630C09)

&gt; “Start simple, scale smart. Even basic workflows like this can save your team hours!” — *Amjid Ali*

## 🔗 Nodes Used

MySQL, Microsoft Outlook, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
