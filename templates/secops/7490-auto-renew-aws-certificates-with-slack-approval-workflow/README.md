# 🔒 Auto-renew AWS certificates with Slack approval workflow

> ⚡ **317 views** · 🔒 [SecOps & Security Automation](../)

## Description

# AWS Certificate Manager (ACM) Auto-Renew with Slack notify & approval

## **Who’s it for**
- SRE/DevOps teams managing many ACM certs.
- Cloud ops who want **hands-off renewals** with an **approval step in Slack**.
- MSPs that need auditable reminders and renewals on schedule.

## **How it works / What it does**
1. **Schedule Trigger** – runs daily (or your cadence).
2. **Get many certificates** – fetches ACM certs (paginate if needed).
3. **Filter: expiring in next 7 days** – keeps items where:
   - `NotAfter` **before** `today + 7d`
   - `NotBefore` **before** `today` (already valid)
4. **Send message and wait for response (Slack)** – posts a certificate summary and **pauses** until Approve/Reject.
5. **Renew a certificate** – on **Approve**, calls the renew action for the item.

## **How to set up**
1. **Credentials**
   - **AWS** in n8n with permissions to list/read/renew certs.
   - **Slack** OAuth (bot in the target channel).  
2. **Schedule Trigger**
   - Set to run once per day (e.g., `09:00` local).
3. **Get many certificates**
   - Region: your ACM region(s).  
   - If you have several regions, loop regions or run multiple branches.
4. **Filter (IF / Filter node)**
   - Add these two conditions (AND):
     - `{{ $json.NotAfter.toDateTime('s') }}` **is before** `{{ $today.plus(7,'days') }}`
     - `{{ $json.NotBefore.toDateTime('s') }}` **is before** `{{ $today }}`
5. **Slack → Send & Wait**
   - Message (text input):
     ```
     :warning: *ACM Certificate Expiry Alert* :warning:

     *Domain:* {{ $json.DomainName }}
     *SANs:* {{ $json.SubjectAlternativeNameSummaries }}
     *ARN:* {{ $json.CertificateArn }}
     *Algo:* {{ $json.KeyAlgorithm }}
     *Status:* {{ $json.Status }}
     *Issued:* {{ $json.IssuedAt | toDate | formatDate("YYYY-MM-DD HH:mm") }}
     *Expires:* {{ $json.NotAfter | toDate | formatDate("YYYY-MM-DD HH:mm") }}

     Approve to start renewal.
     ```
   - Add two buttons: **Approve** / **Reject** (the node will output which was clicked).
6. **Renew a certificate**
   - Map the **CertificateArn** from the Slack Approved branch.

## **Requirements**
- n8n (current version with Slack *Send & Wait*).
- AWS IAM permissions (read + renew ACM), e.g.:
  - `acm:ListCertificates`, `acm:DescribeCertificate`, `acm:RenewCertificate` (plus region access).
- Slack bot with permission to post & use interactivity in the target channel.

## **How to customize the workflow**
- **Window size:** change `7` to `14` or `30` days in the filter.
- **Catch expired**: add an OR path `{{ $json.NotAfter.toDateTime('s') }} is before {{ $today }}` → send a **red** Slack alert.
- **Auto-renew w/o approval:** bypass Slack and renew directly for low-risk domains.
- **Multiple regions/accounts:** iterate over a list of regions or assume roles per account.
- **Logging:** add a Google Sheet/DB append after Slack click with `user`, `time`, `result`.
- **Escalation:** if no Slack response after N hours, ping `@oncall` or open a ticket.

## **Notes**
- The Slack node **pauses** execution until a button is clicked—perfect for change control.
- Time conversions above assume `NotAfter`/`IssuedAt` are Unix seconds (`'s'`). Adjust if your data differs.

## 🔗 Nodes Used

Slack, AWS Certificate Manager, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
