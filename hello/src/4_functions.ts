// FUNCTIONS
// Using types
type CalTwoNumType = (x: number, y: number) => number;
// using interfaces
interface CalTwoNumInterface {
  (x: number, y: number): number;
}

// No need to pass types for args as we defined it for function
const addNumber: CalTwoNumInterface = (a, b) => {
  return a + b;
};

// this is also valid, but confusing syntax
const addNumberSecond: (a: number, b: number) => number = (a, b) => {
  return a + b;
};

// VOID v/s UNDEFINED
// Can return any type if return type is void
const printMessage: () => void = () => {
  return "Hello";
};
// Its discourages to use return type of void function
const message = printMessage();
console.log(message);

// Returning any type when return type is undefined will give error
const printMessageSecond: () => undefined = () => {
  return "Hello";
};

// FUNCTION OVERLOAD
type FormSubmitHandler = (formData: FormData) => void;
type MessageSubmitHandler = (message: MessageEvent) => void;

// Creating generic callback for message or form event
type SubmitCallback = (
  element: HTMLFormElement | HTMLIFrameElement,
  callback: FormSubmitHandler | MessageSubmitHandler
) => void;
// In the above implmentation user can mix and match Form element with MessageSubmit handler
// which can create any issue
// NOTE this is an function implmenetation
const onSubmit: SubmitCallback = (element, callbackj) => {};

// To avoid above issue we can do somehting like
// NOTE this is just declartion not imple
function onSubmitImprove(element: HTMLFormElement, callback: FormSubmitHandler)
function onSubmitImprove(element: HTMLIFrameElement, callback: MessageSubmitHandler)
// here we will be having actual implementation
function onSubmitImprove(element, callback){}