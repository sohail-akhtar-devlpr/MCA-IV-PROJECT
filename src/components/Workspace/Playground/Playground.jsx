import React, { useRef } from 'react'
import Split from 'react-split'
import { useState } from 'react'
import CodeOutputArea from './CodeOutputArea'
import { Editor } from '@monaco-editor/react'
import {BOILERPLATE} from './Boilerplate'

import PlaygroundNav from '@/components/Workspace/Playground/PlaygroundNav/PlaygroundNav'

function Playground() {
  const [language, setLanguage] = useState("java");
  const [output, setOutput] = useState(null);

  const editorRef = useRef();

  const editorOptions = {
    fontSize: "18",
    wordWrap: "on",
  }

  const onMount = (editor)=>{
    editorRef.current = editor;
    // console.log("Editor::",editor);
    editor.focus();
  };

  return (
    <div className=' border-green-500 flex flex-col bg-dark-layer-1 relative'>

     <PlaygroundNav
     language={language}
     onChangeLanguage={setLanguage}
     editorRef={editorRef}
     setOutput={setOutput}
     />

     <Split className='h-[calc(100vh-96px)]' direction='vertical' sizes={[60,40]} minSize={60} snapOffset={0}>
      <div className="w-full overflow-auto">

        {/* Editor    */}
        <Editor 
          language={language}
          options={editorOptions}
          theme='vs-dark'
          // onChange={onChangeCode}
          value={BOILERPLATE[language] || ''}
          onMount={onMount}
          />
      </div>

      <div className=' border-pink-500 w-full px-5 overflow-auto'>

      <div>
        <div className='flex flex-col h-full'>
          <div className='input-output-container flex flex-col flex-1 mt-2 space-y-1'>
            <div className='input-header text-white'>
              <b>input:</b>
            </div>
            <textarea className='bg-dark-layer-2 text-white text-sm font-semibold resize-none p-1'></textarea>
          </div>

          {/* OUTPUT */}
          <CodeOutputArea output={output}/>
            
        </div>
      </div>

      </div>
     </Split>

    </div>
  )
}

export default Playground



// Do not Delete
{/* TestCase Heading */}
        {/* <div className=' border-green-500 flex h-10 items-center space-x-6'>
          <div className=' border-red-700 relative flex flex-col justify-center h-full cursor-pointer'>
            <div className=' border-yellow-400 text-sm font-medium leading-5 text-white'>Test Cases</div>
            <hr className='absolute bottom-0 h-0.5 w-full rounded-full bg-white'/>
          </div>
        </div> */}

        // <div className=' border-green-500 flex h-10 items-center space-x-6'>
        //   <div className=' border-red-700 relative flex flex-col justify-center h-full cursor-pointer'>
        //     <div className=' border-yellow-400 text-sm font-medium leading-5 text-white'>Compiler</div>
        //     {/* <hr className='absolute bottom-0 h-0.5 w-full rounded-full bg-white'/> */}
        //   </div>
        // </div>

        // <div className='flex border border-red-700'>

          {/* case-1 */}
          {/* <div className='mr-2 items-start mt-2 text-white'>
            <div className='flex flex-wrap items-center gap-y-4'>
              <div className='font-medium items-center bg-dark-fill-3 hover:bg-dark-fill-2 rounded-lg px-4 py-1 cursor-pointer'>
              case 1
              </div>
            </div>
          </div> */}

          {/* case-2 */}
          {/* <div className='mr-2 items-start mt-2 text-white'>
            <div className='flex flex-wrap items-center gap-y-4'>
              <div className='font-medium items-center bg-dark-fill-3 hover:bg-dark-fill-2 rounded-lg px-4 py-1 cursor-pointer'>
              case 2
              </div>
            </div>
          </div> */}

          {/* case-3 */}
          {/* <div className='mr-2 items-start mt-2 text-white'>
            <div className='flex flex-wrap items-center gap-y-4'>
              <div className='font-medium items-center bg-dark-fill-3 hover:bg-dark-fill-2 rounded-lg px-4 py-1 cursor-pointer'>
              case 3
              </div>
            </div>
          </div> */}
        {/* </div> */}
        
        {/* <div className='border border-green-500 font-semibold my-4'>
          <p className='text-sm font-medium mt-4 text-white'>Input:</p>
          <div className=' border-pink-400 w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3    border-transparent text-white mt-2'>
            nums:[2,7,11,15], target:9
            </div>

          <p className='text-sm font-medium mt-4 text-white'>Output:</p>
          <div className=' border-pink-400 w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3    border-transparent text-white mt-2'>
            [0,1]
            </div>
        </div> */}




// import React, { useRef } from 'react'
// import Split from 'react-split'
// import { useState } from 'react'
// // import CodeMirror from '@uiw/react-codemirror'
// // import { vscodeDark } from '@uiw/codemirror-theme-vscode'
// // import { javascript } from '@codemirror/lang-javascript'
// import CodeOutputArea from './CodeOutputArea'
// import { Editor } from '@monaco-editor/react'
// import {BOILERPLATE} from './Boilerplate'

// import PlaygroundNav from '@/components/Workspace/Playground/PlaygroundNav/PlaygroundNav'

// function Playground() {
//   const [language, setLanguage] = useState("java");
//   const [output, setOutput] = useState(null);

//   const editorRef = useRef();

//   const editorOptions = {
//     fontSize: "18",
//     wordWrap: "on",
//   }

//   // const onChangeCode=(newCode)=>{
//   //   console.log("NEW CODE::",newCode);
//   // }
//   const onMount = (editor)=>{
//     editorRef.current = editor;
//     editor.focus();
//   };

//   // console.log("OUTPUT IN PLAYGROUND:",output);
//   return (
//     <div className=' border-green-500 flex flex-col bg-dark-layer-1 relative'>
//      <PlaygroundNav
//      language={language}
//      onChangeLanguage={setLanguage}
//      editorRef={editorRef}
//      setOutput={setOutput}
//      />

//      <Split className='h-[calc(100vh-96px)]' direction='vertical' sizes={[60,40]} minSize={60} snapOffset={0}>
//       <div className="w-full overflow-auto">
//         {/* <CodeMirror
//         value={boilerPlate}
//         theme={vscodeDark}
//         extensions={[javascript()]}
//         style={{fontSize:16}}
//         /> */}
//         <Editor 
//           language={language}
//           options={editorOptions}
//           theme='vs-dark'
//           // onChange={onChangeCode}
//           value={BOILERPLATE[language] || ''}
//           onMount={onMount}
//           />
//       </div>
//       <div className=' border-pink-500 w-full px-5 overflow-auto'>

//       <div>
//         <div className='flex flex-col h-full'>
//           <div className='input-output-container flex flex-col flex-1 mt-2 space-y-1'>
//             <div className='input-header text-white'>
//               <b>input:</b>
//             </div>
//             <textarea className='bg-dark-layer-2 text-white text-sm font-semibold resize-none p-1'></textarea>
//           </div>

//           {/* OUTPUT */}
//           <CodeOutputArea output={output}/>
            
//         </div>
//       </div>

//       </div>
//      </Split>

//     </div>
//   )
// }

// export default Playground