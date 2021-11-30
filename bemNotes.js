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
  <a href="/" class=".navbar__link.is-active"></a>
  <a href="/" class="navbar__link"></a>
  <a href="/" class="navbar__link"></a>
</nav>

.navbar__link.is-active {
}
