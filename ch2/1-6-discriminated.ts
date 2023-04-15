/* 2.11 필수 타입 Discriminated Union */
{
  // function: login -> success, fail
  type SuccessState = {
    result: "success";
    response: {
      body: string;
    };
  };
  type FaileState = {
    result: "fail";
    reason: string;
  };
  type LoginState = SuccessState | FaileState;
  function login(id: string, password: string): Promise<LoginState> {
    return new Promise((resolve, reject) => {
      resolve({
        result: "success",
        response: {
          body: "loggedd in!",
        },
        // result: "fail",
        // reason: "fail",
      });
    });
  }

  // printLoginState(state: LoginState)
  // success -> 🎉 body
  // faile -> 😭 reason
  function printLoginState(state: LoginState): void {
    if (state.result === "success") {
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`😭 ${state.reason}`);
    }
  }
}
