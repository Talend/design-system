# [data-test] attributes

## Context

Quality Assurance teams perform automated tests on Products for non-regression testing.

## Problems

QA teams lean on HTML ID attributes or XPath to automate tests on UI, and updates on the shared library can break these scenarios.

## Solutions

Systematically enforce [data-test] attributes for QA purpose in the components or layout markup that require them.
We see two benefits to that pattern:

1 — Better documentation. The single data attribute act as a contract with our QA team and it's easy to find which components are under that contract.

2 — Easier of use. Component testing becomes more straightforward as the same pattern can be expected on all design system components.

```css
[data-test="<block_name>.<element_type>[?<element_index>].<?element_identifier>"]
```

| Identifier           | Optional | Description                                                                                                                                                      |
| -------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `block_name`         |          | Component or layout identifier from our design language (ex: modal, search, password, inlineediting, etc.)                                                       |
| `element_type`       |          | Element or its type used (ex: button, link, input, textarea, radio, etc.)                                                                                        |
| `element_index`      | yes      | Element index if it's repeated (radio, menu items, etc.)                                                                                                         |
| `element_identifier` | yes      | A short and comprehensive identifier when we talk about it each other, in case of a form field we can reuse its label value (reveal, cancel, edit, submit, etc.) |

We need to precise something,

> To decide which values to use and to live in the Design System, we definitively have to be **context agnostic**.
> It seems we can't determine if we will use the input for a `first name` or an `API key name`.
> That's why we need to **keep it simple and stupid**.

Keep in mind that the Product teams can add `[data-testid]` to give a more comprehensive identifier.
The ones we embed are here in addition to what the product team can provide.
`[data-test]` are just the default ones that we can agree on, to be able to write E2E tests without worrying about the HTML markup or the CSS.

### Examples

- For a "Close" button of a `Modal`
  `[data-test="modal.button.close"]`

- For a "Reveal" button of a `Password` form field
  `[data-test="password.button.reveal"]`

- For a textarea of the `Inline Editing` in edition mode
  `[data-test="inlineediting.textarea"]`

- For a filter of a list
  `[data-test="search.input"]`

- For a `Switch` with three options, which it used radio buttons under the hood
  `[data-test="switch.radio[1]"]` `[data-test="switch.radio[2]"]` `[data-test="switch.radio[3]"]`

All of this will be part of the documentation (see below) and each of them will be used in [Cypress component testing](https://docs.cypress.io/guides/component-testing/introduction) in our Design System codebase.