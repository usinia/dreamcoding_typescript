{
  type SuccessState = {
    result: "success";
  };
  type NetworkErrorState = {
    result: "fail";
    reason: "offfline" | "server down" | "timeout";
  };
  type ResultState = SuccessState | NetworkErrorState;

  class NetworkClient {
    tryConnect(): ResultState {
      console.log("try connect...");
      // 오류 발생 가능성을 handling 할 수 있는 경우, throw Error 를 남발하는 것보다 error state 를 정해서 처리하는 것이 좋다.
      //   throw new OfflineError("no network!!!");
      return { result: "fail", reason: "offfline" };
    }
  }

  class UserService {
    constructor(private client: NetworkClient) {}
    login() {
      this.client.tryConnect(); // error occurred
      // login...
    }
  }

  class App {
    constructor(private userService: UserService) {}
    run() {
      try {
        this.userService.login();
      } catch (error) {
        console.log("error occurred...");
        console.log("show dialog to user");
      }
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);
  const app = new App(service);
  app.run();
}
