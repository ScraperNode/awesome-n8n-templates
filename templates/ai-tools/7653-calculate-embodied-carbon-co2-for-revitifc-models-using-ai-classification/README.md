# 🎯 Calculate Embodied Carbon (CO2) for Revit/IFC Models using AI Classification

> ⚡ **386 views** · 🎯 [AI Summarization & Classification](../)

## Description

Estimate **embodied carbon (CO2e)** for grouped BIM/CAD elements. The workflow accepts an existing **XLSX** (grouped element data) or, if missing, can trigger a local **RvtExporter.exe** to generate one. It detects category fields, filters out non-building elements, infers **aggregation rules** with AI, computes **CO2** using densities & emission factors, and exports a **multi-sheet Excel** plus a clean **HTML** report.

## What it does
- **Reads or builds XLSX** (from your model via `RvtExporter.exe` when needed).
- **Finds category/volumetric fields**; separates building vs. annotation elements.
- Uses AI to **infer aggregation rules** (sum/mean/first) per header.
- **Groups** rows by your `group_by` field and aggregates totals.
- Prepares **enhanced prompts** and calls your LLM to classify materials and estimate CO2 (A1-A3 minimum).
- **Computes project totals** and generates a **multi-sheet XLSX** + **HTML** report with charts and hotspots.

## Prerequisites
- **LLM credentials** for one provider (e.g., OpenAI, Anthropic, Gemini, Grok/OpenRouter). Enable one chat node and connect credentials.
- **Windows host** only if you want to auto-extract from `.rvt/.ifc` via `RvtExporter.exe`. If you already have an XLSX, Windows is **not required**.
- Optional: mapping/classifier files (XLSX/CSV/PDF) to improve material classification.

## How to use
1. **Import** this JSON into n8n.
2. Open the **Setup/Parameters** node(s) and set:
   - `project_file` — path to your `.rvt/.ifc` **or** to an existing grouped `*_rvt.xlsx`
   - `path_to_converter` — `C:\\DDC_Converter_Revit\\datadrivenlibs\\RvtExporter.exe` (optional)
   - `group_by` — e.g., `Type Name` / `Category` / `IfcType`
   - `sheet_name` — default `Summary` (if reading from XLSX)
3. **Enable one LLM node** and attach credentials; keep others disabled.
4. **Execute** (Manual Trigger). The workflow detects/builds the XLSX, analyzes, classifies, estimates CO2, then writes **Excel** and opens the **HTML** report.

## Outputs
- **Excel** (`CO2_Analysis_Report_YYYY-MM-DD.xlsx`, ~8 sheets): Executive Summary, All Elements, Material Summary, Category Analysis, Impact Analysis, Top 20 Hotspots, Data Quality, Recommendations.
- **HTML**: executive report with key KPIs and charts.
- Per-group fields include: *Material (EU/DE/US), Quantity & Unit, Density, Mass, CO2 Factor, Total CO2 (kg/tonnes), CO2 %, Confidence, Assumptions*.

## Notes & tips
- Input quantities (volumes/areas) are **already aggregated per group** — do **not** multiply by element count.
- Use `-no-collada` upstream if you only need XLSX in extraction.
- Prefer ASCII-safe paths and ensure write permissions to output folder.

## Categories
Data Extraction · Files & Storage · ETL · CAD/BIM · Carbon/ESG

## Tags
`cad-bim`, `co2`, `carbon`, `embodied-carbon`, `lca`, `revit`, `ifc`, `xlsx`, `html-report`, `llm`

## Author
 [DataDrivenConstruction.io ](https://DataDrivenConstruction.io )
 [info@datadrivenconstruction.io](mailto:info@datadrivenconstruction.io)


## Consulting and Training
We work with leading construction, engineering, consulting agencies and technology firms around the world to help them implement open data principles, automate CAD/BIM processing and build robust ETL pipelines.

If you would like to test this solution with your own data, or are interested in adapting the workflow to real project tasks, feel free to contact us.


**Docs & Issues:**  
  [Full Readme on GitHub](https://github.com/datadrivenconstruction/cad2data-Revit-IFC-DWG-DGN-pipeline-with-conversion-validation-qto)

## 🔗 Nodes Used

Read Binary File, Spreadsheet File, Write Binary File, AI Agent, Anthropic Chat Model, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
