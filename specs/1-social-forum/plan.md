
# Implementation Plan: Forum-Based Closed Social Network

**Branch**: `1-social-forum` | **Date**: 2026-01-27 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `specs/1-social-forum/spec.md`

## Summary

Implement a closed, paid social network centered around a forum. Key features include role-based access (Admin, Coordinator, Member), invitation-only signup with MercadoPago subscription enforcement, rich-text forum posting, and revenue sharing dashboards for Coordinators.

## Technical Context

**Language/Version**: TypeScript 5.9+, Node.js 22+ (Backend), React 19 (Frontend).
**Primary Dependencies**: 
- Backend: Express, Knex, JsonWebToken, BcryptJS. **[NEW]** `mercadopago` (SDK).
- Frontend: React-Router-Dom (v7), Axios, Emotion, React-Quill-New.
**Storage**: SQLite3 (via Knex). Schema migrations required.
**Testing**: **[NEW]** Vitest (for both frontend and backend unit/integration tests).
**Target Platform**: Web (Responsive).
**Project Type**: Web application (Frontend + Backend).

## Constitution Check

*GATE: Must pass before Phase 0 research.*

- [x] **Simplicity**: Using existing SQLite + Knex stack. No new heavy infra (Redis/ES) introduced yet.
- [x] **Smoothness**: React frontend ensures responsive UI. Pagination will be used for forum lists.
- [x] **Scalability**: Knex allows future DB migration. Business logic separated from controllers.
- [x] **Standardized Stack**: Adheres strictly to Node/React/TS.
- [x] **Quality**: Vital flows (Signup, Payment, Revenue Calc) will be tested with automated tests.

## Project Structure

### Documentation (this feature)

```text
specs/1-social-forum/
├── plan.md              # This file
├── research.md          # Implementation details & decisions
├── data-model.md        # Database schema & entity definitions
├── quickstart.md        # How to run/test this specific feature
├── contracts/           # API specifications
│   └── openapi.yaml
└── tasks.md             # Detailed implementation tasks
```

### Source Code

```text
backend/
├── src/
│   ├── database/
│   │   ├── migrations/      # [NEW] Schema changes
│   │   └── seeds/           # [NEW] Initial data (States, Admin)
│   ├── models/              # [NEW] Knex data access layers
│   │   ├── User.ts
│   │   ├── Invitation.ts
│   │   ├── Topic.ts
│   │   └── ...
│   ├── services/            # [NEW] Business logic
│   │   ├── PaymentService.ts
│   │   ├── RevenueService.ts
│   │   └── ...
│   ├── api/
│   │   ├── middlewares/     # Auth & RBAC
│   │   └── routes/          # API Endpoints
│   └── types/               # Shared types
└── tests/                   # [NEW] Vitest setup

frontend/
├── src/
│   ├── components/
│   │   ├── Editor/          # [NEW] Shared WYSIWYG Wrapper
│   │   └── ...
│   ├── pages/
│   │   ├── auth/            # [NEW] Signup/Login/InviteLanding
│   │   ├── forum/           # [NEW] TopicList, TopicDetail
│   │   ├── admin/           # [NEW] Dashboards
│   │   ├── coordinator/     # [NEW] Dashboards
│   └── services/
│       └── api.ts
```

## Complexity Tracking

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| `mercadopago` SDK | Mandatory for payment processing | Manual HTTP calls are error-prone and harder to maintain. |
| `react-quill-new` | Rich text requirement | Native textarea insufficient for images/formatting. |
