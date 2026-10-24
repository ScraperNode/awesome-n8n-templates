# 🔬 Classify KYC risk from form submissions with OpenAI, Google Sheets and Slack

> ⚡ **67 views** · 🔬 [Document Extraction & Analysis](../)

## Description

# KYC Risk Profiling Form with n8n, OpenAI, Google Sheets & Slack

This workflow captures customer KYC details through an **n8n Form**, validates the submitted input, sends the cleaned data to **OpenAI** for automated risk profiling, formats the AI response and routes the result based on whether the applicant is classified as **High Risk** or not. High-risk cases are saved separately and trigger a **Slack alert**, while lower-risk cases are simply logged into Google Sheets for recordkeeping and review.


### Quick Implementation Steps

1. [Import the workflow into **n8n**](https://n8n.partnerlinks.io/om1efg2qgvwi).
2. Configure your **OpenAI** credentials.
3. Connect your **Google Sheets** credentials.
4. Connect your **Slack** credentials.
5. Open the **KYC Form Submission** node and publish the form.
6. Make sure your form collects these exact fields:
   - `Income`
   - `Geography`
   - `Occupation`
7. Configure the two Google Sheets nodes for:
   - High-risk records
   - Normal-risk records
8. Set the Slack channel for high-risk alerts.
9. Test the form using sample submissions.
10. Activate the workflow once everything is verified.


## What It Does

The **KYC Risk Profiling Form** workflow automates the first layer of customer risk assessment by collecting basic applicant information and using AI to classify the risk level. Instead of manually reviewing every entry, the workflow accepts a form submission, validates the data and sends it to an AI model that returns a structured risk decision.

Once the AI analysis is returned, the workflow extracts the important risk fields, formats them into a clean structure and checks whether the applicant should be considered **High Risk**. If the risk category is high, the record is routed into a separate review path where it is saved and also sent to Slack as an alert. If the customer is **Low** or **Medium** risk, the record is saved without triggering an alert.

This makes the workflow useful as a lightweight KYC intake and triage layer, especially for teams that want faster screening without building a full compliance platform.


## Who It's For

This workflow is useful for businesses and teams that need a simple way to screen customer or applicant risk during intake.

### Ideal users include:

- Compliance teams
- KYC / AML operations teams
- Risk analysts
- Fintech startups
- Financial service providers
- Customer onboarding teams
- Internal operations teams
- Workflow automation teams building compliance intake systems

It is especially helpful for teams that want to automate **basic risk profiling** before manual review.


## Requirements to Use This Workflow

Before using this workflow, make sure you have the following:

### Required Platforms & Accounts

- [**n8n account**](https://n8n.partnerlinks.io/om1efg2qgvwi)
- **OpenAI API access**
- **Google Sheets**
- **Slack**

### Required n8n Credentials

You will need to configure:

- **OpenAI credentials**
- **Google Sheets OAuth2 credentials**
- **Slack credentials**

### Required Form Fields

This workflow expects the form to collect the following exact field names:

- `Income`
- `Geography`
- `Occupation`

These names are important because they are used directly inside the validation and AI nodes.

### Required Google Sheets Structure

The JSON shows two separate Google Sheets append nodes:

#### 1) High Risk Sheet

Used by:

- `Save High Risk Record`

Recommended columns based on workflow output:

- `riskCategory`
- `income`
- `geography`
- `redFlags`

#### 2) Normal Risk Sheet

Used by:

- `Save Normal Risk Record`

Recommended columns based on workflow output:

- `riskCategory`
- `redFlags`
- `income`
- `geography`
- `occupation`

### Required Slack Setup

You must connect a Slack workspace and choose a valid destination channel in:

- `Send High Risk Alert`


## How It Works & Setup Guide

### Step 1 — Import the Workflow into n8n

Import the provided JSON file into your n8n workspace.

After import, the workflow will appear as:

**KYC-RISK-FORM**


### Step 2 — Understand the Workflow Flow

This workflow follows the structure below:

```text
KYC Form Submission
→ Validate KYC Input
→ Ai Assign The Risk Category
→ Process AI Response
→ Format Final Data
→ Check High Risk
   ├── High Risk → Format the Data For Sheet → Save High Risk Record → Send High Risk Alert
   └── Low / Medium Risk → Save Normal Risk Record
```

This structure creates a simple but useful KYC screening pipeline.


### Step 3 — Configure the KYC Form

#### Node:
`KYC Form Submission`

This is the entry point of the workflow. It creates a user-facing form inside n8n.

#### Form title in the workflow:
```text
KYC_FORM
```

#### Fields configured in the form

##### 1) Income

- Type: `number`
- Required: `true`

##### 2) Geography

- Type: text
- Required: `true`

##### 3) Occupation

- Type: text
- Required: `true`

#### What to do

- Open the form node
- Publish the form
- Share the form link with internal users or customers
- Keep the field names unchanged unless you also update the downstream nodes

This form acts as the customer KYC intake point.


### Step 4 — Validate the Submitted Input

#### Node:

`Validate KYC Input`

This **Code** node validates the incoming form data before it is sent to AI.

#### Validation logic in this node

The workflow checks:

- `Income` must be greater than `0`
- `Geography` must not be empty
- `Occupation` must not be empty

#### It also performs these actions

- Converts `Income` into a numeric value
- Trims extra spaces from text inputs
- Converts `Geography` to uppercase
- Adds:
  - `isValid`
  - `validationErrors`
  - `createdAt`

#### Output fields created

- `Income`
- `Geography`
- `Occupation`
- `isValid`
- `validationErrors`
- `createdAt`

#### Important implementation note

Although this node generates `isValid` and `validationErrors`, the current JSON does **not** include an IF node to stop invalid submissions before they reach the AI step. That means invalid or incomplete records may still continue through the workflow unless you manually extend it later.

So while validation is present, it is currently used as a **data preparation step**, not as a hard blocking gate.


### Step 5 — Configure OpenAI Risk Analysis

#### Node:

`Ai Assign The Risk Category`

This node sends the validated KYC data to **OpenAI (`gpt-4o-mini`)** for automated risk classification.

#### What the AI is instructed to do

The prompt asks the model to:

1. Assign a risk category:
   - `Low`
   - `Medium`
   - `High`

2. List any red flags found

3. Return the original applicant details exactly as received

#### Applicant fields sent to AI

- `Income`
- `Geography`
- `Occupation`

#### Risk rules defined in the workflow

The AI is told to classify as **High Risk** if:

- the geography is a sanctioned country
- the geography is a FATF blacklisted country
- the geography is a high-risk jurisdiction
- the occupation is in a high-risk sector such as:
  - cryptocurrency
  - gambling
  - arms trade
  - shell companies
  - politically exposed roles

The AI is told to classify as **Medium Risk** if:

- one moderate concern exists

The AI is told to classify as **Low Risk** if:

- no major red flags exist

#### Expected AI output format

The prompt explicitly requests valid JSON in this structure:

```json
{
  "riskCategory": "High",
  "redFlags": ["flag1", "flag2"],
  "income": "5000",
  "geography": "INDIA",
  "occupation": "Software Engineer"
}
```

This structured format is important because the next node depends on it.


### Step 6 — Parse and Clean the AI Output

#### Node:

`Process AI Response`

This **Code** node processes the raw AI response and converts it into clean workflow fields.

#### What this node does

- Reads the AI output text
- Removes markdown code fences if present
- Parses the returned JSON
- Extracts important fields
- Creates fallback values if parsing fails

#### Fields extracted

- `riskCategory`
- `redFlags`
- `redFlagText`
- `income`
- `geography`
- `occupation`

#### Error handling included

If the AI output cannot be parsed correctly, the node returns:

- `riskCategory = Unknown`
- empty `redFlags`
- fallback text values
- an `error` field with the parsing error message

This makes the workflow more stable when handling imperfect AI responses.


### Step 7 — Format the Final Structured Record

#### Node:

`Format Final Data`

This **Set** node standardizes the processed AI result into a cleaner output structure.

#### Fields included

- `riskCategory`
- `redFlags`
- `income`
- `geography`
- `occupation`

This step prepares the record for final risk routing.


### Step 8 — Route Based on High Risk Status

#### Node:

`Check High Risk`

This **IF** node checks whether:

```text
riskCategory == High
```

#### Routing behavior

##### If `riskCategory = High`

The record goes to the **high-risk path**:

- `Format the Data For Sheet`
- `Save High Risk Record`
- `Send High Risk Alert`

##### If `riskCategory` is not `High`

The record goes to the **normal-risk path**:

- `Save Normal Risk Record`

This is the main decision point in the workflow.


### Step 9 — Prepare the High-Risk Sheet Record

#### Node:

`Format the Data For Sheet`

This **Set** node formats high-risk records before saving them.

#### Fields included in this path

- `riskCategory`
- `income`
- `geography`
- `redFlags`

#### Important note

This high-risk output currently does **not** include `occupation` in this specific formatting node, even though it exists earlier in the workflow.

That means if you want `occupation` saved into the high-risk sheet, you would need to add it manually later.


### Step 10 — Save High-Risk Cases

#### Node:

`Save High Risk Record`

This Google Sheets node appends high-risk KYC records to a dedicated sheet.

#### What to do

- Connect your **Google Sheets OAuth2** account
- Select the spreadsheet for high-risk KYC review
- Select the correct sheet tab
- Map the sheet columns to the workflow output

#### Recommended columns based on the workflow

- `riskCategory`
- `income`
- `geography`
- `redFlags`

This sheet acts as your **high-risk review register**.


### Step 11 — Send Slack Alert for High-Risk Cases

#### Node:

`Send High Risk Alert`

This Slack node sends a real-time alert when a high-risk applicant is detected.

#### What to do

- Connect your **Slack** account
- Select the Slack channel where alerts should be sent

#### Slack alert content in the workflow

The alert includes:

- Income
- Geography
- Occupation
- Risk Category
- Red Flags

#### Why this is useful

This helps compliance or operations teams react quickly instead of waiting to review a spreadsheet later.


### Step 12 — Save Low and Medium Risk Cases

#### Node:

`Save Normal Risk Record`

This Google Sheets node stores non-high-risk records.

#### What to do

- Connect your **Google Sheets OAuth2** account
- Select the spreadsheet for lower-risk KYC records
- Select the correct sheet tab

#### Recommended columns based on workflow output

- `riskCategory`
- `redFlags`
- `income`
- `geography`
- `occupation`

This gives you a separate audit trail for lower-risk applicants.


### Step 13 — Test the Workflow Before Going Live

Before activating the workflow, run a few test submissions through the form.

#### Recommended test scenarios

##### Test 1 — Low Risk Example

Example:

- Income: `5000`
- Geography: `India`
- Occupation: `Software Engineer`

Expected result:

- record is saved to **normal-risk sheet**
- no Slack alert is sent

##### Test 2 — Medium Risk Example

Example:

- Income: `3000`
- Geography: `Some higher-risk region`
- Occupation: `Freelancer`

Expected result:

- record is saved to **normal-risk sheet**
- no Slack alert is sent

##### Test 3 — High Risk Example

Example:

- Income: `15000`
- Geography: `High-risk jurisdiction`
- Occupation: `Crypto Trader`

Expected result:

- record is saved to **high-risk sheet**
- Slack alert is sent

##### Test 4 — Invalid Submission

Example:

- Income: `0`
- Geography: blank
- Occupation: blank

Expected result:

- validation fields should show issues
- AI may still run in the current workflow unless you add a blocking validation step

Once these tests work correctly, the workflow is ready to activate.


## How To Customize Nodes

This workflow is flexible and can be extended depending on your onboarding or compliance process.

### 1) Add More KYC Form Fields

#### Node:

`KYC Form Submission`

You can expand the form to include fields such as:

- full name
- email
- date of birth
- nationality
- source of funds
- business type
- customer type
- politically exposed person status

If you add fields, remember to update:

- validation logic
- AI prompt
- output formatting
- Google Sheets mappings

### 2) Make Validation Strict

#### Node:

`Validate KYC Input`

Right now, validation results are created but not used to stop the workflow.

You can improve this by adding an **IF** node after validation to block records where:

```text
isValid == false
```

This would let you:

- stop bad form submissions
- return cleaner downstream results
- prevent unnecessary AI usage

### 3) Customize Risk Rules

#### Node:

`Ai Assign The Risk Category`

You can tailor the AI prompt to match your internal compliance rules.

#### Example customizations

- define your own high-risk geographies
- add more restricted occupations
- introduce onboarding thresholds
- include business-specific risk rules
- add customer segment rules

This is one of the most important places to adapt the workflow to your business.

### 4) Save More AI Output

#### Nodes:

- `Process AI Response`
- `Format Final Data`

You can extend the structured AI output to include more details such as:

- risk score
- explanation summary
- review recommendation
- escalation notes
- due diligence level

This is useful if you want more than just a category label.

### 5) Improve the Slack Alert

#### Node:

`Send High Risk Alert`

You can customize the Slack message to include:

- internal case ID
- submission timestamp
- review owner
- priority level
- direct review link

This helps operational teams respond faster.

### 6) Unify All Records into One Master Sheet

#### Nodes:

- `Save High Risk Record`
- `Save Normal Risk Record`

Instead of storing high-risk and normal-risk cases separately, you can route both into one master Google Sheet and add a field such as:

```text
riskCategory
```

This is useful if you prefer centralized reporting.


## Add-ons

This workflow can be extended into a more advanced KYC onboarding automation system.

### 1) Email Notification for High-Risk Cases

Send an email alert in addition to Slack when a high-risk record is detected.

### 2) Automatic Case Assignment

Assign high-risk cases to a specific compliance reviewer.

### 3) Manual Review Queue

Create a review status field such as:

- Pending Review
- Under Investigation
- Approved
- Escalated

### 4) Risk Scoring Dashboard

Track the volume of:

- low-risk submissions
- medium-risk submissions
- high-risk submissions
- common red flags

### 5) CRM or Database Integration

Push the final KYC decision into your CRM, database or onboarding system.

### 6) Enhanced Sanctions / Jurisdiction Screening

Add a dedicated compliance screening step before or after AI analysis.


## Use Case Examples

This workflow can support many different customer onboarding and risk intake scenarios. Below are some of the main ones.

### 1) Basic KYC Intake Screening

Use the form to collect customer information and automatically classify onboarding risk before manual review.

### 2) Fintech Customer Onboarding

Route higher-risk financial users into a flagged review process while logging normal applicants automatically.

### 3) Internal Risk Triage for Sales or Partnerships

Screen leads, vendors or applicants before moving them deeper into your onboarding pipeline.

### 4) Compliance Team Pre-Screening

Help compliance teams reduce repetitive manual work by automatically identifying obviously high-risk submissions.

### 5) Operational Review Queue Creation

Automatically create a structured list of high-risk cases that require follow-up or escalation.

### 6) Lightweight AI-Assisted KYC Automation

Use AI as an early-stage risk assistant before implementing a more advanced compliance stack.

There can be many more use cases depending on your industry, customer type, onboarding rules and compliance process.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
|---|---|---|
| Form submits but no data is processed | Workflow is inactive or form trigger is not published | Activate the workflow and confirm the form is live |
| AI output fails to parse | OpenAI returned text outside the expected JSON structure | Review the AI prompt and confirm the model is returning valid JSON |
| High-risk records are not reaching Slack | Slack node is not configured or connected correctly | Reconnect Slack credentials and verify the selected channel |
| High-risk records are not being saved | Google Sheets high-risk node is not configured | Set the spreadsheet and sheet tab in `Save High Risk Record` |
| Low / medium records are not being saved | Google Sheets normal-risk node is incomplete | Configure `Save Normal Risk Record` with the correct destination sheet |
| Risk category is always `Unknown` | AI output could not be parsed properly | Inspect the `Process AI Response` node and test the AI response format |
| Invalid form data still moves forward | Validation node does not block the workflow | Add an IF node after `Validate KYC Input` if you want strict validation |
| Geography looks different than expected | Validation node converts geography to uppercase | This is expected behavior in the current workflow |
| Occupation is missing in the high-risk sheet | `Format the Data For Sheet` does not include occupation | Add `occupation` to that Set node if needed |
| Slack alert shows incomplete values | Some fields were not preserved in the high-risk path | Check the data passed into the Slack node and update the mapping if necessary |


## Need Help?

If you want help setting up, customizing or extending this workflow, our [n8n workflow automation developers](https://www.weblineglobal.com/hire/n8n-developers/) at **WeblineIndia / Global** can help you implement it faster and more reliably.

We can help you with:

- n8n workflow setup and deployment
- AI-powered KYC intake automation
- Google Sheets and Slack integrations
- Compliance workflow extensions
- Form optimization and validation logic
- Onboarding automation
- Risk scoring enhancements
- Custom review and escalation pipelines

If you want a customized version of this workflow or need similar automation for onboarding, compliance or risk operations, [contact **WeblineIndia** for workflow setup and development support](https://www.weblineindia.com/contact-us.html).

## 🔗 Nodes Used

Google Sheets, Slack, n8n Form Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
