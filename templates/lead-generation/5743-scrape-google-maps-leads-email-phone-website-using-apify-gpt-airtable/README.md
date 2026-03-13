# 🎣 Scrape Google Maps leads (email, phone, website) using Apify + GPT + Airtable

> ⚡ **5,449 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

### Who is it for?

This workflow is for **marketers, sales teams, and local businesses** who want to quickly collect leads (business name, phone, website, and email) from Google Maps and store them in Airtable.

You can use it for **real estate agents, restaurants, therapists, or any local niche**.

If you need a **professional automation agency** to build advanced lead generation systems like this, check out [Vision IA's n8n automation services](https://visionia.io/agence-n8n).


---

## How it works

1. **Scrape Google Maps** with [Apify Google Maps Extractor](https://apify.com/compass/google-maps-extractor).
2. **Clean and structure the data** (name, address, phone, website).
3. **Visit each website** and retrieve the raw HTML.
4. **Use GPT** to extract the most relevant email from the site content.
5. **Save everything to Airtable** for easy filtering and future outreach.

It works for **any location or keyword** – just adapt the input in Apify.

---

## Requirements

Before running this workflow, you’ll need:

- ✅ **Apify account** (to use the Google Maps Extractor)
- ✅ **OpenAI API key** (for GPT email extraction)
- ✅ **Airtable account & base** with the following fields:
  - `Business Name`
  - `Address`
  - `Website`
  - `Phone Number`
  - `Email`
  - `Google Maps URL`

---

## Airtable Structure

Your Airtable base should contain these columns:

## Airtable Structure

| Title                   | Street                  | Website            | Phone Number    | Email                  | URL                  |
|-------------------------|-------------------------|--------------------|-----------------|------------------------|----------------------|
| Paris Real Estate Agency| 10 Rue de Rivoli, Paris | https://agency.fr  | +33 1 23 45 67  | contact@agency.fr      | maps.google.com/...  |
| Example Business 2      | 25 Avenue de l’Opéra    | https://example.fr | +33 1 98 76 54  | info@example.fr        | maps.google.com/...  |
| Example Business 3      | 8 Boulevard Haussmann   | https://demo.fr    | +33 1 11 22 33  | contact@demo.fr        | maps.google.com/...  |


---

## Error Handling

- **Missing websites:** If a business has no website, the flow skips the scraping step.
- **No email found:** GPT returns `Null` if no email is detected.
- **API rate limits:** Add a `Wait` node between requests to avoid Apify/OpenAI throttling.

![baptistefortleadslocalgooglemapsn8n.png](fileId:1692)

Now let’s take a detailed look at how to set up this automation, using real estate agencies in Paris as an example.

## Step 1 – Launch the Google Maps Scraper

Start with a When clicking Execute workflow trigger to launch the flow manually.

Then, **add an HTTP Request** node with the method set to POST.

👉 Head over to Apify: Google Maps Extractor

![baptistefortrecupererleadsn8ngooglemaps.png](fileId:1695)

On the page: [https://apify.com/compass/google-maps-extractor](https://apify.com/compass/google-maps-extractor)

Enter your business keyword (e.g., real estate agency, hairdresser, restaurant)

Set the location you want to target (e.g., Paris, France)

Choose how many results to fetch (e.g., 50)

Optionally, use filters (only places with a website, by category, etc.)

⚠️ No matter your industry, this works — just adapt the keyword and location.

Once everything is filled in:

Click Run to test.

Then, go to the top right → click on API.

Select the API endpoints tab.

Choose Run Actor synchronously and get dataset items.

![baptistefortscrapergooglemapsn8nleads.png](fileId:1701)

Copy the URL and paste it into your HTTP Request (in the URL field).

Then enable:

✅ Body Content Type → JSON
✅ Specify Body Using JSON`

Go back to Apify, click on the JSON tab, copy the entire code, and paste it into the JSON body field of your HTTP Request.

![baptistefortn8nemailtelephonegooglemaps.png](fileId:1694)

At this point, if you run your workflow, you should see a structured output similar to this:

title  
subTitle  
price  
categoryName  
address  
neighborhood  
street  
city  
postalCode
........

## Step 2 – Clean and structure the data

![baptistefortworkflowleadsn8n.png](fileId:1698)

Once the raw data is fetched from Apify, we clean it up using the Edit Fields node.

In this step, we manually select and rename the fields we want to keep:

Title → {{ $json.title }}

Address → {{ $json.address }}

Website → {{ $json.website }}

Phone → {{ $json.phone }}

URL → {{ $json.url }}*

This node lets us keep only the essentials in a clean format, ready for the next steps.
On the right: a clear and usable table, easy to work with.

## Step 3 – Loop Over Items

![baptistefortleadsgooglemapsn8n.png](fileId:1702)

Now that our data is clean (see step 2), we’ll go through it item by item to handle each contact individually.

The Loop Over Items node does exactly that:

it takes each row from the table (each contact pulled from Apify) and runs the next steps on them, one by one.

👉 Just set a Batch Size of 20 (or more, depending on your needs).

Nothing tricky here, but this step is essential to keep the flow dynamic and scalable.

## Step 4 – Edit Field (again)

![workflowleadsgooglen8nbaptistefort.png](fileId:1697)

After looping through each contact one by one (thanks to Loop Over Items), we're refining the data a bit more.

This time, we only want to keep the website.

We use the Edit Fields node again, in Manual Mapping mode, with just:

Website → {{ $json.website }}

The result on the right? A clean list with only the URLs extracted from Google Maps.

🔧 This simple step helps isolate the websites so we can scrape them one by one in the next part of the flow.

## Step 5 – Scrape Each Website with an HTTP Request

![n8nautomationbaptistefortgooglemaps.png](fileId:1700)

Let’s continue the flow: in the previous step, we isolated the websites into a clean list. Now, we’re going to send a request to each URL to fetch the content of the site.

➡️ To do this, we add an HTTP Request node, using the GET method, and set the URL as:

{{ $json.website }} This value comes from the previous Edit Fields input

This node will simply “visit” each website automatically and return the raw HTML code (as shown on the right).

📄 That’s the material we’ll use in the next step to extract email addresses (and any other useful info).

We’re not reading this code manually — we’ll scan through it line by line to detect patterns that matter to us.

This is a technical but crucial step: it’s how we turn a URL into real, usable data. 

## Step 6 – Extract the Email with GPT

![workflown8nleadssecteurbaptistefort.png](fileId:1699)

Now that we've retrieved all the raw HTML from the websites using the HTTP Request node, it's time to analyze it.

💡 Goal: detect the most relevant email address on each site (ideally the main contact or owner).

👉 To do that, we’ll use an OpenAI node (Message a Model). Here’s how to configure it:

⚙️ Key Parameters:
Model: GPT-4-1-MINI (or any GPT-4+ model available)

Operation: Message a Model

Resource: Text

Simplify Output: ON

**Prompt (message you provide):**

Look at this website content and extract only the email I can contact this business. In your output, provide only the email and nothing else. Ideally, this email should be of the business owner, so if you have 2 or more options, try for most authoritative one. If you don't find any email, output 'Null'.

Exemplary output of yours:

name@examplewebsite.com

{{ $json.data }} 

## Step 7 – Save the Data in Airtable

![leadslocauxn8ngooglebaptistefort.png](fileId:1693)

Once we’ve collected everything — the business name, address, phone number, website… 

and most importantly the email extracted via ChatGPT — we need to store all of this somewhere clean and organized.

👉 The best place in this workflow is Airtable.

📦 Why Airtable?
Because it allows you to:

Easily view and sort the leads you've scraped

Filter, tag, or enrich them later

And most importantly… reuse them in future automations

⚙️ What we're doing here
We add an Airtable → Create Record node to insert each lead into our database.

Inside this node, we manually map each field with the data collected in the previous steps:

![baptistefortn8nrecupererleadslocaux.png](fileId:1696)

| Airtable Field | Description              | Value from n8n                             |
| -------------- | ------------------------ | ------------------------------------------ |
| `Title`        | Business name            | `{{ $('Edit Fields').item.json.Title }}`   |
| `Street`       | Full address             | `{{ $('Edit Fields').item.json.Address }}` |
| `Website`      | Website URL              | `{{ $('Edit Fields').item.json.Website }}` |
| `Phone Number` | Business phone number    | `{{ $('Edit Fields').item.json.Phone }}`   |
| `Email`        | Email found by ChatGPT   | `{{ $json.message.content }}`              |
| `URL`          | Google Maps listing link | `{{ $('Edit Fields').item.json.URL }}`     |

🧠 Reminder: we’re keeping only clean, usable data — ready to be exported, analyzed, or used in cold outreach campaigns (email, CRM, enrichment, etc.).

➡️ And the best part? You can rerun this workflow automatically every week or month to keep collecting fresh leads 🔁.

## Need Help Building an Automated Lead Generation System?

This workflow is a solid foundation for **scraping Google Maps and extracting contact emails automatically**. If you want to go further with **AI-powered lead qualification, multi-channel outreach, and automatic follow-ups**, our agency builds custom lead generation systems that run 24/7.

👉 **Explore our lead generation automation services**: [Vision IA – Automated Lead Generation Agency](https://visionia.io/agence-automatisation-generation-leads)

We help B2B companies and agencies scale their prospecting without hiring more people—everything from data collection to booking qualified meetings happens on autopilot.

Questions about this workflow or other automation solutions? Visit [Vision IA](https://visionia.io/) or reach out for a free consultation.

## 🔗 Nodes Used

Airtable, HTTP Request, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
