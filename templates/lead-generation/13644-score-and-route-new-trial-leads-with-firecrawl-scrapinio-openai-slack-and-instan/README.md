# 🎣 Score and route new trial leads with Firecrawl, Scrapin.io, OpenAI, Slack and Instantly

> ⚡ **199 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

# n8n Lead Qualification & Sales Intelligence Workflow (Top of Funnel)

### Overview / Purpose
This workflow automatically processes new free-trial / lead sign-ups in real time:

- Catches a webhook from any source (Webflow form, Intercom, custom agent, etc.)
- Filters out personal / disposable / .edu emails → only business emails continue
- Validates the company website is live
- Scrapes the website with Firecrawl to find the official LinkedIn company page
- Enriches the company via AI Agent (Scrapin.io) → pulls name, follower count, headcount, HQ location, industry, and clean description
- Runs a multi-factor scoring engine (Location + Headcount + Industry)
- Sends a beautiful rich Slack notification to the sales team with score, rating, and quick-action buttons
- Segments the lead by score tier (Very High / High / Mid / Low)
- Checks if the lead already exists in Instantly
- Adds qualified leads to the correct Instantly campaign with first/last name extracted from email

### Core Flow (Step-by-Step)

1. **Webhook** – Trigger (POST /new-lead)
2. **Extract Email Root Domain** – Pulls `@company.com` part
3. **Blacklist Regex Domains** – Blocks all personal, free, and .edu emails
4. **Check Email Not Null** – Safety gate
5. **Check if Website Exists** – HEAD request (continues only on 200-399)
6. **Firecrawl Scrape** – Scrapes homepage looking for LinkedIn URL in footer/links
7. **Extract LinkedIn Url** – Code node that finds and cleans `/company/` URL
8. **Check LinkedIn Not Null + Is Company Page** – Rejects personal profiles
9. **LinkedIn Agent** (AI Agent)
   - Uses Scrapin.io enrichment tool
   - Structured output: company_name, followers, employee_count, headquarters_location, industry, description
10. **Audit LI Results** – Ensures all key fields returned
11. **Sanitize Description** – Cleans Unicode, newlines, caps length for Slack
12. **Normalize Country** – GPT-4.1-nano turns "Sheridan, US" → "United States"
13. **Score Country** – Code node (0–10 points based on market tier)
14. **Score Staff Count** – Code node (0–10 points based on headcount buckets)
15. **Industry Scoring** – Code node (normalizes raw industry + 0–10 points)
16. **Algo Score** – Final score = weighted average → 0–100 + rating label ("Excellent Fit", "Good Fit", etc.)
17. **Send to Slack** – Rich blocks with:
    - Email, Company Name, Location (+score), Staff Count (+score), Followers, Industry (+score)
    - Clean description
    - Final Score + Rating
    - Buttons: Visit LinkedIn + Visit Website
18. **Score-Based Routing**
    - Very High (90–100)
    - High (70–89)
    - Mid (50–69)
    - Low (0–49)
19. **Instantly Checks** – For each tier: search if lead already exists
20. **Extract Name From Email** (GPT) – Turns `john.smith@company.com` → First/Last Name (or "there")
21. **Wait** nodes (optional delay before adding)
22. **Add Lead to Campaign** – Pushes to Instantly with website custom field

### Scoring Logic (Fully Configurable in Code Nodes)

Based on your ICP, narrow down your scoring based on how you want to segment.

### What Makes This Workflow Powerful
- Zero manual work after webhook
- Rich, actionable Slack alerts (sales team loves it)
- Smart scoring that matches real ICP
- Built-in deduplication with Instantly
- Fully modular code nodes (easy to tweak scoring without breaking anything)
- Heavy error handling and safety gates

---

**This is a complete, production-ready, public template.**  
You can import the JSON and it will run immediately after you connect your own:
- Webhook source
- Firecrawl API
- Scrapin.io (or alternative)
- OpenAI
- Slack
- Instantly

Any questions/comments/concerns, please email brandon@topoffunnel.com
Built by Brandon Charleson
https://www.youtube.com/@brandoncharleson
https://www.linkedin.com/in/brandon-charleson 
https://x.com/brandon_ai

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, Execution Data, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
