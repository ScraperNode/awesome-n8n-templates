# 📊 Detect offboarded client links on PBN sites with Google Sheets and HTTP

> ⚡ **21 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

Automatically scan every PBN site in your Google Sheet, check if any removed client domain is still linked in the live HTML, and log all matches back into your tracking sheet — row by row, hands-free.

---

## What this workflow does

Managing a network of PBN sites becomes risky the moment a client project gets offboarded. If the old link still exists on a PBN page, it can trigger a Google penalty, waste crawl budget, or simply point to a dead destination. Manually checking each PBN every time a project is removed is slow and error-prone.

This workflow solves that completely. It reads your full PBN list from Google Sheets, skips any site you have already checked, then loops through each remaining PBN one at a time. For every site, it fetches the live HTML using an HTTP request, pulls your current list of offboarded project domains from a separate sheet, and runs a domain-matching check directly against that HTML. If a match is found, the workflow writes the detected domain into the "Offboarded Links" column automatically. It then pauses briefly and moves to the next PBN — no manual work required at any stage.

Perfect for SEO agencies and link builders who manage multiple PBN networks and need a reliable, automatic way to keep their offboarding records up to date.

---

## Key features

**Automatic HTML scanning:** Fetches the live page of every PBN site in real time using HTTP requests, so you are always checking the current version of the page — not a cached or outdated copy.

**Smart row filtering:** Skips all PBN rows that have already been processed. The workflow only picks up rows where the "Offboarded Links" column is still empty, saving time and avoiding duplicate checks.

**Domain matching against offboarded projects:** Pulls the complete list of removed client domains from your "offboard projects" sheet and checks each one against the fetched HTML. If any domain appears anywhere in the page source, it is flagged immediately.

**One-by-one loop with pause:** Processes each PBN individually with a short pause between each iteration. This keeps the workflow stable, avoids rate-limit issues, and makes it easy to monitor progress in real time.

**Auto-update in Google Sheets:** Writes the matched domain directly into your PBNs tracking sheet as soon as it is detected. No copy-paste, no manual entry — your records stay current automatically.

---

## How it works

1. **Trigger the workflow manually** — Click the execute button to start the scan whenever you need to run a check across your PBN network.

2. **Read all PBN sites from Google Sheets** — The workflow pulls every row from the "PBNs" sheet, which contains your site URLs, row numbers, and the "Offboarded Links" column.

3. **Filter out already-processed rows** — A code node scans through all rows and removes any row where "Offboarded Links" is already filled in. Only unprocessed PBNs move forward.

4. **Loop through each PBN one by one** — The remaining rows enter a loop. Each PBN is handled individually, one after the other, to keep the process clean and trackable.

5. **Fetch the live HTML of the PBN site** — An HTTP request node sends a GET call to the PBN's URL and retrieves the full page HTML. Retries are enabled in case of temporary failures.

6. **Read the offboarded project domain list** — A separate Google Sheets node pulls all domains from Column A of the "offboard projects" sheet. This is your master list of removed client websites.

7. **Match domains against the fetched HTML** — A code node compares every domain from the offboarded list against the HTML content. If any domain is found, it is returned as a match. If none are found, the result is set to zero.

8. **Prepare the data for the sheet update** — A Set node organizes the matched domain, the row number, and the HTML into a clean payload that is ready to write back into Google Sheets.

9. **Write the matched domain into the PBNs sheet** — The workflow updates the correct row in the "PBNs" sheet by matching the row number and filling in the "Offboarded Links" column with the detected domain.

10. **Pause before the next iteration** — A short wait is added after each update. This gives the system time to settle and prevents any issues before the loop continues to the next PBN.

---

## Setup requirements

**Tools you will need:**

- Active n8n instance (self-hosted or n8n Cloud)
- Google Sheets with OAuth access for reading and updating PBN data
- A "PBNs" sheet containing your site URLs and tracking columns
- A separate "offboard projects" sheet with removed client domains in Column A

**Estimated setup time:** 10–15 minutes

---

## Configuration steps

**1. Add credentials in n8n:**
- Google Sheets OAuth API — used for reading the PBNs sheet and the offboard projects sheet, and for writing matched results back.

**2. Set up the PBNs sheet:**

Create a Google Sheet with the following columns:
- **Site URL** — The full domain of each PBN site (e.g., example.com)
- **Offboarded Links** — Leave this blank initially. The workflow will auto-fill this column when a match is found.
- **row_number** — A unique number for each row. This is used by the workflow to identify and update the correct row. You can add this manually or use a simple formula.

