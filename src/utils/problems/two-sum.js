//COMMENTED FOR PRACTICE PURPOSE, DO NOT DELETE THIS
// import assert from 'assert';

// export type Example ={
//   id:number;
//   inputText:string;
//   outputText:string;
//   explanation?:String;
//   img?:String;
// }

// export type Problem = {
//   id:string;
//   title:string;
//   problemStatement:string;
//   examples: Example[];
//   constraints:string;
//   order:number;
//   starterCode:string;
//   handlerFunction:( (fn:any)=>boolean ) | string;
//   starterFunctionName:string;
// }

// export const twoSum: Problem={
//   id:"two-sum",
//   title:"1. Two Sum",
//   problemStatement:"",
//   examples:[
//     {
//       id:1,
//       inputText:"nums=[2,7,11,15], target=9",
//       outputText:"[0,1]",
//       explanation:"because nums[0] + nums[1]==9, we return [0,1]."
//     },
//     {
//       id:2,
//       inputText:"nums=[3,2,4], target=6",
//       outputText:"[1,2]",
//       explanation:"because nums[1] + nums[2]==6, we return [1,2]."
//     },
//     {
//       id:3,
//       inputText:"nums=[3,3], target=6",
//       outputText:"[0,1]",
//     },
//   ],
//   constraints:"",
//   handlerFunction:()=>true,
//   starterCode:"",
//   order:1,
//   starterFunctionName:"function twoSum(",
// };


import assert from 'assert';
import {Problem} from '../types/problem'

// export type Example ={
//   id:number;
//   inputText:string;
//   outputText:string;
//   explanation?:String;
//   img?:String;
// }

// export type Problem = {
//   id:string;
//   title:string;
//   problemStatement:string;
//   examples: Example[];
//   constraints:string;
//   order:number;
//   starterCode:string;
//   handlerFunction:( (fn:any)=>boolean ) | string;
//   starterFunctionName:string;
// }

const starterCodeTwoSum = `function twoSum(nums, target){
  //write your code here
};`;


//checks if the user has the correct code
const handlerTwoSum = (fn:any)=>{
  //fn is the callback that user's code is passed into
  try {
    const nums = [
      [2,7,11,15],
      [3,2,4],
      [3,3],
    ];

    const targets = [9,6,6];

    const answers = [
      [0,1],
      [1,2],
      [0,1],
    ];

    //loop all test cases to check if the user's code is correct
    for(let i=0; i<nums.length; i++){
      //we will get the result from users code
      const result = fn(nums[i],targets[i]);
      //answers is the expected output
      assert.deepStrictEqual(result,answers[i]);
    }
    return true;
  } catch (error) {
    console.log("two sum handler function error");
    throw new Error(error);
  }
}

export const twoSum: Problem={
  id:"two-sum",
  title:"1. Two Sum",
  problemStatement:`<p class='mt-3'>
  Given an array of integers <code>nums</code> and an integer <code>target</code>, return
  <em>indices of the two numbers such that they add up to</em> <code>target</code>.
</p>
<p class='mt-3'>
  You may assume that each input would have <strong>exactly one solution</strong>, and you
  may not use thesame element twice.
</p>
<p class='mt-3'>You can return the answer in any order.</p>`,
  examples:[
    {
      id:1,
      inputText:"nums=[2,7,11,15], target=9",
      outputText:"[0,1]",
      explanation:"because nums[0] + nums[1]==9, we return [0,1]."
    },
    {
      id:2,

      inputText:"nums=[3,2,4], target=6",
      outputText:"[1,2]",
      explanation:"because nums[1] + nums[2]==6, we return [1,2]."
    },
    {
      id:3,
      inputText:"nums=[3,3], target=6",
      outputText:"[0,1]",
    },
  ],
  constraints:`<li class='mt-2'>
  <code>2 ≤ nums.length ≤ 10</code>
</li>

<li class='mt-2'>
  <code>-10 ≤ nums[i] ≤ 10</code>
</li>
<li class='mt-2'>
  <code>-10 ≤ target ≤ 10</code>
</li>
<li class='mt-2 text-sm'>
  <strong>Only one valid answer exists.</strong>
</li>`,
  handlerFunction:handlerTwoSum,
  starterCode:starterCodeTwoSum,
  order:1,
  starterFunctionName:"function twoSum(",
};