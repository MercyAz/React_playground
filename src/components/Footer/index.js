import './footer.css';

function Footer(props) {
  return (
    <footer>
      <p>&copy; 2023 - {props.title}</p>
    </footer>
  )
}

export default Footer;