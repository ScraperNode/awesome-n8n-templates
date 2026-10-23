# 🔧 Generate personalized wealth plans from Google Sheets using Groq Llama 3

> ⚡ **20 views** · 🔧 [Miscellaneous](../)

## Description

## Quick overview
This workflow pulls the latest Google Form response from Google Sheets, validates basic eligibility and net income, calculates a risk-based investment split, uses Groq (Llama 3) to generate a personalized wealth plan in JSON and appends the final strategy back to Google Sheets.

## How it works
1. Runs manually and reads rows from a Google Sheets tab that stores Google Form responses.
2. Selects only the most recent submission and validates that age is over 18 and income/expenses are non-negative.
3. Calculates net monthly income and checks that net income exceeds ₹1,000, emailing the respondent via Gmail if validation fails.
4. Assigns Equity/Debt/Gold allocation percentages based on the user’s risk appetite and calculates a monthly investment budget (30% of net income) plus per-asset amounts.
5. Sends the client profile and calculated allocations to Groq (Llama 3) to generate a detailed financial plan strictly in JSON.
6. Parses the AI JSON response and appends the summarized plan fields (summary, allocation, strategy, fund recommendations, advice and advanced strategy) to a master Google Sheets tab.

## Setup
1. Add a Google Sheets OAuth connection and set the correct spreadsheet and sheet tabs for both reading form responses and appending the final plan.
2. Add a Gmail credential and ensure the source sheet includes an Email column used to notify users when their inputs are invalid.
3. Add your Groq API credentials (Groq Chat Model) and confirm the selected Llama 3 model is available in your account.
4. Ensure your source sheet contains the expected columns (Name, Age, Monthly Income, Monthly Expenses, Risk Appetite, Financial Goals, Email) and your destination sheet has matching columns for the saved plan fields.

## Additional info
## How To Customize Nodes

You can easily tweak this workflow to match your own financial philosophy:

* **Change the Investment Budget:** Open the `Investment Calculation` node. Currently, it saves 30% of net income (`$json.net_income * 0.3`). You can change `0.3` to `0.2` if you prefer a 20% rule.
* **Adjust Risk Portfolios:** Open the `Set - Assign Allocation` node. Here you can change the exact percentage splits between Equity, Debt, and Gold for "Low", "Medium", and "High" risk profiles.
* **Tweak the AI's Advice:** Open the `AI Wealth Advisor` node. You can edit the prompt to force the AI to recommend specific brands of mutual funds, focus on different markets, or change the tone of the advice.


## Add‑ons / Optional Enhancements

Want to make this workflow even more powerful? Consider these additions:

* **Automated Trigger:** Replace the manual trigger with a Google Sheets or Webhook trigger so the workflow runs on autopilot the second a user submits a form.
* **PDF Generator:** Add a document generation node right before the end to turn the JSON output into a beautifully branded PDF report.
* **Email Delivery:** Instead of just saving the successful plan to Google Sheets, add another Gmail node at the end to automatically email the finished report directly to the client.


## Use Case Examples

1.  **The Lead Magnet Engine:** A finance coach places a Google Form on their website. Visitors enter their details, and this workflow instantly builds a personalized mini-plan to prove the coach's expertise, capturing the lead.
2.  **Internal Client Onboarding:** A wealth management firm uses this workflow to process their intake forms, saving their junior analysts hours of manual math and basic report drafting.
3.  **Personal Budget Tracker:** An individual uses this workflow for themselves and their family members to get an objective, AI-driven second opinion on their yearly budget adjustments.
4.  **Employee Wellness Portal:** A company sets this up internally so employees can privately submit their numbers and get a safe, automated strategy for their retirement planning.

Note: There can be many more such use cases of this workflow depending on your industry and data inputs!


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
| :--- | :--- | :--- |
| **Workflow doesn't trigger automatically** | The trigger is set to `Manual`. | Replace the `When clicking ‘Execute workflow’` node with a `Google Sheets Trigger` to run on autopilot. |
| **AI Output Parser throws an error** | The AI did not return a perfectly formatted JSON string. | Open the `AI Wealth Advisor` node and strengthen the prompt rules. Ensure the Groq model is strictly instructed to output *only* JSON with no extra text. |
| **Google Sheets fails to save the final plan** | The column names in n8n don't match your actual Sheet headers. | Open the `Save Wealth plan` node and click "Refresh Schema". Re-map the data fields to your exact sheet columns. |
| **Users get the "Invalid details" email mistakenly** | Math error in the calculations or bad form data. | Check that your Google Form requires numbers (not text) for Income and Expenses. If they enter "50k" instead of "50000", the math will fail. |


## Need Help?

Building and fine-tuning AI automation can sometimes feel overwhelming, especially when adjusting complex prompts or mapping specific data structures. If you need help setting up this workflow, customizing the nodes, adding advanced PDF generation features or building entirely new automations for your business, we are here for you! 

[Contact **WeblineIndia**](https://www.weblineindia.com/contact-us.html) for expert assistance and let our [n8n workflow creator team](https://www.weblineglobal.com/hire/n8n-developers/) help you transform your manual processes into seamless, intelligent workflows.

## 🔗 Nodes Used

Google Sheets, Gmail, AI Agent, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
