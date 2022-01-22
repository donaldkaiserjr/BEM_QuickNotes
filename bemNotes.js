/* block component */
.block {
}

/* element */
.block__element {
}

/* modifier */
.block__element--modifier {
}

// **Since Modifiers are verbose, many opt to use is-* flags instead as modifiers.
<nav class="navbar">
  <a href="/" class=".navbar__link is-active"></a>
  <a href="/" class="navbar__link"></a>
  <a href="/" class="navbar__link"></a>
</nav>


// remember is-active must be chained to the Element and never alone in CSS, or there will be scope issues. Example:
// CSS.....       .navbar__link.is-active {}

.navbar__link.is-active {
}
