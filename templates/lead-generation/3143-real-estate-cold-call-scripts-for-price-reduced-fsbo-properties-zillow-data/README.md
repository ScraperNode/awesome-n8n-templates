# 🎣 Real estate cold call scripts for price reduced FSBO properties (Zillow data)

> ⚡ **1,692 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

# Real Estate Price-Reduced Property Opportunity Guide

## Overview
This comprehensive automation solution targets FSBO properties listed on Zillow that have recently had their price reduced, providing both investment analysis and tailored outreach scripts. The workflow gathers comprehensive market data to analyze local trends for each specific city and incorporates this intelligence into personalized communication strategies (more aggressive in buyers' markets, more value-focused in sellers' markets).

Key benefits:
- Identify motivated homeowners who have recently reduced their property prices
- Prepare data-driven offer strategies based on detailed market conditions
- Develop effective, personalized communication approaches
- Create a consistent, automated workflow to find and capitalize on opportunities

## Requirements
- Airtable account (free tier works)
- n8n automation platform
- OpenAI API key 
- Zillow Rapid API access
- Basic understanding of automation workflows

## Step 1: Set Up Airtable Database
- Create a new Airtable base
- Set up a table with the following fields:
  - Property ID (primary field)
  - Address
  - Price
  - Status (single select field with options: "Contacted" and "Uncontacted")
  - Phone Number
  - Communication Template
  - Market Analysis
  - Offer Price
  - Investment Metrics (Long text field for detailed financial analysis)
  - Expected Cash Flow (Currency field)
  - Expected ROI (Percentage field)
  - Follow-up Date
- Set the default Status to "Uncontacted"
- Generate a Personal Access Token from Airtable settings for API connections

## Step 2: Configure Zillow API Connection
- Set up an HTTP request node in n8n to connect to Zillow's Rapid API
- Configure the search parameters:
  - Listing type: "For Sale By Owner"
  - Location: Your target market
  - Price reduction: true
  - Auction properties: false
- Add filters to:
  - Exclude properties without contact information
  - Only include listings with recent price reductions
  - Filter by minimum square footage or bedrooms if desired
  - Set maximum days since price reduction (e.g., last 14 days)

## Step 3: Market Analysis Workflow
Our market analysis engine processes Zillow market data to provide strategic insights for each location:

- **Comprehensive Market Indicators**:
  - Current inventory levels and new listing rates
  - Median list price and sale price comparison
  - Days-to-pending metrics (current and historical)
  - Sale-to-list price ratios
  - Percentage of properties selling above/below list price

- **Market Trend Analysis**:
  - 6-month and year-over-year comparative trends
  - Market trend scoring system (-10 to +10 scale)
  - Market cycle position identification (Early, Mid, Late)
  - Seasonal market pattern recognition

- **Strategic Investment Guidance**:
  - Market type classification (Buyer's, Balanced, Seller's)
  - Negotiation power assessment
  - Market timing recommendations
  - Risk evaluation (Low to High scale)
  - Actionable investment strategies based on current conditions

This analysis is transformed into actionable advice that directs your negotiation approach and helps you calibrate offers appropriately for market conditions.

## Step 4: Calculate Investment Metrics
Our investment calculator analyzes each Zillow property and its RentZestimate to provide comprehensive financial projections:

- **Purchase & Financing Analysis**:
  - Purchase price and standard acquisition costs (20% down payment, 3% closing costs)
  - Loan amount and monthly mortgage payment (30-year term)
  - Total initial investment calculation

- **Monthly Expense Projections**:
  - Property tax (2% of property value annually)
  - Insurance (0.5% of property value annually)
  - Maintenance reserves (1% of property value annually)
  - Vacancy allowance (8% of rental income)
  - Total monthly expense calculation

- **Rental Income & Returns**:
  - RentZestimate integration (with 1% rule fallback when unavailable)
  - Monthly and annual cash flow projections
  - Cash-on-cash ROI calculation
  - Break-even timeline analysis

- **Investment Quality Filtering**:
  - Automatic filtering to show only positive cash flow properties
  - Property identification with complete details (address, beds, baths, sqft)
  - Full investment metrics breakdown for investor decision-making

This calculator ensures you focus only on properties with profit potential, saving you countless hours of manual analysis.

## Step 5: Generate Communication Templates
- Create templates that combine:
  - Property details (address, price, features)
  - Market intelligence from your analysis
  - Investment metrics showing the property's potential
- Configures your templates to include:
  - A professional introduction
  - Reference to the specific property address
  - Mention of the price reduction
  - A strategic cash offer (typically 5-15% below asking)
  - Local market statistics to build credibility
  - A clear call to action (request to visit the property)

## Step 6: Automated Workflow
- Set up the complete n8n workflow to:
  - Check for new listings with price reductions daily
  - Run market analysis on each new property
  - Calculate potential investment returns
  - Generate personalized communication templates
  - Upload data to Airtable
  - Flag properties ready for contact
  - Update status to "Contacted" after outreach

## Troubleshooting
- If outreach isn't being tracked: Check API connections to Airtable
- If market data seems incorrect: Verify Zillow API parameters and location settings
- If offers are too low/high: Adjust your calculation parameters

Step by Step tutorial: 
https://youtu.be/IqVw9CIL254?si=MKE5UY4rD0TOMLPg

By following this guide, you'll have a functional system that can identify opportunities, analyze market conditions, and help you create personalized offers to potential sellers—all while minimizing the manual effort required so you can focus on closing deals.

## 🔗 Nodes Used

Airtable, HTTP Request, Execute Sub-workflow, Execute Workflow Trigger, Summarization Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
