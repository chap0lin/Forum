
# Research: Forum-Based Closed Social Network

**Feature**: `social-forum`
**Date**: 2026-01-27

## Decisions

### 1. Payment Integration: MercadoPago SDK

**Decision**: Use the official `mercadopago` Node.js SDK.
**Rationale**: 
- Provides types and simplified methods for preference creation and webhook handling.
- Easier to maintain than raw HTTP calls.
- Supports the required subscription/preference flows.

**Alternatives Considered**:
- Raw Axios calls: Rejected due to maintenance overhead and lack of types.

### 2. State Pages Storage: Database

**Decision**: Store state institutional pages in the database (`pages` table).
**Rationale**:
- Allows editing via API/Frontend (WYSIWYG) without redeploying code.
- Consistent with "Estatuto" and other dynamic pages.
- Simplifies permission management (Admin grants "Rio de Janeiro" permission = row-level permission).

**Alternatives Considered**:
- Static Files (MDX): Rejected because Admins/Coordinators need to edit them in the WYSIWYG editor.

### 3. Editor: React-Quill-New

**Decision**: Use `react-quill-new`.
**Rationale**: 
- Already installed in the project.
- Meets requirements for rich text, images, and video embeds.

### 4. Revenue Calculation: On-Demand + Snapshots

**Decision**: Calculate forecasts on-demand but store confirmed payouts in a `payouts` table.
**Rationale**:
- Forecasting (future) is dynamic based on current member status.
- Payouts (past) must be immutable.
- A scheduled job (or manual admin trigger) will close the month and generate `payout_records`.

## Open Questions Resolved

- **Database**: SQLite with Knex is sufficient for MVP and allows migration to Postgres.
- **Testing**: Vitest will be introduced for backend testing to meet "Quality Assurance" principle.
