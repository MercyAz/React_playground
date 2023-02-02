/*
  Create local/private styles for LeftContent to make the
  background-color '#555' and the h1 text color '#ddd'
*/
const styles = {
  section: {
    backgroundColor: '#555'
  },
  h1: {
    color: '#ddd'
  }
};

function LeftContent() {
  return (
    <section style={styles.section}>
      <h1 style={styles.h1}>LeftContent Section</h1>
    </section>
  )
}

export default LeftContent;