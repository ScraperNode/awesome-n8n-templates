# 🔬 Classify & extract data from floorplans with Mistral AI OCR & JigsawStack

> ⚡ **246 views** · 🔬 [Document Extraction & Analysis](../)

## Description

<section>
  <h2>🌊 What it Does</h2>
  <p>
    This workflow <strong>automatically classifies uploaded files</strong> (PDFs or images) as
    <span>floorplans</span> or <span>non‑floorplans</span>.  
    It filters out junk files, then analyzes valid floorplans to extract <em>room sizes</em> and <em>measurements</em>.
  </p>

  <h2>👥 Who it’s For</h2>
  <p>
    Built for <strong>real estate platforms, property managers, and automation builders</strong> 
    who need a trustworthy way to detect invalid uploads while quickly turning true floorplans 
    into structured, reusable data.
  </p>

  <h2>⚙️ How it Works</h2>
  <ol>
    <li>User uploads a file (<code>PDF</code>, <code>JPG</code>, <code>PNG</code>, etc.).</li>
    <li>Workflow routes the file based on type for specialized processing.</li>
    <li>A two‑layer quality check is applied using heuristics and AI classification.</li>
    <li>A confidence score determines if the file is a valid floorplan.</li>
    <li>Valid floorplans are passed to a powerful OCR/AI for deep analysis.</li>
    <li>Results are returned as <strong>JSON</strong> and a user-friendly <strong>HTML table</strong>.</li>
  </ol>

  <h2>🧠 The Technology Behind the Demo</h2>
  <p>
    This MVP is a glimpse into a more advanced commercial system. It runs on a custom <strong>n8n workflow</strong> that leverages <strong>Mistral AI's</strong> latest OCR technology. Here’s what makes it powerful:
  </p>
  <ul>
    <li>
      <strong>Structured Data Extraction:</strong> The AI is forced to return data in a clean, predictable <code>JSON Schema</code>. This isn't just text scraping; it’s a reliable data pipeline.
    </li>
    <li>
      <strong>Intelligent Data Enrichment:</strong> The workflow doesn't just extract data—it enriches it. A custom script automatically calculates crucial metrics like <strong>wall surface area</strong> from the floor dimensions, even using fallback estimates if needed.
    </li>
    <li>
      <strong>Automated Aggregation:</strong> It goes beyond individual rooms by automatically calculating totals per floor level and per room type, providing immediate, actionable insights.
    </li>
  </ul>
  <p>
    While this demo shows the core classification and measurement (Step 1), the full commercial version includes <strong>Step 2 & 3 (Automated Offer Generation)</strong>, currently in use by a client in the construction industry.
  </p>
  <div>
    <a href="https://form0.app/forms/drTI6g" target="_blank">
      Test the Live MVP
    </a>
  </div>
  <h2>📋 Requirements</h2>
  <ul>
    <li>Jigsaw Stack API Key</li>
    <li>n8n Instance</li>
    <li>Webhook Endpoint</li>
  </ul>

  <h2>🎨 Customization</h2>
  <p>
    Adjust thresholds, fine‑tune heuristics, or swap OCR providers to 
    better match your business needs and downstream integrations.
  </p>
</section>

## 🔗 Nodes Used

HTTP Request, Webhook, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
