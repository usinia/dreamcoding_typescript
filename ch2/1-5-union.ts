/* 2-10 Union Type */
{
  /**
   * Union Types: OR
   */
  type Direction = "left" | "righht" | "up" | "down";
  function move(direction: Direction) {
    console.log(direction);
  }
  move("down");

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

  // function: login -> success, fail
  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FaileState = {
    reason: string;
  };
  type LoginState = SuccessState | FaileState;
  function login(id: string, password: string): Promise<LoginState> {
    return new Promise((resolve, reject) => {
      resolve({
        response: {
          body: "loggedd in!",
        },
      });
    });
  }

  // printLoginState(state: LoginState)
  // success -> 🎉 body
  // faile -> 😭 reason
}
