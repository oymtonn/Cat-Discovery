
function BanList({banList}) {
    return (
      <div style={{ marginTop: 30, textAlign: "center" }}>
        <h3>Banned List: </h3>
        {banList.length === 0 ? (
          <p>None</p>
        ) : (
          <ul style={{ display: "inline-block", paddingLeft: 0, listStyleType: "none" }}>
            {banList.map((item, index) => (
              <li
                key={index}
                style={{ cursor: "pointer", color: "white", marginBottom: "6px" }}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
}
  
  
export default BanList;
  