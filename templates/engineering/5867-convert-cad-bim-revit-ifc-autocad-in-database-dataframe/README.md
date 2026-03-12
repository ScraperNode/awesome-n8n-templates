# ⚒️ Convert CAD & BIM (Revit, IFC, AutoCAD) in dataBase (DataFrame)

> ⚡ **731 views** · ⚒️ [Engineering](../)

## Description

A minimal workflow to convert a **Revit/IFC/DWG** project into analysis-ready **XLSX** (and optional **DAE**) with a single run. Set two variables, execute, and the converter does the rest.

## What it does
- **Inputs:** `path_to_converter` and `path_project_file` (RVT/IFC/DWG).
- **Runs:** `RvtExporter.exe "&lt;converter&gt;" "&lt;project_file&gt;"`.
- **Outputs:** writes `&lt;ProjectName&gt;_rvt.xlsx` (and `*_rvt.dae` if enabled by your converter).

## Prerequisites
- **Windows** host (local executable + filesystem).
- DDC Revit toolkit installed: `C:\\DDC_Converter_Revit\\datadrivenlibs\\RvtExporter.exe`.
- A local project file you can read.

## How to use
1. **Import** this JSON into n8n.
2. Open **“Set path to file and converter”** and set:
   - `path_to_converter`: `C:\\DDC_Converter_Revit\\datadrivenlibs\\RvtExporter.exe`
   - `path_project_file`: e.g., `C:\\Sample_Projects\\your_project.rvt`
3. Run **Manual Trigger** → the command node executes the converter.

## Notes & tips
- Ensure the path points to the executable inside **`datadrivenlibs`**.
- Use ASCII-safe paths; ensure write permissions next to the project file.
- This is intentionally **simple**: chain it with your own **Parse/Transform/Load** steps as needed.

## Categories
Data Extraction · Files & Storage · ETL · CAD/BIM

## Tags
`cad-bim`, `revit`, `ifc`, `dwg`, `converter`, `xlsx`, `dae`

## Author
 [DataDrivenConstruction.io ](https://DataDrivenConstruction.io )
 [info@datadrivenconstruction.io](mailto:info@datadrivenconstruction.io)

## Consulting and Training
We work with leading construction, engineering, consulting agencies and technology firms around the world to help them implement open data principles, automate CAD/BIM processing and build robust ETL pipelines.

If you would like to test this solution with your own data, or are interested in adapting the workflow to real project tasks, feel free to contact us.


**Docs & Issues:**  
  [Full Readme on GitHub](https://github.com/datadrivenconstruction/cad2data-Revit-IFC-DWG-DGN-pipeline-with-conversion-validation-qto)

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
