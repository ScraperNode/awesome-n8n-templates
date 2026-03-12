# 🔬 Automate document approvals with multi-level workflows using Supabase & Gmail

> ⚡ **662 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Multi-Level Document Approval & Audit Workflow

This workflow automates a **document approval process** using Supabase and Gmail.  

---

### Who it’s for
- Teams that need structured multi-level document approvals.  
- Companies managing policies, contracts, or proposals. 
- Medical document need multiple lavel of review and approval. 


---

### How it works
1. **Form Trigger** – A user submits a document via the form.  
2. **Supabase Integration** – The document is saved in the `documents` table.  
3. **Supabase Storage** – The document is saved in the bucket. 
4. **Workflow Levels** – Fetches the correct approval level from `workflow_levels`.  
5. **Assign Approvers** – Matches approvers by role from the `users` table.  
6. **Approval Record** – Creates an `approvals` record with a unique token and expiry.  
7. **Email Notification** – Sends an email with **Approve / Reject links**.  
8. **Audit Logs** – Records every approval request in `audit_logs`.
8. **Repeat** - repeat the flow till all the aproval level is comepted  

---

### How to set up
- Configure your **Supabase credentials**. 
- Create tables as per data model given. 
- Create a storage bucket in **Supabase Storage**.
- Connect your **Gmail account**.  
- Adjust approval expiry time (`48h` default).  
- Deploy and test via the **Form Trigger**.  
---
### Customization
- Add multiple approval levels by chaining `workflow_levels`.  
- Replace Gmail with Slack, Teams, or another notification channel.  
- Adjust audit logging for compliance needs.  
- Update the endpoint http://localhost:5678/webhook-test/ based on instance and env (remove test if you run in prod)
- Update the bucket name.

---

## Important steps 

### 1. **Form Submit**
- Triggered when by submiting form 
- Captures form parameters:  
  - `Title` (Document Title)  
  - `Description` (Document Description)
  - `file` (Document need for approval) 


### 2. **Webhook Entry Point**
- Triggered when an approver clicks the **Approve** or **Reject** link in email.  
- Captures query parameters:  
  - `token` (approval token)  
  - `decision` (approved/rejected)  

---

### 3. **Approval Data Retrieval & Update**
- Fetch approval record from **Supabase (approvals)** using `token`.  
- Update approval status:  
  - `Approved` → moves to next workflow level or final approval.  
  - `Rejected` → document marked as rejected immediately.  
- Records `acted_at` timestamp.  

---

### 4. **Decision Check**
- **IF Node** checks whether the decision is **approved** or **rejected**.  
- **Reject Path** → Update document status to **Rejected** in `documents`.  
- **Approve Path** → Continue workflow level progression.  

---

### 5. **Workflow Level Progression**
- Fetch details of the current workflow level.  
- Identify the **next level** (`workflow_levels`) based on `level_number`.  

#### ✅ If Next Level Exists:
- Retrieve approvers by `role_id`.  
- Generate unique approval tokens.  
- Create new approval records in `approvals`.  
- Send **email notifications** with approval/reject links.  

#### ❌ If No Next Level (Last Level):
- Update document status to **Approved** in `documents`.  

---

### 6. **Audit Logging**
- Every approval action is logged into `audit_logs` table:  
  - `document_id`  
  - `action` (e.g., `approval_sent`, `approved`, `rejected`)  
  - `actor_email` (system/approver)  
  - `details` (workflow level, role info, etc.)  

---

## 📨 Email Template
Approval request email includes **decision links**:  

```html
<p>Please review the document:</p>
<p>
  <a href="http://localhost:5678/webhook-test/doc-approval?token={{$json.token}}&decision=approved">✅ Approve</a> |
  <a href="http://localhost:5678/webhook-test/doc-approval?token={{$json.token}}&decision=rejected">❌ Reject</a>
</p> 
```

Happy Automating! 🚀

## 🔗 Nodes Used

HTTP Request, Webhook, Gmail, Supabase, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
