# 🔬 Reconcile cash balances in Google Sheets with OpenAI explanations

> ⚡ **26 views** · 🔬 [Document Extraction & Analysis](../)

## Description

# Cash Reconciliation Checker with Google Sheets, OpenAI & n8n

This workflow automatically compares **internal cash balances** with **custodian or bank balances** using **Google Sheets**, detects mismatches by `account_id`, calculates balance differences, logs matched records and sends mismatched records through **OpenAI** for a short explanation before saving them for exception review. It is designed to help teams reduce manual reconciliation work and quickly identify balance issues.


### Quick Implementation Steps

1. Import the workflow into **n8n**.
2. Connect your **Google Sheets OAuth2** credentials.
3. Point the three Google Sheets nodes to:
   - Internal balances sheet
   - Custodian balances sheet
   - Reconciliation / exception log sheets
4. Ensure both source sheets use the same `account_id` values.
5. Make sure balance fields are numeric:
   - `internal_balance`
   - `custodian_balance`
6. Connect your **OpenAI** credentials.
7. Adjust the **Schedule Trigger** frequency if needed.
8. Run the workflow once and verify:
   - matched records are logged
   - mismatched records are analyzed and appended correctly


## What It Does

The **Cash Reconciliation Checker** automates a common finance operations task: comparing balances between two separate data sources. In this workflow, one Google Sheet holds **internal balances**, while another holds **custodian balances**. The workflow fetches both datasets, standardizes the required fields and matches records using the shared `account_id`.

After matching the accounts, the workflow calculates the difference between internal and custodian balances and checks whether the difference exceeds a built-in tolerance. If the balances match, the record is written to a reconciliation log as a successful result. If they do not match, the workflow routes the record into an exception path.

For mismatches, the workflow uses **OpenAI (`gpt-4o-mini`)** to generate a short possible explanation based on the values in the record. That enriched mismatch record is then prepared and appended to a separate logging sheet for investigation and follow-up.


## Who’s It For

This workflow is useful for teams and professionals who regularly compare balances across systems, such as:

- Finance operations teams
- Fund administration teams
- Treasury teams
- Accounting teams
- Reconciliation analysts
- Back-office operations teams
- Internal controls and audit support teams

It is especially useful for organizations that currently reconcile balances manually in spreadsheets and want a faster, more consistent process.


## Requirements to Use This Workflow

Before using this workflow, make sure you have the following:

### Required Platforms & Accounts

