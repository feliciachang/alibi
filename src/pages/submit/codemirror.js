import React, { useEffect, useRef, useState } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/idea.css";

import "codemirror/mode/htmlmixed/htmlmixed";

const Editor = ({ js, setJS }) => {
  const codeMirrorOptions = {
    theme: "idea",
    lineNumbers: true,
    scrollbarStyle: null,
    lineWrapping: true,
  };

  return (
    <div style={{ fontSize: "12px" }}>
      <div className="code-editor html-code">
        <CodeMirror
          value={js}
          options={{
            mode: "htmlmixed",
            ...codeMirrorOptions,
          }}
          onBeforeChange={(editor, data, js) => {
            sessionStorage.setItem("codetext", js);
            setJS(js);
          }}
        />
      </div>
    </div>
  );
};

export default Editor;
// import CodeMirror from "codemirror";

// import "codemirror/lib/codemirror.css";

// export default function CodeMirrorReact({
//   options = {},
//   language = "javascript",
//   customTheme,
// }) {
//   const inputElement = useRef();

//   require(`codemirror/mode/${language}/${language}.js`);

//   if (options.theme && !customTheme) {
//     require(`codemirror/theme/${options.theme}.css`);
//   }

//   useEffect(() => {
//     CodeMirror.fromTextArea(inputElement.current, options);
//     console.log(inputElement.current);
//     console.log(options);
//   }, [options]);

//   return (
//     <textarea
//       ref={inputElement}
//       defaultValue={`
//         <h3>This is a real-time HTML editor</h3>

//         <p>Add javascript libraries with script tags like so: </p>
//         <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/p5.js"></script>
//         <script>
//         function setup() {

//         }
//         function draw() {
//             ellipse(50, 50, 80, 80);
//         }
//         </script>
//     `}
//     />
//   );
// }
