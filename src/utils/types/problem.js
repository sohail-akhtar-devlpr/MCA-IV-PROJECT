export type Example ={
  id:number;
  inputText:string;
  outputText:string;
  explanation?:String;
  img?:String;
}

export type Problem = {
  id:string;
  title:string;
  problemStatement:string;
  examples: Example[];
  constraints:string;
  order:number;
  starterCode:string;
  handlerFunction:( (fn:any)=>boolean ) | string;
  starterFunctionName:string;
}