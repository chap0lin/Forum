
---
description: "Task list template for feature implementation"
---

# Tasks: Forum-Based Closed Social Network

**Input**: Design documents from `/specs/1-social-forum/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: Testing is **Mandatory** for critical paths (US1, US2, US3) as per Constitution ("Quality Assurance"). 

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [ ] T001 Create project structure per implementation plan
- [ ] T002 Initialize backend with MercadoPago and Vitest in backend/package.json
- [ ] T003 Initialize frontend with React-Quill-New and Vitest in frontend/package.json
- [ ] T004 [P] Configure Knex with SQLite3 and create migration folder in backend/src/database/
- [ ] T005 [P] Configure environment variables for MercadoPago in backend/.env

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [ ] T006 Create User and Subscription migration in backend/src/database/migrations/001_initial_schema.ts
- [ ] T007 Implement Auth middleware (JWT + RBAC) in backend/src/api/middlewares/authMiddleware.ts
- [ ] T008 Implement basic Error Handling middleware in backend/src/api/middlewares/errorMiddleware.ts
- [ ] T009 [P] Create User model in backend/src/models/User.ts
- [ ] T010 [P] Create Subscription model in backend/src/models/Subscription.ts
- [ ] T011 Setup API Router structure in backend/src/api/routes/index.ts

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Invitation & Paid Signup (Priority: P1) 🎯 MVP

**Goal**: Enable invitation-only signup with mandatory payment verification.

**Independent Test**: Generate invite -> Access as new user -> Pay -> Verify Active Status.

### Implementation for User Story 1

- [ ] T012 [P] [US1] Create Invitation model in backend/src/models/Invitation.ts
- [ ] T013 [P] [US1] Create Invitation migration in backend/src/database/migrations/002_invitations.ts
- [ ] T014 [US1] Implement PaymentService (MercadoPago) in backend/src/services/PaymentService.ts
- [ ] T015 [US1] Implement AuthService (Signup + Invite Validation) in backend/src/services/AuthService.ts
- [ ] T016 [US1] Implement /auth/invite/{token} endpoint in backend/src/api/routes/authRoutes.ts
- [ ] T017 [US1] Implement /auth/signup endpoint in backend/src/api/routes/authRoutes.ts
- [ ] T018 [US1] Create Invite Landing Page in frontend/src/pages/auth/InviteLanding.tsx
- [ ] T019 [US1] Create Signup Form with Payment integration in frontend/src/pages/auth/Signup.tsx
- [ ] T020 [P] [US1] Write integration test for Signup Flow in backend/tests/integration/auth.test.ts

**Checkpoint**: Users can sign up and pay via invitation links.

---

## Phase 4: User Story 2 - Forum Core Interaction (Priority: P1)

**Goal**: Full forum functionality (Topics, Posts, Rich Text).

**Independent Test**: Create Topic -> Post Reply -> Edit Post.

### Implementation for User Story 2

- [ ] T021 [P] [US2] Create Topic and Post models in backend/src/models/Topic.ts & Post.ts
- [ ] T022 [P] [US2] Create Forum migration in backend/src/database/migrations/003_forum.ts
- [ ] T023 [US2] Implement TopicService in backend/src/services/TopicService.ts
- [ ] T024 [US2] Implement PostService in backend/src/services/PostService.ts
- [ ] T025 [US2] Implement /topics and /posts endpoints in backend/src/api/routes/forumRoutes.ts
- [ ] T026 [P] [US2] Create Rich Text Editor component in frontend/src/components/Editor/RichTextEditor.tsx
- [ ] T027 [US2] Create Forum List Page in frontend/src/pages/forum/TopicList.tsx
- [ ] T028 [US2] Create Topic Detail Page (with replies) in frontend/src/pages/forum/TopicDetail.tsx
- [ ] T029 [P] [US2] Write integration test for Forum Posting in backend/tests/integration/forum.test.ts

**Checkpoint**: Forum is fully functional.

---

## Phase 5: User Story 3 - Revenue Management (Priority: P2)

**Goal**: Coordinator revenue dashboards and tracking.

**Independent Test**: View Dashboard -> Verify specific split calculations.

### Implementation for User Story 3

- [ ] T030 [P] [US3] Create Revenue Service (Calculation Logic) in backend/src/services/RevenueService.ts
- [ ] T031 [US3] Implement /dashboard/revenue and /members endpoints in backend/src/api/routes/coordinatorRoutes.ts
- [ ] T032 [US3] Implement /admin/payouts endpoint in backend/src/api/routes/adminRoutes.ts
- [ ] T033 [US3] Create Coordinator Dashboard in frontend/src/pages/coordinator/Dashboard.tsx
- [ ] T034 [US3] Create Admin Payout View in frontend/src/pages/admin/Payouts.tsx
- [ ] T035 [P] [US3] Unit Test Revenue Calculation Logic in backend/tests/unit/revenue.test.ts

**Checkpoint**: Financial observability is live.

---

## Phase 6: User Story 4 - Content & Institutional Pages (Priority: P2)

**Goal**: Manage static content and State pages.

**Independent Test**: Edit "Estatuto" -> Verify Public View.

### Implementation for User Story 4

- [ ] T036 [P] [US4] Create Page model and migration in backend/src/models/Page.ts
- [ ] T037 [US4] Implement PageService in backend/src/services/PageService.ts
- [ ] T038 [US4] Implement /pages/{slug} endpoints in backend/src/api/routes/pageRoutes.ts
- [ ] T039 [US4] Create Page Editor View in frontend/src/pages/admin/PageEditor.tsx
- [ ] T040 [US4] Create Dynamic Page Viewer in frontend/src/components/PageViewer.tsx

---

## Phase 7: User Story 5 - Direct Messaging (Priority: P3)

**Goal**: 1-to-1 Chat.

### Implementation for User Story 5

- [ ] T041 [P] [US5] Create Message model and migration in backend/src/models/Message.ts
- [ ] T042 [US5] Implement MessageService (Get/Post) in backend/src/services/MessageService.ts
- [ ] T043 [US5] Implement /messages endpoints in backend/src/api/routes/messageRoutes.ts
- [ ] T044 [US5] Create Chat UI in frontend/src/pages/messages/Chat.tsx

---

## Phase 8: User Story 6 - Profile Management (Priority: P3)

**Goal**: User Profile Customization.

### Implementation for User Story 6

- [ ] T045 [P] [US6] Add Profile fields to User model (migration if needed) in backend/src/database/migrations/004_profile.ts
- [ ] T046 [US6] Create Profile Editor in frontend/src/pages/profile/EditProfile.tsx
- [ ] T047 [US6] Update Profile View to show custom fields in frontend/src/pages/profile/Profile.tsx

---

## Phase 9: Polish & Cross-Cutting Concerns

- [ ] T048 Verify RBAC across all new endpoints
- [ ] T049 Run full regression test suite
- [ ] T050 Optimize Forum List query performance (pagination/indexing)
- [ ] T051 Finalize UI styling to match existing theme

---

## Implementation Strategy

### MVP First (User Story 1 & 2)

1. Complete Setup + Foundational
2. Implement Invitation/Signup (US1) -> **Validate Payment Flow**
3. Implement Forum (US2) -> **Validate Core Value**
4. Deploy MVP

### Incremental Delivery

From there, add Revenue Dashboards (US3), then Content Pages (US4), and finally Chat/Profile (US5/6).
