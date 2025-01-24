import App from "./App.svelte";

new App({
  target: document.body,
  props: {
    // What's your name?
    name: "Philipp Kaess",
    // In the following fields you can either give a single string,
    // or an array of bullet points

    // What do you associate with the term 'CI/CD'?
    associations: ["Continuous Integration / Continuous Development", "Testing"],
    // Which CI/CD tools do you use in your project?
    tools: "None",
    // What do you want to learn in this workshop?
    expectations: ["A basic idea of how CI/CD works, and when to use it."],
  },
});
