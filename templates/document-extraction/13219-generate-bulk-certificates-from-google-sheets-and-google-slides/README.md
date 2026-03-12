# 🔬 Generate bulk certificates from Google Sheets and Google Slides

> ⚡ **50 views** · 🔬 [Document Extraction & Analysis](../)

## Description

# Bulk certificate generator from Google Sheets and Slides

**Categories:** Productivity, Education, Google, Automation

Automate the creation of personalized certificates, diplomas, or event invitations at scale. This workflow takes a list of recipients from Google Sheets, generates customized PDFs from a Google Slides template, and tracks completion—perfect for course completions, event attendance, or team recognition programs.

## Benefits

- **Save 95% of manual time** - Generate hundreds of certificates in minutes instead of hours of copy-paste work
- **Zero design skills needed** - Create your template once in Google Slides (or download from Canva and import), then let automation handle the rest
- **Built-in tracking** - Automatically marks processed recipients and stores Drive links in your spreadsheet
- **Rate-limit safe** - Includes intelligent delays to respect Google API quotas
- **Clean workspace** - Automatically deletes temporary files after PDF generation

## How It Works

The workflow processes recipients one at a time in a loop:

1. **Read recipients** - Fetches unprocessed rows from your Google Sheet (filtered by "Processed = FALSE")
2. **Copy template** - Creates a temporary copy of your Google Slides template for each recipient
3. **Personalize content** - Replaces placeholders ({{name}}, {{date}}, {{certificateid}}) with actual recipient data
4. **Export to PDF** - Converts the personalized slide to a high-quality PDF
5. **Save to Drive** - Stores the final PDF in your designated Google Drive folder
6. **Update tracker** - Marks the row as processed and adds the Drive link to your sheet
7. **Cleanup** - Deletes the temporary slide copy to avoid clutter
8. **Rate limiting** - Waits 2 seconds before processing the next recipient (prevents API quota issues)

The loop continues until all unprocessed recipients are handled.

## Required Setup

### Google Sheet Structure

Your spreadsheet needs these columns (exact names):

| Column Name | Description | Example |
|------------|-------------|---------|
| `CertificateID` | Unique identifier (used for filename) | CERT-001 |
| `Name` | Recipient's full name | John Smith |
| `Date` | Date to display on certificate | January 15, 2026 |
| `Processed` | Track status (FALSE/TRUE) | FALSE |
| `DriveLink` | Auto-filled with PDF link | (empty initially) |

You can add other columns (email, course name, etc.) for your records—the workflow only uses the ones above.

### Google Slides Template

Create a slide in Google Slides with these placeholders:

- `{{name}}` - Will be replaced with recipient's name
- `{{date}}` - Will be replaced with the date
- `{{certificateid}}` - Will be replaced with the unique ID

**Design tip:** You can design your certificate in Canva, export as PPTX, then upload to Google Slides. This gives you access to Canva's beautiful templates while keeping Google's automation power.

## Business Use Cases

- **Online course creators** - Issue completion certificates to students automatically after they finish a course
- **Event organizers** - Generate personalized attendance certificates for conference or workshop participants
- **HR departments** - Create employee recognition awards, training completion docs, or onboarding materials at scale
- **Educational institutions** - Batch-produce diplomas, achievement awards, or participation certificates
- **Nonprofits** - Generate donor recognition certificates or volunteer appreciation documents
- **Corporate training** - Issue compliance training certificates with unique tracking IDs

## Set Up Steps

### 1. Prepare Your Google Sheet

- Create a new Google Sheet with the required columns (see structure above)
- Fill in recipient data (CertificateID, Name, Date)
- Set all "Processed" values to `FALSE`
- Leave "DriveLink" column empty

### 2. Create Your Slides Template

- Design a certificate/diploma/invitation in Google Slides
- Use text placeholders: `{{name}}`, `{{date}}`, `{{certificateid}}`
- Note the template's file ID from the URL (the long string after `/presentation/d/`)

**Optional Canva workflow:**
1. Design in Canva using their certificate templates
2. Download as PPTX
3. Upload to Google Slides
4. Add the placeholder text

### 3. Configure the Workflow

Replace placeholder IDs in these nodes:

**"Read Unprocessed Recipients" node:**
- Set your Google Sheet ID

**"Copy Slides Template" node:**
- Replace `YOUR_TEMPLATE_SLIDES_ID` with your template's file ID

**"Save PDF to Drive" node:**
- Set the destination folder ID where PDFs should be saved

**"Mark as Processed" node:**
- Confirm it points to the same Google Sheet

### 4. Set Up Credentials

Add your Google account credentials for:
- Google Sheets (OAuth2)
- Google Drive (OAuth2)  
- Google Slides (OAuth2)

(All three can use the same Google account)

### 5. Test Run

- Click "Test workflow" with 2-3 test recipients
- Verify PDFs are generated correctly
- Check that your Sheet updates with "Processed = TRUE" and Drive links

### 6. Scale to Production

- Add all your recipients to the Sheet
- Execute the workflow
- Monitor progress in the Sheet's "Processed" column

## Troubleshooting

**"Rate limit exceeded" errors:**
- Increase the wait time in "Wait 2s (Rate Limit)" node to 3-5 seconds
- Process in smaller batches (50-100 at a time)

**Placeholders not replacing:**
- Ensure exact match: `{{name}}` not `{{ name }}` (no spaces)
- Check placeholder text is plain text, not inside text boxes or grouped objects

**PDFs not saving:**
- Verify the destination folder ID is correct
- Ensure your Google account has write permissions to that folder

**Sheet not updating:**
- Confirm "CertificateID" column exists and has unique values
- Check that the "Processed" column is formatted as plain text (not checkbox)

## Important Notes

- **API quotas:** Google Slides API has daily limits. For &gt;500 certificates, consider splitting across multiple days or upgrading to Google Workspace
- **File cleanup:** The workflow deletes temporary slide copies—do NOT delete this node or you'll fill your Drive with copies
- **Unique IDs:** CertificateID must be unique for each recipient (used for matching and filename)
- **Template preservation:** Your original Slides template is never modified—only copies are created

**Difficulty Level:** Intermediate  
**Estimated Build Time:** 30-45 minutes (including template design)  
**Monthly Operating Cost:** $0 (uses Google's free tier APIs for reasonable volumes)

## Customization Ideas

- Add more placeholder fields (course name, instructor signature, expiration date)
- Send certificates via email using the Gmail node after PDF generation
- Generate QR codes with the certificate ID for verification
- Create a public verification page using the certificate IDs
- Use AI to auto-generate personalized messages for each recipient

---

*Built with ❤️ for educators, event organizers, and anyone who needs to issue bulk certificates without the manual tedium.*

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
