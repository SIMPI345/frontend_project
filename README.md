Details of the checkpoint-4:
```
After clicking on the Register Button, Modal should appear if you know bootstrap OR you may choose to open a new page that is register.html
In the register form, add fullname, contact, date of birth, email id, password, gender, register button, below register button, link which redirect login file should visible. Use proper javascript validation Add proper css design so that form should like descent. 
<img width="1957" alt="image" src="https://github.com/user-attachments/assets/dcc86671-4cb1-40e6-ba52-1094d83efa2c">

```


## Summary of Changes:
#### REact Based Modular Structure: --> src directory

We split the code into multiple smaller components: RegisterModal, LoginModal, and AppHeader.
State Management:

States for modals (showRegister, showLogin) and form data are managed inside the individual modal components.
Main App:

The App component acts as the container that manages the modals and renders the header with the buttons.
Reusability:

Each modal is a reusable component that can be controlled externally (via the handleShow and handleClose props).

#### HTML/BOOTSTRAP/CSS Based Modular Structure: --> public directory

```npx create-react-app fontened_project
cd fontened_project
npm install react-bootstrap bootstrap
npm start
```
## Link to page
```
http://localhost:3000

```
