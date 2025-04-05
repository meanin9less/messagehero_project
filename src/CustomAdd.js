
export default function CutomAdd(props) {

  const styles = {
    container: { padding: "20px", fontFamily: "Arial, sans-serif", width:"1000px", margin:"0px auto" },
    header: { border: "1px solid black", padding: "10px", textAlign: "center" },
    content: { display: "flex", gap: "20px" },
    box: { flex: 1, border: "1px solid black", padding: "10px", overflowX: "auto", overflowY: "auto" },
    input: { display: "block", width: "100%", margin: "10px 0" },
    textarea: { display: "block", width: "100%", height: "80px", margin: "10px 0" },
    button: { display: "block", width: "100px", marginTop: "10px" },
    link: { textDecoration: "none", color: "blue" },
  };

  return ( 
            <> 
            {/* 추가폼 */}
            <form onSubmit={(e)=>{
              e.preventDefault();
              const title=e.target.title.value;
              const body=e.target.body.value;
              props.onWrite(title,body);
            }}>
              <input name="title" type="text" placeholder="Input text" style={styles.input} />
              <textarea name="body" placeholder="Textarea" style={styles.textarea} />
              <button type="submit" style={styles.button}>추가</button>
            </form>
            </>
     
  );
};
