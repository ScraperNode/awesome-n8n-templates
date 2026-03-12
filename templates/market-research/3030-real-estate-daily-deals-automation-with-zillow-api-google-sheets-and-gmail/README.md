# 📊 Real estate daily deals automation with Zillow API, Google Sheets and Gmail

> ⚡ **2,633 views** · 📊 [Market Research & Insights](../)

## Description

## Daily Real Estate Deal Finder Automation


This automation is aimed to send you daily deals via email every morning at 9AM in real estate markets you are interested in with strict search criteria you provide. It uses ZillowAPI to get up to date listings and RentZestimates. From there it calculates a host of investing metrics such as your Down PMT, Cash on Cash ROI, Monthly Cash Flow, Monthly Maintenance and Vacancy Loss.

## Prerequisites
- N8N account
- Google account with OAuth setup here's a video for help: https://youtu.be/LTuy83t_Rt4?si=0XdpxM7G48gtFDe6
- Google Sheets API enabled
- RapidAPI account with Zillow API credentials 
- Blank Google Sheet created with specific columns

## Step 1: Create a New Workflow
- Create a new workflow in N8N
- Name it something meaningful like "Daily Real Estate Deal Finder"
-  Credentials you will need: Google OAuth credentials (here's a video for help: https://www.youtube.com/watch?v=LTuy83t_Rt4&t=22s) Google sheets API enabled, RapidAPI Zillow credentials


## Step 2: Configure Search Parameters in Set Parameters Node
- Define your real estate search criteria as key-value pairs: Example location: "Austin, TX" min_bed: 2 min_bath: 2, min_price: 250000, max_price: 400000, propertyType: "Single Family= True"

## Step 3: Update Google Sheet
- Create a new Google Sheets
- Create the following columns Address, Price, Rent Zestimate, Cash onCash RoI, Monthly CashFlow and Down Pmt
- Make sure your google sheets node in N8N is mapping to the correct columns and the correct sheet

## Troubleshooting Tips
- If Zillow API fails, check your API credentials and request limits
- For calculation errors, verify your formulas in the Code node
- If Google Sheets node fails, ensure proper column mapping
- Always test with a small data set before running in production
- Happy Investing please let me know if you have any questions or trouble

This workflow will now automatically search for real estate deals matching your criteria, calculate investment metrics, update your tracking spreadsheet, and email you a summary each morning. Here is the entire step by step tutorial to set this up: https://www.youtube.com/watch?v=OSeLeKc375Y&t=6s

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