**3. Set up the offboard projects sheet:**

Create a second sheet (or a new tab) named "offboard projects" with the following structure:
- **Column A** — List every client domain that has been offboarded or removed. Include the full URL format (e.g., https://clientsite.com). The workflow reads this column directly.

**4. Update the Google Sheet URL in the workflow:**
- Open the "Read PBN Sites from Sheet" node and paste your Google Sheet URL.
- Open the "Read Offboarded Project Domains" node and make sure the sheet tab is set to your "offboard projects" sheet.
- Open the "Write Matched Domain to PBNs Sheet" node and confirm it is pointing to the correct PBNs sheet and tab.

**5. Run the workflow:**
- Click the manual trigger to start.
- Watch the loop process each PBN one by one.
- Check your PBNs sheet — any matched offboarded domains will appear in the "Offboarded Links" column automatically.

---

## Use cases

**SEO agencies:** Quickly audit the entire PBN network after a client project is offboarded. Instead of checking 50+ sites manually, run this workflow once and get a complete report in your Google Sheet within minutes.

**Link builders:** Keep your PBN health records accurate at all times. Every time a project is removed, run this workflow to confirm whether any PBN still carries the old link before it causes issues.

**Freelance SEO consultants:** Offer a professional offboarding audit as part of your service. This workflow handles the technical scanning, and you just need to review the results and take action on any flagged links.

**In-house SEO teams:** Automate a task that used to take hours of manual checking. Run the scan on a regular schedule or whenever a project goes offline, and trust that your tracking sheet stays up to date without any extra effort.

---

## Customization options

**Add more domains to check:** Simply add new rows to your "offboard projects" sheet in Column A. The workflow will automatically pick them up the next time it runs — no changes needed inside n8n.

**Run on a schedule instead of manually:** Replace the manual trigger with a Schedule Trigger node. Set it to run daily, weekly, or at any interval that fits your workflow.

**Add error notifications:** Connect a notification node (such as Slack, Email, or Discord) after the loop to alert you when the workflow finishes or when a match is detected. This way you do not need to check the sheet yourself.

**Reset and re-scan:** If you need to re-check all PBN sites from scratch, simply clear the "Offboarded Links" column in your PBNs sheet. The filter node will treat all rows as unprocessed and scan them again on the next run.

---

## Troubleshooting

**HTTP request fails or returns no data:** Check that the PBN site URL in your sheet is correct and the site is currently live. The workflow has retry enabled, but if the site is down or blocked, the request will still fail. You can skip those rows manually or add an error-handling branch.

**No matches found even though a link exists:** Make sure the domain in your "offboard projects" sheet matches exactly what appears in the PBN's HTML. For example, if the HTML contains "www.clientsite.com" but your sheet only has "clientsite.com," the match will still work because the code strips "www." However, double-check for any spelling differences or trailing slashes.

**Offboarded Links column not updating:** Verify that the row_number in your PBNs sheet is correct and unique for each row. The update node uses row_number to find and write to the right row. If row_number is missing or duplicated, the update will fail silently.

**Workflow stops mid-loop:** This can happen if Google Sheets returns a rate-limit error. The pause node helps reduce this, but if it still occurs, increase the wait time in the "Pause Before Next Iteration" node or reduce the batch size.

**Filter skips rows that should be processed:** Check if the "Offboarded Links" column has any hidden spaces or formatting. Even an empty-looking cell with a space character will be treated as filled. Clear those cells completely and run the workflow again.

---

## Important notes

- This workflow is designed to be run manually or on a schedule. It does not trigger automatically when a new project is offboarded — you need to initiate the scan yourself.
- The HTTP request fetches the live HTML of each PBN site. Make sure you have permission or ownership of the sites you are scanning to avoid any access issues.
- The domain matching is based on simple text inclusion in the HTML source. It will detect domains in links, text content, meta tags, or anywhere else they appear on the page. If you need stricter matching (e.g., only in anchor href tags), the code node can be updated accordingly.
- Keep your "offboard projects" sheet updated regularly. The workflow only checks domains that are listed there at the time of the scan.

---
## Support
Need help or custom development?

📧 Email: [info@isawow.com](info@isawow.com)
🌐 Website: [https://isawow.com/](https://isawow.com/)

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
