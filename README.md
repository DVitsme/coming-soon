# Coming soon V2

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). To sit as a react template for any website waiting to be pushed to production.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Live example

This was the coming soon page for [Valentine Consulting](http://valentineconsulting.net/).

If the site has now been launched you can see a version of it saved on firebase [valentine-consulting.firebaseapp.com](valentine-consulting.firebaseapp.com).

### Updating the Date

To change the countdown date, you will need to navigate to:

- src/components/Left/countdown/countdown.component.jsx

Inside you will find

> componentDidMount() {
>
> >      this.interval = setInterval(() => {
> >
> > >      // then is the time you count down from
> > >      const then = moment('20191027', 'YYYYMMDD');
> > >      const now = moment();
> > >      const countdown = moment(then - now);

Change the then variable to your new date (The text reads Year - Month - Day);

## **It will not send out a notice of a live site!**

The app says it will send out an email to each of the users who signs up. The lie detector has determined that, that is a lie. I never set up that feature as it was extremely unlikely that anyone would ever subscribe but the data is stored on a firebase database just in case.

If that is a feature you will need to introduce that yourself.

**Tip: Don’t use moment if you are using firebase**
I plan on refactoring this app several times in the future and I wanted to keep it as unopinionated as possible out of the gate. That said if you choose to use firebase as I have to handle data, use firebase's built in date function its just better for performance.
