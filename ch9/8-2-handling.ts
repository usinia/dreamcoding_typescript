{
  class TimeoutError extends Error {}
  class OfflineError extends Error {}

  class NetworkClient {
    tryConnect(): void {
      throw new OfflineError("no network!!!");
    }
  }

  class UserService {
    constructor(private client: NetworkClient) {}
    login() {
      this.client.tryConnect(); // error occurred
      // errorr 가 발생했을 때 무언가 처리할 수 있는게 아니라면 (어정쩡하게 catch 하는 것보다) catch를 하지 않는 것이 더 낫다.
      // login...
    }
  }

  //   const client = new NetworkClient();
  //   const service = new UserService(client);
  //   service.login();

  class App {
    constructor(private userService: UserService) {}
    run() {
      // application level 에서 처리하는 것이 더 좋다.
      try {
        this.userService.login();
      } catch (error) {
        // any type 이기 때문에 error instanceOf OfflineError 형식으로 사용할 수 없음
        //show dialog to user
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
