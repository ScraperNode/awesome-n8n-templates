# 🎬 Rewrite web content with exact character counts using GPT-4.1 and Google Sheets

> ⚡ **27 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Description

An AI-powered content rewriter that maintains exact character counts line-by-line while rewriting web pages for SEO. Fetches reference URL content, preserves layout-critical formatting, and logs detailed comparisons to Google Sheets—perfect for agencies rewriting competitor content while maintaining design consistency.

---

## What this workflow does

This workflow solves a unique SEO challenge: rewriting web content while preserving exact character counts on every single line. When you need to rewrite a competitor's page or update your own content without breaking the layout, this automation fetches the reference URL, converts it to Markdown, and uses GPT-4.1 to rewrite marketing text, headings, and CTAs while maintaining the exact same character count as the original—down to the letter. The AI intelligently decides what to keep unchanged (form labels), what to skip entirely (URLs, footers), and what to rewrite (marketing content). A second AI agent then compares the original and rewritten versions line-by-line, verifying character counts and logging everything to Google Sheets for quality control.

Perfect for SEO agencies, content teams, and web developers who need to rewrite content without disturbing page layouts, CSS styling, or design templates that depend on specific text lengths.

---

## Key features

**Exact character count preservation:** Every rewritten line matches the original's character count precisely—no approximations, no +/- 1 character deviations. If the original has 47 characters, the rewrite will have exactly 47 characters.

**Smart content classification:** The AI automatically categorizes each line into three actions: KEEP (form labels like Name, Email, Phone remain unchanged), SKIP (URLs and footers excluded entirely from output), or REWRITE (marketing content, headings, CTAs rewritten with exact length).

**Line-by-line comparison analysis:** A second AI agent compares original vs. rewritten content, creates structured JSON showing each change, verifies character and word counts match, and flags any discrepancies.

**Google Sheets quality tracking:** All comparisons logged to Google Sheets with columns for Old Text, AI Suggested Text, Old Text Length, and AI Suggested Text Length—enabling manual review and quality control.

**Layout-safe rewriting:** Preserves Markdown structure, maintains spacing, keeps technical elements intact—ensures the rewritten content fits perfectly into existing page designs and CSS frameworks.

**Form-based workflow:** Simple form interface with Client ID, Service Page Keyword, Instructions, and Reference URL—no coding needed to submit rewrite requests.

**Dual GPT-4.1 agents:** Uses two independent AI agents (rewriter and comparator) with GPT-4.1 for maximum accuracy and quality verification at every step.

---

## How it works

### 1. Submit rewriting request via form
User fills a simple form with:
- **Client ID:** Project identifier for tracking
- **Service Page Keyword:** Target SEO keyword (optional)
- **Instruction:** Specific rewriting guidance (e.g., "make it more professional")
- **Reference URL:** The webpage to fetch and rewrite

### 2. Fetch reference webpage content
The workflow sends an HTTP POST request to the provided URL and retrieves the complete HTML source code of the page.

### 3. Convert HTML to Markdown
The HTML is converted to clean Markdown format, removing unnecessary tags while preserving structure, headings, lists, and text content. This makes it easier for the AI to process line-by-line.

### 4. AI rewrites content with exact character matching
The first AI Agent (powered by GPT-4.1) receives the Markdown content and processes it with **ULTRA-STRICT** rules:

**Character counting rules:**
- Counts everything: letters, spaces, numbers, symbols, punctuation
- Spaces are characters
- Line breaks don't count
- Case doesn't affect count

