# 🔬 AI Contract Report: Plain English Translation + Risk Score Email (Claude/GPT-4o)

> ⚡ **10 views** · 🔬 [Document Extraction & Analysis](../)

## Description

**Dual-AI translator that turns legal jargon into plain English with 0-100 risk scoring**

Stop guessing what that 40-page lease actually says. This workflow uses two specialized AI agents to translate any PDF contract into plain English, calculate a 0-100 risk score, and flag hidden traps before you sign. You upload, it analyzes, you understand.

This is not another "AI contract generator" template. It does the opposite. You already have the contract, and this workflow decodes it for you. Your decision-making power stays intact because you see exactly what you're agreeing to in language that makes sense.

## How the workflow works

The workflow runs in eight stages:

1. **Upload and validate:** User submits PDF contract via web form. The form only accepts .pdf files to prevent format errors.

2. **Security scan:** The PDF is uploaded to VirusTotal for malware detection. A 20-second wait node gives the scan time to complete across 70+ antivirus engines.

3. **Route based on threat level:** An IF node checks the scan results. Clean files (0 malicious flags) proceed to analysis. Infected files trigger an immediate rejection email with scan details and stop the workflow.

4. **Extract and prepare:** A code node validates the form data and extracts the binary PDF. The Extract From File node converts the PDF to raw text. Another code node truncates the text to 40,000 characters (about 20 pages) to fit within AI context windows.

5. **AI Agent #1 - Translation:** Claude Sonnet 4.5 reads the contract and translates legal jargon into plain English. It identifies the core parties, summarizes the agreement goal, breaks down key sections, maps obligations for both sides, and flags red flags like hidden fees or auto-renewal clauses. Output is structured JSON.

6. **AI Agent #2 - Risk Scoring:** GPT-5 Mini analyzes the same contract text and assigns a 0-100 risk score. It looks for trap clauses (non-competes, one-sided indemnity, unfair termination terms) and provides a severity explanation. Output is structured JSON.

7. **Merge and format:** A code node parses both AI outputs, handles JSON extraction from markdown code blocks, assigns color-coded risk labels (Low: green, Medium: yellow, High: orange, Critical: red), and merges everything into a single structured report object.

8. **Email delivery:** The Gmail node sends a professional HTML email with the risk score visualization, executive summary, obligation breakdown, red flag warnings, and section-by-section translation table. The user gets the full analysis in their inbox.

## Benefits

- **Finds what lawyers find, without the bill:** The dual-AI setup means one agent translates while the other hunts for risks. Different perspectives, better coverage.

- **Stops malware before it touches your AI:** VirusTotal scans every upload across 70+ antivirus engines. Infected files get rejected instantly with clear instructions.

- **Obligation clarity in plain English:** The report splits "what you must do" vs. "what they must do" into separate columns. No more rereading paragraphs five times.

- **Handles real-world contracts:** 40,000 character limit covers most employment contracts, leases, NDAs, and SaaS agreements. Longer documents get truncated with a warning.

- **Professional email reports:** Color-coded HTML with risk visualization, executive summary, and section-by-section breakdown. Looks like something a law firm would send.

## Target Audience

- Freelancers signing client contracts without legal review
- Renters decoding landlord lease agreements before move-in
- Solopreneurs evaluating SaaS Terms of Service or vendor agreements
- Small business owners reviewing partnership or service contracts
- Remote workers navigating international employment agreements
- Anyone who needs to sign contracts but cannot afford a lawyer

## Required APIs

- Anthropic API (Claude Sonnet 4.5 for legal translation)
- OpenAI API (GPT-5 Mini for risk scoring)
- VirusTotal API (malware scanning, free tier available at virustotal.com)
- Gmail OAuth2 with send email permissions

## Easy Customization

- **Swap the AI models:** Replace the Anthropic or OpenAI chat model nodes with Groq, Google Gemini, or any provider that handles structured JSON output. The prompts are model-agnostic.

- **Adjust risk thresholds:** Open the "Merge AI Results" code node and change the score ranges. Current setup: 0-30 = Low, 31-60 = Medium, 61-85 = High, 86-100 = Critical.

- **Change the wait time:** The VirusTotal scan defaults to 20 seconds. Reduce to 15s for faster results or increase to 25s for more reliable scanning on slower connections.

- **Customize the email design:** The "Send Analysis Report" node has the full HTML template. Change colors, fonts, add your logo, or insert affiliate links to lawyer referral services.

- **Increase document limits:** The "Clean & Truncate Text" code node caps at 40,000 characters. Increase the `maxChars` variable to handle longer enterprise contracts.

- **Add delivery channels:** Drop a Slack, Teams, or WhatsApp node after the analysis to send reports through multiple channels instead of just email.

## 🔗 Nodes Used

HTTP Request, Gmail, AI Agent, Anthropic Chat Model, OpenAI Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
