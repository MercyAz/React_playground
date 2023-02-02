/*
  Create local/private styles for RightContent to make the
  background-color '#888' and the h1 text color '#fff'
*/

const styles = {
  section: {
    backgroundColor: '#888'
  },
  h1: {
    color: '#fff'
  }
};

function RightContent() {
  return (
    <section style={styles.section}>
      <h1 style={styles.h1}>RightContent Section</h1>
    </section>
  )
}

export default RightContent;