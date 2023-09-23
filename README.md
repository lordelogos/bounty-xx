# Bounty Project

This project was setup using React + TypeScript + Vite

### Technologies used

- React: UI Framework

- React-router-dom: Routing handler

- Chakra-ui: CSS Framework

### Project structure

The project is broken into:

- [Components](/src/components/): This contains all the components used in the pages. it is futher broken down into:

  - [General](/src//components/general/): This contains components used on all pages

  - [Layouts](/src//components/layouts/): This contains the `layout` components for the pages

  - [Page-specific](/src//components/page-specific/): This contains the major components used on specific pages (a.k.a `epics`).

  - [UI](/src//components/ui/): This contains specific customized ui elements that are re-used over the application (a.k.a `atoms`)

- [Pages](/src/pages/): This contains the pages in the application

- [Lib](/src/lib/): This contains external library specific logic and re-usable logic for the application

### Project code guidelines

- For page development: Layout => Epics => Atoms.

  - Setup the layout of the page
  - Setup the Epics for the various sections on the page
  - Setup the Atoms for reusable portions of the page.

- For responsive styles: The array syntax is used for responsive styling e.g [`base`, `sm`, `md`].
  - base = 0em and higher, sm = 30em and higher, md = 48em higher
  - `null` is passed to avoid generation of duplicate or useless style rules.
