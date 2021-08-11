# Frontend Mentor - Maker pre-launch landing page solution

![Design preview for the Maker pre-launch landing page coding challenge](./preview.jpg)

This is a solution to the [Maker pre-launch landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/maker-prelaunch-landing-page-WVZIJtKLd). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements
- Receive an error message when the form is submitted if:
  - The `Email address` field is empty should show "Oops! Please add your email"
  - The email is not formatted correctly should show "Oops! That doesn’t look like an email address"

### Links

- Solution URL: [frontendmentor.io](https://your-solution-url.com)
- Live Site URL: [https://react-maker-pre-launch-landing-page.vercel.app/](https://react-maker-pre-launch-landing-page.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- SCSS Variables
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Formik](https://formik.org/) - Forms
- [SCSS](https://sass-lang.com/) - For styles

### What I learned

I learned how to use Formik for my input validation. Formik allows you to create your validator function, which I have below. You can use a validator like Yup(a JavaScript schema builder for value parsing and validation.)

```js
const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Oops! Please add your email';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Oops! That doesn’t look like an email address';
  }

    return errors;
  };
}
```

And then, you have to pass the useFormik() hook initial form values, our custom validate function that is called when
form values change or fields are blurred, and a submit function that will
be when the form is submitted.

```js
const formik = useFormik({
  initialValues: {
    email: "",
  },
  validate,
  onSubmit: (values, onSubmitProps) => {
    alert(JSON.stringify(values, null, 2));
    onSubmitProps.resetForm();
  },
});
```

Then this hook returns to us a form state and helper methods in a variable we call formik.

For a simple email input field like this, the only helper methods we need are handleSubmit(A submission handler),
handleChange(A change handler to pass to our input field) and values(Our form’s current values).

```js
<input
  className={formik.errors.email ? "input-error" : ""}
  id="email"
  name="email"
  type="email"
  autoComplete="email"
  placeholder="Email address"
  onChange={formik.handleChange}
  onBlur={formik.handleBlur}
  value={formik.values.email}
/>
```

If you want to learn more about using Formik, check out the link in the Useful resources section.

### Useful resources

- [Formik Tutorial](https://formik.org/docs/tutorial) - This tutorial helped me pick up Formik quickly. Literally, within half an hour, I had my form validation set and ready to be used. I like Formik and will use it going forward.

## Author

- Portfolio Site - [Salym Akhmedov](https://www.salymakhmedov.dev/)
- LinkedIn - [@salym-akhmedov](https://www.linkedin.com/in/salym-akhmedov/)
- Frontend Mentor - [@salymk](https://www.frontendmentor.io/profile/salymk)