**Decision logic for each line:**
- **KEEP AS-IS:** Simple form labels (Name, Email, Phone, Message), generic system messages, technical single words
- **SKIP COMPLETELY:** All URLs (https://, http://, www.), all footers (copyright, legal links, disclaimers), navigation URLs, image paths
- **MUST REWRITE:** Headings, marketing text, CTAs, service descriptions, menu items

**Character-matching techniques:**
- Too short → Add words, expand contractions
- Too long → Use shorter synonyms, use contractions
- Exact match → Swap equal-length words

**Verification checklist:**
- Every rewritten line matches original character count
- All simple labels kept exactly
- All URLs skipped
- All footers skipped (no rewrite or modification)
- Markdown structure preserved

If even 1 line has mismatched characters, the AI retries until it's perfect.

### 5. Compare original vs. rewritten content
A second AI Agent (also GPT-4.1) compares the original Markdown input with the rewritten output:
- Breaks down both texts into individual sentences or meaningful phrases
- Matches each line from original with its corresponding rewritten version
- Verifies character and word counts match for each pair
- Notes any skipped content (URLs, footers) with markers like "[SKIPPED - Footer/URL]"
- Outputs structured JSON with comparison array

### 6. Parse comparison to structured format
The Structured Output Parser ensures the comparison JSON is valid and properly formatted:
```json
{
  "comparisons": [
    {
      "old_text": "exact sentence from original",
      "ai_suggested_text": "corresponding sentence from rewritten version",
      "Old_text_count": "47",
      "ai_suggested_text_Count": "47"
    }
  ]
}
```

### 7. Split comparison into individual rows
The Split Out node takes the comparisons array and creates a separate item for each comparison, preparing it for Google Sheets insertion.

### 8. Log comparison to Google Sheets
Each comparison is written to Google Sheets as a new row with columns:
- **Old Text:** Original line
- **AI Suggested Text:** Rewritten line
- **Old Text Length:** Character count of original
- **AI Suggested Text Length:** Character count of rewritten

This creates a complete audit trail for manual review and quality verification.

---

## Setup requirements

**Tools you'll need:**

- Active n8n instance (self-hosted or n8n Cloud)
- Google Sheets with OAuth access for comparison tracking
- OpenAI API key (GPT-4.1 and GPT-4o-mini access)
- Target website URL to rewrite

**Estimated setup time:** 20–25 minutes

---

## Configuration steps

### 1. Connect Google Sheets
- In n8n: **Credentials → Add credential → Google Sheets OAuth2 API**
- Complete OAuth authentication
- Create a tracking Google Sheet with columns:
  - **Old Text**
  - **AI Suggested Text**
  - **Old Text Length**
  - **AI Suggested Text Length**
- Open **"Log Comparison to Google Sheets"** node
- Select your Google Sheet and correct sheet tab
- Verify column mapping matches your sheet structure

### 2. Add OpenAI API credentials
- Get API key: https://platform.openai.com/api-keys
- In n8n: **Credentials → Add credential → OpenAI API**
- Paste your API key
- Configure three OpenAI Chat Model nodes:
  - **"OpenAI GPT-4.1 Rewriting Model":** Set to gpt-4.1, timeout 100000ms
  - **"OpenAI GPT-4.1 Comparison Model":** Set to gpt-4.1, timeout 100000ms
  - **"OpenAI GPT-4o-mini Parser Model":** Set to gpt-4o-mini
- Verify all three nodes use your OpenAI credential

### 3. Copy form URL
- Open **"Submit Content Rewriting Request"** node
- Copy the **Form URL**
- Share this URL with your team or clients for submitting rewrite requests

### 4. Customize AI rewriting rules (optional)
Open **"Rewrite Content with Exact Character Count"** node and edit the system message to:
- Add more content types to KEEP unchanged
- Define additional SKIP rules (e.g., specific footer patterns)
- Adjust rewriting tone (formal, casual, technical)
- Modify character-matching techniques

### 5. Test the workflow
- Activate the workflow (toggle to **Active**)
- Open the form URL
- Fill in test data:
  - Client ID: TEST_001
  - Service Page Keyword: SEO services
  - Instruction: Make it more professional
  - Reference URL: https://example.com
- Submit the form
- Wait 1-3 minutes for processing (depends on content length)
- Check Google Sheets for comparison results
- Verify:
  - All rewritten lines have matching character counts
  - URLs and footers are skipped
  - Form labels remain unchanged
  - Marketing content is rewritten

### 6. Review and refine
- Open your Google Sheets comparison log
- Review the Old Text vs. AI Suggested Text columns
- Check character count columns match
- If any lines failed validation, review the AI's decision logic
- Adjust the system prompt if needed for your specific use case

---

## Use cases

**SEO agencies rewriting competitor content:** Analyze top-ranking competitor pages and rewrite them for your clients while preserving the exact layout that works. Character-count matching ensures the rewritten content fits perfectly into the same design templates.

**Web designers updating legacy sites:** Modernize old website copy without breaking existing CSS layouts that depend on specific text lengths. Maintain pixel-perfect designs while refreshing the message.

**Content teams A/B testing variations:** Create multiple versions of the same page with different wording but identical character counts. Test messaging changes without layout shifts affecting results.

**Translation agencies adapting content:** When translating from one language to another requires matching specific character limits (billboards, app interfaces, fixed-width layouts), this workflow helps maintain constraints.

**E-commerce product descriptions:** Rewrite product copy for different brands or markets while keeping descriptions at exact character counts required by platform templates or PIM systems.

**Landing page optimization:** Test different headlines, CTAs, and value propositions while ensuring each variation maintains the original's character count—preventing layout breaks on mobile or desktop.

---

## Customization options

### Adjust character count strictness
If your use case allows minor variations (+/- 2-3 characters), edit the rewriting agent's system message:
- Change "EXACT SAME CHARACTER COUNT" to "within 3 characters"
- Update verification rules to accept small deviations
- Modify the comparison agent to flag only major discrepancies

### Add more content types to KEEP
In the rewriting agent system message, expand the "KEEP AS-IS" list:
- Company names
- Product names
- Legal disclaimers
- Technical specifications
- Date formats

### Change output format
Instead of Google Sheets, route comparison data to:
- **Notion database** (via HTTP Request to Notion API)
- **Airtable** (via Airtable node)
- **Email report** (via Email node with HTML table)
- **Slack notification** (via Slack node with formatted message)

### Add batch processing
Modify the form to accept multiple URLs at once:
- Add a Text Area field for URL list (one per line)
- Insert a Split Out node after form submission
- Loop through each URL sequentially
- Aggregate all comparisons into a single Google Sheet

### Implement approval workflow
Add human review before finalizing rewrites:
- After comparison analysis, send results to project manager via email
- Include approve/reject buttons (using n8n Webhook URLs)
- Only log approved rewrites to final Google Sheet
- Store rejected versions in a separate "Needs Revision" sheet

---

## Troubleshooting

### Character counts don't match
- **AI struggling with specific lines:** Some sentences are difficult to rewrite at exact length. Check the Google Sheets log to identify which lines failed. Manual rewrite may be needed for complex technical content.
- **Special characters counted wrong:** Ensure the AI is counting all special characters, emojis, and Unicode symbols. Edit the system prompt to emphasize counting everything.
- **Markdown formatting interfering:** Markdown syntax (**, ##, etc.) shouldn't be counted as characters. Verify the AI understands to count only visible text.

### URLs or footers appearing in rewritten output
- **SKIP rules not working:** The AI didn't recognize a URL or footer pattern. Edit the system prompt to add specific patterns to the SKIP list (e.g., "Privacy Policy", "Terms of Service").
- **Footer detection failed:** Some footers don't have obvious markers. Add keyword patterns to the SKIP rules (e.g., "© 2024", "All rights reserved").

### Comparison agent fails to parse output
- **Invalid JSON format:** The comparison agent must output pure JSON with no markdown. Check the "Compare Original vs Rewritten Content" node's system message emphasizes "Output ONLY the JSON object—no markdown, no extra text."
- **Structured parser timeout:** Large content with 100+ comparison pairs may exceed timeout. Increase timeout in "OpenAI GPT-4o-mini Parser Model" node or split content into smaller chunks.

### Google Sheets not updating
- **OAuth expired:** Re-authenticate Google Sheets credentials in n8n.
- **Sheet permissions:** Verify the connected Google account has edit access.
- **Column names mismatch:** Ensure sheet column headers exactly match the node mapping (case-sensitive).
- **Row limit reached:** Google Sheets has a 10 million cell limit. Create a new sheet if approaching limits.

### Rewriting takes too long
- **Timeout errors:** Large webpages (10,000+ words) may exceed the 100-second timeout. Increase timeout in both GPT-4.1 model nodes or split content into sections.
- **OpenAI API rate limits:** If processing many requests simultaneously, you may hit rate limits. Add a delay between submissions or upgrade OpenAI plan.

### Form labels being rewritten incorrectly
- **AI not recognizing labels:** Add specific examples to the KEEP list in the system prompt (e.g., "Full Name", "Phone Number", "Email Address").
- **Context confusion:** If form labels are embedded in marketing text, the AI may rewrite them. Improve the prompt to emphasize preserving all form-related text.

---

## Resources

- [n8n documentation](https://docs.n8n.io/)
- [OpenAI GPT-4 API](https://platform.openai.com/docs/models/gpt-4)
- [Google Sheets API](https://developers.google.com/sheets/api)
- [Markdown specification](https://www.markdownguide.org/)
- [n8n Form Trigger](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.formtrigger/)
- [n8n Structured Output Parser](https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.outputparserstructured/)

---

## Support

Need help or custom development?

📧 Email: [info@isawow.com](info@isawow.com)  
🌐 Website: [https://isawow.com/](https://isawow.com/)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Markdown, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