- **[n8n account](https://n8n.partnerlinks.io/om1efg2qgvwi)**
- **Google Sheets**
- **OpenAI API access**

### Required n8n Credentials

You will need to configure:

- **Google Sheets OAuth2 credentials**
- **OpenAI credentials**

### Required Google Sheets Structure

This workflow expects the following source data structure based on the JSON:

#### 1) Internal Balance Sheet
Must contain at least:

- `account_id`
- `currency`
- `internal_balance`

#### 2) Custodian Balance Sheet
Must contain at least:

- `account_id`
- `currency`
- `custodian_balance`

#### 3) Reconciliation Log Sheet
Should support these columns:

- `account_id`
- `currency`
- `internal_balance`
- `custodian_balance`
- `difference`
- `abs_difference`
- `mismatch`
- `checked_at`
- `recon_status`

#### 4) Exception / Alert Sheet
Should support these columns:

- `account_id`
- `currency`
- `internal_balance`
- `custodian_balance`
- `difference`
- `abs_difference`
- `mismatch`
- `checked_at`
- `ai_explanation`
- `recon_status`

### Data Expectations

To avoid processing issues:

- `account_id` should be consistent across both source sheets
- Balance fields should contain **numeric values only**
- `currency` should be present where relevant
- Empty or invalid balance values may be flagged as mismatches


## How It Works & Set Up

### Step 1 — Import the Workflow into n8n

Import the provided JSON file into your n8n workspace.

After import, you will see the workflow named:

**Cash Reconciliation Checker**


### Step 2 — Review the Flow

The workflow follows this sequence:

```text
Schedule Trigger
→ Fetch Internal Balances
→ Fetch Custodian Balances
→ Edit Internal Fields / Edit Custodian Fields
→ Match Accounts by Account ID
→ Calculate Balance Difference
→ Check for Balance Mismatch
   ├── Matched → Log Matched Records
   └── Mismatched → Generate AI Mismatch Explanation → Prepare Exception Record → Append The Data In The Sheet
```

### Step 3 — Configure the Schedule Trigger

#### Node:
`Run Reconciliation on Schedule`

This node starts the workflow automatically using a schedule interval.

#### What to do:
- Open the node
- Set your preferred execution frequency

#### Example options:
- Every 15 minutes
- Hourly
- Daily
- End-of-day reconciliation schedule

Use a timing pattern that fits your reconciliation process.

### Step 4 — Connect the Internal Balance Source

#### Node:
`Fetch Internal Balances`

This Google Sheets node pulls records from the internal balance sheet.

#### What to do:
- Connect your **Google Sheets OAuth2** account
- Select the correct spreadsheet
- Select the correct sheet tab

#### Required fields expected from this source:
- `account_id`
- `currency`
- `internal_balance`

### Step 5 — Connect the Custodian Balance Source

#### Node:
`Fetch Custodian Balances`

This Google Sheets node pulls records from the custodian or bank balance sheet.

#### What to do:
- Connect your **Google Sheets OAuth2** account
- Select the correct spreadsheet
- Select the correct sheet tab

#### Required fields expected from this source:
- `account_id`
- `currency`
- `custodian_balance`

### Step 6 — Standardize Both Datasets

The workflow uses two **Set** nodes to clean and normalize fields before matching.

#### Node:
`Edit Internal Fields`

This node maps and formats:

- `account_id`
- `currency`
- `internal_balance`

It also converts `internal_balance` into a numeric value.

#### Node:
`Edit Custodian Fields`

This node maps and formats:

- `account_id`
- `currency`
- `custodian_balance`

It also converts `custodian_balance` into a numeric value.

#### Why this matters

This step helps ensure both datasets use a consistent field structure before comparison.

### Step 7 — Match Records by Account ID

#### Node:
`Match Accounts by Account ID`

This **Merge** node combines both sources using:

```text
account_id
```

#### What it does

It aligns internal and custodian records so each account can be compared side by side.

#### Important setup note

This will only work properly if:

- both sheets contain matching `account_id` values
- the values are formatted consistently
- there are no accidental extra spaces or mismatched IDs

### Step 8 — Calculate the Balance Difference

#### Node:
`Calculate Balance Difference`

This **Code** node performs the main reconciliation logic.

#### What it calculates

For each matched account, it creates:

- `internal_balance`
- `custodian_balance`
- `difference`
- `abs_difference`
- `mismatch`
- `checked_at`

#### Logic used in this node

The workflow uses a built-in tolerance:

```javascript
const TOLERANCE = 0.01;
```

#### Reconciliation rule

A record is treated as a mismatch if:

- either balance is invalid / not numeric, or
- the absolute difference is greater than `0.01`

#### Output fields created

- `account_id`
- `currency`
- `internal_balance`
- `custodian_balance`
- `difference`
- `abs_difference`
- `mismatch`
- `checked_at`

This is the core decision-making step in the workflow.

### Step 9 — Route Matched vs Mismatched Records

#### Node:
`Check for Balance Mismatch`

This **IF** node checks:

```text
mismatch == true
```

#### Routing behavior

##### If `mismatch = false`
The record is considered matched and goes to:

- `Log Matched Records`

##### If `mismatch = true`
The record is treated as an exception and goes to:

- `Generate AI Mismatch Explanation`

This split keeps normal reconciliations separate from exception handling.

### Step 10 — Log Matched Records

#### Node:
`Log Matched Records`

This Google Sheets node appends matched records to a reconciliation log sheet.

#### Logged values include:

- `account_id`
- `currency`
- `internal_balance`
- `custodian_balance`
- `difference`
- `abs_difference`
- `mismatch`
- `checked_at`
- `recon_status`

#### Fixed value used

Matched records are saved with:

```text
recon_status = Matched
```

This gives you a clean audit trail of successfully reconciled accounts.

### Step 11 — Generate AI Explanation for Exceptions

#### Node:
`Generate AI Mismatch Explanation`

This node sends mismatch data to **OpenAI (`gpt-4o-mini`)** and asks for a short explanation.

#### Prompt behavior in the workflow

The AI is instructed to review:

- account ID
- currency
- internal balance
- custodian balance
- difference
- check timestamp

It is then asked to provide the **most likely cause** of the mismatch from the following categories already defined in the workflow:

- settlement delay (T+1/T+2)
- pending fees or accrued interest
- FX conversion timing
- failed corporate actions
- bank charges not yet booked
- data entry error

It also ends with:

- top 1–2 likely causes
- one recommended next action

#### Why this is useful

This adds context to exceptions and helps operations teams review mismatches faster.

### Step 12 — Prepare the Exception Record

#### Node:
`Prepare Exception Record`

This **Code** node combines the AI output with the original mismatch data and formats it for logging.

#### Fields included in the final exception record

- `account_id`
- `currency`
- `internal_balance`
- `custodian_balance`
- `difference`
- `abs_difference`
- `mismatch`
- `checked_at`
- `ai_explanation`
- `recon_status`

#### Fixed value used

Mismatch records are saved with:

```text
recon_status = Mismatch
```

This creates a structured exception record ready for reporting or review.

### Step 13 — Append Mismatch Records to the Exception Sheet

#### Node:
`Append The Data In The Sheet`

This Google Sheets node appends the prepared mismatch records into a separate sheet for follow-up.

#### Logged values include:

- `account_id`
- `currency`
- `internal_balance`
- `custodian_balance`
- `difference`
- `abs_difference`
- `mismatch`
- `checked_at`
- `ai_explanation`
- `recon_status`

This acts as your exception register for unresolved or suspicious balance breaks.

### Step 14 — Test Before Going Live

Before enabling the workflow, run a few controlled tests.

#### Recommended test scenarios

##### Test 1 — Perfect match
Use the same values in both sheets for one account.

Expected result:
- record goes to **Log Matched Records**

##### Test 2 — Small tolerance-safe difference
Use a difference within `0.01`.

Expected result:
- record should still be treated as matched

##### Test 3 — True mismatch
Use a larger difference.

Expected result:
- record goes through AI explanation path
- gets appended to exception sheet

##### Test 4 — Invalid numeric value
Use a blank or non-numeric balance.

Expected result:
- record should be flagged as mismatch

Once tests pass, you can safely activate the workflow.


## How To Customize Nodes

This workflow is already useful as-is, but it can be adapted for different reconciliation processes.

### 1) Customize the Schedule Trigger

#### Node:
`Run Reconciliation on Schedule`

You can change:

- frequency
- execution window
- time of day
- reconciliation cycle

Useful if you want:
- intraday reconciliation
- end-of-day checks
- batch finance controls


### 2) Change Matching Logic

#### Node:
`Match Accounts by Account ID`

Currently matches on:

```text
account_id
```

You can modify your data model and workflow if you want to include additional matching dimensions such as:

- account + currency
- account + region
- account + entity

Only do this if your sheet structure supports it.

### 3) Adjust the Tolerance Threshold

#### Node:
`Calculate Balance Difference`

Current tolerance:

```javascript
const TOLERANCE = 0.01;
```

You can change this if your business allows different variance thresholds.

#### Example customizations

- `0` → exact reconciliation only
- `0.01` → cent-level tolerance
- `1` → whole-unit tolerance
- custom threshold based on asset class or currency


### 4) Expand the AI Explanation Logic

#### Node:
`Generate AI Mismatch Explanation`

You can customize the prompt to include:

- business rules
- escalation notes
- internal SOP references
- suggested ownership routing
- severity classification

This is helpful if you want the AI output to be more operationally specific.

### 5) Add More Fields to Logging

#### Nodes:
- `Log Matched Records`
- `Append The Data In The Sheet`

You can extend the output to include additional columns such as:

- legal entity
- desk
- custodian name
- region
- portfolio ID
- reviewer status
- resolution notes

Only add fields that exist in your upstream data or are intentionally created in the workflow.

### 6) Improve Exception Classification

#### Node:
`Prepare Exception Record`

You can enhance this node to add labels like:

- low severity
- medium severity
- high severity
- requires same-day review
- possible FX issue
- possible operational break

This can help organize exception handling more efficiently.


## Add-ons

This workflow can be extended with additional automation features depending on your operational needs.

### 1) Slack Alerts for Mismatches

Send a real-time alert whenever a mismatch is detected.

Useful for:
- finance ops teams
- treasury teams
- urgent exception monitoring

### 2) Email Notification Summary

Send a daily or hourly summary of all mismatches to stakeholders.

Useful for:
- finance managers
- controllers
- operations leads

### 3) Severity Scoring

Add logic to classify mismatches by size or business impact.

Useful for:
- prioritization
- faster review queues
- escalation workflows

### 4) Auto-Assignment to Reviewers

Automatically assign mismatch cases to specific team members based on:

- currency
- entity
- account range
- custodian

Useful for structured exception management.

### 5) Dashboard Reporting

Push matched and mismatched records into a reporting dashboard.

Useful for:
- reconciliation KPIs
- trend monitoring
- operational oversight

### 6) Multi-Currency or Multi-Entity Expansion

Extend the workflow to support more entities, accounts or balance sources.

Useful for:
- growing operations teams
- fund administrators
- larger finance environments


## Use Case Examples

Below are some of the main ways this workflow can be used. There can absolutely be **many more use cases** depending on how your reconciliation process is structured.

### 1) Daily Internal vs Custodian Cash Reconciliation

Automatically compare daily internal records against custodian balances and flag any balance breaks for investigation.

### 2) End-of-Day Treasury Balance Checks

Run the workflow at the end of each business day to ensure treasury balances match external sources before close.

### 3) Exception Monitoring for Fund Operations

Identify mismatched fund cash balances and create a structured exception sheet with AI-generated review notes.

### 4) Reconciliation Logging for Audit Trail

Maintain a consistent log of matched and mismatched records for reporting, controls and audit readiness.

### 5) Early Warning for Data Quality Issues

Use mismatches to spot operational problems such as missing values, incorrect balances or inconsistent source data.

### 6) Lightweight Finance Automation for Spreadsheet-Based Teams

Support teams that still work mainly in spreadsheets but want to reduce repetitive reconciliation effort using automation.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
|---|---|---|
| No records are being compared | One or both Google Sheets nodes are not returning data | Check that both source sheets contain rows and the correct sheet tabs are selected |
| Records are not matching correctly | `account_id` values differ between the two source sheets | Make sure `account_id` values are identical and formatted consistently in both sheets |
| All rows are being flagged as mismatches | Balance fields contain text, blanks or invalid values | Ensure `internal_balance` and `custodian_balance` contain numeric values only |
| Small rounding differences are creating mismatches | Tolerance is too strict for your use case | Update the tolerance value in `Calculate Balance Difference` |
| Matched records are not being logged | Google Sheets append node is not configured correctly | Verify the target spreadsheet, sheet tab and credentials in `Log Matched Records` |
| Mismatch records are not being saved | Exception logging sheet is missing expected columns | Confirm the target sheet includes all mapped fields, including `ai_explanation` and `recon_status` |
| AI explanation is blank | OpenAI credentials or model configuration issue | Reconnect your OpenAI credentials and verify the model is available |
| Workflow fails after import | Credentials are not connected in your environment | Reassign all credential-dependent nodes after importing the workflow |
| Workflow does not run automatically | Schedule Trigger is not active or workflow is disabled | Activate the workflow and confirm the schedule settings |
| Numeric values look wrong in output | Source sheet values are stored with symbols or formatting | Remove currency symbols, commas or text formatting from balance columns |


## Need Help?

If you want help setting up, customizing or extending this workflow, our [n8n workflow automation team](https://www.weblineindia.com/hire-n8n-developers/) at **WeblineIndia** can help you move faster.

We can help you with:

- n8n workflow setup and deployment
- Google Sheets and finance operations automations
- OpenAI-powered exception handling
- Slack / email alert integrations
- dashboard and reporting extensions
- custom reconciliation logic
- production-grade workflow improvements

## 🔗 Nodes Used

Google Sheets, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
