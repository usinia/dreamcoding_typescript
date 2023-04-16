{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: "loading";
  };

  type SuccessState = {
    state: "success";
    response: {
      body: string;
    };
  };

  type FailState = {
    state: "fail";
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  printLoginState({ state: "loading" }); // 👀 loading...
  printLoginState({ state: "success", response: { body: "loaded" } }); // 😃 loaded
  printLoginState({ state: "fail", reason: "no network" }); // 😱 no network

  function printLoginState(state: ResourceLoadState): void {
    switch (state.state) {
      case "loading":
        console.log(`👀 ${state.state} ...`);
        return;
      case "success":
        console.log(`😃 ${state.response.body}`);
        return;
      case "fail":
        console.log(`😱 ${state.reason}`);
        return;
      default:
        throw new Error(`unkown state ${state}`);
    }
  }
}
