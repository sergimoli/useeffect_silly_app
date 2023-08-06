import React, { useEffect } from "react";

function NoticeComponent() {
  useEffect(() => {
    //quan el compoment es monta
    alert("the compoment 'NoticeComponent' is mounted");

    //QUan el compoment es desmonta
    return () => {
      alert("component UNMOUNTED!!");
      //podem enviar un mail... petició ajax...
    };
  }, []);

  return (
    <div>
      <hr />
      <h3>limit done! (20)</h3>
      <button
        onClick={(e) => {
          alert("fuck you!");
        }}
      >
        Show alert
      </button>
    </div>
  );
}

export default NoticeComponent;
