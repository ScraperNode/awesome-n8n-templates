# ⚡ WhatsApp expense tracker with PostgreSQL database & AI-powered reports

> ⚡ **2,942 views** · ⚡ [Personal Productivity](../)

## Description

# Track Personal Finances with WhatsApp and AI Assistant

Transform your WhatsApp into a powerful personal finance command center. This AI-powered workflow converts natural language messages into structured financial data, automates record-keeping, and delivers instant insights—all within your favorite messaging app.

## Who is this for?

This template is perfect for:
- **Personal finance enthusiasts** who want effortless expense tracking
- **Small business owners** managing personal and business expenses  
- **Freelancers** tracking income and expenses across projects
- **Anyone** who prefers messaging over complex finance apps
- **Users seeking privacy** with self-hosted financial data

## What problem is this workflow solving?

Traditional expense tracking requires switching between apps, manual data entry, and complex spreadsheets. Most people abandon these systems within weeks. This workflow solves the friction by:
- Eliminating app-switching—everything happens in WhatsApp
- Converting natural language to structured data automatically
- Providing instant confirmations and reports
- Requiring zero learning curve or behavior change

## What this workflow does

### Smart Transaction Processing
Send natural messages like `Spent 300 on groceries at Walmart` and the AI automatically extracts:
- **Date**: Today's date (or specified date)
- **Category**: Groceries  
- **Type**: Expense/Income/Debt
- **Amount**: 300
- **Person/Company**: Walmart

### Intelligent Message Classification
The workflow automatically routes messages to three processing branches:
- **Branch 1**: Reports and analytics (`show March expenses`)
- **Branch 2**: Transaction logging (`spent 50 on coffee`)  
- **Branch 3**: General financial chat (`how can I save money?`)

### Advanced Reporting
Generate instant reports by messaging:
- `today's report` → Daily income/expense summary
- `March vs April report` → Monthly comparisons with percentages
- `show groceries spending` → Category-specific analysis
- Automatic daily summaries at your preferred time

### Database Integration
All transactions are stored in PostgreSQL with proper schema:
```sql
CREATE TABLE financial_transactions (
 date DATE NOT NULL,
 category TEXT NOT NULL, 
 type TEXT NOT NULL,
 amount NUMERIC(12,2) NOT NULL,
 person TEXT
);
```

## Setup

## Prerequisites

- **n8n instance** (self-hosted or n8n.cloud)
- **WhatsApp Business Cloud API** credentials
- **PostgreSQL database** (version 12+)
- **OpenRouter API key** for AI processing

## Quick Setup Steps

1. **Import the workflow** template into your n8n instance
2. **Configure credentials**:
  - WhatsApp Business Cloud API (App Token + Phone Number ID)
  - PostgreSQL connection details
  - OpenRouter API key for AI processing
3. **Create database table** using the provided SQL schema
4. **Test the connection** by sending a sample message
5. **Customize** the scheduled report timing (default: 8 AM daily)

## Verification Checklist

- [ ] WhatsApp webhook receives messages
- [ ] AI correctly parses transaction messages
- [ ] Database insertions work properly
- [ ] Confirmation messages are sent back
- [ ] Reports generate with accurate data

# How to customize this workflow to your needs

## AI Model Configuration

- **Default**: Uses OpenRouter with GPT-3.5-turbo for cost efficiency
- **Upgrade**: Switch to GPT-4 or Claude for better accuracy
- **Local**: Replace with self-hosted Ollama for complete privacy

## Database Options

- **PostgreSQL**: Recommended for production use
- **Google Sheets**: Alternative for simpler setups (nodes included)
- **MySQL/SQLite**: Easily adaptable with minor SQL modifications

## Message Classification

Customize the classification system:
- **0**: Reports (modify SQL queries for different analytics)
- **1**: Transactions (adjust parsing rules for your language/currency)
- **2**: Chat (customize AI responses for financial advice)

## Reporting Customization

- **Scheduled reports**: Change timing, format, and recipients
- **Custom periods**: Add quarterly, yearly, or custom date ranges
- **Categories**: Modify auto-categorization rules for your spending patterns
- **Currency**: Update formatting for your local currency

## Advanced Features

- **Multi-user support**: Add user identification for family/team use
- **Receipt photos**: Extend workflow to process image receipts via OCR
- **Budgets**: Add budget tracking and overspend alerts
- **Integrations**: Connect to banks via Plaid or other financial APIs

# Complete Package Included

When you download this template, you get everything needed for immediate implementation:

## Ready-to-Use n8n Workflow

- **Fully configured nodes** with descriptive names explaining each step
- **Color-coded sticky notes** throughout the workflow explaining:
 - What each branch does (Reports/Transactions/Chat)
 - How the AI classification works
 - Database connection requirements
 - Error handling and troubleshooting tips

## Comprehensive Documentation Bundle

- **Quick Start Guide**: Get running in under 10 minutes
- **Detailed Setup Guide**: Complete configuration walkthrough with screenshots
- **Branch Explanation Guide**: Deep dive into each processing branch:
 - **Branch 0**: Reports & Analytics - SQL queries and formatting
 - **Branch 1**: Transaction Processing - AI parsing and database insertion
 - **Branch 2**: Financial Chat - AI responses and conversation handling

## Built-in Workflow Documentation

- **Sticky notes at every major step** explaining the logic
- **Node descriptions** that clarify what each component does
- **Visual flow indicators** showing message routing paths
- **Dependency callouts** highlighting required credentials and connections

## Technical Implementation Details

- **Database schema** with complete SQL commands
- **API configuration examples** for all external services
- **Troubleshooting checklist** for common setup issues
- **Performance optimization** recommendations

## Bonus Resources

- **Example message templates** to test each workflow branch
- **Sample data** for testing reports and analytics
- **Customization recipes** for common modifications
- **Integration patterns** for extending functionality

# Example Usage

## Log Expenses:

- `Spent 1200 on rent this month`
- `Paid 45 for gas at Shell`
- `Coffee 5.50 at Starbucks`

## Log Income:

- `Received 5000 salary from Company ABC`
- `Freelance payment 800 from Client XYZ`

## Generate Reports:

- `today's summary`
- `show this week's expenses`
- `compare March vs April spending`
- `how much on food this month?`

## Expected Responses:
✅ Logged: expense | Rent | ₹1,200.00 | Landlord
✅ Logged: income | salary |₹12,000.00|company

📊 Today's Summary:
Income: ₹0.00
Expenses: ₹1,245.50  
Savings: -₹1,245.50

📈 March vs April:
Expenses: ₹15,000 vs ₹12,500 (-16.7%)
Top categories: Rent, Food, Transport

## 🔗 Nodes Used

Postgres, WhatsApp Business Cloud, Schedule Trigger, AI Agent, Structured Output Parser, Calculator

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
