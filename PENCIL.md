# Using Pencil from prompts

[Pencil](https://docs.pencil.dev/getting-started) designs live in `.pen` files. In Cursor, the **Pencil MCP** lets the assistant read and edit those files with structured tools—not by opening the raw file as text (`.pen` content is meant to go through Pencil).

## What to say in your prompt

Be specific so the model can drive Pencil cleanly:

- **Target file** — e.g. “edit `design.pen`” or “work in the open Pencil document.”
- **Goal** — one screen or section at a time (e.g. “login screen”, “settings row”, “empty state”).
- **Layout** — structure (header + list, two columns, cards grid), spacing feel, scroll vs fixed areas.
- **Content** — real-ish labels, button text, placeholder copy (not “Lorem ipsum” unless you want that).
- **Visual direction** — light/dark, accent color, density (airy vs compact), reference (“like the rest of this file”).
- **Deliverable** — “iterate until it matches X” or “export this frame as PNG.”

Short example:

> Open `design.pen` and add a **Budget overview** section under the home header: title, subtitle, three stat cards (spent / budget / left), and a primary “Add expense” button. Match the existing typography and spacing.

## What the assistant does (typical flow)

1. **`get_editor_state`** (with `include_schema: true` the first time) — sees the active `.pen` file and selection.
2. **`open_document`** — only if nothing is open: pass `"new"` or the **absolute path** to your `.pen` file.
3. **`get_guidelines`** — optional; loads project styles or category guides when you ask for consistency.
4. **`batch_get`** — finds nodes by patterns or IDs to understand what’s already on the canvas.
5. **`batch_design`** — applies edits in one scripted batch (insert, copy, update, replace, move, delete, image fills).
6. **`get_screenshot`** / **`snapshot_layout`** — sanity-check layout visually or by geometry.
7. **`export_nodes`** — when you want PNG/JPEG/WebP/PDF assets from specific nodes.

## Rules that matter

- **Do not** use normal editor search/read on `.pen` binaries for structure; use **Pencil MCP** tools.
- **`batch_design`**: aim for **≤ 25 operations per call**. Split big refactors into multiple batches (e.g. shell first, then content).
- **Bindings** (names like `sidebar=I(...)`) only work **inside the same** `batch_design` call; each batch needs **new** binding names.
- **Images**: there is no separate “image node”; put images on frames/rectangles using the **G** operation (AI or stock), not hand-pasted URLs.

## Operations cheat sheet

| Letter | Meaning   | Typical use                          |
|--------|-----------|--------------------------------------|
| **I**  | Insert    | New frame, text, component instance  |
| **C**  | Copy      | Duplicate a node; use `descendants` to tweak copies |
| **U**  | Update    | Change properties on an existing node |
| **R**  | Replace   | Swap a node (e.g. inside a component) |
| **M**  | Move      | Reparent or reorder                  |
| **D**  | Delete    | Remove a node                        |
| **G**  | Image fill| Apply AI/stock image to a frame      |

The predefined **`document`** binding points at the file root—useful for top-level screens and containers.

## This repo

The main design file is **`design.pen`** in the project root. Point prompts at that path when you want changes there specifically.
