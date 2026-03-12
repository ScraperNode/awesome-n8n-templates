# ⚒️ Convert Revit Projects to Database with Drawings & Specifications using DDC

> ⚡ **414 views** · ⚒️ [Engineering](../)

## Description

Turn a **.rvt** project into open, analysis-ready data (XLSX + optional DAE/PDF) using the **RvtExporter.exe** from the DDC Revit toolkit. This n8n template provides a **Form UI** to set paths and flags, then runs the exporter with safe defaults.

Converts CAD/BIM files with customizable export modes (basic: 309 categories, standard: 724 categories, complete: all 1209 categories) and optional outputs like bounding box, Revit schedules, or PDF drawings.

## What it does
- Launches `RvtExporter.exe` with your chosen **Revit file** and **export mode**
- Optional feature flags: **bbox**, **schedule**, **sheets2pdf**, **-no-xlsx**, **-no-collada**
- (Optional) Output folder auto-generates `*_rvt.xlsx` and `*_rvt.dae` names

## Prerequisites
- Windows host (the exporter is a Windows executable)
- DDC Revit toolkit installed (path like: `C:\\DDC_Converter_Revit\\datadrivenlibs\\RvtExporter.exe`)
- A local `.rvt` file you can read

## How to use
1. **Import** this json workflow into n8n.
2. Open the **Form UI** trigger (ensure pop-ups are allowed).
3. Fill in:
   - **Path to Revit Converter**: `C:\\DDC_Converter_Revit\\datadrivenlibs\\RvtExporter.exe`
   - **Revit File Path**: e.g. `C:\\Sample_Projects\\your_project.rvt`
   - **Export Mode**: `basic | standard | complete | custom`
   - **Conversion Options**: multi-select flags (optional)
   - **(optional) output_folder**: e.g. `C:\\DDC_Output`
4. Click **Submit** → the workflow runs **Run Revit Exporter**.

## Consulting and Training
We work with leading construction, engineering, consulting agencies and technology firms around the world to help them implement open data principles, automate CAD/BIM processing and build robust ETL pipelines.

If you would like to test this solution with your own data, or are interested in adapting the workflow to real project tasks, feel free to contact us.

## Author
 [DataDrivenConstruction.io ](https://DataDrivenConstruction.io )
 [info@datadrivenconstruction.io](mailto:info@datadrivenconstruction.io)

**Docs & Issues:**  
  [Full Readme on GitHub](https://github.com/datadrivenconstruction/cad2data-Revit-IFC-DWG-DGN-pipeline-with-conversion-validation-qto)

## 🔗 Nodes Used

n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
