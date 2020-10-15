# HivePro

# PROJECT 4 README <!-- omit in toc -->

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**HivePro Space Manager** is a full CRUD booking and reservation manager for a client's music rehearsal/recording studio environment.  It is designed and engineered as a student portfolio piece in compliance with Project 4 of General Assembly's Software Engineering Immersive, and implements a Rails-on-React stack routed to a POSTGRESQL relational database. _

<br>

## MVP

_The **HivePro Space Manager** will allow users to book studio time and the checking out of special equipment during their session.  HivePro makes this convenient by producing readouts that display either a) availabiltiy of all rooms for a desired time slot, with parameter filters 
.for room size and needed equipment or b) all available times for a particular room, on a room detail page.  Room details pages will include specifications of room size and non-transportable equipment.  Additionally, HivePro allows transportable equipment to be rented during a session from the studio stockpile, subject to availability.  The availability of transportable equipment items can be included as a parameter filter to narrow the scope of possible appointments.  A registered user will have the ability to update or delete their appointment up until 36 hours prior to the start of their session.

<br>

### Goals

See MoSCoW diagram (second tab) at: https://app.lucidchart.com/invitations/accept/e61861fc-fb33-41a1-9e64-bc25156d0e69

<br>

### Libraries and Dependencies

|     Library      | Description                                   |
| :--------------: | :-----------------------------------------    |
|      React       | Front-end framework                           |
|   React Router   | Multi-page navigability framework             |
| React MaterialUI | Ready-made standardized UI tables and buttons |
|     Rails        | Back-end framework |
|    Moment.js     | JS library for improved date-time handling    |

<br>

### Client (Front End)

#### Wireframes

https://www.figma.com/file/zhlQ7ffDwMQgsFVVcElRbT/P4?node-id=13%3A4

#### Component Tree


#### Component Hierarchy

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure

src
|__ components/
      |___Header.jsx
      |__ Welcome_Hero.jsx
      |__ Mobile_only
           |__ Carousel.jsx
      |__ Desktop_only
           |__ CardFlexbox.jsx
           |__ card.jsx
      |__ AppointmentFinder
           |__Calendar
              |__build.js
              |__header.jsx
              |__index.js
           |__ check.jsx
           |__ timeFilter.jsx
      |__ TimeAgnosticBooker
           |__ Schedule
              |__table.jsx
              |__timeslot.jsx
      |__ TimeGnosticBooker
           |__ Schedule.jsx
      |__ Login
|__ containers
     |__MainContainer.jsx
|__ layouts
      |__Layout.jsx
|__screens
   |__ Main.jsx
   |__ SignUp.jsx
   |__ LogIn.jsx
   |__GreenRoom.jsx
   |__Booker.jsx
   
|__ services/
   |__availability.js

```

#### Component Breakdown

> Use this section to go into further depth regarding your components, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
| MainContainer| functional |   y   |   y   |  State: rooms hash-array;                |
|    Header    | functional |   n   |   n   | _The header will contain the navigation and logo._               |
|  Navigation  | functional |   n   |   n   | _The navigation will provide a link to each of the pages._       |
|   Gallery    |   class    |   y   |   n   | _The gallery will render the posts using cards in flexbox._      |
| Gallery Card | functional |   n   |   y   | _The cards will render the post info via props._                 |
|    Footer    | functional |   n   |   n   | _The footer will show info about me and a link to my portfolio._ |

#### Time Estimates


| Task                            | Priority  | Estimated Time | Time Invested | Actual Time |
| -------------------             | :------:  | :------------: | :-----------: | :---------: |
| Back-end models/routes/endpoints|    H      |      2 hr     |      4hr        |             |
| Authentication services         |    M      |      2 hr     |               |             |
| Seed database                   |    H      |      1 hr      |               |             |
| Main-container/front routes     |    H      |      2 hr      |     x        |             |
| Asset gathering + installation  |   M       |     3 hr        |      1.5hr  |      1.5hr   |
| Axios services w. dtime handle  |   H       |     2 hr         |             |             |
| Availability calc services      |   H       |     2 hr        |             |             |
| Time Gnostic Booker (C)         |    H      |     3 hr        |             |             |
| Time Agnostic Booker (C)        |    M      |     5 hr        |             |              |
| Appointment Finder w/o Calendar |    H      |     4 hr        |             |               |
| Calendar conditional rendering  |    M      |     2 hr        |             |               |
| Green Room (UD)                 |   H       |     2 hr        |             |               |
| Registration and Login screens  |   M       |     3 hr        |             |               |
| Card component + styling        |   M       |     3 hr        |             |               |
| CardFlex+Welcome - resp. display|   M       |     2.5 hr      |             |               |
| Carousel - resp. display        |   M       |     3 hr        |             |               |
| Media breaks + site-wide styles |   M       |     3 hr        |             |               |
| Stress testing + optimizations  |   M       |     4 hr        |             |               |

| TOTAL                            |          |     48.5 hrs    |     3 hrs     |     TBD     |

<br>

### Server (Back End)

#### ERD Model

https://app.lucidchart.com/documents/edit/2a7496c7-2e0e-4dee-8ee9-4da4c8f41b5d/0_0?beaconFlowId=52BDAC65AE83A252#?folder_id=home&browser=icon

<br>

***

## Post-MVP

See MosCoW tab: https://app.lucidchart.com/invitations/accept/e61861fc-fb33-41a1-9e64-bc25156d0e69
***

## Code Issues & Resolutions

Post-deploy issues

| Date observed | Issue                                           | Date resolved | notes |
| --------------| :----------------------------------------------:| :-----------:|:------:|
| 10102020      | links in nav bar buttons not fully exposed      |               |       |
