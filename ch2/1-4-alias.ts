/* 2.9 Type Alias */
{
  /**
   * Type Aliases
   */
  type Text = string;
  const name: Text = "usinia";
  const address: Text = "korea";
  type Num = number;
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: "usinia",
    age: 30,
  };

  /**
   * String Literal Types
   */
  type Name = "name";
  let usiniaName: Name;
  usiniaName = "name";
  type JSON = "json";
  const json: JSON = "json";
  type Boal = true;
  const isCat: Boal = true;
}
