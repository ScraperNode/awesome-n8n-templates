# 🔒 Automated Wazuh rule deployment pipeline with GitHub, XML validation & Telegram alerts

> ⚡ **158 views** · 🔒 [SecOps & Security Automation](../)

## Description

**🚀 Say Goodbye to Manual Rule Deployments in Wazuh!**

**Just Commit**— Let Your Pipeline Auto‑Deploy via **GitHub + n8n 🎯**

**👨‍💻 Tired of This Endless Cycle?**

***Create rule → Validate → Copy to server → Restart Wazuh → Notify team***

Repeat that every week — you’re spending more time deploying than detecting.

**What if one GitHub commit could do it all automatically?**
**✅ Validate
✅ Deploy
✅ Restart
✅ Notify** — without touching the server.

Well, this workflow does just that.

**🔥 Presenting:
⚡️ Git‑Powered Wazuh Rule Deployment Using n8n**

---

🧠 What This Workflow Does in **10 Seconds — Automatically:**

✅ Watches GitHub commits — triggers only if the message contains #deploy-wazuh

✅ Checks if commit author is allowed

✅ Sends contextual SOC notifications about deployment attempt

🧪 Downloads & validates rule XML using xmllint

📦 Uploads to Wazuh Manager node only if validation succeeds

♻️ Restarts Wazuh Manager and verifies loading

📢 Sends alert to your team on Telegram (or other medium) with result: success/failure & reasons

---

**🧠 Why Detection Engineers Will Love This:**

⏱️ Saves hours weekly — Just commit & chill

🕒 Zero‑delay deployments — Go live instantly

🧪 Stops bad rules before they crash your SIEM

🔁 Rapid iteration — build, commit, done

🧘 No babysitting — Pipeline handles everything

📊 Informative alerts like:
"Rule custom_malware_alert.xml deployed by Mariskarthick – Validation ✅ – Restart 🔁 Completed"

---
**📌 Perfect For:**

🛡️ Detection Engineers deploying rules weekly

🏢 MSSPs with multiple Wazuh environments

🚨 Threat Intel teams needing rapid turnaround

---

**💥 This Isn’t Just Automation — It’s Detection Engineering at Its Finest.
Let your GitHub commits trigger real‑time rule deployment — with validation, restart, and SOC alerts built‑in.**

***Commit. Deploy. Detect.***

---

**Created by [Mariskarthick M](https://www.linkedin.com/in/mariskarthickm/)** 
Senior Security Analyst | Detection Engineer | Threat Hunter | Open-Source Enthusiast

## 🔗 Nodes Used

Github Trigger, HTTP Request, Telegram, SSH

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
