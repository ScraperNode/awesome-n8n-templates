# 📊 High-level service page SEO blueprint report generator

> ⚡ **10,321 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.

## Description

## Introduction
The "High-Level Service Page SEO Blueprint Report" workflow is a powerful, AI-driven solution designed to generate comprehensive SEO content strategies for service-based businesses.

By analyzing competitor websites and user intent, this workflow creates a detailed blueprint that outlines the optimal structure, content, and conversion elements for a service page. The workflow leverages the JINA Reader API to extract content from competitor websites and uses Google Gemini AI to perform deep analysis across multiple dimensions: competitor content structure, user intent, strategic opportunities, and conversion optimization.

The final output is a professionally formatted Markdown document that provides actionable guidance for creating a high-performing service page that satisfies both user needs and search engine requirements. This workflow eliminates the time-consuming process of manually analyzing competitors and developing content strategies, providing a data-driven foundation for service page creation that would typically require hours of expert analysis.

## Who is this for?
This workflow is designed for digital marketers, SEO specialists, content strategists, and web developers who need to create or optimize service pages for businesses. It's particularly valuable for marketing agencies and freelancers who regularly develop content strategies for clients across various industries. 

Users should have a basic understanding of SEO concepts, content marketing, and website structure. While technical SEO knowledge is beneficial, the workflow is designed to provide comprehensive guidance even for those with intermediate-level expertise. 

The ideal user is someone who wants to streamline their content planning process and ensure their service pages are built on data-driven insights rather than guesswork.

## What problem is this workflow solving?
Creating effective service pages that rank well in search engines while converting visitors is a complex challenge that typically requires extensive competitive research, content planning, and conversion optimization expertise. This workflow addresses several key pain points:

1. **Time-consuming competitor analysis**: Manually analyzing multiple competitor websites to identify content patterns, heading structures, and meta tag strategies can take hours.

2. **Difficulty identifying content gaps**: Determining what topics competitors are missing that could provide a competitive advantage requires deep analysis and industry knowledge.

3. **Balancing SEO and conversion elements**: Creating content that satisfies both search engines and user needs while driving conversions is a delicate balance that many struggle to achieve.

4. **Lack of structured approach**: Many content creators work without a comprehensive blueprint, leading to inconsistent results and missed opportunities.

5. **Difficulty translating analysis into actionable recommendations**: Even when analysis is performed, turning those insights into a concrete content plan can be challenging.

This workflow automates these processes, providing a structured, data-driven approach to service page creation that saves hours of research and planning time.

## What this workflow does
### Overview
The workflow takes a list of competitor URLs and a target keyword as input, then performs a multi-stage analysis to generate a comprehensive service page blueprint. It extracts and analyzes competitor content, evaluates user intent, identifies strategic opportunities, and creates detailed recommendations for page structure, content, and conversion elements. 

The final output is a professionally formatted Markdown document that serves as a complete roadmap for creating an effective service page.

### Process
1. **Data Collection**: The workflow begins with a form that collects essential information: competitor URLs, target keyword, services offered, brand name, and whether the page is a homepage.

2. **Competitor Content Extraction**: The workflow processes each competitor URL, using the JINA Reader API to extract the HTML content from each site.

3. **Content Structure Analysis**: For each competitor site, the workflow extracts and analyzes heading structures, meta tags, schema markup, and recurring phrases (n-grams).

4. **Competitor Analysis Report**: The AI synthesizes the competitive data to identify patterns in meta titles/descriptions, common outline sections, key heading concepts, and structural elements.

5. **User Intent Analysis**: The workflow analyzes the target keyword to determine primary and secondary user intents, user personas, and their position in the buyer's journey.

6. **Gap Analysis**: The AI identifies content overlaps ("table stakes"), content gaps (opportunities), SEO keyword priorities, and potential UX/conversion advantages.

7. **Page Outline Generation**: Based on the previous analyses, the workflow creates an optimal page structure with H1, H2s, H3s, and potentially H4s, with justifications for each section.

8. **UX & Conversion Recommendations**: The workflow adds detailed recommendations for calls-to-action, trust signals, copywriting tone, visual elements, and risk reversal strategies.

9. **Final Blueprint Creation**: All analyses and recommendations are compiled into a comprehensive, well-structured Markdown document that serves as a complete service page blueprint.

## Setup
1. Download or import the "High-Level Service Page SEO Blueprint Report" workflow JSON file into your n8n instance.

2. Create a JINA Reader API key by visiting [https://jina.ai/api-dashboard/key-manager](https://jina.ai/api-dashboard/key-manager). You can claim a free API key that allows up to 1 million tokens.

3. Set up Google Gemini (PaLM) credentials by following the guide at [https://docs.n8n.io/integrations/builtin/credentials/googleai/#using-geminipalm-api-key](https://docs.n8n.io/integrations/builtin/credentials/googleai/#using-geminipalm-api-key).

4. Update the "Edit Fields" node with:
   - Your JINA Reader API Key
   - Adjust the "Waiting Time" to 20 seconds if using the free Google Gemini API tier (which limits to 5 requests per minute)
   - Optionally change the Gemini model if needed

5. Activate the workflow and start the form trigger.

6. Complete the form with:
   - Competitors (up to 5 direct competitor URLs)
   - Target Keyword (the query related to your service)
   - Services Offered (details of your complete service offerings)
   - Brand Name (your company name)
   - Whether the page is a homepage

7. After processing, download the generated .txt file, which contains the blueprint in Markdown format.

## How to customize this workflow to your needs
1. **Adjust AI parameters**: Modify the temperature settings in the Google Gemini Chat Model nodes to control creativity vs. precision in the AI outputs.

2. **Customize extraction logic**: Edit the "Extract HTML Elements" code node to focus on specific HTML elements that are most relevant to your industry or content type.

3. **Modify analysis prompts**: Customize the prompts in the various analysis nodes to focus on specific aspects of SEO or content strategy that are most important for your use case.

4. **Add industry-specific guidance**: Enhance the prompts with industry-specific instructions or examples to make the output more relevant to particular sectors.

5. **Integrate with content management systems**: Extend the workflow to automatically send the blueprint to content management systems, project management tools, or document storage platforms.

6. **Add competitor scoring**: Implement a scoring system to evaluate and rank competitors based on specific criteria relevant to your strategy.

7. **Expand the analysis**: Add additional analysis nodes to evaluate other aspects of competitor websites, such as page speed, mobile-friendliness, or backlink profiles.

## 🔗 Nodes Used

HTTP Request, Basic LLM Chain, n8n Form Trigger, Convert to File, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
