---
name: nextjs-clean-architecture
description: Guide for creating features in a Next.js application using Clean Architecture principles. Covers layers (Entities, Application, Interface Adapters, Infrastructure, Frameworks & Drivers) and dependency rules.
license: MIT
metadata:
  author: nikolovlazar
  version: "1.0.0"
---

# Next.js Clean Architecture

This skill defines the structure and rules for implementing Clean Architecture in a Next.js project.

## Core Principle: Dependency Rule
Dependencies must point **inwards**.
- `Entities` (Inner most)
- `Application`
- `Interface Adapters`
- `Frameworks & Drivers` (Outer most)

Inner layers MUST NOT know about outer layers.

## Directory Structure

```text
src/
├── entities/           # Enterprise Business Rules (Models, Errors)
├── application/        # Application Business Rules (Use Cases, Repository Interfaces)
├── interface-adapters/ # Interface Adapters (Controllers, Presenters)
├── infrastructure/     # Frameworks & Drivers Impl (Repository Impl, Services Impl)
└── di/                 # Dependency Injection Setup
app/                    # Next.js Framework Layer (Pages, API Routes, Components)
```

## Layer Responsibilities

### 1. Entities (`src/entities`)
- **Contains**: Domain Models and Custom Errors.
- **Rules**:
    - Plain JavaScript/TypeScript classes or types.
    - NO framework dependencies (no React, no Next.js, no Database drivers).
    - Models define data shapes and validation logic (business rules).
    - Errors should be custom domain errors, not database/library errors.

### 2. Application (`src/application`)
- **Contains**: Use Cases, Repository Interfaces, Service Interfaces.
- **Rules**:
    - Defines **WHAT** the system does (e.g., `CreateTodoUseCase`).
    - Defines interfaces for **HOW** data is accessed (e.g., `TodoRepository` interface).
    - **Use Cases**:
        - Orchestrate the flow of data to/from entities.
        - Contain business logic application-specific.
        - Should NOT call other Use Cases (avoid code smells).
        - Use Dependency Injection to access Repositories/Services.

### 3. Interface Adapters (`src/interface-adapters`)
- **Contains**: Controllers, Presenters.
- **Rules**:
    - **Controllers**:
        - Entry points for the application layer.
        - Handle input validation and authentication checks.
        - Call Use Cases.
        - Handle errors from inner layers.
    - **Presenters**:
        - Format data for the UI (e.g., remove sensitive fields).

### 4. Infrastructure (`src/infrastructure`)
- **Contains**: Repository Implementations, Service Implementations, Database Config.
- **Rules**:
    - Implements interfaces defined in the `Application` layer.
    - Contains concrete implementations (e.g., `DrizzleTodoRepository`).
    - Uses external libraries/frameworks (Drizzle, Stripe, AWS SDK).

### 5. Frameworks & Drivers (`app/`)
- **Contains**: Next.js Pages, Components, Server Actions, Route Handlers.
- **Rules**:
    - The entry point for user interaction.
    - Should ONLY use **Controllers** to interact with the system.
    - MUST NOT import Use Cases, Repositories, or Services directly.
    - Uses Dependency Injection to resolve Controllers.

## Workflow for New Feature

1.  **Entity**: Define the Model and Errors in `src/entities`.
2.  **Application**:
    *   Define Repository Interface in `src/application/repositories`.
    *   Create Use Case in `src/application/use-cases`.
3.  **Infrastructure**: Implement the Repository in `src/infrastructure/repositories`.
4.  **Interface Adapters**: Create a Controller in `src/interface-adapters/controllers`.
5.  **DI**: Register the new symbols in `src/di/modules`.
6.  **Framework**: connect the UI (Server Action / API Route) to the Controller.

## Common Mistakes to Avoid
-   Importing a Repository implementation directly in a Use Case (Use the interface!).
-   Calling a Use Case directly from a UI Component (Use a Controller!).
-   Defining database schemas in the Entity layer (Entities should be plain objects, Drizzle schemas go in Infrastructure/Drizzle).
