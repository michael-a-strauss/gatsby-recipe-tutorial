import React from "react"

export const Footer = () => {
  return (
    <footer className="page-footer">
      <p>
        &copy; {new Date().getFullYear() + " "}
        <span>SimpleRecipes.</span> Built with <a href="gatsbyjs.com">Gatsby</a>
      </p>
    </footer>
  )
}

export default Footer
