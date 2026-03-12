# 🔒 Parse DMARC reports, save them in database and notify on DKIM or SPF error

> ⚡ **3,493 views** · 🔒 [SecOps & Security Automation](../)

## Description

## Who is it for
If you are a postmaster or you manage email server, you can set up DKIM and SPF records to ensure that spoofing your email address is hard. On your domain you can also set up DMARC record to receive XML reports from email providers (rua tag). Those reports contain data if email they received passed DKIM and SPF verifications. 

Since DMARC email is public, you will receive a lot of emails from email providers, not only if DKIM/SPF fail. There is no need for it - you probably only need to know if SPF/DKIM failed. 

So this script is intended to automatically parse all DMARC reports that come from email providers, but ONLY send you notification if SPF or DKIM failed - meaning that either someone tries to spoof your email or your DKIM/SPF is improperly set up.

## How it works
- script monitors postmaster email for DMARC reprots (rua)
- unpacks report and parses XML into JSON
- maps JSON and formats fields for MySQL/MariaDB input
	- inputs into database
	- sends notification on DKIM or SPF failure

## Remember to set up
- email input mailbox
- notification channels
	- for slack
	- for email

## 🔗 Nodes Used

Email Trigger (IMAP), Send Email, Rename Keys, Slack, MySQL, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
