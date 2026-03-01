
# Feature Specification: Forum-Based Closed Social Network

**Feature Branch**: `1-social-forum`
**Created**: 2026-01-27
**Status**: Draft
**Input**: User description: "Forum-Based Closed Social Network — Product Specifications..."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Invitation & Paid Signup (Priority: P1)

As a potential member, I want to sign up via a unique invitation link and pay my subscription so that I can access the closed community.

**Why this priority**: Determine access control and monetization, the core gatekeepers of the platform.

**Independent Test**: Can be tested by generating an invite link, calculating a new user signup through that link, completing a mock payment, and verifying account activation and Coordinator linkage.

**Acceptance Scenarios**:

1. **Given** a valid invitation link from a Coordinator, **When** a user accesses it, **Then** they see the signup form linked to that Coordinator.
2. **Given** a filled signup form, **When** the user proceeds, **Then** they are redirected to the payment gateway (MercadoPago).
3. **Given** a successful payment, **When** the callback is received, **Then** the user account is created, activated, and linked to the inviting Coordinator.
4. **Given** an invalid or revoked link, **When** accessed, **Then** an error message is displayed and signup is blocked.

---

### User Story 2 - Forum Core Interaction (Priority: P1)

As a Member, I want to read topics and post replies using rich text so that I can participate in discussions.

**Why this priority**: The core value proposition of the platform.

**Independent Test**: Can be tested by an Admin creating a topic, and a Member posting a reply with rich text/media.

**Acceptance Scenarios**:

1. **Given** an Admin/Coordinator with permission, **When** they create a topic, **Then** it appears in the forum feed.
2. **Given** a topic, **When** a Member posts a reply using the WYSIWYG editor, **Then** the reply is published with correct formatting and media.
3. **Given** a Member, **When** they attempt to create a topic, **Then** the action is restricted/hidden.
4. **Given** a post, **When** the author edits it, **Then** the content is updated seamlessly.

---

### User Story 3 - Revenue Management & Dashboards (Priority: P2)

As a Coordenador, I want to view my linked members and estimated revenue so that I can track my performance and earnings.

**Why this priority**: Essential for the "business" side of the platform and incentivizing Coordinators.

**Independent Test**: Can be tested by creating members with different subscription tenures linked to a Coordinator and verifying the calculated revenue forecast matches the split rules.

**Acceptance Scenarios**:

1. **Given** a Coordinator with linked members, **When** they view the Revenue Forecast, **Then** they see earnings calculated based on the specific month-by-month split rules (50% month 1 down to 10% month 7+).
2. **Given** an Admin, **When** they view the Monthly Payout Overview, **Then** they see the total calculated debt to all Coordinators.
3. **Given** a Coordinator, **When** they generate an invitation link, **Then** a unique, shareable token is created.

---

### User Story 4 - Content & Institutional Pages (Priority: P2)

As an Admin, I want to manage static and state-specific institutional pages so that the platform content remains relevant.

**Why this priority**: Supports the community structure (Statute, Services, State Chapters).

**Independent Test**: Update a specific state page (e.g., "São Paulo") and verify it renders correctly.

**Acceptance Scenarios**:

1. **Given** an Admin, **When** they edit the "Estatuto" page with the WYSIWYG editor, **Then** the changes are reflected on the public-facing page.
2. **Given** a Coordinator with "Rio de Janeiro" page permission, **When** they access the editor, **Then** they can only edit the Rio de Janeiro page.

---

### User Story 5 - Direct Messaging (Priority: P3)

As a Member, I want to send private text messages to another member so that we can have 1-on-1 conversations.

**Why this priority**: Enhances social stickiness but not critical for initial launch.

**Independent Test**: Two users logged in, sending messages back and forth.

**Acceptance Scenarios**:

1. **Given** two members, **When** one sends a text message, **Then** the other receives it.
2. **Given** a chat, **When** a user sends a link, **Then** it is clickable.

---

### User Story 6 - Profile Management (Priority: P3)

As a Member, I want to edit my profile picture and "About Me" so that I can identify myself to the community.

**Why this priority**: Basic identity feature.

**Independent Test**: User updates profile, another user views it.

**Acceptance Scenarios**:

1. **Given** a Member, **When** they upload a profile picture, **Then** it is displayed on their posts and profile.

---

### Edge Cases

- **Subscription Default**: What happens when a user subscription payment fails or expires? Access MUST be revoked immediately.
- **Revoked Invite**: What happens if a user is mid-signup and the invite is revoked? The final submission should fail validation.
- **Deleted Coordinator**: What happens to members if their linked Coordinator is removed? They should likely be reassigned to Admin or a default pool (to be decided during implementation).
- **Concurrency**: What happens if two Admins edit the same "Estatuto" page simultaneously? Simple "last write wins" is acceptable for MVP.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST restrict signup to users with a valid invitation token.
- **FR-002**: System MUST require and verify subscription payment (via MercadoPago) before activating a user account.
- **FR-003**: System MUST link new users to the Coordinator who generated the invitation.
- **FR-004**: System MUST calculate revenue splits dynamically based on member tenure: Month 1 (50%), Month 2 (40%), Month 3 (30%), Month 4 (25%), Month 5 (20%), Month 6 (15%), Month 7+ (10%).
- **FR-005**: System MUST provide a WYSIWYG editor (supporting text, images, video embeds from YouTube/Vimeo) shared across Forum, Pages, and Profiles.
- **FR-006**: System MUST enforce Role-Based Access Control (RBAC):
    - **Admins**: Full access.
    - **Coordinators**: Invite management, revenue view, specific page editing (delegated).
    - **Members**: Read/Reply/Chat only.
- **FR-007**: System MUST provide 27 state-specific institutional pages, editable individually based on permissions.
- **FR-008**: System MUST support 1-to-1 text-based chat between members.
- **FR-009**: System MUST allow Admin to delegate permission to Coordinators to create topics or edit specific static pages.

### Key Entities

- **User**: ID, Role (Admin/Coord/Member), LinkedCoordinatorID, SubscriptionStatus, SignupDate.
- **Invitation**: Token, CreatedBy (CoordinatorID), IsRevoked.
- **Subscription**: UserID, Status (Active/PastDue/Cancelled), PaymentHistory.
- **RevenueRule**: MonthNumber, CoordinatorPercentage.
- **Topic**: Title, Content, AuthorID, CreatedAt.
- **Post**: TopicID, Content, AuthorID, ParentPostID (for replies).
- **Page**: Slug (e.g., 'estatuto', 'sp'), Content, LastEditedBy.
- **Message**: SenderID, ReceiverID, Content, Timestamp.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Users can complete the signup and payment flow in under 5 minutes.
- **SC-002**: Revenue forecast calculations match the defined split schedule with 100% accuracy for all active subscriptions.
- **SC-003**: Admins can generate a monthly payout report for 50+ Coordinators in under 10 seconds.
- **SC-004**: Forum pages load in under 1 second (excluding external media embeds).
- **SC-005**: 100% of non-public pages redirect unauthenticated users to the login page.

## Out of Scope (Explicit)

- Public forum access.
- Open signup without invitation.
- Advanced chat features (media, groups, moderation).
- Automated payouts to Coordenadores (only calculation/reporting).
- Mobile app.
- Analytics beyond basic tables.
